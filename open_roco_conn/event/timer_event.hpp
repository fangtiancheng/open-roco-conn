#pragma once
#include "event/base_event.hpp"
#include <memory>
#include <string>
#include <string_view>

class TimerEvent: public BaseEvent {
public:
    const std::string_view get_param1() const override { return "273aeiPzxBAK4cnY7p7s6T"; }
    const std::string_view get_param2() const override { return "TimerEvent"; }

    static constexpr std::string_view TIMER = "TimerEvent.Timer";
    static constexpr std::string_view TIMER_COMPLETE = "TimerEvent.TimerComplete";

    TimerEvent() = default;
    explicit TimerEvent(std::string type, bool bubbles = false);

    std::unique_ptr<BaseEvent> clone() const override;
};
