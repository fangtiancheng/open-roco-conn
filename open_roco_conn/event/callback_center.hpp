#pragma once
#include "base/rf_base.hpp"
#include <cstddef>
#include <cstdint>
#include <deque>
#include <functional>
#include <limits>
#include <memory>
#include <mutex>
#include <unordered_map>
#include <vector>

struct CallbackEvent {
    uint32_t event_id = 0;
    std::shared_ptr<void> payload{};
    const void* sender = nullptr;
};

class CallbackCenter: public RFBase {
public:
    using callback_type = std::function<void(const CallbackEvent&)>;

    const std::string_view get_param1() const override { return "fa3a44B+85BCqBkBYwcJW/f"; }
    const std::string_view get_param2() const override { return "CallbackCenter"; }

    std::size_t register_callback(uint32_t event_id, callback_type callback);
    bool unregister_callback(uint32_t event_id, std::size_t callback_id);

    void notify_sync(uint32_t event_id,
                     std::shared_ptr<void> payload = {},
                     const void* sender = nullptr);

    void enqueue(uint32_t event_id,
                 std::shared_ptr<void> payload = {},
                 const void* sender = nullptr);

    std::size_t drain_pending(std::size_t max_events = std::numeric_limits<std::size_t>::max());
    std::size_t pending_size() const;

private:
    struct CallbackInfo {
        std::size_t id = 0;
        callback_type call{};
        bool canceled = false;
    };

    using callback_list = std::vector<CallbackInfo>;
    std::unordered_map<uint32_t, callback_list> callbacks_{};
    std::deque<CallbackEvent> pending_events_{};
    std::size_t next_callback_id_ = 1;
    bool dispatching_ = false;
    mutable std::mutex mutex_{};

    void purge_canceled_locked(uint32_t event_id);
};
