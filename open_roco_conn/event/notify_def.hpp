#pragma once
#include "adf_protocol/adf.hpp"
#include "adf_protocol/adf_head.hpp"
#include "event/base_event.hpp"
#include <memory>
#include <optional>
#include <vector>

struct NetNotifyPayload {
    std::vector<uint8_t> raw_bytes{};
    std::optional<ADFHead> head{};
    std::shared_ptr<const ADF> adf{};
    const void* sender = nullptr;
    bool is_send = false;
    bool is_protobuf = false;
};

class NotifyDef: public BaseEvent {
public:
    static constexpr uint32_t CB_ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA = 196609;
    static constexpr uint32_t CB_ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA = 196613;
    static constexpr uint32_t CB_ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA = 196614;
    static constexpr uint32_t CB_ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA = 196618;
    static constexpr uint32_t CB_ANGEL_NET_ON_GET_A_RAW_DATA = 196624;
    static constexpr uint32_t CB_ANGEL_NET_ON_SEND_A_RAW_DATA = 196629;

    static constexpr std::string_view NN_V_PRELOAD = "NotifyDef.PreloadRes";
    static constexpr std::string_view ON_COMBAT_RES_PRELOAD_DONE = "NotifyDef.ON_COMBAT_RES_PRELOAD_DONE";
    static constexpr std::string_view MAIN_UI_SPIRIT_DISPLAY_CHANGED = "NotifyDef.MAIN_UI_SPIRIT_DISPLAY_CHANGED";
    static constexpr std::string_view MAIN_UI_DIAMOND_CHANGED = "NotifyDef.MAIN_UI_DIAMOND_CHANGED";
    static constexpr std::string_view MAIN_UI_UPDATE_DIAMOND = "NotifyDef.MAIN_UI_UPDATE_DIAMOND";
    static constexpr std::string_view MAIN_UI_GUARDIANPET_DISPLAY_CHANGED = "NotifyDef.MAIN_UI_GUARDIANPET_DISPLAY_CHANGED";
    static constexpr std::string_view SPIRIT_BAG_UPDATE = "NotifyDef.SPIRIT_BAG_UPDATE";

    static constexpr std::string_view ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA = "NotifyDef.ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA";
    static constexpr std::string_view ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA = "NotifyDef.ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA";
    static constexpr std::string_view ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA = "NotifyDef.ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA";
    static constexpr std::string_view ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA = "NotifyDef.ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA";
    static constexpr std::string_view ANGEL_NET_ON_GET_A_RAW_DATA = "NotifyDef.ANGEL_NET_ON_GET_A_RAW_DATA";
    static constexpr std::string_view ANGEL_NET_ON_SEND_A_RAW_DATA = "NotifyDef.ANGEL_NET_ON_SEND_A_RAW_DATA";

    NotifyDef() = default;
    explicit NotifyDef(std::string type, bool bubbles = false);
    NotifyDef(std::string type, std::shared_ptr<NetNotifyPayload> payload, bool bubbles = false);

    const NetNotifyPayload* payload() const;
    std::shared_ptr<NetNotifyPayload> payload_ptr() const;
    void set_payload(std::shared_ptr<NetNotifyPayload> payload);

    std::unique_ptr<BaseEvent> clone() const override;

private:
    std::shared_ptr<NetNotifyPayload> payload_{};
};
