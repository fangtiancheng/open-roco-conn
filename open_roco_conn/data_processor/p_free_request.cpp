#include "data_processor/p_free_request.hpp"
#include <utility>

P_FreeRequest::send_callback P_FreeRequest::net_sys_send_{};

P_FreeRequest::P_FreeRequest(const int32_t cmd_id, ByteArray data, decode_callback handler)
    : cmd_id(cmd_id),
      data(std::move(data)),
      handler_(std::move(handler)) {
}

void P_FreeRequest::set_net_sys_send(send_callback callback) {
    net_sys_send_ = std::move(callback);
}

uint32_t P_FreeRequest::send(const bool has_ser_num, const uint32_t tcp_id) const {
    if (!net_sys_send_) {
        RFBase::debug_line("P_FreeRequest", "network send callback is null, send failed");
        return 0;
    }
    if (cmd_id == -1) {
        RFBase::debug_line("P_FreeRequest", "cmd_id is invalid, send failed");
        return 0;
    }
    return net_sys_send_(static_cast<uint32_t>(cmd_id), data, has_ser_num, tcp_id);
}

ByteArray P_FreeRequest::decode(const ADF& adf) const {
    ByteArray body = adf.body;
    if (handler_) {
        handler_(body);
    }
    return body;
}

ADF P_FreeRequest::encode(const int32_t cmd_id_override) const {
    const int32_t final_cmd_id = (cmd_id_override == -1) ? cmd_id : cmd_id_override;
    ADF adf = ProtocolHelper::create_adf(static_cast<uint32_t>(final_cmd_id));
    adf.head.ui_serial_num = serial_num;
    adf.body = data;
    return adf;
}
