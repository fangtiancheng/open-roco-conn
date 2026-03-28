#include "event/timer.hpp"

#include "event/timer_event.hpp"
#include <stdexcept>

Timer::Timer(const std::chrono::milliseconds delay, const uint32_t repeat_count)
    : delay_(delay),
      repeat_count_(repeat_count) {
    if (delay_.count() <= 0) {
        throw std::invalid_argument("Timer delay must be greater than zero");
    }
    worker_ = std::thread([this]() { run_loop(); });
}

Timer::~Timer() {
    shutdown_.store(true);
    cv_.notify_all();
    if (worker_.joinable()) {
        worker_.join();
    }
}

bool Timer::start(const bool execute_immediately) {
    {
        std::lock_guard<std::mutex> lock(mutex_);
        if (active_) {
            return false;
        }
        active_ = true;
    }

    if (execute_immediately) {
        if (!fire_once()) {
            cv_.notify_all();
            return true;
        }
    }

    cv_.notify_all();
    return true;
}

void Timer::stop() {
    std::lock_guard<std::mutex> lock(mutex_);
    active_ = false;
}

void Timer::reset() {
    std::lock_guard<std::mutex> lock(mutex_);
    active_ = false;
    current_count_ = 0;
}

bool Timer::running() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return active_;
}

uint32_t Timer::repeat_count() const {
    return repeat_count_;
}

uint32_t Timer::current_count() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return current_count_;
}

void Timer::run_loop() {
    std::unique_lock<std::mutex> lock(mutex_);
    while (!shutdown_.load()) {
        cv_.wait(lock, [this]() {
            return shutdown_.load() || active_;
        });
        if (shutdown_.load()) {
            break;
        }

        if (cv_.wait_for(lock, delay_, [this]() {
            return shutdown_.load() || !active_;
        })) {
            continue;
        }

        lock.unlock();
        fire_once();
        lock.lock();
    }
}

bool Timer::fire_once() {
    bool fire_complete = false;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        if (!active_) {
            return false;
        }

        ++current_count_;
        if (repeat_count_ > 0 && current_count_ >= repeat_count_) {
            active_ = false;
            fire_complete = true;
        }
    }

    TimerEvent tick_event{std::string(TimerEvent::TIMER)};
    dispatch_event(tick_event);
    if (fire_complete) {
        TimerEvent complete_event{std::string(TimerEvent::TIMER_COMPLETE)};
        dispatch_event(complete_event);
        return false;
    }
    return true;
}
