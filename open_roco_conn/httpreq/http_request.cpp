// https://github.com/boostorg/beast/blob/boost-1.90.0/example/http/client/awaitable-ssl/http_client_awaitable_ssl.cpp

#include "http_request.hpp"
#include <mutex>
#include "base/define.hpp"
#include <boost/asio.hpp>
#include <boost/beast.hpp>
#include <boost/json.hpp>
#include <boost/url.hpp>

namespace beast = boost::beast;
namespace http = beast::http;
namespace net = boost::asio;
using tcp = net::ip::tcp;
namespace urls = boost::urls;
namespace ssl = boost::asio::ssl;

template<HttpRequest::ResponseType response_type>
boost::asio::awaitable<std::expected<HttpRequest::ResponseDataT<response_type>, HttpRequest::HttpError>>
HttpRequest::send_request(
    const std::string& endpoint,
    const std::map<std::string, std::string>& params,
    bool post_or_get,
    bool enable_timeout,
    int64_t timeout
) {
    urls::url url(endpoint);
    if (url.host().empty()) {
        url.set_host(this->server);
        url.set_scheme("http");
    }
    if (url.port().empty()) {
        if (url.scheme() == "http") {
            url.set_port("80");
        } else {
            url.set_port("443");
        }
    }
    for (const auto& [k, v] : params) {
        url.params().append({k, v});
    }
    if (timeout == 0) {
        timeout = this->timeout;
    }
    std::string request_target(url.path());
    if (url.has_query()) {
        request_target += "?" + std::string(url.query());
    }
    if (Define::IS_DEBUG) {
        debug_line("query " + endpoint + request_target);
    }
    if (url.scheme() == "http") {
        co_return co_await send_http_request<response_type>(
            url.host(), url.port(), request_target,
            post_or_get, enable_timeout, timeout
        );
    }
    if (url.scheme() == "https") {
        co_return co_await send_https_request<response_type>(
            url.host(), url.port(), request_target,
            post_or_get, enable_timeout, timeout
        );
    }
    co_return std::unexpected(HttpError{
        1, "unknown scheme, either http or https", ""
    });
}

template<HttpRequest::ResponseType response_type>
boost::asio::awaitable<HttpRequest::Result<response_type>>
HttpRequest::send_http_request(
    const std::string& host,
    const std::string& port,
    const std::string& request_target,
    bool post_or_get,
    bool enable_timeout,
    int64_t timeout
) {
    auto executor = co_await net::this_coro::executor;
    auto resolver = net::ip::tcp::resolver{executor};
    auto stream = beast::tcp_stream{executor};

    auto const results = co_await resolver.async_resolve(host, port, net::use_awaitable);

    if (enable_timeout) {
        stream.expires_after(std::chrono::milliseconds(timeout));
    }
    co_await stream.async_connect(results);

    http::request<http::string_body> request{
        post_or_get ? http::verb::post : http::verb::get,
        request_target,
        11
    };
    request.set(http::field::host, host);
    request.set(http::field::user_agent, Define::USER_AGENT);
    request.set(http::field::content_type, "application/x-www-form-urlencoded");
    request.insert(http::field::pragma, "no-cache");
    request.prepare_payload();
    if (enable_timeout) {
        beast::get_lowest_layer(stream).expires_after(std::chrono::milliseconds(timeout));
    }
    co_await http::async_write(stream, request, net::use_awaitable);

    beast::flat_buffer buffer;
    http::response<http::dynamic_body> response;
    co_await http::async_read(stream, buffer, response, net::use_awaitable);

    beast::error_code ec;
    stream.socket().shutdown(net::ip::tcp::socket::shutdown_both, ec);
    if (ec && ec != beast::errc::not_connected) {
        auto err = beast::error_code(ec);
        co_return std::unexpected(HttpError{
            .code = err.value(),
            .message = err.message(),
            .type = CONNECTION_ERROR
        });
    }

    const int status_code = response.result_int();
    if (status_code != 200) {
        co_return std::unexpected(HttpError{
            status_code,
            std::string(response.reason()),
            status_code == 408 || status_code == 504 ? TIMEOUT : UNKNOWN_ERROR
        });
    }

    std::string response_body = beast::buffers_to_string(response.body().data());
    if constexpr (response_type == ResponseType::arraybuffer) {
        co_return std::vector<uint8_t>(response_body.begin(), response_body.end());
    } else {
        if constexpr (Traits<response_type>::needs_json_parse) {
            try {
                co_return boost::json::parse(response_body);
            } catch (const std::exception& e) {
                co_return std::unexpected(HttpError{status_code, e.what(), JSON_ERROR});
            }
        } else {
            co_return response_body;
        }
    }
}

template<HttpRequest::ResponseType response_type>
boost::asio::awaitable<std::expected<HttpRequest::ResponseDataT<response_type>, HttpRequest::HttpError>>
HttpRequest::send_https_request(
    const std::string& host,
    const std::string& port,
    const std::string& request_target,
    bool post_or_get,
    bool enable_timeout,
    int64_t timeout
) {
    auto executor = co_await net::this_coro::executor;
    auto resolver = net::ip::tcp::resolver{executor};
    auto stream = ssl::stream<beast::tcp_stream>{executor, ssl_ctx};
    if (!SSL_set_tlsext_host_name(stream.native_handle(), host.c_str())) {
        co_return std::unexpected(HttpError{
            .code = static_cast<int>(::ERR_get_error()),
            .message = net::error::get_ssl_category().message(ERR_get_error()),
            .type = "ssl error",
        });
    }
    stream.set_verify_callback(ssl::host_name_verification(host));

    auto const results = co_await resolver.async_resolve(host, port, net::use_awaitable);

    if (enable_timeout) {
        beast::get_lowest_layer(stream).expires_after(std::chrono::milliseconds(timeout));
    }
    co_await beast::get_lowest_layer(stream).async_connect(results, net::use_awaitable);

    if (enable_timeout) {
        beast::get_lowest_layer(stream).expires_after(std::chrono::milliseconds(timeout));
    }
    co_await stream.async_handshake(ssl::stream_base::client, net::use_awaitable);

    http::request<http::string_body> request{
        post_or_get ? http::verb::post : http::verb::get,
        request_target,
        11
    };
    request.set(http::field::host, host);
    request.set(http::field::user_agent, Define::USER_AGENT);
    request.set(http::field::content_type, "application/x-www-form-urlencoded");
    request.insert(http::field::pragma, "no-cache");
    request.prepare_payload();
    if (enable_timeout) {
        beast::get_lowest_layer(stream).expires_after(std::chrono::milliseconds(timeout));
    }
    co_await http::async_write(stream, request, net::use_awaitable);

    beast::flat_buffer buffer;
    http::response<http::dynamic_body> response;
    co_await http::async_read(stream, buffer, response, net::use_awaitable);

    auto [ec] = co_await stream.async_shutdown(net::as_tuple);
    if (ec
        && ec != beast::errc::not_connected
        && ec != net::error::eof
        && ec != ssl::error::stream_truncated) {
        auto err = beast::error_code(ec);
        co_return std::unexpected(HttpError{
            .code = err.value(),
            .message = err.message(),
            .type = CONNECTION_ERROR
        });
    }

    const int status_code = response.result_int();
    if (status_code != 200) {
        co_return std::unexpected(HttpError{
            status_code,
            std::string(response.reason()),
            status_code == 408 || status_code == 504 ? TIMEOUT : UNKNOWN_ERROR
        });
    }

    std::string response_body = beast::buffers_to_string(response.body().data());
    if constexpr (response_type == ResponseType::arraybuffer) {
        co_return std::vector<uint8_t>(response_body.begin(), response_body.end());
    } else {
        if constexpr (Traits<response_type>::needs_json_parse) {
            try {
                co_return boost::json::parse(response_body);
            } catch (const std::exception& e) {
                co_return std::unexpected(HttpError{status_code, e.what(), JSON_ERROR});
            }
        } else {
            co_return response_body;
        }
    }
}

void HttpRequest::delete_cache(const std::string& url) {
    std::lock_guard<std::mutex> guard(cache_mutex);
    cache_i.erase(url);
    cache_c.erase(url);
}

template boost::asio::awaitable<HttpRequest::Result<HttpRequest::txt>>
HttpRequest::send_request<HttpRequest::txt>(
    const std::string& endpoint,
    const std::map<std::string, std::string>& params,
    bool post_or_get,
    bool enable_timeout,
    int64_t timeout
);

template boost::asio::awaitable<HttpRequest::Result<HttpRequest::arraybuffer>>
HttpRequest::send_request<HttpRequest::arraybuffer>(
    const std::string& endpoint,
    const std::map<std::string, std::string>& params,
    bool post_or_get,
    bool enable_timeout,
    int64_t timeout
);

template boost::asio::awaitable<HttpRequest::Result<HttpRequest::json>>
HttpRequest::send_request<HttpRequest::json>(
    const std::string& endpoint,
    const std::map<std::string, std::string>& params,
    bool post_or_get,
    bool enable_timeout,
    int64_t timeout
);
