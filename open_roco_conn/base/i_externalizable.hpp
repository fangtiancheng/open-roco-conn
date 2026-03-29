#pragma once

class ByteArray;

class IExternalizable {
public:
    virtual ~IExternalizable() = default;
    virtual void read_external(ByteArray& input) = 0;
    virtual void write_external(ByteArray& output) = 0;
};
