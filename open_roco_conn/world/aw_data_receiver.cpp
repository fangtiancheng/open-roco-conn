#include "world/aw_data_receiver.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "world/angle_sys_event.hpp"

std::vector<uint32_t> AWDataReceiver::get_accept_types() const {
    return {
        ADFCmdsType::T_LOAD_SCENEDATA,
        ADFCmdsType::T_UPDATE_SCENEDATA
    };
}

bool AWDataReceiver::on_data_receive(const uint32_t cmd_type) {
    (void) cmd_type;
    if (dispatcher() == nullptr) {
        return false;
    }
    dispatcher()->dispatch_event(std::string(AngleSysEvent::ON_SCENEDATA_INIT));
    return true;
}
