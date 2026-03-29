#include "angle_main.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "base/define.hpp"
#include "global_api.hpp"
#include "global/server_list_ui.hpp"
#include "websock/angel_tcp_connection.hpp"
#include "world/angle_world.hpp"
#include <exception>
#include <format>
#include <memory>
#include <stdexcept>
#include <utility>

AngleMain::~AngleMain() = default;

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

void AngleMain::set_bootstrap_user_data(const UserData& data) {
    user_data_ = data;
}

void AngleMain::set_bootstrap_room_id(const uint16_t room_id) {
    bootstrap_room_id_ = room_id;
}

void AngleMain::set_global_api(GlobalAPI* global_api) {
    global_api_ = global_api;
}

void AngleMain::set_global_timer(GlobalTimer* global_timer) {
    global_timer_ = global_timer;
}

void AngleMain::set_callback_center(CallbackCenter* callback_center) {
    callback_center_ = callback_center;
}

const UserData& AngleMain::user_data() const {
    return user_data_;
}

void AngleMain::initialize() {
    if (initialized_) {
        return;
    }

    if (global_api_ != nullptr) {
        global_api_->init();
    }
    initialized_ = true;
    stop_async_.store(false);

    web_socket_client_.set_name("AngleMain-WebSocketClient");
    angle_event_manager_.set_timer(global_timer_);
    angle_event_manager_.set_callback_center(callback_center_);
    web_socket_client_.set_notify_dispatcher(&angle_event_manager_.angel_event_dispatcher());
    web_socket_client_.set_callback_center(callback_center_);
    net_system_.initialize(angle_event_manager_.angel_event_dispatcher(), web_socket_client_);
    net_system_.set_user_uin(user_data_.uin);
    login_receiver_.initialize(&angle_event_manager_.angel_event_dispatcher());
    login_receiver_.set_receive_handler([this](const uint32_t cmd_type, const ADF& adf) {
        if (cmd_type != ADFCmdsType::T_LoginRoom) {
            return;
        }
        if (global_api_ == nullptr) {
            return;
        }
        auto login_result = server_list_ui_.handle_login_reply(*global_api_, adf);
        if (login_result.has_value()) {
            auto dispatch_result = angle_event_manager_.angel_event_dispatcher().dispatch_event<void>(EventKey::login_ok);
            if (!dispatch_result.has_value()) {
                debug_line("dispatch login_ok failed: " + dispatch_result.error());
            }
            return;
        }
        if (Define::IS_DEBUG) {
            debug_line("login reply handle failed: " + login_result.error());
        }
    });
    net_system_.add_data_receiver(&login_receiver_);
    login_ok_listener_id_ = angle_event_manager_.angel_event_dispatcher().add_event_listener<void>(EventKey::login_ok, [this]() -> EventDispatcher::dispatch_result_t {
        on_login_ok_event();
        return {};
    });
    net_state_listener_id_ = angle_event_manager_.angel_event_dispatcher().add_event_listener<void>(
        EventKey::net_state_change,
        [this]() -> EventDispatcher::dispatch_result_t {
            on_net_state_change_event();
            return {};
        }
    );

    bootstrap_websocket();

    if (on_initialize_) {
        on_initialize_();
    }
}

void AngleMain::on_logined() {
    if (global_api_ != nullptr && global_api_->is_login()) {
        return;
    }
    if (global_api_ != nullptr) {
        global_api_->set_is_login(true);
    }

    world_ = std::make_unique<AngleWorld>();
    world_->initialize(angle_event_manager_.angel_event_dispatcher());
    net_system_.add_data_receiver(&world_->data_receiver());

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
    angle_event_manager_.set_render_timer(value);
}

bool AngleMain::get_is_render() const {
    return is_render_;
}

bool AngleMain::is_initialized() const {
    return initialized_;
}

void AngleMain::tick_once() {
    if (!initialized_) {
        return;
    }
    web_socket_client_.heartbeat_tick();
    if (web_socket_client_.connection_state() == WebSocketClient::state::connected) {
        (void) web_socket_client_.recv_once();
    }
}

EventDispatcher& AngleMain::get_g_event_api() {
    return angle_event_manager_.angel_event_dispatcher();
}

WebSocketClient& AngleMain::get_net_sys_api() {
    return web_socket_client_;
}

AngleWorld& AngleMain::get_world_api() const {
    if (!world_) {
        throw std::runtime_error("AngleMain::get_world_api: world is not available before login");
    }
    return *world_;
}

void AngleMain::get_ui_sys_api() const {
    throw std::runtime_error("AngleMain::get_ui_sys_api: UI API is unavailable in headless connector mode");
}

void AngleMain::get_res_sys_api() const {
    throw std::runtime_error("AngleMain::get_res_sys_api: resource API is unavailable in headless connector mode");
}

void AngleMain::get_media_sys_api() const {
    throw std::runtime_error("AngleMain::get_media_sys_api: media API is unavailable in headless connector mode");
}

void AngleMain::get_external_api() const {
    throw std::runtime_error("AngleMain::get_external_api: external API is unavailable in headless connector mode");
}

void AngleMain::finalize() {
    stop_async_.store(true);
    if (login_ok_listener_id_ != 0) {
        angle_event_manager_.angel_event_dispatcher().remove_event_listener(EventKey::login_ok, login_ok_listener_id_);
        login_ok_listener_id_ = 0;
    }
    if (net_state_listener_id_ != 0) {
        angle_event_manager_.angel_event_dispatcher().remove_event_listener(
            EventKey::net_state_change,
            net_state_listener_id_
        );
        net_state_listener_id_ = 0;
    }
    web_socket_client_.disconnect();
    net_system_.remove_data_receiver(&login_receiver_);
    if (world_) {
        net_system_.remove_data_receiver(&world_->data_receiver());
    }
    net_system_.finalize();
    login_receiver_.finalize();
    if (world_) {
        world_->finalize();
        world_.reset();
    }

    initialized_ = false;
    is_render_ = true;
    if (global_api_ != nullptr) {
        global_api_->set_is_login(false);
    }
}

void AngleMain::bootstrap_websocket() {
    const std::string ws_url = std::format("wss://zone{}.17roco.qq.com", user_data_.zid);

    // Keep JS loginReq flow: register tcp listeners before opening the socket so
    // TCPCONN_CONNECTED can drive onTCPConnect -> sendLoginConnData.
    if (global_api_ == nullptr) {
        return;
    }
    auto login_req_result = server_list_ui_.login_req(
        web_socket_client_,
        *global_api_,
        user_data_,
        bootstrap_room_id_,
        &login_receiver_
    );
    if (!login_req_result.has_value() && Define::IS_DEBUG) {
        debug_line("loginReq setup failed: " + login_req_result.error());
    }

    const bool connected = web_socket_client_.connect(ws_url);
    if (!connected || stop_async_.load()) {
        server_list_ui_.on_tcp_connect_close("connect failed");
        on_system_net_closed();
        return;
    }
}

void AngleMain::on_login_ok_event() {
    on_logined();
}

void AngleMain::on_net_state_change_event() {
    const auto state = net_system_.current_state();
    if (state == std::string(AngelNetSysEvent::NS_CLOSED) || state == std::string(AngelNetSysEvent::NS_ERROR)) {
        on_tcp_closed_or_error();
    }
}

void AngleMain::on_tcp_closed_or_error() {
    if (stop_async_.load()) {
        return;
    }
    server_list_ui_.on_tcp_connect_close("socket event closed/error");
    on_system_net_closed();
}
