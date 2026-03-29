#pragma once
#include "adf_protocol/adf_head.hpp"
#include "adf_protocol/byte_array.hpp"
#include "base/i_externalizable.hpp"

class ADFH5: public RFBase, public IExternalizable {
public:
    const std::string_view get_param1() const override{return "ace96UdafhIW7yejpbTWaTS";}
    const std::string_view get_param2() const override{return "ADFH5";}

    ADFHead head;
    ByteArray body;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
    ByteArray encode();
    void decode(ByteArray& input);
};
