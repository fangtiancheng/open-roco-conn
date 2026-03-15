#include "spirit_skill_info.hpp"

void SpiritSkillInfo::read_spirit_skill_info(ByteArray &e) {
    id = e.read_unsigned_short();
    pp_left = e.read_unsigned_byte();
    is_heredity = e.read_unsigned_byte();
    skill_des =
}
