System.register("chunks:///_virtual/ReqFightP.ts", ["cc", "./ProtocolHelper.ts", "./SerAttackInfo.ts", "./CombatNetCmdsType.ts"], (function(e) {
        var t, n, o, r;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.ProtocolHelper
                }
                , function(e) {
                    o = e.SerAttackInfo
                }
                , function(e) {
                    r = e.CombatNetCmdsType
                }
            ],
            execute: function() {
                t._RF.push({}, "8bf3f42Dh1AbaJju36PKRA4", "ReqFightP", void 0);
                e("ReqFightP", function() {
                    function e() {}
                    var t = e.prototype;
                    return t.decode = function(e) {
                        var t = e.body
                            , r = new o;
                        return r.pCode = n.ReadCode(t),
                            r.reqType = t.readUnsignedByte(),
                            r.spiritIndex = t.readUnsignedByte(),
                            r.skillIndex = t.readUnsignedByte(),
                            r.ppLeft = t.readUnsignedByte(),
                            r
                    }
                        ,
                        t.encode = function(e, t) {
                            void 0 === t && (t = -1);
                            var o = n.CreateADF(t);
                            return o.body = e,
                                o
                        }
                        ,
                        t.getADFType = function() {
                            return r.T_REQ_FIGHT
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
