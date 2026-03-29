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
    auto dispatch_result = dispatcher()->dispatch_event<void>(EventKey::scene_data_init);
    if (!dispatch_result.has_value()) {
        RFBase::debug_line("AWDataReceiver", "dispatch scene_data_init failed: " + dispatch_result.error());
    }
    return true;
}
