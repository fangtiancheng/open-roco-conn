#include "global_api.hpp"
#include <chrono>
#include <format>

long long GlobalAPI::get_timer() {
    auto now = std::chrono::system_clock::now();
    auto millis = std::chrono::duration_cast<std::chrono::milliseconds>(
            now.time_since_epoch()
    ).count();
    return millis;
}

std::string GlobalAPI::get_timer_format() {
    auto now = std::chrono::system_clock::now();
    std::time_t time = std::chrono::system_clock::to_time_t(now);

    std::tm local_time;
#ifdef _WIN32
    localtime_s(&local_time, &time);  // Windows
#else
    localtime_r(&time, &local_time);  // Linux/Mac
#endif
    return std::format(
        "--timer:==>{}-{:02d}-{:02d} {:02d}:{:02d}:{:02d}",
        local_time.tm_year + 1900,
        local_time.tm_mon + 1,
        local_time.tm_mday,
        local_time.tm_hour,
        local_time.tm_min,
        local_time.tm_sec);
}

void GlobalAPI::init() {
    is_login_ = false;
    main_role_info_.reset();
    want_to_scene_.reset();
}

bool GlobalAPI::is_login() const {
    return is_login_;
}

void GlobalAPI::set_is_login(const bool value) {
    is_login_ = value;
}

void GlobalAPI::set_main_role_info(const RoleData& role_data) {
    main_role_info_ = role_data;
}

std::optional<RoleData> GlobalAPI::get_main_role_info() const {
    return main_role_info_;
}

void GlobalAPI::clear_main_role_info() {
    main_role_info_.reset();
}

void GlobalAPI::set_want_to_scene(const uint16_t scene_id, const uint16_t scene_version) {
    want_to_scene_ = WantToScene{
        .scene_id = scene_id,
        .scene_version = scene_version
    };
}

std::optional<GlobalAPI::WantToScene> GlobalAPI::get_want_to_scene() const {
    return want_to_scene_;
}

void GlobalAPI::clear_want_to_scene() {
    want_to_scene_.reset();
}
