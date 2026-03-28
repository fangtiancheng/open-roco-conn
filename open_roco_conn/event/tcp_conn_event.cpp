#include "tcp_conn_event.hpp"

TCPConnEvent::TCPConnEvent(std::string type, const uint32_t tcp_id, const bool bubbles)
    : BaseEvent(std::move(type), bubbles),
      tcp_id_(tcp_id) {
}

uint32_t TCPConnEvent::get_tcp_id() const {
    return tcp_id_;
}

const ADF* TCPConnEvent::get_adf() const {
    return adf_.get();
}

std::shared_ptr<ADF> TCPConnEvent::get_adf_ptr() const {
    return adf_;
}

void TCPConnEvent::set_adf(std::shared_ptr<ADF> adf) {
    adf_ = std::move(adf);
    data = adf_.get();
}

void TCPConnEvent::set_tcp_id(const uint32_t tcp_id) {
    tcp_id_ = tcp_id;
}

std::unique_ptr<BaseEvent> TCPConnEvent::clone() const {
    auto copy = std::make_unique<TCPConnEvent>(type(), tcp_id_, bubbles());
    copy->message = message;
    copy->set_adf(adf_);
    copy->data_type = data_type;
    return copy;
}
