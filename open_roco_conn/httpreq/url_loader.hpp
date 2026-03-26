#pragma once

#include "base/rf_base.hpp"
#include "httpreq/http_request.hpp"
#include <boost/asio/awaitable.hpp>
#include <map>
#include <optional>
#include <string>
#include <variant>
#include <vector>

class UrlLoader : public RFBase {
public:
    struct request {
        std::string url;
        std::map<std::string, std::string> params{};
        bool enable_timeout = true;
        int64_t timeout_ms = 0;
    };

    using data_type = std::variant<std::monostate, std::string, std::vector<uint8_t>, HttpRequest::HttpError>;

    const std::string_view get_param1() override { return "13a76gKckxAfoImsk8foVEg"; }
    const std::string_view get_param2() override { return "URLLoader"; }

    void close();
    bool is_closed() const;

    boost::asio::awaitable<HttpRequest::Result<HttpRequest::txt>>
    load(HttpRequest& http_request, const request& req);

    boost::asio::awaitable<HttpRequest::Result<HttpRequest::arraybuffer>>
    load_by_array_buffer(HttpRequest& http_request, const request& req);

    const data_type& data() const;

private:
    template<HttpRequest::ResponseType response_type>
    boost::asio::awaitable<HttpRequest::Result<response_type>>
    load_impl(HttpRequest& http_request, const request& req);

    bool on_closed_ = false;
    data_type data_{};
};
