#pragma once
#include "adf.hpp"

class P_ReturnCode: public RFBase{
    int code = -1;
public:
    const std::string_view get_param1() override{return "507fewJ87VAbJB/crMibofO";}
    const std::string_view get_param2() override{return "P_ReturnCode";}

    void read_external(ADF& adf);
    bool is_ok() const ;

};