#pragma once
#include <string_view>

enum class EventKey {
    tcp_conn_connected,
    tcp_conn_closed,
    tcp_conn_error,
    tcp_conn_timeout,
    tcp_conn_on_adf,
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
        case EventKey::timer:
            return "TimerEvent.Timer";
        case EventKey::timer_complete:
            return "TimerEvent.TimerComplete";
        case EventKey::scene_data_init:
            return "onSceneDataInit";
    }
    return "";
}
