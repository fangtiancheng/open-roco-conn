#pragma once
#include "adf_protocol/adf.hpp"
#include <cstdint>
#include <optional>
#include <unordered_map>
#include <vector>

class AdfProcessor {
public:
    virtual ~AdfProcessor() = default;
    virtual std::vector<uint32_t> cmd_types() const = 0;
    virtual bool decode(ADF& adf) = 0;
    virtual std::optional<ADF> encode(const std::vector<uint8_t>& payload, uint32_t cmd_type, uint32_t serial_num) = 0;
};

class AdfProcessors {
public:
    void add(AdfProcessor* processor);
    void remove(AdfProcessor* processor);
    bool decode(ADF& adf) const;
    std::optional<ADF> encode(const std::vector<uint8_t>& payload, uint32_t cmd_type, uint32_t serial_num) const;

private:
    std::unordered_map<uint32_t, AdfProcessor*> processors_{};
};
