#pragma once
#include "base/rf_base.hpp"
#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
struct TCPDataType{
    std::string string = "String";
    std::string custom_string = "CustomString";
    std::string uint32 = "UInt32";
    std::string uint16 = "UInt16";
    std::string uint8 = "UInt8";
    std::string uint64 = "UInt64";
    std::string boolean = "Boolean";
    std::string tcp_data_type = "TCPDataType";
    std::string array = "Array";
};

class TCPTransmission : public RFBase {
public:
    const std::string_view get_param1() override { return "011d2m2cR5LHLzIDVNk33IY"; }
    const std::string_view get_param2() override { return "TCPTransmission"; }

};