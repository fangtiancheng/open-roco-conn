#pragma once
#include "base/rf_base.hpp"
#include "event/base_event.hpp"
#include <cstdint>
#include <functional>
#include <map>
#include <string>
#include <vector>

struct CallbackInfo;

class EventDispatcher: public RFBase {
    bool is_invoking = false;
    bool contain_canceled = false;
    std::map<std::string, std::vector<CallbackInfo>> callbacks{};
    int64_t res_begin_timer = 0;
    int64_t res_end_timer = 0;
    std::size_t next_callback_id_ = 1;

public:
    using event_callback = std::function<void(const BaseEvent&)>;

    const std::string_view get_param1() const override { return "48587FFAcVH5YpkyvFs0TMy"; }
    const std::string_view get_param2() const override { return "EventDispatcher"; }

    std::size_t add_event_listener(const std::string& event_type, event_callback callback);
    std::size_t add_event_listener(const std::string& event_type, const std::function<void()>& callback);
    bool remove_event_listener(const std::string& event_type, std::size_t callback_id);
    bool remove_event_listener(const std::string& event_type, const std::function<void()>& callback);
    void dispatch_event(const BaseEvent& event);
    void dispatch_event(const std::string& event_type);
    void purge_canceled(const std::string& event_type);
    bool has_event_listener(const std::string& event_type) const;
    void begin_timer();
    void end_timer();
};

struct CallbackInfo {
    EventDispatcher::event_callback call{};
    std::function<void(void)> legacy_call{};
    std::size_t id = 0;
    bool is_null = true;
};
