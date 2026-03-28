#pragma once
#include "receiver/abstract_data_receiver.hpp"
#include <cstdint>
#include <functional>
#include <string_view>
#include <vector>

class LoginReceiver: public AbstractDataReceiver {
public:
    using receive_handler = std::function<void(uint32_t cmd_type)>;
    using loading_callback = std::function<void(bool waiting)>;
    using error_callback = std::function<void(bool has_error)>;

    const std::string_view get_param1() const override { return "f24c97h2lBVp0CNZqDIwnV1"; }
    const std::string_view get_param2() const override { return "LoginReceiver"; }

    void set_receive_handler(receive_handler handler);
    void set_loading_callback(loading_callback callback);
    void set_error_callback(error_callback callback);

    void send_data(uint32_t tcp_id, uint32_t cmd_type);
    void on_send_error(uint32_t cmd_type, uint32_t tcp_id, int32_t error_code);
    void finalize() override;

protected:
    std::vector<uint32_t> get_accept_types() const override;
    bool on_data_receive(uint32_t cmd_type) override;

private:
    receive_handler receive_handler_{};
    loading_callback loading_callback_{};
    error_callback error_callback_{};
    uint32_t current_tcp_id_ = 0;
};
