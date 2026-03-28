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
std::expected<uint32_t, std::string> parse_u32_digits(const std::string& raw) {
    std::string digits;
    digits.reserve(raw.size());
    for (const char ch : raw) {
        if (std::isdigit(static_cast<unsigned char>(ch)) != 0) {
            digits.push_back(ch);
        }
    }
    if (digits.empty()) {
        return 0;
    }

    uint32_t value = 0;
    const auto* begin = digits.data();
    const auto* end = digits.data() + digits.size();
    auto [ptr, ec] = std::from_chars(begin, end, value);
    if (ec != std::errc{} || ptr != end) {
        return std::unexpected("GameLaunch: invalid uin digits");
    }
    return value;
}
}

boost::asio::awaitable<GameLaunch::result> GameLaunch::on_load(
    const std::map<std::string, std::string>& cookie_map,
    UserData& user_data,
    GlobalGameInfo& global_game_info
) {
    co_return launch(cookie_map, user_data, global_game_info);
}

GameLaunch::result GameLaunch::launch(
    const std::map<std::string, std::string>& cookie_map,
    UserData& user_data,
    GlobalGameInfo& global_game_info
) {
    auto user_data_result = parse_user_data(cookie_map);
    if (!user_data_result.has_value()) {
        return std::unexpected(user_data_result.error());
    }
    auto global_game_info_result = parse_global_game_info(cookie_map);
    if (!global_game_info_result.has_value()) {
        return std::unexpected(global_game_info_result.error());
    }
    user_data = std::move(user_data_result.value());
    global_game_info = std::move(global_game_info_result.value());
    return {};
}

GameLaunch::uin_result GameLaunch::parse_uin(const std::string& raw_uin) const {
    const auto parsed = parse_u32_digits(raw_uin);
    if (!parsed.has_value()) {
        return std::unexpected(parsed.error());
    }
    return parsed.value();
}

GameLaunch::user_data_result GameLaunch::parse_user_data(const std::map<std::string, std::string>& cookie_map) const {
    UserData data;
    auto uin_result = parse_uin(get_cookie_or_empty(cookie_map, "angel_uin"));
    if (!uin_result.has_value()) {
        return std::unexpected(uin_result.error());
    }
    data.uin = uin_result.value();
    data.set_session_key(get_cookie_or_empty(cookie_map, "angel_key"));
    data.skey = get_cookie_or_empty(cookie_map, "skey");
    data.pskey = get_cookie_or_empty(cookie_map, "pskey");
    return data;
}

GameLaunch::global_game_info_result GameLaunch::parse_global_game_info(
    const std::map<std::string, std::string>& cookie_map
) const {
    GlobalGameInfo info;
    const auto skey = get_cookie_or_empty(cookie_map, "skey");
    info.is_login_in = !skey.empty();
    return info;
}
