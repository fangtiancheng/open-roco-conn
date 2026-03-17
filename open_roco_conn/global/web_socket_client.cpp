#include "web_socket_client.hpp"
#include <iostream>

void WebSocketClient::connect(const std::string &url) {
    std::cout << "tcp reconnect WebSocketClient\n"
              << "connect : " << _name << std::endl;

}
