#pragma once
#include "base/rf_base.hpp"

class HttpRequest: public RFBase {
public:
    const std::string_view get_param1() override { return "7a8c9FTmUdDCbMymKSi36Rj"; }
    const std::string_view get_param2() override { return "HttpRequest"; }

};