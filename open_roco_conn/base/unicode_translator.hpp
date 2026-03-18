#pragma once
#include "base/rf_base.hpp"

class UnicodeTranslator: public RFBase{
    const std::string_view get_param1() override {return "ecd4aSUSh5BXY5jVYp/f4U/";}
    const std::string_view get_param2() override {return "UnicodeTranslator";}
    static const std::string_view get_can_not_catch_str() { return "这个宠物\n不可捕捉"; }
    static const std::string_view get_is_pvp_str() { return "对方宠物\n不可捕捉"; }
    static const std::string_view get_enemy_spirit_level_is_high_than_60_str() { return "高于60级的宠物\n不可捕捉"; }
    static const std::string_view get_user_spirit_level_is_too_low_str() { return "背包中没有比对\n方等级高的宠物\n不可捕捉"; }
    static const std::string_view get_default_can_not_catch_str() { return "不可捕捉"; }
};
