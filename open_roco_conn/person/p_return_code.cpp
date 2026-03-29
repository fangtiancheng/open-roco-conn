#include "p_return_code.hpp"

void P_ReturnCode::read_external(ByteArray& e) {
    code = e.read_signed_int();
    auto t = e.read_unsigned_short();
    message = e.read_multi_byte(t, ByteArray::default_charset);
}

void P_ReturnCode::write_external(ByteArray& e) {
    e.write_signed_int(code);
    ByteArray msg;
    msg.write_multi_byte(message, ByteArray::default_charset);
    msg.reset();
    e.write_unsigned_short(static_cast<uint16_t>(msg.length()));
    e.write_bytes(msg, 0, msg.length());
}

bool P_ReturnCode::is_error() const {
    return code != OK;
}

int P_ReturnCode::code_value() const {
    return code;
}

const std::string& P_ReturnCode::message_text() const {
    return message;
}

size_t P_ReturnCode::length() const {
    if(!message.empty()) {
        ByteArray e;
        e.write_multi_byte(message, ByteArray::default_charset);
        return 6 + e.length();
    }
    return 4;
}
