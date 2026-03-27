#pragma once
#include "base/rf_base.hpp"
#include "angle_event_manager.hpp"
#include "web_socket_client.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/asio/executor_work_guard.hpp>
#include <boost/asio/io_context.hpp>
#include <atomic>
#include <functional>
#include <memory>
#include <optional>
#include <thread>

class AngleWorld;

class AngleMain: public RFBase {
public:
    const std::string_view get_param1() override { return "2eed9bO4G9B7K1RA/KD/KcW"; }
    const std::string_view get_param2() override { return "AngleMain"; }

    using hook = std::function<void()>;

    void set_on_initialize(hook callback);
    void set_on_logined(hook callback);
    void set_on_network_closed(hook callback);
    void set_on_refresh_html(hook callback);

    void initialize();
    void on_logined();
    void on_system_net_closed();
    void reflash_html();
    void set_render(bool value);
    bool get_is_render() const;
    bool is_initialized() const;
    void finalize();

    // Headless API surface:
    // available in connector mode.
    EventDispatcher& get_g_event_api();
    WebSocketClient& get_net_sys_api();
    AngleWorld& get_world_api() const;
    // unavailable in connector mode (render/UI dependent).
    [[noreturn]] void get_ui_sys_api() const;
    [[noreturn]] void get_res_sys_api() const;
    [[noreturn]] void get_media_sys_api() const;
    [[noreturn]] void get_external_api() const;

private:
    boost::asio::awaitable<void> async_bootstrap();
    boost::asio::awaitable<void> recv_loop();

    bool initialized_ = false;
    bool is_render_ = true;
    std::atomic<bool> stop_async_{false};
    hook on_initialize_;
    hook on_logined_;
    hook on_network_closed_;
    hook on_refresh_html_;
    std::unique_ptr<AngleWorld> world_{};
    AngleEventManager angle_event_manager_{};
    WebSocketClient web_socket_client_{};
    boost::asio::io_context io_context_{};
    std::optional<boost::asio::executor_work_guard<boost::asio::io_context::executor_type>> work_guard_{};
    std::thread io_thread_{};
};
