#pragma once
#include <string_view>
#include <cstdint>
#include <string>

class RFBase{
public:
    virtual ~RFBase() = default;

    virtual const std::string_view get_param1()const = 0;
    virtual const std::string_view get_param2()const = 0;

    void debug_line(const std::string& message) const;

    static void debug_line(std::string_view tag, const std::string& message);
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
