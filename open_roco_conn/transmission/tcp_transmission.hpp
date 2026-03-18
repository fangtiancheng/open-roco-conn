#pragma once
#include "base/rf_base.hpp"
#include <cstdint>
#include <string>
#include <string_view>
#include <vector>

enum class TCPDataType {
    UInt8,
    UInt16,
    UInt32,
    UInt64,
    Boolean,
    String,
    CustomString,
    Buff,
    TCPDataType,
    Array
};

enum class Charset {
    UTF8,
    GBK
};

class TCPTransmission : public RFBase {
public:
    const std::string_view get_param1() override { return "011d2m2cR5LHLzIDVNk33IY"; }
    const std::string_view get_param2() override { return "TCPTransmission"; }

};