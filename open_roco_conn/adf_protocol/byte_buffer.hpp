#pragma once
#include "byte_array.hpp"


class ByteBuffer: public ByteArray {
    int64_t limit_capacity = -1;
    int64_t timeout = 2e3;
public:
    const std::string_view get_param1() const override {return "9c8b9skQVRJjblOrelRs6V6";}
    const std::string_view get_param2() const override {return "ByteBuffer";}
    void allocate(size_t i) override;
    int64_t limit() const;
    size_t bufflen() const;
    ByteArray copy_to_byte_array();
    void fill(ByteArray& source);
};
