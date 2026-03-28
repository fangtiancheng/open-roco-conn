#pragma once
#include "event/base_event.hpp"
#include <cstdint>
#include <memory>
#include <string_view>

class ADF;

class AngelDataEvent: public BaseEvent {
public:
    const std::string_view get_param1() const override { return "df6a0YlQ9NKM7Zel9ab829O"; }
    const std::string_view get_param2() const override { return "AngelDataEvent"; }

    static constexpr std::string_view TRYSENDADF = "trySendADF";
    static constexpr std::string_view RECEIVEADF = "receiveADF";

    AngelDataEvent() = default;
    explicit AngelDataEvent(std::string type, bool bubbles = false);

    uint32_t tcp_id = static_cast<uint32_t>(-1);
    bool has_ser_num = false;
    uint32_t data_type = 0;

    const ADF* get_adf() const;
    void set_adf(std::shared_ptr<ADF> adf);

    std::unique_ptr<BaseEvent> clone() const override;

private:
    std::shared_ptr<ADF> adf_{};
};

