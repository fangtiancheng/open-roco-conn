#include "receiver/abstract_data_receiver.hpp"
#include <algorithm>
#include <format>
#include <utility>

void AbstractDataReceiver::initialize(EventDispatcher* dispatcher) {
    global_event_dist_ = dispatcher;
}

void AbstractDataReceiver::finalize() {
    send_request_handler_ = {};
    global_event_dist_ = nullptr;
}

bool AbstractDataReceiver::receive(const uint32_t cmd_type) {
    if (!accepts(cmd_type)) {
        return false;
    }
    return on_data_receive(cmd_type, nullptr);
}

bool AbstractDataReceiver::receive(const ADF& adf) {
    const auto cmd_type = adf.head.cmd_id;
    if (!accepts(cmd_type)) {
        return false;
    }
    return on_data_receive(cmd_type, &adf);
}

std::vector<uint32_t> AbstractDataReceiver::accept_types() const {
    return get_accept_types();
}

EventDispatcher* AbstractDataReceiver::dispatcher() const {
    return global_event_dist_;
}

void AbstractDataReceiver::catch_try_send_data_error(const uint32_t cmd_type, const uint32_t tcp_id, const int32_t error_code) {
    RFBase::debug_line(
        "AbstractDataReceiver",
        std::format("send failed cmd=0x{:x} tcp_id={} error_code={}", cmd_type, tcp_id, error_code)
    );
}

void AbstractDataReceiver::send_data_to_server(const uint32_t data_type, ByteArray data, const uint32_t tcp_id) {
    if (send_request_handler_) {
        send_request_handler_(data_type, std::move(data), false, tcp_id, this);
    }
}

void AbstractDataReceiver::send_data_with_ser_num(const uint32_t data_type, ByteArray data, const uint32_t ser_num, const uint32_t tcp_id) {
    (void) ser_num;
    if (send_request_handler_) {
        send_request_handler_(data_type, std::move(data), true, tcp_id, this);
    }
}

void AbstractDataReceiver::set_send_request_handler(send_request_handler_t handler) {
    send_request_handler_ = std::move(handler);
}

bool AbstractDataReceiver::accepts(const uint32_t cmd_type) const {
    const auto accept_types = get_accept_types();
    return std::find(accept_types.begin(), accept_types.end(), cmd_type) != accept_types.end();
}
