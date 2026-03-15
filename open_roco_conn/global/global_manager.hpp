#pragma once
#include "base/rf_base.hpp"

class GlobalManager: public RFBase {
public:
    const std::string_view get_param1() override { return "d56d3OZXxBDBJxFb8CdNSqC"; }
    const std::string_view get_param2() override { return "GlobalManager"; }
};