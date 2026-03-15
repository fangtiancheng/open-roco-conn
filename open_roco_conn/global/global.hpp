#include "base/rf_base.hpp"

class Global: public RFBase {
public:
    const std::string_view get_param1() override { return "168824xc95FyppiQuDfyHoW"; }
    const std::string_view get_param2() override { return "global"; }
};