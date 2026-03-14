#include "protocol_helper.hpp"
#include "define.hpp"

ProtocolHelper::RoleData ProtocolHelper::read_role_data(ADF& e) {
    RoleData n;
    n.avatar_type = n.uin = n.id = e.read_unsigned_int();
    n.role_type = (n.uin > 10000) ? RoleData::MEMBER : RoleData::GUEST;
    n.nick_name = e.read_chars(Define::L_NICKNAME);
    n.level = e.read_unsigned_short();
    n.skin_type = e.read_unsigned_int();
    n.avatar_version = e.read_unsigned_short();

    if (n.avatar_type < 10000) {
        n.avatar_type = 9527;
    } else if (n.avatar_version == 0) {
        n.avatar_type = n.skin_type;
    }

    n.avatar_url = e.read_chars(32);
    n.loc_xy = e.read_point();
    n.direction = e.read_signed_short();
    n.state_type = e.read_unsigned_byte();
    n.is_flying = e.read_unsigned_byte();
    n.fly_item = e.read_unsigned_int();
    n.is_swiming = e.read_unsigned_byte();
    n.swim_item = e.read_unsigned_int();
    n.cursed_type = e.read_unsigned_short();
    n.flash_type = e.read_unsigned_short();
    n.summon_type = e.read_unsigned_short();
    n.ride_type = e.read_unsigned_short();
    n.spirit_id = e.read_unsigned_int();
    n.is_vip = e.read_boolean();
    n.vip_level = e.read_unsigned_byte();
    n.vip_expiring_days = e.read_unsigned_int();
    n.vip_lulu = e.read_unsigned_byte();
    n.is_magic_offset = e.read_unsigned_byte();
    n.pk_state = e.read_unsigned_byte();
    n.trainer_level = e.read_unsigned_byte();
    n.trainer_exp = e.read_unsigned_int();
    n.achieve_id = e.read_unsigned_byte();
    n.title_level = e.read_unsigned_byte();
    n.avatar_transform_id = e.read_unsigned_int();
    n.avatar_effect_id = e.read_unsigned_int();
    n.guardian_pet_id = e.read_unsigned_int();
    n.guardian_pet_lv = e.read_unsigned_int();
    n.fishing_state = e.read_unsigned_byte();
    n.qualify_emblem = e.read_unsigned_byte();
    n.selected_medal = e.read_unsigned_byte();
    n.footprint_id = e.read_unsigned_int();

    if (e.bytes_available()) {
        n.namebg_id = e.read_unsigned_int();
        n.paopao_id = e.read_unsigned_int();
    }

    if (e.bytes_available()) {
        n.dazzle_avatar = (e.read_unsigned_byte() == 1);
        n.da_magic = e.read_unsigned_int();
        n.da_ring = e.read_unsigned_int();
        n.da_mount = e.read_unsigned_int();
        n.da_environment = e.read_unsigned_int();
        n.da_background = e.read_unsigned_int();
        n.da_frame = e.read_unsigned_int();
        n.da_doll = e.read_unsigned_int();
        n.da_stamp = e.read_unsigned_int();
        n.da_footprint = e.read_unsigned_int();
        n.da_namebg = e.read_unsigned_int();
        n.da_popup = e.read_unsigned_int();
    }

    return n;
}
