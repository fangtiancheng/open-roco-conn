#include "login_data_body.hpp"
#include "base/define.hpp"

void LoginDataBody::write_external(ByteArray &t) {
    t.write_signed_short(room_id);
    t.write_chars(key, Define::L_SESSIONKEY);
}
