#pragma once
#include "adf_protocol/adf.hpp"
#include "base/rf_base.hpp"
#include "event/event_dispatcher.hpp"
#include "event/event_key.hpp"
#include "receiver/abstract_data_receiver.hpp"
#include <cstdint>
#include <cstddef>
#include <limits>
#include <optional>
#include <string>
#include <string_view>
#include <unordered_map>
#include <vector>

class AngelNetSystem;

class ADFReceivers: public RFBase {
public:
    const std::string_view get_param1() const override { return "d53a9aQv6mxP7uLw5kNc2He"; }
    const std::string_view get_param2() const override { return "ADFReceivers"; }

    void initialize(EventDispatcher& dispatcher, AngelNetSystem* net_system);
    void dispose();
    void add(AbstractDataReceiver* receiver);
    void remove(AbstractDataReceiver* receiver);
    bool on_data_receive(const ADF& adf);
    void all_send_adf_handler();

private:
    void submit_send_request(uint32_t data_type, ByteArray data, bool has_ser_num, uint32_t tcp_id, AbstractDataReceiver* sender);
    static std::string make_serial_key(uint32_t cmd_type, uint32_t serial_num);

    EventDispatcher* dispatcher_ = nullptr;
    AngelNetSystem* net_system_ = nullptr;
    std::size_t try_send_listener_id_ = 0;
    std::vector<AbstractDataReceiver*> receivers_{};
    std::unordered_map<uint32_t, std::vector<AbstractDataReceiver*>> maps_{};
    std::unordered_map<std::string, AbstractDataReceiver*> curr_reqs_map_{};
    std::optional<uint32_t> pending_data_type_{};
    ByteArray pending_data_{};
    bool pending_has_ser_num_ = false;
    uint32_t pending_tcp_id_ = std::numeric_limits<uint32_t>::max();
    AbstractDataReceiver* pending_sender_ = nullptr;
};
