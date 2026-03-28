#pragma once
#include <cstdint>
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"


class ReqFightP: public RFBase{
public:
    const std::string_view get_param1() const override{return "8bf3f42Dh1AbaJju36PKRA4";}
    const std::string_view get_param2() const override{return "ReqFightP";}
    struct FightP{
        uint8_t req_type;
        uint8_t spirit_index;
        uint8_t pp_left;
    } fight_p;
    void decode(ByteArray&);
};
