#pragma once

#include "base/rf_base.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/json.hpp>
#include <expected>
#include <optional>
#include <string>
#include <string_view>

class CGILoader;

class FixTemperDataProxy: public RFBase {
public:
    const std::string_view get_param1() override { return "e1465z8xCxBXYmXtOYCeXNF"; }
    const std::string_view get_param2() override { return "FixTemperDataProxy"; }

    using result = std::expected<void, std::string>;

    void initialize();
    void dispose();
    void set_cgi_loader(CGILoader* loader);
    boost::asio::awaitable<result> query_async(const std::string& endpoint = "three_color_rebirth?cmd=1");
    const std::optional<boost::json::value>& last_data() const;

private:
    CGILoader* cgi_loader_ = nullptr;
    std::optional<boost::json::value> last_data_{};
};
