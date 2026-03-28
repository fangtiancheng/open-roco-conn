#pragma once

#include "httpreq/http_request.hpp"
#include "httpreq/url_loader.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/json.hpp>
#include <expected>
#include <functional>
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
    using params_t = HttpRequest::params_t;
    using mock_handler = std::function<result(const std::string&, const params_t&)>;

    void set_mock_handler(mock_handler handler);
    boost::asio::awaitable<result> call(
        HttpRequest& http_request,
        const std::string& cgi_root,
        const std::string& path_or_url,
        const params_t& params = {},
        bool use_common_error_alert = true,
        bool is_show_loading_icon = false,
        bool is_encrypt = false
    );

private:
    static std::string build_url(const std::string& cgi_root, const std::string& path_or_url);
    static std::optional<boost::json::value> try_parse_json(const std::string& raw_text);
    mock_handler mock_handler_{};
};
