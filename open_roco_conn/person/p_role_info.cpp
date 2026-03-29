#include "p_role_info.hpp"

void P_RoleInfo::write_external(ByteArray& adf) {
    (void) adf;
}

void P_RoleInfo::read_external(ByteArray& adf){
    uin = adf.read_unsigned_int();
    nick_name = adf.read_chars(Define::L_NICKNAME);
    level = adf.read_unsigned_short();
    avatar_ver = adf.read_unsigned_short();
    position = adf.read_point();
    direction = adf.read_signed_short();
    has_pet = adf.read_signed_byte();
}

