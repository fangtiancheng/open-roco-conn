#pragma once
#include "base/rf_base.hpp"
#include <cstdint>
#include <string>
#include "adf_protocol/byte_array.hpp"

class SpiritSkillInfo : public RFBase {
public:
    const std::string_view get_param1() override { return "e0e7fKPtL9FB7J321ZkSWyp"; }
    const std::string_view get_param2() override { return "SpiritSkillInfo"; }
    uint32_t id = 0;
    uint8_t pp_left = 0;
    uint8_t is_heredity = 0;
    std::string skill_des{};
    void read_spirit_skill_info(ByteArray&);
};