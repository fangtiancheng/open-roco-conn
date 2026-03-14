System.register("chunks:///_virtual/SpiritInfoProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./PropertyDes.ts", "./SpiritEquipmentInfo.ts", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./P_Char.ts", "./P_Struct.ts", "./P_UInt.ts", "./ProtocolHelper.ts", "./SpiritDataReader.ts"], (function(t) {
        var e, n, r, i, o, s, a, c, u, p, d, f, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    i = t.__global
                }
                , function(t) {
                    o = t.PropertyDes
                }
                , function(t) {
                    s = t.SpiritEquipmentInfo
                }
                , function(t) {
                    a = t.EventDispatcher
                }
                , function(t) {
                    c = t.ADFCmdsType
                }
                , function(t) {
                    u = t.P_Char
                }
                , function(t) {
                    p = t.P_Struct
                }
                , function(t) {
                    d = t.P_UInt
                }
                , function(t) {
                    f = t.ProtocolHelper
                }
                , function(t) {
                    l = t.SpiritDataReader
                }
            ],
            execute: function() {
                n._RF.push({}, "059a2cUGRxKUZmN/K0JuwvI", "SpiritInfoProcessor", void 0);
                t("SpiritInfoProcessor", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.decode = function(t) {
                        var e = t.body
                            , n = f.ReadCode(e);
                        if (n.isError())
                            return n.message;
                        var a, c, u = e.readUnsignedInt();
                        (a = l.read(e)).following = !0,
                            a.masterID = u,
                            a.equipments = [];
                        i.SysAPI.getGDataAPI().getDataProxy(r.SEQUIP_DES_DATA);
                        for (var p = 0; p < o.EQUIPMENT_TYPE.length; p++)
                            (c = new s).serverID = e.readUnsignedInt(),
                                c.catchTime = e.readUnsignedInt(),
                                c.baseAttr = e.readUnsignedByte(),
                                c.baseValue = e.readUnsignedByte(),
                                c.specialAttr = e.readUnsignedByte(),
                                c.specialValue = e.readUnsignedByte(),
                                c.spiritID = a.id,
                                c.spiritCatchTime = a.caughtTime,
                                a.equipments.push(c);
                        return a
                    }
                        ,
                        a.encode = function(t, e) {
                            void 0 === e && (e = -1);
                            var n = f.CreateADF(e)
                                , r = new p;
                            return r.fill([new d(t.uin), new u(t.spiritIndex)]),
                                n.body = r,
                                n
                        }
                        ,
                        a.getADFType = function() {
                            return c.T_SPIRIT_INFO
                        }
                        ,
                        n
                }(a));
                n._RF.pop()
            }
        }
    }
));
