#pragma once
#include "base/rf_base.hpp"
#include <memory>
#include <string>

class BaseEvent: public RFBase {
public:
    BaseEvent() = default;
    explicit BaseEvent(std::string type, bool bubbles = false);

    const std::string_view get_param1() const override {return "4876cPH4PdBWqjWLDBNxuvP";}
    const std::string_view get_param2() const override {return "BaseEvent";}

    virtual std::unique_ptr<BaseEvent> clone() const;

    const std::string& type() const;
    bool bubbles() const;

    std::string message{};
    void* data = nullptr; // Shared payload, ownership stays with the producer.

protected:
    std::string type_{};
    bool bubbles_ = false;
};

class ViewEvent: public BaseEvent{
public:
    static constexpr std::string_view EVENT = "ViewEvent.UI_EVENT";
    static constexpr std::string_view EVENT_NAME_DEFAULT = "ViewEvent.UI_EVENT_NAME_DEFAULT";

    explicit ViewEvent(std::string name = std::string(EVENT_NAME_DEFAULT));

    std::unique_ptr<BaseEvent> clone() const override;
    const std::string& name() const;

private:
    std::string name_ = std::string(EVENT_NAME_DEFAULT);
};
