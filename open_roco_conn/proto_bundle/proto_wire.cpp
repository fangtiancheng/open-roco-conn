#include "proto_bundle/proto_wire.hpp"

#include <limits>

namespace proto_bundle::wire {

uint64_t read_varint(ByteArray& input) {
    uint64_t value = 0;
    uint32_t shift = 0;
    while (input.bytes_available() > 0 && shift <= 63) {
        const uint8_t byte = input.read_unsigned_byte();
        value |= static_cast<uint64_t>(byte & 0x7FU) << shift;
        if ((byte & 0x80U) == 0) {
            return value;
        }
        shift += 7;
    }
    return value;
}

void write_varint(ByteArray& output, uint64_t value) {
    while (value > 0x7FU) {
        output.write_unsigned_byte(static_cast<uint8_t>((value & 0x7FU) | 0x80U));
        value >>= 7U;
    }
    output.write_unsigned_byte(static_cast<uint8_t>(value & 0x7FU));
}

bool read_tag(ByteArray& input, uint32_t& field_number, uint32_t& wire_type) {
    if (input.bytes_available() == 0) {
        return false;
    }
    const uint64_t raw_tag = read_varint(input);
    field_number = static_cast<uint32_t>(raw_tag >> 3U);
    wire_type = static_cast<uint32_t>(raw_tag & 0x07U);
    return field_number != 0;
}

void write_tag(ByteArray& output, const uint32_t field_number, const uint32_t wire_type) {
    const uint64_t raw_tag = (static_cast<uint64_t>(field_number) << 3U) | static_cast<uint64_t>(wire_type & 0x07U);
    write_varint(output, raw_tag);
}

bool skip_field(ByteArray& input, const uint32_t wire_type) {
    switch (wire_type) {
        case wire_varint:
            (void) read_varint(input);
            return true;
        case wire_fixed64:
            if (input.bytes_available() < 8) {
                return false;
            }
            input.skip(8);
            return true;
        case wire_length_delimited: {
            const auto len = static_cast<size_t>(read_varint(input));
            if (input.bytes_available() < len) {
                return false;
            }
            input.skip(len);
            return true;
        }
        case wire_fixed32:
            if (input.bytes_available() < 4) {
                return false;
            }
            input.skip(4);
            return true;
        default:
            return false;
    }
}

std::vector<uint8_t> read_length_delimited(ByteArray& input) {
    const auto len = static_cast<size_t>(read_varint(input));
    std::vector<uint8_t> bytes{};
    bytes.reserve(len);
    for (size_t i = 0; i < len && input.bytes_available() > 0; ++i) {
        bytes.push_back(input.read_unsigned_byte());
    }
    return bytes;
}

void write_length_delimited(ByteArray& output, const std::vector<uint8_t>& bytes) {
    write_varint(output, bytes.size());
    for (const auto byte : bytes) {
        output.write_unsigned_byte(byte);
    }
}

ByteArray read_embedded_message(ByteArray& input) {
    const auto bytes = read_length_delimited(input);
    ByteArray payload{};
    for (const auto byte : bytes) {
        payload.write_unsigned_byte(byte);
    }
    payload.reset();
    return payload;
}

void write_embedded_message(ByteArray& output, IExternalizable& message) {
    ByteArray temp{};
    message.write_external(temp);
    temp.reset();
    write_varint(output, temp.length());
    while (temp.bytes_available() > 0) {
        output.write_unsigned_byte(temp.read_unsigned_byte());
    }
}

}  // namespace proto_bundle::wire

