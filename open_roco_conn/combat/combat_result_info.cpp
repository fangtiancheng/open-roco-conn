#include "combat_result_info.hpp"

void CombatResultInfo::set_trainer_exp(int exp) {
    _trainer_exp = exp;
}

int CombatResultInfo::get_trainer_exp() const {
    return _trainer_exp;
}
