#include "p_role_info.hpp"
#include "define.hpp"


P_RoleInfo::RoleInfo P_RoleInfo::read_external(ADF& adf){
    RoleInfo ri;
    ri.uin = adf.read_unsigned_int();
    ri.nick_name = adf.read_chars(Define::L_NICKNAME);
    ri.level = adf.read_unsigned_short();
    ri.avatar_ver = adf.read_unsigned_short();
    ri.position = adf.read_point();
    ri.direction = adf.read_signed_short();
    ri.has_pet = adf.read_signed_byte();
    return ri;
}

