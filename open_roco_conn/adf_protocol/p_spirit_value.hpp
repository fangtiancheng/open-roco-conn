#pragma once
#include "adf.hpp"

class P_SpiritValue: public RFBase{
public:
    const std::string_view get_param1() override{return "95868Gq135KFLc8Pdz/pi5R";}
    const std::string_view get_param2() override{return "P_SpiritValue";}
    struct SpiritValue{
        uint8_t pa;
        uint8_t pd;
        uint8_t ma;
        uint8_t md;
        uint8_t sp;
        uint8_t hp;
    };
    static SpiritValue read(ADF& adf);
};

