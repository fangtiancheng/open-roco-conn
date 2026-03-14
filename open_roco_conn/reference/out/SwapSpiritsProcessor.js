System.register("chunks:///_virtual/SwapSpiritsProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./P_Char.ts", "./P_Struct.ts", "./ProtocolHelper.ts", "./SpiritDataReader.ts"], (function(e) {
        var r, n, t, o, i, s, a, d, c;
        return {
            setters: [function(e) {
                r = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    t = e.__global
                }
                , function(e) {
                    o = e.EventDispatcher
                }
                , function(e) {
                    i = e.ADFCmdsType
                }
                , function(e) {
                    s = e.P_Char
                }
                , function(e) {
                    a = e.P_Struct
                }
                , function(e) {
                    d = e.ProtocolHelper
                }
                , function(e) {
                    c = e.SpiritDataReader
                }
            ],
            execute: function() {
                n._RF.push({}, "17143R5PxVI+bYF4Pt+Tx5N", "SwapSpiritsProcessor", void 0);
                e("SwapSpiritsProcessor", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    r(n, e);
                    var o = n.prototype;
                    return o.decode = function(e) {
                        var r = e.body
                            , n = d.ReadCode(r);
                        if (n.isError())
                            return t.showMsgBox(n.message),
                                !1;
                        for (var o, i = [], s = r.readUnsignedByte(), a = r.readUnsignedShort(), u = 0; u < a; ++u)
                            (o = c.read(r)).following = s - 1 == u,
                                o.index = u,
                            null != o && i.push(o);
                        for (var l = r.readUnsignedShort(), p = 0; p < l; p++)
                            (o = i[p]).hireIndex = r.readUnsignedInt(),
                                o.isHire = 0 != o.hireIndex,
                                o.hireExpTime = r.readUnsignedInt(),
                                o.hireType = r.readUnsignedShort();
                        for (var f = 0; f < a; f++)
                            (o = i[f]).talentType = r.readUnsignedShort(),
                                o.talentLevel = r.readUnsignedShort();
                        return i
                    }
                        ,
                        o.encode = function(e, r) {
                            void 0 === r && (r = -1);
                            var n = d.CreateADF(r)
                                , t = new a;
                            return t.fill([new s(e.firstIndex), new s(e.secondIndex)]),
                                n.body = t,
                                n
                        }
                        ,
                        o.getADFType = function() {
                            return i.T_SWAP_SPIRITS
                        }
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
