#pragma once
#include "base/rf_base.hpp"


class SpiritInfoProcessor : public RFBase{
public:
    const std::string_view get_param1() const override{return "059a2cUGRxKUZmN/K0JuwvI";}
    const std::string_view get_param2() const override{return "SpiritInfoProcessor";}
};