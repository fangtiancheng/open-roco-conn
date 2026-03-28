#include "angel_url_loader.hpp"

#include <chrono>
#include <format>
#include <unordered_set>

AngelUrlLoader::AngelUrlLoader(const ServerInfo& server_info) {
    set_server_info(server_info);
}

void AngelUrlLoader::set_server_info(const ServerInfo& server_info) {
    server_info_ = server_info;
}

void AngelUrlLoader::set_no_cache(const bool enabled) {
    no_cache_ = enabled;
}

void AngelUrlLoader::set_is_queue(const bool enabled) {
    is_queue_ = enabled;
}

bool AngelUrlLoader::is_loading() const {
    return is_loading_;
}

std::string AngelUrlLoader::get_latest_url() const {
    return latest_url_;
}

void AngelUrlLoader::load(cgi_request request) {
    request.url = build_url(request);
    requests_list_.push_back(std::move(request));
}

bool AngelUrlLoader::has_pending_request() const {
    return !requests_list_.empty();
}

size_t AngelUrlLoader::pending_count() const {
    return requests_list_.size();
}

void AngelUrlLoader::clear_queue() {
    requests_list_.clear();
    is_loading_ = false;
}

boost::asio::awaitable<std::optional<AngelUrlLoader::cgi_result>>
AngelUrlLoader::next_request(HttpRequest& http_request) {
    if (requests_list_.empty()) {
        co_return std::nullopt;
    }
    if (is_loading_ && is_queue_) {
        co_return std::nullopt;
    }

    cgi_request request = std::move(requests_list_.front());
    requests_list_.pop_front();
    latest_url_ = request.url;
    is_loading_ = true;

    auto result = co_await http_request.send_request<HttpRequest::txt>(
        request.url,
        request.params,
        request.is_post,
        request.enable_timeout,
        request.timeout_ms
    );
    is_loading_ = false;
    co_return std::make_optional<cgi_result>(std::move(result));
}

boost::asio::awaitable<void> AngelUrlLoader::drain_queue(HttpRequest& http_request) {
    while (true) {
        auto result = co_await next_request(http_request);
        if (!result.has_value()) {
            break;
        }
    }
    co_return;
}

std::string AngelUrlLoader::append_query_param(
    const std::string& url,
    const std::string& key,
    const std::string& value
) {
    if (url.find('?') == std::string::npos) {
        return std::format("{}?{}={}", url, key, value);
    }
    return std::format("{}&{}={}", url, key, value);
}

std::string AngelUrlLoader::encode_cookie_hex(const std::string& cookie) {
    std::string encoded;
    encoded.reserve(cookie.size() * 3);
    for (const unsigned char ch : cookie) {
        encoded += std::format("%{:02x}", static_cast<uint32_t>(ch));
    }
    return encoded;
}

std::string AngelUrlLoader::build_url(const cgi_request& request) const {
    std::string url = request.url;
    if (!server_info_.has_value()) {
        return url;
    }

    url = append_query_param(url, "angel_uin", std::to_string(server_info_->uin));
    url = append_query_param(url, "angel_key", server_info_->session_key);

    if (no_cache_) {
        const auto now_ms = std::chrono::duration_cast<std::chrono::milliseconds>(
            std::chrono::system_clock::now().time_since_epoch()
        ).count();
        url = append_query_param(url, "time", std::to_string(now_ms));
    }

    static const std::unordered_set<std::string> pskey_cgi{
        "qgame_gift", "invite", "homelittlepaper", "sendspiritegg", "sign2"
    };

    const auto qpos = url.find('?');
    const auto slash_pos = url.find_last_of('/');
    if (qpos != std::string::npos && slash_pos != std::string::npos && slash_pos + 1 < qpos) {
        const std::string cgi_name = url.substr(slash_pos + 1, qpos - slash_pos - 1);
        if (pskey_cgi.contains(cgi_name)) {
            const std::string& cookie = !server_info_->pskey.empty() ? server_info_->pskey : server_info_->skey;
            if (!cookie.empty()) {
                url = append_query_param(url, "unkown", encode_cookie_hex(cookie));
            }
        }
    }

    return url;
}
