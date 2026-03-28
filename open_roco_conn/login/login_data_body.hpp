#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"
#include <cstdint>


class LoginDataBody: public RFBase {
public:
    const std::string_view get_param1() const override { return "d3298nQNoxMybPdyGlSw9O7"; }
    const std::string_view get_param2() const override { return "LoginDataBody"; }
    int16_t room_id;
    std::string key = "102s1df2asd15asd4f";
    void write_external(ByteArray&);
};
