#pragma once
#include <string_view>
#include <vector>
#include "base/define.hpp"

class ByteArray: public RFBase{
protected:
    std::vector<uint8_t> _buffer;
    bool little_endian = false;
    size_t _byte_offset = 0;
    size_t _length = 0;
    void check_available_throw(size_t bytes_needed) const;
    void ensure_capacity(size_t bytes_needed);
    template<typename T> T read_raw();
    template<typename T> void write_raw(T value);
public:
    inline static constexpr std::string_view default_charset = "gb2312";

    int object_encoding = 0;
    std::string endian{};

    const std::string_view get_param1() override{return "6aa3clmfLZDQLiqwyNrV2Kk";}
    const std::string_view get_param2() override{return "ByteArray";}

    virtual void allocate(size_t len = 8192);
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
    std::string read_multi_byte(size_t, std::string_view);
    size_t write_multi_byte(const std::string&, std::string_view);
    std::string read_chars(size_t);
    void write_chars(const std::string&, size_t len);
    std::string read_fixed_chars(size_t);
    void read_bytes(ByteArray& dest, size_t dst_idx, size_t len);
    void write_bytes(const ByteArray& src, size_t src_idx, size_t len);
    bool is_bytes_available(size_t) const;
    size_t bytes_available() const;
    void skip(size_t bytes);
    void reset();
    size_t position() const;
    size_t length() const;
};
