#pragma once
#include "adf.hpp"

class P_BagSpiritSkillData: public RFBase{
public:
    const std::string_view get_param1() override{return "f8546evogFLtrccBzV9whF4";}
    const std::string_view get_param2() override{return "P_BagSpiritSkillData";}
    struct BagSpiritSkillData{
        uint16_t id;
        uint8_t pp_left;
        uint8_t is_heredity;
        int des = 0;// TODO
    };
    static BagSpiritSkillData read(ADF& adf);
};

