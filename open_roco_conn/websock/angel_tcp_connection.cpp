#include "angel_tcp_connection.hpp"
#include <iostream>

std::optional<ADFHead> AngelTcpConnection::try_read_adf_head(ByteArray& n) {
    for (int t = ADFHead::can_read(n); t != ADFHead::NotEnBytes;) {
        if (t == ADFHead::HeadReady) {
            ADFHead e;
            e.read_external(n);
            if (Define::IS_DEBUG) {
                std::cout << "[AngelTcpConnection] 收到的包头文件：" << std::format("{:#x}", e.cmd_id) << std::endl;
            }
            return e;
        }
    }
    return {};
}

bool AngelTcpConnection::try_read_adf_body(ByteArray &n) {
    throw "TODO";
    if (n.bytes_available() >= in_byte_buff.limit()) {
        in_byte_buff.fill(n);
        empty_adf.body = in_byte_buff;

    }
    return false;
}
