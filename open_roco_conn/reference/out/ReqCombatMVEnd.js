System.register("chunks:///_virtual/ReqCombatMVEnd.ts", ["cc", "./ProtocolHelper.ts", "./CombatNetCmdsType.ts"], (function(t) {
        var e, n, o;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.ProtocolHelper
                }
                , function(t) {
                    o = t.CombatNetCmdsType
                }
            ],
            execute: function() {
                e._RF.push({}, "758f6ExXo5Kdr/kAmyMqZp4", "ReqCombatMVEnd", void 0);
                t("ReqCombatMVEnd", function() {
                    function t() {}
                    var e = t.prototype;
                    return e.decode = function(t) {
                        return null
                    }
                        ,
                        e.encode = function(t, e) {
                            void 0 === e && (e = -1);
                            var o = n.CreateADF(e);
                            return o.body = t,
                                o
                        }
                        ,
                        e.getADFType = function() {
                            return o.T_REQ_MVEND
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
