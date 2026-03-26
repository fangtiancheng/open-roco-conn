#include "angle_main.hpp"
#include "global_api.hpp"
#include <utility>

void AngleMain::set_on_initialize(hook callback) {
    on_initialize_ = std::move(callback);
}

void AngleMain::set_on_logined(hook callback) {
    on_logined_ = std::move(callback);
}

void AngleMain::set_on_network_closed(hook callback) {
    on_network_closed_ = std::move(callback);
}

void AngleMain::set_on_refresh_html(hook callback) {
    on_refresh_html_ = std::move(callback);
}

void AngleMain::initialize() {
    GlobalAPI::init();
    initialized_ = true;
    if (on_initialize_) {
        on_initialize_();
    }
}

void AngleMain::on_logined() {
    GlobalAPI::set_is_login(true);
    if (on_logined_) {
        on_logined_();
    }
}

void AngleMain::on_system_net_closed() {
    if (on_network_closed_) {
        on_network_closed_();
    }
}

void AngleMain::reflash_html() {
    if (on_refresh_html_) {
        on_refresh_html_();
    }
}

void AngleMain::set_render(const bool value) {
    is_render_ = value;
}

bool AngleMain::get_is_render() const {
    return is_render_;
}

bool AngleMain::is_initialized() const {
    return initialized_;
}

void AngleMain::finalize() {
    initialized_ = false;
    is_render_ = true;
    GlobalAPI::set_is_login(false);
}
