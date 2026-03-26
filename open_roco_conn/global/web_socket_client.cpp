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
        std::cout << "tcp reconnect WebSocketClient\n"
                  << "connect : " << name_ << "\n"
                  << "url: " << url_ << std::endl;
    }
    boost::asio::steady_timer timer(executor);
    timer.expires_after(1ms);
    co_await timer.async_wait(boost::asio::use_awaitable);

    {
        std::lock_guard<std::mutex> lock(mutex_);
        state_ = state::connected;
    }
    co_return true;
}

void WebSocketClient::disconnect() {
    std::lock_guard<std::mutex> lock(mutex_);
    state_ = state::disconnected;
    stop_heartbeat_.store(true);
    incoming_queue_.clear();
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

    std::cout << "cmd=0x" << std::hex << cmd_id << std::dec
              << " send bytes: " << payload.size() << std::endl;
    co_return;
}

boost::asio::awaitable<std::vector<uint8_t>> WebSocketClient::recv_async() {
    auto executor = co_await boost::asio::this_coro::executor;
    boost::asio::steady_timer timer(executor);
    while (true) {
        {
            std::lock_guard<std::mutex> lock(mutex_);
            if (!incoming_queue_.empty()) {
                std::vector<uint8_t> payload = std::move(incoming_queue_.front());
                incoming_queue_.pop_front();
                co_return payload;
            }
            if (state_ != state::connected) {
                co_return std::vector<uint8_t>{};
            }
        }

        timer.expires_after(20ms);
        co_await timer.async_wait(boost::asio::use_awaitable);
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
    std::lock_guard<std::mutex> lock(mutex_);
    incoming_queue_.push_back(std::move(payload));
}

WebSocketClient::state WebSocketClient::connection_state() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return state_;
}
