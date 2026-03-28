#pragma once
#include "base/rf_base.hpp"
#include <string>
#include <chrono>

class ServerInfo: public RFBase {
public:
    const std::string_view get_param1() const override { return "651fdyrmYNC94W8HyuqHlRL"; }
    const std::string_view get_param2() const override { return "ServerInfo"; }
    std::string dir_host = "127.0.0.1";
    uint16_t dir_port = 443;
    std::string room_host = "127.0.0.1";
    uint16_t room_port = 443;
    std::string room_name{};
    uint16_t room_id = 0;
    std::string session_key{};
    std::string skey{};
    std::string pskey{};
    uint32_t uin = 0;
    bool is_first_login = false;
    std::chrono::year_month_day date{};
    std::string log_host;
    uint16_t log_port = 843;
};
