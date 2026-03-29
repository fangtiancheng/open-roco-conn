#pragma once
#include "adf_protocol/adf.hpp"
#include "data_processor/i_data_processor.hpp"
#include "data_processor/i_mul_data_processor.hpp"
#include "data_processor/p_free_request.hpp"
#include <cstdint>
#include <optional>
#include <unordered_map>
#include <vector>

class AdfProcessor: public IDataProcessor, public IMulDataProcessor {
public:
    virtual ~AdfProcessor() = default;
};

class AdfProcessors {
public:
    void add(AdfProcessor* processor);
    void remove(AdfProcessor* processor);
    bool decode(ADF& adf);
    std::optional<ADF> encode(ByteArray payload, uint32_t cmd_type, uint32_t serial_num);
    std::optional<ADF> encode(P_FreeRequest& request, int32_t cmd_type, uint32_t serial_num);
    void clear();

private:
    std::unordered_map<uint32_t, AdfProcessor*> processors_{};
    std::unordered_map<uint32_t, P_FreeRequest*> free_procs_by_serial_{};
    std::unordered_map<uint32_t, P_FreeRequest*> free_procs_by_cmd_{};
};
