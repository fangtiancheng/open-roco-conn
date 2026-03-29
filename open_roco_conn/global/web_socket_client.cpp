#include "web_socket_client.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "websock/linger_tcp_connection.hpp"
#include <boost/asio/system_executor.hpp>
#include <chrono>
#include <format>
#include <iostream>

WebSocketClient::WebSocketClient(const uint32_t tcp_id) {
    tcp_connection_ = std::make_unique<LingerTcpConnection>(tcp_id);
}

WebSocketClient::~WebSocketClient() {
    disconnect();
}

void WebSocketClient::set_name(const std::string& name) {
    std::lock_guard<std::mutex> lock(mutex_);
    name_ = name;
}

void WebSocketClient::set_notify_dispatcher(EventDispatcher* dispatcher) {
    std::lock_guard<std::mutex> lock(mutex_);
    if (tcp_connection_ != nullptr) {
        tcp_connection_->set_notify_dispatcher(dispatcher);
    }
}

void WebSocketClient::set_callback_center(CallbackCenter* callback_center) {
    std::lock_guard<std::mutex> lock(mutex_);
    if (tcp_connection_ != nullptr) {
        tcp_connection_->set_callback_center(callback_center);
    }
}

std::string WebSocketClient::name() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return name_;
}

bool WebSocketClient::remove_tcp_event_listener(const EventKey event_key, const std::size_t callback_id) {
    std::lock_guard<std::mutex> lock(mutex_);
    if (tcp_connection_ == nullptr) {
        return false;
    }
    return tcp_connection_->remove_event_listener(event_key, callback_id);
}

bool WebSocketClient::connect(std::string url) {
    {
        std::lock_guard<std::mutex> lock(mutex_);
        url_ = std::move(url);
        state_ = state::connecting;
        stop_heartbeat_.store(false);
        last_heartbeat_ = std::chrono::steady_clock::now();
        debug_line(std::format("tcp connect: {}, url: {}", name_, url_));
    }

    if (tcp_connection_ == nullptr) {
        return false;
    }

    tcp_connection_->set_executor(boost::asio::system_executor{});
    tcp_connection_->connect(url_, AngelTcpConnection::PORT);

    {
        std::lock_guard<std::mutex> lock(mutex_);
        state_ = tcp_connection_->is_connected() ? state::connected : state::disconnected;
    }
    return tcp_connection_->is_connected();
}

void WebSocketClient::disconnect() {
    {
        std::lock_guard<std::mutex> lock(mutex_);
        state_ = state::disconnected;
        stop_heartbeat_.store(true);
    }
    // close() may synchronously dispatch TCPCONN_CLOSED listeners. Avoid holding
    // WebSocketClient::mutex_ here to prevent re-entrant deadlock.
    if (tcp_connection_ != nullptr) {
        tcp_connection_->close();
    }
}

bool WebSocketClient::send(std::vector<uint8_t> payload, const uint32_t cmd_id) {
    state current_state;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        current_state = state_;
    }

    if (current_state != state::connected) {
        return false;
    }

    ADF adf;
    adf.head.cmd_id = cmd_id;
    adf.body.allocate(payload.size());
    for (const uint8_t byte : payload) {
        adf.body.write_unsigned_byte(byte);
    }
    adf.body.reset();
    if (tcp_connection_ == nullptr) {
        return false;
    }
    auto sent = tcp_connection_->send_data(adf);
    debug_line(std::format("cmd={:#x} send bytes: {}", cmd_id, sent.size()));
    return !sent.empty();
}

bool WebSocketClient::send_adf(const ADF& adf) {
    state current_state;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        current_state = state_;
    }

    if (current_state != state::connected) {
        return false;
    }

    ADF copy = adf;
    if (tcp_connection_ == nullptr) {
        return false;
    }
    auto sent = tcp_connection_->send_data(copy);
    debug_line(std::format("cmd={:#x} send bytes: {}", adf.head.cmd_id, sent.size()));
    return !sent.empty();
}

bool WebSocketClient::recv_once() {
    if (tcp_connection_ == nullptr) {
        return false;
    }
    return tcp_connection_->recv_once();
}

uint32_t WebSocketClient::tcp_id() const {
    if (tcp_connection_ == nullptr) {
        return 0;
    }
    return tcp_connection_->get_id();
}

AngelTcpConnection* WebSocketClient::tcp_proxy() {
    return tcp_connection_.get();
}

bool WebSocketClient::try_pop_adf(ADF& out_adf) {
    if (tcp_connection_ == nullptr) {
        return false;
    }
    return tcp_connection_->try_pop_adf(out_adf);
}

void WebSocketClient::heartbeat_tick() {
    if (stop_heartbeat_.load() || connection_state() != state::connected) {
        return;
    }
    const auto now = std::chrono::steady_clock::now();
    if (now - last_heartbeat_ < heartbeat_interval_) {
        return;
    }
    last_heartbeat_ = now;
    std::cout << "say_hello... " << name() << std::endl;
    (void) send({}, ADFCmdsType::T_HELLO);
}

void WebSocketClient::push_incoming(std::vector<uint8_t> payload) {
    ByteArray packet;
    packet.allocate(payload.size());
    for (const uint8_t byte : payload) {
        packet.write_unsigned_byte(byte);
    }
    packet.reset();

    if (tcp_connection_ == nullptr) {
        return;
    }
    auto ret = tcp_connection_->on_message(packet, false);
    if (!ret.has_value()) {
        std::cerr << "[WebSocketClient] push_incoming parse failed: " << ret.error() << std::endl;
    }
}

WebSocketClient::state WebSocketClient::connection_state() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return state_;
}
