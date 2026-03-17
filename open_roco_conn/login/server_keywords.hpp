#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include <cstdint>

class ServerKeywords: public RFBase {
public:
    const std::string_view get_param1() override { return "333bepSMJVBSYvjv+xCqK1m"; }
    const std::string_view get_param2() override { return "ServerKeywords"; }
    static constexpr uint32_t SEND_SPIRIT_BAG = 722458;
    static constexpr uint32_t SEND_SPIRIT_FOLLOW_USER = ADFCmdsType::T_SPIRIT_FOLLOW_USER;
    static constexpr uint32_t RECV_SPIRIT_FOLLOW_USER = ADFCmdsType::T_SPIRIT_FOLLOW_USER;
    static constexpr uint32_t SEND_SWAP_SPIRITS = ADFCmdsType::T_SWAP_SPIRITS;
    static constexpr uint32_t RECV_SWAP_SPIRITS = ADFCmdsType::T_SWAP_SPIRITS;
    static constexpr uint32_t SEND_ITEMS_BY_TYPE = ADFCmdsType::T_GETITEMSBYTYPE;
    static constexpr uint32_t RECV_ITEMS_BY_TYPE = ADFCmdsType::T_GETITEMSBYTYPE;
    static constexpr uint32_t SEND_SPIRIT_USE_ITEM = ADFCmdsType::T_SPIRIT_USE_ITEM;
    static constexpr uint32_t RECV_SPIRIT_USE_ITEM = ADFCmdsType::T_SPIRIT_USE_ITEM;
    static constexpr uint32_t SEND_SPIRIT_TO_STORAGE = ADFCmdsType::T_ADD_TO_STORAGE;
    static constexpr uint32_t RECV_SPIRIT_TO_STORAGE = ADFCmdsType::T_ADD_TO_STORAGE;
    static constexpr uint32_t SEND_SPIRIT_INFO = ADFCmdsType::T_SPIRIT_INFO;
    static constexpr uint32_t RECV_SPIRIT_INFO = ADFCmdsType::T_SPIRIT_INFO;
    static constexpr uint32_t RECV_REFRESH_SPIRIT_TALENT = ADFCmdsType::T_SERVER_PUSH_REFRESH_SPIRIT_TALENT;
    static constexpr uint32_t SEND_OFFLINE_PRACTICE = 720978;
    static constexpr uint32_t SEND_FARM_GUARD_SPIRIT = 721410;
    static constexpr uint32_t SAVE_STRIVE_ADD = 721e3;
};
