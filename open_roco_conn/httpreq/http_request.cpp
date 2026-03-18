#include "http_request.hpp"
#include <boost/beast.hpp>
#include <boost/url.hpp>

namespace urls = boost::urls;
void
HttpRequest::send_request(const std::string &endpoint,
                          const std::map<std::string, std::string> &params,
                          bool post_or_get,
                          std::function<void(const std::string &)> response_callback,
                          std::function<void(int, const std::string&)> error_callback,
                          int64_t timeout) {
    if(timeout == 0) timeout = this->timeout;
    if(!endpoint.empty()) {
        if (error_callback) error_callback(-1, "请求地址不能为空");
        return;
    }
    urls::url url;
    if (endpoint.size() >= 4 && endpoint.substr(0, 4) == "http") {
        url = urls::url(endpoint);
    } else {
//        urls::resolve(urls::url(server+"/"), endpoint, url);
    }
}
