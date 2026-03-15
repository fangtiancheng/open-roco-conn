#include "adf.hpp"

void ADF::read_external(ByteArray &t) {
    head.read_external(t);
//    body
}

void ADF::write_external(ByteArray &t) {
    head.write_external(t);
    //TODO:
}
