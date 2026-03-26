#include "p_return_code.hpp"

void P_ReturnCode::read_external(ByteArray& e) {
    code = e.read_signed_int();
    auto t = e.read_unsigned_short();
    message = e.read_multi_byte(t, ByteArray::default_charset);
}

bool P_ReturnCode::is_error() const {
    return code != OK;
}

size_t P_ReturnCode::length() const {
    if(!message.empty()) {
        ByteArray e;
        e.write_multi_byte(message, ByteArray::default_charset);
        return 6 + e.length();
    }
    return 4;
}
