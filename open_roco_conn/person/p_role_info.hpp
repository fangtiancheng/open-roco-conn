#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"

struct P_RoleInfo: public RFBase{
public:
    const std::string_view get_param1() const override{ return "edb92WMXR1F4rvt6cCPZ7tn";}
    const std::string_view get_param2() const override{ return "P_RoleInfo";}
    struct RoleInfo {
        uint32_t uin;
        std::string nick_name;
        uint16_t level;
        uint16_t avatar_ver;
        point_t position;
        int16_t direction;
        int8_t has_pet;
    } role_info;

    void read_external(ByteArray&);
};

