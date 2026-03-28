#pragma once
#include "adf_protocol/adf_head.hpp"
#include "adf_protocol/byte_array.hpp"

class ADFH5: public RFBase {
public:
    const std::string_view get_param1() const override{return "ace96UdafhIW7yejpbTWaTS";}
    const std::string_view get_param2() const override{return "ADFH5";}

    ADFHead head;
    ByteArray body;

    void read_external(ByteArray& input);
    void write_external(ByteArray& output);
    ByteArray encode();
    void decode(ByteArray& input);
};
