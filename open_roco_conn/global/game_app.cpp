#include "game_app.hpp"

boost::asio::awaitable<void> GameApp::on_all_res_done(const GlobalGameInfo& global_game_info) {
    next_step_ = global_game_info.is_login_in ? NextStep::server_list : NextStep::login;
    co_return;
}

GameApp::NextStep GameApp::next_step() const {
    return next_step_;
}

void GameApp::reset() {
    next_step_ = NextStep::none;
}
