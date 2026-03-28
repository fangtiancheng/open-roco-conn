#include "adf.hpp"

void ADF::read_external(ByteArray &t) {
    head.read_external(t);
    body.allocate(head.length);
    if (head.length > 0) {
        t.read_bytes(body, 0, head.length);
        body.reset();
    }
}

void ADF::write_external(ByteArray &t) {
    head.length = static_cast<uint16_t>(body.length());
    head.write_external(t);
    if (body.length() > 0) {
        t.write_bytes(body, 0, body.length());
    }
}
