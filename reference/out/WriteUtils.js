System.register("chunks:///_virtual/WriteUtils.ts", ["cc", "./ByteArray.ts"], (function(t) {
        var i, e;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    e = t.ByteArray
                }
            ],
            execute: function() {
                i._RF.push({}, "91195gT8vNAKrcu7VfksG2D", "WriteUtils", void 0);
                t("WriteUtils", function() {
                    function t() {}
                    return t.stringToByteArray = function(t) {
                        for (var i = new e, r = 0; r < t.length; ++r)
                            i.writeByte(t.charCodeAt(r));
                        return i
                    }
                        ,
                        t.writeVarint64 = function(i, e, r) {
                            if (0 == r)
                                t.writeTYPE_UINT32(i, e);
                            else {
                                for (var n = 0; n < 4; ++n)
                                    i.writeByte(127 & e | 128),
                                        e >>>= 7;
                                0 == (2147483640 & r) ? i.writeByte(r << 4 | e) : (i.writeByte(127 & (r << 4 | e) | 128),
                                    t.writeTYPE_UINT32(i, r >>> 3))
                            }
                        }
                        ,
                        t.writeTag = function(i, e, r) {
                            t.writeTYPE_UINT32(i, r << 3 | e)
                        }
                        ,
                        t.writeTYPE_DOUBLE = function(t, i) {
                            t.writeDouble(i)
                        }
                        ,
                        t.writeTYPE_FLOAT = function(t, i) {
                            t.writeFloat(i)
                        }
                        ,
                        t.writeTYPE_INT64 = function(i, e) {
                            t.writeVarint64(i, e.low, e.high)
                        }
                        ,
                        t.writeTYPE_UINT64 = function(i, e) {
                            t.writeVarint64(i, e.low, e.high)
                        }
                        ,
                        t.writeTYPE_INT32 = function(i, e) {
                            e < 0 ? t.writeVarint64(i, e, 4294967295) : t.writeTYPE_UINT32(i, e)
                        }
                        ,
                        t.writeTYPE_FIXED64 = function(t, i) {
                            t.writeUnsignedInt(i.low),
                                t.writeUnsignedInt(i.high)
                        }
                        ,
                        t.writeTYPE_FIXED32 = function(t, i) {
                            t.writeUnsignedInt(i)
                        }
                        ,
                        t.writeTYPE_BOOL = function(t, i) {
                            t.writeByte(i ? 1 : 0)
                        }
                        ,
                        t.writeTYPE_STRING = function(t, i) {
                            var e = t.beginBlock();
                            t.writeUTFBytes(i),
                                t.endBlock(e)
                        }
                        ,
                        t.writeTYPE_BYTES = function(i, e) {
                            t.writeTYPE_UINT32(i, e.length),
                                i.writeBytes(e)
                        }
                        ,
                        t.writeTYPE_UINT32 = function(t, i) {
                            for (; ; ) {
                                if (0 == (-128 & i))
                                    return void t.writeByte(i);
                                t.writeByte(127 & i | 128),
                                    i >>>= 7
                            }
                        }
                        ,
                        t.writeTYPE_ENUM = function(i, e) {
                            t.writeTYPE_INT32(i, e)
                        }
                        ,
                        t.writeTYPE_MESSAGE = function(t, i) {
                            var e = t.beginBlock();
                            i.writeToBuffer(t),
                                t.endBlock(e)
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
