#pragma once
#include "adf_protocol/adf.hpp"
#include "base/rf_base.hpp"
#include "event/event_key.hpp"
#include "global/global_api.hpp"
#include "global/user_data.hpp"
#include "global/web_socket_client.hpp"
#include "httpreq/http_request.hpp"
#include "httpreq/cgi2.hpp"
#include "login/login_data_repply.hpp"
#include "login/server_info.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/json.hpp>
#include <array>
#include <expected>
#include <map>
#include <utility>
#include <string>
#include <vector>

class ServerListUI: public RFBase {
public:
    const std::string_view get_param1() const override { return "023a9xCFH5AjKwDhmZ9eI1D"; }
    const std::string_view get_param2() const override { return "ServerListUI"; }

    using result = std::expected<void, std::string>;
    using cgi_result = std::expected<CGI2::CgiResponse, std::string>;
    using int_result = std::expected<int, std::string>;
    using login_reply_result = std::expected<LoginDataRepply, std::string>;

    struct RoomInfo {
        int type = 0;
        uint16_t index = 0;
        int stat = 0;
        int limit = 0;
        int count = 0;
        int attr = 0;
        int zid = 0;
        int carrier = 0;

        using result = std::expected<RoomInfo, std::string>;
        static result from_json(const boost::json::value& value);
        std::string to_string() const;
    };

    using room_list_result = std::expected<std::vector<RoomInfo>, std::string>;

    static constexpr std::string_view DIR_URL = "https://dir.17roco.qq.com:8080/";

    static boost::asio::awaitable<cgi_result> on_request_recommend_data(HttpRequest& http_request, uint32_t uin);
    static boost::asio::awaitable<cgi_result> on_request_range_data(
        HttpRequest& http_request,
        int begin,
        uint32_t uin
    );
    static boost::asio::awaitable<cgi_result> on_request_fast_login_data(HttpRequest& http_request, uint32_t uin);

    static void on_recommend_complete(const CGI2::CgiResponse& response);
    static void on_range_complete(const CGI2::CgiResponse& response);
    static void on_fast_login_complete(const CGI2::CgiResponse& response);
    static void on_request_error(const std::string& tag, const std::string& error);
    static room_list_result parse_room_list(const CGI2::CgiResponse& response);
    static int_result read_begin_id(const CGI2::CgiResponse& response);
    static void print_room_response(const CGI2::CgiResponse& response, const std::string& tag);
    static std::pair<uint16_t, int> pick_room_id_zid(
        const room_list_result& rooms_result,
        const UserData& user_data
    );

    static boost::asio::awaitable<result> login_logic(
        WebSocketClient& web_socket_client,
        GlobalAPI& global_api,
        const UserData& user_data,
        uint16_t room_id,
        uint32_t ui_serial_num = 1
    );
    static boost::asio::awaitable<result> login_req(
        WebSocketClient& web_socket_client,
        GlobalAPI& global_api,
        const UserData& user_data,
        uint16_t room_id,
        uint32_t ui_serial_num = 1
    );
    static boost::asio::awaitable<result> on_tcp_connect(
        WebSocketClient& web_socket_client,
        const UserData& user_data,
        uint16_t room_id,
        uint32_t ui_serial_num = 1
    );
    static void on_tcp_connect_close(GlobalAPI& global_api, const std::string& reason = {});

    static boost::asio::awaitable<result> send_login_conn_data(
        WebSocketClient& web_socket_client,
        const ServerInfo& server_info,
        uint32_t ui_serial_num
    );
    static login_reply_result handle_login_reply(GlobalAPI& global_api, const ADF& adf);

private:
    using tcp_event_handler = void (*)(WebSocketClient&);
    struct tcp_event_binding {
        EventKey event_key = EventKey::tcp_conn_connected;
        tcp_event_handler handler = nullptr;
    };

    static result send_login_conn_data_now(
        WebSocketClient& web_socket_client,
        const ServerInfo& server_info,
        uint32_t ui_serial_num
    );
    static const std::array<tcp_event_binding, 4>& tcp_login_event_bindings();
    static void ensure_login_req_listeners(WebSocketClient& web_socket_client);
    static void on_tcp_connected_event(WebSocketClient& web_socket_client);
    static void on_tcp_error_event(WebSocketClient& web_socket_client);
    static void on_tcp_timeout_event(WebSocketClient& web_socket_client);
    static void on_tcp_closed_event(WebSocketClient& web_socket_client);

    static boost::asio::awaitable<cgi_result> request_dir_data(
        HttpRequest& http_request,
        const HttpRequest::params_t& params
    );
};
