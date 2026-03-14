#pragma once
#include <cstdint>
#include "adf.hpp"
struct FightP;
class ReqFightP: public RFBase{
public:
    const std::string_view get_param1() override{return "8bf3f42Dh1AbaJju36PKRA4";}
    const std::string_view get_param2() override{return "ReqFightP";}
    static FightP decode(ADF& adf);
};

struct FightP{
    uint8_t req_type;
    uint8_t spirit_index;
    uint8_t pp_left;
};
