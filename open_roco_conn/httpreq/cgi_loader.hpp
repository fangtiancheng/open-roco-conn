#pragma once

#include "base/rf_base.hpp"
#include "httpreq/cgi2.hpp"
#include "httpreq/cgi_event.hpp"
#include "httpreq/http_request.hpp"
#include <boost/asio/awaitable.hpp>
#include <expected>
#include <functional>
#include <map>
#include <string>
#include <string_view>

class CGILoader: public RFBase {
public:
    using event_callback = std::function<void(const CgiEvent&)>;
    using result = std::expected<CgiEvent, std::string>;

    const std::string_view get_param1() override { return "e87a9DLkB5KL7zWYtrIkrqa"; }
    const std::string_view get_param2() override { return "CGILoader"; }

    CGILoader(std::string cgi_root, HttpRequest& http_request);

    void set_cgi_root(std::string cgi_root);
    const std::string& cgi_root() const;
    void set_mock_handler(CGI2::mock_handler handler);

    void set_on_complete(event_callback callback);
    void set_on_error(event_callback callback);

    void set_default_send_obj(std::map<std::string, std::string> defaults);
    std::map<std::string, std::string> get_send_obj(
        const std::map<std::string, std::string>& extra = {}
    ) const;

    boost::asio::awaitable<result> send_data(
        const std::string& send_type,
        const std::map<std::string, std::string>& send_data = {}
    );

    boost::asio::awaitable<result> send_data1(
        const std::string& path_or_url,
        const std::string& send_type,
        const std::map<std::string, std::string>& send_data = {}
    );

private:
    boost::asio::awaitable<result> send_impl(
        const std::string& path_or_url,
        const std::string& send_type,
        const std::map<std::string, std::string>& send_data
    );

    HttpRequest& http_request_;
    std::string cgi_root_{};
    bool has_pending_event_ = false;
    event_callback on_complete_{};
    event_callback on_error_{};
    std::map<std::string, std::string> default_send_obj_{};
};
