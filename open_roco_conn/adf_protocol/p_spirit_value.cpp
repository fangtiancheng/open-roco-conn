#include "p_spirit_value.hpp"

P_SpiritValue::SpiritValue P_SpiritValue::read(ADF &adf) {
    SpiritValue sv;
    sv.pa = adf.read_unsigned_byte();
    sv.pd = adf.read_unsigned_byte();
    sv.ma = adf.read_unsigned_byte();
    sv.md = adf.read_unsigned_byte();
    sv.sp = adf.read_unsigned_byte();
    sv.hp = adf.read_unsigned_byte();
    return sv;
}
