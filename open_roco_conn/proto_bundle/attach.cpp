#include "proto_bundle/attach.hpp"
#include "proto_bundle/proto_wire.hpp"

void attach::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1:
                serial_num = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 2:
                type = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 3:
                id = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 4:
                count = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 5:
                state = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void attach::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, serial_num);

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, type);

    proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, id);

    proto_bundle::wire::write_tag(output, 4, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, count);

    proto_bundle::wire::write_tag(output, 5, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, state);
}

