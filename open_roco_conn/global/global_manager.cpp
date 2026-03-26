#include "global_manager.hpp"
#include <utility>

namespace {
GlobalManager::hook g_login_success_hook;
}

void GlobalManager::set_on_start(hook callback) {
    on_start_ = std::move(callback);
}

void GlobalManager::set_on_after_loader(hook callback) {
    on_after_loader_ = std::move(callback);
}

void GlobalManager::set_on_all_res_done(hook callback) {
    on_all_res_done_ = std::move(callback);
}

void GlobalManager::start() {
    config_done_ = false;
    game_res_pkg_done_ = false;
    if (on_start_) {
        on_start_();
    }
}

void GlobalManager::on_config_done() {
    config_done_ = true;
    check_res_done();
}

void GlobalManager::on_game_res_pkg_done() {
    game_res_pkg_done_ = true;
    check_res_done();
}

bool GlobalManager::is_all_res_done() const {
    return config_done_ && game_res_pkg_done_;
}

void GlobalManager::set_login_success_hook(hook callback) {
    g_login_success_hook = std::move(callback);
}

void GlobalManager::login_success_logic() {
    if (g_login_success_hook) {
        g_login_success_hook();
    }
}

void GlobalManager::check_res_done() {
    if (!is_all_res_done()) {
        return;
    }
    if (on_after_loader_) {
        on_after_loader_();
    }
    if (on_all_res_done_) {
        on_all_res_done_();
    }
}
