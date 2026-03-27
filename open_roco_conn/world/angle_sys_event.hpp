#pragma once
#include "base/rf_base.hpp"
#include <string_view>

class AngleSysEvent: public RFBase {
public:
    const std::string_view get_param1() override { return "3d914Qp6hVw7NNwZB2R0gJs"; }
    const std::string_view get_param2() override { return "AngleSysEvent"; }

    static constexpr std::string_view ON_SCENEDATA_INIT = "AngleSysEvent.ON_SCENEDATA_INIT";
};

