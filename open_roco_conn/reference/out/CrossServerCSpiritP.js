System.register("chunks:///_virtual/CrossServerCSpiritP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./CSpiritP.ts"], (function(t) {
        var e, r, i, n;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    i = t.CombatNetCmdsType
                }
                , function(t) {
                    n = t.CSpiritP
                }
            ],
            execute: function() {
                r._RF.push({}, "b520amwRnhIyo9Cby3oPlGX", "CrossServerCSpiritP", void 0);
                t("CrossServerCSpiritP", function(t) {
                    function r() {
                        return t.call(this) || this
                    }
                    return e(r, t),
                        r.prototype.getADFType = function() {
                            return i.CMD_WORLD_FIGHT_CHANGE_SPIRIT_NOTIFY
                        }
                        ,
                        r
                }(n));
                r._RF.pop()
            }
        }
    }
));
