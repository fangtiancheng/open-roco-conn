#include "define.hpp"
#include <regex>


std::string Define::addVersion(const std::string& t) {
    std::string r = t;
    std::string v(ANGEL_VERSION);
    if (r.find('?') == std::string::npos) {
        r += "?" + v;
    } else {
        r += "&" + v;
    }
    return r;
}

std::string Define::addHttps(const std::string& t) {
    if (t.empty()) return t;
    if (PROTOCOL_VERSION == "https" && t.find("http://") == 0) {
        return std::regex_replace(t, std::regex("^http://"), "https://");
    }
    return t;
}

