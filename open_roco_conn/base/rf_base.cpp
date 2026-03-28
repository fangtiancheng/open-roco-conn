#include "rf_base.hpp"
#include <boost/log/trivial.hpp>
#include <boost/log/utility/setup/console.hpp>
#include <boost/log/utility/setup/common_attributes.hpp>
#include <mutex>

namespace {
std::mutex g_debug_line_mutex{};

void init_boost_log_once() {
    static std::once_flag flag;
    std::call_once(flag, []() {
        boost::log::add_console_log(std::clog);
        boost::log::add_common_attributes();
    });
}
}

void RFBase::debug_line(const std::string& message) const {
    RFBase::debug_line(get_param2(), message);
}

void RFBase::debug_line(const std::string_view tag, const std::string& message) {
    init_boost_log_once();
    std::lock_guard<std::mutex> lock(g_debug_line_mutex);
    BOOST_LOG_TRIVIAL(debug) << '[' << tag << "] " << message;
}

void AngelDataInputJudge::i_angel_data_input_judge() {
    RFBase::debug_line(constructor_name(), "i am a IAngelDataInputJudge");
}
