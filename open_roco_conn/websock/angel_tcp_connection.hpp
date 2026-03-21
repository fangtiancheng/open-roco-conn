#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/adf_head.hpp"
#include "adf_protocol/byte_buffer.hpp"
#include "adf_protocol/adf.hpp"
#include <optional>



class AngelTcpConnection: public RFBase {
public:
    const std::string_view get_param1() override{ return "AngelTcpConnection"; }
    const std::string_view get_param2() override{ return "799d0OnyOhDz5KpLVhjOUkT"; }
    static std::optional<ADFHead> try_read_adf_head(ByteArray& n);
    bool try_read_adf_body(ByteArray& n);
    ByteBuffer in_byte_buff;
    ADF empty_adf;
};
