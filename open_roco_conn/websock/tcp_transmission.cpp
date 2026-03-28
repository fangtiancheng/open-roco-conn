#include "tcp_transmission.hpp"

#include <algorithm>

void TcpTransmission::append_input(const std::vector<uint8_t>& bytes) {
    if (bytes.empty()) {
        return;
    }
    buffer_.insert(buffer_.end(), bytes.begin(), bytes.end());
}

void TcpTransmission::append_input(const uint8_t* data, const size_t len) {
    if (data == nullptr || len == 0) {
        return;
    }
    buffer_.insert(buffer_.end(), data, data + len);
}

std::optional<std::vector<uint8_t>> TcpTransmission::try_read_frame() {
    const size_t available = buffer_.size() - read_offset_;
    if (available < sizeof(uint32_t)) {
        return std::nullopt;
    }

    const uint8_t* header = buffer_.data() + read_offset_;
    const uint32_t frame_len = (static_cast<uint32_t>(header[0]) << 24U) |
                               (static_cast<uint32_t>(header[1]) << 16U) |
                               (static_cast<uint32_t>(header[2]) << 8U) |
                               static_cast<uint32_t>(header[3]);

    if (frame_len == 0 || frame_len > max_frame_size) {
        buffer_.clear();
        read_offset_ = 0;
        return std::nullopt;
    }

    if (available < sizeof(uint32_t) + frame_len) {
        return std::nullopt;
    }

    const uint8_t* payload_begin = header + sizeof(uint32_t);
    std::vector<uint8_t> payload(payload_begin, payload_begin + frame_len);
    read_offset_ += sizeof(uint32_t) + frame_len;
    compact_buffer();
    return payload;
}

std::vector<uint8_t> TcpTransmission::make_frame(const std::vector<uint8_t>& payload) {
    const uint32_t frame_len = static_cast<uint32_t>(payload.size());
    std::vector<uint8_t> frame;
    frame.reserve(sizeof(uint32_t) + payload.size());
    frame.push_back(static_cast<uint8_t>((frame_len >> 24U) & 0xFFU));
    frame.push_back(static_cast<uint8_t>((frame_len >> 16U) & 0xFFU));
    frame.push_back(static_cast<uint8_t>((frame_len >> 8U) & 0xFFU));
    frame.push_back(static_cast<uint8_t>(frame_len & 0xFFU));
    frame.insert(frame.end(), payload.begin(), payload.end());
    return frame;
}

void TcpTransmission::compact_buffer() {
    if (read_offset_ == 0) {
        return;
    }

    if (read_offset_ >= buffer_.size()) {
        buffer_.clear();
        read_offset_ = 0;
        return;
    }

    if (read_offset_ > buffer_.size() / 2) {
        std::vector<uint8_t> compacted(buffer_.begin() + static_cast<std::ptrdiff_t>(read_offset_), buffer_.end());
        buffer_.swap(compacted);
        read_offset_ = 0;
    }
}
