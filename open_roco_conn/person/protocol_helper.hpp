#pragma once
#include <cstdint>
#include <vector>
#include <string>
#include "adf_protocol/adf.hpp"
#include "adf_protocol/byte_array.hpp"
#include "role_data.hpp"
#include "p_detail_role_info.hpp"
#include "p_return_code.hpp"
#include "p_role_info.hpp"


class ProtocolHelper: public RFBase{
public:
    const std::string_view get_param1() const override{return "33935knY35OaZvPkrnUxrok";}
    const std::string_view get_param2() const override{return "ProtocolHelper";}

    static ADF create_adf(uint32_t cmd_id, uint32_t uin = 0);
    template <typename T>
    static T read_object(ByteArray& b) {
        T obj{};
        obj.read_external(b);
        return obj;
    }
    static P_ReturnCode read_code(ByteArray& );
    static P_DetailRoleInfo read_detail_role_info(ByteArray&);
    static P_RoleInfo read_role_info(ByteArray&);
    static RoleData read_role_data(ByteArray&);
    static std::string print_bytes(const std::vector<uint8_t>& bytes, size_t begin = 0, size_t line_size = 16);

    static uint32_t user_uin;
};

