#include "notify_def.hpp"

NotifyDef::NotifyDef(std::string type, const bool bubbles)
    : BaseEvent(std::move(type), bubbles) {
}

NotifyDef::NotifyDef(std::string type, std::shared_ptr<NetNotifyPayload> payload, const bool bubbles)
    : BaseEvent(std::move(type), bubbles),
      payload_(std::move(payload)) {
    data = payload_.get();
}

const NetNotifyPayload* NotifyDef::payload() const {
    return payload_.get();
}

std::shared_ptr<NetNotifyPayload> NotifyDef::payload_ptr() const {
    return payload_;
}

void NotifyDef::set_payload(std::shared_ptr<NetNotifyPayload> payload) {
    payload_ = std::move(payload);
    data = payload_.get();
}

std::unique_ptr<BaseEvent> NotifyDef::clone() const {
    auto copy = std::make_unique<NotifyDef>(type(), payload_, bubbles());
    copy->message = message;
    return copy;
}
