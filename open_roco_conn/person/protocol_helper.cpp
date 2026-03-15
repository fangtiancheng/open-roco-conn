#include "protocol_helper.hpp"
#include "base/define.hpp"

RoleData ProtocolHelper::read_role_data(ByteArray& b) {
    RoleData rd;
    rd.read_role_data(b);
    return rd;
}

P_ReturnCode ProtocolHelper::read_code(ByteArray &b) {
    P_ReturnCode rc;
    rc.read_external(b);
    return rc;
}
