System.register("chunks:///_virtual/WarFightResultP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./FightResultP.ts"], (function(t) {
        var e, n, u, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    u = t.CombatNetCmdsType
                }
                , function(t) {
                    i = t.FightResultP
                }
            ],
            execute: function() {
                n._RF.push({}, "c66b9aDQgtJ6JpJYrm+wz77", "WarFightResultP", void 0);
                t("WarFightResultP", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    return e(n, t),
                        n.prototype.getADFType = function() {
                            return u.CMD_WAR_FIGHT_RESULT_BROADCAST
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
