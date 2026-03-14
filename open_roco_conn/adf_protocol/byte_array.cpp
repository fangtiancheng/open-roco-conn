#include "byte_array.hpp"

void ByteArray::allocate(size_t size) {
    _buffer.reserve(size);
}


