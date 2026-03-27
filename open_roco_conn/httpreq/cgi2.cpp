#include "httpreq/cgi2.hpp"

#include <utility>

CGI2::CGI2(HttpRequest& http_request, std::string cgi_root)
    : http_request_(&http_request), cgi_root_(std::move(cgi_root)) {}

void CGI2::set_cgi_root(std::string cgi_root) {
    cgi_root_ = std::move(cgi_root);
}

const std::string& CGI2::cgi_root() const {
    return cgi_root_;
}

void CGI2::set_mock_handler(mock_handler handler) {
    mock_handler_ = std::move(handler);
}

boost::asio::awaitable<CGI2::result> CGI2::call(
    const std::string& path_or_url,
    const std::map<std::string, std::string>& params,
    const bool use_common_error_alert,
    const bool is_show_loading_icon,
    const bool is_encrypt
) {
    (void) use_common_error_alert;
    (void) is_show_loading_icon;
    (void) is_encrypt;

    auto url = build_url(path_or_url);
    if (mock_handler_) {
        co_return mock_handler_(url, params);
    }

    if (http_request_ == nullptr) {
        co_return std::unexpected(CgiError{
            .code = -1,
            .message = "CGI2: HttpRequest is null",
            .type = "init_error"
        });
    }

    UrlLoader::request req{};
    req.url = std::move(url);
    req.params = params;
    auto txt_result = co_await url_loader_.load(*http_request_, req);
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

std::string CGI2::build_url(const std::string& path_or_url) const {
    if (path_or_url.rfind("http://", 0) == 0 || path_or_url.rfind("https://", 0) == 0) {
        return path_or_url;
    }
    if (cgi_root_.empty()) {
        return path_or_url;
    }
    if (!path_or_url.empty() && path_or_url.front() == '/') {
        return cgi_root_ + path_or_url.substr(1);
    }
    return cgi_root_ + path_or_url;
}

std::optional<boost::json::value> CGI2::try_parse_json(const std::string& raw_text) {
    try {
        return boost::json::parse(raw_text);
    } catch (...) {
        return std::nullopt;
    }
}
