System.register("chunks:///_virtual/CrossServerReqFightP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqFightP.ts"], (function(e) {
        var t, r, n, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    n = e.CombatNetCmdsType
                }
                , function(e) {
                    o = e.ReqFightP
                }
            ],
            execute: function() {
                r._RF.push({}, "7c90fFjGGpHo4eYC+Txbkh7", "CrossServerReqFightP", void 0);
                e("CrossServerReqFightP", function(e) {
                    function r() {
                        return e.call(this) || this
                    }
                    return t(r, e),
                        r.prototype.getADFType = function() {
                            return n.CMD_WORLD_FIGHT_SHOOT
                        }
                        ,
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
