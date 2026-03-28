#pragma once
#include "base/rf_base.hpp"
#include <cstdint>
#include <string_view>

class GlobalGameInfo: public RFBase {
public:
    const std::string_view get_param1() const override { return "4fb018xrZ5Df7Oy/s5wtUTx"; }
    const std::string_view get_param2() const override { return "GlobalGameInfo"; }

    bool is_login_in = false;
    uint16_t room_id = 0;
};
