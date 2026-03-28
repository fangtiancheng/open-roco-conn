#include "receiver/aw_data_receiver.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "event/event_key.hpp"

std::vector<uint32_t> AWDataReceiver::get_accept_types() const {
    return {
        ADFCmdsType::T_LOAD_SCENEDATA,
        ADFCmdsType::T_UPDATE_SCENEDATA
    };
}

bool AWDataReceiver::on_data_receive(const uint32_t cmd_type, const ADF* adf) {
    (void) cmd_type;
    (void) adf;
    if (dispatcher() == nullptr) {
        return false;
    }
    dispatcher()->dispatch_event(EventKey::scene_data_init);
    return true;
}
