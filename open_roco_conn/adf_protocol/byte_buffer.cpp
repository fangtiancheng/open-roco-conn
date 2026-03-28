#include "byte_buffer.hpp"

void ByteBuffer::allocate(size_t i) {
    ByteArray::allocate(i);
    limit_capacity = i;
    _byte_offset = 0;
}

int64_t ByteBuffer::limit() const {
    return limit_capacity;
}

size_t ByteBuffer::bufflen() const {
    if (limit_capacity == -1) {
        return bytes_available();
    }
    return limit_capacity > static_cast<int64_t>(_byte_offset)
               ? static_cast<size_t>(limit_capacity - static_cast<int64_t>(_byte_offset))
               : 0;
}

ByteArray ByteBuffer::copy_to_byte_array() {
    ByteArray out;
    const size_t old_position = _byte_offset;
    _byte_offset = 0;
    out.write_bytes(*this, 0, _length);
    _byte_offset = old_position;
    out.reset();
    return out;
}

void ByteBuffer::fill(ByteArray& source) {
    if (limit_capacity == 0) {
        return;
    }

    const size_t fill_len = limit_capacity < 0 ? source.bytes_available()
                                               : static_cast<size_t>(limit_capacity);
    source.read_bytes(*this, 0, fill_len);
    _byte_offset = 0;
}
