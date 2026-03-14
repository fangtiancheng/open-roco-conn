#pragma once
#include "adf.hpp"
#include <vector>

class ByteArray: public RFBase{
protected:
    std::vector<uint32_t> _buffer;
    bool little_endian;
    size_t byte_offset;

public:

    int object_encoding = 0;
    std::string endian{};

    const std::string_view get_param1() override{return "6aa3clmfLZDQLiqwyNrV2Kk";}
    const std::string_view get_param2() override{return "ByteArray";}

    void allocate(size_t);
};