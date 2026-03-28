#include "user_data.hpp"
#include <format>

void UserData::add_login_log(const std::string &log) {
    login_log += log + "\n";
}

bool UserData::is_white(const std::string & k) {
    for(auto wkey: white_array){
        if (k == wkey) {
            return true;
        }
    }
    return false;
}

std::string UserData::get_session_key() const {
    return session_key;
}

void UserData::set_session_key(const std::string &key) {
    session_key = key;
}

std::string UserData::to_string() const {
    return std::format(
        "UserData{{uin={}, zid={}, rec_server_idx={}, spirit_id={}, skey={}, pskey={}, session_key={}}}",
        uin,
        zid,
        rec_server_idx,
        spirit_id,
        skey,
        pskey,
        session_key
    );
}
