#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/adf.hpp"
#include "user_item.hpp"
#include <vector>

class GetItemsByTypeP: public RFBase {
public:
    const std::string_view get_param1() override { return "30f75C+NPFF3rZduaHYW/aK"; }
    const std::string_view get_param2() override { return "GetItemsByTypeP"; }

    std::vector<UserItem> decode(ADF&);
};