#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/adf.hpp"
#include "login_data_repply.hpp"
#include "server_info.hpp"


class LoginDataProcessor: public RFBase {
public:
    const std::string_view get_param1() const override { return "aa9f6WR435H9ZX992B1r21X"; }
    const std::string_view get_param2() const override { return "LoginDataProcessor"; }
    LoginDataRepply login_data;
    const LoginDataRepply& decode(ADF&);
    ADF encode(const ServerInfo& server_info, uint32_t ui_serial_num = 0) const;
    static uint32_t get_adf_type();
};
