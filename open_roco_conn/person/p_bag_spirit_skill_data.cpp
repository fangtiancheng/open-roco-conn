#include "p_bag_spirit_skill_data.hpp"

void P_BagSpiritSkillData::read(ByteArray& adf) {
    data.id = adf.read_unsigned_short();
    data.pp_left = adf.read_unsigned_byte();
    data.is_heredity = adf.read_unsigned_byte();
}
