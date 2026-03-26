#include "spirit_skill_info.hpp"

void SpiritSkillInfo::read_spirit_skill_info(ByteArray &e) {
    id = e.read_unsigned_short();
    pp_left = e.read_unsigned_byte();
    is_heredity = e.read_unsigned_byte();
    if (e.bytes_available() >= sizeof(uint16_t)) {
        auto text_len = e.read_unsigned_short();
        skill_des = e.read_multi_byte(text_len, ByteArray::default_charset);
    } else {
        skill_des.clear();
    }
}
