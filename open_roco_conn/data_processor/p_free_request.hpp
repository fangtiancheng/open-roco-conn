#pragma once
#include "adf_protocol/adf.hpp"
#include "base/rf_base.hpp"
#include "person/protocol_helper.hpp"
#include <cstdint>
#include <functional>
#include <limits>
#include <string_view>

class P_FreeRequest: public RFBase {
public:
    using send_callback = std::function<uint32_t(uint32_t data_type, ByteArray data, bool has_ser_num, uint32_t tcp_id)>;
    using decode_callback = std::function<void(const ByteArray&)>;

    const std::string_view get_param1() const override { return "2e5e0kr14lJRJPo+DDy7D/N"; }
    const std::string_view get_param2() const override { return "P_FreeRequest"; }

    explicit P_FreeRequest(int32_t cmd_id = -1,
                           ByteArray data = ByteArray{},
                           decode_callback handler = {});

    static void set_net_sys_send(send_callback callback);

    uint32_t send(bool has_ser_num = false, uint32_t tcp_id = std::numeric_limits<uint32_t>::max()) const;
    ByteArray decode(const ADF& adf) const;
    ADF encode(int32_t cmd_id_override = -1) const;

    int32_t cmd_id = 0;
    ByteArray data{};
    uint32_t serial_num = 0;

private:
    decode_callback handler_{};
    static send_callback net_sys_send_;
};

