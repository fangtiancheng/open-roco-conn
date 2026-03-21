// https://github.com/boostorg/beast/blob/boost-1.90.0/example/http/client/awaitable-ssl/http_client_awaitable_ssl.cpp

#include "http_request.hpp"
#include <mutex>
#include "base/define.hpp"
#include <boost/url.hpp>
#include <boost/beast.hpp>
#include <boost/asio.hpp>
#include <boost/json.hpp>

namespace beast = boost::beast;     // from <boost/beast.hpp>
namespace http = beast::http;       // from <boost/beast/http.hpp>
namespace net = boost::asio;        // from <boost/asio.hpp>
using tcp = net::ip::tcp;           // from <boost/asio/ip/tcp.hpp>
namespace urls = boost::urls;
namespace ssl   = boost::asio::ssl;


template<HttpRequest::ResponseType response_type>
boost::asio::awaitable<void>
HttpRequest::send_request(const std::string &endpoint,
                          const std::map<std::string, std::string> &params,
                          bool post_or_get,
                          std::function<void(ResponseDataT<response_type>)> response_callback, // r
                          std::function<void(HttpError)> error_callback, // s
                          bool enable_timeout,
                          int64_t timeout) {
    if(timeout == 0) timeout = this->timeout;
    // 1. process url
    urls::url url(endpoint);
    if(url.host().empty()){
        url.set_host(server);
        url.set_scheme("http");
    }
    for(const auto& [k, v]: params){
        url.params().append({k, v});
    }
    // 2. init
    auto executor = co_await net::this_coro::executor;
    auto resolver = net::ip::tcp::resolver{ executor };
    auto stream   = ssl::stream<beast::tcp_stream>{ executor, ssl_ctx };
    if(! SSL_set_tlsext_host_name(stream.native_handle(), url.host().c_str())){
        if (error_callback) {
            error_callback(HttpError{
                .code = static_cast<int>(::ERR_get_error()),
                .message = net::error::get_ssl_category().message(ERR_get_error()),
                .type = "ssl error",
            });
        }
        co_return;
    }
    // Set the expected hostname in the peer certificate for verification
    stream.set_verify_callback(ssl::host_name_verification(url.host()));

    // Look up the domain name
    auto const results = co_await resolver.async_resolve(url.host(), url.port());

    // Set the timeout.
    if (enable_timeout)
    beast::get_lowest_layer(stream).expires_after(std::chrono::milliseconds(timeout));

    // Make the connection on the IP address we get from a lookup
    co_await beast::get_lowest_layer(stream).async_connect(results);

    // Set the timeout.
    if (enable_timeout)
    beast::get_lowest_layer(stream).expires_after(std::chrono::milliseconds(timeout));

    // Perform the SSL handshake
    co_await stream.async_handshake(ssl::stream_base::client);

    std::string request_target = std::string(url.path());
    if (url.has_query()) {
        request_target += "?" + std::string(url.query());
    }

    http::request<http::string_body> request{
        post_or_get ? http::verb::post: http::verb::get,
        request_target,
        11 // http 1.1
    };
    request.set(http::field::host, url.host());
    request.set(http::field::user_agent, Define::USER_AGENT);
    request.set(http::field::content_type, "application/x-www-form-urlencoded");
    request.insert(http::field::pragma, "no-cache");
    if (enable_timeout)
    beast::get_lowest_layer(stream).expires_after(std::chrono::milliseconds(timeout));
    co_await http::async_write(stream, request);
    beast::flat_buffer buffer;
    http::response<http::dynamic_body> response;
    co_await http::async_read(stream, buffer, response);

    auto [ec] = co_await stream.async_shutdown(net::as_tuple);
    if (ec && ec != beast::errc::not_connected) {
        if (error_callback) {
            auto err = beast::error_code(ec);
            error_callback(HttpError{
                .code = err.value(),
                .message = err.message(),
                .type = CONNECTION_ERROR
            });
        }
        co_return;
    }
    int status_code = response.result_int();
    if (status_code != 200) {
        error_callback(HttpError{
            status_code,
            std::string(response.reason()),
            status_code == 408 || status_code == 504 ? TIMEOUT : UNKNOWN_ERROR
        });
        co_return;
    }
    std::string response_body = beast::buffers_to_string(response.body().data());
    if constexpr (response_type == ResponseType::arraybuffer) {
        const auto& body = response.body();
        std::vector<uint8_t> result(response_body.begin(), response_body.end());
        response_callback(std::move(result));
    } else {
        if constexpr (Traits<response_type>::needs_json_parse) {
            try {
                auto json_result = boost::json::parse(response_body);
                response_callback(std::move(json_result));
            } catch (const std::exception& e) {
                error_callback(HttpError{status_code, e.what(), JSON_ERROR});
            }
        } else {
            response_callback(std::move(response_body));
        }
    }
}

template boost::asio::awaitable<void>
HttpRequest::send_request<HttpRequest::ResponseType::txt>(
    const std::string&, const std::map<std::string, std::string>&, bool,
    std::function<void(ResponseDataT<HttpRequest::ResponseType::txt>)> response_callback,
    std::function<void(HttpError)> error_callback,
    bool, int64_t
);
template boost::asio::awaitable<void>
HttpRequest::send_request<HttpRequest::ResponseType::arraybuffer>(
    const std::string&, const std::map<std::string, std::string>&, bool,
    std::function<void(ResponseDataT<HttpRequest::ResponseType::arraybuffer>)> response_callback,
    std::function<void(HttpError)> error_callback,
    bool, int64_t
);
template boost::asio::awaitable<void>
HttpRequest::send_request<HttpRequest::ResponseType::json>(
    const std::string&, const std::map<std::string, std::string>&, bool,
    std::function<void(ResponseDataT<HttpRequest::ResponseType::json>)> response_callback,
    std::function<void(HttpError)> error_callback,
    bool, int64_t
);

void HttpRequest::delete_cache(const std::string &url) {
    std::lock_guard<std::mutex> guard(cache_mutex);
    cache_i.erase(url);
    cache_c.erase(url);
}
