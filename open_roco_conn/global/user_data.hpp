#pragma once
#include "base/rf_base.hpp"
#include <string>
#include <array>
#include <string_view>
#include <cstdint>


class UserData: public RFBase {
    std::string session_key;
public:
    const std::string_view get_param1() override { return "ece58QThmVB6K3E6y2evh3i"; }
    const std::string_view get_param2() override { return "UserData"; }
    void add_login_log(const std::string& log);
    bool is_white(const std::string& );
    std::string get_session_key() const ;
    void set_session_key(const std::string& key) ;
    static constexpr std::array<std::string_view, 3> white_array = {"WAXSJJVAB", "BWVLJAJVZ", "BLAJWJWFB"};
    uint32_t uin;
    std::string skey = "A338BCF057FBA7F3B7515605C03D928E";
    std::string pskey = "CEC82B4C0F90A0FDE409B97BD99A7ADA";
    int rec_server_idx = 1;
    int zid = 1;
    int spirit_id = 0;
    std::string login_log;

};