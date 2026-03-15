#pragma once
#include <vector>
#include "base/define.hpp"

class ByteArray: public RFBase{
protected:
    std::vector<uint32_t> _buffer;
    bool little_endian;
    size_t byte_offset = 0;
    void check_available(size_t bytes_needed);
    template<typename T> T read_raw();
    template<typename T> void write_raw(T value);
public:

    int object_encoding = 0;
    std::string endian{};

    const std::string_view get_param1() override{return "6aa3clmfLZDQLiqwyNrV2Kk";}
    const std::string_view get_param2() override{return "ByteArray";}

    void allocate(size_t);
    bool read_boolean();
    uint8_t read_unsigned_byte();
    void write_unsigned_byte(uint8_t);
    uint16_t read_unsigned_short();
    void write_unsigned_short(uint16_t);
    uint32_t read_unsigned_int();
    void write_unsigned_int(uint32_t);
    int8_t read_signed_byte();
    void write_signed_byte(int8_t);
    int16_t read_signed_short();
    void write_signed_short(int16_t);
    int32_t read_signed_int();
    void write_signed_int(int32_t);
    point_t read_point();
    void write_point(const point_t&);
    std::vector<uint8_t> read_multi_byte(size_t, std::string_view);
    std::string read_chars(size_t);
    std::string read_fixed_chars(size_t);
    bool bytes_available() const;

    void skip(size_t bytes);
    void reset();
    size_t position() const;
};