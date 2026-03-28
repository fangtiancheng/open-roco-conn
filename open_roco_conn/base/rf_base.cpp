#include "rf_base.hpp"
#include <boost/log/trivial.hpp>
#include <boost/log/utility/setup/console.hpp>
#include <boost/log/utility/setup/common_attributes.hpp>
#include <iostream>
#include <mutex>

namespace {
void init_boost_log_once() {
    static std::once_flag flag;
    std::call_once(flag, []() {
        boost::log::add_console_log(std::clog);
        boost::log::add_common_attributes();
    });
}
}

std::ostream& RFBase::debug_stream() {
    return RFBase::debug_stream(get_param2());
}

void RFBase::debug_line(const std::string& message) {
    RFBase::debug_line(get_param2(), message);
}

std::ostream& RFBase::debug_stream(const std::string_view tag) {
    init_boost_log_once();
    std::clog << '[' << tag << "] ";
    return std::clog;
}

void RFBase::debug_line(const std::string_view tag, const std::string& message) {
    init_boost_log_once();
    BOOST_LOG_TRIVIAL(debug) << '[' << tag << "] " << message;
}

void AngelDataInputJudge::i_angel_data_input_judge() {
    RFBase::debug_stream(constructor_name()) << "i am a IAngelDataInputJudge" << std::endl;
}
