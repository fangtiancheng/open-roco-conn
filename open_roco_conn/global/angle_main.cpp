#include "angle_main.hpp"
#include "base/define.hpp"
#include "global_api.hpp"
#include "websock/angel_tcp_connection.hpp"
#include <boost/asio/co_spawn.hpp>
#include <boost/asio/detached.hpp>
#include <boost/asio/steady_timer.hpp>
#include <boost/asio/use_awaitable.hpp>
#include <chrono>
#include <iostream>
#include <utility>

using namespace std::chrono_literals;

void AngleMain::set_on_initialize(hook callback) {
    on_initialize_ = std::move(callback);
}

void AngleMain::set_on_logined(hook callback) {
    on_logined_ = std::move(callback);
}

void AngleMain::set_on_network_closed(hook callback) {
    on_network_closed_ = std::move(callback);
}

void AngleMain::set_on_refresh_html(hook callback) {
    on_refresh_html_ = std::move(callback);
}

void AngleMain::initialize() {
    if (initialized_) {
        return;
    }

    GlobalAPI::init();
    initialized_ = true;
    stop_async_.store(false);

    io_context_.restart();
    work_guard_.emplace(boost::asio::make_work_guard(io_context_));
    web_socket_client_.set_name("AngleMain-WebSocketClient");

    io_thread_ = std::thread([this]() {
        io_context_.run();
    });
    boost::asio::co_spawn(io_context_, async_bootstrap(), boost::asio::detached);

    if (on_initialize_) {
        on_initialize_();
    }
}

void AngleMain::on_logined() {
    GlobalAPI::set_is_login(true);
    if (on_logined_) {
        on_logined_();
    }
}

void AngleMain::on_system_net_closed() {
    if (on_network_closed_) {
        on_network_closed_();
    }
}

void AngleMain::reflash_html() {
    if (on_refresh_html_) {
        on_refresh_html_();
    }
}

void AngleMain::set_render(const bool value) {
    is_render_ = value;
}

bool AngleMain::get_is_render() const {
    return is_render_;
}

bool AngleMain::is_initialized() const {
    return initialized_;
}

void AngleMain::finalize() {
    stop_async_.store(true);
    web_socket_client_.disconnect();
    if (work_guard_.has_value()) {
        work_guard_->reset();
        work_guard_.reset();
    }
    io_context_.stop();
    if (io_thread_.joinable()) {
        io_thread_.join();
    }

    initialized_ = false;
    is_render_ = true;
    GlobalAPI::set_is_login(false);
}

boost::asio::awaitable<void> AngleMain::async_bootstrap() {
    const bool connected = co_await web_socket_client_.connect_async(std::string(AngelTcpConnection::HOST));
    if (!connected || stop_async_.load()) {
        on_system_net_closed();
        co_return;
    }

    boost::asio::co_spawn(io_context_, web_socket_client_.heartbeat_loop(), boost::asio::detached);
    boost::asio::co_spawn(io_context_, recv_loop(), boost::asio::detached);
    co_return;
}

boost::asio::awaitable<void> AngleMain::recv_loop() {
    while (!stop_async_.load()) {
        auto bytes = co_await web_socket_client_.recv_async();
        if (bytes.empty()) {
            boost::asio::steady_timer timer(io_context_);
            timer.expires_after(20ms);
            co_await timer.async_wait(boost::asio::use_awaitable);
            continue;
        }
        if (Define::IS_DEBUG) {
            std::cout << "[AngleMain] recv packet bytes: " << bytes.size() << std::endl;
        }
    }
    co_return;
}
