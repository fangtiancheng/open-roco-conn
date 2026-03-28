#pragma once
#include "base/rf_base.hpp"
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

public:
    const std::string_view get_param1() const override { return "48587FFAcVH5YpkyvFs0TMy"; }
    const std::string_view get_param2() const override { return "EventDispatcher"; }
    void add_event_listener(const std::string& event_type, const std::function<void()>& callback);
    void remove_event_listener(const std::string& event_type, const std::function<void()>& callback);
    void dispatch_event(const std::string& event_type);
    void purge_canceled(const std::string& event_type);
    bool has_event_listener(const std::string& event_type) const;
    void begin_timer();
    void end_timer();
};

struct CallbackInfo {
    std::function<void(void)> call{};
    bool is_null = true;
};
