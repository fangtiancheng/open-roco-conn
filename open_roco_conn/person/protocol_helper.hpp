#pragma once
#include <cstdint>
#include <vector>
#include <string>
#include "adf_protocol/byte_array.hpp"
#include "role_data.hpp"
#include "p_return_code.hpp"


class ProtocolHelper: public RFBase{
public:
    const std::string_view get_param1() override{return "33935knY35OaZvPkrnUxrok";}
    const std::string_view get_param2() override{return "ProtocolHelper";}


//    void read_object(ByteArray&); //TODO
    static P_ReturnCode read_code(ByteArray& );
    static RoleData read_role_data(ByteArray&);
};

