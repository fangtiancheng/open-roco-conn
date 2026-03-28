#pragma once
#include "event/timer.hpp"
#include "websock/angel_tcp_connection.hpp"
#include <cstddef>
#include <functional>
#include <memory>
#include <string_view>

class LingerTcpConnection: public AngelTcpConnection {
public:
    explicit LingerTcpConnection(uint32_t id = 0);
    ~LingerTcpConnection() override;

    const std::string_view get_param1() const override { return "2f050xNNkBK6m0q4bo2qZpk"; }
    const std::string_view get_param2() const override { return "LingerTcpConnection"; }

    void on_open() override;
    void on_close() override;
    void on_error() override;
    void send_initial_data() override;
    std::vector<uint8_t> send_data(const ADF& adf) override;
    void set_is_login_provider(std::function<bool()> provider);

private:
    void on_hello_time();

    std::unique_ptr<Timer> hello_timer_{};
    std::size_t hello_timer_listener_id_ = 0;
    std::function<bool()> is_login_provider_{};
};
