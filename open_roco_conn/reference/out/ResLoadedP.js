System.register("chunks:///_virtual/ResLoadedP.ts", ["cc", "./P_UInt.ts", "./ProtocolHelper.ts", "./CombatNetCmdsType.ts"], (function(e) {
        var t, n, o, r;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.P_UInt
                }
                , function(e) {
                    o = e.ProtocolHelper
                }
                , function(e) {
                    r = e.CombatNetCmdsType
                }
            ],
            execute: function() {
                t._RF.push({}, "3d2faC24oRFJ6fY3YSqNffR", "ResLoadedP", void 0);
                e("ResLoadedP", function() {
                    function e() {}
                    var t = e.prototype;
                    return t.decode = function(e) {
                        var t = e.body;
                        return o.ReadCode(t)
                    }
                        ,
                        t.encode = function(e, t) {
                            void 0 === t && (t = -1);
                            var r = o.CreateADF(t)
                                , c = new n;
                            return c.num = e,
                                r.body = c,
                                r
                        }
                        ,
                        t.getADFType = function() {
                            return r.T_RESLOAD
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
