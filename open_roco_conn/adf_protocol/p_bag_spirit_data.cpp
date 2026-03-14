#include "p_bag_spirit_data.hpp"
#include "property_des.hpp"

P_BagSpiritData::BagSpiritData P_BagSpiritData::read(ADF& adf) {
    BagSpiritData data;
    data.id = adf.read_unsigned_int();
    data.level = adf.read_unsigned_byte();
    data.temper = adf.read_unsigned_byte();
    data.temper_name = PropertyDes::get_temper_str(data.temper);
    data.sex = adf.read_unsigned_byte();
    data.sex_name = PropertyDes::get_sex_str(data.sex);
    data.caught_time = adf.read_unsigned_int();
    data.caught_location = adf.read_unsigned_short();
    data.storage_time = adf.read_unsigned_int();
    auto t = adf.read_unsigned_short();
    data.closeness = 127 & t;
    data.affiliation = t >> 7 & 7;
    data.max_hp = adf.read_unsigned_short();
    data.pa = adf.read_unsigned_short();
    data.pd = adf.read_unsigned_short();
    data.ma = adf.read_unsigned_short();
    data.md = adf.read_unsigned_short();
    data.sp = adf.read_unsigned_short();
    data.hp = adf.read_unsigned_short();
//    data.innate_value
    return data;
}

