#pragma once
#include "base/rf_base.hpp"
#include "base/i_externalizable.hpp"
#include "adf_protocol/byte_array.hpp"

struct P_RoleInfo: public RFBase, public IExternalizable {
public:
    const std::string_view get_param1() const override{ return "edb92WMXR1F4rvt6cCPZ7tn";}
    const std::string_view get_param2() const override{ return "P_RoleInfo";}
    uint32_t uin = 0;
    std::string nick_name{};
    uint16_t level = 0;
    uint16_t avatar_ver = 0;
    point_t position{};
    int16_t direction = 0;
    int8_t has_pet = 0;

    void write_external(ByteArray&) override;
    void read_external(ByteArray&) override;
};

