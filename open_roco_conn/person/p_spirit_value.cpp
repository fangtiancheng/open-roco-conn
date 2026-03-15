#include "p_spirit_value.hpp"

void P_SpiritValue::read(ByteArray &adf) {
    auto& sv = spirit_value;
    sv.pa = adf.read_unsigned_byte();
    sv.pd = adf.read_unsigned_byte();
    sv.ma = adf.read_unsigned_byte();
    sv.md = adf.read_unsigned_byte();
    sv.sp = adf.read_unsigned_byte();
    sv.hp = adf.read_unsigned_byte();
}
