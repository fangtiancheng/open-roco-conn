#pragma once
#include <cstdint>
#include <string>
#include <vector>
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"
#include "p_spirit_value.hpp"
#include "p_bag_spirit_skill_data.hpp"


class P_BagSpiritData: public RFBase, public AngelDataInputJudge{
public:
    const std::string_view get_param1() override{return "dfe40Rs/PxBaYl/F7qDP1lp";}
    const std::string_view get_param2() override{return "P_BagSpiritData";}
    const std::string_view constructor_name() const override {return "P_BagSpiritData";}
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
    P_SpiritValue innate_value;
    P_SpiritValue effort_value;
    std::vector<P_BagSpiritSkillData> skills;
    int des;
    int index;

    void read(ByteArray&);
};

