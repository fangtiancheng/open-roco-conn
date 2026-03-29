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
#include "receiver/login_receiver.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/json.hpp>
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

    result login_logic(
        WebSocketClient& web_socket_client,
        GlobalAPI& global_api,
        const UserData& user_data,
        uint16_t room_id,
        LoginReceiver* login_receiver = nullptr
    );
    result login_req(
        WebSocketClient& web_socket_client,
        GlobalAPI& global_api,
        const UserData& user_data,
        uint16_t room_id,
        LoginReceiver* login_receiver = nullptr
    );
    result on_tcp_connect(
        const UserData& user_data,
        uint16_t room_id
    );
    void on_tcp_connect_close(const std::string& reason = {});

    result send_login_conn_data(
        uint32_t cmd_type,
        const ServerInfo& server_info
    );
    login_reply_result handle_login_reply(GlobalAPI& global_api, const ADF& adf);

private:
    std::expected<void, std::string> on_tcp_connected_event();
    void on_tcp_error_event();
    void on_tcp_timeout_event();
    void on_tcp_closed_event();

    static boost::asio::awaitable<cgi_result> request_dir_data(
        HttpRequest& http_request,
        const HttpRequest::params_t& params
    );

    WebSocketClient* web_socket_client_ = nullptr;
    GlobalAPI* global_api_ = nullptr;
    LoginReceiver* login_receiver_ = nullptr;
    UserData login_user_data_{};
    uint16_t login_room_id_ = 0;
    bool tcp_listeners_registered_ = false;
    std::size_t tcp_connected_listener_id_ = 0;
    std::size_t tcp_error_listener_id_ = 0;
    std::size_t tcp_timeout_listener_id_ = 0;
    std::size_t tcp_closed_listener_id_ = 0;
};
