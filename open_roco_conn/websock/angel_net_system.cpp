#include "websock/angel_net_system.hpp"

#include <algorithm>
#include <format>
#include <utility>

void AngelNetSystem::initialize(EventDispatcher& dispatcher, WebSocketClient& web_socket_client) {
    finalize();
    dispatcher_ = &dispatcher;
    web_socket_client_ = &web_socket_client;
    try_send_listener_id_ = dispatcher_->add_event_listener(std::string(AngelDataEvent::TRYSENDADF), [this]() {
        on_try_send_adf_event();
    });
    tcp_connected_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_connected, [this]() {
        on_tcp_connected_event();
    });
    tcp_closed_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_closed, [this]() {
        on_tcp_closed_event();
    });
    tcp_error_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_error, [this]() {
        on_tcp_error_event();
    });
    tcp_timeout_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_timeout, [this]() {
        on_tcp_timeout_event();
    });
    tcp_on_adf_listener_id_ = web_socket_client_->add_tcp_event_listener(EventKey::tcp_conn_on_adf, [this]() {
        on_tcp_on_adf_event();
    });
}

void AngelNetSystem::finalize() {
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
    if (dispatcher_ != nullptr && try_send_listener_id_ != 0) {
        dispatcher_->remove_event_listener(std::string(AngelDataEvent::TRYSENDADF), try_send_listener_id_);
    }
    try_send_listener_id_ = 0;
    tcp_connected_listener_id_ = 0;
    tcp_closed_listener_id_ = 0;
    tcp_error_listener_id_ = 0;
    tcp_timeout_listener_id_ = 0;
    tcp_on_adf_listener_id_ = 0;
    pending_req_receivers_.clear();
    cmd_receivers_.clear();
    receivers_.clear();
    web_socket_client_ = nullptr;
    dispatcher_ = nullptr;
    current_state_.clear();
}

void AngelNetSystem::add_data_receiver(AbstractDataReceiver* receiver) {
    if (receiver == nullptr) {
        return;
    }
    if (std::find(receivers_.begin(), receivers_.end(), receiver) != receivers_.end()) {
        return;
    }
    receivers_.push_back(receiver);
    for (const auto cmd_type : receiver->accept_types()) {
        auto& bucket = cmd_receivers_[cmd_type];
        if (std::find(bucket.begin(), bucket.end(), receiver) == bucket.end()) {
            bucket.push_back(receiver);
        }
    }
}

void AngelNetSystem::remove_data_receiver(AbstractDataReceiver* receiver) {
    if (receiver == nullptr) {
        return;
    }
    receivers_.erase(std::remove(receivers_.begin(), receivers_.end(), receiver), receivers_.end());
    for (auto it = cmd_receivers_.begin(); it != cmd_receivers_.end();) {
        auto& bucket = it->second;
        bucket.erase(std::remove(bucket.begin(), bucket.end(), receiver), bucket.end());
        if (bucket.empty()) {
            it = cmd_receivers_.erase(it);
            continue;
        }
        ++it;
    }
    for (auto it = pending_req_receivers_.begin(); it != pending_req_receivers_.end();) {
        if (it->second == receiver) {
            it = pending_req_receivers_.erase(it);
            continue;
        }
        ++it;
    }
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

    if (decoded_adf.head.ui_serial_num != 0) {
        const auto key = make_serial_key(decoded_adf.head.cmd_id, decoded_adf.head.ui_serial_num);
        if (auto it = pending_req_receivers_.find(key); it != pending_req_receivers_.end()) {
            AbstractDataReceiver* receiver = it->second;
            pending_req_receivers_.erase(it);
            if (receiver != nullptr) {
                (void) receiver->receive(decoded_adf);
                return;
            }
        }
    }

    auto it = cmd_receivers_.find(decoded_adf.head.cmd_id);
    if (it == cmd_receivers_.end()) {
        return;
    }
    for (auto* receiver : it->second) {
        if (receiver == nullptr) {
            continue;
        }
        (void) receiver->receive(decoded_adf);
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
    AngelNetSysEvent state_event{std::string(AngelNetSysEvent::ON_STATE_CHANGE)};
    state_event.curr_state = std::move(curr_state);
    state_event.message = std::move(message);
    state_event.tcp_id = web_socket_client_ != nullptr ? web_socket_client_->tcp_id() : 0;
    dispatcher_->dispatch_event(state_event);
}

void AngelNetSystem::on_try_send_adf_event() {
    for (auto* receiver : receivers_) {
        if (receiver == nullptr) {
            continue;
        }
        AbstractDataReceiver::send_request request{};
        while (receiver->try_pop_send_request(request)) {
            uint32_t serial_num = try_send_data(request);
            if (serial_num == 0 && request.sender != nullptr) {
                request.sender->catch_try_send_data_error(request.data_type, 0, -1);
                continue;
            }
            if (request.has_ser_num && request.sender != nullptr) {
                pending_req_receivers_[make_serial_key(request.data_type, serial_num)] = request.sender;
            }
        }
    }
}

uint32_t AngelNetSystem::try_send_data(const AbstractDataReceiver::send_request& request) {
    if (web_socket_client_ == nullptr) {
        return 0;
    }

    uint32_t serial_num = 0;
    if (request.has_ser_num) {
        ++next_serial_num_;
        serial_num = next_serial_num_;
    }

    auto adf_opt = processors_.encode(request.data, request.data_type, serial_num);
    if (!adf_opt.has_value()) {
        return 0;
    }

    ADF adf = std::move(adf_opt.value());
    if (!web_socket_client_->send_adf_now(adf)) {
        return 0;
    }
    return request.has_ser_num ? serial_num : 1;
}

std::string AngelNetSystem::make_serial_key(const uint32_t cmd_type, const uint32_t serial_num) {
    return std::format("{} {}", cmd_type, serial_num);
}
