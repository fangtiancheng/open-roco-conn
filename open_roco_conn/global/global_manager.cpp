#include "global_manager.hpp"
#include "angle_main.hpp"
#include <utility>

namespace {
GlobalManager::hook g_login_success_hook;
}

GlobalManager::~GlobalManager() = default;

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
    if (angle_main_) {
        angle_main_->finalize();
        angle_main_.reset();
    }
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

AngleMain* GlobalManager::angle_main() const {
    return angle_main_.get();
}

void GlobalManager::set_user_data(const UserData& data) {
    user_data_ = data;
}

const UserData& GlobalManager::user_data() const {
    return user_data_;
}

void GlobalManager::set_mock_mode(const bool value) {
    mock_mode_ = value;
}

bool GlobalManager::mock_mode() const {
    return mock_mode_;
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

    if (!angle_main_) {
        angle_main_ = std::make_unique<AngleMain>();
        angle_main_->set_bootstrap_user_data(user_data_);
        if (!mock_mode_) {
            angle_main_->initialize();
        }
    }

    if (on_after_loader_) {
        on_after_loader_();
    }
    if (on_all_res_done_) {
        on_all_res_done_();
    }
}
