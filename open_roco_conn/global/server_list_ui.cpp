#include "global/server_list_ui.hpp"
#include "login/login_data_processor.hpp"
#include <boost/json.hpp>
#include <iostream>
#include <map>
#include <sstream>
#include <string>

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
    std::ostringstream oss;
    oss << "index=" << index
        << " type=" << type
        << " zid=" << zid
        << " count=" << count
        << " limit=" << limit
        << " stat=" << stat
        << " attr=" << attr
        << " carrier=" << carrier;
    return oss.str();
}

boost::asio::awaitable<ServerListUI::cgi_result> ServerListUI::request_dir_data(
    HttpRequest& http_request,
    const std::map<std::string, std::string>& params
) {
    auto cgi_result = co_await CGI2::call(
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
    std::map<std::string, std::string> params{
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
    const int count,
    const uint32_t uin
) {
    std::map<std::string, std::string> params{
        {"cmd", "1"},
        {"begin", std::to_string(begin)},
        {"count", std::to_string(count)},
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
    std::map<std::string, std::string> params{
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
    RFBase::debug_stream("ServerListUI") << "onRecommendComplete raw=" << response.raw_text << std::endl;
    if (response.json.has_value()) {
        RFBase::debug_stream("ServerListUI") << "onRecommendComplete json parsed" << std::endl;
    }
}

void ServerListUI::on_range_complete(const CGI2::CgiResponse& response) {
    RFBase::debug_stream("ServerListUI") << "onRangeComplete raw=" << response.raw_text << std::endl;
    if (response.json.has_value()) {
        RFBase::debug_stream("ServerListUI") << "onRangeComplete json parsed" << std::endl;
    }
}

void ServerListUI::on_fast_login_complete(const CGI2::CgiResponse& response) {
    RFBase::debug_stream("ServerListUI") << "onFastLoginComplete raw=" << response.raw_text << std::endl;
    if (response.json.has_value()) {
        RFBase::debug_stream("ServerListUI") << "onFastLoginComplete json parsed" << std::endl;
    }
}

void ServerListUI::on_request_error(const std::string& tag, const std::string& error) {
    RFBase::debug_stream("ServerListUI") << tag << " error=" << error << std::endl;
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
    RFBase::debug_stream("ServerListUI") << tag << " raw=" << response.raw_text << std::endl;

    auto rooms = parse_room_list(response);
    if (!rooms.has_value()) {
        RFBase::debug_stream("ServerListUI") << tag << " parse error: " << rooms.error() << std::endl;
        return;
    }

    auto begin_id = read_begin_id(response);
    if (begin_id.has_value()) {
        RFBase::debug_stream("ServerListUI") << tag << " beginid=" << begin_id.value() << std::endl;
    }
    RFBase::debug_stream("ServerListUI") << tag << " room_count=" << rooms->size() << std::endl;
    std::size_t idx = 0;
    for (const auto& room : rooms.value()) {
        RFBase::debug_stream("ServerListUI") << "room[" << idx << "] " << room.to_string() << std::endl;
        ++idx;
        if (idx >= 20) {
            RFBase::debug_stream("ServerListUI") << "... truncated" << std::endl;
            break;
        }
    }
}

boost::asio::awaitable<ServerListUI::result> ServerListUI::login_logic(
    WebSocketClient& web_socket_client,
    const UserData& user_data,
    const uint16_t room_id,
    const uint32_t ui_serial_num
) {
    const uint16_t selected_room_id = room_id == 0 ? static_cast<uint16_t>(user_data.rec_server_idx) : room_id;
    ServerInfo server_info{};
    server_info.uin = user_data.uin;
    server_info.session_key = user_data.get_session_key();
    server_info.skey = user_data.skey;
    server_info.pskey = user_data.pskey;
    server_info.room_id = selected_room_id;
    RFBase::debug_stream("ServerListUI") << "loginLogic roomID=" << selected_room_id
                                         << " uin=" << server_info.uin << std::endl;
    co_return co_await send_login_conn_data(web_socket_client, server_info, ui_serial_num);
}

boost::asio::awaitable<ServerListUI::result> ServerListUI::send_login_conn_data(
    WebSocketClient& web_socket_client,
    const ServerInfo& server_info,
    const uint32_t ui_serial_num
) {
    if (server_info.uin == 0) {
        co_return std::unexpected("ServerListUI: uin is empty");
    }
    if (server_info.session_key.empty()) {
        co_return std::unexpected("ServerListUI: session_key is empty");
    }
    if (server_info.room_id == 0) {
        co_return std::unexpected("ServerListUI: room_id is empty");
    }

    LoginDataProcessor processor{};
    ADF login_adf = processor.encode(server_info, ui_serial_num);
    co_await web_socket_client.send_adf_async(login_adf);
    RFBase::debug_stream("ServerListUI") << "sendLoginConnData cmd=T_LoginRoom roomID=" << server_info.room_id << std::endl;
    co_return result{};
}
