#pragma once
#include "adf_protocol/byte_array.hpp"
#include "base/rf_base.hpp"
#include <cstdint>
#include <functional>
#include <string_view>
#include <vector>

class FreePBRequestProxy: public RFBase, public AngelDataInputJudge{
public:
    using reply_callback = std::function<void(FreePBRequestProxy&)>;
    const std::string_view constructor_name() const override { return "FreePBRequestProxy"; };
    const std::string_view get_param1() const override { return "89a9elmIJBP5Y9xEu8GbsK+"; }
    const std::string_view get_param2() const override { return "FreePBRequestProxy"; }

    FreePBRequestProxy() = default;
    FreePBRequestProxy(const ByteArray& output_buffer, uint32_t protocol_hash, reply_callback callback = {});

    void read(ByteArray& input);
    void write(ByteArray& output);
    void on_req_reply_local();
    static void on_req_reply(FreePBRequestProxy& request);

    bool is_proto_buf_id(uint32_t cmd_id) const;
    void add_cmd(uint32_t cmd_id);

    uint32_t protocol_hash() const;
    size_t length() const;

private:
    ByteArray input_buffer_{};
    ByteArray output_buffer_{};
    uint32_t protocol_hash_ = 0;
    reply_callback callback_{};
    std::vector<uint32_t> cmds_{};
};
