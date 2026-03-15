#include "byte_array.hpp"
#include <stdexcept>
#include <iostream>

void ByteArray::allocate(size_t size) {
    _buffer.reserve(size);
}



void ByteArray::check_available(size_t bytes_needed) {
    if (byte_offset + bytes_needed > _buffer.size()) {
        throw std::out_of_range("ADF read overflow: not enough bytes");
    }
}

template<typename T>
T ByteArray::read_raw() {
    check_available(sizeof(T));
    T value = 0;
    for (size_t i = 0; i < sizeof(T); ++i) {
        value |= static_cast<T>(_buffer[byte_offset++]) << (8 * i);
    }
    return value;
}

template<typename T>
void ByteArray::write_raw(T value) {
    for (size_t i = 0; i < sizeof(T); ++i) {
        _buffer.at(byte_offset++) = static_cast<uint8_t>((value >> (8 * i)) & 0xFF);
    }// 这样写是对的吗?
}

uint8_t ByteArray::read_unsigned_byte() {
    check_available(1);
    return _buffer[byte_offset++];
}

void ByteArray::write_unsigned_byte(uint8_t value) {
    write_raw(value);
}

uint16_t ByteArray::read_unsigned_short() {
    return read_raw<uint16_t>();
}

void ByteArray::write_unsigned_short(uint16_t value) {
    write_raw(value);
}

uint32_t ByteArray::read_unsigned_int() {
    return read_raw<uint32_t>();
}

void ByteArray::write_unsigned_int(uint32_t value) {
    write_raw(value);
}

int8_t ByteArray::read_signed_byte() {
    return read_raw<int8_t>();
}

void ByteArray::write_signed_byte(int8_t value) {
    write_raw(value);
}

int16_t ByteArray::read_signed_short() {
    return read_raw<int16_t>();
}

void ByteArray::write_signed_short(int16_t value) {
    write_raw(value);
}

int32_t ByteArray::read_signed_int() {
    return read_raw<int32_t>();
}

void ByteArray::write_signed_int(int32_t value) {
    write_raw(value);
}

void ByteArray::skip(size_t bytes) {
    check_available(bytes);
    byte_offset += bytes;
}

void ByteArray::reset() {
    byte_offset = 0;
}

size_t ByteArray::position() const {
    return byte_offset;
}

std::pair<int16_t, int16_t> ByteArray::read_point(){
    return std::pair(read_signed_short(), read_signed_short());
}

void ByteArray::write_point(const point_t & point) {
    write_raw(point.first);
    write_raw(point.second);
}

std::string ByteArray::read_chars(size_t len) {
    static_assert(Define::CHARSET == "gb2312", "charset must be gb2312");

}

bool ByteArray::read_boolean() {
    auto b = read_unsigned_byte();
    switch (b) {
        case 0: return false;
        case 1: return true;
        default:
            std::cerr << "readBoolean 参数错误！！！\n";
            return true;
    }
}

bool ByteArray::bytes_available() const {
    return byte_offset < _buffer.size();
}
