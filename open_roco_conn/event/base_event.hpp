#pragma once
#include "base/rf_base.hpp"
#include <string>
class BaseEvent: public RFBase {
public:
    const std::string_view get_param1() const override {return "4876cPH4PdBWqjWLDBNxuvP";}
    const std::string_view get_param2() const override {return "BaseEvent";}
    std::string message{};
    void* data; // TODO
    // virtual BaseEvent clone() const ;
};

class ViewEvent: public BaseEvent{
public:
    static constexpr std::string_view EVENT = "ViewEvent.UI_EVENT";
    static constexpr std::string_view EVENT_NAME_DEFAULT = "ViewEvent.UI_EVENT_NAME_DEFAULT";
};
