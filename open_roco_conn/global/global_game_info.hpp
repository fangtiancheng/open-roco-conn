#pragma once
#include "base/rf_base.hpp"
#include <string_view>

class GlobalGameInfo: public RFBase {
public:
    const std::string_view get_param1() override { return "4fb018xrZ5Df7Oy5wtUTx1"; }
    const std::string_view get_param2() override { return "GlobalGameInfo"; }

    bool is_login_in = false;
};

