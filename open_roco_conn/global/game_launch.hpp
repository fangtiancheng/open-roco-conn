#pragma once
#include "base/rf_base.hpp"
#include "global_game_info.hpp"
#include "global/user_data.hpp"
#include <boost/asio/awaitable.hpp>
#include <expected>
#include <map>
#include <string>
#include <string_view>

class GameLaunch: public RFBase {
public:
    const std::string_view get_param1() const override { return "e00b29D/8BFLK2IBmVgiHDc"; }
    const std::string_view get_param2() const override { return "GameLaunch"; }

    using result = std::expected<void, std::string>;
    using user_data_result = std::expected<UserData, std::string>;
    using global_game_info_result = std::expected<GlobalGameInfo, std::string>;
    using uin_result = std::expected<uint32_t, std::string>;

    result on_load(
        const std::map<std::string, std::string>& cookie_map,
        UserData& user_data,
        GlobalGameInfo& global_game_info
    );
    uin_result parse_uin(const std::string& raw_uin) const;
    user_data_result parse_user_data(const std::map<std::string, std::string>& cookie_map) const;
};
