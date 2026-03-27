#pragma once

#include "base/rf_base.hpp"
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

class CGI2: public RFBase {
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

    const std::string_view get_param1() override { return "baf1dzPUmVIa53E4H8InZUT"; }
    const std::string_view get_param2() override { return "CGI2"; }

    CGI2(HttpRequest& http_request, std::string cgi_root = {});

    void set_cgi_root(std::string cgi_root);
    const std::string& cgi_root() const;
    void set_mock_handler(mock_handler handler);

    boost::asio::awaitable<result> call(
        const std::string& path_or_url,
        const std::map<std::string, std::string>& params = {},
        bool use_common_error_alert = true,
        bool is_show_loading_icon = false,
        bool is_encrypt = false
    );

private:
    std::string build_url(const std::string& path_or_url) const;
    static std::optional<boost::json::value> try_parse_json(const std::string& raw_text);

    HttpRequest* http_request_ = nullptr;
    UrlLoader url_loader_{};
    std::string cgi_root_{};
    mock_handler mock_handler_{};
};
