#pragma once
#include "adf_protocol/adf.hpp"
#include <cstdint>
#include <optional>
#include <vector>

class IDataProcessor {
public:
    virtual ~IDataProcessor() = default;
    virtual bool decode(ADF& adf) = 0;
    virtual std::optional<ADF> encode(const std::vector<uint8_t>& payload, uint32_t cmd_type, uint32_t serial_num) = 0;
};

