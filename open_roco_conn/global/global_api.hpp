#pragma once
#include "base/rf_base.hpp"
#include "person/role_data.hpp"
#include <optional>
#include <string>

class GlobalAPI: public RFBase {
public:
    const std::string_view get_param1() const override { return "c699fHKhURLeLlXXRjex2X3"; }
    const std::string_view get_param2() const override { return "GlobalAPI"; }
    static long long get_timer();
    static std::string get_timer_format();
    void init();
    bool is_login() const;
    void set_is_login(bool value);

    struct WantToScene {
        uint16_t scene_id = 0;
        uint16_t scene_version = 0;
    };

    void set_main_role_info(const RoleData& role_data);
    std::optional<RoleData> get_main_role_info() const;
    void clear_main_role_info();

    void set_want_to_scene(uint16_t scene_id, uint16_t scene_version);
    std::optional<WantToScene> get_want_to_scene() const;
    void clear_want_to_scene();
//    a.gAngelSysAPI = void 0,
//    a.gAngelUISystem = void 0,
//    a.roleData = new RoleData(),
//    a.gAngelExternalManger = void 0,
//    a.gAngelAccessPermission = void 0,

private:
    bool is_login_ = false;
    std::optional<RoleData> main_role_info_{};
    std::optional<WantToScene> want_to_scene_{};
};
