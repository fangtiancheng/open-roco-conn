#include "proto_bundle/mail_box_proto.hpp"
#include "proto_bundle/proto_wire.hpp"
#include <utility>

namespace mail_box_proto {

void ret_info::read_external(ByteArray& input) {
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
                ret_msg = proto_bundle::wire::read_length_delimited(input);
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void ret_info::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, static_cast<uint64_t>(static_cast<int64_t>(ret_code)));

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
    proto_bundle::wire::write_length_delimited(output, ret_msg);
}

void item_info::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1:
                item_type = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 2:
                id = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 3:
                count = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void item_info::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, item_type);

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, id);

    proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, count);
}

void query_list_rsp::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                ret_info info{};
                info.read_external(payload);
                ret_info_data = std::move(info);
                break;
            }
            case 2: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                mail_base_info info{};
                info.read_external(payload);
                mail_base_info_list.push_back(std::move(info));
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

void query_list_rsp::write_external(ByteArray& output) {
    if (ret_info_data.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info_data.value());
    }
    for (auto& info : mail_base_info_list) {
        proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, info);
    }
}

void open_mail_req::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        if (field_number == 1) {
            serial_num = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
            continue;
        }
        if (!proto_bundle::wire::skip_field(input, wire_type)) {
            return;
        }
    }
}

void open_mail_req::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, serial_num);
}

void open_mail_rsp::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                ret_info info{};
                info.read_external(payload);
                ret_info_data = std::move(info);
                break;
            }
            case 2: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                mail_detail detail{};
                detail.read_external(payload);
                mail_detail_data = std::move(detail);
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

void open_mail_rsp::write_external(ByteArray& output) {
    if (ret_info_data.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info_data.value());
    }
    if (mail_detail_data.has_value()) {
        proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, mail_detail_data.value());
    }
}

void get_attach_req::read_external(ByteArray& input) {
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
                attach_id = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void get_attach_req::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, serial_num);

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, attach_id);
}

void get_attach_rsp::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                ret_info info{};
                info.read_external(payload);
                ret_info_data = std::move(info);
                break;
            }
            case 2:
                flag = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 3: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                item_info info{};
                info.read_external(payload);
                item_info_data = std::move(info);
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

void get_attach_rsp::write_external(ByteArray& output) {
    if (ret_info_data.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info_data.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, flag);

    if (item_info_data.has_value()) {
        proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, item_info_data.value());
    }
}

void del_mail_req::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        if (field_number == 1) {
            if (wire_type == proto_bundle::wire::wire_varint) {
                serial_num_list.push_back(static_cast<uint32_t>(proto_bundle::wire::read_varint(input)));
                continue;
            }
            if (wire_type == proto_bundle::wire::wire_length_delimited) {
                ByteArray packed = proto_bundle::wire::read_embedded_message(input);
                while (packed.bytes_available() > 0) {
                    serial_num_list.push_back(static_cast<uint32_t>(proto_bundle::wire::read_varint(packed)));
                }
                continue;
            }
        }
        if (!proto_bundle::wire::skip_field(input, wire_type)) {
            return;
        }
    }
}

void del_mail_req::write_external(ByteArray& output) {
    for (const auto serial : serial_num_list) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
        proto_bundle::wire::write_varint(output, serial);
    }
}

void del_mail_rsp::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        if (field_number == 1) {
            ByteArray payload = proto_bundle::wire::read_embedded_message(input);
            ret_info info{};
            info.read_external(payload);
            ret_info_data = std::move(info);
            continue;
        }
        if (!proto_bundle::wire::skip_field(input, wire_type)) {
            return;
        }
    }
}

void del_mail_rsp::write_external(ByteArray& output) {
    if (!ret_info_data.has_value()) {
        return;
    }
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
    proto_bundle::wire::write_embedded_message(output, ret_info_data.value());
}

}  // namespace mail_box_proto
