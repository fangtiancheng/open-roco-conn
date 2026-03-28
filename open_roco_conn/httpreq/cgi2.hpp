#pragma once

#include "httpreq/http_request.hpp"
#include "httpreq/url_loader.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/json.hpp>
#include <expected>
#include <functional>
#include <map>
#include <optional>
#include <string>
#include <string_view>

class CGI2 {
public:
    struct CgiError {
        int code = -1;
        std::string message{};
        std::string type{};
    };

    struct CgiResponse {
        std::string raw_text{};
        std::optional<boost::json::value> json{};
    };

    using result = std::expected<CgiResponse, CgiError>;
    using mock_handler = std::function<result(const std::string&, const std::map<std::string, std::string>&)>;

    static void set_mock_handler(mock_handler handler);
    static boost::asio::awaitable<result> call(
        HttpRequest& http_request,
        const std::string& cgi_root,
        const std::string& path_or_url,
        const std::map<std::string, std::string>& params = {},
        bool use_common_error_alert = true,
        bool is_show_loading_icon = false,
        bool is_encrypt = false
    );

private:
    static std::string build_url(const std::string& cgi_root, const std::string& path_or_url);
    static std::optional<boost::json::value> try_parse_json(const std::string& raw_text);
    static mock_handler mock_handler_;
};
