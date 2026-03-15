System.register("chunks:///_virtual/amf.ts", ["cc", "./BuildLogHelper.ts", "./Xml2Json.ts", "./amfType.ts"], (function(A) {
        var _, e, n, r;
        return {
            setters: [function(A) {
                _ = A.cclegacy
            }
                , function(A) {
                    e = A.default
                }
                , function(A) {
                    n = A.Xml2Json
                }
                , function(A) {
                    r = A.AmfXml
                }
            ],
            execute: function() {
                _._RF.push({}, "cd030v/vmNGGpQHxWpFiwkG", "amf", void 0);
                var t = function(A) {
                    return A[A.AMF_UNDEFINED = 0] = "AMF_UNDEFINED",
                        A[A.AMF_NULL = 1] = "AMF_NULL",
                        A[A.AMF_FALSE = 2] = "AMF_FALSE",
                        A[A.AMF_TRUE = 3] = "AMF_TRUE",
                        A[A.AMF_INTEGER = 4] = "AMF_INTEGER",
                        A[A.AMF_DOUBLE = 5] = "AMF_DOUBLE",
                        A[A.AMF_STRING = 6] = "AMF_STRING",
                        A[A.AMF_XMLDOC = 7] = "AMF_XMLDOC",
                        A[A.AMF_DATE = 8] = "AMF_DATE",
                        A[A.AMF_ARRAY = 9] = "AMF_ARRAY",
                        A[A.AMF_OBJECT = 10] = "AMF_OBJECT",
                        A[A.AMF_XML = 11] = "AMF_XML",
                        A[A.AMF_BYTEARRAY = 12] = "AMF_BYTEARRAY",
                        A[A.AMF_VECTOR_INT = 13] = "AMF_VECTOR_INT",
                        A[A.AMF_VECTOR_UINT = 14] = "AMF_VECTOR_UINT",
                        A[A.AMF_VECTOR_DOUBLE = 15] = "AMF_VECTOR_DOUBLE",
                        A[A.AMF_VECTOR_OBJECT = 16] = "AMF_VECTOR_OBJECT",
                        A[A.AMF_DICTIONARY = 17] = "AMF_DICTIONARY",
                        A
                }(t || {});
                A("amf", function() {
                    function A() {}
                    return A.read = function(_) {
                        var n = _.readByte();
                        switch (n) {
                            case t.AMF_XML:
                                return A.readXml(_);
                            default:
                                if (e.IS_LOCAL,
                                1 == e.IS_LOCAL)
                                    throw new Error('"type" not yet implemented: ' + n);
                                return null
                        }
                    }
                        ,
                        A.readXml = function(A) {
                            for (var _ = 0, t = 0, F = A.readUnsignedByte(); t++ < 3 && 128 & F; )
                                _ <<= 7,
                                    _ |= 127 & F,
                                    F = A.readUnsignedByte();
                            _ <<= t <= 3 ? 7 : 8,
                                _ |= F,
                                _ <<= 3;
                            var M = (_ >>= 3) >> 1
                                , E = A.readString(M)
                                , T = n.getJsonNew(E)
                                , u = Object.keys(T);
                            if (u.length > 0) {
                                var a = T[u[0]];
                                return new r((null == a ? void 0 : a.name) || "",E,T)
                            }
                            if (e.IS_LOCAL,
                            1 == e.IS_LOCAL)
                                throw new Error("amf [readXml]'s param is error");
                            return null
                        }
                        ,
                        A
                }());
                _._RF.pop()
            }
        }
    }
));
