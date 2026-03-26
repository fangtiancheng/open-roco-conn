#include "global_api.hpp"
#include <chrono>
#include <format>

namespace {
bool g_is_login = false;
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
}

bool GlobalAPI::is_login() {
    return g_is_login;
}

void GlobalAPI::set_is_login(const bool value) {
    g_is_login = value;
}
