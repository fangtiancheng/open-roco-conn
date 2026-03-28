#include "event/angel_data_event.hpp"

#include "adf_protocol/adf.hpp"

AngelDataEvent::AngelDataEvent(std::string type, const bool bubbles)
    : BaseEvent(std::move(type), bubbles) {
}

const ADF* AngelDataEvent::get_adf() const {
    return adf_.get();
}

void AngelDataEvent::set_adf(std::shared_ptr<ADF> adf) {
    adf_ = std::move(adf);
    data = adf_.get();
}

std::unique_ptr<BaseEvent> AngelDataEvent::clone() const {
    auto copy = std::make_unique<AngelDataEvent>(type(), bubbles());
    copy->message = message;
    copy->tcp_id = tcp_id;
    copy->has_ser_num = has_ser_num;
    copy->data_type = data_type;
    copy->set_adf(adf_);
    return copy;
}

