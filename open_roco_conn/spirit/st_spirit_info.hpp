#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"


class STSpiritInfo: public RFBase{
public:
    const std::string_view get_param1() override{return "69b42lS4dVML5zYtiZQ+p1J";}
    const std::string_view get_param2() override{return "STSpiritInfo";}
    struct SpiritInfo{
        uint32_t id = 0;
        uint32_t catchTime = 0;
        uint32_t addSTTime = 0;
        uint8_t level = 0;
        int height = 0;
        int weight = 0;
        uint8_t sex = 0;
        uint8_t talentType = 0;
        uint8_t talentLevel = 0;
        int weaponFlag = 0;
        int armorFlag = 0;
        int jewelryFlag = 0;
        int weaponInfo = 0;
        int armorInfo = 0;
        int jewelryInfo = 0;
        uint32_t skinID = 0;
        int spiritDes = 0;
    } info;
    void read(ByteArray&);
};