#pragma once
#include "rf_base.hpp"
#include <string_view>

class AppConstDef: public RFBase {
public:
    const std::string_view get_param1() override { return "a6545G/S+JBJ5We8XegG7Gj"; }
    const std::string_view get_param2() override { return "AppConstDef"; }

    static constexpr std::string_view NN_V_SHOW_NIGHT_VIEW = "NN_V_SHOW_NIGHT_VIEW";
    static constexpr std::string_view NN_V_CLOSE_NIGHT_VIEW = "NN_V_CLOSE_NIGHT_VIEW";
    static constexpr std::string_view NN_V_SHOW_SPLASH_VIEW = "NN_V_SHOW_SPLASH_VIEW";
    static constexpr std::string_view NN_V_CLOSE_SPLASH_VIEW = "NN_V_CLOSE_SPLASH_VIEW";
    static constexpr std::string_view NN_V_DESTORY_SPLASH_VIEW = "NN_V_DESTORY_SPLASH_VIEW";
    static constexpr std::string_view NN_V_SHOW_LOGIN_VIEW = "NN_V_SHOW_LOGIN_VIEW";
    static constexpr std::string_view NN_V_CLOSE_LOGIN_VIEW = "NN_V_CLOSE_LOGIN_VIEW";
    static constexpr std::string_view NN_V_DESTORY_LOGIN_VIEW = "NN_V_DESTORY_LOGIN_VIEW";
    static constexpr std::string_view NN_V_SHOW_SERVER_LIST_VIEW = "NN_V_SHOW_SERVER_LIST_VIEW";
    static constexpr std::string_view NN_V_CLOSE_SERVER_LIST_VIEW = "NN_V_CLOSE_SERVER_LIST_VIEW";
    static constexpr std::string_view NN_V_DESTORY_SERVER_LIST_VIEW = "NN_V_DESTORY_SERVER_LIST_VIEW";
    static constexpr std::string_view NN_V_SHOW_MATCH_COMBAT_VIEW = "NN_V_SHOW_MATCH_COMBAT_VIEW";
    static constexpr std::string_view NN_V_CLOSE_MATCH_COMBAT_VIEW = "NN_V_CLOSE_MATCH_COMBAT_VIEW";
    static constexpr std::string_view NN_V_SHOW_MAIN_SCENE_VIEW = "NN_V_SHOW_MAIN_SCENE_VIEW";
    static constexpr std::string_view NN_V_CLOSE_MAIN_SCENE_VIEW = "NN_V_CLOSE_MAIN_SCENE_VIEW";
    static constexpr std::string_view NN_V_SHOW_SPIRIT_STORAGE_VIEW = "NN_V_SHOW_SPIRIT_STORAGE_VIEW";
    static constexpr std::string_view NN_V_CLOSE_SPIRIT_STORAGE_VIEW = "NN_V_CLOSE_SPIRIT_STORAGE_VIEW";
    static constexpr std::string_view NN_V_DESTORY_SPIRIT_STORAGE_VIEW = "NN_V_DESTORY_SPIRIT_STORAGE_VIEW";
    static constexpr std::string_view NN_V_SHOW_SPIRIT_BAG_VIEW = "NN_V_SHOW_SPIRIT_BAG_VIEW";
    static constexpr std::string_view NN_V_CLOSE_SPIRIT_BAG_VIEW = "NN_V_CLOSE_SPIRIT_BAG_VIEW";
    static constexpr std::string_view NN_V_DESTORY_SPIRIT_BAG_VIEW = "NN_V_DESTORY_SPIRIT_BAG_VIEW";
    static constexpr std::string_view NN_V_SHOW_LADDER_MATCH_VIEW = "NN_V_SHOW_LADDER_MATCH_VIEW";
    static constexpr std::string_view NN_V_CLOSE_LADDER_MATCH_VIEW = "NN_V_CLOSE_LADDER_MATCH_VIEW";
    static constexpr std::string_view NN_V_DESTORY_LADDER_MATCH_VIEW = "NN_V_DESTORY_LADDER_MATCH_VIEW";
    static constexpr std::string_view NN_V_UPDATE_USER_INFO_PANEL = "NN_V_UPDATE_USER_INFO_PANEL";
    static constexpr std::string_view NN_V_SHOW_VERSUS_VIEW = "NN_V_SHOW_VERSUS_VIEW";
    static constexpr std::string_view NN_V_CLOSE_VERSUS_VIEW = "NN_V_CLOSE_VERSUS_VIEW";
    static constexpr std::string_view NN_V_DESTORY_VERSUS_VIEW = "NN_V_DESTORY_VERSUS_VIEW";
    static constexpr std::string_view NN_V_SHOW_PVE_VIEW = "NN_V_SHOW_PVE_VIEW";
    static constexpr std::string_view NN_V_CLOSE_PVE_VIEW = "NN_V_CLOSE_PVE_VIEW";
    static constexpr std::string_view NN_V_DESTORY_PVE_VIEW = "NN_V_DESTORY_PVE_VIEW";
    static constexpr std::string_view NN_V_SHOW_QRCODESHOP_VIEW = "NN_V_SHOW_QRCODESHOP_VIEW";
    static constexpr std::string_view NN_V_CLOSE_QRCODESHOP_VIEW = "NN_V_CLOSE_QRCODESHOP_VIEW";
    static constexpr std::string_view NN_V_DESTORY_QRCODESHOP_VIEW = "NN_V_DESTORY_QRCODESHOP_VIEW";
    static constexpr std::string_view NN_V_SHOW_LULU_VIEW = "NN_V_SHOW_LULU_VIEW";
    static constexpr std::string_view NN_V_CLOSE_LULU_VIEW = "NN_V_CLOSE_LULU_VIEW";
    static constexpr std::string_view NN_V_DESTORY_LULU_VIEW = "NN_V_DESTORY_LULU_VIEW";
};
