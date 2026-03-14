#pragma once
#include "adf.hpp"
struct DetailRoleInfo;
class P_DetailRoleInfo: public RFBase{
public:
    const std::string_view get_param1() override {return "ec111Cj3NpM0b4+8n9NB2jR";}
    const std::string_view get_param2() override {return "P_DetailRoleInfo";}
    struct DetailRoleInfo{
        int8_t sex;
        std::string nick_name;
        uint16_t level;
        uint16_t avatar_ver;
    };
    static DetailRoleInfo read_external(ADF& adf);
};

