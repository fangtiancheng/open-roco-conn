#pragma once
#include <array>
#include "base/rf_base.hpp"
#include <cstdint>
#include <string>
#include <string_view>

class PropertyDes: public RFBase{
public:
    const std::string_view get_param1() override{return "092dbSbXCFHGoiInB3iwUzI";}
    const std::string_view get_param2() override{return "PropertyDes";}

    static std::string get_temper_str(int8_t temper);
    static std::string get_temper_des_html_str(int8_t temper);
    static std::string get_sex_str(uint8_t sex);
    static inline constexpr std::array<std::string_view, 25>
    TEMPERS = {
        "孤僻", "固执", "调皮", "勇敢", "大胆",
        "淘气", "无虑", "悠闲", "保守", "稳重",
        "马虎", "冷静", "沉着", "温顺", "慎重",
        "狂妄", "胆小", "急躁", "开朗", "天真",
        "坦率", "害羞", "认真", "实干", "浮躁"
    };
    static inline constexpr std::array<std::pair<std::string_view, std::string_view>, 25>
    TEMPER_DES = {
        std::pair<std::string_view, std::string_view>{"物攻", "物防"}, std::pair<std::string_view, std::string_view>{"物攻", "魔攻"}, std::pair<std::string_view, std::string_view>{"物攻", "魔防"}, std::pair<std::string_view, std::string_view>{"物攻", "速度"}, std::pair<std::string_view, std::string_view>{"物防", "物攻"}, 
        std::pair<std::string_view, std::string_view>{"物防", "魔攻"}, std::pair<std::string_view, std::string_view>{"物防", "魔防"}, std::pair<std::string_view, std::string_view>{"物防", "速度"}, std::pair<std::string_view, std::string_view>{"魔攻", "物攻"}, std::pair<std::string_view, std::string_view>{"魔攻", "物防"},
        std::pair<std::string_view, std::string_view>{"魔攻", "魔防"}, std::pair<std::string_view, std::string_view>{"魔攻", "速度"}, std::pair<std::string_view, std::string_view>{"魔防", "物攻"}, std::pair<std::string_view, std::string_view>{"魔防", "物防"}, std::pair<std::string_view, std::string_view>{"魔防", "魔攻"}, 
        std::pair<std::string_view, std::string_view>{"魔防", "速度"}, std::pair<std::string_view, std::string_view>{"速度", "物攻"}, std::pair<std::string_view, std::string_view>{"速度", "物防"}, std::pair<std::string_view, std::string_view>{"速度", "魔攻"}, std::pair<std::string_view, std::string_view>{"速度", "魔防"}, 
        std::pair<std::string_view, std::string_view>{"能力不变", "能力不变"}, std::pair<std::string_view, std::string_view>{"能力不变", "能力不变"}, std::pair<std::string_view, std::string_view>{"能力不变", "能力不变"}, std::pair<std::string_view, std::string_view>{"能力不变", "能力不变"}, std::pair<std::string_view, std::string_view>{"能力不变", "能力不变"}
    };
    static inline constexpr std::array<std::string_view ,3> EQUIPMENT_TYPE = {"武器", "防具", "饰品"};
};