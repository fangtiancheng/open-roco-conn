#pragma once
#include <cstdint>
#include <vector>
#include <string>
#include "adf_head.hpp"
#include "base/rf_base.hpp"
#include "base/define.hpp"
#include "byte_array.hpp"

class ADF: public RFBase{
public:
    const std::string_view get_param1() override{return "4c4bdiyqNpDYbBHA/inxurd";}
    const std::string_view get_param2() override{return "ADF";}
    ADFHead head;
    ByteArray body;
    void read_external(ByteArray&);
    void write_external(ByteArray&);
};


