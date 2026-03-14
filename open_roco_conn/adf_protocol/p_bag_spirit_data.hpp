#pragma once
#include <cstdint>
#include "adf.hpp"

class P_BagSpiritData: public RFBase{
public:
    const std::string_view get_param1() override{return "dfe40Rs/PxBaYl/F7qDP1lp";}
    const std::string_view get_param2() override{return "P_BagSpiritData";}
    struct BagSpiritData{
        uint32_t id;
        uint8_t level;
        uint32_t exp_to_next_level;
        uint8_t temper;
        std::string temper_name;
        uint8_t sex;
        std::string sex_name;
        uint8_t skin_index;
        uint32_t caught_time;
        uint16_t caught_location;
        uint32_t storage_time;
        uint8_t closeness;
        uint8_t affiliation;
        uint16_t max_hp;
        uint16_t pa;
        uint16_t pd;
        uint16_t ma;
        uint16_t md;
        uint16_t sp;
        uint16_t hp;
        int innate_value;
        int effort_value;
        int skills;
        int des;
        int index;
    };

    BagSpiritData read(ADF &adf);
};

