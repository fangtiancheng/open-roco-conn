#include "global/app_context.hpp"
#include "global/game_launch.hpp"
#include "global/global_api.hpp"
#include "global/server_list_ui.hpp"
#include <boost/asio/co_spawn.hpp>
#include <boost/asio/io_context.hpp>
#include <boost/asio/use_awaitable.hpp>
#include <boost/asio/use_future.hpp>
#include <chrono>
#include <format>
#include <iostream>
#include <map>
#include <string>
#include <thread>

namespace net = boost::asio;

namespace {
template <typename T>
T run_awaitable_blocking(net::io_context& io_context, net::awaitable<T> task) {
    auto fut = net::co_spawn(io_context, std::move(task), net::use_future);
    io_context.run();
    io_context.restart();
    return fut.get();
}

void run_awaitable_blocking(net::io_context& io_context, net::awaitable<void> task) {
    auto fut = net::co_spawn(io_context, std::move(task), net::use_future);
    io_context.run();
    io_context.restart();
    fut.get();
}

int run_real_login_pre_room_flow(AppContext& ctx) {
    try {
        std::map<std::string, std::string> mock_cookie_map{

        };

        net::io_context io_context;

        GameLaunch launch{};
        auto launch_result = launch.on_load(mock_cookie_map, ctx.user_data, ctx.global_game_info);
        if (!launch_result.has_value()) {
            RFBase::debug_line("App", std::format("GameLaunch failed: {}", launch_result.error()));
            return 1;
        }

        RFBase::debug_line(
            "App",
            std::format("login parsed:{} is_login_in={}", ctx.user_data.to_string(), ctx.global_game_info.is_login_in ? "true" : "false")
        );

        RFBase::debug_line("App", "request recommend...");
        auto recommend_result = run_awaitable_blocking(
            io_context,
            ServerListUI::on_request_recommend_data(ctx.http_request, ctx.user_data.uin)
        );
        if (!recommend_result.has_value()) {
            RFBase::debug_line("App", std::format("on_request_recommend_data failed: {}", recommend_result.error()));
            return 2;
        }
        ServerListUI::print_room_response(recommend_result.value(), "recommend");

        auto begin_id_result = ServerListUI::read_begin_id(recommend_result.value());
        const int begin_id = begin_id_result.has_value() ? begin_id_result.value() : 1;
        RFBase::debug_line("App", std::format("request range... begin={}", begin_id));
        auto range_result = run_awaitable_blocking(
            io_context,
            ServerListUI::on_request_range_data(ctx.http_request, begin_id, ctx.user_data.uin)
        );
        if (!range_result.has_value()) {
            RFBase::debug_line("App", std::format("on_request_range_data failed: {}", range_result.error()));
            return 3;
        }
        ServerListUI::print_room_response(range_result.value(), "range");

        auto rooms_result = ServerListUI::parse_room_list(range_result.value());
        const auto [room_id, zid] = ServerListUI::pick_room_id_zid(rooms_result, ctx.user_data);
        ctx.user_data.zid = zid;
        ctx.global_game_info.room_id = room_id;
        RFBase::debug_line(
            "App",
            std::format("selected room_id={} zid={}, now start websocket/tcp login flow", room_id, ctx.user_data.zid)
        );

        auto& manager = ctx.global_manager;
        manager.set_user_data(ctx.user_data);
        manager.set_global_api(&ctx.global_api);
        manager.set_global_timer(&ctx.global_timer);
        manager.set_global_game_info(&ctx.global_game_info);
        manager.set_callback_center(&ctx.callback_center);
        manager.set_on_after_loader([&ctx]() {
            auto* angle_main = ctx.global_manager.angle_main();
            if (angle_main != nullptr) {
                RFBase::debug_line("App", "AngleMain initialized, waiting login reply...");
            }
        });
        manager.set_on_all_res_done([&ctx]() {
            RFBase::debug_line("App", std::format("all res done, GlobalAPI.isLogin={}", ctx.global_api.is_login() ? "true" : "false"));
        });

        manager.start();
        manager.on_config_done();
        manager.on_game_res_pkg_done();

        auto* angle_main = manager.angle_main();
        if (angle_main == nullptr) {
            RFBase::debug_line("App", "AngleMain is null, exit");
            return 4;
        }

        RFBase::debug_line("App", "single-thread loop running, press Enter to stop");
        while (angle_main->is_initialized()) {
            angle_main->tick_once();
            if (std::cin.rdbuf()->in_avail() > 0) {
                std::string line;
                std::getline(std::cin, line);
                break;
            }
            std::this_thread::sleep_for(std::chrono::milliseconds(1));
        }
        angle_main->finalize();
        return 0;
    } catch (const std::exception& ex) {
        RFBase::debug_line("App", std::format("exception: {}", ex.what()));
        return 100;
    } catch (...) {
        RFBase::debug_line("App", "unknown exception");
        return 101;
    }
}
}

int main() {
    AppContext ctx{};
    // Temporary for local debugging when OpenSSL CA trust store is missing on Windows.
    // Turn this off after certificates are configured.
    ctx.http_request.set_insecure_skip_tls_verify(true);
    return run_real_login_pre_room_flow(ctx);
}
