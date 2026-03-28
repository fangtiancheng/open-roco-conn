#include "web_socket_client.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include <boost/asio/steady_timer.hpp>
#include <boost/asio/this_coro.hpp>
#include <boost/asio/use_awaitable.hpp>
#include <chrono>
#include <iostream>

using namespace std::chrono_literals;

WebSocketClient::WebSocketClient() {
}

WebSocketClient::~WebSocketClient() {
    disconnect();
}

void WebSocketClient::set_name(const std::string& name) {
    std::lock_guard<std::mutex> lock(mutex_);
    name_ = name;
}

std::string WebSocketClient::name() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return name_;
}

boost::asio::awaitable<bool> WebSocketClient::connect_async(std::string url) {
    auto executor = co_await boost::asio::this_coro::executor;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        url_ = std::move(url);
        state_ = state::connecting;
        stop_heartbeat_.store(false);
        debug_line(std::format("tcp connect: {}, url: {}", name_, url_));
    }

    tcp_connection_.set_executor(executor);
    tcp_connection_.connect(url_, AngelTcpConnection::PORT);

    boost::asio::steady_timer timer(executor);
    timer.expires_after(1ms);
    co_await timer.async_wait(boost::asio::use_awaitable);

    {
        std::lock_guard<std::mutex> lock(mutex_);
        state_ = tcp_connection_.is_connected() ? state::connected : state::disconnected;
    }
    co_return tcp_connection_.is_connected();
}

void WebSocketClient::disconnect() {
    std::lock_guard<std::mutex> lock(mutex_);
    state_ = state::disconnected;
    stop_heartbeat_.store(true);
    tcp_connection_.close();
}

boost::asio::awaitable<void> WebSocketClient::send_async(std::vector<uint8_t> payload, const uint32_t cmd_id) {
    auto executor = co_await boost::asio::this_coro::executor;
    boost::asio::steady_timer timer(executor);
    state current_state;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        current_state = state_;
    }

    if (current_state != state::connected) {
        co_return;
    }

    timer.expires_after(1ms);
    co_await timer.async_wait(boost::asio::use_awaitable);

    ADF adf;
    adf.head.cmd_id = cmd_id;
    adf.body.allocate(payload.size());
    for (const uint8_t byte : payload) {
        adf.body.write_unsigned_byte(byte);
    }
    adf.body.reset();
    auto sent = tcp_connection_.send_data(adf);
    debug_line(std::format("cmd=0x{:#x} send bytes: {}", cmd_id, sent.size()));
    co_return;
}

boost::asio::awaitable<void> WebSocketClient::send_adf_async(const ADF& adf) {
    auto executor = co_await boost::asio::this_coro::executor;
    boost::asio::steady_timer timer(executor);
    state current_state;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        current_state = state_;
    }

    if (current_state != state::connected) {
        co_return;
    }

    timer.expires_after(1ms);
    co_await timer.async_wait(boost::asio::use_awaitable);

    ADF copy = adf;
    auto sent = tcp_connection_.send_data(copy);
    debug_line(std::format("cmd=0x{:#x} send bytes: {}", adf.head.cmd_id, sent.size()));
    co_return;
}

boost::asio::awaitable<std::vector<uint8_t>> WebSocketClient::recv_async() {
    while (true) {
        ADF adf;
        if (tcp_connection_.try_pop_adf(adf)) {
            co_return serialize_adf(adf);
        }

        {
            std::lock_guard<std::mutex> lock(mutex_);
            if (state_ != state::connected) {
                co_return std::vector<uint8_t>{};
            }
        }
        if (!tcp_connection_.recv_once()) {
            std::lock_guard<std::mutex> lock(mutex_);
            state_ = state::disconnected;
            co_return std::vector<uint8_t>{};
        }
    }
}

boost::asio::awaitable<void> WebSocketClient::heartbeat_loop() {
    auto executor = co_await boost::asio::this_coro::executor;
    boost::asio::steady_timer timer(executor);
    while (!stop_heartbeat_.load()) {
        timer.expires_after(5s);
        co_await timer.async_wait(boost::asio::use_awaitable);
        if (connection_state() != state::connected || stop_heartbeat_.load()) {
            break;
        }
        std::cout << "say_hello... " << name() << std::endl;
        co_await send_async({}, ADFCmdsType::T_HELLO);
    }
}

void WebSocketClient::push_incoming(std::vector<uint8_t> payload) {
    ByteArray packet;
    packet.allocate(payload.size());
    for (const uint8_t byte : payload) {
        packet.write_unsigned_byte(byte);
    }
    packet.reset();

    auto ret = tcp_connection_.on_message(packet, false);
    if (!ret.has_value()) {
        std::cerr << "[WebSocketClient] push_incoming parse failed: " << ret.error() << std::endl;
    }
}

WebSocketClient::state WebSocketClient::connection_state() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return state_;
}

std::vector<uint8_t> WebSocketClient::serialize_adf(const ADF& adf) {
    ByteArray packet;
    packet.allocate();
    ADF copy = adf;
    copy.write_external(packet);
    packet.reset();

    std::vector<uint8_t> bytes;
    bytes.reserve(packet.length());
    while (packet.bytes_available() > 0) {
        bytes.push_back(packet.read_unsigned_byte());
    }
    return bytes;
}
