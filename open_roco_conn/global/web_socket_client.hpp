#pragma once
#include "base/rf_base.hpp"
#include <cstdint>
#include <functional>
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

    using send_callback = std::function<void(const std::vector<uint8_t>&, uint32_t)>;
    using message_callback = std::function<void(const std::vector<uint8_t>&)>;

    static constexpr std::string_view timer_websocket_client = "web_socket_client_timer";

    WebSocketClient();
    ~WebSocketClient() override;

    void set_name(const std::string& name);
    std::string name() const;

    void set_send_callback(send_callback callback);
    void set_message_callback(message_callback callback);

    void connect(const std::string& url);
    void disconnect();
    void send(const std::vector<uint8_t>& payload, uint32_t cmd_id = 0);
    void on_message(const std::vector<uint8_t>& payload);
    void say_hello();

    state connection_state() const;

private:
    std::string name_ = "WebSocketClient";
    std::string url_;
    state state_ = state::disconnected;
    send_callback send_callback_;
    message_callback message_callback_;
    mutable std::mutex mutex_;
};
