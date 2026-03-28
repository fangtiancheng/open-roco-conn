#include "rebirth/fix_temper_data_proxy.hpp"
#include "httpreq/cgi_loader.hpp"

void FixTemperDataProxy::initialize() {
    last_data_.reset();
}

void FixTemperDataProxy::dispose() {
    initialize();
}

void FixTemperDataProxy::set_cgi_loader(CGILoader* loader) {
    cgi_loader_ = loader;
}

boost::asio::awaitable<FixTemperDataProxy::result> FixTemperDataProxy::query_async(const std::string& endpoint) {
    if (cgi_loader_ == nullptr) {
        co_return std::unexpected("FixTemperDataProxy: cgi loader is not set");
    }

    auto cgi_result = co_await cgi_loader_->send_data(endpoint);
    if (!cgi_result.has_value()) {
        co_return std::unexpected(cgi_result.error());
    }
    if (!cgi_result->data.has_value()) {
        co_return std::unexpected("FixTemperDataProxy: cgi response json is empty");
    }
    if (!cgi_result->data->is_object()) {
        co_return std::unexpected("FixTemperDataProxy: cgi response json is not object");
    }

    const auto& obj = cgi_result->data->as_object();
    if (const auto ret_it = obj.find("ret"); ret_it != obj.end() && ret_it->value().is_int64()) {
        const auto ret = ret_it->value().as_int64();
        if (ret != 0) {
            std::string msg = "FixTemperDataProxy: cgi return non-zero ret";
            if (const auto msg_it = obj.find("msg"); msg_it != obj.end() && msg_it->value().is_string()) {
                msg = std::string(msg_it->value().as_string());
            }
            co_return std::unexpected(msg);
        }
    }

    last_data_ = cgi_result->data;
    co_return result{};
}

const std::optional<boost::json::value>& FixTemperDataProxy::last_data() const {
    return last_data_;
}
