#pragma once
#include "adf_protocol/byte_array.hpp"
#include "base/i_externalizable.hpp"
#include <cstdint>
#include <vector>

namespace proto_bundle::wire {

inline constexpr uint32_t wire_varint = 0;
inline constexpr uint32_t wire_fixed64 = 1;
inline constexpr uint32_t wire_length_delimited = 2;
inline constexpr uint32_t wire_fixed32 = 5;

uint64_t read_varint(ByteArray& input);
void write_varint(ByteArray& output, uint64_t value);

bool read_tag(ByteArray& input, uint32_t& field_number, uint32_t& wire_type);
void write_tag(ByteArray& output, uint32_t field_number, uint32_t wire_type);

bool skip_field(ByteArray& input, uint32_t wire_type);

std::vector<uint8_t> read_length_delimited(ByteArray& input);
void write_length_delimited(ByteArray& output, const std::vector<uint8_t>& bytes);

ByteArray read_embedded_message(ByteArray& input);
void write_embedded_message(ByteArray& output, IExternalizable& message);

}  // namespace proto_bundle::wire

