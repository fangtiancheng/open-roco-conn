#pragma once

#include "base/rf_base.hpp"
#include <cstdint>
#include <optional>
#include <string_view>
#include <vector>
#include <array>

enum class tcp_data_type {
    uint8_type,
    uint16_type,
    uint32_type,
    uint64_type,
    boolean_type,
    string_type,
    custom_string_type,
    buffer_type,
    nested_type,
    array_type
};

enum class charset_type {
    utf8,
    gbk
};

class TcpTransmission : public RFBase {
public:
    const std::string_view get_param1() const override { return "011d2m2cR5LHLzIDVNk33IY"; }
    const std::string_view get_param2() const override { return "TCPTransmission"; }

    void append_input(const std::vector<uint8_t>& bytes);
    void append_input(const uint8_t* data, size_t len);

    std::optional<std::vector<uint8_t>> try_read_frame();
    static std::vector<uint8_t> make_frame(const std::vector<uint8_t>& payload);

private:
    void compact_buffer();
    static constexpr size_t max_frame_size = 4 * 1024 * 1024;
    std::vector<uint8_t> buffer_{};
    size_t read_offset_ = 0;
};
