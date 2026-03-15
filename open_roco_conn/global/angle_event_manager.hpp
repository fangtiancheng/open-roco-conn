#pragma once
#include "base/rf_base.hpp"
#include <cstdint>

class AngleEventManager: public RFBase {
    void* global_dispatcher = nullptr;// TODO
    void* commands = nullptr;// TODO
    void* timer = nullptr;// TODO
    void* render_timer = nullptr;// TODO
    void* sprite = nullptr;// TODO
    int64_t last_time = 0;
public:
    const std::string_view get_param1() override { return "bc3572iYeZKa6Z2idrF6ieF"; }
    const std::string_view get_param2() override { return "AngleEventManager"; }

};