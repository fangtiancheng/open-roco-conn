#pragma once
#include "base/rf_base.hpp"
#include <functional>

class AngleMain: public RFBase {
public:
    const std::string_view get_param1() override { return "2eed9bO4G9B7K1RA/KD/KcW"; }
    const std::string_view get_param2() override { return "AngleMain"; }

    using hook = std::function<void()>;

    void set_on_initialize(hook callback);
    void set_on_logined(hook callback);
    void set_on_network_closed(hook callback);
    void set_on_refresh_html(hook callback);

    void initialize();
    void on_logined();
    void on_system_net_closed();
    void reflash_html();
    void set_render(bool value);
    bool get_is_render() const;
    bool is_initialized() const;
    void finalize();

private:
    bool initialized_ = false;
    bool is_render_ = true;
    hook on_initialize_;
    hook on_logined_;
    hook on_network_closed_;
    hook on_refresh_html_;
};
