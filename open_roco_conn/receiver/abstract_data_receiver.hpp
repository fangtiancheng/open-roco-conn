#pragma once
#include "base/rf_base.hpp"
#include "adf_protocol/adf.hpp"
#include "event/angel_data_event.hpp"
#include "event/event_dispatcher.hpp"
#include <cstdint>
#include <deque>
#include <mutex>
#include <string_view>
#include <vector>

class AbstractDataReceiver: public RFBase {
public:
    const std::string_view get_param1() const override { return "0f4a8mG9jP2sQ6nR1xY7kLt"; }
    const std::string_view get_param2() const override { return "AbstractDataReceiver"; }

    virtual ~AbstractDataReceiver() = default;

    virtual void initialize(EventDispatcher* dispatcher);
    virtual void finalize();
    bool receive(uint32_t cmd_type);
    bool receive(const ADF& adf);
    std::vector<uint32_t> accept_types() const;
    void catch_try_send_data_error(uint32_t cmd_type, uint32_t tcp_id, int32_t error_code);

    struct send_request {
        uint32_t data_type = 0;
        bool has_ser_num = false;
        uint32_t ser_num = 0;
        std::vector<uint8_t> data{};
        AbstractDataReceiver* sender = nullptr;
    };

    void send_data_to_server(uint32_t data_type, std::vector<uint8_t> data = {});
    void send_data_with_ser_num(uint32_t data_type, std::vector<uint8_t> data = {}, uint32_t ser_num = 0);
    bool try_pop_send_request(send_request& out_request);

    // JS-aligned aliases.
    void sendDataToServer(uint32_t data_type, std::vector<uint8_t> data = {});
    void sendDataWithSerNum(uint32_t data_type, std::vector<uint8_t> data = {}, uint32_t ser_num = 0);

protected:
    EventDispatcher* dispatcher() const;
    virtual std::vector<uint32_t> get_accept_types() const = 0;
    virtual bool on_data_receive(uint32_t cmd_type, const ADF* adf) = 0;

private:
    bool accepts(uint32_t cmd_type) const;

    EventDispatcher* global_event_dist_ = nullptr;
    std::deque<send_request> send_queue_{};
    std::mutex send_queue_mutex_{};
};
