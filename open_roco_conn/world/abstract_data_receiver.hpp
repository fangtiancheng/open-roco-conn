#pragma once
#include "base/rf_base.hpp"
#include "event/event_dispatcher.hpp"
#include <cstdint>
#include <string_view>
#include <vector>

class AbstractDataReceiver: public RFBase {
public:
    const std::string_view get_param1() const override { return "0f4a8mG9jP2sQ6nR1xY7kLt"; }
    const std::string_view get_param2() const override { return "AbstractDataReceiver"; }

    virtual ~AbstractDataReceiver() = default;

    void initialize(EventDispatcher* dispatcher);
    bool receive(uint32_t cmd_type);

protected:
    EventDispatcher* dispatcher() const;
    virtual std::vector<uint32_t> get_accept_types() const = 0;
    virtual bool on_data_receive(uint32_t cmd_type) = 0;

private:
    bool accepts(uint32_t cmd_type) const;

    EventDispatcher* global_event_dist_ = nullptr;
};
