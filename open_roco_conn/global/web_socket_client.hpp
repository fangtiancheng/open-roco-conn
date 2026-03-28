#pragma once
#include "base/rf_base.hpp"
#include "event/callback_center.hpp"
#include "event/event_dispatcher.hpp"
#include "global/user_data.hpp"
#include "websock/angel_tcp_connection.hpp"
#include <boost/asio/awaitable.hpp>
#include <atomic>
#include <cstddef>
#include <cstdint>
#include <mutex>
#include <string>
#include <vector>


class WebSocketClient: public RFBase {
public:
    const std::string_view get_param1() const override { return "fd464cY86lGjqqwe3VhpPwX"; }
    const std::string_view get_param2() const override { return "WebSocketClient"; }

    enum class state : uint8_t {
        disconnected = 0,
        connecting = 1,
        connected = 2
    };

    static constexpr std::string_view timer_websocket_client = "web_socket_client_timer";
    struct login_req_context {
        UserData user_data{};
        uint16_t room_id = 0;
        uint32_t ui_serial_num = 1;
    };

    WebSocketClient();
    ~WebSocketClient() override;

    void set_name(const std::string& name);
    void set_notify_dispatcher(EventDispatcher* dispatcher);
    void set_callback_center(CallbackCenter* callback_center);
    std::string name() const;
    std::size_t add_tcp_event_listener(const std::string& event_type, EventDispatcher::event_callback callback);
    bool remove_tcp_event_listener(const std::string& event_type, std::size_t callback_id);
    bool mark_login_req_listeners_registered();
    void set_login_req_context(const UserData& user_data, uint16_t room_id, uint32_t ui_serial_num);
    login_req_context get_login_req_context() const;
    bool try_open_login_req_close_guard();
    void reset_login_req_close_guard();

    boost::asio::awaitable<bool> connect_async(std::string url);
    void disconnect();
    boost::asio::awaitable<void> send_async(std::vector<uint8_t> payload, uint32_t cmd_id = 0);
    boost::asio::awaitable<void> send_adf_async(const ADF& adf);
    bool send_adf_now(const ADF& adf);
    boost::asio::awaitable<std::vector<uint8_t>> recv_async();
    boost::asio::awaitable<void> heartbeat_loop();
    void push_incoming(std::vector<uint8_t> payload);

    state connection_state() const;

private:
    static std::vector<uint8_t> serialize_adf(const ADF& adf);

    std::string name_ = "WebSocketClient";
    std::string url_;
    state state_ = state::disconnected;
    std::atomic<bool> stop_heartbeat_{false};
    AngelTcpConnection tcp_connection_{};
    login_req_context login_req_ctx_{};
    bool login_req_listeners_registered_ = false;
    bool login_req_close_guard_opened_ = false;
    mutable std::mutex mutex_;
};
