#pragma once
#include "adf_protocol/byte_array.hpp"
#include "base/i_externalizable.hpp"
#include "base/rf_base.hpp"
#include <cstdint>
#include <functional>
#include <memory>
#include <string_view>

class NetProcessor: public RFBase {
public:
    using req_ptr = std::shared_ptr<IExternalizable>;
    using rsp_factory = std::function<req_ptr()>;
    using success_callback = std::function<void(req_ptr)>;
    using error_callback = std::function<void(const std::string&)>;

    const std::string_view get_param1() const override { return "7c1b8MROONA3oB8yywqkk6k"; }
    const std::string_view get_param2() const override { return "NetProcessor"; }

    NetProcessor(uint32_t cmd, req_ptr req_buffer = {}, rsp_factory rsp_type = {});

    void read(ByteArray& input);
    void write(ByteArray& output);
    size_t length() const;

    uint32_t cmd() const;
    void set_success(success_callback callback);
    void set_error(error_callback callback);

private:
    uint32_t cmd_ = 0;
    req_ptr req_buffer_{};
    rsp_factory rsp_type_{};
    success_callback on_success_{};
    error_callback on_error_{};
};

