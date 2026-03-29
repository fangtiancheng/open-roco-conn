#pragma once
#include "base/i_externalizable.hpp"
#include "adf_protocol/byte_array.hpp"
#include <cstdint>
#include <vector>

class mail_base_info: public IExternalizable {
public:
    uint32_t serial_num = 0;
    int32_t send_time = 0;
    int32_t dead_line = 0;
    uint32_t state = 0;
    std::vector<uint8_t> title{};
    std::vector<uint8_t> sender{};
    uint32_t attach = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

using MailBaseInfo = mail_base_info;
