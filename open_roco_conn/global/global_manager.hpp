#pragma once
#include "angle_main.hpp"
#include "base/rf_base.hpp"
#include "global/global_game_info.hpp"
#include "global/user_data.hpp"
#include <functional>
#include <memory>

class ReBirthDataProxy;

class GlobalManager: public RFBase {
public:
    const std::string_view get_param1() const override { return "d56d3OZXxBDBJxFb8CdNSqC"; }
    const std::string_view get_param2() const override { return "GlobalManager"; }
    ~GlobalManager() override;

    using hook = std::function<void()>;

    void set_on_start(hook callback);
    void set_on_after_loader(hook callback);
    void set_on_all_res_done(hook callback);

    void start();
    void on_config_done();
    void on_game_res_pkg_done();
    bool is_all_res_done() const;
    AngleMain* angle_main() const;
    void set_user_data(const UserData& data);
    const UserData& user_data() const;
    void set_global_game_info(GlobalGameInfo* info);
    GlobalGameInfo* global_game_info() const;
    void set_rebirth_data_proxy(ReBirthDataProxy* proxy);
    ReBirthDataProxy* rebirth_data_proxy() const;
    void set_mock_mode(bool value);
    bool mock_mode() const;

private:
    void check_res_done();

    bool config_done_ = false;
    bool game_res_pkg_done_ = false;
    hook on_start_;
    hook on_after_loader_;
    hook on_all_res_done_;
    bool mock_mode_ = false;
    GlobalGameInfo* global_game_info_ = nullptr;
    ReBirthDataProxy* rebirth_data_proxy_ = nullptr;
    UserData user_data_{};
    std::unique_ptr<AngleMain> angle_main_{};
};
