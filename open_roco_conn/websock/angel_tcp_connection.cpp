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
#include <openssl/err.h>

namespace net = boost::asio;
namespace beast = boost::beast;
namespace ssl = net::ssl;

namespace {
std::string bytes_to_hex_string(const std::vector<uint8_t>& bytes, const bool prefix_0x, const char* separator) {
    std::string hex;
    hex.reserve(bytes.size() * (prefix_0x ? 5 : 3));
    for (std::size_t i = 0; i < bytes.size(); ++i) {
        hex += prefix_0x ? std::format("0x{:02x}", bytes[i]) : std::format("{:02x}", bytes[i]);
        if (i + 1 < bytes.size()) {
            hex += separator;
        }
    }
    return hex;
}
}

AngelTcpConnection::AngelTcpConnection(const uint32_t id)
    : id_(id) {
    name_ += std::to_string(id_);
    in_byte_buff.allocate(0);
    set_policy_port(Define::POLICYPORT);

    boost::system::error_code ec;
    ssl_ctx_.set_default_verify_paths(ec);
    ssl_ctx_.set_verify_mode(ssl::verify_none);
}

AngelTcpConnection::~AngelTcpConnection() {
    close();
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

bool AngelTcpConnection::is_protobuf_cmd(const uint32_t cmd_id) const {
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
    stop_read_loop_.store(true);
    beast::error_code ec;
    {
        std::lock_guard<std::mutex> ws_lock(ws_mutex_);
        // Keep stream objects alive to avoid races with in-flight recv/send.
        // reconnect() will recreate/reset them under the same mutex.
        if (tls_ws_) {
            tls_ws_->close(beast::websocket::close_code::normal, ec);
        }
        if (plain_ws_) {
            plain_ws_->close(beast::websocket::close_code::normal, ec);
        }
    }
    stop_read_loop(true);
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
    start_read_loop();
    dispatch_tcp_event(EventKey::tcp_conn_connected);
}

void AngelTcpConnection::on_error() {
    {
        std::lock_guard<std::mutex> lock(state_mutex_);
        state_ = connection_state::error;
    }
    dispatch_tcp_event(EventKey::tcp_conn_error, {}, "[AngelTcpConnection] [error]");
}

void AngelTcpConnection::on_close() {
    bool changed = false;
    {
        std::lock_guard<std::mutex> lock(state_mutex_);
        if (state_ != connection_state::closed) {
            changed = true;
        }
        state_ = connection_state::closed;
    }
    if (!changed) {
        return;
    }
    stop_read_loop_.store(true);
    adf_cv_.notify_all();
    if (Define::IS_DEBUG) {
        debug_line(std::format("on_close name={}, id={}", name_, id_));
    }
    dispatch_tcp_event(EventKey::tcp_conn_closed);
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

void AngelTcpConnection::dispatch_tcp_event(const EventKey event_key,
                                            std::shared_ptr<ADF> adf,
                                            std::string message,
                                            const uint32_t data_type) {
    TCPConnEvent event(std::string(to_string(event_key)), id_);
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
            debug_line(std::format("error: send on non-open socket, name={}", name_));
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
        debug_line(std::format("name={}", name_));
        debug_line(std::format("send cmd={:#x} len={}", adf.head.cmd_id, bytes.size()));
        debug_line(std::format("sendArrayBuffer : {}", bytes_to_hex_string(bytes, false, " ")));
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
    tls_ws* tls_ws_local = nullptr;
    plain_ws* plain_ws_local = nullptr;
    {
        std::lock_guard<std::mutex> ws_lock(ws_mutex_);
        tls_ws_local = tls_ws_.get();
        plain_ws_local = plain_ws_.get();
    }
    if (tls_ws_local) {
        tls_ws_local->write(net::buffer(bytes), ec);
    } else if (plain_ws_local) {
        plain_ws_local->write(net::buffer(bytes), ec);
    } else {
        return {};
    }

    if (ec) {
        on_error();
        debug_line("send_data write error: " + ec.message());
        return {};
    }
    return bytes;
}

void AngelTcpConnection::start_read_loop() {
    std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
    if (read_loop_running_) {
        return;
    }
    stop_read_loop_.store(false);
    read_loop_running_ = true;
    arm_async_read();
}

void AngelTcpConnection::stop_read_loop(const bool join_thread) {
    (void) join_thread;
    std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
    stop_read_loop_.store(true);
    read_loop_running_ = false;
    async_read_buffer_.consume(async_read_buffer_.size());
    adf_cv_.notify_all();
}

void AngelTcpConnection::arm_async_read() {
    if (stop_read_loop_.load()) {
        std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
        read_loop_running_ = false;
        return;
    }

    {
        std::lock_guard<std::mutex> ws_lock(ws_mutex_);
        if (tls_ws_) {
            tls_ws_->async_read(async_read_buffer_, [this](const beast::error_code ec, const std::size_t) {
                if (stop_read_loop_.load()) {
                    std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
                    read_loop_running_ = false;
                    return;
                }
                if (ec) {
                    debug_line(std::format("async_read error: {}", ec.message()));
                    on_close();
                    std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
                    read_loop_running_ = false;
                    return;
                }

                const auto data = async_read_buffer_.cdata();
                std::vector<uint8_t> bytes(data.size());
                boost::asio::buffer_copy(boost::asio::buffer(bytes), data);
                async_read_buffer_.consume(async_read_buffer_.size());

                ByteArray packet;
                packet.allocate(bytes.size());
                for (const auto byte : bytes) {
                    packet.write_unsigned_byte(byte);
                }
                packet.reset();

                auto result = on_message(packet, false);
                if (!result.has_value()) {
                    debug_line("async_read parse failed: " + result.error());
                }
                arm_async_read();
            });
            return;
        }

        if (plain_ws_) {
            plain_ws_->async_read(async_read_buffer_, [this](const beast::error_code ec, const std::size_t) {
                if (stop_read_loop_.load()) {
                    std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
                    read_loop_running_ = false;
                    return;
                }
                if (ec) {
                    debug_line(std::format("async_read error: {}", ec.message()));
                    on_close();
                    std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
                    read_loop_running_ = false;
                    return;
                }

                const auto data = async_read_buffer_.cdata();
                std::vector<uint8_t> bytes(data.size());
                boost::asio::buffer_copy(boost::asio::buffer(bytes), data);
                async_read_buffer_.consume(async_read_buffer_.size());

                ByteArray packet;
                packet.allocate(bytes.size());
                for (const auto byte : bytes) {
                    packet.write_unsigned_byte(byte);
                }
                packet.reset();

                auto result = on_message(packet, false);
                if (!result.has_value()) {
                    debug_line("async_read parse failed: " + result.error());
                }
                arm_async_read();
            });
            return;
        }
    }

    std::lock_guard<std::mutex> read_lock(read_loop_mutex_);
    read_loop_running_ = false;
}

AngelTcpConnection::op_result AngelTcpConnection::on_message(ByteArray packet, const bool is_local_reply) {
    if (packet.length() == 0) {
        return {};
    }

    std::lock_guard<std::mutex> parse_lock(parse_mutex_);
    packet.reset();
    if (Define::IS_DEBUG) {
        std::vector<uint8_t> debug_bytes;
        debug_bytes.reserve(packet.length());
        ByteArray debug_copy = packet;
        while (debug_copy.bytes_available() > 0) {
            debug_bytes.push_back(debug_copy.read_unsigned_byte());
        }
        debug_line(std::format(
            "{}TCP[{}] recv bytes={}",
            is_local_reply ? "[local-reply] " : "",
            id_,
            packet.length()
        ));
        debug_line(std::format("recv data=[{}]", bytes_to_hex_string(debug_bytes, true, ", ")));
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

bool AngelTcpConnection::wait_pop_adf(ADF& out_adf) {
    std::unique_lock<std::mutex> queue_lock(queue_mutex_);
    adf_cv_.wait(queue_lock, [this]() {
        if (!parsed_adf_queue_.empty()) {
            return true;
        }
        std::lock_guard<std::mutex> state_lock(state_mutex_);
        return state_ == connection_state::closed || state_ == connection_state::error;
    });

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
    adf_cv_.notify_one();

    dispatch_tcp_event(EventKey::tcp_conn_on_adf, parsed_adf, {}, parsed_adf->head.cmd_id);
    return true;
}
