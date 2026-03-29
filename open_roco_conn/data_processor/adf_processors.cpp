#include "adf_processors.hpp"

#include <algorithm>
#include <utility>

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

bool AdfProcessors::decode(ADF& adf) {
    const uint32_t cmd_type = adf.head.cmd_id;
    const uint32_t serial_num = adf.head.ui_serial_num;

    auto mapped_it = processors_.find(cmd_type);
    const bool has_mapped_proc = (mapped_it != processors_.end() && mapped_it->second != nullptr);
    const bool has_serial_free_proc = serial_num != 0 && free_procs_by_serial_.contains(serial_num);

    if (!has_mapped_proc || has_serial_free_proc) {
        P_FreeRequest* free_proc = nullptr;
        if (serial_num != 0) {
            if (auto it = free_procs_by_serial_.find(serial_num); it != free_procs_by_serial_.end()) {
                free_proc = it->second;
                free_procs_by_serial_.erase(it);
            }
        }
        if (free_proc == nullptr) {
            if (auto it = free_procs_by_cmd_.find(cmd_type); it != free_procs_by_cmd_.end()) {
                free_proc = it->second;
                free_procs_by_cmd_.erase(it);
            }
        }
        if (free_proc != nullptr) {
            adf.body = free_proc->decode(adf);
        }
        return true;
    }
    return mapped_it->second->decode(adf);
}

std::optional<ADF> AdfProcessors::encode(
    ByteArray payload,
    const uint32_t cmd_type,
    const uint32_t serial_num
) {
    auto it = processors_.find(cmd_type);
    if (it != processors_.end() && it->second != nullptr) {
        payload.reset();
        std::vector<uint8_t> bytes{};
        bytes.reserve(payload.length());
        while (payload.bytes_available() > 0) {
            bytes.push_back(payload.read_unsigned_byte());
        }
        if (auto adf = it->second->encode(bytes, cmd_type, serial_num); adf.has_value()) {
            adf->head.ui_serial_num = serial_num;
            return adf;
        }
    }

    ADF adf{};
    adf.head.cmd_id = cmd_type;
    adf.head.ui_serial_num = serial_num;
    payload.reset();
    while (payload.bytes_available() > 0) {
        adf.body.write_unsigned_byte(payload.read_unsigned_byte());
    }
    adf.body.reset();
    return adf;
}

std::optional<ADF> AdfProcessors::encode(P_FreeRequest& request, const int32_t cmd_type, const uint32_t serial_num) {
    const int32_t resolved_cmd = (cmd_type < 0) ? request.cmd_id : cmd_type;
    if (resolved_cmd < 0) {
        return std::nullopt;
    }
    if (serial_num != 0) {
        request.serial_num = serial_num;
        free_procs_by_serial_[serial_num] = &request;
    } else {
        free_procs_by_cmd_[static_cast<uint32_t>(resolved_cmd)] = &request;
    }
    return request.encode(resolved_cmd);
}

void AdfProcessors::clear() {
    processors_.clear();
    free_procs_by_serial_.clear();
    free_procs_by_cmd_.clear();
}
