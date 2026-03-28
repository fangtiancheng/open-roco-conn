#include "angle_event_manager.hpp"

#include "global_api.hpp"
#include "global_timer.hpp"
#include <chrono>
#include <utility>

namespace {
constexpr const char* k_tick_timer_name = "angle_event_manager_tick";
constexpr const char* k_render_timer_name = "angle_event_manager_render";
}

AngleEventManager::AngleEventManager() {
    last_time_ = GlobalAPI::get_timer();

    GlobalTimer::init();
    auto& timer = GlobalTimer::instance();
    timer.register_timer(
        k_tick_timer_name,
        std::chrono::milliseconds(tick_delay_ms),
        [this]() { on_tick(); },
        false,
        true
    );
    timer.register_timer(
        k_render_timer_name,
        std::chrono::milliseconds(render_delay_ms),
        [this]() { on_render(); },
        false,
        true
    );
}

AngleEventManager::~AngleEventManager() {
    auto& timer = GlobalTimer::instance();
    timer.unregister_timer(k_tick_timer_name);
    timer.unregister_timer(k_render_timer_name);
}

void AngleEventManager::set_render_timer(const bool enabled) {
    auto& timer = GlobalTimer::instance();
    render_enabled_ = enabled;
    if (enabled) {
        timer.start(k_render_timer_name, false);
        return;
    }
    timer.stop(k_render_timer_name);
}

std::size_t AngleEventManager::add_tick_listener(frame_listener listener) {
    if (!listener) {
        return 0;
    }
    std::lock_guard<std::mutex> lock(mutex_);
    const std::size_t id = next_listener_id_++;
    tick_listeners_[id] = std::move(listener);
    return id;
}

bool AngleEventManager::remove_tick_listener(const std::size_t listener_id) {
    std::lock_guard<std::mutex> lock(mutex_);
    return tick_listeners_.erase(listener_id) > 0;
}

std::size_t AngleEventManager::add_render_listener(frame_listener listener) {
    if (!listener) {
        return 0;
    }
    std::lock_guard<std::mutex> lock(mutex_);
    const std::size_t id = next_listener_id_++;
    render_listeners_[id] = std::move(listener);
    return id;
}

bool AngleEventManager::remove_render_listener(const std::size_t listener_id) {
    std::lock_guard<std::mutex> lock(mutex_);
    return render_listeners_.erase(listener_id) > 0;
}

bool AngleEventManager::add_cmd_listener(const int32_t cmd_type, cmd_listener listener) {
    if (!listener) {
        return false;
    }
    std::lock_guard<std::mutex> lock(mutex_);
    if (cmd_listeners_.contains(cmd_type)) {
        return false;
    }
    cmd_listeners_[cmd_type] = std::move(listener);
    return true;
}

bool AngleEventManager::remove_cmd_listener(const int32_t cmd_type) {
    std::lock_guard<std::mutex> lock(mutex_);
    return cmd_listeners_.erase(cmd_type) > 0;
}

bool AngleEventManager::cmd_executed(const int32_t cmd_type, void* arg) {
    cmd_listener listener;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        auto it = cmd_listeners_.find(cmd_type);
        if (it == cmd_listeners_.end()) {
            return false;
        }
        listener = it->second;
    }
    listener(arg);
    return true;
}

EventDispatcher& AngleEventManager::angel_event_dispatcher() {
    return global_dispatcher_;
}

void AngleEventManager::on_enter_frame() {
    last_time_ = GlobalAPI::get_timer();
}

void AngleEventManager::on_tick() {
    std::vector<frame_listener> listeners;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        listeners.reserve(tick_listeners_.size());
        for (const auto& [_, listener] : tick_listeners_) {
            listeners.push_back(listener);
        }
    }
    on_enter_frame();
    for (const auto& listener : listeners) {
        listener();
    }
}

void AngleEventManager::on_render() {
    if (!render_enabled_) {
        return;
    }
    std::vector<frame_listener> listeners;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        listeners.reserve(render_listeners_.size());
        for (const auto& [_, listener] : render_listeners_) {
            listeners.push_back(listener);
        }
    }
    for (const auto& listener : listeners) {
        listener();
    }
}
