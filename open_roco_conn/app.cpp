#include "global/app_context.hpp"
#include "global/game_launch.hpp"
#include "global/global_api.hpp"
#include "global/server_list_ui.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/asio/co_spawn.hpp>
#include <boost/asio/detached.hpp>
#include <boost/asio/io_context.hpp>
#include <boost/asio/steady_timer.hpp>
#include <boost/asio/this_coro.hpp>
#include <boost/asio/use_awaitable.hpp>
#include <iostream>
#include <map>
#include <string>

namespace net = boost::asio;

namespace {

uint16_t pick_room_id(const ServerListUI::room_list_result& rooms_result, const UserData& user_data) {
    if (!rooms_result.has_value() || rooms_result->empty()) {
        return static_cast<uint16_t>(user_data.rec_server_idx);
    }

    for (const auto& room : rooms_result.value()) {
        if (room.index == user_data.rec_server_idx) {
            return static_cast<uint16_t>(room.index);
        }
    }
    return static_cast<uint16_t>(rooms_result->front().index);
}

int pick_room_zid(const ServerListUI::room_list_result& rooms_result, const UserData& user_data, const uint16_t room_id) {
    if (!rooms_result.has_value()) {
        return user_data.zid;
    }
    for (const auto& room : rooms_result.value()) {
        if (room.index == static_cast<int>(room_id)) {
            return room.zid;
        }
    }
    return user_data.zid;
}

boost::asio::awaitable<void> run_real_login_pre_room_flow(AppContext& ctx) {
    try {
    std::map<std::string, std::string> mock_cookie_map{
            {"angel_uin", "778860550"},
            {"angel_key", "5018789EFBC1E7A7BD308C1EDA7BCDFD90AD2879EE0450C7B2EB2E0E89F82394"},
            {"skey", "090ECC0CCE86F2B5C6800A8FFF1E5A95"},
            {"pskey", "AE1C1526F7355354E57BF6F3965E4605"}
    };

    GameLaunch launch{};
    auto launch_result = co_await launch.on_load(mock_cookie_map, ctx.user_data, ctx.global_game_info);
    if (!launch_result.has_value()) {
        RFBase::debug_stream("App") << "GameLaunch failed: " << launch_result.error() << std::endl;
        co_return;
    }

    RFBase::debug_stream("App") << "login parsed:"
                                << ctx.user_data.to_string()
                                << " is_login_in=" << (ctx.global_game_info.is_login_in ? "true" : "false")
                                << std::endl;

    RFBase::debug_stream("App") << "request recommend..." << std::endl;
    auto recommend_result = co_await ServerListUI::on_request_recommend_data(ctx.http_request, ctx.user_data.uin);
    if (!recommend_result.has_value()) {
        RFBase::debug_stream("App") << "on_request_recommend_data failed: " << recommend_result.error() << std::endl;
        co_return;
    }
    ServerListUI::print_room_response(recommend_result.value(), "recommend");

    auto begin_id_result = ServerListUI::read_begin_id(recommend_result.value());
    const int begin_id = begin_id_result.has_value() ? begin_id_result.value() : 1;
    RFBase::debug_stream("App") << "request range... begin=" << begin_id << std::endl;
    auto range_result = co_await ServerListUI::on_request_range_data(
        ctx.http_request,
        begin_id,
        ctx.user_data.uin
    );
    if (!range_result.has_value()) {
        RFBase::debug_stream("App") << "on_request_range_data failed: " << range_result.error() << std::endl;
        co_return;
    }
    ServerListUI::print_room_response(range_result.value(), "range");

    auto rooms_result = ServerListUI::parse_room_list(range_result.value());
    const uint16_t room_id = pick_room_id(rooms_result, ctx.user_data);
    ctx.user_data.zid = pick_room_zid(rooms_result, ctx.user_data, room_id);
    ctx.global_game_info.room_id = room_id;
    RFBase::debug_stream("App") << "selected room_id=" << room_id
                                << " zid=" << ctx.user_data.zid
                                << ", now start websocket/tcp login flow" << std::endl;

    auto& manager = ctx.global_manager;
    manager.set_user_data(ctx.user_data);
    manager.set_global_game_info(&ctx.global_game_info);
    manager.set_mock_mode(false);
    manager.set_on_after_loader([&ctx]() {
        auto* angle_main = ctx.global_manager.angle_main();
        if (angle_main != nullptr) {
            RFBase::debug_stream("App") << "AngleMain initialized, waiting login reply..." << std::endl;
        }
    });
    manager.set_on_all_res_done([&ctx]() {
        RFBase::debug_stream("App") << "all res done, GlobalAPI.isLogin="
                                    << (GlobalAPI::is_login() ? "true" : "false") << std::endl;
    });

    manager.start();
    manager.on_config_done();
    manager.on_game_res_pkg_done();

    auto executor = co_await net::this_coro::executor;
    net::steady_timer wait_timer(executor);
    wait_timer.expires_after(std::chrono::seconds(2));
    co_await wait_timer.async_wait(net::use_awaitable);

    if (auto* angle_main = manager.angle_main(); angle_main != nullptr) {
        angle_main->finalize();
    }

    co_return;
    } catch (const std::exception& ex) {
        RFBase::debug_stream("App") << "exception: " << ex.what() << std::endl;
        co_return;
    } catch (...) {
        RFBase::debug_stream("App") << "unknown exception" << std::endl;
        co_return;
    }
}
}

int main() {
    AppContext ctx{};
    // Temporary for local debugging when OpenSSL CA trust store is missing on Windows.
    // Turn this off after certificates are configured.
    ctx.http_request.set_insecure_skip_tls_verify(true);
    boost::asio::io_context io_context;
    boost::asio::co_spawn(io_context, run_real_login_pre_room_flow(ctx), boost::asio::detached);
    io_context.run();
    return 0;
}
