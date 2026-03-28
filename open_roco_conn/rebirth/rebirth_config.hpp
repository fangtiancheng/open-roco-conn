#pragma once
#include "base/rf_base.hpp"
#include <string_view>

class RebirthConfig: public RFBase {
public:
    const std::string_view get_param1() const override { return "67821GwuvxE0KLxK4mHENFR"; }
    const std::string_view get_param2() const override { return "RebirthConfig"; }

    static constexpr std::string_view CONF_NAME = "SpiritBooks";
    static constexpr std::string_view REBIRTH_SPIRIT_BOOK_GROUP_ID = "12";
};
