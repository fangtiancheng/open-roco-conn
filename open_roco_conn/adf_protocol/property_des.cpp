#include "property_des.hpp"

std::string PropertyDes::get_temper_str(int8_t temper) {
    if (temper > 0 && temper <= TEMPERS.size())
        return std::string(TEMPERS[temper - 1]);
    return "未知";
}

std::string PropertyDes::get_temper_des_html_str(int8_t temper) {
    if (0 < temper && temper <= 20) {
        const auto& p = TEMPER_DES[temper - 1];
        return std::string(p.first) + "↑，" + std::string(p.second) + "↓";
    } else if(20 < temper && temper <= TEMPERS.size()){
        return "能力不变";
    } else{
        return "";
    }
}

std::string PropertyDes::get_sex_str(uint8_t sex) {
    if(sex == 1){
        return "雄";
    }
    if(sex == 2){
        return "雌";
    }
    return "未知";
}
