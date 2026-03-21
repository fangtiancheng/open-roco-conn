#include "byte_buffer.hpp"

void ByteBuffer::allocate(size_t i) {
    ByteArray::allocate(i);
    limit_capacity = i;
    position = 0;
}

int64_t ByteBuffer::limit() const {
    return limit_capacity;
}

size_t ByteBuffer::bufflen() const {
    if (limit_capacity == -1) {
        return bytes_available();
    } else {
        return limit_capacity - position;
    }
}

ByteArray ByteBuffer::copy_to_byte_array() {
    ByteArray t;
    position = 0;
    throw 1;// TODO
    // t.write_bytes(*this);
    // t.position = 0;
    return t;
}
