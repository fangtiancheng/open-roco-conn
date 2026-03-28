#pragma once
#include "event/event_dispatcher.hpp"
#include <atomic>
#include <chrono>
#include <condition_variable>
#include <cstdint>
#include <mutex>
#include <string_view>
#include <thread>

class Timer: public EventDispatcher {
public:
    const std::string_view get_param1() const override { return "0e943dbXhFFbadeIWvfb0pT"; }
    const std::string_view get_param2() const override { return "Timer"; }

    explicit Timer(std::chrono::milliseconds delay, uint32_t repeat_count = 0);
    ~Timer() override;

    Timer(const Timer&) = delete;
    Timer& operator=(const Timer&) = delete;

    bool start(bool execute_immediately = false);
    void stop();
    void reset();

    bool running() const;
    uint32_t repeat_count() const;
    uint32_t current_count() const;

private:
    void run_loop();
    bool fire_once();

    const std::chrono::milliseconds delay_;
    const uint32_t repeat_count_;
    uint32_t current_count_ = 0;
    bool active_ = false;
    std::atomic<bool> shutdown_{false};
    mutable std::mutex mutex_{};
    std::condition_variable cv_{};
    std::thread worker_{};
};
