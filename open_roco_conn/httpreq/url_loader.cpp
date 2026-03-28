#include "url_loader.hpp"

#include <utility>

void UrlLoader::close() {
    on_closed_ = true;
}

bool UrlLoader::is_closed() const {
    return on_closed_;
}

boost::asio::awaitable<HttpRequest::Result<HttpRequest::txt>>
UrlLoader::load(HttpRequest& http_request, const request& req) {
    co_return co_await load_impl<HttpRequest::txt>(http_request, req);
}

boost::asio::awaitable<HttpRequest::Result<HttpRequest::arraybuffer>>
UrlLoader::load_by_array_buffer(HttpRequest& http_request, const request& req) {
    co_return co_await load_impl<HttpRequest::arraybuffer>(http_request, req);
}

const UrlLoader::data_type& UrlLoader::data() const {
    return data_;
}

template<HttpRequest::ResponseType response_type>
boost::asio::awaitable<HttpRequest::Result<response_type>>
UrlLoader::load_impl(HttpRequest& http_request, const request& req) {
    if (on_closed_) {
        co_return std::unexpected(HttpRequest::HttpError{
            .code = -1,
            .message = "url_loader closed",
            .type = HttpRequest::UNKNOWN_ERROR
        });
    }

    auto result = co_await http_request.send_request<response_type>(
        req.url,
        req.params,
        false,
        req.enable_timeout,
        req.timeout_ms
    );

    if (result.has_value()) {
        if constexpr (response_type == HttpRequest::txt) {
            data_ = result.value();
        } else if constexpr (response_type == HttpRequest::arraybuffer) {
            data_ = result.value();
        }
    } else {
        data_ = result.error();
    }

    co_return result;
}

template boost::asio::awaitable<HttpRequest::Result<HttpRequest::txt>>
UrlLoader::load_impl<HttpRequest::txt>(HttpRequest& http_request, const request& req);

template boost::asio::awaitable<HttpRequest::Result<HttpRequest::arraybuffer>>
UrlLoader::load_impl<HttpRequest::arraybuffer>(HttpRequest& http_request, const request& req);
