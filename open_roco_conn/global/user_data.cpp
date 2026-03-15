#include "user_data.hpp"

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
