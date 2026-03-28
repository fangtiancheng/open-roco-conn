#include "global/app_context.hpp"
#include "global/game_launch.hpp"
#include "global/server_list_ui.hpp"
#include <boost/asio/awaitable.hpp>
#include <boost/asio/co_spawn.hpp>
#include <boost/asio/detached.hpp>
#include <boost/asio/io_context.hpp>
#include <iostream>
#include <map>
#include <string>

namespace {

boost::asio::awaitable<void> run_real_login_pre_room_flow(AppContext& ctx) {
    try {
    std::map<std::string, std::string> mock_cookie_map{

    };

    GameLaunch launch{};
    auto launch_result = co_await launch.on_load(mock_cookie_map, ctx.user_data, ctx.global_game_info);
    if (!launch_result.has_value()) {
        RFBase::debug_stream("App") << "GameLaunch failed: " << launch_result.error() << std::endl;
        co_return;
    }

    RFBase::debug_stream("App") << "login parsed:"
                                << " uin=" << ctx.user_data.uin
                                << " session_key=" << ctx.user_data.get_session_key()
                                << " skey=" << ctx.user_data.skey
                                << " pskey=" << ctx.user_data.pskey
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
    constexpr int default_count = 9;
    RFBase::debug_stream("App") << "request range... begin=" << begin_id << " count=" << default_count << std::endl;
    auto range_result = co_await ServerListUI::on_request_range_data(
        ctx.http_request,
        begin_id,
        default_count,
        ctx.user_data.uin
    );
    if (!range_result.has_value()) {
        RFBase::debug_stream("App") << "on_request_range_data failed: " << range_result.error() << std::endl;
        co_return;
    }
    ServerListUI::print_room_response(range_result.value(), "range");

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
