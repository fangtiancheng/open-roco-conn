#pragma once
#include "adf_protocol/byte_array.hpp"
#include "base/i_externalizable.hpp"
#include "proto_bundle/mail_base_info.hpp"
#include "proto_bundle/mail_detail.hpp"
#include <cstdint>
#include <optional>
#include <vector>

namespace mail_box_proto {

class ret_info: public IExternalizable {
public:
    int32_t ret_code = 0;
    std::vector<uint8_t> ret_msg{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class item_info: public IExternalizable {
public:
    uint32_t item_type = 0;
    uint32_t id = 0;
    uint32_t count = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class query_list_rsp: public IExternalizable {
public:
    std::optional<ret_info> ret_info_data{};
    std::vector<mail_base_info> mail_base_info_list{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class open_mail_req: public IExternalizable {
public:
    uint32_t serial_num = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class open_mail_rsp: public IExternalizable {
public:
    std::optional<ret_info> ret_info_data{};
    std::optional<mail_detail> mail_detail_data{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class get_attach_req: public IExternalizable {
public:
    uint32_t serial_num = 0;
    uint32_t attach_id = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class get_attach_rsp: public IExternalizable {
public:
    std::optional<ret_info> ret_info_data{};
    uint32_t flag = 0;
    std::optional<item_info> item_info_data{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class del_mail_req: public IExternalizable {
public:
    std::vector<uint32_t> serial_num_list{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class del_mail_rsp: public IExternalizable {
public:
    std::optional<ret_info> ret_info_data{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

}  // namespace mail_box_proto

// JS-name aliases (for easier protocol对齐)
using DelMailRsp = mail_box_proto::del_mail_rsp;
using DelMailReq = mail_box_proto::del_mail_req;
using GetAttachReq = mail_box_proto::get_attach_req;
using GetAttachRsp = mail_box_proto::get_attach_rsp;
using OpenMailReq = mail_box_proto::open_mail_req;
using OpenMailRsp = mail_box_proto::open_mail_rsp;
using QueryListRsp = mail_box_proto::query_list_rsp;
using ItemInfo = mail_box_proto::item_info;
using MailBoxRetInfo = mail_box_proto::ret_info;
