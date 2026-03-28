#include "event/angel_net_sys_event.hpp"

AngelNetSysEvent::AngelNetSysEvent(std::string type, const bool bubbles)
    : BaseEvent(std::move(type), bubbles) {
}

uint32_t AngelNetSysEvent::get_tcp_id() const {
    return tcp_id;
}

std::unique_ptr<BaseEvent> AngelNetSysEvent::clone() const {
    auto copy = std::make_unique<AngelNetSysEvent>(type(), bubbles());
    copy->message = message;
    copy->curr_state = curr_state;
    copy->tcp_id = tcp_id;
    copy->data = data;
    return copy;
}
