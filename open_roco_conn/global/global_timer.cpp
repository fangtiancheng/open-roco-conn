#include "global_timer.hpp"

#include <utility>
#include <vector>

GlobalTimer::GlobalTimer() {
    worker_ = std::thread(&GlobalTimer::worker_loop, this);
}

GlobalTimer::~GlobalTimer() {
    running_.store(false);
    cv_.notify_all();
    if (worker_.joinable()) {
        worker_.join();
    }
}

bool GlobalTimer::register_timer(
    const std::string& name,
    std::chrono::milliseconds interval,
    timer_callback callback,
    const bool execute_immediately,
    const bool start_running
) {
    if (name.empty() || interval.count() <= 0 || !callback) {
        return false;
    }

    timer_callback immediate_callback;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        if (timers_.contains(name)) {
            return false;
        }

        timer_entry entry;
        entry.interval = interval;
        entry.callback = std::move(callback);
        entry.last_exec = std::chrono::steady_clock::now();
        entry.is_running = start_running;
        if (execute_immediately && start_running) {
            immediate_callback = entry.callback;
        }
        timers_.emplace(name, std::move(entry));
    }
    cv_.notify_all();

    if (immediate_callback) {
        immediate_callback();
    }
    return true;
}

bool GlobalTimer::unregister_timer(const std::string& name) {
    std::lock_guard<std::mutex> lock(mutex_);
    return timers_.erase(name) > 0;
}

bool GlobalTimer::has_timer(const std::string& name) {
    std::lock_guard<std::mutex> lock(mutex_);
    return timers_.contains(name);
}

bool GlobalTimer::start(const std::string& name, const bool execute_immediately) {
    timer_callback immediate_callback;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        auto it = timers_.find(name);
        if (it == timers_.end()) {
            return false;
        }
        it->second.is_running = true;
        it->second.last_exec = std::chrono::steady_clock::now();
        if (execute_immediately) {
            immediate_callback = it->second.callback;
        }
    }

    cv_.notify_all();
    if (immediate_callback) {
        immediate_callback();
    }
    return true;
}

bool GlobalTimer::stop(const std::string& name) {
    std::lock_guard<std::mutex> lock(mutex_);
    auto it = timers_.find(name);
    if (it == timers_.end()) {
        return false;
    }
    it->second.is_running = false;
    return true;
}

void GlobalTimer::worker_loop() {
    while (running_.load()) {
        std::vector<timer_callback> due_callbacks;
        {
            std::unique_lock<std::mutex> lock(mutex_);
            cv_.wait_for(lock, fast_interval_, [this]() { return !running_.load(); });
            if (!running_.load()) {
                break;
            }

            const auto now = std::chrono::steady_clock::now();
            for (auto& [_, entry] : timers_) {
                if (!entry.is_running) {
                    continue;
                }
                if (now - entry.last_exec < entry.interval) {
                    continue;
                }
                entry.last_exec = now;
                due_callbacks.push_back(entry.callback);
            }
        }

        for (const auto& callback : due_callbacks) {
            if (!callback) {
                continue;
            }
            try {
                callback();
            } catch (...) {
                // Keep timer thread alive even if callback throws.
            }
        }
    }
}
