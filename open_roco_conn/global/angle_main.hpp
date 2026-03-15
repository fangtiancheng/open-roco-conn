#pragma once
#include "base/rf_base.hpp"

class AngleMain: public RFBase {
public:
    const std::string_view get_param1() override { return "2eed9bO4G9B7K1RA/KD/KcW"; }
    const std::string_view get_param2() override { return "AngleMain"; }
    void initialize();
};