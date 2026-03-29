#include "websock/adf_receivers.hpp"
#include "base/define.hpp"
#include "websock/angel_net_system.hpp"
#include <algorithm>
#include <format>
#include <limits>
#include <utility>

void ADFReceivers::initialize(EventDispatcher& dispatcher, AngelNetSystem* net_system) {
    dispose();
    dispatcher_ = &dispatcher;
    net_system_ = net_system;
    try_send_listener_id_ = dispatcher_->add_event_listener<void>(
        EventKey::try_send_adf,
        [this]() -> EventDispatcher::dispatch_result_t {
            all_send_adf_handler();
            return {};
        }
    );
}

void ADFReceivers::dispose() {
    if (dispatcher_ != nullptr && try_send_listener_id_ != 0) {
        dispatcher_->remove_event_listener(EventKey::try_send_adf, try_send_listener_id_);
    }
    dispatcher_ = nullptr;
    net_system_ = nullptr;
    try_send_listener_id_ = 0;
    receivers_.clear();
    maps_.clear();
    curr_reqs_map_.clear();
    pending_data_type_.reset();
    pending_data_ = ByteArray{};
    pending_has_ser_num_ = false;
    pending_tcp_id_ = std::numeric_limits<uint32_t>::max();
    pending_sender_ = nullptr;
}

void ADFReceivers::add(AbstractDataReceiver* receiver) {
    if (receiver == nullptr) {
        return;
    }
    if (std::find(receivers_.begin(), receivers_.end(), receiver) != receivers_.end()) {
        return;
    }
    receivers_.push_back(receiver);
    receiver->set_send_request_handler([this](const uint32_t data_type,
                                              ByteArray data,
                                              const bool has_ser_num,
                                              const uint32_t tcp_id,
                                              AbstractDataReceiver* sender) {
        submit_send_request(data_type, std::move(data), has_ser_num, tcp_id, sender);
    });
    for (const auto cmd_type : receiver->accept_types()) {
        auto& bucket = maps_[cmd_type];
        if (std::find(bucket.begin(), bucket.end(), receiver) != bucket.end()) {
            continue;
        }
        if (Define::IS_DEBUG) {
            debug_line(std::format("add receiver cmd={} hex_cmd=0x{:05x}", cmd_type, cmd_type));
        }
        bucket.push_back(receiver);
    }
}

void ADFReceivers::remove(AbstractDataReceiver* receiver) {
    if (receiver == nullptr) {
        return;
    }
    receiver->set_send_request_handler({});
    receivers_.erase(std::remove(receivers_.begin(), receivers_.end(), receiver), receivers_.end());

    for (auto& [cmd_type, bucket] : maps_) {
        (void) cmd_type;
        bucket.erase(std::remove(bucket.begin(), bucket.end(), receiver), bucket.end());
    }
    for (auto it = maps_.begin(); it != maps_.end();) {
        if (it->second.empty()) {
            it = maps_.erase(it);
            continue;
        }
        ++it;
    }

    for (auto it = curr_reqs_map_.begin(); it != curr_reqs_map_.end();) {
        if (it->second == receiver) {
            it = curr_reqs_map_.erase(it);
            continue;
        }
        ++it;
    }
}

bool ADFReceivers::on_data_receive(const ADF& adf) {
    const uint32_t cmd_type = adf.head.cmd_id;
    const uint32_t serial_num = adf.head.ui_serial_num;

    if (serial_num != 0) {
        const auto key = make_serial_key(cmd_type, serial_num);
        if (auto it = curr_reqs_map_.find(key); it != curr_reqs_map_.end()) {
            AbstractDataReceiver* receiver = it->second;
            curr_reqs_map_.erase(it);
            if (receiver != nullptr) {
                (void) receiver->receive(adf);
                return true;
            }
        }
    }

    auto it = maps_.find(cmd_type);
    if (it == maps_.end()) {
        return false;
    }

    auto& bucket = it->second;
    for (auto rit = bucket.rbegin(); rit != bucket.rend(); ++rit) {
        AbstractDataReceiver* receiver = *rit;
        if (receiver == nullptr) {
            continue;
        }
        (void) receiver->receive(adf);
    }
    return true;
}

void ADFReceivers::all_send_adf_handler() {
    if (net_system_ == nullptr || !pending_data_type_.has_value()) {
        return;
    }

    const uint32_t data_type = pending_data_type_.value();
    ByteArray data = pending_data_;
    const bool has_ser_num = pending_has_ser_num_;
    const uint32_t tcp_id = pending_tcp_id_;
    auto* sender = pending_sender_;
    pending_data_type_.reset();
    pending_data_ = ByteArray{};
    pending_has_ser_num_ = false;
    pending_tcp_id_ = std::numeric_limits<uint32_t>::max();
    pending_sender_ = nullptr;

    const uint32_t serial_num = net_system_->try_send_data(data_type, std::move(data), has_ser_num, tcp_id);
    if (serial_num == 0 && sender != nullptr) {
        sender->catch_try_send_data_error(data_type, tcp_id, -1);
        return;
    }
    if (has_ser_num && sender != nullptr) {
        curr_reqs_map_[make_serial_key(data_type, serial_num)] = sender;
    }
}

void ADFReceivers::submit_send_request(const uint32_t data_type,
                                       ByteArray data,
                                       const bool has_ser_num,
                                       const uint32_t tcp_id,
                                       AbstractDataReceiver* sender) {
    pending_data_type_ = data_type;
    pending_data_ = std::move(data);
    pending_has_ser_num_ = has_ser_num;
    pending_tcp_id_ = tcp_id;
    pending_sender_ = sender;
    if (dispatcher_ == nullptr) {
        return;
    }
    auto dispatch_result = dispatcher_->dispatch_event<void>(EventKey::try_send_adf);
    if (!dispatch_result.has_value()) {
        RFBase::debug_line("ADFReceivers", std::format("dispatch try_send_adf failed: {}", dispatch_result.error()));
    }
}

std::string ADFReceivers::make_serial_key(const uint32_t cmd_type, const uint32_t serial_num) {
    return std::format("{} {}", cmd_type, serial_num);
}
