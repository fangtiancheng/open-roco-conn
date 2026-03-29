#pragma once
#include "base/rf_base.hpp"
#include "event/callback_center.hpp"
#include "event/event_dispatcher.hpp"
#include "event/event_key.hpp"
#include "websock/angel_tcp_connection.hpp"
#include <atomic>
#include <chrono>
#include <mutex>
#include <string>
#include <utility>
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

    WebSocketClient();
    ~WebSocketClient() override;

    void set_name(const std::string& name);
    void set_notify_dispatcher(EventDispatcher* dispatcher);
    void set_callback_center(CallbackCenter* callback_center);
    std::string name() const;
    template <typename Callback>
    std::size_t add_tcp_event_listener(EventKey event_key, Callback&& callback) {
        std::lock_guard<std::mutex> lock(mutex_);
        return tcp_connection_.add_event_listener<void>(event_key, std::forward<Callback>(callback));
    }
    bool remove_tcp_event_listener(EventKey event_key, std::size_t callback_id);

    bool connect(std::string url);
    void disconnect();
    bool send(std::vector<uint8_t> payload, uint32_t cmd_id = 0);
    bool send_adf(const ADF& adf);
    bool recv_once();
    uint32_t tcp_id() const;
    bool try_pop_adf(ADF& out_adf);
    void heartbeat_tick();
    void push_incoming(std::vector<uint8_t> payload);

    state connection_state() const;

private:
    std::string name_ = "WebSocketClient";
    std::string url_;
    state state_ = state::disconnected;
    std::atomic<bool> stop_heartbeat_{false};
    AngelTcpConnection tcp_connection_{1};
    std::chrono::steady_clock::time_point last_heartbeat_{};
    std::chrono::milliseconds heartbeat_interval_{5000};
    mutable std::mutex mutex_;
};
