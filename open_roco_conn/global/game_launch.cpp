#include "game_launch.hpp"
#include <charconv>
#include <cctype>
#include <utility>

namespace {
std::string get_cookie_or_empty(
    const std::map<std::string, std::string>& cookie_map,
    const std::string& key
) {
    const auto it = cookie_map.find(key);
    if (it == cookie_map.end()) {
        return {};
    }
    return it->second;
}
}

GameLaunch::result GameLaunch::on_load(
    const std::map<std::string, std::string>& cookie_map,
    UserData& user_data,
    GlobalGameInfo& global_game_info
) {
    auto user_data_result = parse_user_data(cookie_map);
    if (!user_data_result.has_value()) {
        return std::unexpected(user_data_result.error());
    }
    user_data = std::move(user_data_result.value());
    global_game_info.is_login_in = true;
    return {};
}

GameLaunch::uin_result GameLaunch::parse_uin(const std::string& raw_uin) const {
    try {
        return std::stoul(raw_uin);
    } catch (const std::exception& e) {
        return std::unexpected(e.what());
    }
}

GameLaunch::user_data_result GameLaunch::parse_user_data(const std::map<std::string, std::string>& cookie_map) const {
    UserData data;
    auto uin_result = parse_uin(get_cookie_or_empty(cookie_map, "angel_uin"));
    if (!uin_result.has_value()) {
        return std::unexpected("parse uin error:" + uin_result.error());
    }
    auto p_angel_key = cookie_map.find("angel_uin");
    if (p_angel_key == cookie_map.end()) {
        return std::unexpected("angel_uin not in params.keys");
    }
    auto p_skey = cookie_map.find("skey");
    if (p_skey == cookie_map.end()) {
        return std::unexpected("skey not in params.keys");
    }
    auto p_pskey = cookie_map.find("pskey");
    if (p_pskey == cookie_map.end()) {
        return std::unexpected("pskey not in params.keys");
    }
    data.uin = uin_result.value();
    data.skey = p_pskey->second;
    data.pskey = p_pskey->second;
    return data;
}


