#include "adf_head.hpp"

void ADFHead::read_external(ByteArray& e) {
    version = e.read_unsigned_short();
    cmd_id = e.read_unsigned_int();
    uin = e.read_unsigned_int();
    ui_serial_num = e.read_unsigned_int();
    check_sum = e.read_signed_short();
    length = e.read_unsigned_short();
}

void ADFHead::write_external(ByteArray &e) const {
    e.write_unsigned_short(version);
    e.write_unsigned_int(cmd_id);
    e.write_unsigned_int(uin);
    e.write_unsigned_int(ui_serial_num);
    e.write_signed_short(check_sum);
    e.write_unsigned_short(length);
}

int ADFHead::can_read(ByteArray &e) {
    if (!e.is_bytes_available(ADFHead::HeadLen)) {
        return NotEnBytes;
    }
    if (e.read_unsigned_byte() != MAGIC >> 8 || e.read_unsigned_byte() != (255 & MAGIC)) {
        return MagicError;
    }
    return HeadReady;
}
