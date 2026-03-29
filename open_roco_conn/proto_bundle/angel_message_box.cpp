#include "proto_bundle/angel_message_box.hpp"
#include "proto_bundle/proto_wire.hpp"
#include <utility>

namespace {

std::string bytes_to_string(const std::vector<uint8_t>& bytes) {
    return std::string(bytes.begin(), bytes.end());
}

std::vector<uint8_t> string_to_bytes(const std::string& text) {
    return std::vector<uint8_t>(text.begin(), text.end());
}

}  // namespace

namespace AngelMessageBox {

void RetInfo::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1:
                ret_code = static_cast<int32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 2:
                ret_msg = bytes_to_string(proto_bundle::wire::read_length_delimited(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void RetInfo::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, static_cast<uint64_t>(static_cast<int64_t>(ret_code)));

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
    proto_bundle::wire::write_length_delimited(output, string_to_bytes(ret_msg));
}

void Empty::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        if (!proto_bundle::wire::skip_field(input, wire_type)) {
            return;
        }
    }
}

void Empty::write_external(ByteArray& output) {
    (void) output;
}

void MessageEntity::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1:
                type = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 2:
                operate = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 3:
                total = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 4:
                current = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 5:
                petid = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void MessageEntity::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, type);

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, operate);

    proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, total);

    proto_bundle::wire::write_tag(output, 4, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, current);

    proto_bundle::wire::write_tag(output, 5, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, petid);
}

void PTB_0x181000_QueryStatus_Message_S2C::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                RetInfo value{};
                value.read_external(payload);
                ret = std::move(value);
                break;
            }
            case 2: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                MessageEntity value{};
                value.read_external(payload);
                entity.push_back(std::move(value));
                break;
            }
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void PTB_0x181000_QueryStatus_Message_S2C::write_external(ByteArray& output) {
    if (ret.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret.value());
    }

    for (auto& value : entity) {
        proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, value);
    }
}

void PTB_0x181001_Update_Message_PUSH::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1:
                operate_type = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 2: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                MessageEntity value{};
                value.read_external(payload);
                entity = std::move(value);
                break;
            }
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void PTB_0x181001_Update_Message_PUSH::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, operate_type);

    if (entity.has_value()) {
        proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, entity.value());
    }
}

}  // namespace AngelMessageBox

