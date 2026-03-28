#pragma once
#include "base/rf_base.hpp"
#include <cstdint>


class NetDefine: public RFBase{
public:
    const std::string_view get_param1() const override{return "3d390sj3CpG1a9S/FMnfg3f";}
    const std::string_view get_param2() const override{return "NetDefine";}
    static constexpr inline uint32_t GET_SPIRIT_LIST = 720999;
    static constexpr inline uint32_t GET_DETAIL_INFO = 720914;
    static constexpr inline uint32_t ADD_TO_BAG = 720915;
    static constexpr inline uint32_t RELEASE_SPIRIT = 720917;
    static constexpr inline uint32_t PUTOUT_TO_HOME = 720979;
    static constexpr inline uint32_t PUTOUT_TO_FARM = 721411;

};