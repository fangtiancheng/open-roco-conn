#include "event/timer_event.hpp"

TimerEvent::TimerEvent(std::string type, const bool bubbles)
    : BaseEvent(std::move(type), bubbles) {
}

std::unique_ptr<BaseEvent> TimerEvent::clone() const {
    auto copy = std::make_unique<TimerEvent>(type(), bubbles());
    copy->message = message;
    copy->data = data;
    return copy;
}
