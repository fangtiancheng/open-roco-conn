#include "login_data_processor.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "login_data_body.hpp"

const LoginDataRepply& LoginDataProcessor::decode(ADF &adf) {
    login_data.read(adf.body);
    return login_data;
}

ADF LoginDataProcessor::encode(const ServerInfo& server_info, uint32_t ui_serial_num) const {
    ADF packet;
    packet.head.cmd_id = get_adf_type();
    packet.head.uin = server_info.uin;
    packet.head.ui_serial_num = ui_serial_num;

    LoginDataBody payload;
    payload.room_id = static_cast<int16_t>(server_info.room_id);
    if (!server_info.session_key.empty()) {
        payload.key = server_info.session_key;
    }

    payload.write_external(packet.body);
    packet.body.reset();
    packet.head.length = static_cast<uint16_t>(packet.body.length());
    return packet;
}

uint32_t LoginDataProcessor::get_adf_type() {
    return ADFCmdsType::T_LoginRoom;
}
