#include "global/game_launch.hpp"
#include <iostream>
#include <map>
#include <string>

int main() {
    std::map<std::string, std::string> mock_cookie_map{
        {"angel_uin", "uin=100123456"},
        {"angel_key", "mock_session_key_abc"},
        {"skey", "mock_skey_123"},
        {"pskey", "mock_pskey_456"}
    };

    auto& launch = GameLaunch::instance();
    auto& manager = launch.global_manager();
    manager.set_mock_mode(true);
    manager.set_on_start([]() {
        std::cout << "[MockChain] GlobalManager::start" << std::endl;
    });
    manager.set_on_after_loader([&manager]() {
        std::cout << "[MockChain] GlobalManager::afterLoader" << std::endl;
        const auto* angle_main = manager.angle_main();
        if (angle_main == nullptr) {
            std::cout << "[MockChain] AngleMain is null" << std::endl;
            return;
        }
        const auto& data = angle_main->user_data();
        std::cout << "[MockChain] AngleMain received UserData:"
                  << " uin=" << data.uin
                  << " sessionKey=" << data.get_session_key()
                  << " skey=" << data.skey
                  << " pskey=" << data.pskey
                  << " isLoginIn=" << (data.is_login_in ? "true" : "false")
                  << std::endl;
    });
    manager.set_on_all_res_done([]() {
        std::cout << "[MockChain] GlobalManager::allResDone" << std::endl;
    });

    launch.launch(mock_cookie_map);
    const auto& launch_data = launch.user_data();
    std::cout << "[MockChain] GameLaunch parsed UserData:"
              << " uin=" << launch_data.uin
              << " sessionKey=" << launch_data.get_session_key()
              << " skey=" << launch_data.skey
              << " pskey=" << launch_data.pskey
              << " isLoginIn=" << (launch_data.is_login_in ? "true" : "false")
              << std::endl;

    // Mock resource pipeline completion, aligned with JS flow:
    // config done + game res package done => create/start AngelMain.
    launch.notify_config_done();
    launch.notify_game_res_pkg_done();

    if (auto* angle_main = manager.angle_main(); angle_main != nullptr) {
        angle_main->finalize();
    }
    manager.start();

    return 0;
}
