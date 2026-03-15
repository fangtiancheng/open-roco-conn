System.register("chunks:///_virtual/CrossServerFightResultP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./FightResultP.ts"], (function(t) {
        var e, s, r, n;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    r = t.CombatNetCmdsType
                }
                , function(t) {
                    n = t.FightResultP
                }
            ],
            execute: function() {
                s._RF.push({}, "4e2494hFF1P+r1UhbDAS2g4", "CrossServerFightResultP", void 0);
                t("CrossServerFightResultP", function(t) {
                    function s() {
                        return t.call(this) || this
                    }
                    return e(s, t),
                        s.prototype.getADFType = function() {
                            return r.CMD_WORLD_FIGHT_RESULT_BROADCAST
                        }
                        ,
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
