#pragma once
#include "base/rf_base.hpp"
#include "event/event_dispatcher.hpp"
#include "world/aw_data_receiver.hpp"
#include <string_view>

class AngleWorld: public RFBase {
public:
    const std::string_view get_param1() const override { return "81781t6CXFFt4uLCtQ3KaNu"; }
    const std::string_view get_param2() const override { return "AngleWorld"; }

    void initialize(EventDispatcher& dispatcher);
    void finalize();
    void on_scene_data_init();

    AWDataReceiver& data_receiver();
    bool is_scene_init() const;

private:
    bool is_scene_init_ = false;
    bool is_online_ = false;
    EventDispatcher* dispatcher_ = nullptr;
    AWDataReceiver data_receiver_{};
};
