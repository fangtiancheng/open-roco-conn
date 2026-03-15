System.register("chunks:///_virtual/ReadUtils.ts", ["cc", "./ByteArray.ts", "./Int64.ts", "./UInt64.ts", "./WireType.ts"], (function(e) {
        var r, n, a, t, i;
        return {
            setters: [function(e) {
                r = e.cclegacy
            }
                , function(e) {
                    n = e.ByteArray
                }
                , function(e) {
                    a = e.Int64
                }
                , function(e) {
                    t = e.UInt64
                }
                , function(e) {
                    i = e.WireType
                }
            ],
            execute: function() {
                r._RF.push({}, "4f31aCqslNMmpZxtSYjaDG4", "ReadUtils", void 0);
                e("ReadUtils", function() {
                    function e() {}
                    return e.skip = function(r, n) {
                        switch (n) {
                            case i.VARINT:
                                for (; r.readUnsignedByte() > 128; )
                                    ;
                                break;
                            case i.FIXED_64_BIT:
                                r.readInt(),
                                    r.readInt();
                                break;
                            case i.LENGTH_DELIMITED:
                                for (var a = e.readTYPE_UINT32(r); 0 != a; a--)
                                    r.readByte();
                                break;
                            case i.FIXED_32_BIT:
                                r.readInt();
                                break;
                            default:
                                throw new Error("Invalid wire type: " + n)
                        }
                    }
                        ,
                        e.readTYPE_DOUBLE = function(e) {
                            return e.readDouble()
                        }
                        ,
                        e.readTYPE_FLOAT = function(e) {
                            return e.readFloat()
                        }
                        ,
                        e.readTYPE_INT64 = function(e) {
                            for (var r, n = new a, t = 0; r = e.readUnsignedByte(),
                            28 != t; t += 7) {
                                if (!(r >= 128))
                                    return n.low |= r << t,
                                        n;
                                n.low |= (127 & r) << t
                            }
                            if (!(r >= 128))
                                return n.low |= r << t,
                                    n.high = r >>> 4,
                                    n;
                            for (r &= 127,
                                     n.low |= r << t,
                                     n.high = r >>> 4,
                                     t = 3; ; t += 7)
                                if (r = e.readUnsignedByte(),
                                t < 32) {
                                    if (!(r >= 128)) {
                                        n.high |= r << t;
                                        break
                                    }
                                    n.high |= (127 & r) << t
                                }
                            return n
                        }
                        ,
                        e.readTYPE_UINT64 = function(e) {
                            for (var r, n = new t, a = 0; r = e.readUnsignedByte(),
                            28 != a; a += 7) {
                                if (!(r >= 128))
                                    return n.low |= r << a,
                                        n;
                                n.low |= (127 & r) << a
                            }
                            if (!(r >= 128))
                                return n.low |= r << a,
                                    n.high = r >>> 4,
                                    n;
                            for (r &= 127,
                                     n.low |= r << a,
                                     n.high = r >>> 4,
                                     a = 3; ; a += 7)
                                if (r = e.readUnsignedByte(),
                                a < 32) {
                                    if (!(r >= 128)) {
                                        n.high |= r << a;
                                        break
                                    }
                                    n.high |= (127 & r) << a
                                }
                            return n
                        }
                        ,
                        e.readTYPE_INT32 = function(r) {
                            return e.readTYPE_UINT32(r)
                        }
                        ,
                        e.readTYPE_FIXED64 = function(e) {
                            var r = new t;
                            return r.low = e.readUnsignedInt(),
                                r.high = e.readUnsignedInt(),
                                r
                        }
                        ,
                        e.readTYPE_FIXED32 = function(e) {
                            return e.readUnsignedInt()
                        }
                        ,
                        e.readTYPE_BOOL = function(r) {
                            return 0 != e.readTYPE_INT32(r)
                        }
                        ,
                        e.readTYPE_STRING = function(r) {
                            var n = e.readTYPE_UINT32(r);
                            return r.readUTFBytes(n)
                        }
                        ,
                        e.readTYPE_BYTES = function(r) {
                            var a = new n
                                , t = e.readTYPE_UINT32(r);
                            return t > 0 && r.readBytes(a, 0, t),
                                a
                        }
                        ,
                        e.readTYPE_UINT32 = function(e) {
                            for (var r = 0, n = 0; ; n += 7) {
                                var a = e.readUnsignedByte();
                                if (!(n < 32)) {
                                    for (; e.readUnsignedByte() >= 128; )
                                        ;
                                    break
                                }
                                if (!(a >= 128)) {
                                    r |= a << n;
                                    break
                                }
                                r |= (127 & a) << n
                            }
                            return r
                        }
                        ,
                        e.readTYPE_ENUM = function(r) {
                            return e.readTYPE_INT32(r)
                        }
                        ,
                        e.readTYPE_SFIXED32 = function(r) {
                            return e.readTYPE_FIXED32(r)
                        }
                        ,
                        e.readTYPE_SFIXED64 = function(r) {
                            var n = new a
                                , t = e.readTYPE_FIXED64(r);
                            return n.low = t.low,
                                n.high = t.high,
                                n
                        }
                        ,
                        e.readTYPE_MESSAGE = function(r, n) {
                            var a = e.readTYPE_UINT32(r);
                            if (r.bytesAvailable < a)
                                throw new Error("Invalid message length: " + a);
                            var t = r.bytesAvailable - a;
                            if (n.readFromSlice(r, t),
                            r.bytesAvailable != t)
                                throw new Error("Invalid nested message");
                            return n
                        }
                        ,
                        e.readPackedRepeated = function(r, n, a) {
                            var t = e.readTYPE_UINT32(r);
                            if (r.bytesAvailable < t)
                                throw new Error("Invalid message length: " + t);
                            for (var i = r.bytesAvailable - t; r.bytesAvailable > i; )
                                a.push(n(r));
                            if (r.bytesAvailable != i)
                                throw new Error("Invalid packed repeated data")
                        }
                        ,
                        e
                }());
                r._RF.pop()
            }
        }
    }
));
