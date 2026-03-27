#include "rebirth/rebirth_data_proxy.hpp"
#include "httpreq/cgi_loader.hpp"
#include "rebirth/fix_temper_data_proxy.hpp"
#include "rebirth/rebirth_config.hpp"
#include <charconv>

namespace {
std::expected<int, std::string> parse_flag_value(const boost::json::value& value) {
    if (value.is_int64()) {
        return static_cast<int>(value.as_int64());
    }
    if (value.is_uint64()) {
        return static_cast<int>(value.as_uint64());
    }
    if (value.is_string()) {
        int parsed = 0;
        const auto str = value.as_string();
        const auto* begin = str.data();
        const auto* end = str.data() + str.size();
        auto [ptr, ec] = std::from_chars(begin, end, parsed);
        if (ec == std::errc{} && ptr == end) {
            return parsed;
        }
        return std::unexpected("ReBirthDataProxy: invalid rebirth flag string value");
    }
    return std::unexpected("ReBirthDataProxy: rebirth flag type is not numeric");
}

std::expected<std::vector<int>, std::string> parse_rebirth_flags(const CgiEvent& event) {
    if (!event.data.has_value()) {
        return std::unexpected("ReBirthDataProxy: cgi response json is empty");
    }
    if (!event.data->is_object()) {
        return std::unexpected("ReBirthDataProxy: cgi response json is not object");
    }

    const auto& obj = event.data->as_object();
    if (const auto ret_it = obj.find("ret"); ret_it != obj.end() && ret_it->value().is_int64()) {
        const auto ret = ret_it->value().as_int64();
        if (ret != 0) {
            std::string msg = "ReBirthDataProxy: cgi return non-zero ret";
            if (const auto msg_it = obj.find("msg"); msg_it != obj.end() && msg_it->value().is_string()) {
                msg = std::string(msg_it->value().as_string());
            }
            return std::unexpected(msg);
        }
    }

    const auto rebirth_it = obj.find("rebirth");
    if (rebirth_it == obj.end() || !rebirth_it->value().is_array()) {
        return std::unexpected("ReBirthDataProxy: cgi response has no rebirth array");
    }
    const auto& arr = rebirth_it->value().as_array();

    std::vector<int> flags;
    flags.reserve(arr.size());
    for (const auto& item : arr) {
        auto parsed = parse_flag_value(item);
        if (!parsed.has_value()) {
            return std::unexpected(parsed.error());
        }
        flags.push_back(parsed.value());
    }
    return flags;
}
}

void ReBirthDataProxy::initialize() {
    rebirth_flags_.clear();
    spirit_ids_.clear();
    merged_map_.clear();
}

void ReBirthDataProxy::set_spirit_books_conf_loader(SpiritBooksConfLoader* loader) {
    spirit_books_conf_loader_ = loader;
}

void ReBirthDataProxy::dispose() {
    initialize();
}

ReBirthDataProxy::result ReBirthDataProxy::init_spirit_list_from_conf(const std::string& spirit_book_group_id) {
    if (spirit_books_conf_loader_ == nullptr) {
        return std::unexpected("ReBirthDataProxy: SpiritBooksConfLoader is not set");
    }
    auto load_result = spirit_books_conf_loader_->load_spirit_ids_for_rebirth(spirit_book_group_id);
    if (!load_result.has_value()) {
        return std::unexpected(load_result.error());
    }
    return set_spirit_list(std::move(load_result.value()));
}

ReBirthDataProxy::result ReBirthDataProxy::set_spirit_list(std::vector<std::string> spirit_ids) {
    spirit_ids_ = std::move(spirit_ids);
    if (rebirth_flags_.empty()) {
        merged_map_.clear();
        return {};
    }
    return create_merged_map();
}

void ReBirthDataProxy::set_query_provider(query_provider provider) {
    provider_ = std::move(provider);
}

void ReBirthDataProxy::set_cgi_loader(CGILoader* loader) {
    cgi_loader_ = loader;
}

void ReBirthDataProxy::set_fix_temper_data_proxy(FixTemperDataProxy* proxy) {
    fix_temper_data_proxy_ = proxy;
}

ReBirthDataProxy::result ReBirthDataProxy::query() {
    if (!provider_) {
        return std::unexpected("ReBirthDataProxy: query provider is not set");
    }
    auto flags_result = provider_();
    if (!flags_result.has_value()) {
        return std::unexpected(flags_result.error());
    }
    rebirth_flags_ = std::move(flags_result.value());

    if (spirit_ids_.empty()) {
        auto init_result = init_spirit_list_from_conf(std::string(RebirthConfig::REBIRTH_SPIRIT_BOOK_GROUP_ID));
        if (!init_result.has_value()) {
            return init_result;
        }
    }
    return create_merged_map();
}

boost::asio::awaitable<ReBirthDataProxy::result> ReBirthDataProxy::query_async() {
    if (cgi_loader_ == nullptr) {
        co_return query();
    }

    auto cgi_result = co_await cgi_loader_->send_data("three_color_rebirth?cmd=0");
    if (!cgi_result.has_value()) {
        co_return std::unexpected(cgi_result.error());
    }
    auto flags_result = parse_rebirth_flags(cgi_result.value());
    if (!flags_result.has_value()) {
        co_return std::unexpected(flags_result.error());
    }
    rebirth_flags_ = std::move(flags_result.value());

    if (spirit_ids_.empty()) {
        auto init_result = init_spirit_list_from_conf(std::string(RebirthConfig::REBIRTH_SPIRIT_BOOK_GROUP_ID));
        if (!init_result.has_value()) {
            co_return init_result;
        }
    }
    auto merge_result = create_merged_map();
    if (!merge_result.has_value()) {
        co_return merge_result;
    }
    if (fix_temper_data_proxy_ != nullptr) {
        auto fix_temper_result = co_await fix_temper_data_proxy_->query_async();
        if (!fix_temper_result.has_value()) {
            co_return std::unexpected(fix_temper_result.error());
        }
    }
    co_return result{};
}

std::expected<bool, std::string> ReBirthDataProxy::check_rebirth_by_id(const uint32_t spirit_id) const {
    if (merged_map_.empty()) {
        return std::unexpected("ReBirthDataProxy: merged map is empty, call query() first");
    }
    const auto it = merged_map_.find(std::to_string(spirit_id));
    if (it == merged_map_.end()) {
        return false;
    }
    return it->second != 0;
}

std::expected<bool, std::string> ReBirthDataProxy::check_rebirth(
    const uint32_t spirit_id,
    const uint32_t level
) const {
    (void) level;
    return check_rebirth_by_id(spirit_id);
}

std::size_t ReBirthDataProxy::merged_size() const {
    return merged_map_.size();
}

ReBirthDataProxy::result ReBirthDataProxy::create_merged_map() {
    if (spirit_ids_.empty()) {
        return std::unexpected("ReBirthDataProxy: spirit_ids is empty");
    }
    if (rebirth_flags_.empty()) {
        merged_map_.clear();
        return {};
    }
    if (spirit_ids_.size() != rebirth_flags_.size()) {
        return std::unexpected("ReBirthDataProxy: spirit_ids and rebirth flags size mismatch");
    }
    merged_map_.clear();
    for (std::size_t i = 0; i < spirit_ids_.size(); ++i) {
        merged_map_[spirit_ids_[i]] = rebirth_flags_[i];
    }
    return {};
}
