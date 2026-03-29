#pragma once
#include "data_processor/p_free_request.hpp"
#include <string_view>

class P_FreeRequest2: public P_FreeRequest {
public:
    const std::string_view get_param1() const override { return "77572jH2ZlCGay5flxFOyZ2"; }
    const std::string_view get_param2() const override { return "P_FreeRequest2"; }

    explicit P_FreeRequest2(int32_t cmd_id = -1,
                            ByteArray data = ByteArray{},
                            decode_callback handler = {});
};
