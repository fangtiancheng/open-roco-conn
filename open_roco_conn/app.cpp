#include "global/app_context.hpp"
#include "global/game_launch.hpp"
#include "httpreq/cgi_loader.hpp"
#include "rebirth/rebirth_config.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/asio/co_spawn.hpp>
#include <boost/asio/detached.hpp>
#include <boost/asio/io_context.hpp>
#include <boost/json.hpp>
#include <iostream>
#include <map>
#include <string>
#include <vector>

boost::asio::awaitable<void> run_mock_chain(AppContext& ctx) {
    std::map<std::string, std::string> mock_cookie_map{
        {"angel_uin", "uin=100123456"},
        {"angel_key", "mock_session_key_abc"},
        {"skey", "mock_skey_123"},
        {"pskey", "mock_pskey_456"}
    };

    const std::string mock_spirit_book_xml =
        "<Root>"
        "<SpiritBook id=\"11\"><groups><group><spirit id=\"9001\"/></group></groups></SpiritBook>"
        "<SpiritBook id=\"12\"><groups><group>"
        "<spirit id=\"1001\"/><spirit id=\"1002\"/><spirit id=\"1003\"/><spirit id=\"1004\"/>"
        "</group></groups></SpiritBook>"
        "</Root>";

    GameLaunch launch{};
    auto& manager = ctx.global_manager;
    auto& game_app = ctx.game_app;
    auto& rebirth = ctx.rebirth_data_proxy;
    auto& fix_temper = ctx.fix_temper_data_proxy;
    auto& spirit_loader = ctx.spirit_books_conf_loader;
    auto& http_request = ctx.http_request;
    CGILoader cgi_loader{"https://mock.local/cgi-bin/", http_request};

    manager.set_user_data(ctx.user_data);
    manager.set_global_game_info(&ctx.global_game_info);
    manager.set_rebirth_data_proxy(&rebirth);
    manager.set_mock_mode(true);
    manager.set_on_start([&game_app]() {
        game_app.reset();
        std::cout << "[MockChain] GlobalManager::start" << std::endl;
    });
    manager.set_on_after_loader([&ctx]() {
        std::cout << "[MockChain] GlobalManager::afterLoader" << std::endl;
        const auto* angle_main = ctx.global_manager.angle_main();
        if (angle_main == nullptr) {
            std::cout << "[MockChain] AngleMain is null" << std::endl;
            return;
        }
        const auto& data = angle_main->user_data();
        std::cout << "[MockChain] AngleMain received UserData:"
                  << " uin=" << data.uin
                  << " sessionKey=" << data.get_session_key()
                  << " skey=" << data.skey
                  << " pskey=" << data.pskey
                  << std::endl;
    });
    manager.set_on_all_res_done([]() {
        std::cout << "[MockChain] GlobalManager::allResDone" << std::endl;
    });

    auto launch_result = co_await launch.on_load(mock_cookie_map, ctx.user_data, ctx.global_game_info);
    if (!launch_result.has_value()) {
        std::cout << "[MockChain] GameLaunch on_load failed: " << launch_result.error() << std::endl;
        co_return;
    }

    manager.set_user_data(ctx.user_data);
    spirit_loader.set_conf_text(mock_spirit_book_xml);
    rebirth.initialize();
    fix_temper.initialize();
    rebirth.set_spirit_books_conf_loader(&spirit_loader);
    rebirth.set_cgi_loader(&cgi_loader);
    rebirth.set_fix_temper_data_proxy(&fix_temper);
    fix_temper.set_cgi_loader(&cgi_loader);
    auto rebirth_init = rebirth.init_spirit_list_from_conf(std::string(RebirthConfig::REBIRTH_SPIRIT_BOOK_GROUP_ID));
    if (!rebirth_init.has_value()) {
        std::cout << "[MockChain] ReBirth init spirit list failed: " << rebirth_init.error() << std::endl;
        co_return;
    }
    cgi_loader.set_mock_handler([](const std::string& url, const std::map<std::string, std::string>&) -> CGI2::result {
        CGI2::CgiResponse response{};
        if (url.find("cmd=1") != std::string::npos) {
            response.raw_text = R"({"ret":0,"item0":3,"item1":5,"item2":8,"dayCount":1,"dayLimit":5})";
        } else {
            response.raw_text = R"({"ret":0,"rebirth":[0,1,0,1]})";
        }
        response.json = boost::json::parse(response.raw_text);
        return response;
    });

    std::cout << "[MockChain] GameLaunch parsed UserData:"
              << " uin=" << ctx.user_data.uin
              << " sessionKey=" << ctx.user_data.get_session_key()
              << " skey=" << ctx.user_data.skey
              << " pskey=" << ctx.user_data.pskey
              << " isLoginIn=" << (ctx.global_game_info.is_login_in ? "true" : "false")
              << std::endl;

    manager.start();
    manager.on_config_done();
    manager.on_game_res_pkg_done();

    const auto rebirth_result = co_await rebirth.query_async();
    if (!rebirth_result.has_value()) {
        std::cout << "[MockChain] ReBirth query failed: " << rebirth_result.error() << std::endl;
    }
    if (fix_temper.last_data().has_value()) {
        std::cout << "[MockChain] FixTemper query ok" << std::endl;
    }

    co_await game_app.on_all_res_done(ctx.global_game_info);
    const auto step = game_app.next_step();
    if (step == GameApp::NextStep::server_list) {
        std::cout << "[MockChain] GameApp next step: server_list" << std::endl;
    } else if (step == GameApp::NextStep::login) {
        std::cout << "[MockChain] GameApp next step: login" << std::endl;
    } else {
        std::cout << "[MockChain] GameApp next step: none" << std::endl;
    }

    const auto rebirth_1002 = rebirth.check_rebirth_by_id(1002);
    if (rebirth_1002.has_value()) {
        std::cout << "[MockChain] ReBirth check 1002: "
                  << (rebirth_1002.value() ? "true" : "false") << std::endl;
    } else {
        std::cout << "[MockChain] ReBirth check 1002 failed: " << rebirth_1002.error() << std::endl;
    }

    const auto rebirth_1003 = rebirth.check_rebirth_by_id(1003);
    if (rebirth_1003.has_value()) {
        std::cout << "[MockChain] ReBirth check 1003: "
                  << (rebirth_1003.value() ? "true" : "false") << std::endl;
    } else {
        std::cout << "[MockChain] ReBirth check 1003 failed: " << rebirth_1003.error() << std::endl;
    }

    if (auto* angle_main = manager.angle_main(); angle_main != nullptr) {
        angle_main->finalize();
    }
    manager.start();
    co_return;
}

int main() {
    AppContext ctx{};
    boost::asio::io_context io_context;
    boost::asio::co_spawn(io_context, run_mock_chain(ctx), boost::asio::detached);
    io_context.run();
    return 0;
}
