#pragma once
#include "base/rf_base.hpp"
#include "global/user_data.hpp"
#include "global/web_socket_client.hpp"
#include "httpreq/http_request.hpp"
#include "httpreq/cgi2.hpp"
#include "login/server_info.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/json.hpp>
#include <expected>
#include <map>
#include <string>
#include <vector>

class ServerListUI: public RFBase {
public:
    const std::string_view get_param1() override { return "023a9xCFH5AjKwDhmZ9eI1D"; }
    const std::string_view get_param2() override { return "ServerListUI"; }

    using result = std::expected<void, std::string>;
    using cgi_result = std::expected<CGI2::CgiResponse, std::string>;
    using int_result = std::expected<int, std::string>;

    struct RoomInfo {
        int type = 0;
        int index = 0;
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
        int count,
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

    static boost::asio::awaitable<result> login_logic(
        WebSocketClient& web_socket_client,
        const UserData& user_data,
        uint16_t room_id,
        uint32_t ui_serial_num = 1
    );

    static boost::asio::awaitable<result> send_login_conn_data(
        WebSocketClient& web_socket_client,
        const ServerInfo& server_info,
        uint32_t ui_serial_num
    );

private:
    static boost::asio::awaitable<cgi_result> request_dir_data(
        HttpRequest& http_request,
        const std::map<std::string, std::string>& params
    );
};
