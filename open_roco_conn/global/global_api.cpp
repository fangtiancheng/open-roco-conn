#include "global_api.hpp"
#include <chrono>
#include <iomanip>
#include <sstream>

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

    std::tm localTime;
#ifdef _WIN32
    localtime_s(&localTime, &time);  // Windows
#else
    localtime_r(&time, &localTime);  // Linux/Mac
#endif

    std::ostringstream oss;
    oss << "--timer:==>"
        << (localTime.tm_year + 1900) << "-"
        << std::setw(2) << std::setfill('0') << (localTime.tm_mon + 1) << "-"
        << std::setw(2) << std::setfill('0') << localTime.tm_mday << " "
        << std::setw(2) << std::setfill('0') << localTime.tm_hour << ":"
        << std::setw(2) << std::setfill('0') << localTime.tm_min << ":"
        << std::setw(2) << std::setfill('0') << localTime.tm_sec;

    return oss.str();
}
