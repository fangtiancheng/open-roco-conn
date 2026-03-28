#pragma once
#include "world/abstract_data_receiver.hpp"
#include <cstdint>
#include <string_view>
#include <vector>

class AWDataReceiver: public AbstractDataReceiver {
public:
    const std::string_view get_param1() const override { return "e112eEDeORLT6dFr6TN3Pr1"; }
    const std::string_view get_param2() const override { return "AWDataReceiver"; }

protected:
    std::vector<uint32_t> get_accept_types() const override;
    bool on_data_receive(uint32_t cmd_type) override;
};
