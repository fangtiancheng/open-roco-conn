System.register("chunks:///_virtual/MoveToStorageProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./P_Char.ts", "./ProtocolHelper.ts", "./SpiritDataReader.ts"], (function(e) {
        var r, n, t, o, i, s, a;
        return {
            setters: [function(e) {
                r = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    t = e.EventDispatcher
                }
                , function(e) {
                    o = e.ADFCmdsType
                }
                , function(e) {
                    i = e.P_Char
                }
                , function(e) {
                    s = e.ProtocolHelper
                }
                , function(e) {
                    a = e.SpiritDataReader
                }
            ],
            execute: function() {
                n._RF.push({}, "b3ab5ZVgbdI7pXdXdKGGwPT", "MoveToStorageProcessor", void 0);
                e("MoveToStorageProcessor", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    r(n, e);
                    var t = n.prototype;
                    return t.decode = function(e) {
                        var r = e.body
                            , n = s.ReadCode(r);
                        if (n.isError())
                            return n.message;
                        for (var t, o = [], i = r.readUnsignedByte(), d = r.readUnsignedShort(), c = 0; c < d; ++c)
                            (t = a.read(r)).following = i - 1 == c,
                                t.index = c,
                            null != t && o.push(t);
                        for (var u = r.readUnsignedShort(), p = 0; p < u; p++)
                            (t = o[p]).hireIndex = r.readUnsignedInt(),
                                t.isHire = 0 != t.hireIndex,
                                t.hireExpTime = r.readUnsignedInt(),
                                t.hireType = r.readUnsignedShort();
                        for (var l = 0; l < d; l++)
                            (t = o[l]).talentType = r.readUnsignedShort(),
                                t.talentLevel = r.readUnsignedShort();
                        return o
                    }
                        ,
                        t.encode = function(e, r) {
                            void 0 === r && (r = -1);
                            var n = s.CreateADF(r)
                                , t = new i;
                            return t.num = e,
                                n.body = t,
                                n
                        }
                        ,
                        t.getADFType = function() {
                            return o.T_ADD_TO_STORAGE
                        }
                        ,
                        n
                }(t));
                n._RF.pop()
            }
        }
    }
));
