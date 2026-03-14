#include "p_bag_spirit_skill_data.hpp"

P_BagSpiritSkillData::BagSpiritSkillData P_BagSpiritSkillData::read(ADF &adf) {
    BagSpiritSkillData data;
    data.id = adf.read_unsigned_short();
    data.pp_left = adf.read_unsigned_byte();
    data.is_heredity = adf.read_unsigned_byte();
    return data;
}
