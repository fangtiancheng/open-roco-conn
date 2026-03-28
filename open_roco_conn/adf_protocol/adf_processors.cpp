#include "adf_processors.hpp"

#include <algorithm>

void AdfProcessors::add(AdfProcessor* processor) {
    if (processor == nullptr) {
        return;
    }
    for (const auto cmd_type : processor->cmd_types()) {
        processors_[cmd_type] = processor;
    }
}

void AdfProcessors::remove(AdfProcessor* processor) {
    if (processor == nullptr) {
        return;
    }
    for (auto it = processors_.begin(); it != processors_.end();) {
        if (it->second == processor) {
            it = processors_.erase(it);
            continue;
        }
        ++it;
    }
}

bool AdfProcessors::decode(ADF& adf) const {
    auto it = processors_.find(adf.head.cmd_id);
    if (it == processors_.end() || it->second == nullptr) {
        return true;
    }
    return it->second->decode(adf);
}

std::optional<ADF> AdfProcessors::encode(
    const std::vector<uint8_t>& payload,
    const uint32_t cmd_type,
    const uint32_t serial_num
) const {
    auto it = processors_.find(cmd_type);
    if (it != processors_.end() && it->second != nullptr) {
        if (auto adf = it->second->encode(payload, cmd_type, serial_num); adf.has_value()) {
            return adf;
        }
    }

    ADF adf{};
    adf.head.cmd_id = cmd_type;
    adf.head.ui_serial_num = serial_num;
    adf.body.allocate(payload.size());
    for (const auto byte : payload) {
        adf.body.write_unsigned_byte(byte);
    }
    adf.body.reset();
    return adf;
}
