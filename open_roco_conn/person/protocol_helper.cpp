#include "protocol_helper.hpp"
#include "base/define.hpp"
#include <format>

uint32_t ProtocolHelper::user_uin = 0;

ADF ProtocolHelper::create_adf(const uint32_t cmd_id, const uint32_t uin) {
    ADF adf{};
    adf.head.cmd_id = cmd_id;
    adf.head.uin = (uin != 0) ? uin : user_uin;
    return adf;
}

RoleData ProtocolHelper::read_role_data(ByteArray& b) {
    RoleData rd;
    rd.read_role_data(b);
    return rd;
}

P_ReturnCode ProtocolHelper::read_code(ByteArray &b) {
    P_ReturnCode rc;
    rc.read_external(b);
    return rc;
}

P_DetailRoleInfo ProtocolHelper::read_detail_role_info(ByteArray& b) {
    P_DetailRoleInfo info;
    info.read_external(b);
    return info;
}

P_RoleInfo ProtocolHelper::read_role_info(ByteArray& b) {
    P_RoleInfo info;
    info.read_external(b);
    return info;
}

std::string ProtocolHelper::print_bytes(const std::vector<uint8_t>& bytes, const size_t begin, const size_t line_size) {
    std::string text{};
    const size_t size = bytes.size();
    if (begin >= size || line_size == 0) {
        return text;
    }

    size_t line_index = 1;
    size_t row_count = 0;
    for (size_t i = begin; i < size; ++i) {
        if (row_count == 0) {
            text += std::format("[{}]", line_index);
        }
        text += std::format(" {:02X}", bytes[i]);
        ++row_count;
        if (row_count >= line_size) {
            text += '\n';
            row_count = 0;
            ++line_index;
        }
    }
    return text;
}
