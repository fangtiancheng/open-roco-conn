#include "combat_system_dp.hpp"

void CombatSystemDP::set_combat_server_type(const int value) {
    combat_server_type_ = value;
}

int CombatSystemDP::combat_server_type() const {
    return combat_server_type_;
}

void CombatSystemDP::send_use_skill(uint8_t skill_type, uint8_t spirit_index, uint32_t skill_id) {
}

void CombatSystemDP::request_start(uint32_t rival_id, uint8_t combat_type, uint32_t catch_time) {
}
