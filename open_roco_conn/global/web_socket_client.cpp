#include "web_socket_client.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "global_timer.hpp"
#include <chrono>
#include <iostream>
#include <utility>

WebSocketClient::WebSocketClient() {
    GlobalTimer::init();
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

void WebSocketClient::set_send_callback(send_callback callback) {
    std::lock_guard<std::mutex> lock(mutex_);
    send_callback_ = std::move(callback);
}

void WebSocketClient::set_message_callback(message_callback callback) {
    std::lock_guard<std::mutex> lock(mutex_);
    message_callback_ = std::move(callback);
}

void WebSocketClient::connect(const std::string &url) {
    std::lock_guard<std::mutex> lock(mutex_);
    url_ = url;
    state_ = state::connecting;

    std::cout << "tcp reconnect WebSocketClient\n"
              << "connect : " << name_ << "\n"
              << "url: " << url_ << std::endl;

    state_ = state::connected;

    auto& timer = GlobalTimer::instance();
    timer.unregister_timer(std::string(timer_websocket_client));
    timer.register_timer(
        std::string(timer_websocket_client),
        std::chrono::milliseconds(5000),
        [this]() { say_hello(); },
        false,
        true
    );
}

void WebSocketClient::disconnect() {
    {
        std::lock_guard<std::mutex> lock(mutex_);
        state_ = state::disconnected;
    }
    GlobalTimer::instance().unregister_timer(std::string(timer_websocket_client));
}

void WebSocketClient::send(const std::vector<uint8_t>& payload, const uint32_t cmd_id) {
    send_callback send_callback_copy;
    state current_state;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        current_state = state_;
        send_callback_copy = send_callback_;
    }

    if (current_state != state::connected) {
        return;
    }
    if (send_callback_copy) {
        send_callback_copy(payload, cmd_id);
        return;
    }

    std::cout << "cmd=0x" << std::hex << cmd_id << std::dec
              << " send bytes: " << payload.size() << std::endl;
}

void WebSocketClient::on_message(const std::vector<uint8_t>& payload) {
    message_callback callback;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        callback = message_callback_;
    }
    if (callback) {
        callback(payload);
    }
}

void WebSocketClient::say_hello() {
    if (connection_state() != state::connected) {
        return;
    }

    std::cout << "say_hello... " << name() << std::endl;
    send({}, ADFCmdsType::T_HELLO);
}

WebSocketClient::state WebSocketClient::connection_state() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return state_;
}
