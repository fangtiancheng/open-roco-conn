#pragma once
#include "adf_protocol/byte_array.hpp"
#include "base/rf_base.hpp"
#include "event/event_key.hpp"
#include <boost/json/value.hpp>
#include <algorithm>
#include <cstddef>
#include <cstdint>
#include <concepts>
#include <expected>
#include <functional>
#include <map>
#include <string>
#include <string_view>
#include <tuple>
#include <type_traits>
#include <utility>
#include <vector>

enum class EventPayloadKind : uint8_t {
    none = 0,
    txt = 1,
    json = 2,
    bytearray = 3
};

template <EventPayloadKind Kind>
struct EventPayloadType;

template <>
struct EventPayloadType<EventPayloadKind::none> { using type = void; };
template <>
struct EventPayloadType<EventPayloadKind::txt> { using type = std::string; };
template <>
struct EventPayloadType<EventPayloadKind::json> { using type = boost::json::value; };
template <>
struct EventPayloadType<EventPayloadKind::bytearray> { using type = ByteArray; };

template <typename T>
struct EventPayloadKindOf;
template <>
struct EventPayloadKindOf<void> { static constexpr EventPayloadKind value = EventPayloadKind::none; };
template <>
struct EventPayloadKindOf<std::string> { static constexpr EventPayloadKind value = EventPayloadKind::txt; };
template <>
struct EventPayloadKindOf<boost::json::value> { static constexpr EventPayloadKind value = EventPayloadKind::json; };
template <>
struct EventPayloadKindOf<ByteArray> { static constexpr EventPayloadKind value = EventPayloadKind::bytearray; };

template <typename T>
concept SupportedEventPayload = std::is_void_v<std::decay_t<T>> ||
                                std::is_same_v<std::decay_t<T>, std::string> ||
                                std::is_same_v<std::decay_t<T>, boost::json::value> ||
                                std::is_same_v<std::decay_t<T>, ByteArray>;

template <typename...>
inline constexpr bool always_false_v = false;

template <typename T>
using event_callback_t = std::conditional_t<
    std::is_void_v<T>,
    std::function<std::expected<void, std::string>()>,
    std::function<std::expected<void, std::string>(T)>
>;

template <typename T>
struct EventStoreIndex;
template <>
struct EventStoreIndex<void>: std::integral_constant<std::size_t, 0> {};
template <>
struct EventStoreIndex<std::string>: std::integral_constant<std::size_t, 1> {};
template <>
struct EventStoreIndex<boost::json::value>: std::integral_constant<std::size_t, 2> {};
template <>
struct EventStoreIndex<ByteArray>: std::integral_constant<std::size_t, 3> {};

class EventDispatcher: public RFBase {
public:
    template <typename T = void>
    using Result = std::expected<T, std::string>;
    using dispatch_result_t = Result<void>;

    const std::string_view get_param1() const override { return "48587FFAcVH5YpkyvFs0TMy"; }
    const std::string_view get_param2() const override { return "EventDispatcher"; }

    template <typename T, typename Callback>
    std::size_t add_event_listener(EventKey event_key, Callback&& callback) requires SupportedEventPayload<T> {
        using payload_t = std::decay_t<T>;
        auto& callbacks = get_store<payload_t>();
        auto normalized = normalize_callback<payload_t>(std::forward<Callback>(callback));
        return add_typed_listener(callbacks, event_key, std::move(normalized));
    }

    bool remove_event_listener(EventKey event_key, std::size_t callback_id);
    bool has_event_listener(EventKey event_key) const;

    template <typename T>
    dispatch_result_t dispatch_event(EventKey event_key) requires std::is_void_v<std::decay_t<T>> {
        using payload_t = std::decay_t<T>;
        auto& callbacks = get_store<payload_t>();
        auto it = callbacks.find(event_key);
        if (it == callbacks.end() || it->second.empty()) {
            return {};
        }
        is_invoking_ = true;
        for (auto& info : it->second) {
            if (info.is_null || !info.call) {
                continue;
            }
            auto callback_result = info.call();
            if (!callback_result.has_value()) {
                is_invoking_ = false;
                if (contain_canceled_) {
                    purge_canceled(event_key);
                }
                return std::unexpected(std::move(callback_result.error()));
            }
        }
        is_invoking_ = false;
        if (contain_canceled_) {
            purge_canceled(event_key);
        }
        return {};
    }

    template <typename T>
    dispatch_result_t dispatch_event(EventKey event_key, T payload) requires (!std::is_void_v<std::decay_t<T>> && SupportedEventPayload<T>) {
        using payload_t = std::decay_t<T>;
        auto& callbacks = get_store<payload_t>();
        auto it = callbacks.find(event_key);
        if (it == callbacks.end() || it->second.empty()) {
            return {};
        }
        is_invoking_ = true;
        for (auto& info : it->second) {
            if (info.is_null || !info.call) {
                continue;
            }
            auto callback_result = info.call(payload);
            if (!callback_result.has_value()) {
                is_invoking_ = false;
                if (contain_canceled_) {
                    purge_canceled(event_key);
                }
                return std::unexpected(std::move(callback_result.error()));
            }
        }
        is_invoking_ = false;
        if (contain_canceled_) {
            purge_canceled(event_key);
        }
        return {};
    }

    void purge_canceled(EventKey event_key);
    void begin_timer();
    void end_timer();

private:
    template <typename CallbackT>
    struct CallbackInfo {
        CallbackT call{};
        std::size_t id = 0;
        bool is_null = true;
    };

    template <typename T>
    using callback_type_t = event_callback_t<T>;

    template <typename T>
    using callback_bucket_t = std::map<EventKey, std::vector<CallbackInfo<callback_type_t<T>>>>;

    std::tuple<
        callback_bucket_t<void>,
        callback_bucket_t<std::string>,
        callback_bucket_t<boost::json::value>,
        callback_bucket_t<ByteArray>
    > callback_stores_{};

    template <typename T>
    callback_bucket_t<T>& get_store() {
        return std::get<EventStoreIndex<T>::value>(callback_stores_);
    }

    template <typename T>
    const callback_bucket_t<T>& get_store() const {
        return std::get<EventStoreIndex<T>::value>(callback_stores_);
    }

    template <typename CallbackT>
    static bool remove_from_bucket(std::vector<CallbackInfo<CallbackT>>& bucket, std::size_t callback_id, bool is_invoking, bool& contain_canceled);

    template <typename CallbackT>
    static bool has_active_listener(const std::vector<CallbackInfo<CallbackT>>& bucket);

    template <typename CallbackT>
    std::size_t add_typed_listener(std::map<EventKey, std::vector<CallbackInfo<CallbackT>>>& callbacks, EventKey event_key, CallbackT callback);

    template <typename CallbackT>
    static void purge_bucket(std::map<EventKey, std::vector<CallbackInfo<CallbackT>>>& callbacks, EventKey event_key);

    template <typename PayloadT, typename Callback>
    static event_callback_t<PayloadT> normalize_callback(Callback&& callback);

    bool is_invoking_ = false;
    bool contain_canceled_ = false;
    int64_t res_begin_timer_ = 0;
    int64_t res_end_timer_ = 0;
    std::size_t next_callback_id_ = 1;
};

template <typename CallbackT>
bool EventDispatcher::remove_from_bucket(std::vector<CallbackInfo<CallbackT>>& bucket,
                                         const std::size_t callback_id,
                                         const bool is_invoking,
                                         bool& contain_canceled) {
    for (auto it = bucket.begin(); it != bucket.end(); ++it) {
        if (it->is_null || it->id != callback_id) {
            continue;
        }
        if (is_invoking) {
            it->is_null = true;
            contain_canceled = true;
        } else {
            bucket.erase(it);
        }
        return true;
    }
    return false;
}

template <typename CallbackT>
bool EventDispatcher::has_active_listener(const std::vector<CallbackInfo<CallbackT>>& bucket) {
    for (const auto& info : bucket) {
        if (!info.is_null) {
            return true;
        }
    }
    return false;
}

template <typename CallbackT>
std::size_t EventDispatcher::add_typed_listener(std::map<EventKey, std::vector<CallbackInfo<CallbackT>>>& callbacks,
                                                const EventKey event_key,
                                                CallbackT callback) {
    if (!callback) {
        return 0;
    }
    const std::size_t callback_id = next_callback_id_++;
    callbacks[event_key].push_back(CallbackInfo<CallbackT>{
        .call = std::move(callback),
        .id = callback_id,
        .is_null = false
    });
    return callback_id;
}

template <typename CallbackT>
void EventDispatcher::purge_bucket(std::map<EventKey, std::vector<CallbackInfo<CallbackT>>>& callbacks, const EventKey event_key) {
    auto it = callbacks.find(event_key);
    if (it != callbacks.end()) {
        std::erase_if(it->second, [](const CallbackInfo<CallbackT>& ci) { return ci.is_null; });
    }
}

template <typename PayloadT, typename Callback>
event_callback_t<PayloadT> EventDispatcher::normalize_callback(Callback&& callback) {
    if constexpr (std::is_void_v<PayloadT>) {
        if constexpr (std::is_invocable_r_v<dispatch_result_t, Callback>) {
            return event_callback_t<PayloadT>(std::forward<Callback>(callback));
        } else {
            static_assert(always_false_v<Callback>, "Event callback must return std::expected<void, std::string>.");
        }
    } else {
        if constexpr (std::is_invocable_r_v<dispatch_result_t, Callback, PayloadT>) {
            return event_callback_t<PayloadT>(std::forward<Callback>(callback));
        } else {
            static_assert(always_false_v<Callback>, "Event callback must return std::expected<void, std::string>.");
        }
    }
}
