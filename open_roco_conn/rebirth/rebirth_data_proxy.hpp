#pragma once
#include "base/rf_base.hpp"
#include "spirit_book/spirit_books_conf_loader.hpp"
#include <boost/asio/awaitable.hpp>
#include <expected>
#include <cstddef>
#include <cstdint>
#include <functional>
#include <string>
#include <string_view>
#include <unordered_map>
#include <vector>

class ReBirthDataProxy: public RFBase {
public:
    const std::string_view get_param1() override { return "43ddae2fy9Bf4Md218CxCJ2"; }
    const std::string_view get_param2() override { return "ReBirthDataProxy"; }

    using result = std::expected<void, std::string>;
    using query_provider = std::function<std::expected<std::vector<int>, std::string>()>;

    void initialize();
    void set_spirit_books_conf_loader(SpiritBooksConfLoader* loader);
    void dispose();

    result init_spirit_list_from_conf(const std::string& spirit_book_group_id = "12");
    result set_spirit_list(std::vector<std::string> spirit_ids);
    void set_query_provider(query_provider provider);
    result query();
    void set_cgi_loader(class CGILoader* loader);
    void set_fix_temper_data_proxy(class FixTemperDataProxy* proxy);
    boost::asio::awaitable<result> query_async();

    std::expected<bool, std::string> check_rebirth_by_id(uint32_t spirit_id) const;
    std::expected<bool, std::string> check_rebirth(uint32_t spirit_id, uint32_t level = 0) const;
    std::size_t merged_size() const;

private:
    result create_merged_map();

    std::vector<int> rebirth_flags_{};
    std::vector<std::string> spirit_ids_{};
    std::unordered_map<std::string, int> merged_map_{};
    SpiritBooksConfLoader* spirit_books_conf_loader_ = nullptr;
    query_provider provider_{};
    class CGILoader* cgi_loader_ = nullptr;
    class FixTemperDataProxy* fix_temper_data_proxy_ = nullptr;
};
