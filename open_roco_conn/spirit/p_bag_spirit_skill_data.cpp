#include "p_bag_spirit_skill_data.hpp"

void P_BagSpiritSkillData::read(ByteArray& adf) {
    id = adf.read_unsigned_short();
    pp_left = adf.read_unsigned_byte();
    is_heredity = adf.read_unsigned_byte();
}
