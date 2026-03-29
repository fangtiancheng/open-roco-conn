#include "event_dispatcher.hpp"
#include "base/define.hpp"
#include <chrono>
#include <format>

bool EventDispatcher::remove_event_listener(const EventKey event_key, const std::size_t callback_id) {
    bool removed = false;
    if (auto it = get_store<void>().find(event_key); it != get_store<void>().end()) {
        removed = remove_from_bucket(it->second, callback_id, is_invoking_, contain_canceled_) || removed;
    }
    if (auto it = get_store<std::string>().find(event_key); it != get_store<std::string>().end()) {
        removed = remove_from_bucket(it->second, callback_id, is_invoking_, contain_canceled_) || removed;
    }
    if (auto it = get_store<boost::json::value>().find(event_key); it != get_store<boost::json::value>().end()) {
        removed = remove_from_bucket(it->second, callback_id, is_invoking_, contain_canceled_) || removed;
    }
    if (auto it = get_store<ByteArray>().find(event_key); it != get_store<ByteArray>().end()) {
        removed = remove_from_bucket(it->second, callback_id, is_invoking_, contain_canceled_) || removed;
    }
    return removed;
}

bool EventDispatcher::has_event_listener(const EventKey event_key) const {
    if (auto it = get_store<void>().find(event_key); it != get_store<void>().end() && has_active_listener(it->second)) {
        return true;
    }
    if (auto it = get_store<std::string>().find(event_key); it != get_store<std::string>().end() && has_active_listener(it->second)) {
        return true;
    }
    if (auto it = get_store<boost::json::value>().find(event_key); it != get_store<boost::json::value>().end() && has_active_listener(it->second)) {
        return true;
    }
    if (auto it = get_store<ByteArray>().find(event_key); it != get_store<ByteArray>().end() && has_active_listener(it->second)) {
        return true;
    }
    return false;
}

void EventDispatcher::purge_canceled(const EventKey event_key) {
    purge_bucket(get_store<void>(), event_key);
    purge_bucket(get_store<std::string>(), event_key);
    purge_bucket(get_store<boost::json::value>(), event_key);
    purge_bucket(get_store<ByteArray>(), event_key);
    contain_canceled_ = false;
}

void EventDispatcher::begin_timer() {
    auto now = std::chrono::system_clock::now();
    res_begin_timer_ = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()).count();
    if (Define::IS_DEBUG) {
        debug_line(std::format("EventDispatcher==beginTimer==>{}ms", res_begin_timer_));
    }
}

void EventDispatcher::end_timer() {
    auto now = std::chrono::system_clock::now();
    res_end_timer_ = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()).count();
    if (Define::IS_DEBUG) {
        debug_line(std::format(
            "EventDispatcher==endTimer==>{}=={}=={}ms",
            res_begin_timer_,
            res_end_timer_,
            (res_end_timer_ - res_begin_timer_)
        ));
    }
}
