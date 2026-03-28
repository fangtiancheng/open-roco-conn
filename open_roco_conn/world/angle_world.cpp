#include "world/angle_world.hpp"
#include "event/angle_sys_event.hpp"
#include "event/event_key.hpp"

void AngleWorld::initialize(EventDispatcher& dispatcher) {
    dispatcher_ = &dispatcher;
    is_scene_init_ = false;
    is_online_ = true;

    data_receiver_.initialize(dispatcher_);
    dispatcher_->add_event_listener(EventKey::scene_data_init, [this]() {
        on_scene_data_init();
    });
}

void AngleWorld::finalize() {
    data_receiver_.finalize();
    is_online_ = false;
    is_scene_init_ = false;
    dispatcher_ = nullptr;
}

void AngleWorld::on_scene_data_init() {
    if (is_scene_init_) {
        return;
    }
    is_scene_init_ = true;
}

AWDataReceiver& AngleWorld::data_receiver() {
    return data_receiver_;
}

bool AngleWorld::is_scene_init() const {
    return is_scene_init_;
}
