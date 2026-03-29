#include "login_data_body.hpp"
#include "base/define.hpp"

void LoginDataBody::read_external(ByteArray& t) {
    room_id = t.read_signed_short();
    key = t.read_chars(Define::L_SESSIONKEY);
}

void LoginDataBody::write_external(ByteArray &t) {
    t.write_signed_short(room_id);
    t.write_chars(key, Define::L_SESSIONKEY);
}
