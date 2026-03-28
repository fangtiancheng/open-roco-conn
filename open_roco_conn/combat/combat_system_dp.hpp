#pragma once
#include "base/rf_base.hpp"
#include <cstdint>
#include "p_req_fight.hpp"
#include "p_req_start.hpp"
#include "combat_net_cmds_type.hpp"

class CombatSystemDP: public RFBase {
public:
    const std::string_view get_param1() const override { return "a1e2eVrltlLVKgLxb1U2ocz"; }
    const std::string_view get_param2() const override { return "CombatSystemDP"; }
    void set_combat_server_type(int value);
    int combat_server_type() const;

    void send_use_skill(uint8_t skill_type, uint8_t spirit_index, uint32_t skill_id);
    void request_start(uint32_t rival_id, uint8_t combat_type = 1, uint32_t catch_time = 0);

private:
    int combat_server_type_ = 0;
};
