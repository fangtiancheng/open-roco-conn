#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"

class PReadHelp: public RFBase {
public:
    const std::string_view get_param1() const override { return "1f89fNjdjZNcYe/eGNw1e3P"; }
    const std::string_view get_param2() const override { return "PReadHelp"; }

    void read_user_item(ByteArray&);
};