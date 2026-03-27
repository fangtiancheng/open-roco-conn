#include "httpreq/cgi_loader.hpp"

#include <utility>

CGILoader::CGILoader(std::string cgi_root, HttpRequest& http_request)
    : cgi2_(http_request, std::move(cgi_root)) {}

void CGILoader::set_cgi_root(std::string cgi_root) {
    cgi2_.set_cgi_root(std::move(cgi_root));
}

const std::string& CGILoader::cgi_root() const {
    return cgi2_.cgi_root();
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

void CGILoader::set_default_send_obj(std::map<std::string, std::string> defaults) {
    default_send_obj_ = std::move(defaults);
}

std::map<std::string, std::string> CGILoader::get_send_obj(
    const std::map<std::string, std::string>& extra
) const {
    auto merged = default_send_obj_;
    for (const auto& [key, value] : extra) {
        merged[key] = value;
    }
    return merged;
}

boost::asio::awaitable<CGILoader::result> CGILoader::send_data(
    const std::string& send_type,
    const std::map<std::string, std::string>& send_data
) {
    co_return co_await send_impl(send_type, send_type, send_data);
}

boost::asio::awaitable<CGILoader::result> CGILoader::send_data1(
    const std::string& path_or_url,
    const std::string& send_type,
    const std::map<std::string, std::string>& send_data
) {
    co_return co_await send_impl(path_or_url, send_type, send_data);
}

boost::asio::awaitable<CGILoader::result> CGILoader::send_impl(
    const std::string& path_or_url,
    const std::string& send_type,
    const std::map<std::string, std::string>& send_data
) {
    struct LoadingGuard {
        bool* flag = nullptr;
        ~LoadingGuard() {
            if (flag != nullptr) {
                *flag = false;
            }
        }
    };

    if (is_loading_) {
        co_return std::unexpected("CGILoader: a request is already in progress");
    }

    is_loading_ = true;
    LoadingGuard guard{&is_loading_};
    auto request_data = get_send_obj(send_data);
    auto result = co_await cgi2_.call(path_or_url, request_data, true, false, false);

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
