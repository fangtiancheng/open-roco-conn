#include "adf_head.hpp"

void ADFHead::read_external(ByteArray& e) {
    head.version = e.read_unsigned_short();
    head.cmd_id = e.read_unsigned_int();
    head.uin = e.read_unsigned_int();
    head.ui_serial_num = e.read_unsigned_int();
    head.check_sum = e.read_signed_short();
    head.length = e.read_unsigned_short();
}

void ADFHead::write_external(ByteArray &e) const {
    e.write_unsigned_short(head.version);
    e.write_unsigned_int(head.cmd_id);
    e.write_unsigned_int(head.uin);
    e.write_unsigned_int(head.ui_serial_num);
    e.write_signed_short(head.check_sum);
    e.write_unsigned_short(head.length);
}
