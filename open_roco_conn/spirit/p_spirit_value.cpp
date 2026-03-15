#include "p_spirit_value.hpp"

void P_SpiritValue::read(ByteArray &adf) {
    pa = adf.read_unsigned_byte();
    pd = adf.read_unsigned_byte();
    ma = adf.read_unsigned_byte();
    md = adf.read_unsigned_byte();
    sp = adf.read_unsigned_byte();
    hp = adf.read_unsigned_byte();
}
