#pragma once
#include "base/i_externalizable.hpp"
#include "base/rf_base.hpp"
#include "adf_protocol/byte_array.hpp"


class P_ReturnCode: public RFBase, public IExternalizable {
    int code = -1;
    std::string message{};
public:
    const std::string_view get_param1() const override{return "507fewJ87VAbJB/crMibofO";}
    const std::string_view get_param2() const override{return "P_ReturnCode";}

    void read_external(ByteArray&) override;
    void write_external(ByteArray&) override;
    bool is_error() const ;
    int code_value() const;
    const std::string& message_text() const;
    size_t length() const ;
    static constexpr int OK = 0;
};
