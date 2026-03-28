#pragma once
#include "base/rf_base.hpp"
#include <atomic>
#include <chrono>
#include <condition_variable>
#include <functional>
#include <mutex>
#include <string>
#include <thread>
#include <unordered_map>

class GlobalTimer: public RFBase {
public:
    const std::string_view get_param1() const override { return "e14d1XT+MJNr7Kf3v7QvlVS"; }
    const std::string_view get_param2() const override { return "GlobalTimer"; }

    using timer_callback = std::function<void()>;

    GlobalTimer();
    ~GlobalTimer() override;

    GlobalTimer(const GlobalTimer&) = delete;
    GlobalTimer& operator=(const GlobalTimer&) = delete;

    bool register_timer(
        const std::string& name,
        std::chrono::milliseconds interval,
        timer_callback callback,
        bool execute_immediately = true,
        bool start_running = true
    );

    bool unregister_timer(const std::string& name);
    bool has_timer(const std::string& name);
    bool start(const std::string& name, bool execute_immediately = false);
    bool stop(const std::string& name);

private:
    struct timer_entry {
        std::chrono::milliseconds interval{0};
        timer_callback callback;
        std::chrono::steady_clock::time_point last_exec{};
        bool is_running = true;
    };

    void worker_loop();

    std::unordered_map<std::string, timer_entry> timers_;
    std::mutex mutex_;
    std::condition_variable cv_;
    std::atomic<bool> running_{true};
    std::thread worker_;
    std::chrono::milliseconds fast_interval_{16};
};
