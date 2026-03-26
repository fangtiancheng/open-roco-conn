#include "login_data_repply.hpp"
#include "person/protocol_helper.hpp"

void LoginDataRepply::read(ByteArray &e) {
    return_code.read_external(e);
    if(!return_code.is_error()){
        room_id = e.read_unsigned_short();
        scene_id = e.read_unsigned_short();
        scene_ver = e.read_unsigned_short();
        main_role.read_role_data(e);
        first_login = e.read_unsigned_byte();
        main_role.flag = e.read_unsigned_int();
    }
}
