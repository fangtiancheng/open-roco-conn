#pragma once
#include "base/rf_base.hpp"

class P_DGetSpiritsDetail: public RFBase, public AngelDataInputJudge{
public:
    const std::string_view get_param1() const override{return "6033eJfXfNHRr+9oTzCexUz";}
    const std::string_view get_param2() const override{return "P_DGetSpiritsDetail";}
    const std::string_view constructor_name() const override{return "P_DGetSpiritsDetail";}
};