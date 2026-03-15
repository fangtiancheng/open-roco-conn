#include "st_spirit_info.hpp"

void STSpiritInfo::read(ByteArray &i) {
    info.id = i.read_unsigned_int();
    info.catchTime = i.read_unsigned_int();
    info.addSTTime = i.read_unsigned_int();
    info.level = i.read_unsigned_byte();
    info.sex = i.read_unsigned_byte();
    uint8_t t = i.read_unsigned_byte();
    info.talentLevel = 1 & t;
    info.skinID = 0 != (t >> 1 & 15) ? 1e5 + 10 * info.id + (t >> 1 & 15) - 1 : 0;
    info.talentType = i.read_unsigned_byte();

}
