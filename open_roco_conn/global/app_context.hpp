#pragma once
#include "event/callback_center.hpp"
#include "game_app.hpp"
#include "global_game_info.hpp"
#include "global_manager.hpp"
#include "httpreq/http_request.hpp"
#include "rebirth/fix_temper_data_proxy.hpp"
#include "rebirth/rebirth_data_proxy.hpp"
#include "spirit_book/spirit_books_conf_loader.hpp"
#include "user_data.hpp"

struct AppContext {
    HttpRequest http_request{};
    UserData user_data{};
    GlobalGameInfo global_game_info{};
    CallbackCenter callback_center{};
    GlobalManager global_manager{};
    ReBirthDataProxy rebirth_data_proxy{};
    FixTemperDataProxy fix_temper_data_proxy{};
    SpiritBooksConfLoader spirit_books_conf_loader{};
    GameApp game_app{};
};
