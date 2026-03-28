#include "global_api.hpp"
#include <chrono>
#include <format>

namespace {
bool g_is_login = false;
std::optional<RoleData> g_main_role_info{};
std::optional<GlobalAPI::WantToScene> g_want_to_scene{};
}

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
    g_is_login = false;
    g_main_role_info.reset();
    g_want_to_scene.reset();
}

bool GlobalAPI::is_login() {
    return g_is_login;
}

void GlobalAPI::set_is_login(const bool value) {
    g_is_login = value;
}

void GlobalAPI::set_main_role_info(const RoleData& role_data) {
    g_main_role_info = role_data;
}

std::optional<RoleData> GlobalAPI::get_main_role_info() {
    return g_main_role_info;
}

void GlobalAPI::clear_main_role_info() {
    g_main_role_info.reset();
}

void GlobalAPI::set_want_to_scene(const uint16_t scene_id, const uint16_t scene_version) {
    g_want_to_scene = WantToScene{
        .scene_id = scene_id,
        .scene_version = scene_version
    };
}

std::optional<GlobalAPI::WantToScene> GlobalAPI::get_want_to_scene() {
    return g_want_to_scene;
}

void GlobalAPI::clear_want_to_scene() {
    g_want_to_scene.reset();
}
