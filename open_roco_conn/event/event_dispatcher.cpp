#include "event_dispatcher.hpp"
#include "base/define.hpp"
#include <chrono>
#include <format>

std::size_t EventDispatcher::add_event_listener(const std::string& event_type,
                                                event_callback callback) {
    if (!callback) {
        return 0;
    }

    const std::size_t callback_id = next_callback_id_++;
    callbacks[event_type].emplace_back(CallbackInfo{
        .call = std::move(callback),
        .legacy_call = {},
        .id = callback_id,
        .is_null = false
    });
    return callback_id;
}

std::size_t EventDispatcher::add_event_listener(const EventKey event_key, event_callback callback) {
    return add_event_listener(std::string(to_string(event_key)), std::move(callback));
}

bool EventDispatcher::remove_event_listener(const std::string& event_type,
                                            const std::size_t callback_id) {
    auto it = callbacks.find(event_type);
    if (it == callbacks.end()) {
        return false;
    }

    auto& list = it->second;
    for (auto pinfo = list.begin(); pinfo != list.end(); ++pinfo) {
        if (pinfo->is_null || pinfo->id != callback_id) {
            continue;
        }

        if (is_invoking) {
            pinfo->is_null = true;
            contain_canceled = true;
        } else {
            list.erase(pinfo);
        }
        return true;
    }
    return false;
}

bool EventDispatcher::remove_event_listener(const EventKey event_key, const std::size_t callback_id) {
    return remove_event_listener(std::string(to_string(event_key)), callback_id);
}

bool EventDispatcher::remove_event_listener(const std::string& event_type,
                                            const std::function<void()>& callback) {
    auto it = callbacks.find(event_type);
    if (it == callbacks.end()) {
        return false;
    }

    const auto lhs = callback.target<void(*)()>();
    if (lhs == nullptr) {
        return false;
    }

    auto& list = it->second;
    for (auto pinfo = list.begin(); pinfo != list.end(); ++pinfo) {
        if (pinfo->is_null || !pinfo->legacy_call) {
            continue;
        }

        const auto rhs = pinfo->legacy_call.target<void(*)()>();
        if (rhs == nullptr || *lhs != *rhs) {
            continue;
        }

        if (is_invoking) {
            pinfo->is_null = true;
            contain_canceled = true;
        } else {
            list.erase(pinfo);
        }
        return true;
    }
    return false;
}

void EventDispatcher::dispatch_event(const BaseEvent& event) {
    auto it = callbacks.find(event.type());
    if (it == callbacks.end()) {
        return;
    }

    auto& list = it->second;
    if (list.empty()) {
        return;
    }

    if (list.size() > 1) {
        debug_line("多个callback==>>" + event.type() );
    }

    is_invoking = true;
    for (auto& info : list) {
        if (!info.is_null && info.call) {
            info.call();
        }
    }
    is_invoking = false;

    if (contain_canceled) {
        purge_canceled(event.type());
    }
}

void EventDispatcher::dispatch_event(const std::string& event_type) {
    BaseEvent event{event_type};
    dispatch_event(event);
}

void EventDispatcher::dispatch_event(const EventKey event_key) {
    dispatch_event(std::string(to_string(event_key)));
}

void EventDispatcher::purge_canceled(const std::string& event_type) {
    auto it = callbacks.find(event_type);
    if (it != callbacks.end()) {
        std::erase_if(it->second, [](const CallbackInfo& ci) { return ci.is_null; });
    }
    contain_canceled = false;
}

void EventDispatcher::purge_canceled(const EventKey event_key) {
    purge_canceled(std::string(to_string(event_key)));
}

bool EventDispatcher::has_event_listener(const std::string& event_type) const {
    auto it = callbacks.find(event_type);
    if (it != callbacks.end()) {
        const auto& list = it->second;
        for (const auto& info : list) {
            if (!info.is_null) {
                return true;
            }
        }
    }
    return false;
}

bool EventDispatcher::has_event_listener(const EventKey event_key) const {
    return has_event_listener(std::string(to_string(event_key)));
}

void EventDispatcher::begin_timer() {
    auto now = std::chrono::system_clock::now();
    res_begin_timer = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()).count();
    if (Define::IS_DEBUG) {
        debug_line(std::format("EventDispatcher==beginTimer==>{}ms", res_begin_timer));
    }
}

void EventDispatcher::end_timer() {
    auto now = std::chrono::system_clock::now();
    res_end_timer = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()).count();
    if (Define::IS_DEBUG) {
        debug_line(std::format(
            "EventDispatcher==endTimer==>{}=={}=={}ms",
            res_begin_timer,
            res_end_timer,
            (res_end_timer - res_begin_timer)
        ));
    }
}
