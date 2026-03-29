#pragma once
#include <string_view>

enum class EventKey {
    tcp_conn_connected,
    tcp_conn_closed,
    tcp_conn_error,
    tcp_conn_timeout,
    tcp_conn_on_adf,
    try_send_adf,
    net_state_change,
    login_ok,
    notify_on_get_socket_raw_data,
    notify_on_send_socket_raw_data,
    notify_on_get_protobuf_raw_data,
    notify_on_send_protobuf_raw_data,
    notify_on_get_raw_data,
    notify_on_send_raw_data,
    timer,
    timer_complete,
    scene_data_init
};

inline constexpr std::string_view to_string(const EventKey key) {
    switch (key) {
        case EventKey::tcp_conn_connected:
            return "tcpConnConnected";
        case EventKey::tcp_conn_closed:
            return "tcpConnClosed";
        case EventKey::tcp_conn_error:
            return "tcpConnError";
        case EventKey::tcp_conn_timeout:
            return "tcpConnTimeOut";
        case EventKey::tcp_conn_on_adf:
            return "tcpConnOnADF";
        case EventKey::try_send_adf:
            return "trySendADF";
        case EventKey::net_state_change:
            return "onStateChange";
        case EventKey::login_ok:
            return "loginOk";
        case EventKey::notify_on_get_socket_raw_data:
            return "NotifyDef.ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA";
        case EventKey::notify_on_send_socket_raw_data:
            return "NotifyDef.ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA";
        case EventKey::notify_on_get_protobuf_raw_data:
            return "NotifyDef.ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA";
        case EventKey::notify_on_send_protobuf_raw_data:
            return "NotifyDef.ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA";
        case EventKey::notify_on_get_raw_data:
            return "NotifyDef.ANGEL_NET_ON_GET_A_RAW_DATA";
        case EventKey::notify_on_send_raw_data:
            return "NotifyDef.ANGEL_NET_ON_SEND_A_RAW_DATA";
        case EventKey::timer:
            return "TimerEvent.Timer";
        case EventKey::timer_complete:
            return "TimerEvent.TimerComplete";
        case EventKey::scene_data_init:
            return "onSceneDataInit";
    }
    return "";
}
