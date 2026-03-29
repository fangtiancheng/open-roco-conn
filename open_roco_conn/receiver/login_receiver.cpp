#include "receiver/login_receiver.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include <utility>

void LoginReceiver::set_receive_handler(receive_handler handler) {
    receive_handler_ = std::move(handler);
}

void LoginReceiver::send_data(const uint32_t tcp_id, const uint32_t cmd_type, ByteArray payload) {
    current_tcp_id_ = tcp_id;
    send_data_to_server(cmd_type, std::move(payload), tcp_id);
}

void LoginReceiver::on_send_error(const uint32_t cmd_type,
                                  const uint32_t tcp_id,
                                  const int32_t error_code) {
    (void) cmd_type;
    (void) tcp_id;
    (void) error_code;
}

void LoginReceiver::finalize() {
    AbstractDataReceiver::finalize();
    current_tcp_id_ = 0;
}

std::vector<uint32_t> LoginReceiver::get_accept_types() const {
    return {
        ADFCmdsType::T_LoginRoom,
        ADFCmdsType::T_DIR_RANGE_REPLY,
        ADFCmdsType::T_DIR_RECOMMEND_REPLY,
        ADFCmdsType::T_DIR_FAST_GETIN,
        ADFCmdsType::T_DIR_INITIAL_COMPONENT,
        ADFCmdsType::T_ROOM_INITIAL_COMPONENT
    };
}

bool LoginReceiver::on_data_receive(const uint32_t cmd_type, const ADF* adf) {
    (void) current_tcp_id_;
    if (receive_handler_ && adf != nullptr) {
        receive_handler_(cmd_type, *adf);
    }
    return true;
}
