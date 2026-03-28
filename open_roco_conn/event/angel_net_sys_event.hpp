#pragma once
#include "event/base_event.hpp"
#include <string_view>

class AngelNetSysEvent: public BaseEvent {
public:
    const std::string_view get_param1() const override { return "1f84fmw07JKq5sLdWVZVECG"; }
    const std::string_view get_param2() const override { return "AngelNetSysEvent"; }

    static constexpr std::string_view ON_STATE_CHANGE = "onStateChange";
    static constexpr std::string_view NS_CONNETED = "nsConneted";
    static constexpr std::string_view NS_CLOSED = "nsClosed";
    static constexpr std::string_view NS_ERROR = "nsError";

    AngelNetSysEvent() = default;
    explicit AngelNetSysEvent(std::string type, bool bubbles = false);

    std::string curr_state{};
    uint32_t tcp_id = 0;
    uint32_t get_tcp_id() const;
    std::unique_ptr<BaseEvent> clone() const override;
};
