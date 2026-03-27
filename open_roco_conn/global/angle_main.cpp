#include "angle_main.hpp"
#include "adf_protocol/adf.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "base/define.hpp"
#include "global_api.hpp"
#include "websock/angel_tcp_connection.hpp"
#include "world/angle_world.hpp"
#include <boost/asio/co_spawn.hpp>
#include <boost/asio/detached.hpp>
#include <boost/asio/steady_timer.hpp>
#include <boost/asio/use_awaitable.hpp>
#include <chrono>
#include <exception>
#include <iostream>
#include <memory>
#include <stdexcept>
#include <utility>

using namespace std::chrono_literals;

AngleMain::~AngleMain() = default;

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

void AngleMain::set_bootstrap_user_data(const UserData& data) {
    user_data_ = data;
}

const UserData& AngleMain::user_data() const {
    return user_data_;
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
    if (GlobalAPI::is_login()) {
        return;
    }
    GlobalAPI::set_is_login(true);

    world_ = std::make_unique<AngleWorld>();
    world_->initialize(angle_event_manager_.angel_event_dispatcher());

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
    angle_event_manager_.set_render_timer(value);
}

bool AngleMain::get_is_render() const {
    return is_render_;
}

bool AngleMain::is_initialized() const {
    return initialized_;
}

EventDispatcher& AngleMain::get_g_event_api() {
    return angle_event_manager_.angel_event_dispatcher();
}

WebSocketClient& AngleMain::get_net_sys_api() {
    return web_socket_client_;
}

AngleWorld& AngleMain::get_world_api() const {
    if (!world_) {
        throw std::runtime_error("AngleMain::get_world_api: world is not available before login");
    }
    return *world_;
}

void AngleMain::get_ui_sys_api() const {
    throw std::runtime_error("AngleMain::get_ui_sys_api: UI API is unavailable in headless connector mode");
}

void AngleMain::get_res_sys_api() const {
    throw std::runtime_error("AngleMain::get_res_sys_api: resource API is unavailable in headless connector mode");
}

void AngleMain::get_media_sys_api() const {
    throw std::runtime_error("AngleMain::get_media_sys_api: media API is unavailable in headless connector mode");
}

void AngleMain::get_external_api() const {
    throw std::runtime_error("AngleMain::get_external_api: external API is unavailable in headless connector mode");
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

    if (world_) {
        world_->finalize();
        world_.reset();
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
            on_system_net_closed();
            break;
        }

        ByteArray packet;
        packet.allocate(bytes.size());
        for (const auto byte : bytes) {
            packet.write_unsigned_byte(byte);
        }
        packet.reset();

        ADF adf;
        try {
            adf.read_external(packet);
        } catch (const std::exception& ex) {
            if (Define::IS_DEBUG) {
                std::cerr << "[AngleMain] parse adf failed: " << ex.what() << std::endl;
            }
            continue;
        }

        const uint32_t cmd_type = adf.head.cmd_id;
        if (cmd_type == ADFCmdsType::T_LoginRoom) {
            on_logined();
        }
        if (world_) {
            world_->data_receiver().receive(cmd_type);
        }

        if (Define::IS_DEBUG) {
            std::cout << "[AngleMain] recv packet cmd=0x" << std::hex << cmd_type
                      << std::dec << " bytes=" << bytes.size() << std::endl;
        }
    }
    co_return;
}
