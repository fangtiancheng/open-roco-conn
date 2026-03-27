#include "global_manager.hpp"
#include "angle_main.hpp"
#include "rebirth/rebirth_data_proxy.hpp"
#include <utility>

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

void GlobalManager::set_global_game_info(GlobalGameInfo* info) {
    global_game_info_ = info;
}

GlobalGameInfo* GlobalManager::global_game_info() const {
    return global_game_info_;
}

void GlobalManager::set_rebirth_data_proxy(ReBirthDataProxy* proxy) {
    rebirth_data_proxy_ = proxy;
}

ReBirthDataProxy* GlobalManager::rebirth_data_proxy() const {
    return rebirth_data_proxy_;
}

void GlobalManager::set_mock_mode(const bool value) {
    mock_mode_ = value;
}

bool GlobalManager::mock_mode() const {
    return mock_mode_;
}

void GlobalManager::check_res_done() {
    if (!is_all_res_done()) {
        return;
    }

    if (!angle_main_) {
        angle_main_ = std::make_unique<AngleMain>();
        angle_main_->set_bootstrap_user_data(user_data_);
        angle_main_->set_on_logined([this]() {
            if (global_game_info_ != nullptr) {
                global_game_info_->is_login_in = true;
            }
            if (rebirth_data_proxy_ != nullptr) {
                (void) rebirth_data_proxy_->query();
            }
        });
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
