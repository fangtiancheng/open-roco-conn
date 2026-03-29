#include "proto_bundle/zone_novice_revision.hpp"
#include "proto_bundle/proto_wire.hpp"
#include <utility>
#include <vector>

namespace {

std::string bytes_to_string(const std::vector<uint8_t>& bytes) {
    return std::string(bytes.begin(), bytes.end());
}

std::vector<uint8_t> string_to_bytes(const std::string& text) {
    return std::vector<uint8_t>(text.begin(), text.end());
}

}  // namespace

namespace ZoneNoviceRevision {

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

void QualifyingNotify::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        if (field_number == 1) {
            flag = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
            continue;
        }
        if (!proto_bundle::wire::skip_field(input, wire_type)) {
            return;
        }
    }
}

void QualifyingNotify::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, flag);
}

void OpenLadderRsp::read_external(ByteArray& input) {
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
                ret_info = std::move(value);
                break;
            }
            case 2:
                status = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void OpenLadderRsp::write_external(ByteArray& output) {
    if (ret_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, status);
}

void QueryIconRsp::read_external(ByteArray& input) {
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
                ret_info = std::move(value);
                break;
            }
            case 2:
                status = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void QueryIconRsp::write_external(ByteArray& output) {
    if (ret_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, status);
}

void SceneQueryRsp::read_external(ByteArray& input) {
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
                ret_info = std::move(value);
                break;
            }
            case 2:
                gender = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void SceneQueryRsp::write_external(ByteArray& output) {
    if (ret_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, gender);
}

void QueryStatusRsp::read_external(ByteArray& input) {
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
                ret_info = std::move(value);
                break;
            }
            case 2:
                flag = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 3:
                status = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void QueryStatusRsp::write_external(ByteArray& output) {
    if (ret_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, flag);

    proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, status);
}

void ChangeStatusRsp::read_external(ByteArray& input) {
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
                ret_info = std::move(value);
                break;
            }
            case 2:
                status = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void ChangeStatusRsp::write_external(ByteArray& output) {
    if (ret_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, status);
}

void ItemInfo::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        switch (field_number) {
            case 1:
                id = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 2:
                count = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            case 3:
                type = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void ItemInfo::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, id);

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, count);

    proto_bundle::wire::write_tag(output, 3, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, type);
}

void QueryAwardStatusRsp::read_external(ByteArray& input) {
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
                ret_info = std::move(value);
                break;
            }
            case 2:
                status = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
                break;
            default:
                if (!proto_bundle::wire::skip_field(input, wire_type)) {
                    return;
                }
                break;
        }
    }
}

void QueryAwardStatusRsp::write_external(ByteArray& output) {
    if (ret_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info.value());
    }

    proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, status);
}

void GetAwardReq::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        if (field_number == 1) {
            which = static_cast<uint32_t>(proto_bundle::wire::read_varint(input));
            continue;
        }
        if (!proto_bundle::wire::skip_field(input, wire_type)) {
            return;
        }
    }
}

void GetAwardReq::write_external(ByteArray& output) {
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_varint);
    proto_bundle::wire::write_varint(output, which);
}

void GetAwardRsp::read_external(ByteArray& input) {
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
                ret_info = std::move(value);
                break;
            }
            case 2: {
                ByteArray payload = proto_bundle::wire::read_embedded_message(input);
                ItemInfo value{};
                value.read_external(payload);
                items.push_back(std::move(value));
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

void GetAwardRsp::write_external(ByteArray& output) {
    if (ret_info.has_value()) {
        proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, ret_info.value());
    }

    for (auto& one : items) {
        proto_bundle::wire::write_tag(output, 2, proto_bundle::wire::wire_length_delimited);
        proto_bundle::wire::write_embedded_message(output, one);
    }
}

void RecoverHpRsp::read_external(ByteArray& input) {
    while (input.bytes_available() > 0) {
        uint32_t field_number = 0;
        uint32_t wire_type = 0;
        if (!proto_bundle::wire::read_tag(input, field_number, wire_type)) {
            return;
        }
        if (field_number == 1) {
            ByteArray payload = proto_bundle::wire::read_embedded_message(input);
            RetInfo value{};
            value.read_external(payload);
            ret_info = std::move(value);
            continue;
        }
        if (!proto_bundle::wire::skip_field(input, wire_type)) {
            return;
        }
    }
}

void RecoverHpRsp::write_external(ByteArray& output) {
    if (!ret_info.has_value()) {
        return;
    }
    proto_bundle::wire::write_tag(output, 1, proto_bundle::wire::wire_length_delimited);
    proto_bundle::wire::write_embedded_message(output, ret_info.value());
}

}  // namespace ZoneNoviceRevision
