#pragma once
#include "base/rf_base.hpp"
#include "angle_event_manager.hpp"
#include "event/callback_center.hpp"
#include "event/angle_sys_event.hpp"
#include "global_api.hpp"
#include "global_timer.hpp"
#include "global/user_data.hpp"
#include "login/server_info.hpp"
#include "receiver/login_receiver.hpp"
#include "websock/angel_net_system.hpp"
#include "world/angle_world.hpp"
#include "web_socket_client.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/asio/executor_work_guard.hpp>
#include <boost/asio/io_context.hpp>
#include <atomic>
#include <cstddef>
#include <functional>
#include <memory>
#include <optional>
#include <thread>

class AngleMain: public RFBase {
public:
    const std::string_view get_param1() const override { return "2eed9bO4G9B7K1RA/KD/KcW"; }
    const std::string_view get_param2() const override { return "AngleMain"; }
    ~AngleMain() override;

    using hook = std::function<void()>;

    void set_on_initialize(hook callback);
    void set_on_logined(hook callback);
    void set_on_network_closed(hook callback);
    void set_on_refresh_html(hook callback);
    void set_bootstrap_user_data(const UserData& data);
    void set_bootstrap_room_id(uint16_t room_id);
    void set_global_api(GlobalAPI* global_api);
    void set_global_timer(GlobalTimer* global_timer);
    void set_callback_center(CallbackCenter* callback_center);
    const UserData& user_data() const;

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
    void on_login_ok_event();
    void on_net_state_change_event();
    void on_tcp_closed_or_error();

    bool initialized_ = false;
    bool is_render_ = true;
    std::atomic<bool> stop_async_{false};
    hook on_initialize_;
    hook on_logined_;
    hook on_network_closed_;
    hook on_refresh_html_;
    UserData user_data_{};
    uint16_t bootstrap_room_id_ = 0;
    GlobalAPI* global_api_ = nullptr;
    GlobalTimer* global_timer_ = nullptr;
    CallbackCenter* callback_center_ = nullptr;
    std::unique_ptr<AngleWorld> world_{};
    LoginReceiver login_receiver_{};
    AngleEventManager angle_event_manager_{};
    AngelNetSystem net_system_{};
    WebSocketClient web_socket_client_{};
    std::size_t login_ok_listener_id_ = 0;
    std::size_t net_state_listener_id_ = 0;
    boost::asio::io_context io_context_{};
    std::optional<boost::asio::executor_work_guard<boost::asio::io_context::executor_type>> work_guard_{};
    std::thread io_thread_{};
};
