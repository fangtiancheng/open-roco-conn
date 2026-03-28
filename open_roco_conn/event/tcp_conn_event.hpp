#pragma once
#include "adf_protocol/adf.hpp"
#include "event/base_event.hpp"
#include <cstdint>
#include <memory>

class TCPConnEvent: public BaseEvent {
public:
    const std::string_view get_param1() const override { return "22670hsVHBI36HizIt3hiM6"; }
    const std::string_view get_param2() const override { return "TCPConnEvent"; }

    static constexpr std::string_view TCPCONN_CONNECTED = "tcpConnConnected";
    static constexpr std::string_view TCPCONN_CLOSED = "tcpConnClosed";
    static constexpr std::string_view TCPCONN_ERROR = "tcpConnError";
    static constexpr std::string_view TCPCONN_ONADF = "tcpConnOnADF";
    static constexpr std::string_view TCPCONN_TIMEOUT = "tcpConnTimeOut";

    TCPConnEvent() = default;
    explicit TCPConnEvent(std::string type, uint32_t tcp_id = 0, bool bubbles = false);

    uint32_t get_tcp_id() const;
    const ADF* get_adf() const;
    std::shared_ptr<ADF> get_adf_ptr() const;
    void set_adf(std::shared_ptr<ADF> adf);
    void set_tcp_id(uint32_t tcp_id);

    std::unique_ptr<BaseEvent> clone() const override;

    uint32_t data_type = 0;

private:
    uint32_t tcp_id_ = 0;
    std::shared_ptr<ADF> adf_{};
};
