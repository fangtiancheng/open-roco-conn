#include "spirit_properties.hpp"

std::string SpiritProperties::to_string(const SpiritProperties::SpiritProperty &sp) {
    return "pa:" + std::to_string(sp.pa) +
           "pd:" + std::to_string(sp.pd) +
           "ma:" + std::to_string(sp.ma) +
           "md:" + std::to_string(sp.md) +
           "ve:" + std::to_string(sp.ve) +
           "sp:" + std::to_string(sp.sp) +
           "dp:" + std::to_string(sp.dp) +
           "crit:" + std::to_string(sp.crit);
}
