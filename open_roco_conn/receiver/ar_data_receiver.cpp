#include "receiver/ar_data_receiver.hpp"
#include "adf_protocol/adf_cmds_type.hpp"

void ARDataReceiver::set_ignore_net_data(const bool ignore) {
    ignore_net_data_ = ignore;
}

void ARDataReceiver::add_role(const uint32_t role_uin) {
    last_role_uin_ = role_uin;
    on_data_receive(ADFCmdsType::T_SOneInScene);
}

void ARDataReceiver::remove_role(const uint32_t role_uin) {
    last_role_uin_ = role_uin;
    on_data_receive(ADFCmdsType::T_SOneOutScene);
}

void ARDataReceiver::change_role_state(const uint32_t role_uin, const uint32_t state_type) {
    last_role_uin_ = role_uin;
    last_state_type_ = state_type;
    on_data_receive(ADFCmdsType::T_StateDataChange);
}

std::vector<uint32_t> ARDataReceiver::get_accept_types() const {
    return {
        ADFCmdsType::T_SOneInScene,
        ADFCmdsType::T_SOneOutScene,
        ADFCmdsType::T_RoadPosBC,
        ADFCmdsType::T_RoadPosSub,
        ADFCmdsType::T_StateDataChange,
        ADFCmdsType::T_SOneInfoChange,
        ADFCmdsType::TYPE_COMBAT_END_PUSH
    };
}

bool ARDataReceiver::on_data_receive(const uint32_t cmd_type) {
    if (ignore_net_data_) {
        return true;
    }

    switch (cmd_type) {
        case ADFCmdsType::T_SOneInScene:
        case ADFCmdsType::T_SOneOutScene:
        case ADFCmdsType::T_RoadPosBC:
        case ADFCmdsType::T_StateDataChange:
        case ADFCmdsType::T_SOneInfoChange:
            return true;
        default:
            return false;
    }
}
