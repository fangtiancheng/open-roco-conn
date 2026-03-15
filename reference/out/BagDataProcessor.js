System.register("chunks:///_virtual/BagDataProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./P_UInt.ts", "./ProtocolHelper.ts", "./SpiritDataReader.ts"], (function(e) {
        var r, n, t, o, i, a, s;
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
                    i = e.P_UInt
                }
                , function(e) {
                    a = e.ProtocolHelper
                }
                , function(e) {
                    s = e.SpiritDataReader
                }
            ],
            execute: function() {
                n._RF.push({}, "c9351b6Rb1G07cII+m3qKIu", "BagDataProcessor", void 0);
                e("BagDataProcessor", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    r(n, e),
                        n.parse = function(e) {
                            var r = a.ReadCode(e);
                            if (r.isError())
                                return r.message;
                            for (var n, t = [], o = e.readUnsignedByte(), i = e.readUnsignedShort(), c = 0; c < i; ++c)
                                (n = s.read(e)).following = o - 1 == c,
                                    n.index = c,
                                    t.push(n);
                            for (var d = e.readUnsignedShort(), u = 0; u < d; u++)
                                (n = t[u]).hireIndex = e.readUnsignedInt(),
                                    n.isHire = 0 != n.hireIndex,
                                    n.hireExpTime = e.readUnsignedInt(),
                                    n.hireType = e.readUnsignedShort();
                            for (var p = 0; p < i; p++)
                                (n = t[p]).talentType = e.readUnsignedShort(),
                                    n.talentLevel = e.readUnsignedShort();
                            return t
                        }
                    ;
                    var t = n.prototype;
                    return t.decode = function(e) {
                        var r = e.body;
                        return n.parse(r)
                    }
                        ,
                        t.encode = function(e, r) {
                            void 0 === r && (r = -1);
                            var n = a.CreateADF(r)
                                , t = new i;
                            return t.num = e,
                                n.body = t,
                                n
                        }
                        ,
                        t.getADFType = function() {
                            return o.T_SPIRIT_BAG_DATA
                        }
                        ,
                        n
                }(t));
                n._RF.pop()
            }
        }
    }
));
