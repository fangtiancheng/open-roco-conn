#pragma once
#include "base/rf_base.hpp"
#include <cstdint>

class ADFCmdsType: public RFBase{
public:
    const std::string_view get_param1() override{return "6b257Sv0URPeZLzamNFG6RR";}
    const std::string_view get_param2() override{return "ADFCmdsType";}
    static constexpr uint32_t T_DIR_RECOMMEND_REQ = 458753;
    static constexpr uint32_t T_DIR_RECOMMEND_REPLY = 458754;
    static constexpr uint32_t T_DIR_RANGE_REQ = 458755;
    static constexpr uint32_t T_DIR_RANGE_REPLY = 458756;
    static constexpr uint32_t T_DIR_FAST_GETIN = 458757;
    static constexpr uint32_t T_DIR_INITIAL_COMPONENT = 459012;
    static constexpr uint32_t T_ROOM_INITIAL_COMPONENT = 65538;
    static constexpr uint32_t T_LoginRoom = 196609;
    static constexpr uint32_t T_GetRoleInfo = 196610;
    static constexpr uint32_t T_GetRoleList = 196611;
    static constexpr uint32_t T_ChangeScene = 196612;
    static constexpr uint32_t T_RoadPosSub = 196613;
    static constexpr uint32_t T_RoadPosBC = 196614;
    static constexpr uint32_t T_GetRoleGoods = 196615;
    static constexpr uint32_t T_GetRoleSkills = 196616;
    static constexpr uint32_t T_SkillUse = 196617;
    static constexpr uint32_t T_SkillUseBC = 196618;
    static constexpr uint32_t T_ChangeAvatar = 196619;
    static constexpr uint32_t T_SOneInfoChange = 196620;
    static constexpr uint32_t T_SOneInScene = 196621;
    static constexpr uint32_t T_SOneOutScene = 196622;
    static constexpr uint32_t T_StateDataChange = 196623;
    static constexpr uint32_t T_SceneAnyData = 196626;
    static constexpr uint32_t T_SceneAnyDataBC = 196627;
    static constexpr uint32_t T_CHAT = 196624;
    static constexpr uint32_t T_BROADCAST = 196625;
    static constexpr uint32_t T_PRIVATE_CHAT = 196640;
    static constexpr uint32_t T_GET_USER_DETAIL = 196629;
    static constexpr uint32_t T_MODIFY_NICKNAME = 196632;
    static constexpr uint32_t T_TASK_LIST = 655361;
    static constexpr uint32_t T_CONDITION_OK = 786688;
    static constexpr uint32_t T_HELLO = 196631;
    static constexpr uint32_t T_SIGNATURE_UPDATE = 196628;
    static constexpr uint32_t T_FG_JOIN = 327681;
    static constexpr uint32_t T_FG_QUIT = 327682;
    static constexpr uint32_t T_FG_BC = 327683;
    static constexpr uint32_t T_FG_GETALLUSERS = 327684;
    static constexpr uint32_t T_FG_RECBC = 327685;
    static constexpr uint32_t T_GAME_START = 196645;
    static constexpr uint32_t T_CHINESE_PROTECTION = 196644;
    static constexpr uint32_t T_GETITEMSBYTYPE = 196643;
    static constexpr uint32_t T_CTOWER_LEVEL = 196658;
    static constexpr uint32_t T_SPIRIT_BAG_DATA = 720906;
    static constexpr uint32_t T_SPIRIT_FOLLOW_USER = 720907;
    static constexpr uint32_t T_SWAP_SPIRITS = 720908;
    static constexpr uint32_t T_SPIRIT_USE_ITEM = 720911;
    static constexpr uint32_t T_ADD_TO_STORAGE = 720916;
    static constexpr uint32_t T_SPIRIT_INFO = 720918;
    static constexpr uint32_t T_SPIRIT_EXP_GET = 0x0B006E;
    static constexpr uint32_t T_SPIRIT_EXP_ALLOC = 0x0B006D;
    static constexpr uint32_t T_QUIZ_BOARD_ENTRY = 196646;
    static constexpr uint32_t T_QUIZ_BOARD_COMMITMENT = 196647;
    static constexpr uint32_t T_QUERY = 196656;
    static constexpr uint32_t T_SCENE_QUESTION = 196657;
    static constexpr uint32_t T_SPIRIT_REFLASH = 983044;
    static constexpr uint32_t T_LOAD_NPCVAL = 851971;
    static constexpr uint32_t T_UPDATE_NPCVAL = 851972;
    static constexpr uint32_t T_LOAD_SCENEDATA = 851969;
    static constexpr uint32_t T_UPDATE_SCENEDATA = 851970;
    static constexpr uint32_t T_SERVER_MSG = 720945;
    static constexpr uint32_t T_COMBAT_AWARD = 720946;
    static constexpr uint32_t T_SERVER_PUSH_ITEMS = 720992;
    static constexpr uint32_t T_SERVER_PUSH_SPIRIT = 720993;
    static constexpr uint32_t T_SERVER_PUSH_REFRESH_SPIRIT_TALENT = 720994;
    static constexpr uint32_t HOME_FRIEND_SIM_INFO = 1048577;
    static constexpr uint32_t HOME_FRIEND_INFO = 1048578;
    static constexpr uint32_t TYPE_PET_EGG_INFO = 721062;
    static constexpr uint32_t TYPE_SYSTEM_TIME = 196689;
    static constexpr uint32_t TYPE_COMBAT_END_PUSH = 196720;
    static constexpr uint32_t TYPE_BOSS_STATUS = 196723;
    static constexpr uint32_t TYPE_BOSS_AWARD = 196724;
    static constexpr uint32_t T_GUARDIANPET_QUERYUI = 205434;
    static constexpr uint32_t T_GUARDIANPET_QUERYINFO = 205435;
    static constexpr uint32_t T_GUARDIANPET_OPERA = 205437;
    static constexpr uint32_t T_GUARDIANPET_CHANGEAVATAR = 205438;
    static constexpr uint32_t T_GUARDIANPET_FOLLOW = 205440;
    static constexpr uint32_t T_GUARDIANPET_GETDAILYGIFT = 205439;
    static constexpr uint32_t T_GUARDIANPET_GUIDANCE = 205436;
};