#pragma once
#include "base/rf_base.hpp"

class SpiritBooksConfLoader: public RFBase {
public:
    const std::string_view get_param1() override { return "68622uxkTpLdptX7ws3E06T"; }
    const std::string_view get_param2() override { return "SpiritBooksConfLoader"; }
    void load_from_remote();
};