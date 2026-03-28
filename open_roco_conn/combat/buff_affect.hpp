#pragma once
#include "base/rf_base.hpp"
#include <cstdint>


class BuffAffect: public RFBase {
public:
    const std::string_view get_param1() const override { return "13c96jhqIFFipa7coAiSiSn"; }
    const std::string_view get_param2() const override { return "BuffAffect"; }
    uint32_t id = 0;
    uint8_t type = 0;
    uint8_t index = 0;
    uint8_t buffId = 0;
    int hpVar = 0;
    int proVars = 0;
    int isremove = 0;
    int isOtherPro = 0;
    int otherId = 0;
    int otherIndex = 0;
    int otherType = 0;
    int otherBuffId = 0;
    int otherHpVar = 0;
    int otherProVars = 0;
};
