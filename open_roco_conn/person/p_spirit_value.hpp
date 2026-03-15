#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"

class P_SpiritValue: public RFBase{
public:
    const std::string_view get_param1() override{return "95868Gq135KFLc8Pdz/pi5R";}
    const std::string_view get_param2() override{return "P_SpiritValue";}
    struct SpiritValue{
        uint8_t pa = 0;
        uint8_t pd = 0;
        uint8_t ma = 0;
        uint8_t md = 0;
        uint8_t sp = 0;
        uint8_t hp = 0;
    } spirit_value;
    void read(ByteArray&);
};
