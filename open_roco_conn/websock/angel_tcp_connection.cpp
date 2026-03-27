#include "angel_tcp_connection.hpp"

#include "adf_protocol/adf_cmds_type.hpp"
#include <format>
#include <iostream>
#include <sstream>

namespace {
uint32_t g_constructor_counter = 0;
}

AngelTcpConnection::AngelTcpConnection(const uint32_t id)
    : id_(id) {
    ++g_constructor_counter;
    name_ += std::to_string(g_constructor_counter);
    in_byte_buff.allocate(0);
    set_policy_port(Define::POLICYPORT);
}

uint32_t AngelTcpConnection::get_id() const {
    return id_;
}

void AngelTcpConnection::set_policy_port(const uint16_t port) {
    policy_port = port;
}

void AngelTcpConnection::connect(std::string host, const uint16_t port) {
    c_host = std::move(host);
    c_port = port;
    reconnect();
}

void AngelTcpConnection::reconnect() {
    state_ = connection_state::connecting;
    std::cout << "[AngelTcpConnection] reconnect: " << c_host << ":" << c_port
              << " id=" << id_ << std::endl;
    on_open();
}

void AngelTcpConnection::close() {
    on_close();
}

bool AngelTcpConnection::is_connected() const {
    return state_ == connection_state::open;
}

void AngelTcpConnection::on_open() {
    state_ = connection_state::open;
    if (Define::IS_DEBUG) {
        std::cout << "[AngelTcpConnection] on_open name=" << name_ << " id=" << id_ << std::endl;
    }
}

void AngelTcpConnection::on_error() {
    state_ = connection_state::error;
    std::cerr << "[AngelTcpConnection] on_error id=" << id_ << std::endl;
}

void AngelTcpConnection::on_close() {
    state_ = connection_state::closed;
    if (Define::IS_DEBUG) {
        std::cout << "[AngelTcpConnection] on_close id=" << id_ << std::endl;
    }
}

void AngelTcpConnection::set_mock_response_provider(mock_response_provider provider) {
    mock_response_provider_ = std::move(provider);
}

std::vector<uint8_t> AngelTcpConnection::send_data(const ADF& adf) {
    if (!is_connected()) {
        if (Define::IS_DEBUG) {
            std::cout << "[AngelTcpConnection] error: send on non-open socket, state="
                      << static_cast<int>(state_) << " name=" << name_ << std::endl;
        }
        return {};
    }

    ByteArray packet;
    packet.allocate();
    auto to_send = adf;
    to_send.write_external(packet);
    packet.reset();

    std::vector<uint8_t> bytes;
    bytes.reserve(packet.length());
    while (packet.bytes_available() > 0) {
        bytes.push_back(packet.read_unsigned_byte());
    }

    if (Define::IS_DEBUG) {
        std::ostringstream hex_stream;
        for (const uint8_t b : bytes) {
            hex_stream << std::format("{:02x} ", b);
        }
        std::cout << "[AngelTcpConnection] name=" << name_ << std::endl;
        std::cout << "[AngelTcpConnection] send cmd=0x"
                  << std::hex << adf.head.cmd_id << std::dec
                  << " len=" << bytes.size() << std::endl;
        std::cout << "sendArrayBuffer : " << hex_stream.str() << std::endl;
    }

    if (adf.head.cmd_id == ADFCmdsType::T_LoginRoom && Define::IS_DEBUG) {
        std::cout << "[AngelTcpConnection] login room packet sent, id=" << id_ << std::endl;
    }

    sent_bytes_queue_.push_back(bytes);

    if (mock_response_provider_) {
        auto maybe_mock = mock_response_provider_(adf.head.cmd_id);
        if (maybe_mock.has_value()) {
            auto ret = on_message(*maybe_mock, true);
            if (!ret.has_value() && Define::IS_DEBUG) {
                std::cerr << "[AngelTcpConnection] local mock on_message failed: "
                          << ret.error() << std::endl;
            }
        }
    }

    return bytes;
}

AngelTcpConnection::op_result AngelTcpConnection::on_message(ByteArray packet, const bool is_local_reply) {
    if (packet.length() == 0) {
        return {};
    }

    packet.reset();
    if (Define::IS_DEBUG) {
        std::ostringstream hex_stream;
        ByteArray debug_copy = packet;
        while (debug_copy.bytes_available() > 0) {
            hex_stream << "0x" << std::format("{:02x}", debug_copy.read_unsigned_byte());
            if (debug_copy.bytes_available() > 0) {
                hex_stream << ", ";
            }
        }
        std::cout << (is_local_reply ? "这是一个本地回包" : "")
                  << "[AngelTcpConnection] TCP[" << id_ << "]收到服务端数据:"
                  << packet.length() << std::endl;
        std::cout << "收到服务端数据:== [" << hex_stream.str() << "]" << std::endl;
    }

    // JS logic expects one ADF per ws message; keep the same strict behavior.
    if (!empty_adf_.has_value()) {
        auto head = try_read_adf_head(packet);
        if (head.has_value()) {
            empty_adf_.emplace();
            empty_adf_->head = *head;
            in_byte_buff.allocate(head->length);
        }
    }

    if (!empty_adf_.has_value()) {
        return {};
    }

    if (!try_read_adf_body(packet)) {
        return {};
    }

    empty_adf_.reset();
    if (packet.bytes_available() > 0) {
        return std::unexpected("on_message error: trailing bytes after one adf packet");
    }
    return {};
}

AngelTcpConnection::op_result AngelTcpConnection::execute_combat() {
    ByteArray packet;
    packet.allocate(combat_u8.size());
    for (const uint8_t byte : combat_u8) {
        packet.write_unsigned_byte(byte);
    }
    packet.reset();

    if (Define::IS_DEBUG) {
        std::ostringstream hex_stream;
        ByteArray debug_copy = packet;
        while (debug_copy.bytes_available() > 0) {
            hex_stream << std::format("{:02x}", debug_copy.read_unsigned_byte());
            if (debug_copy.bytes_available() > 0) {
                hex_stream << ", ";
            }
        }
        std::cout << "收到服务端数据:==[" << hex_stream.str() << "]" << std::endl;
    }

    if (!empty_adf_.has_value()) {
        auto head = try_read_adf_head(packet);
        if (head.has_value()) {
            empty_adf_.emplace();
            empty_adf_->head = *head;
            in_byte_buff.allocate(head->length);
        }
    }

    if (empty_adf_.has_value() && try_read_adf_body(packet)) {
        empty_adf_.reset();
        if (packet.bytes_available() > 0) {
            return std::unexpected("execute_combat error: trailing bytes after one adf packet");
        }
    }
    return {};
}

bool AngelTcpConnection::try_pop_sent_bytes(std::vector<uint8_t>& out_bytes) {
    if (sent_bytes_queue_.empty()) {
        return false;
    }
    out_bytes = std::move(sent_bytes_queue_.front());
    sent_bytes_queue_.pop_front();
    return true;
}

bool AngelTcpConnection::try_pop_adf(ADF& out_adf) {
    if (parsed_adf_queue_.empty()) {
        return false;
    }
    out_adf = std::move(parsed_adf_queue_.front());
    parsed_adf_queue_.pop_front();
    return true;
}

std::optional<ADFHead> AngelTcpConnection::try_read_adf_head(ByteArray& n) {
    for (int status = ADFHead::can_read(n); status != ADFHead::NotEnBytes; status = ADFHead::can_read(n)) {
        if (status != ADFHead::HeadReady) {
            continue;
        }
        ADFHead head;
        head.read_external(n);
        if (Define::IS_DEBUG) {
            std::cout << "[AngelTcpConnection] receive adf head cmd: "
                      << std::format("{:#x}", head.cmd_id) << std::endl;
        }
        return head;
    }
    return std::nullopt;
}

bool AngelTcpConnection::try_read_adf_body(ByteArray& n) {
    if (!empty_adf_.has_value()) {
        return false;
    }

    if (n.bytes_available() < static_cast<size_t>(in_byte_buff.limit())) {
        return false;
    }

    in_byte_buff.fill(n);
    empty_adf_->body = in_byte_buff.copy_to_byte_array();

    if (Define::IS_DEBUG) {
        const auto cmd_id = empty_adf_->head.cmd_id;
        if (cmd_id == ADFCmdsType::T_LoginRoom) {
            std::cout << "[AngelTcpConnection] receive login room response" << std::endl;
        }
    }

    parsed_adf_queue_.push_back(*empty_adf_);
    return true;
}
