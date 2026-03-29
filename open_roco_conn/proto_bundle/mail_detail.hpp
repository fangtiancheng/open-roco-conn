#pragma once
#include "base/i_externalizable.hpp"
#include "adf_protocol/byte_array.hpp"
#include "proto_bundle/attach.hpp"
#include "proto_bundle/mail_base_info.hpp"
#include <optional>
#include <vector>

class mail_detail: public IExternalizable {
public:
    std::optional<mail_base_info> base_info{};
    std::vector<uint8_t> content{};
    std::vector<attach> attach_list{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

using MailDetail = mail_detail;
