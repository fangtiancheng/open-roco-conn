#pragma once

#include "base/rf_base.hpp"
#include "httpreq/cgi2.hpp"
#include "httpreq/cgi_event.hpp"
#include "httpreq/http_request.hpp"
#include <boost/asio/awaitable.hpp>
#include <expected>
#include <functional>
#include <string>
#include <string_view>
#include <vector>

class CGILoader: public RFBase {
public:
    using event_callback = std::function<void(const CgiEvent&)>;
    using result = std::expected<CgiEvent, std::string>;
    using params_t = HttpRequest::params_t;

    const std::string_view get_param1() const override { return "e87a9DLkB5KL7zWYtrIkrqa"; }
    const std::string_view get_param2() const override { return "CGILoader"; }

    CGILoader(std::string cgi_root, HttpRequest& http_request);

    void set_cgi_root(std::string cgi_root);
    const std::string& cgi_root() const;
    void set_mock_handler(CGI2::mock_handler handler);

    void set_on_complete(event_callback callback);
    void set_on_error(event_callback callback);

    void set_default_send_obj(params_t defaults);
    params_t get_send_obj(
        const params_t& extra = {}
    ) const;

    boost::asio::awaitable<result> send_data(
        const std::string& send_type,
        const params_t& send_data = {}
    );

    boost::asio::awaitable<result> send_data1(
        const std::string& path_or_url,
        const std::string& send_type,
        const params_t& send_data = {}
    );

private:
    boost::asio::awaitable<result> send_impl(
        const std::string& path_or_url,
        const std::string& send_type,
        const params_t& send_data
    );

    HttpRequest& http_request_;
    std::string cgi_root_{};
    bool has_pending_event_ = false;
    event_callback on_complete_{};
    event_callback on_error_{};
    params_t default_send_obj_{};
    CGI2 cgi2_{};
};
