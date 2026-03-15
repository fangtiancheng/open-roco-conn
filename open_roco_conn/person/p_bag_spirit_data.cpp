#include "p_bag_spirit_data.hpp"
#include "base/property_des.hpp"

P_BagSpiritData::BagSpiritData P_BagSpiritData::read(ByteArray& b) {
    BagSpiritData data;
    data.id = b.read_unsigned_int();
    data.level = b.read_unsigned_byte();
    data.temper = b.read_unsigned_byte();
    data.temper_name = PropertyDes::get_temper_str(data.temper);
    data.sex = b.read_unsigned_byte();
    data.sex_name = PropertyDes::get_sex_str(data.sex);
    data.caught_time = b.read_unsigned_int();
    data.caught_location = b.read_unsigned_short();
    data.storage_time = b.read_unsigned_int();
    auto t = b.read_unsigned_short();
    data.closeness = 127 & t;
    data.affiliation = t >> 7 & 7;
    data.max_hp = b.read_unsigned_short();
    data.pa = b.read_unsigned_short();
    data.pd = b.read_unsigned_short();
    data.ma = b.read_unsigned_short();
    data.md = b.read_unsigned_short();
    data.sp = b.read_unsigned_short();
    data.hp = b.read_unsigned_short();
//    data.innate_value
    return data;
}

