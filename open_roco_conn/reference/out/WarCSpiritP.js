System.register("chunks:///_virtual/WarCSpiritP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./CSpiritP.ts"], (function(t) {
        var e, i, n, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.CombatNetCmdsType
                }
                , function(t) {
                    r = t.CSpiritP
                }
            ],
            execute: function() {
                i._RF.push({}, "1e0c7UtJaNN14nO6eqFHJc7", "WarCSpiritP", void 0);
                t("WarCSpiritP", function(t) {
                    function i() {
                        return t.call(this) || this
                    }
                    return e(i, t),
                        i.prototype.getADFType = function() {
                            return n.CMD_WAR_FIGHT_CHANGE_SPIRIT_NOTIFY
                        }
                        ,
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
