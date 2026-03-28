#include "world/abstract_data_receiver.hpp"
#include <algorithm>

void AbstractDataReceiver::initialize(EventDispatcher* dispatcher) {
    global_event_dist_ = dispatcher;
}

bool AbstractDataReceiver::receive(const uint32_t cmd_type) {
    if (!accepts(cmd_type)) {
        return false;
    }
    return on_data_receive(cmd_type);
}

EventDispatcher* AbstractDataReceiver::dispatcher() const {
    return global_event_dist_;
}

bool AbstractDataReceiver::accepts(const uint32_t cmd_type) const {
    const auto accept_types = get_accept_types();
    return std::find(accept_types.begin(), accept_types.end(), cmd_type) != accept_types.end();
}
