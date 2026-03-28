#pragma once
#include "base/rf_base.hpp"
#include <string>
#include <cstdint>

class SpiritProperties : public RFBase{
public:
    const std::string_view get_param1() const override{return "ec0c9SQqM1FTaWs4lS6Jyq1";}
    const std::string_view get_param2() const override{return "SpiritProperties";}
    struct SpiritProperty{
        uint16_t pa;
        uint16_t pd;
        uint16_t ma;
        uint16_t md;
        uint16_t ve;
        uint16_t sp;
        uint16_t dp;
        uint16_t crit;
    };
    static std::string to_string(const SpiritProperty& sp);
};