#include "websock/angel_net_system.hpp"
#include "base/define.hpp"

#include <format>
#include <limits>
#include <utility>
#include <vector>

void AngelNetSystem::initialize(EventDispatcher& dispatcher, WebSocketClient& web_socket_client) {
    finalize();
    dispatcher_ = &dispatcher;
    web_socket_client_ = &web_socket_client;
    adf_receivers_.initialize(*dispatcher_, this);
    tcp_connected_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_connected, [this]() -> EventDispatcher::dispatch_result_t {
        on_tcp_connected_event();
        return {};
    });
    tcp_closed_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_closed, [this]() -> EventDispatcher::dispatch_result_t {
        on_tcp_closed_event();
        return {};
    });
    tcp_error_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_error, [this]() -> EventDispatcher::dispatch_result_t {
        on_tcp_error_event();
        return {};
    });
    tcp_timeout_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_timeout, [this]() -> EventDispatcher::dispatch_result_t {
        on_tcp_timeout_event();
        return {};
    });
    tcp_on_adf_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_on_adf, [this]() -> EventDispatcher::dispatch_result_t {
        on_tcp_on_adf_event();
        return {};
    });
}

void AngelNetSystem::finalize() {
    adf_receivers_.dispose();
    if (web_socket_client_ != nullptr) {
        if (tcp_connected_listener_id_ != 0) {
            web_socket_client_->remove_tcp_event_listener(EventKey::tcp_conn_connected, tcp_connected_listener_id_);
        }
        if (tcp_closed_listener_id_ != 0) {
            web_socket_client_->remove_tcp_event_listener(EventKey::tcp_conn_closed, tcp_closed_listener_id_);
        }
        if (tcp_error_listener_id_ != 0) {
            web_socket_client_->remove_tcp_event_listener(EventKey::tcp_conn_error, tcp_error_listener_id_);
        }
        if (tcp_timeout_listener_id_ != 0) {
            web_socket_client_->remove_tcp_event_listener(EventKey::tcp_conn_timeout, tcp_timeout_listener_id_);
        }
        if (tcp_on_adf_listener_id_ != 0) {
            web_socket_client_->remove_tcp_event_listener(EventKey::tcp_conn_on_adf, tcp_on_adf_listener_id_);
        }
    }
    tcp_connected_listener_id_ = 0;
    tcp_closed_listener_id_ = 0;
    tcp_error_listener_id_ = 0;
    tcp_timeout_listener_id_ = 0;
    tcp_on_adf_listener_id_ = 0;
    web_socket_client_ = nullptr;
    dispatcher_ = nullptr;
    current_state_.clear();
}

void AngelNetSystem::add_data_receiver(AbstractDataReceiver* receiver) {
    adf_receivers_.add(receiver);
}

void AngelNetSystem::remove_data_receiver(AbstractDataReceiver* receiver) {
    adf_receivers_.remove(receiver);
}

void AngelNetSystem::add_data_processor(AdfProcessor* processor) {
    processors_.add(processor);
}

void AngelNetSystem::remove_data_processor(AdfProcessor* processor) {
    processors_.remove(processor);
}

void AngelNetSystem::on_receive_adf(const ADF& adf) {
    ADF decoded_adf = adf;
    if (!processors_.decode(decoded_adf)) {
        return;
    }

    if (on_before_dispatch_adf_) {
        on_before_dispatch_adf_(decoded_adf);
    }

    if (!adf_receivers_.on_data_receive(decoded_adf) && Define::IS_DEBUG) {
        RFBase::debug_line(
            "AngelNetSystem",
            std::format("cmd=0x{:x} not handled by ADFReceivers", decoded_adf.head.cmd_id)
        );
    }
}

void AngelNetSystem::set_on_before_dispatch_adf(adf_callback callback) {
    on_before_dispatch_adf_ = std::move(callback);
}

std::string AngelNetSystem::current_state() const {
    return current_state_;
}

void AngelNetSystem::on_tcp_on_adf_event() {
    if (web_socket_client_ == nullptr) {
        return;
    }
    ADF adf{};
    while (web_socket_client_->try_pop_adf(adf)) {
        on_receive_adf(adf);
    }
}

void AngelNetSystem::on_tcp_connected_event() {
    dispatch_net_state_change(std::string(AngelNetSysEvent::NS_CONNETED));
}

void AngelNetSystem::on_tcp_closed_event() {
    dispatch_net_state_change(std::string(AngelNetSysEvent::NS_CLOSED), "socket closed");
}

void AngelNetSystem::on_tcp_error_event() {
    dispatch_net_state_change(std::string(AngelNetSysEvent::NS_ERROR), "[AngelTcpConnection] [error]");
}

void AngelNetSystem::on_tcp_timeout_event() {
    dispatch_net_state_change(std::string(AngelNetSysEvent::NS_ERROR), "socket timeout");
}

void AngelNetSystem::dispatch_net_state_change(std::string curr_state, std::string message) {
    if (dispatcher_ == nullptr) {
        return;
    }
    current_state_ = curr_state;
    (void) message;
    auto dispatch_result = dispatcher_->dispatch_event<void>(EventKey::net_state_change);
    if (!dispatch_result.has_value()) {
        RFBase::debug_line("AngelNetSystem", std::format("dispatch net_state_change failed: {}", dispatch_result.error()));
    }
}

uint32_t AngelNetSystem::try_send_data(const uint32_t data_type,
                                       ByteArray data,
                                       const bool has_ser_num,
                                       const uint32_t tcp_id) {
    auto* tcp_proxy = get_tcp_proxy(tcp_id);
    if (tcp_proxy == nullptr) {
        return 0;
    }

    uint32_t serial_num = 0;
    if (has_ser_num) {
        ++next_serial_num_;
        serial_num = next_serial_num_;
    }

    data.reset();
    std::vector<uint8_t> payload{};
    payload.reserve(data.length());
    while (data.bytes_available() > 0) {
        payload.push_back(data.read_unsigned_byte());
    }

    auto adf_opt = processors_.encode(payload, data_type, serial_num);
    if (!adf_opt.has_value()) {
        return 0;
    }

    ADF adf = std::move(adf_opt.value());
    if (!tcp_proxy->send_adf(adf)) {
        return 0;
    }
    return has_ser_num ? serial_num : 1;
}

WebSocketClient* AngelNetSystem::get_tcp_proxy(const uint32_t tcp_id) {
    if (web_socket_client_ == nullptr) {
        return nullptr;
    }
    constexpr uint32_t default_tcp_id = std::numeric_limits<uint32_t>::max();
    if (tcp_id == default_tcp_id || web_socket_client_->tcp_id() == tcp_id) {
        return web_socket_client_;
    }
    return nullptr;
}
