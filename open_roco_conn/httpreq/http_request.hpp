#pragma once
#include "base/rf_base.hpp"
#include <string>
#include <functional>
#include <map>

class HttpRequest: public RFBase {
public:
    std::map<std::string, void*> cache_i, cache_c;
    const std::string_view get_param1() override { return "7a8c9FTmUdDCbMymKSi36Rj"; }
    const std::string_view get_param2() override { return "HttpRequest"; }
    static constexpr std::string_view NO_NETWORK = "http_request_no_network";
    static constexpr std::string_view UNKNOWN_ERROR = "http_request_unknown_error";
    static constexpr std::string_view TIMEOUT = "http_request_timout";
    std::string server = "127.0.0.1";
    int64_t timeout = 2e3;
    void send_request(const std::string& url,
                      const std::map<std::string, std::string>& params,
                      bool post_or_get,
                      std::function<void(const std::string&)> response_callback,
                      std::function<void(int, const std::string&)> error_callback,
                      int64_t timeout = 0
                      );
};