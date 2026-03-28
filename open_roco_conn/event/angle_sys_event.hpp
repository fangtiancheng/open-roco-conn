#pragma once
#include "base/rf_base.hpp"
#include <string_view>

class AngleSysEvent: public RFBase {
public:
    const std::string_view get_param1() const override { return "dc4f9SEt3dHXZkekUDL595B"; }
    const std::string_view get_param2() const override { return "AngleSysEvent"; }

    static constexpr std::string_view ON_SYS_EVENT = "onSystemEvent";
    static constexpr std::string_view LOGIN_OK = "loginOk";
    static constexpr std::string_view ON_SCENE_BUILT = "onSceneBuilt";
    static constexpr std::string_view ON_SCENE_DESTROY = "onSceneDestroy";
    static constexpr std::string_view ON_SCENEDATA_INIT = "onSceneDataInit";
    static constexpr std::string_view ON_CHANGE_SCENE = "onChangeScene";
    static constexpr std::string_view ON_SCENECMD_CALL = "onSceneCMDCall";
    static constexpr std::string_view ON_OPEN_WORLDMAP = "onWorldMap";
    static constexpr std::string_view ON_OPEN_GAME = "onExternalGame";
    static constexpr std::string_view ON_USER_INFO = "onUserInfo";
    static constexpr std::string_view ON_SPIRIT_BAG = "onSpiritBag";
    static constexpr std::string_view ON_PURCHASE = "onPurchase";
    static constexpr std::string_view ON_TASK_CALL = "onTaskV5";
    static constexpr std::string_view ON_OWL_CALL = "onOwl";
    static constexpr std::string_view ON_MAGIC_CALL = "onMagic";
    static constexpr std::string_view ON_OPEN_ASWIN = "onOpenAsWin";
    static constexpr std::string_view ON_OPEN_COMBAT = "onCombat";
    static constexpr std::string_view ON_OPEN_MULTI_COMBAT = "onMultiCombat";
    static constexpr std::string_view ON_RUN_SCRIPT = "onRunScript";
    static constexpr std::string_view ON_DISPLAY_EMBLEMS = "onEmblemsBoard";
    static constexpr std::string_view ON_TIMES_PAPER = "onTimesPaper";
    static constexpr std::string_view ON_BOSS_PANEL = "onBossPanel";
    static constexpr std::string_view ON_LOGIN_HOMESTEAD = "onHome";
    static constexpr std::string_view ON_INVITE_FRIEND = "onInviteFriend";
    static constexpr std::string_view ON_RIDDLEIS_LAND = "onRiddleIsland";
    static constexpr std::string_view ON_CHRISTMAS_TREE = "onChristmasTree";
    static constexpr std::string_view CMDLIS_NOT_FOUND = "cmdListenerNotFound";
    static constexpr std::string_view ON_LOGIN_MANOR = "onManor";
    static constexpr std::string_view ON_MOVIE_AD_TEMP = "onMovieAdTemp";
    static constexpr std::string_view ON_ACHIEVE_PANEL = "onAchievePanel";
    static constexpr std::string_view ON_GUARDIANPET = "onGuardianPet";
};

