System.register("chunks:///_virtual/WarReqCombatMVEnd.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqCombatMVEnd.ts"], (function(t) {
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
                    r = t.ReqCombatMVEnd
                }
            ],
            execute: function() {
                n._RF.push({}, "fac2dz9tItATpQTrN32mqD/", "WarReqCombatMVEnd", void 0);
                t("WarReqCombatMVEnd", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    return e(n, t),
                        n.prototype.getADFType = function() {
                            return o.CMD_WAR_FIGHT_FLASH_ANIMATE_DONE
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
