#pragma once
#include "adf_protocol/adf.hpp"
#include "adf_protocol/adf_processors.hpp"
#include "base/rf_base.hpp"
#include "event/event_dispatcher.hpp"
#include "global/web_socket_client.hpp"
#include "receiver/abstract_data_receiver.hpp"
#include "websock/angel_net_sys_event.hpp"
#include <cstdint>
#include <functional>
#include <string>
#include <string_view>
#include <unordered_map>
#include <vector>

class AngelNetSystem: public RFBase {
public:
    const std::string_view get_param1() const override { return "a48b38lus5GyKRiMdcM8ivJ"; }
    const std::string_view get_param2() const override { return "AngelNetSystem"; }

    using adf_callback = std::function<void(const ADF&)>;

    void initialize(EventDispatcher& dispatcher, WebSocketClient& web_socket_client);
    void finalize();

    void add_data_receiver(AbstractDataReceiver* receiver);
    void remove_data_receiver(AbstractDataReceiver* receiver);
    void add_data_processor(AdfProcessor* processor);
    void remove_data_processor(AdfProcessor* processor);
    void on_receive_adf(const ADF& adf);
    void set_on_before_dispatch_adf(adf_callback callback);
    std::string current_state() const;

private:
    void on_tcp_on_adf_event();
    void on_tcp_connected_event();
    void on_tcp_closed_event();
    void on_tcp_error_event();
    void on_tcp_timeout_event();
    void dispatch_net_state_change(std::string curr_state, std::string message = {});
    void on_try_send_adf_event();
    uint32_t try_send_data(const AbstractDataReceiver::send_request& request);
    static std::string make_serial_key(uint32_t cmd_type, uint32_t serial_num);

    EventDispatcher* dispatcher_ = nullptr;
    WebSocketClient* web_socket_client_ = nullptr;
    std::size_t try_send_listener_id_ = 0;
    std::size_t tcp_connected_listener_id_ = 0;
    std::size_t tcp_closed_listener_id_ = 0;
    std::size_t tcp_error_listener_id_ = 0;
    std::size_t tcp_timeout_listener_id_ = 0;
    std::size_t tcp_on_adf_listener_id_ = 0;
    std::string current_state_{};
    uint32_t next_serial_num_ = 0;
    std::vector<AbstractDataReceiver*> receivers_{};
    std::unordered_map<uint32_t, std::vector<AbstractDataReceiver*>> cmd_receivers_{};
    std::unordered_map<std::string, AbstractDataReceiver*> pending_req_receivers_{};
    AdfProcessors processors_{};
    adf_callback on_before_dispatch_adf_{};
};
