#include "callback_center.hpp"
#include <algorithm>

std::size_t CallbackCenter::register_callback(const uint32_t event_id, callback_type callback) {
    if (!callback) {
        return 0;
    }

    std::lock_guard<std::mutex> lock(mutex_);
    const std::size_t callback_id = next_callback_id_++;
    callbacks_[event_id].push_back(CallbackInfo{
        .id = callback_id,
        .call = std::move(callback),
        .canceled = false
    });
    return callback_id;
}

bool CallbackCenter::unregister_callback(const uint32_t event_id, const std::size_t callback_id) {
    std::lock_guard<std::mutex> lock(mutex_);
    auto it = callbacks_.find(event_id);
    if (it == callbacks_.end()) {
        return false;
    }

    auto& list = it->second;
    for (auto pinfo = list.begin(); pinfo != list.end(); ++pinfo) {
        if (pinfo->id != callback_id || pinfo->canceled) {
            continue;
        }

        if (dispatching_) {
            pinfo->canceled = true;
        } else {
            list.erase(pinfo);
        }
        return true;
    }
    return false;
}

void CallbackCenter::notify_sync(const uint32_t event_id,
                                 std::shared_ptr<void> payload,
                                 const void* sender) {
    callback_list callbacks_copy;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        auto it = callbacks_.find(event_id);
        if (it == callbacks_.end() || it->second.empty()) {
            return;
        }
        dispatching_ = true;
        callbacks_copy = it->second;
    }

    CallbackEvent event{
        .event_id = event_id,
        .payload = std::move(payload),
        .sender = sender
    };
    for (const auto& callback : callbacks_copy) {
        if (!callback.canceled && callback.call) {
            callback.call(event);
        }
    }

    std::lock_guard<std::mutex> lock(mutex_);
    dispatching_ = false;
    purge_canceled_locked(event_id);
}

void CallbackCenter::enqueue(const uint32_t event_id,
                             std::shared_ptr<void> payload,
                             const void* sender) {
    std::lock_guard<std::mutex> lock(mutex_);
    pending_events_.push_back(CallbackEvent{
        .event_id = event_id,
        .payload = std::move(payload),
        .sender = sender
    });
}

std::size_t CallbackCenter::drain_pending(const std::size_t max_events) {
    std::size_t handled = 0;
    while (handled < max_events) {
        CallbackEvent next{};
        {
            std::lock_guard<std::mutex> lock(mutex_);
            if (pending_events_.empty()) {
                break;
            }
            next = std::move(pending_events_.front());
            pending_events_.pop_front();
        }
        notify_sync(next.event_id, std::move(next.payload), next.sender);
        ++handled;
    }
    return handled;
}

std::size_t CallbackCenter::pending_size() const {
    std::lock_guard<std::mutex> lock(mutex_);
    return pending_events_.size();
}

void CallbackCenter::purge_canceled_locked(const uint32_t event_id) {
    auto it = callbacks_.find(event_id);
    if (it == callbacks_.end()) {
        return;
    }
    auto& list = it->second;
    std::erase_if(list, [](const CallbackInfo& info) { return info.canceled; });
}
