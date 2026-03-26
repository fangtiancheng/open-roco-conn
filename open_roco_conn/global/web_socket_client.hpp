#pragma once
#include "base/rf_base.hpp"
#include <boost/asio/awaitable.hpp>
#include <atomic>
#include <cstdint>
#include <deque>
#include <mutex>
#include <string>
#include <vector>


class WebSocketClient: public RFBase {
public:
    const std::string_view get_param1() override { return "fd464cY86lGjqqwe3VhpPwX"; }
    const std::string_view get_param2() override { return "WebSocketClient"; }

    enum class state : uint8_t {
        disconnected = 0,
        connecting = 1,
        connected = 2
    };

    static constexpr std::string_view timer_websocket_client = "web_socket_client_timer";

    WebSocketClient();
    ~WebSocketClient() override;

    void set_name(const std::string& name);
    std::string name() const;

    boost::asio::awaitable<bool> connect_async(std::string url);
    void disconnect();
    boost::asio::awaitable<void> send_async(std::vector<uint8_t> payload, uint32_t cmd_id = 0);
    boost::asio::awaitable<std::vector<uint8_t>> recv_async();
    boost::asio::awaitable<void> heartbeat_loop();
    void push_incoming(std::vector<uint8_t> payload);

    state connection_state() const;

private:
    std::string name_ = "WebSocketClient";
    std::string url_;
    state state_ = state::disconnected;
    std::atomic<bool> stop_heartbeat_{false};
    std::deque<std::vector<uint8_t>> incoming_queue_;
    mutable std::mutex mutex_;
};
