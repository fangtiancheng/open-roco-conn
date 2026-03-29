#include "proto_bundle/mail_detail.hpp"
#include "proto_bundle/proto_wire.hpp"
#include <utility>

void mail_detail::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                mail_base_info info{};
                info.read_external(payload);
                base_info = std::move(info);
                break;
            }
            case 2:
                content = proto_bundle::wire::read_length_delimited(input);
                break;
            case 3: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                attach a{};
                a.read_external(payload);
                attach_list.push_back(std::move(a));
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

void mail_detail::write_external(ByteArray& output) {
    if (base_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, base_info.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
    proto_bundle::wire::write_length_delimited(output, content);

    for (auto& one_attach : attach_list) {
        proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, one_attach);
    }
}
