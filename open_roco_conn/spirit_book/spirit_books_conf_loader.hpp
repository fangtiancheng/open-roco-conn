#pragma once
#include "base/rf_base.hpp"
#include <expected>
#include <string>
#include <string_view>
#include <vector>

class SpiritBooksConfLoader: public RFBase {
public:
    const std::string_view get_param1() override { return "68622uxkTpLdptX7ws3E06T"; }
    const std::string_view get_param2() override { return "SpiritBooksConfLoader"; }

    using spirit_ids_result = std::expected<std::vector<std::string>, std::string>;

    void set_conf_text(std::string conf_text);
    spirit_ids_result load_spirit_ids_for_rebirth(const std::string& spirit_book_group_id = "12") const;

private:
    std::string conf_text_{};
};
