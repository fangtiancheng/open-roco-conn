#include "adf_head.hpp"
#include <format>

void ADFHead::read_external(ByteArray& e) {
    // magic = e.read_unsigned_short();// why js not this
    version = e.read_unsigned_short();
    cmd_id = e.read_unsigned_int();
    uin = e.read_unsigned_int();
    ui_serial_num = e.read_unsigned_int();
    check_sum = e.read_signed_short();
    length = e.read_unsigned_short();
}

void ADFHead::write_external(ByteArray &e) const {
    e.write_unsigned_short(magic);
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

std::string ADFHead::to_string() const {
    return std::format("magic={} version={} cmdID={:#x} uin={} uiSerialNum={} checkSum={} length={}",
            magic, version, cmd_id, uin, ui_serial_num, check_sum, length);
}
