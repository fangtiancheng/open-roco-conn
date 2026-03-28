#include "httpreq/cgi_loader.hpp"

#include <utility>

namespace {
CGILoader::params_t merge_params(const CGILoader::params_t& base, const CGILoader::params_t& extra) {
    CGILoader::params_t merged = base;
    for (const auto& [key, value] : extra) {
        bool replaced = false;
        for (auto& [exist_key, exist_value] : merged) {
            if (exist_key == key) {
                exist_value = value;
                replaced = true;
                break;
            }
        }
        if (!replaced) {
            merged.emplace_back(key, value);
        }
    }
    return merged;
}
}

CGILoader::CGILoader(std::string cgi_root, HttpRequest& http_request)
    : http_request_(http_request), cgi_root_(std::move(cgi_root)) {}

void CGILoader::set_cgi_root(std::string cgi_root) {
    cgi_root_ = std::move(cgi_root);
}

const std::string& CGILoader::cgi_root() const {
    return cgi_root_;
}

void CGILoader::set_mock_handler(CGI2::mock_handler handler) {
    cgi2_.set_mock_handler(std::move(handler));
}

void CGILoader::set_on_complete(event_callback callback) {
    on_complete_ = std::move(callback);
}

void CGILoader::set_on_error(event_callback callback) {
    on_error_ = std::move(callback);
}

void CGILoader::set_default_send_obj(params_t defaults) {
    default_send_obj_ = std::move(defaults);
}

CGILoader::params_t CGILoader::get_send_obj(
    const params_t& extra
) const {
    return merge_params(default_send_obj_, extra);
}

boost::asio::awaitable<CGILoader::result> CGILoader::send_data(
    const std::string& send_type,
    const params_t& send_data
) {
    co_return co_await send_impl(send_type, send_type, send_data);
}

boost::asio::awaitable<CGILoader::result> CGILoader::send_data1(
    const std::string& path_or_url,
    const std::string& send_type,
    const params_t& send_data
) {
    co_return co_await send_impl(path_or_url, send_type, send_data);
}

boost::asio::awaitable<CGILoader::result> CGILoader::send_impl(
    const std::string& path_or_url,
    const std::string& send_type,
    const params_t& send_data
) {
    struct PendingGuard {
        bool& pending;
        ~PendingGuard() {
            pending = false;
        }
    };

    if (has_pending_event_) {
        co_return std::unexpected("CGILoader: request ignored because previous xevent is pending");
    }
    has_pending_event_ = true;
    PendingGuard pending_guard{has_pending_event_};
    auto request_data = get_send_obj(send_data);
    auto result = co_await cgi2_.call(http_request_, cgi_root_, path_or_url, request_data, true, false, false);

    if (!result.has_value()) {
        CgiEvent event{};
        event.type = std::string(CgiEvent::GOT_ERROR);
        event.msg = result.error().message;
        event.send_type = send_type;
        event.send_data = request_data;
        if (on_error_) {
            on_error_(event);
        }
        co_return std::unexpected(result.error().message);
    }

    CgiEvent event{};
    event.type = std::string(CgiEvent::COMPLETE);
    event.send_type = send_type;
    event.send_data = request_data;
    event.raw_text = std::move(result.value().raw_text);
    event.data = std::move(result.value().json);
    if (on_complete_) {
        on_complete_(event);
    }
    co_return event;
}
