#include "receiver/abstract_data_receiver.hpp"
#include <algorithm>
#include <format>

void AbstractDataReceiver::initialize(EventDispatcher* dispatcher) {
    global_event_dist_ = dispatcher;
}

void AbstractDataReceiver::finalize() {
    {
        std::lock_guard<std::mutex> lock(send_queue_mutex_);
        send_queue_.clear();
    }
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

void AbstractDataReceiver::send_data_to_server(const uint32_t data_type, std::vector<uint8_t> data) {
    send_request request{};
    request.data_type = data_type;
    request.has_ser_num = false;
    request.ser_num = 0;
    request.data = std::move(data);
    request.sender = this;
    {
        std::lock_guard<std::mutex> lock(send_queue_mutex_);
        send_queue_.push_back(std::move(request));
    }
    if (global_event_dist_ != nullptr) {
        AngelDataEvent send_event{std::string(AngelDataEvent::TRYSENDADF)};
        send_event.tcp_id = static_cast<uint32_t>(-1);
        send_event.has_ser_num = false;
        send_event.data_type = data_type;
        global_event_dist_->dispatch_event(send_event);
    }
}

void AbstractDataReceiver::send_data_with_ser_num(const uint32_t data_type, std::vector<uint8_t> data, const uint32_t ser_num) {
    send_request request{};
    request.data_type = data_type;
    request.has_ser_num = true;
    request.ser_num = ser_num;
    request.data = std::move(data);
    request.sender = this;
    {
        std::lock_guard<std::mutex> lock(send_queue_mutex_);
        send_queue_.push_back(std::move(request));
    }
    if (global_event_dist_ != nullptr) {
        AngelDataEvent send_event{std::string(AngelDataEvent::TRYSENDADF)};
        send_event.tcp_id = static_cast<uint32_t>(-1);
        send_event.has_ser_num = true;
        send_event.data_type = data_type;
        global_event_dist_->dispatch_event(send_event);
    }
}

bool AbstractDataReceiver::try_pop_send_request(send_request& out_request) {
    std::lock_guard<std::mutex> lock(send_queue_mutex_);
    if (send_queue_.empty()) {
        return false;
    }
    out_request = std::move(send_queue_.front());
    send_queue_.pop_front();
    return true;
}

void AbstractDataReceiver::sendDataToServer(const uint32_t data_type, std::vector<uint8_t> data) {
    send_data_to_server(data_type, std::move(data));
}

void AbstractDataReceiver::sendDataWithSerNum(const uint32_t data_type, std::vector<uint8_t> data, const uint32_t ser_num) {
    send_data_with_ser_num(data_type, std::move(data), ser_num);
}

bool AbstractDataReceiver::accepts(const uint32_t cmd_type) const {
    const auto accept_types = get_accept_types();
    return std::find(accept_types.begin(), accept_types.end(), cmd_type) != accept_types.end();
}
