#include "angel_tcp_connection.hpp"

#include "adf_protocol/adf_cmds_type.hpp"
#include "base/define.hpp"
#include "event/notify_def.hpp"
#include "event/tcp_conn_event.hpp"
#include <boost/asio/connect.hpp>
#include <boost/asio/ip/tcp.hpp>
#include <boost/beast/core/tcp_stream.hpp>
#include <boost/beast/websocket/stream.hpp>
#include <format>
#include <iostream>
#include <openssl/err.h>
#include <sstream>

namespace net = boost::asio;
namespace beast = boost::beast;
namespace ssl = net::ssl;

namespace {
uint32_t g_constructor_counter = 0;
}

std::mutex AngelTcpConnection::protobuf_cmd_mutex_{};
std::unordered_set<uint32_t> AngelTcpConnection::protobuf_cmd_ids_{};

AngelTcpConnection::AngelTcpConnection(const uint32_t id)
    : id_(id) {
    ++g_constructor_counter;
    name_ += std::to_string(g_constructor_counter);
    in_byte_buff.allocate(0);
    set_policy_port(Define::POLICYPORT);

    boost::system::error_code ec;
    ssl_ctx_.set_default_verify_paths(ec);
    ssl_ctx_.set_verify_mode(ssl::verify_none);
}

void AngelTcpConnection::set_executor(const net::any_io_executor& executor) {
    executor_ = executor;
}

uint32_t AngelTcpConnection::get_id() const {
    return id_;
}

void AngelTcpConnection::set_policy_port(const uint16_t port) {
    policy_port = port;
}

void AngelTcpConnection::set_notify_dispatcher(EventDispatcher* dispatcher) {
    notify_dispatcher_ = dispatcher;
}

void AngelTcpConnection::set_callback_center(CallbackCenter* callback_center) {
    callback_center_ = callback_center;
}

void AngelTcpConnection::register_protobuf_cmd(const uint32_t cmd_id) {
    std::lock_guard<std::mutex> lock(protobuf_cmd_mutex_);
    protobuf_cmd_ids_.insert(cmd_id);
}

bool AngelTcpConnection::is_protobuf_cmd(const uint32_t cmd_id) {
    std::lock_guard<std::mutex> lock(protobuf_cmd_mutex_);
    return protobuf_cmd_ids_.contains(cmd_id);
}

std::optional<AngelTcpConnection::parsed_endpoint> AngelTcpConnection::parse_endpoint(
    const std::string& url,
    const uint16_t fallback_port
) {
    parsed_endpoint endpoint{};
    endpoint.port = fallback_port;
    endpoint.target = "/";

    std::string_view text(url);
    auto scheme_pos = text.find("://");
    if (scheme_pos != std::string_view::npos) {
        endpoint.scheme = std::string(text.substr(0, scheme_pos));
        text.remove_prefix(scheme_pos + 3);
    } else {
        endpoint.scheme = "wss";
    }

    auto slash_pos = text.find('/');
    std::string_view host_port = text;
    if (slash_pos != std::string_view::npos) {
        host_port = text.substr(0, slash_pos);
        endpoint.target = std::string(text.substr(slash_pos));
        if (endpoint.target.empty()) {
            endpoint.target = "/";
        }
    }

    auto colon_pos = host_port.rfind(':');
    if (colon_pos != std::string_view::npos) {
        endpoint.host = std::string(host_port.substr(0, colon_pos));
        auto port_sv = host_port.substr(colon_pos + 1);
        try {
            endpoint.port = static_cast<uint16_t>(std::stoi(std::string(port_sv)));
        } catch (...) {
            return std::nullopt;
        }
    } else {
        endpoint.host = std::string(host_port);
    }

    if (endpoint.host.empty()) {
        return std::nullopt;
    }
    return endpoint;
}

void AngelTcpConnection::connect(std::string host, const uint16_t port) {
    c_host = std::move(host);
    c_port = port;
    reconnect();
}

void AngelTcpConnection::reconnect() {
    if (!executor_) {
        on_error();
        debug_line("reconnect failed: executor is not set");
        return;
    }

    const auto parsed = parse_endpoint(c_host, c_port);
    if (!parsed.has_value()) {
        on_error();
        debug_line("reconnect failed: invalid endpoint " + c_host);
        return;
    }

    const auto& endpoint = parsed.value();
    try {
        std::lock_guard<std::mutex> ws_lock(ws_mutex_);
        plain_ws_.reset();
        tls_ws_.reset();

        {
            std::lock_guard<std::mutex> state_lock(state_mutex_);
            state_ = connection_state::connecting;
        }

        tcp::resolver resolver(executor_);
        auto resolved = resolver.resolve(endpoint.host, std::to_string(endpoint.port));

        if (endpoint.scheme == "ws") {
            plain_ws_ = std::make_unique<plain_ws>(executor_);
            beast::get_lowest_layer(*plain_ws_).connect(resolved);
            plain_ws_->binary(true);
            plain_ws_->handshake(endpoint.host, endpoint.target);
        } else {
            tls_ws_ = std::make_unique<tls_ws>(executor_, ssl_ctx_);
            if (!SSL_set_tlsext_host_name(tls_ws_->next_layer().native_handle(), endpoint.host.c_str())) {
                const auto ec = boost::system::error_code(
                    static_cast<int>(::ERR_get_error()),
                    net::error::get_ssl_category()
                );
                throw beast::system_error(ec);
            }

            beast::get_lowest_layer(*tls_ws_).connect(resolved);
            tls_ws_->next_layer().handshake(ssl::stream_base::client);
            tls_ws_->binary(true);
            tls_ws_->handshake(endpoint.host, endpoint.target);
        }

        on_open();
        debug_line(std::format("reconnect ok: {}://{}:{}{}", endpoint.scheme, endpoint.host, endpoint.port, endpoint.target));
    } catch (const std::exception& ex) {
        on_error();
        debug_line(std::string("reconnect exception: ") + ex.what());
    }
}

void AngelTcpConnection::close() {
    std::lock_guard<std::mutex> ws_lock(ws_mutex_);
    beast::error_code ec;

    if (tls_ws_) {
        tls_ws_->close(beast::websocket::close_code::normal, ec);
        tls_ws_.reset();
    }
    if (plain_ws_) {
        plain_ws_->close(beast::websocket::close_code::normal, ec);
        plain_ws_.reset();
    }

    on_close();
}

bool AngelTcpConnection::is_connected() const {
    std::lock_guard<std::mutex> lock(state_mutex_);
    return state_ == connection_state::open;
}

void AngelTcpConnection::on_open() {
    {
        std::lock_guard<std::mutex> lock(state_mutex_);
        state_ = connection_state::open;
    }
    if (Define::IS_DEBUG) {
        debug_line(std::format("on_open name={}, id={}", name_, id_));
    }
    dispatch_tcp_event(TCPConnEvent::TCPCONN_CONNECTED);
}

void AngelTcpConnection::on_error() {
    {
        std::lock_guard<std::mutex> lock(state_mutex_);
        state_ = connection_state::error;
    }
    dispatch_tcp_event(TCPConnEvent::TCPCONN_ERROR, {}, "[AngelTcpConnection] [error]");
}

void AngelTcpConnection::on_close() {
    {
        std::lock_guard<std::mutex> lock(state_mutex_);
        state_ = connection_state::closed;
    }
    if (Define::IS_DEBUG) {
        debug_line(std::format("on_close name={}, id={}", name_, id_));
    }
    dispatch_tcp_event(TCPConnEvent::TCPCONN_CLOSED);
}

void AngelTcpConnection::set_mock_response_provider(mock_response_provider provider) {
    mock_response_provider_ = std::move(provider);
}

void AngelTcpConnection::send_initial_data() {
}

std::vector<uint8_t> AngelTcpConnection::byte_array_to_vector(const ByteArray& byte_array) {
    ByteArray copy = byte_array;
    copy.reset();

    std::vector<uint8_t> bytes;
    bytes.reserve(copy.length());
    while (copy.bytes_available() > 0) {
        bytes.push_back(copy.read_unsigned_byte());
    }
    return bytes;
}

std::optional<uint32_t> AngelTcpConnection::to_callback_event_id(const std::string_view event_type) {
    if (event_type == NotifyDef::ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA) {
        return NotifyDef::CB_ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA;
    }
    if (event_type == NotifyDef::ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA) {
        return NotifyDef::CB_ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA;
    }
    if (event_type == NotifyDef::ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA) {
        return NotifyDef::CB_ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA;
    }
    if (event_type == NotifyDef::ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA) {
        return NotifyDef::CB_ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA;
    }
    if (event_type == NotifyDef::ANGEL_NET_ON_GET_A_RAW_DATA) {
        return NotifyDef::CB_ANGEL_NET_ON_GET_A_RAW_DATA;
    }
    if (event_type == NotifyDef::ANGEL_NET_ON_SEND_A_RAW_DATA) {
        return NotifyDef::CB_ANGEL_NET_ON_SEND_A_RAW_DATA;
    }
    return std::nullopt;
}

void AngelTcpConnection::dispatch_tcp_event(std::string_view event_type,
                                            std::shared_ptr<ADF> adf,
                                            std::string message,
                                            const uint32_t data_type) {
    TCPConnEvent event(std::string(event_type), id_);
    if (adf) {
        event.set_adf(std::move(adf));
    }
    event.message = std::move(message);
    event.data_type = data_type;
    dispatch_event(event);
}

void AngelTcpConnection::dispatch_notify_event(std::string_view event_type,
                                               std::vector<uint8_t> raw_bytes,
                                               std::optional<ADFHead> head,
                                               std::shared_ptr<ADF> adf,
                                               const bool is_send) {
    auto payload = std::make_shared<NetNotifyPayload>();
    payload->raw_bytes = std::move(raw_bytes);
    payload->head = std::move(head);
    payload->adf = std::move(adf);
    payload->sender = this;
    payload->is_send = is_send;
    payload->is_protobuf = payload->head.has_value() && is_protobuf_cmd(payload->head->cmd_id);

    if (callback_center_ != nullptr) {
        if (const auto callback_event_id = to_callback_event_id(event_type); callback_event_id.has_value()) {
            callback_center_->enqueue(callback_event_id.value(), payload, this);
        }
    }

    if (notify_dispatcher_ != nullptr) {
        NotifyDef event(std::string(event_type), payload);
        notify_dispatcher_->dispatch_event(event);
    }
}

std::vector<uint8_t> AngelTcpConnection::send_data(const ADF& adf) {
    if (!is_connected()) {
        if (Define::IS_DEBUG) {
            debug_stream() << "error: send on non-open socket, name=" << name_ << std::endl;
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
        debug_line(std::format("name={}", name_));
        debug_line(std::format("send cmd={:#x} len={}", adf.head.cmd_id, bytes.size()));
        debug_line("sendArrayBuffer : " + hex_stream.str());
    }

    {
        std::lock_guard<std::mutex> queue_lock(queue_mutex_);
        sent_bytes_queue_.push_back(bytes);
    }

    const auto adf_copy = std::make_shared<ADF>(adf);
    if (is_protobuf_cmd(adf.head.cmd_id)) {
        dispatch_notify_event(NotifyDef::ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA, bytes, adf.head, adf_copy, true);
    } else {
        dispatch_notify_event(NotifyDef::ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA, bytes, adf.head, adf_copy, true);
    }
    dispatch_notify_event(NotifyDef::ANGEL_NET_ON_SEND_A_RAW_DATA, bytes, adf.head, adf_copy, true);

    if (mock_response_provider_) {
        auto maybe_mock = mock_response_provider_(adf.head.cmd_id);
        if (maybe_mock.has_value()) {
            auto ret = on_message(*maybe_mock, true);
            if (!ret.has_value()) {
                debug_line("local mock on_message failed: " + ret.error());
            }
            return bytes;
        }
    }

    beast::error_code ec;
    {
        std::lock_guard<std::mutex> ws_lock(ws_mutex_);
        if (tls_ws_) {
            tls_ws_->write(net::buffer(bytes), ec);
        } else if (plain_ws_) {
            plain_ws_->write(net::buffer(bytes), ec);
        } else {
            return {};
        }
    }

    if (ec) {
        on_error();
        debug_line("send_data write error: " + ec.message());
        return {};
    }
    return bytes;
}

bool AngelTcpConnection::recv_once() {
    if (!is_connected()) {
        return false;
    }

    beast::flat_buffer buffer;
    beast::error_code ec;
    {
        std::lock_guard<std::mutex> ws_lock(ws_mutex_);
        if (tls_ws_) {
            tls_ws_->read(buffer, ec);
        } else if (plain_ws_) {
            plain_ws_->read(buffer, ec);
        } else {
            return false;
        }
    }

    if (ec) {
        debug_line("recv_once read error: " + ec.message());
        on_close();
        return false;
    }

    const auto data = buffer.cdata();
    std::vector<uint8_t> bytes;
    bytes.resize(data.size());
    boost::asio::buffer_copy(boost::asio::buffer(bytes), data);

    ByteArray packet;
    packet.allocate(bytes.size());
    for (const auto byte : bytes) {
        packet.write_unsigned_byte(byte);
    }
    packet.reset();

    auto result = on_message(packet, false);
    if (!result.has_value()) {
        debug_line("recv_once parse failed: " + result.error());
        return false;
    }
    return true;
}

AngelTcpConnection::op_result AngelTcpConnection::on_message(ByteArray packet, const bool is_local_reply) {
    if (packet.length() == 0) {
        return {};
    }

    std::lock_guard<std::mutex> parse_lock(parse_mutex_);
    packet.reset();
    if (Define::IS_DEBUG) {
        std::ostringstream hex_stream;
        ByteArray debug_copy = packet;
        while (debug_copy.bytes_available() > 0) {
            hex_stream << std::format("0x{:02x}", debug_copy.read_unsigned_byte());
            if (debug_copy.bytes_available() > 0) {
                hex_stream << ", ";
            }
        }
        debug_stream() << (is_local_reply ? "[local-reply] " : "")
                       << "TCP[" << id_ << "] recv bytes=" << packet.length() << std::endl;
        debug_stream() << "recv data=[" << hex_stream.str() << "]" << std::endl;
    }

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
    std::lock_guard<std::mutex> queue_lock(queue_mutex_);
    if (sent_bytes_queue_.empty()) {
        return false;
    }
    out_bytes = std::move(sent_bytes_queue_.front());
    sent_bytes_queue_.pop_front();
    return true;
}

bool AngelTcpConnection::try_pop_adf(ADF& out_adf) {
    std::lock_guard<std::mutex> queue_lock(queue_mutex_);
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
            debug_line("AngelTcpConnection", std::format("receive adf head cmd: {:#x}", head.cmd_id));
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
            debug_line("receive login room response");
        }
    }

    auto parsed_adf = std::make_shared<ADF>(*empty_adf_);
    const auto body_bytes = byte_array_to_vector(parsed_adf->body);
    if (is_protobuf_cmd(parsed_adf->head.cmd_id)) {
        dispatch_notify_event(NotifyDef::ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA, body_bytes, parsed_adf->head, parsed_adf, false);
    } else {
        dispatch_notify_event(NotifyDef::ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA, body_bytes, parsed_adf->head, parsed_adf, false);
    }
    dispatch_notify_event(NotifyDef::ANGEL_NET_ON_GET_A_RAW_DATA, body_bytes, parsed_adf->head, parsed_adf, false);

    {
        std::lock_guard<std::mutex> queue_lock(queue_mutex_);
        parsed_adf_queue_.push_back(*parsed_adf);
    }

    dispatch_tcp_event(TCPConnEvent::TCPCONN_ONADF, parsed_adf, {}, parsed_adf->head.cmd_id);
    return true;
}
