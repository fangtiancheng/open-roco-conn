#pragma once
#include "base/rf_base.hpp"
#include <cstdint>

class CombatType: public RFBase {
public:
    const std::string_view get_param1() const override { return "8f853oQxalGf5dDtBUkfqkU"; }
    const std::string_view get_param2() const override { return "CombatType"; }
    static constexpr int DEFAULT = 0;
    static constexpr int PVE = 1;
    static constexpr int PVB = 2;
    static constexpr int PVP = 3;
    static constexpr int PVH = 4;
    static constexpr int M_PVP = 5;
    static constexpr int PVZ = 6;
    static constexpr int B_PVB = 7;
    static constexpr int H_PVB = 8;
    static constexpr int PVT = 9;
    static constexpr int PVS = 11;
    static constexpr int EQ_PVE = 13;
    static constexpr int A_PVB = 14;
    static constexpr int Q_PVP_T = 15;
    static constexpr int Q_PVP = 16;
    static constexpr int L_PVP = 17;
    static constexpr int KING_FIGHT = 18;
    static constexpr int WAR_FIGHT = 19;
    static constexpr int STAR_FIGHT = 20;
    static constexpr int D_PVP = 21;
    static constexpr int MATCH_PVP = 22;
};
