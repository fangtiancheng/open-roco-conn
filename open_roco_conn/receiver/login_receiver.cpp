#include "receiver/login_receiver.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include <utility>

void LoginReceiver::set_receive_handler(receive_handler handler) {
    receive_handler_ = std::move(handler);
}

void LoginReceiver::set_loading_callback(loading_callback callback) {
    loading_callback_ = std::move(callback);
}

void LoginReceiver::set_error_callback(error_callback callback) {
    error_callback_ = std::move(callback);
}

void LoginReceiver::send_data(const uint32_t tcp_id, const uint32_t cmd_type) {
    current_tcp_id_ = tcp_id;
    if (loading_callback_) {
        loading_callback_(true);
    }
    send_data_to_server(cmd_type);
}

void LoginReceiver::on_send_error(const uint32_t cmd_type,
                                  const uint32_t tcp_id,
                                  const int32_t error_code) {
    (void) cmd_type;
    (void) tcp_id;
    (void) error_code;

    if (loading_callback_) {
        loading_callback_(false);
    }
    if (error_callback_) {
        error_callback_(true);
    }
}

void LoginReceiver::finalize() {
    AbstractDataReceiver::finalize();
    current_tcp_id_ = 0;
    if (loading_callback_) {
        loading_callback_(false);
    }
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
    if (loading_callback_) {
        loading_callback_(false);
    }
    if (receive_handler_ && adf != nullptr) {
        receive_handler_(cmd_type, *adf);
    }
    return true;
}
