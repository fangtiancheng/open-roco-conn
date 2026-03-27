#include "httpreq/cgi2.hpp"

#include <utility>

CGI2::mock_handler CGI2::mock_handler_{};

void CGI2::set_mock_handler(mock_handler handler) {
    mock_handler_ = std::move(handler);
}

boost::asio::awaitable<CGI2::result> CGI2::call(
    HttpRequest& http_request,
    const std::string& cgi_root,
    const std::string& path_or_url,
    const std::map<std::string, std::string>& params,
    const bool use_common_error_alert,
    const bool is_show_loading_icon,
    const bool is_encrypt
) {
    (void) use_common_error_alert;
    (void) is_show_loading_icon;
    (void) is_encrypt;

    auto url = build_url(cgi_root, path_or_url);
    if (mock_handler_) {
        co_return mock_handler_(url, params);
    }

    UrlLoader url_loader{};
    UrlLoader::request req{};
    req.url = std::move(url);
    req.params = params;
    auto txt_result = co_await url_loader.load(http_request, req);
    if (!txt_result.has_value()) {
        const auto& err = txt_result.error();
        co_return std::unexpected(CgiError{
            .code = err.code,
            .message = err.message,
            .type = std::string(err.type)
        });
    }

    CgiResponse response{};
    response.raw_text = std::move(txt_result.value());
    response.json = try_parse_json(response.raw_text);
    co_return response;
}

std::string CGI2::build_url(const std::string& cgi_root, const std::string& path_or_url) {
    if (path_or_url.rfind("http://", 0) == 0 || path_or_url.rfind("https://", 0) == 0) {
        return path_or_url;
    }
    if (cgi_root.empty()) {
        return path_or_url;
    }
    if (!path_or_url.empty() && path_or_url.front() == '/') {
        return cgi_root + path_or_url.substr(1);
    }
    return cgi_root + path_or_url;
}

std::optional<boost::json::value> CGI2::try_parse_json(const std::string& raw_text) {
    try {
        return boost::json::parse(raw_text);
    } catch (...) {
        return std::nullopt;
    }
}
