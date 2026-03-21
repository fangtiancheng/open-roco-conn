#pragma once
#include <string_view>
#include <cstdint>

class RFBase{
public:
    virtual ~RFBase() = default;

    virtual const std::string_view get_param1() = 0;
    virtual const std::string_view get_param2() = 0;
};

class AngelDataInputJudge{
public:
    virtual const std::string_view constructor_name() const = 0;
    void i_angel_data_input_judge();
};

class GetAdfType{
public:
    virtual uint32_t get_adf_type() = 0;
};