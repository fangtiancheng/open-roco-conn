#pragma once
#include "base/rf_base.hpp"
#include <cstdint>
#include "base/define.hpp"
#include "adf_protocol/byte_array.hpp"
#include <string>


class RoleData: public RFBase{
public:
    const std::string_view get_param1() const override{return "f6f620uIplNbIjapuzhC+bO";}
    const std::string_view get_param2() const override{return "RoleData";}
    uint32_t avatar_type = 0, uin = 0, id = 0;
    uint8_t role_type = 0;  // 0 = GUEST, 1 = MEMBER
    std::string nick_name;
    uint16_t level = 0;
    uint32_t skin_type = 0;
    uint16_t avatar_version = 0;
    std::string avatar_url{};
    point_t loc_xy{};
    int16_t direction = -1;
    int16_t motion_type = -1;
    int16_t speed = 4;
    uint8_t state_type = 0;
    uint8_t is_flying = 0;
    uint32_t fly_item = 0;
    uint8_t is_swiming = 0;
    uint32_t swim_item = 0;
    uint16_t cursed_type = 0;
    uint16_t flash_type = 0;
    uint16_t summon_type = 0;
    uint16_t ride_type = 0;
    uint32_t spirit_id = 0;
    bool is_vip = false;
    uint8_t vip_level = 0;
    uint32_t vip_expiring_days = 0;
    uint8_t vip_lulu = 0;
    uint8_t is_magic_offset = 0;
    uint8_t pk_state = 0;
    uint8_t trainer_level = 0;
    uint32_t trainer_exp = 0;
    uint8_t achieve_id = 0;
    uint8_t title_level = 0;
    bool is_in_bombat = false;
    uint32_t avatar_transform_id = 0;
    uint32_t avatar_effect_id = 0;
    uint32_t guardian_pet_id = 0;
    uint32_t guardian_pet_lv = 0;
    uint8_t fishing_state = 0;
    uint8_t qualify_emblem = 0;
    uint8_t selected_medal = 0;
    uint32_t footprint_id = 0;
    uint32_t namebg_id = 0;
    uint32_t paopao_id = 0;
    bool dazzle_avatar = false;
    uint32_t da_magic = 0;
    uint32_t da_ring = 0;
    uint32_t da_mount = 0;
    uint32_t da_environment = 0;
    uint32_t da_background = 0;
    uint32_t da_frame = 0;
    uint32_t da_doll = 0;
    uint32_t da_stamp = 0;
    uint32_t da_footprint = 0;
    uint32_t da_namebg = 0;
    uint32_t da_popup = 0;
    uint32_t flag = 0;

    static constexpr uint8_t MEMBER = 1;
    static constexpr uint8_t GUEST = 0;
    void update(const RoleData& other);
    std::string to_string() const;
    void read_role_data(ByteArray&);

};
