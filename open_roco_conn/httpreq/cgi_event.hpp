#pragma once

#include "base/rf_base.hpp"
#include <boost/json.hpp>
#include <map>
#include <optional>
#include <string>
#include <string_view>

class CgiEvent: public RFBase {
public:
    const std::string_view get_param1() override { return "e202cswgKBDxKtnvHPnrAy6"; }
    const std::string_view get_param2() override { return "CGIEvent"; }

    static constexpr std::string_view GOT_ERROR = "CGIEvent.goterror";
    static constexpr std::string_view COMPLETE = "CGIEvent.COMPLETE";

    std::string type{};
    std::string msg{};
    std::string send_type{};
    std::map<std::string, std::string> send_data{};
    std::string raw_text{};
    std::optional<boost::json::value> data{};
};
