#pragma once
#include "base/rf_base.hpp"

class CombatResultInfo: public RFBase {
    int _trainer_exp = 0;

public:
    const std::string_view get_param1() override { return "74597MO+/xCXpOTjSgGqUJ2"; }
    const std::string_view get_param2() override { return "CombatResultInfo"; }
    int type = 0;
    int combat_type = 0;
    int can_combat = 0;
    int finished = 0;
    int version = 0;
    int spirit_props_var = 0;
    int obtain_items = 0;
    int spirit_infos = 0;
    int next_level_trainer_exp = 0;
    int meet_condition = 0;
    int exp_add_bits = 0;
    int honour_point = 0;

    void set_trainer_exp(int exp);
    int get_trainer_exp() const;
};