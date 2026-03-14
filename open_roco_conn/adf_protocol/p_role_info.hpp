#pragma once
#include "adf.hpp"

struct P_RoleInfo: public RFBase{
public:
    const std::string_view get_param1() override{ return "edb92WMXR1F4rvt6cCPZ7tn";}
    const std::string_view get_param2() override{ return "P_RoleInfo";}
    struct RoleInfo {
        uint32_t uin;
        std::string nick_name;
        uint16_t level;
        uint16_t avatar_ver;
        point_t position;
        int16_t direction;
        int8_t has_pet;
    };

    static RoleInfo read_external(ADF& adf);
};

P_RoleInfo read_code(ADF& adf);
