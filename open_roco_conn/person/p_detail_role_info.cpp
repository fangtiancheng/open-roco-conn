#include "p_detail_role_info.hpp"
#include "base/define.hpp"

void P_DetailRoleInfo::read_external(ByteArray &adf) {
    info.sex = adf.read_signed_byte();
    info.nick_name = adf.read_chars(Define::L_NICKNAME);
    info.level = adf.read_unsigned_short();
    info.avatar_ver = adf.read_unsigned_short();
}
