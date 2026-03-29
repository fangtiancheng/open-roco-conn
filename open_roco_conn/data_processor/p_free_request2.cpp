#include "data_processor/p_free_request2.hpp"
#include <utility>

P_FreeRequest2::P_FreeRequest2(const int32_t cmd_id, ByteArray data, decode_callback handler)
    : P_FreeRequest(cmd_id, std::move(data), std::move(handler)) {
}
