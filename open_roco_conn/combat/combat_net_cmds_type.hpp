#pragma once
#include "base/rf_base.hpp"

class CombatNetCmdsType: public RFBase {
public:
    const std::string_view get_param1() const override { return "8d5b6XjIQ9GTYMz2pK8cFDc"; }
    const std::string_view get_param2() const override { return "CombatNetCmdsType"; }
    static constexpr uint32_t T_REQ_START = 720897;
    static constexpr uint32_t T_RESLOAD = 720898;
    static constexpr uint32_t T_REQ_FIGHT = 720899;
    static constexpr uint32_t T_RES_FIGHT = 720900;
    static constexpr uint32_t T_REQ_CSSKILL = 720901;
    static constexpr uint32_t T_REQ_MVEND = 720902;
    static constexpr uint32_t T_RES_CS = 720903;
    static constexpr uint32_t T_REQ_ALL_MVEND = 720904;
    static constexpr uint32_t SPIRIT_UPGRADE = 720927;
    static constexpr uint32_t CMD_WORLD_FIGHT_REQUEST_START = 2097153;
    static constexpr uint32_t CMD_WORLD_FIGHT_LOAD_SRC_RESULT = 2097154;
    static constexpr uint32_t CMD_WORLD_FIGHT_SHOOT = 2097155;
    static constexpr uint32_t CMD_WORLD_FIGHT_RESULT_BROADCAST = 2097156;
    static constexpr uint32_t CMD_WORLD_FIGHT_CHANGE_SPIRIT_SKILL = 2097157;
    static constexpr uint32_t CMD_WORLD_FIGHT_FLASH_ANIMATE_DONE = 2097158;
    static constexpr uint32_t CMD_WORLD_FIGHT_CHANGE_SPIRIT_NOTIFY = 2097159;
    static constexpr uint32_t CMD_WORLD_FIGHT_SHOW_ATTACK_NOTIFY = 2097160;
    static constexpr uint32_t CMD_WAR_FIGHT_REQUEST_START = 2228225;
    static constexpr uint32_t CMD_WAR_FIGHT_LOAD_SRC_RESULT = 2228226;
    static constexpr uint32_t CMD_WAR_FIGHT_SHOOT = 2228227;
    static constexpr uint32_t CMD_WAR_FIGHT_RESULT_BROADCAST = 2228228;
    static constexpr uint32_t CMD_WAR_FIGHT_FLASH_ANIMATE_DONE = 2228230;
    static constexpr uint32_t CMD_WAR_FIGHT_CHANGE_SPIRIT_NOTIFY = 2228231;
    static constexpr uint32_t CMD_WAR_FIGHT_SHOW_ATTACK_NOTIFY = 2228232;
};
