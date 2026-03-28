#pragma once
#include <string>
#include <cstdint>
#include "rf_base.hpp"
using point_t = std::pair<int16_t, int16_t>;

class Define: public RFBase{
public:
    const std::string_view get_param1() const override{return "eb281h8zFBPKb2M3ZNLIU0k";}
    const std::string_view get_param2() const override{return "Define";}

    inline static constexpr bool IS_DEBUG = true;
    inline static constexpr std::string_view ANGEL_VERSION = "0.1";
    inline static constexpr std::string_view AVATAR_VERSION = "0.1";
    inline static constexpr std::string_view TIMES_VERSION = "20100506";
    inline static constexpr std::string_view SPIRIT_VER = "0.1";
    inline static constexpr std::string_view SPIRIT_SKILL_VER = "0.1";
    inline static constexpr std::string_view TASK_VER = "0.1";
    inline static constexpr std::string_view HOMESTEAD_VER = "0.1";

    inline static constexpr std::string_view MAGIC_RES_ROOT = "https://res.17roco.qq.com/res/magic/";
    inline static constexpr std::string_view SCENE_RES_ROOT = "https://res.17roco.qq.com/res/scene/";
    inline static constexpr std::string_view ITEM_RES_ROOT = "https://res.17roco.qq.com/res/item/";
    inline static constexpr std::string_view TASK_RES_ROOT = "https://res.17roco.qq.com/res/task2/";
    inline static constexpr std::string_view AVATAR_PREV_ROOT = "https://res.17roco.qq.com/res/avatar/";
    inline static constexpr std::string_view AVATAR_ROOT = "";
    inline static constexpr std::string_view DAZZLE_DRESS_RES_ROOT = "https://res.17roco.qq.com/res/avatar_new/";
    inline static constexpr std::string_view DAZZLE_MOUNT_RES_ROOT = "https://res.17roco.qq.com/res/avatar_new/20/";
    inline static constexpr std::string_view CGI_ROOT = "https://17roco.qq.com/cgi-bin/";
    inline static constexpr std::string_view FASTCGI_ROOT = "https://web2.17roco.qq.com/fcgi-bin/";
    inline static constexpr std::string_view FPS_LOG = "uin=001;time=;scene=";
    inline static constexpr std::string_view PLUGIN_ROOT = "https://res.17roco.qq.com/plugins/";
    inline static constexpr std::string_view COMM_ROOT = "https://res.17roco.qq.com/";
    inline static constexpr std::string_view NPC_RES_ROOT = "https://res.17roco.qq.com/res/npc/";
    inline static constexpr std::string_view H5_RES_ROOT = "https://res.17roco.qq.com/res/h5/";
    inline static constexpr std::string_view CDN = "https://res.17roco.qq.com/h5/cdn/";
    inline static constexpr std::string_view FLASH_CDN = "https://res.17roco.qq.com/conf/";
    inline static constexpr uint16_t POLICYPORT = 843;
    inline static constexpr std::string_view CHARSET = "gb2312";
    inline static constexpr int L_NICKNAME = 16;
    inline static constexpr int L_SESSIONKEY = 64;
    inline static constexpr int L_ROOMNAME = 16;
    inline static constexpr int AVATAR_MIN_NUM = 15;
    inline static constexpr int AVATAR_DELAY = 2000;
    inline static constexpr uint8_t SET_AVATA_VISIBLE = 1;
    inline static constexpr std::string_view USER_AGENT = "open_roco_conn";

    inline static constexpr std::string_view PROTOCOL_VERSION = "https";

    static std::string addVersion(const std::string& t);
    static std::string addHttps(const std::string& t);

};

#define  DEBUG_PRINT printf("%s:%d\n",__FILE__,__LINE__);
