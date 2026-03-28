#pragma once
#include "base/rf_base.hpp"
#include "event/event_dispatcher.hpp"
#include <cstddef>
#include <cstdint>
#include <functional>
#include <mutex>
#include <string>
#include <unordered_map>
#include <vector>

class AngleEventManager: public RFBase {
public:
    const std::string_view get_param1() const override { return "bc3572iYeZKa6Z2idrF6ieF"; }
    const std::string_view get_param2() const override { return "AngleEventManager"; }

    using cmd_listener = std::function<void(void*)>;
    using frame_listener = std::function<void()>;

    static constexpr int32_t tick_delay_ms = 30;
    static constexpr int32_t render_delay_ms = 70;

    AngleEventManager();
    ~AngleEventManager() override;

    AngleEventManager(const AngleEventManager&) = delete;
    AngleEventManager& operator=(const AngleEventManager&) = delete;

    void set_render_timer(bool enabled = false);
    std::size_t add_tick_listener(frame_listener listener);
    bool remove_tick_listener(std::size_t listener_id);
    std::size_t add_render_listener(frame_listener listener);
    bool remove_render_listener(std::size_t listener_id);

    bool add_cmd_listener(int32_t cmd_type, cmd_listener listener);
    bool remove_cmd_listener(int32_t cmd_type);
    bool cmd_executed(int32_t cmd_type, void* arg = nullptr);

    EventDispatcher& angel_event_dispatcher();

private:
    void on_enter_frame();
    void on_tick();
    void on_render();

    EventDispatcher global_dispatcher_;
    std::unordered_map<int32_t, cmd_listener> cmd_listeners_;
    std::unordered_map<std::size_t, frame_listener> tick_listeners_;
    std::unordered_map<std::size_t, frame_listener> render_listeners_;
    bool render_enabled_ = true;
    int64_t last_time_ = 0;
    std::size_t next_listener_id_ = 1;
    std::mutex mutex_;
};
