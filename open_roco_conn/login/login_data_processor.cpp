#include "login_data_processor.hpp"
#include "person/protocol_helper.hpp"
#include "adf_protocol/adf_cmds_type.hpp"

const LoginDataRepply& LoginDataProcessor::decode(ADF &adf) {
    login_data.read(adf.body);
    return login_data;
}

ADF LoginDataProcessor::encode() {
    ADF u;
    //TODO:
//    u.key =

    return u;
}

uint32_t LoginDataProcessor::get_adf_type() {
    return ADFCmdsType::T_LoginRoom;
}
