#pragma once
#include "base/rf_base.hpp"
#include "byte_array.hpp"
#include <cstdint>

class ADFHead: public RFBase{
public:
    const std::string_view get_param1() override{return "26ca636PJFKuLxmT7LSER+D";}
    const std::string_view get_param2() override{return "ADFHead";}
    static constexpr uint16_t MAGIC = 38183;

    uint16_t magic = ADFHead::MAGIC;
    uint16_t version = 0;  // 协议版本
    uint32_t cmd_id = 0;  // 命令类型
    uint32_t uin = 0;     // 用户QQ
    uint32_t ui_serial_num = 0; // 序列号
    int16_t check_sum = 0; // 校验和
    uint16_t length = 0; // 包体总长度

    static constexpr uint32_t HeadLen = 20;
    static constexpr int NotEnBytes = 0;
    static constexpr int HeadReady = 1;
    static constexpr int MagicError = -1;

    void read_external(ByteArray& e);
    void write_external(ByteArray& e) const;
    static int can_read(ByteArray& e);
};