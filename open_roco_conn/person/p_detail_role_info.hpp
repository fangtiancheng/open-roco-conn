#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"

struct DetailRoleInfo;
class P_DetailRoleInfo: public RFBase{
public:
    const std::string_view get_param1() override {return "ec111Cj3NpM0b4+8n9NB2jR";}
    const std::string_view get_param2() override {return "P_DetailRoleInfo";}
    struct DetailRoleInfo{
        int8_t sex = 0;
        std::string nick_name{};
        uint16_t level = 0;
        uint16_t avatar_ver = 0;
    } info;
    void read_external(ByteArray&);
};

