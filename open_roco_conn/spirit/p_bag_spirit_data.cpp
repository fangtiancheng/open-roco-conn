#include "p_bag_spirit_data.hpp"
#include "base/property_des.hpp"

void P_BagSpiritData::read(ByteArray& b) {
    id = b.read_unsigned_int();
    level = b.read_unsigned_byte();
    temper = b.read_unsigned_byte();
    temper_name = PropertyDes::get_temper_str(temper);
    sex = b.read_unsigned_byte();
    sex_name = PropertyDes::get_sex_str(sex);
    caught_time = b.read_unsigned_int();
    caught_location = b.read_unsigned_short();
    storage_time = b.read_unsigned_int();
    auto t = b.read_unsigned_short();
    closeness = 127 & t;
    affiliation = t >> 7 & 7;
    max_hp = b.read_unsigned_short();
    pa = b.read_unsigned_short();
    pd = b.read_unsigned_short();
    ma = b.read_unsigned_short();
    md = b.read_unsigned_short();
    sp = b.read_unsigned_short();
    hp = b.read_unsigned_short();
    innate_value.read(b);
    effort_value.read(b);
    for(uint16_t s = b.read_unsigned_short(), a=0; a<s; a++){
        P_BagSpiritSkillData skill;
        skill.read(b);
        skills.emplace_back(skill);
    }
    b.read_signed_int();
    skin_index = b.read_unsigned_byte();
    b.read_unsigned_byte();
    b.read_unsigned_short();
}

