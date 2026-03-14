System.register("chunks:///_virtual/CrossSeverReqCombatMVEnd.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqCombatMVEnd.ts"], (function(t) {
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
                n._RF.push({}, "92a70fPVKlJNZYf84blp3IF", "CrossSeverReqCombatMVEnd", void 0);
                t("CrossSeverReqCombatMVEnd", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    return e(n, t),
                        n.prototype.getADFType = function() {
                            return o.CMD_WORLD_FIGHT_FLASH_ANIMATE_DONE
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
