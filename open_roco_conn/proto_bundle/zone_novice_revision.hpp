#pragma once
#include "adf_protocol/byte_array.hpp"
#include "base/i_externalizable.hpp"
#include <cstdint>
#include <optional>
#include <string>
#include <vector>

namespace ZoneNoviceRevision {

class RetInfo: public IExternalizable {
public:
    int32_t ret_code = 0;
    std::string ret_msg{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class QualifyingNotify: public IExternalizable {
public:
    uint32_t flag = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class OpenLadderRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};
    uint32_t status = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class QueryIconRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};
    uint32_t status = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class SceneQueryRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};
    uint32_t gender = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class QueryStatusRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};
    uint32_t flag = 0;
    uint32_t status = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class ChangeStatusRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};
    uint32_t status = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class ItemInfo: public IExternalizable {
public:
    uint32_t id = 0;
    uint32_t count = 0;
    uint32_t type = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class QueryAwardStatusRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};
    uint32_t status = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class GetAwardReq: public IExternalizable {
public:
    uint32_t which = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class GetAwardRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};
    std::vector<ItemInfo> items{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class RecoverHpRsp: public IExternalizable {
public:
    std::optional<RetInfo> ret_info{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

}  // namespace ZoneNoviceRevision

using QueryIconRsp = ZoneNoviceRevision::QueryIconRsp;
using OpenLadderRsp = ZoneNoviceRevision::OpenLadderRsp;
using QualifyingNotify = ZoneNoviceRevision::QualifyingNotify;
using SceneQueryRsp = ZoneNoviceRevision::SceneQueryRsp;
using QueryStatusRsp = ZoneNoviceRevision::QueryStatusRsp;
using ChangeStatusRsp = ZoneNoviceRevision::ChangeStatusRsp;
using ZoneNoviceItemInfo = ZoneNoviceRevision::ItemInfo;
using QueryAwardStatusRsp = ZoneNoviceRevision::QueryAwardStatusRsp;
using GetAwardReq = ZoneNoviceRevision::GetAwardReq;
using GetAwardRsp = ZoneNoviceRevision::GetAwardRsp;
using RecoverHpRsp = ZoneNoviceRevision::RecoverHpRsp;
