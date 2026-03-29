#include "net_processor/tcp.hpp"
#include <utility>

TCP::TCP(const uint32_t cmd,
         NetProcessor::req_ptr req,
         NetProcessor::rsp_factory rsp,
         callback_t callback,
         void* param,
         const bool waiting)
    : cmd_(cmd),
      callback_(std::move(callback)),
      param_(param),
      start_time_(std::chrono::steady_clock::now()) {
    set_waiting(waiting);

    processor_ = std::make_shared<NetProcessor>(cmd, std::move(req), std::move(rsp));
    processor_->set_success([this](NetProcessor::req_ptr rsp_obj) { success_handler(std::move(rsp_obj)); });
    processor_->set_error([this](const std::string& reason) { error_handler(reason); });

    ByteArray req_buffer{};
    processor_->write(req_buffer);
    req_buffer.reset();
    if (!send_func_ || send_func_(cmd_, req_buffer, true, static_cast<uint32_t>(-1)) == 0) {
        error_handler("send failed");
    }
}

std::shared_ptr<TCP> TCP::call(const uint32_t cmd,
                               NetProcessor::req_ptr req,
                               NetProcessor::rsp_factory rsp,
                               callback_t callback,
                               void* param,
                               const bool waiting,
                               const bool use_cache) {
    if (!use_cache) {
        return std::make_shared<TCP>(cmd, std::move(req), std::move(rsp), std::move(callback), param, waiting);
    }

    auto it = req_cache_.find(cmd);
    if (it != req_cache_.end()) {
        return it->second;
    }

    auto request = std::make_shared<TCP>(cmd, std::move(req), std::move(rsp), std::move(callback), param, waiting);
    req_cache_[cmd] = request;
    return request;
}

void TCP::set_send_func(std::function<uint32_t(uint32_t, ByteArray, bool, uint32_t)> sender) {
    send_func_ = std::move(sender);
}

void TCP::check_timeout() {
    const auto now = std::chrono::steady_clock::now();
    for (auto it = req_cache_.begin(); it != req_cache_.end();) {
        if ((now - it->second->start_time_) > request_timeout_) {
            it->second->error_handler("TCP request timeout");
            it = req_cache_.erase(it);
            continue;
        }
        ++it;
    }
}

void TCP::success_handler(NetProcessor::req_ptr rsp_obj) {
    set_waiting(false);
    req_cache_.erase(cmd_);
    if (callback_) {
        callback_(std::move(rsp_obj), param_);
    }
    callback_ = {};
    param_ = nullptr;
}

void TCP::error_handler(const std::string& reason) {
    (void) use_common_error_alert_;
    (void) reason;
    set_waiting(false);
    req_cache_.erase(cmd_);
    if (callback_) {
        callback_(nullptr, param_);
    }
    callback_ = {};
    param_ = nullptr;
}

void TCP::set_waiting(const bool waiting) const {
    (void) waiting;
}

