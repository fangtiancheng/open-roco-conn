#pragma once
#include "base/i_externalizable.hpp"
#include "adf_protocol/byte_array.hpp"
#include <cstdint>

class attach: public IExternalizable {
public:
    uint32_t serial_num = 0;
    uint32_t type = 0;
    uint32_t id = 0;
    uint32_t count = 0;
    uint32_t state = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

using Attach = attach;
