#include "byte_array.hpp"
#include <algorithm>
#include <cctype>
#include <cerrno>
#include <cstring>
#include <iconv.h>
#include <stdexcept>
#include <string>
#include <type_traits>

namespace {

std::string normalize_encoding(std::string_view encoding) {
    std::string normalized;
    normalized.reserve(encoding.size());
    for (char ch : encoding) {
        if (ch == '_' || ch == ' ') {
            continue;
        }
        normalized.push_back(static_cast<char>(std::tolower(static_cast<unsigned char>(ch))));
    }

    if (normalized.empty() || normalized == "utf8" || normalized == "utf-8") {
        return "UTF-8";
    }
    if (normalized == "gb2312" || normalized == "gbk" || normalized == "gb18030") {
        return "GB18030";
    }
    std::transform(normalized.begin(), normalized.end(), normalized.begin(), [](unsigned char ch) {
        return static_cast<char>(std::toupper(ch));
    });
    return normalized;
}

std::string transcode(std::string_view input, std::string_view from, std::string_view to) {
    if (input.empty()) {
        return {};
    }

    const std::string from_encoding = normalize_encoding(from);
    const std::string to_encoding = normalize_encoding(to);
    if (from_encoding == to_encoding) {
        return std::string(input);
    }

    iconv_t cd = iconv_open(to_encoding.c_str(), from_encoding.c_str());
    if (cd == reinterpret_cast<iconv_t>(-1)) {
        throw std::runtime_error("iconv_open failed for charset conversion");
    }

    size_t input_left = input.size();
    char* input_ptr = const_cast<char*>(input.data());
    std::string output(std::max<size_t>(input.size() * 4, 16), '\0');
    char* output_ptr = output.data();
    size_t output_left = output.size();

    while (true) {
        size_t result = iconv(cd, &input_ptr, &input_left, &output_ptr, &output_left);
        if (result != static_cast<size_t>(-1)) {
            break;
        }
        if (errno == E2BIG) {
            const size_t produced = output.size() - output_left;
            output.resize(output.size() * 2);
            output_ptr = output.data() + produced;
            output_left = output.size() - produced;
            continue;
        }
        iconv_close(cd);
        throw std::runtime_error("iconv failed during charset conversion");
    }

    iconv_close(cd);
    output.resize(output.size() - output_left);
    return output;
}

}  // namespace

ByteArray::ByteArray() {
    ByteArray::allocate();
}

void ByteArray::allocate(size_t size) {
    _buffer.resize(size);
    _byte_offset = 0;
    _length = 0;
}

void ByteArray::ensure_capacity(size_t bytes_needed) {
    if (bytes_needed <= _buffer.size()) {
        return;
    }

    size_t next_size = std::max(bytes_needed, std::max<size_t>(_buffer.size() * 2, 1));
    _buffer.resize(next_size);
}

void ByteArray::check_available_throw(size_t bytes_needed) const {
    if (!is_bytes_available(bytes_needed)) {
        throw std::out_of_range("ADF read overflow: not enough bytes");
    }
}

template<typename T>
T ByteArray::read_raw() {
    check_available_throw(sizeof(T));
    uint64_t raw_value = 0;
    if (little_endian) {
        for (size_t i = 0; i < sizeof(T); ++i) {
            raw_value |= static_cast<uint64_t>(_buffer[_byte_offset++]) << (8 * i);
        }
    } else {
        for (size_t i = 0; i < sizeof(T); ++i) {
            raw_value = (raw_value << 8) | _buffer[_byte_offset++];
        }
    }
    return static_cast<T>(raw_value);
}

template<typename T>
void ByteArray::write_raw(T value) {
    ensure_capacity(_byte_offset + sizeof(T));
    using UnsignedT = std::make_unsigned_t<T>;
    const auto raw_value = static_cast<UnsignedT>(value);

    if (little_endian) {
        for (size_t i = 0; i < sizeof(T); ++i) {
            _buffer[_byte_offset++] = static_cast<uint8_t>((raw_value >> (8 * i)) & 0xFF);
        }
    } else {
        for (size_t i = 0; i < sizeof(T); ++i) {
            const size_t shift = 8 * (sizeof(T) - 1 - i);
            _buffer[_byte_offset++] = static_cast<uint8_t>((raw_value >> shift) & 0xFF);
        }
    }
    _length = std::max(_length, _byte_offset);
}

uint8_t ByteArray::read_unsigned_byte() {
    check_available_throw(1);
    return _buffer[_byte_offset++];
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
    check_available_throw(bytes);
    _byte_offset += bytes;
}

void ByteArray::reset() {
    _byte_offset = 0;
}

size_t ByteArray::position() const {
    return _byte_offset;
}

size_t ByteArray::length() const {
    return _length;
}

std::pair<int16_t, int16_t> ByteArray::read_point(){
    return std::pair(read_signed_short(), read_signed_short());
}

void ByteArray::write_point(const point_t & point) {
    write_raw(point.first);
    write_raw(point.second);
}

std::string ByteArray::read_chars(size_t len) {
    return read_multi_byte(len, default_charset);
}

void ByteArray::read_bytes(ByteArray& dest, size_t dest_idx, size_t len) {
    if (len == 0) {
        len = bytes_available();
    }
    check_available_throw(len);
    dest.ensure_capacity(dest_idx + len);
    std::copy_n(_buffer.begin() + static_cast<std::ptrdiff_t>(_byte_offset),
                static_cast<std::ptrdiff_t>(len),
                dest._buffer.begin() + static_cast<std::ptrdiff_t>(dest_idx));
    dest._length = std::max(dest._length, dest_idx + len);
    _byte_offset += len;
}

void ByteArray::write_bytes(const ByteArray& src, size_t src_idx, size_t len) {
    if (src_idx > src._length) {
        throw std::out_of_range("ADF write overflow: invalid source offset");
    }
    if (len == 0) {
        len = src._length - src_idx;
    }
    if (src_idx + len > src._length) {
        throw std::out_of_range("ADF write overflow: invalid source length");
    }
    ensure_capacity(_byte_offset + len);
    std::copy_n(src._buffer.begin() + static_cast<std::ptrdiff_t>(src_idx),
                static_cast<std::ptrdiff_t>(len),
                _buffer.begin() + static_cast<std::ptrdiff_t>(_byte_offset));
    _byte_offset += len;
    _length = std::max(_length, _byte_offset);
}

bool ByteArray::read_boolean() {
    return read_unsigned_byte() != 0;
}

bool ByteArray::is_bytes_available(size_t size) const {
    return _byte_offset + size <= _length;
}

size_t ByteArray::bytes_available() const {
    return _byte_offset <= _length ? _length - _byte_offset : 0;
}

std::string ByteArray::read_multi_byte(size_t len, std::string_view charset) {
    check_available_throw(len);
    std::string raw_bytes(len, '\0');
    std::copy_n(_buffer.begin() + static_cast<std::ptrdiff_t>(_byte_offset),
                static_cast<std::ptrdiff_t>(len),
                raw_bytes.begin());
    _byte_offset += len;
    return transcode(raw_bytes, charset, "UTF-8");
}

size_t ByteArray::write_multi_byte(const std::string& value, std::string_view charset) {
    std::string encoded = transcode(value, "UTF-8", charset);
    ensure_capacity(_byte_offset + encoded.size());
    std::copy(encoded.begin(),
              encoded.end(),
              _buffer.begin() + static_cast<std::ptrdiff_t>(_byte_offset));
    _byte_offset += encoded.size();
    _length = std::max(_length, _byte_offset);
    return encoded.size();
}

void ByteArray::write_chars(const std::string& value, size_t len) {
    ByteArray temp;
    const size_t written = temp.write_multi_byte(value, default_charset);

    if (len == 0) {
        write_unsigned_short(static_cast<uint16_t>(temp.length()));
        write_bytes(temp, 0, temp.length());
        return;
    }

    write_bytes(temp, 0, temp.length());
    for (size_t i = written; i < len; ++i) {
        write_unsigned_byte(0);
    }
}

std::string ByteArray::read_fixed_chars(size_t len) {
    check_available_throw(len);
    std::string raw_bytes;
    raw_bytes.reserve(len);
    for (size_t i = 0; i < len; ++i) {
        uint8_t byte = _buffer[_byte_offset + i];
        if (byte != 0) {
            raw_bytes.push_back(static_cast<char>(byte));
        }
    }
    _byte_offset += len;
    return transcode(raw_bytes, default_charset, "UTF-8");
}
