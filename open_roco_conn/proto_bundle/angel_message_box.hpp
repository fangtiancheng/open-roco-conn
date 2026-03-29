#pragma once
#include "adf_protocol/byte_array.hpp"
#include "base/i_externalizable.hpp"
#include <cstdint>
#include <optional>
#include <string>
#include <vector>

namespace AngelMessageBox {

class RetInfo: public IExternalizable {
public:
    int32_t ret_code = 0;
    std::string ret_msg{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class Empty: public IExternalizable {
public:
    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class MessageEntity: public IExternalizable {
public:
    uint32_t type = 0;
    uint32_t operate = 0;
    uint32_t total = 0;
    uint32_t current = 0;
    uint32_t petid = 0;

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class PTB_0x181000_QueryStatus_Message_S2C: public IExternalizable {
public:
    std::optional<RetInfo> ret{};
    std::vector<MessageEntity> entity{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

class PTB_0x181001_Update_Message_PUSH: public IExternalizable {
public:
    uint32_t operate_type = 0;
    std::optional<MessageEntity> entity{};

    void read_external(ByteArray& input) override;
    void write_external(ByteArray& output) override;
};

}  // namespace AngelMessageBox

using MessageEntity = AngelMessageBox::MessageEntity;
using Empty = AngelMessageBox::Empty;
