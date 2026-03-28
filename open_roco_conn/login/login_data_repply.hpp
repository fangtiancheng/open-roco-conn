#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"
#include "person/protocol_helper.hpp"
#include <cstdint>
#include <string>

class LoginDataRepply: public RFBase, public AngelDataInputJudge{
public:
    const std::string_view get_param1() const override { return "c5b3dnoCUFPKbVdyozuJ+/v"; }
    const std::string_view get_param2() const override { return "LoginDataRepply"; }
    const std::string_view constructor_name() const override { return "LoginDataRepply"; }
    P_ReturnCode return_code;
    uint32_t room_id = 0;
    uint16_t scene_id = 0;
    uint16_t scene_ver = 0;
    RoleData main_role;
    uint8_t first_login = 0;
    std::string sessionKey = "";
    void read(ByteArray&);

};