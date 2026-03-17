#pragma once
#include "base/rf_base.hpp"
#include <string>


class WebSocketClient: public RFBase {
    std::string _name;
public:
    const std::string_view get_param1() override { return "fd464cY86lGjqqwe3VhpPwX"; }
    const std::string_view get_param2() override { return "WebSocketClient"; }
    void connect(const std::string& url);
};