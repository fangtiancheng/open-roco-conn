#pragma once
#include "base/rf_base.hpp"
#include <string>
#include <map>


#define BOOST_ASIO_HAS_CO_AWAIT
#include <boost/asio/awaitable.hpp>
#include <boost/asio/io_context.hpp>
#include <boost/asio/ssl.hpp>
#include <boost/beast/core.hpp>
#include <boost/beast/http.hpp>
#include <boost/json.hpp>
#include <functional>
#include <boost/beast/websocket/rfc6455.hpp>


class HttpRequest: public RFBase {
    boost::asio::ssl::context ssl_ctx{boost::asio::ssl::context::tlsv12_client};
public:
    HttpRequest() {
        ssl_ctx.set_verify_mode(boost::asio::ssl::verify_peer);
    }
    enum ResponseType{
        txt,
        arraybuffer,
        json
    };
    template<ResponseType T>
    struct Traits;

    template<>
    struct Traits<ResponseType::txt> {
        using DataType = std::string;
        using BeastBody = boost::beast::http::string_body;
        static constexpr bool needs_json_parse = false;
    };

    template<>
    struct Traits<ResponseType::arraybuffer> {
        using DataType = std::vector<uint8_t>;
        using BeastBody = boost::beast::http::vector_body<uint8_t>;
        static constexpr bool needs_json_parse = false;
    };

    template<>
    struct Traits<ResponseType::json> {
        using DataType = boost::json::value;
        using BeastBody = boost::beast::http::string_body;
        static constexpr bool needs_json_parse = true;
    };

    template<ResponseType T>
    using ResponseDataT = typename Traits<T>::DataType;
    std::mutex cache_mutex;
    std::map<std::string, void*> cache_i, cache_c;
    const std::string_view get_param1() override { return "7a8c9FTmUdDCbMymKSi36Rj"; }
    const std::string_view get_param2() override { return "HttpRequest"; }
    static constexpr std::string_view NO_NETWORK = "http_request_no_network";
    static constexpr std::string_view UNKNOWN_ERROR = "http_request_unknown_error";
    static constexpr std::string_view CONNECTION_ERROR = "connection_error";
    static constexpr std::string_view JSON_ERROR = "json_parse_error";
    static constexpr std::string_view TIMEOUT = "http_request_timout";
    std::string server = "127.0.0.1";
    int64_t timeout = 2e3;

    struct HttpError {
        int code;
        std::string message;
        std::string_view type;
    };

    template<ResponseType T>
    using Result = std::variant<ResponseDataT<T>, HttpError>;

    template<ResponseType response_type = ResponseType::txt> // o
    boost::asio::awaitable<void>
    send_request(const std::string& url,// e
                 const std::map<std::string, std::string>& params,// t
                 bool post_or_get,// n
                 std::function<void(ResponseDataT<response_type>)> response_callback, // r
                 std::function<void(HttpError)> error_callback, // s
                 bool enable_timeout, // l
                 int64_t timeout = 0// h
                 );
    template<ResponseType response_type = ResponseType::txt>
    boost::asio::awaitable<void>
    get_with_params(const std::string& url,
                    const std::map<std::string, std::string>& params,
                    std::function<void(ResponseDataT<response_type>)> response_callback,
                    std::function<void(HttpError)> error_callback) {
        return send_request(url, params, false, response_callback, error_callback, true, 0);
    }

    template<ResponseType response_type = ResponseType::txt>
    boost::asio::awaitable<void>
    get_by_array_buffer(const std::string& url,
                        std::function<void(ResponseDataT<response_type>)> response_callback,
                        std::function<void(HttpError)> error_callback) {
        return send_request(url, {}, false, response_callback, error_callback, true, 0);
    }

    boost::asio::awaitable<void>
    get_with_paras_by_arraybuffer(
        const std::string& url,
        const std::map<std::string, std::string>& params,
        std::function<void(ResponseDataT<arraybuffer>)> response_callback,
        std::function<void(HttpError)> error_callback
    ) {
        return send_request<arraybuffer>(url, {}, false, response_callback, error_callback, true, 0);
    }

    boost::asio::awaitable<void>
    get_with_params_by_txt(
        const std::string& url,
        const std::map<std::string, std::string>& params,
        std::function<void(ResponseDataT<txt>)> response_callback,
        std::function<void(HttpError)> error_callback
    ) {
        return send_request<txt>(url, {}, false, response_callback, error_callback, true, 0);
    }

    void delete_cache(const std::string& url);
};
