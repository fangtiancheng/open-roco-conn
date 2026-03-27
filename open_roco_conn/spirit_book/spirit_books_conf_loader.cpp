#include "spirit_books_conf_loader.hpp"
#include <cstddef>
#include <string_view>
#include <utility>

namespace {
std::string find_attr_value(const std::string& input, const std::string& attr_key, std::size_t from_pos) {
    const auto key_pos = input.find(attr_key + "=\"", from_pos);
    if (key_pos == std::string::npos) {
        return {};
    }
    const auto value_begin = key_pos + attr_key.size() + 2;
    const auto value_end = input.find('"', value_begin);
    if (value_end == std::string::npos) {
        return {};
    }
    return input.substr(value_begin, value_end - value_begin);
}
}

void SpiritBooksConfLoader::set_conf_text(std::string conf_text) {
    conf_text_ = std::move(conf_text);
}

SpiritBooksConfLoader::spirit_ids_result SpiritBooksConfLoader::load_spirit_ids_for_rebirth(
    const std::string& spirit_book_group_id
) const {
    if (conf_text_.empty()) {
        return std::unexpected("SpiritBooksConfLoader: empty conf text");
    }

    constexpr std::string_view marker = "<SpiritBook";
    std::size_t search_pos = 0;
    while (true) {
        const auto book_pos = conf_text_.find(marker, search_pos);
        if (book_pos == std::string::npos) {
            break;
        }
        const auto id_value = find_attr_value(conf_text_, "id", book_pos);
        if (id_value.empty()) {
            search_pos = book_pos + marker.size();
            continue;
        }
        if (id_value != spirit_book_group_id) {
            search_pos = book_pos + marker.size();
            continue;
        }

        std::vector<std::string> spirit_ids;
        const auto section_end = conf_text_.find("</SpiritBook>", book_pos);
        const auto parse_end = (section_end == std::string::npos) ? conf_text_.size() : section_end;
        std::size_t spirit_pos = book_pos;
        while (true) {
            spirit_pos = conf_text_.find("spirit", spirit_pos);
            if (spirit_pos == std::string::npos || spirit_pos >= parse_end) {
                break;
            }
            const auto spirit_id = find_attr_value(conf_text_, "id", spirit_pos);
            if (!spirit_id.empty()) {
                spirit_ids.push_back(spirit_id);
            }
            spirit_pos += 6;
        }

        if (spirit_ids.empty()) {
            return std::unexpected("SpiritBooksConfLoader: SpiritBook group found but contains no spirit id");
        }
        return spirit_ids;
    }

    return std::unexpected("SpiritBooksConfLoader: rebirth SpiritBook group not found");
}

