#pragma once
#include <cstdint>
#include <vector>

class IMulDataProcessor {
public:
    virtual ~IMulDataProcessor() = default;
    virtual std::vector<uint32_t> cmd_types() const = 0;
};

