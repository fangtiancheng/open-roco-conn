#pragma once
#include "base/rf_base.hpp"
#include "global_game_info.hpp"
#include <boost/asio/awaitable.hpp>
#include <string_view>

class GameApp: public RFBase {
public:
    const std::string_view get_param1() const override { return "821339EiHxN4aa0oTcepcxt"; }
    const std::string_view get_param2() const override { return "GameApp"; }

    enum class NextStep {
        none = 0,
        login = 1,
        server_list = 2
    };

    boost::asio::awaitable<void> on_all_res_done(const GlobalGameInfo& global_game_info);
    NextStep next_step() const;
    void reset();

private:
    NextStep next_step_ = NextStep::none;
};
