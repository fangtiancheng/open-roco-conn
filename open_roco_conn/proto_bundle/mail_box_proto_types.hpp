#pragma once
#include "proto_bundle/mail_box_proto.hpp"

// JS-aligned type container: MailBoxProto.QueryListRsp / MailBoxProto.MailDetail ...
struct MailBoxProto {
    using RetInfo = mail_box_proto::ret_info;
    using MailBaseInfo = ::MailBaseInfo;
    using Attach = ::Attach;
    using MailDetail = ::MailDetail;
    using ItemInfo = mail_box_proto::item_info;
    using QueryListRsp = mail_box_proto::query_list_rsp;
    using OpenMailReq = mail_box_proto::open_mail_req;
    using OpenMailRsp = mail_box_proto::open_mail_rsp;
    using GetAttachReq = mail_box_proto::get_attach_req;
    using GetAttachRsp = mail_box_proto::get_attach_rsp;
    using DelMailReq = mail_box_proto::del_mail_req;
    using DelMailRsp = mail_box_proto::del_mail_rsp;
};

