#include "global/server_list_ui.hpp"
#include "adf_protocol/adf_cmds_type.hpp"
#include "global/global_api.hpp"
#include "login/login_data_processor.hpp"
#include <boost/json.hpp>
#include <format>
#include <map>
#include <string>

#include "login/login_data_body.hpp"

namespace {
std::expected<int, std::string> int_from_field(const boost::json::object& obj, const char* key) {
    if (!obj.contains(key)) {
        return std::unexpected(std::string("missing field: ") + key);
    }
    const auto& value = obj.at(key);
    if (value.is_int64()) {
        return static_cast<int>(value.as_int64());
    }
    if (value.is_uint64()) {
        return static_cast<int>(value.as_uint64());
    }
    if (value.is_string()) {
        try {
            return std::stoi(std::string(value.as_string().c_str()));
        } catch (...) {
            return std::unexpected(std::string("invalid int field: ") + key);
        }
    }
    return std::unexpected(std::string("invalid type for field: ") + key);
}
}

std::expected<void, std::string> ServerListUI::on_tcp_connected_event() {
    if (web_socket_client_ == nullptr) {
        return std::unexpected("websocket client is nullptr");
    }
    auto result = on_tcp_connect(login_user_data_, login_room_id_);
    if (!result.has_value()) {
        debug_line("on_tcp_connect() failed: "+ result.error());
        return std::unexpected(result.error());
    }
    return result;
}


void ServerListUI::on_tcp_error_event() {
    on_tcp_connect_close("tcp error");
}

void ServerListUI::on_tcp_timeout_event() {
    on_tcp_connect_close("tcp timeout");
}

void ServerListUI::on_tcp_closed_event() {
    on_tcp_connect_close("tcp closed");
}

ServerListUI::RoomInfo::result ServerListUI::RoomInfo::from_json(const boost::json::value& value) {
    if (!value.is_object()) {
        return std::unexpected("room item is not object");
    }
    const auto& obj = value.as_object();
    RoomInfo info{};

    auto type = int_from_field(obj, "type");
    if (!type.has_value()) return std::unexpected(type.error());
    info.type = type.value();

    auto index = int_from_field(obj, "index");
    if (!index.has_value()) return std::unexpected(index.error());
    info.index = index.value();

    auto stat = int_from_field(obj, "stat");
    if (!stat.has_value()) return std::unexpected(stat.error());
    info.stat = stat.value();

    auto limit = int_from_field(obj, "limit");
    if (!limit.has_value()) return std::unexpected(limit.error());
    info.limit = limit.value();

    auto count = int_from_field(obj, "count");
    if (!count.has_value()) return std::unexpected(count.error());
    info.count = count.value();

    auto attr = int_from_field(obj, "attr");
    if (!attr.has_value()) return std::unexpected(attr.error());
    info.attr = attr.value();

    auto zid = int_from_field(obj, "zid");
    if (!zid.has_value()) return std::unexpected(zid.error());
    info.zid = zid.value();

    auto carrier = int_from_field(obj, "carrier");
    if (!carrier.has_value()) return std::unexpected(carrier.error());
    info.carrier = carrier.value();

    return info;
}

std::string ServerListUI::RoomInfo::to_string() const {
    return std::format(
        "index={} type={} zid={} count={} limit={} stat={} attr={} carrier={}",
        index,
        type,
        zid,
        count,
        limit,
        stat,
        attr,
        carrier
    );
}

boost::asio::awaitable<ServerListUI::cgi_result> ServerListUI::request_dir_data(
    HttpRequest& http_request,
    const HttpRequest::params_t& params
) {
    CGI2 cgi2;
    auto cgi_result = co_await cgi2.call(
        http_request,
        std::string(DIR_URL),
        std::string(DIR_URL),
        params
    );
    if (!cgi_result.has_value()) {
        const auto& error = cgi_result.error();
        co_return std::unexpected("code=" + std::to_string(error.code) + " message=" + error.message);
    }
    co_return cgi_result.value();
}

boost::asio::awaitable<ServerListUI::cgi_result> ServerListUI::on_request_recommend_data(
    HttpRequest& http_request,
    const uint32_t uin
) {
    HttpRequest::params_t params{
        {"cmd", "0"},
        {"uin", std::to_string(uin)}
    };
    auto result = co_await request_dir_data(http_request, params);
    if (!result.has_value()) {
        on_request_error("onRecommendError", result.error());
        co_return std::unexpected(result.error());
    }
    on_recommend_complete(result.value());
    co_return result.value();
}

boost::asio::awaitable<ServerListUI::cgi_result> ServerListUI::on_request_range_data(
    HttpRequest& http_request,
    const int begin,
    const uint32_t uin
) {
    HttpRequest::params_t params{
        {"cmd", "1"},
        {"begin", std::to_string(begin)},
        {"count", "8"},
        {"uin", std::to_string(uin)}
    };
    auto result = co_await request_dir_data(http_request, params);
    if (!result.has_value()) {
        on_request_error("onRangeError", result.error());
        co_return std::unexpected(result.error());
    }
    on_range_complete(result.value());
    co_return result.value();
}

boost::asio::awaitable<ServerListUI::cgi_result> ServerListUI::on_request_fast_login_data(
    HttpRequest& http_request,
    const uint32_t uin
) {
    HttpRequest::params_t params{
        {"cmd", "2"},
        {"uin", std::to_string(uin)}
    };
    auto result = co_await request_dir_data(http_request, params);
    if (!result.has_value()) {
        on_request_error("onFastLoginError", result.error());
        co_return std::unexpected(result.error());
    }
    on_fast_login_complete(result.value());
    co_return result.value();
}

void ServerListUI::on_recommend_complete(const CGI2::CgiResponse& response) {
    RFBase::debug_line("ServerListUI", std::format("onRecommendComplete raw={}", response.raw_text));
    if (response.json.has_value()) {
        RFBase::debug_line("ServerListUI", "onRecommendComplete json parsed");
    }
}

void ServerListUI::on_range_complete(const CGI2::CgiResponse& response) {
    RFBase::debug_line("ServerListUI", std::format("onRangeComplete raw={}", response.raw_text));
    if (response.json.has_value()) {
        RFBase::debug_line("ServerListUI", "onRangeComplete json parsed");
    }
}

void ServerListUI::on_fast_login_complete(const CGI2::CgiResponse& response) {
    RFBase::debug_line("ServerListUI", std::format("onFastLoginComplete raw={}", response.raw_text));
    if (response.json.has_value()) {
        RFBase::debug_line("ServerListUI", "onFastLoginComplete json parsed");
    }
}

void ServerListUI::on_request_error(const std::string& tag, const std::string& error) {
    RFBase::debug_line("ServerListUI", std::format("{} error={}", tag, error));
}

ServerListUI::room_list_result ServerListUI::parse_room_list(const CGI2::CgiResponse& response) {
    if (!response.json.has_value() || !response.json->is_object()) {
        return std::unexpected("response json is empty or not object");
    }
    const auto& root = response.json->as_object();
    if (!root.contains("angel") || !root.at("angel").is_object()) {
        return std::unexpected("missing angel object");
    }
    const auto& angel = root.at("angel").as_object();
    if (!angel.contains("room") || !angel.at("room").is_array()) {
        return std::unexpected("missing room array");
    }

    std::vector<RoomInfo> rooms;
    for (const auto& room_value : angel.at("room").as_array()) {
        auto room = RoomInfo::from_json(room_value);
        if (!room.has_value()) {
            return std::unexpected(room.error());
        }
        rooms.push_back(room.value());
    }
    return rooms;
}

ServerListUI::int_result ServerListUI::read_begin_id(const CGI2::CgiResponse& response) {
    if (!response.json.has_value() || !response.json->is_object()) {
        return std::unexpected("response json is empty or not object");
    }
    const auto& root = response.json->as_object();
    if (!root.contains("angel") || !root.at("angel").is_object()) {
        return std::unexpected("missing angel object");
    }
    const auto& angel = root.at("angel").as_object();
    if (!angel.contains("beginid") || !angel.at("beginid").is_object()) {
        return std::unexpected("missing beginid object");
    }
    const auto& beginid_obj = angel.at("beginid").as_object();
    return int_from_field(beginid_obj, "value");
}

void ServerListUI::print_room_response(const CGI2::CgiResponse& response, const std::string& tag) {
    RFBase::debug_line("ServerListUI", std::format("{} raw={}", tag, response.raw_text));

    auto rooms = parse_room_list(response);
    if (!rooms.has_value()) {
        RFBase::debug_line("ServerListUI", std::format("{} parse error: {}", tag, rooms.error()));
        return;
    }

    auto begin_id = read_begin_id(response);
    if (begin_id.has_value()) {
        RFBase::debug_line("ServerListUI", std::format("{} beginid={}", tag, begin_id.value()));
    }
    RFBase::debug_line("ServerListUI", std::format("{} room_count={}", tag, rooms->size()));
    std::size_t idx = 0;
    for (const auto& room : rooms.value()) {
        RFBase::debug_line("ServerListUI", std::format("room[{}] {}", idx, room.to_string()));
        ++idx;
        if (idx >= 20) {
            RFBase::debug_line("ServerListUI", "... truncated");
            break;
        }
    }
}

std::pair<uint16_t, int> ServerListUI::pick_room_id_zid(
    const room_list_result& rooms_result,
    const UserData& user_data
) {
    if (!rooms_result.has_value() || rooms_result->empty()) {
        return {
            static_cast<uint16_t>(user_data.rec_server_idx),
            user_data.zid
        };
    }

    uint16_t picked_room_id = static_cast<uint16_t>(rooms_result->front().index);
    int picked_zid = user_data.zid;

    for (const auto& room : rooms_result.value()) {
        if (room.index != user_data.rec_server_idx) {
            continue;
        }
        picked_room_id = static_cast<uint16_t>(room.index);
        picked_zid = room.zid;
        return {picked_room_id, picked_zid};
    }

    for (const auto& room : rooms_result.value()) {
        if (room.index != static_cast<int>(picked_room_id)) {
            continue;
        }
        picked_zid = room.zid;
        break;
    }
    return {picked_room_id, picked_zid};
}

ServerListUI::result ServerListUI::login_logic(
    WebSocketClient& web_socket_client,
    GlobalAPI& global_api,
    const UserData& user_data,
    const uint16_t room_id,
    LoginReceiver* login_receiver
) {
    const uint16_t selected_room_id = room_id == 0 ? static_cast<uint16_t>(user_data.rec_server_idx) : room_id;
    RFBase::debug_line(
        "ServerListUI",
        std::format("loginLogic zid={} roomID={} uin={}", user_data.zid, selected_room_id, user_data.uin)
    );
    return login_req(web_socket_client, global_api, user_data, selected_room_id, login_receiver);
}


ServerListUI::result ServerListUI::login_req(
    WebSocketClient& web_socket_client,
    GlobalAPI& global_api,
    const UserData& user_data,
    const uint16_t room_id,
    LoginReceiver* login_receiver
) {
    const uint16_t selected_room_id = room_id == 0 ? static_cast<uint16_t>(user_data.rec_server_idx) : room_id;
    RFBase::debug_line(
        "ServerListUI",
        std::format("loginReq zid={} roomID={} uin={}", user_data.zid, selected_room_id, user_data.uin)
    );

    web_socket_client_ = &web_socket_client;
    global_api_ = &global_api;
    login_receiver_ = login_receiver;
    login_user_data_ = user_data;
    login_room_id_ = selected_room_id;

    if (!tcp_listeners_registered_) {
        tcp_connected_listener_id_ = web_socket_client.add_tcp_event_listener(EventKey::tcp_conn_connected, [this]() -> EventDispatcher::dispatch_result_t {
            return on_tcp_connected_event();
        });
        tcp_error_listener_id_ = web_socket_client.add_tcp_event_listener(EventKey::tcp_conn_error, [this]() -> EventDispatcher::dispatch_result_t {
            on_tcp_error_event();
            return {};
        });
        tcp_timeout_listener_id_ = web_socket_client.add_tcp_event_listener(EventKey::tcp_conn_timeout, [this]() -> EventDispatcher::dispatch_result_t {
            on_tcp_timeout_event();
            return {};
        });
        tcp_closed_listener_id_ = web_socket_client.add_tcp_event_listener(EventKey::tcp_conn_closed, [this]() -> EventDispatcher::dispatch_result_t {
            on_tcp_closed_event();
            return {};
        });
        tcp_listeners_registered_ = true;
    }

    if (web_socket_client.connection_state() == WebSocketClient::state::connected) {
        auto connected_result = on_tcp_connected_event();
        if (!connected_result.has_value()) {
            return std::unexpected(connected_result.error());
        }
    }
    return result{};
}


ServerListUI::result ServerListUI::on_tcp_connect(
    const UserData& user_data,
    const uint16_t room_id
) {
    if (web_socket_client_ == nullptr) {
        return std::unexpected("ServerListUI: web_socket_client is null");
    }
    RFBase::debug_line(
        "ServerListUI",
        std::format(
            "onTCPConnect roomID={} zid={} uin={}",
            (room_id == 0 ? user_data.rec_server_idx : room_id),
            user_data.zid,
            user_data.uin
        )
    );

    ServerInfo server_info{};
    const uint16_t selected_room_id = room_id == 0 ? static_cast<uint16_t>(user_data.rec_server_idx) : room_id;
    server_info.uin = user_data.uin;
    server_info.session_key = user_data.get_session_key();
    server_info.skey = user_data.skey;
    server_info.pskey = user_data.pskey;
    server_info.room_id = selected_room_id;
    return send_login_conn_data(ADFCmdsType::T_LoginRoom, server_info);
}


void ServerListUI::on_tcp_connect_close(const std::string& reason) {
    RFBase::debug_line(
        "ServerListUI",
        std::format("onTCPConnectClose{}", reason.empty() ? "" : std::format(" reason={}", reason))
    );
    if (global_api_ != nullptr) {
        global_api_->set_is_login(false);
        global_api_->clear_want_to_scene();
    }
}

ServerListUI::result ServerListUI::send_login_conn_data(
    const uint32_t cmd_type,
    const ServerInfo& server_info
) {
    if (server_info.uin == 0) {
        return std::unexpected("ServerListUI: uin is empty");
    }
    if (server_info.session_key.empty()) {
        return std::unexpected("ServerListUI: session_key is empty");
    }
    if (server_info.room_id == 0) {
        return std::unexpected("ServerListUI: room_id is empty");
    }

    if (login_receiver_ == nullptr) {
        return std::unexpected("ServerListUI: login_receiver is null");
    }
    if (web_socket_client_ == nullptr) {
        return std::unexpected("ServerListUI: web_socket_client is null");
    }
    ByteArray b;
    {
        LoginDataBody body;
        body.room_id = server_info.room_id;
        body.key = server_info.session_key;
        body.write_external(b);
    }
    login_receiver_->send_data(web_socket_client_->tcp_id(), cmd_type, std::move(b));
    RFBase::debug_line(
        "ServerListUI",
        std::format("sendLoginConnData cmd=0x{:x} roomID={}", cmd_type, server_info.room_id)
    );
    return result{};
}

ServerListUI::login_reply_result ServerListUI::handle_login_reply(GlobalAPI& global_api, const ADF& adf) {
    ADF copy = adf;
    LoginDataProcessor processor{};
    const auto& reply = processor.decode(copy);

    if (reply.return_code.is_error()) {
        return std::unexpected(
            "login failed code=" + std::to_string(reply.return_code.code_value())
            + " message=" + reply.return_code.message_text()
        );
    }

    global_api.set_main_role_info(reply.main_role);
    global_api.set_want_to_scene(reply.scene_id, reply.scene_ver);

    RFBase::debug_line(
        "ServerListUI",
        std::format(
            "login reply ok role={} scene_id={} scene_ver={}",
            reply.main_role.to_string(),
            reply.scene_id,
            reply.scene_ver
        )
    );

    return reply;
}
