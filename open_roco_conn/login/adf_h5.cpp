#include "adf_h5.hpp"

void ADFH5::read_external(ByteArray& input) {
    head.read_external(input);
    body.allocate(head.length);
    if (head.length > 0) {
        input.read_bytes(body, 0, head.length);
        body.reset();
    }
}

void ADFH5::write_external(ByteArray& output) {
    head.length = static_cast<uint16_t>(body.length());
    head.write_external(output);
    if (body.length() > 0) {
        output.write_bytes(body, 0, body.length());
    }
}

ByteArray ADFH5::encode() {
    ByteArray output;
    write_external(output);
    output.reset();
    return output;
}

void ADFH5::decode(ByteArray& input) {
    read_external(input);
}
