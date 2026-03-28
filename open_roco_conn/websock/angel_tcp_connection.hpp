#pragma once
#include "adf_protocol/adf.hpp"
#include "adf_protocol/adf_head.hpp"
#include "adf_protocol/byte_buffer.hpp"
#include "event/callback_center.hpp"
#include "event/event_dispatcher.hpp"
#include <array>
#include <boost/asio/any_io_executor.hpp>
#include <boost/asio/ip/tcp.hpp>
#include <boost/asio/ssl/context.hpp>
#include <boost/beast/core/flat_buffer.hpp>
#include <boost/beast/core/tcp_stream.hpp>
#include <boost/beast/ssl/ssl_stream.hpp>
#include <boost/beast/websocket.hpp>
#include <cstdint>
#include <deque>
#include <expected>
#include <functional>
#include <memory>
#include <mutex>
#include <optional>
#include <string>
#include <string_view>
#include <unordered_set>
#include <vector>

class AngelTcpConnection: public EventDispatcher {
public:
    enum class connection_state : uint8_t {
        closed = 0,
        connecting = 1,
        open = 2,
        error = 3
    };

    static constexpr std::string_view HOST = "wss://zone1.17roco.qq.com";
    static constexpr uint16_t PORT = 80;

    explicit AngelTcpConnection(uint32_t id = 0);
    virtual ~AngelTcpConnection() = default;

    const std::string_view get_param1() const override{ return "799d0OnyOhDz5KpLVhjOUkT"; }
    const std::string_view get_param2() const override{ return "AngelTcpConnection"; }

    void set_executor(const boost::asio::any_io_executor& executor);
    uint32_t get_id() const;
    void set_policy_port(uint16_t port);
    void set_notify_dispatcher(EventDispatcher* dispatcher);
    void set_callback_center(CallbackCenter* callback_center);
    virtual void connect(std::string host, uint16_t port);
    virtual void reconnect();
    virtual void close();
    virtual bool is_connected() const;

    virtual void on_open();
    virtual void on_error();
    virtual void on_close();
    using op_result = std::expected<void, std::string>;
    virtual op_result on_message(ByteArray packet, bool is_local_reply = false);
    virtual op_result execute_combat();

    using mock_response_provider = std::function<std::optional<ByteArray>(uint32_t)>;
    virtual void set_mock_response_provider(mock_response_provider provider);
    virtual std::vector<uint8_t> send_data(const ADF& adf);
    virtual bool recv_once();
    virtual bool try_pop_sent_bytes(std::vector<uint8_t>& out_bytes);
    virtual bool try_pop_adf(ADF& out_adf);
    virtual void send_initial_data();

    static std::optional<ADFHead> try_read_adf_head(ByteArray& n);
    bool try_read_adf_body(ByteArray& n);
    static void register_protobuf_cmd(uint32_t cmd_id);
    static bool is_protobuf_cmd(uint32_t cmd_id);

    uint16_t policy_port = 843;
    std::string c_host = std::string(HOST);
    uint16_t c_port = PORT;

private:
    struct parsed_endpoint {
        std::string scheme;
        std::string host;
        uint16_t port = 0;
        std::string target;
    };

    static std::optional<parsed_endpoint> parse_endpoint(const std::string& url, uint16_t fallback_port);
    static std::optional<uint32_t> to_callback_event_id(std::string_view event_type);
    void dispatch_tcp_event(std::string_view event_type,
                            std::shared_ptr<ADF> adf = {},
                            std::string message = {},
                            uint32_t data_type = 0);
    void dispatch_notify_event(std::string_view event_type,
                               std::vector<uint8_t> raw_bytes,
                               std::optional<ADFHead> head = std::nullopt,
                               std::shared_ptr<ADF> adf = {},
                               bool is_send = false);
    static std::vector<uint8_t> byte_array_to_vector(const ByteArray& byte_array);

    using tcp = boost::asio::ip::tcp;
    using plain_ws = boost::beast::websocket::stream<boost::beast::tcp_stream>;
    using tls_ws = boost::beast::websocket::stream<boost::beast::ssl_stream<boost::beast::tcp_stream>>;

    uint32_t id_ = 0;
    std::string name_ = "AngelTcpConnection";
    connection_state state_ = connection_state::closed;
    boost::asio::any_io_executor executor_{};
    mutable std::mutex state_mutex_{};
    mutable std::mutex ws_mutex_{};
    mutable std::mutex queue_mutex_{};
    std::mutex parse_mutex_{};
    boost::asio::ssl::context ssl_ctx_{boost::asio::ssl::context::tlsv12_client};
    std::unique_ptr<plain_ws> plain_ws_{};
    std::unique_ptr<tls_ws> tls_ws_{};

    ByteBuffer in_byte_buff{};
    std::optional<ADF> empty_adf_{};
    std::deque<std::vector<uint8_t>> sent_bytes_queue_{};
    std::deque<ADF> parsed_adf_queue_{};
    mock_response_provider mock_response_provider_{};
    EventDispatcher* notify_dispatcher_ = nullptr;
    CallbackCenter* callback_center_ = nullptr;
    static std::mutex protobuf_cmd_mutex_;
    static std::unordered_set<uint32_t> protobuf_cmd_ids_;
    static constexpr std::array<uint8_t, 600> combat_u8{149, 39, 0, 0, 0, 11, 0, 1, 77, 239, 10, 137, 0, 0, 0, 0, 0, 0, 2, 68, 0, 0, 0, 0, 0, 0, 2, 93, 3, 77, 239, 10, 137, 0, 10, 197, 183, 206, 196, 223, 192, 223, 192, 223, 192, 1, 0, 6, 0, 0, 11, 140, 100, 2, 1, 192, 1, 192, 0, 0, 0, 3, 2, 16, 20, 0, 2, 22, 25, 0, 0, 203, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 25, 100, 1, 1, 187, 1, 187, 0, 0, 0, 4, 3, 100, 15, 0, 3, 194, 5, 0, 4, 73, 5, 0, 4, 75, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 75, 100, 2, 1, 197, 1, 197, 0, 0, 0, 2, 5, 10, 10, 0, 5, 158, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 139, 100, 2, 1, 173, 1, 173, 0, 0, 0, 3, 1, 138, 20, 0, 1, 158, 20, 0, 3, 194, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 110, 100, 1, 0, 247, 0, 247, 0, 0, 0, 3, 0, 161, 30, 0, 0, 12, 20, 0, 0, 166, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 98, 100, 2, 1, 60, 1, 60, 0, 0, 0, 3, 0, 110, 15, 0, 0, 141, 20, 0, 1, 163, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 12, 54, 216, 0, 4, 210, 176, 185, 214, 1, 0, 1, 0, 0, 43, 12, 70, 1, 2, 255, 2, 255, 0, 0, 0, 3, 1, 96, 0, 0, 0, 28, 0, 0, 1, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
};
