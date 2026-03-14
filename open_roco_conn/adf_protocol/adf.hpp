#pragma once
#include <cstdint>
#include <vector>
#include <string>

using point_t = std::pair<int16_t, int16_t>;
struct ADFHead {
    uint16_t magic = 38183;
    uint16_t version;  // 协议版本
    uint32_t cmd_id = 0;  // 命令类型
    uint32_t uin = 0;     // 用户QQ
    uint32_t ui_serial_num = 0; // 序列号
    int16_t check_sum = 0; // 校验和
    uint16_t length = 0; // 包体总长度

    static ADFHead from_bytes(const uint8_t* buffer);
    static constexpr uint16_t MAGIC = 38183;
};

static_assert(sizeof(ADFHead) == 20, "ADFHead must be 20B");

class ADF{
private:
    ADFHead head;
    std::vector<uint8_t> body;
    std::size_t body_index = 0;
    void check_available(size_t bytes_needed);
    template<typename T> T read_raw();

public:
    bool read_boolean();
    uint8_t read_unsigned_byte();
    uint16_t read_unsigned_short();
    uint32_t read_unsigned_int();
    int8_t read_signed_byte();
    int16_t read_signed_short();
    int32_t read_signed_int();
    point_t read_point();
    std::vector<uint8_t> read_multi_byte(size_t, std::string_view);
    std::string read_chars(size_t);
    std::string read_fixed_chars(size_t);
    bool bytes_available() const;

    void skip(size_t bytes);
    void reset();
    size_t position() const;
};

class RFBase{
public:
    virtual const std::string_view get_param1() = 0;
    virtual const std::string_view get_param2() = 0;
};
