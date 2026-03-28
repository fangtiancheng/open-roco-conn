#pragma once
#include "receiver/abstract_data_receiver.hpp"
#include <cstdint>
#include <string_view>
#include <vector>

class ARDataReceiver: public AbstractDataReceiver {
public:
    const std::string_view get_param1() const override { return "4325boRcsxHzYNDiSMOZs8q"; }
    const std::string_view get_param2() const override { return "ARDataReceiver"; }

    void set_ignore_net_data(bool ignore = false);
    void add_role(uint32_t role_uin);
    void remove_role(uint32_t role_uin);
    void change_role_state(uint32_t role_uin, uint32_t state_type);

protected:
    std::vector<uint32_t> get_accept_types() const override;
    bool on_data_receive(uint32_t cmd_type, const ADF* adf) override;

private:
    bool ignore_net_data_ = true;
    uint32_t last_role_uin_ = 0;
    uint32_t last_state_type_ = 0;
};
