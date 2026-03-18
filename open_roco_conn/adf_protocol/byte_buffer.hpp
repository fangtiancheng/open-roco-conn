#pragma once
#include "base/rf_base.hpp"
#include "byte_array.hpp"
class ByteBuffer: public RFBase{
    int64_t limit_capacity = -1;
    int64_t timeout = 2e3;
public:
    const std::string_view get_param1() override {return "9c8b9skQVRJjblOrelRs6V6";}
    const std::string_view get_param2() override {return "ByteBuffer";}

};