#include "adf.hpp"
#include <cstring>
#include <stdexcept>
#include <codecvt>
#include <iostream>
#include "define.hpp"


ADFHead ADFHead::from_bytes(const uint8_t *buffer) {
    ADFHead adf_head;
    memcpy(&adf_head, buffer, sizeof (adf_head));
    if(adf_head.magic != MAGIC) {

    }
    return adf_head;
}

void ADF::check_available(size_t bytes_needed) {
    if (body_index + bytes_needed > body.size()) {
        throw std::out_of_range("ADF read overflow: not enough bytes");
    }
}

template<typename T>
T ADF::read_raw() {
    check_available(sizeof(T));
    T value = 0;
    for (size_t i = 0; i < sizeof(T); ++i) {
        value |= static_cast<T>(body[body_index + i]) << (8 * i);
    }
    body_index += sizeof(T);
    return value;
}

uint8_t ADF::read_unsigned_byte() {
    check_available(1);
    return body[body_index++];
}

uint16_t ADF::read_unsigned_short() {
    return read_raw<uint16_t>();
}

uint32_t ADF::read_unsigned_int() {
    return read_raw<uint32_t>();
}

int8_t ADF::read_signed_byte() {
    return static_cast<int8_t>(read_unsigned_byte());
}

int16_t ADF::read_signed_short() {
    return static_cast<int16_t>(read_unsigned_short());
}

int32_t ADF::read_signed_int() {
    return static_cast<int32_t>(read_unsigned_int());
}

void ADF::skip(size_t bytes) {
    check_available(bytes);
    body_index += bytes;
}

void ADF::reset() {
    body_index = 0;
}

size_t ADF::position() const {
    return body_index;
}

std::pair<int16_t, int16_t> ADF::read_point(){
    return std::pair(read_signed_short(), read_signed_short());
}

std::string ADF::read_chars(size_t len) {
    static_assert(Define::CHARSET == "gb2312", "charset must be gb2312");

}

bool ADF::read_boolean() {
    auto b = read_unsigned_byte();
    switch (b) {
        case 0: return false;
        case 1: return true;
        default:
            std::cerr << "readBoolean 参数错误！！！\n";
            return true;
    }
}

bool ADF::bytes_available() const {
    return body_index < body.size();
}
