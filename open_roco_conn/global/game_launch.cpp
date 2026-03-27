#include "game_launch.hpp"
#include "global_api.hpp"
#include <cctype>

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

GameLaunch& GameLaunch::instance() {
    static GameLaunch instance;
    return instance;
}

void GameLaunch::launch() {
    if (launched_) {
        return;
    }
    launched_ = true;

    GlobalAPI::init();
    global_manager_.start();
}

void GameLaunch::launch(const std::map<std::string, std::string>& cookie_map) {
    user_data_ = parse_user_data(cookie_map);
    global_manager_.set_user_data(user_data_);
    launch();
}

void GameLaunch::notify_config_done() {
    global_manager_.on_config_done();
}

void GameLaunch::notify_game_res_pkg_done() {
    global_manager_.on_game_res_pkg_done();
}

bool GameLaunch::is_launched() const {
    return launched_;
}

bool GameLaunch::is_ready() const {
    return global_manager_.is_all_res_done();
}

int GameLaunch::parse_uin(const std::string& raw_uin) const {
    std::string digits;
    digits.reserve(raw_uin.size());
    for (const char ch : raw_uin) {
        if (std::isdigit(static_cast<unsigned char>(ch)) != 0) {
            digits.push_back(ch);
        }
    }
    if (digits.empty()) {
        return 0;
    }
    return std::stoi(digits);
}

UserData GameLaunch::parse_user_data(const std::map<std::string, std::string>& cookie_map) const {
    UserData data;
    data.uin = static_cast<uint32_t>(parse_uin(get_cookie_or_empty(cookie_map, "angel_uin")));
    data.set_session_key(get_cookie_or_empty(cookie_map, "angel_key"));
    data.skey = get_cookie_or_empty(cookie_map, "skey");
    data.pskey = get_cookie_or_empty(cookie_map, "pskey");
    data.is_login_in = !data.skey.empty();
    return data;
}

const UserData& GameLaunch::user_data() const {
    return user_data_;
}

GlobalManager& GameLaunch::global_manager() {
    return global_manager_;
}

const GlobalManager& GameLaunch::global_manager() const {
    return global_manager_;
}
