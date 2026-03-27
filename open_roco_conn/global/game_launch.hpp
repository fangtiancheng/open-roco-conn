#pragma once
#include "base/rf_base.hpp"
#include "global_manager.hpp"
#include "global/user_data.hpp"
#include <map>
#include <string>
#include <string_view>

class GameLaunch: public RFBase {
public:
    const std::string_view get_param1() override { return "e00b29D8BFLK2IBmVgiHDc1"; }
    const std::string_view get_param2() override { return "GameLaunch"; }

    static GameLaunch& instance();

    void launch();
    void launch(const std::map<std::string, std::string>& cookie_map);
    void notify_config_done();
    void notify_game_res_pkg_done();
    bool is_launched() const;
    bool is_ready() const;
    int parse_uin(const std::string& raw_uin) const;
    UserData parse_user_data(const std::map<std::string, std::string>& cookie_map) const;
    const UserData& user_data() const;
    GlobalManager& global_manager();
    const GlobalManager& global_manager() const;

private:
    bool launched_ = false;
    UserData user_data_{};
    GlobalManager global_manager_{};
};
