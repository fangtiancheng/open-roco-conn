#include "proto_bundle/mail_base_info.hpp"
#include "proto_bundle/proto_wire.hpp"

void mail_base_info::read_external(ByteArray& input) {
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
                send_time = static_cast<int32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 3:
                dead_line = static_cast<int32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 4:
                state = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 5:
                title = proto_bundle::wire::read_length_delimited(input);
                break;
            case 6:
                sender = proto_bundle::wire::read_length_delimited(input);
                break;
            case 7:
                attach = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void mail_base_info::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, serial_num);

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, static_cast<uint64_t>(static_cast<int64_t>(send_time)));

    proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, static_cast<uint64_t>(static_cast<int64_t>(dead_line)));

    proto_bundle::wire::write_tag(output, 4, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, state);

    proto_bundle::wire::write_tag(output, 5, proto_bundle::wire::wire_length_delimited);
    proto_bundle::wire::write_length_delimited(output, title);

    proto_bundle::wire::write_tag(output, 6, proto_bundle::wire::wire_length_delimited);
    proto_bundle::wire::write_length_delimited(output, sender);

    proto_bundle::wire::write_tag(output, 7, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, attach);
}

