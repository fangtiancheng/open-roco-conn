System.register("chunks:///_virtual/WarReqCombatStartP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqCombatStartP.ts"], (function(t) {
        var e, n, o, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    o = t.CombatNetCmdsType
                }
                , function(t) {
                    r = t.ReqCombatStartP
                }
            ],
            execute: function() {
                n._RF.push({}, "91223wh1bFDEL9/MUHSct7c", "WarReqCombatStartP", void 0);
                t("WarReqCombatStartP", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    return e(n, t),
                        n.prototype.getADFType = function() {
                            return o.CMD_WAR_FIGHT_REQUEST_START
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
