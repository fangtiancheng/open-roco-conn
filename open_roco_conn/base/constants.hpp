#pragma once
#include "rf_base.hpp"
#include <string_view>


class Constants: public RFBase{
public:
    const std::string_view get_param1() override{return "6f97e474aVNjaDxUZKejIaq";};
    const std::string_view get_param2() override{return "Constants";};
    static constexpr std::string_view SO_DATA = "localDataProxy";
    static constexpr std::string_view REMOTE_DATA = "remoteDataProxy";
    static constexpr std::string_view ROLE_DATA = "roleDataProxy";
    static constexpr std::string_view NEWBIE_GUIDE_DATA = "newbieGuideDataProxy";
    static constexpr std::string_view MAGIC_DATA = "magicSkillDataProxy";
    static constexpr std::string_view ITEM_DATA = "itemDataProxy";
    static constexpr std::string_view SPIRIT_DATA = "spiritDesProxy";
    static constexpr std::string_view GUARDIANPET_DATA = "guardianPetDesProxy";
    static constexpr std::string_view GUARDIANPET_VIPAVATAR_DATA = "guardianPetVipAvatarDesProxy";
    static constexpr std::string_view SSKILL_DATA = "sskillDesProxy";
    static constexpr std::string_view SEQUIP_DES_DATA = "sequipDesProxy";
    static constexpr std::string_view SEQUIP_INFO_DATA = "sequipInfoProxy";
    static constexpr std::string_view DAZZLE_DRESS_DATA = "dazzleDressData";
    static constexpr std::string_view DAZZLE_DRESS_DATA_SET = "dazzleDressDataSet";
    static constexpr std::string_view SCENE_DATA = "sceneConfProxy";
    static constexpr std::string_view MAIN_ROLE_INFO = "mainRoleInfo";
    static constexpr std::string_view CONFS = "confs";
    static constexpr std::string_view SYS_RES = "systemResAdapter";
    static constexpr std::string_view AVATAR_RES = "avatarResAdapter";
    static constexpr std::string_view MOUNT_RES = "mountResAdapter";
    static constexpr std::string_view MAGIC_AREA_RES = "magicAreaResAdapter";
    static constexpr std::string_view SCENE_RES = "sceneResAdapter";
    static constexpr std::string_view GUARDIANPET_RES = "guardianPetResAdapter";
    static constexpr std::string_view COMBAT_RES = "combatResAdapter";
    static constexpr std::string_view SMALL_RES = "smallRes";
    static constexpr std::string_view EGG_LAYING_RES = "eggLayingRes";
    static constexpr std::string_view WANT_TO_SCENE = "wantToScene";
    static constexpr std::string_view PRE_SCENE = "previousScene";
    static constexpr std::string_view CUR_SCENE = "currentScene";
    static constexpr std::string_view CUR_SERVER_INFO = "currentServerInfo";
    static constexpr std::string_view TASK_LIST_DATA = "taskListData";
    static constexpr std::string_view STORY_LIST_DATA = "storyListData";
    static constexpr std::string_view MANOR_SEED_DATA = "manorSeedData";
    static constexpr std::string_view ACHIEVE_LIST_DATA = "achieve_list_data";
    static constexpr std::string_view CUR_NPC_DIALOG = "currentOpendNpcDialog";
    static constexpr std::string_view FURNITURE_LIST_DATA = "furniture_list_data";
    static constexpr std::string_view DRESSUP_LIST_DATA = "dressup_list_data";
    static constexpr std::string_view LADDER_MATCH_DATA = "ladderMatchProxy";
};
