#pragma once
#include "base/rf_base.hpp"
#include <string>

class GlobalAPI: public RFBase {
public:
    const std::string_view get_param1() override { return "c699fHKhURLeLlXXRjex2X3"; }
    const std::string_view get_param2() override { return "GlobalAPI"; }
    static long long get_timer();
    static std::string get_timer_format();
    static void init();
    static bool is_login();
    static void set_is_login(bool value);
//    a.gAngelSysAPI = void 0,
//    a.gAngelUISystem = void 0,
//    a.roleData = new RoleData(),
//    a.gAngelExternalManger = void 0,
//    a.gAngelAccessPermission = void 0,
};
