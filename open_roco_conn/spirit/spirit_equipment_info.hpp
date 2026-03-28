#pragma once
#include "base/rf_base.hpp"

class SpiritEquipmentInfo : public RFBase{
public:
    const std::string_view get_param1() const override{return "fec7fy3UNxH74XfiIpJSy6Y";}
    const std::string_view get_param2() const override{return "SpiritEquipmentInfo";}
    struct SpiritEquipment{
        int id = 0;

    };
};