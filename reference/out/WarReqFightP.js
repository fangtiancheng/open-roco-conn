System.register("chunks:///_virtual/WarReqFightP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqFightP.ts"], (function(t) {
        var e, n, i, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.CombatNetCmdsType
                }
                , function(t) {
                    o = t.ReqFightP
                }
            ],
            execute: function() {
                n._RF.push({}, "deb92ULf0BO5I42iRx55mIU", "WarReqFightP", void 0);
                t("WarReqFightP", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    return e(n, t),
                        n.prototype.getADFType = function() {
                            return i.CMD_WAR_FIGHT_SHOOT
                        }
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
