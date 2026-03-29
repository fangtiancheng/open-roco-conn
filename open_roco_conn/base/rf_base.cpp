#include "rf_base.hpp"
#include <iostream>
#include <mutex>
#include <format>

namespace {
std::mutex g_debug_line_mutex{};
}

void RFBase::debug_line(const std::string& message) const {
    RFBase::debug_line(get_param2(), message);
}

void RFBase::debug_line(const std::string_view tag, const std::string& message) {
    std::lock_guard<std::mutex> lock(g_debug_line_mutex);
    std::clog << std::format("[{}] {}\n", tag, message);
}

void AngelDataInputJudge::i_angel_data_input_judge() {
    RFBase::debug_line(constructor_name(), "i am a IAngelDataInputJudge");
}
