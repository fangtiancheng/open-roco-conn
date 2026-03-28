#pragma once
#include "base/rf_base.hpp"
#include <string>


class UserItem: public RFBase {
public:
    const std::string_view get_param1() const override { return "aefc0J3f9pCzbw++osdKjBN"; }
    const std::string_view get_param2() const override { return "UserItem"; }
    int id = 0;
    std::string item_des{};
    int count = 0;
};
