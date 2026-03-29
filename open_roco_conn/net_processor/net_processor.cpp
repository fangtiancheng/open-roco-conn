#include "net_processor/net_processor.hpp"
#include <utility>

NetProcessor::NetProcessor(const uint32_t cmd, req_ptr req_buffer, rsp_factory rsp_type)
    : cmd_(cmd),
      req_buffer_(std::move(req_buffer)),
      rsp_type_(std::move(rsp_type)) {
}

void NetProcessor::read(ByteArray& input) {
    if (!rsp_type_) {
        return;
    }
    auto rsp = rsp_type_();
    if (!rsp) {
        if (on_error_) {
            on_error_("response type factory returned null");
        }
        return;
    }
    rsp->read_external(input);
    if (on_success_) {
        on_success_(std::move(rsp));
    }
}

void NetProcessor::write(ByteArray& output) {
    if (req_buffer_) {
        req_buffer_->write_external(output);
    }
}

size_t NetProcessor::length() const {
    if (!req_buffer_) {
        return 0;
    }
    ByteArray temp{};
    req_buffer_->write_external(temp);
    return temp.length();
}

uint32_t NetProcessor::cmd() const {
    return cmd_;
}

void NetProcessor::set_success(success_callback callback) {
    on_success_ = std::move(callback);
}

void NetProcessor::set_error(error_callback callback) {
    on_error_ = std::move(callback);
}
