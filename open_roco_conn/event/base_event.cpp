#include "base_event.hpp"

BaseEvent::BaseEvent(std::string type, const bool bubbles)
    : type_(std::move(type)),
      bubbles_(bubbles) {
}

std::unique_ptr<BaseEvent> BaseEvent::clone() const {
    auto copy = std::make_unique<BaseEvent>(type_, bubbles_);
    copy->message = message;
    copy->data = data;
    return copy;
}

const std::string& BaseEvent::type() const {
    return type_;
}

bool BaseEvent::bubbles() const {
    return bubbles_;
}

ViewEvent::ViewEvent(std::string name)
    : BaseEvent(std::string(EVENT), false),
      name_(std::move(name)) {
}

std::unique_ptr<BaseEvent> ViewEvent::clone() const {
    auto copy = std::make_unique<ViewEvent>(name_);
    copy->message = message;
    copy->data = data;
    return copy;
}

const std::string& ViewEvent::name() const {
    return name_;
}
