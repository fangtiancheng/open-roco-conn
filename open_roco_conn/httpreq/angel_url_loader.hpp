#pragma once

#include "base/rf_base.hpp"
#include "httpreq/http_request.hpp"
#include "login/server_info.hpp"
#include <boost/asio/awaitable.hpp>
#include <cstdint>
#include <deque>
#include <optional>
#include <string>

class AngelUrlLoader : public RFBase {
public:
    struct cgi_request {
        std::string url;
        HttpRequest::params_t params{};
        bool is_post = false;
        bool enable_timeout = true;
        int64_t timeout_ms = 0;
    };

    using cgi_result = HttpRequest::Result<HttpRequest::txt>;

    AngelUrlLoader() = default;
    explicit AngelUrlLoader(const ServerInfo& server_info);

    const std::string_view get_param1() const override { return "573839TBZRK0aik7j2nDuNp"; }
    const std::string_view get_param2() const override { return "AngelURLLoader"; }

    void set_server_info(const ServerInfo& server_info);
    void set_no_cache(bool enabled);
    void set_is_queue(bool enabled);
    bool is_loading() const;
    std::string get_latest_url() const;

    void load(cgi_request request);
    bool has_pending_request() const;
    size_t pending_count() const;
    void clear_queue();

    boost::asio::awaitable<std::optional<cgi_result>> next_request(HttpRequest& http_request);
    boost::asio::awaitable<void> drain_queue(HttpRequest& http_request);

private:
    static std::string append_query_param(
        const std::string& url,
        const std::string& key,
        const std::string& value
    );
    static std::string encode_cookie_hex(const std::string& cookie);
    std::string build_url(const cgi_request& request) const;

    std::optional<ServerInfo> server_info_{};
    std::deque<cgi_request> requests_list_{};
    bool is_loading_ = false;
    bool no_cache_ = false;
    bool is_queue_ = true;
    std::string latest_url_{};
};
