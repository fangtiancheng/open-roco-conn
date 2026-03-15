#pragma once
#include "base/rf_base.hpp"
#include <string_view>


class AngelDataEvent: public RFBase{
public:
    const std::string_view get_param1() override{return "df6a0YlQ9NKM7Zel9ab829O";}
    const std::string_view get_param2() override{return "AngelDataEvent";}

    static constexpr std::string_view TRYSENDADF = "trySendADF";
    static constexpr std::string_view RECEIVEADF = "receiveADF";
};