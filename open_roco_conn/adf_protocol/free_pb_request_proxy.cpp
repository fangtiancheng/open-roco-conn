#include "adf_protocol/free_pb_request_proxy.hpp"
#include <algorithm>
#include <utility>

FreePBRequestProxy::FreePBRequestProxy(const ByteArray& output_buffer,
                                       const uint32_t protocol_hash,
                                       reply_callback callback)
    : protocol_hash_(protocol_hash),
      callback_(std::move(callback)) {
    output_buffer_ = output_buffer;
    output_buffer_.reset();
}

void FreePBRequestProxy::read(ByteArray& input) {
    input_buffer_.allocate(input.bytes_available());
    input.read_bytes(input_buffer_, 0, input.bytes_available());
    input_buffer_.reset();
}

void FreePBRequestProxy::write(ByteArray& output) {
    output.write_bytes(output_buffer_, 0, output_buffer_.length());
}

void FreePBRequestProxy::on_req_reply_local() {
}

void FreePBRequestProxy::on_req_reply(FreePBRequestProxy& request) {
    request.on_req_reply_local();
    if (request.callback_) {
        request.callback_(request);
    }
}

bool FreePBRequestProxy::is_proto_buf_id(const uint32_t cmd_id) const {
    return std::find(cmds_.begin(), cmds_.end(), cmd_id) != cmds_.end();
}

void FreePBRequestProxy::add_cmd(const uint32_t cmd_id) {
    if (!is_proto_buf_id(cmd_id)) {
        cmds_.push_back(cmd_id);
    }
}

uint32_t FreePBRequestProxy::protocol_hash() const {
    return protocol_hash_;
}

size_t FreePBRequestProxy::length() const {
    return output_buffer_.length();
}
