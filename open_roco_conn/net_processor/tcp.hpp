#pragma once
#include "base/rf_base.hpp"
#include "net_processor/net_processor.hpp"
#include <chrono>
#include <cstdint>
#include <functional>
#include <memory>
#include <string>
#include <string_view>
#include <unordered_map>

class TCP: public RFBase {
public:
    using callback_t = std::function<void(NetProcessor::req_ptr, void*)>;

    const std::string_view get_param1() const override { return "41847Z7m4pB4a8u75VNTQD5"; }
    const std::string_view get_param2() const override { return "TCP"; }

    TCP(uint32_t cmd,
        NetProcessor::req_ptr req = {},
        NetProcessor::rsp_factory rsp = {},
        callback_t callback = {},
        void* param = nullptr,
        bool waiting = false);

    static std::shared_ptr<TCP> call(uint32_t cmd,
                                     NetProcessor::req_ptr req = {},
                                     NetProcessor::rsp_factory rsp = {},
                                     callback_t callback = {},
                                     void* param = nullptr,
                                     bool waiting = false,
                                     bool use_cache = false);

    static void set_send_func(std::function<uint32_t(uint32_t, ByteArray, bool, uint32_t)> sender);
    static void check_timeout();

private:
    void success_handler(NetProcessor::req_ptr rsp_obj);
    void error_handler(const std::string& reason);
    void set_waiting(bool waiting) const;

    uint32_t cmd_ = 0;
    callback_t callback_{};
    void* param_ = nullptr;
    bool use_common_error_alert_ = true;
    std::chrono::steady_clock::time_point start_time_{};
    std::shared_ptr<NetProcessor> processor_{};

    static inline std::unordered_map<uint32_t, std::shared_ptr<TCP>> req_cache_{};
    static inline std::function<uint32_t(uint32_t, ByteArray, bool, uint32_t)> send_func_{};
    static inline constexpr std::chrono::milliseconds request_timeout_{10000};
};
