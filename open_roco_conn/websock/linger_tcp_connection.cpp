#include "websock/linger_tcp_connection.hpp"

#include "adf_protocol/adf_cmds_type.hpp"
#include "base/define.hpp"
#include "event/event_key.hpp"
#include <chrono>
#include <format>
#include <utility>

LingerTcpConnection::LingerTcpConnection(const uint32_t id)
    : AngelTcpConnection(id) {
    hello_timer_ = std::make_unique<Timer>(std::chrono::milliseconds(12000));
    hello_timer_listener_id_ = hello_timer_->add_event_listener(EventKey::timer, [this]() { on_hello_time(); });
}

LingerTcpConnection::~LingerTcpConnection() {
    if (hello_timer_) {
        hello_timer_->stop();
        if (hello_timer_listener_id_ != 0) {
            hello_timer_->remove_event_listener(EventKey::timer, hello_timer_listener_id_);
        }
    }
}

void LingerTcpConnection::on_hello_time() {
    if (is_login_provider_ && !is_login_provider_()) {
        return;
    }

    ADF hello_adf;
    hello_adf.head.cmd_id = ADFCmdsType::T_HELLO;
    hello_adf.body.allocate(0);
    hello_adf.body.reset();
    (void) AngelTcpConnection::send_data(hello_adf);
}

void LingerTcpConnection::send_initial_data() {
}

void LingerTcpConnection::on_open() {
    AngelTcpConnection::on_open();
    if (Define::IS_DEBUG) {
        debug_line(std::format("onConnConnected:tgw_l7_forward Host: {}:{}", c_host, c_port));
    }
    send_initial_data();
    if (hello_timer_) {
        hello_timer_->reset();
        hello_timer_->start();
    }
}

void LingerTcpConnection::on_close() {
    AngelTcpConnection::on_close();
    if (hello_timer_) {
        hello_timer_->stop();
    }
    if (Define::IS_DEBUG) {
        debug_line(std::format("on_close id={}", get_id()));
    }
}

void LingerTcpConnection::on_error() {
    AngelTcpConnection::on_error();
    if (hello_timer_) {
        hello_timer_->stop();
    }
    if (Define::IS_DEBUG) {
        debug_line(std::format("on_error id={}", get_id()));
    }
}

std::vector<uint8_t> LingerTcpConnection::send_data(const ADF& adf) {
    return AngelTcpConnection::send_data(adf);
}

void LingerTcpConnection::set_is_login_provider(std::function<bool()> provider) {
    is_login_provider_ = std::move(provider);
}
