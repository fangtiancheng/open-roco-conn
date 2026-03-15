System.register("chunks:///_virtual/CrossServerReqCSiritSkillP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqCSiritSkillP.ts"], (function(t) {
        var e, i, r, n;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.CombatNetCmdsType
                }
                , function(t) {
                    n = t.ReqCSiritSkillP
                }
            ],
            execute: function() {
                i._RF.push({}, "69f4bsNAdtFdot5siWy83/w", "CrossServerReqCSiritSkillP", void 0);
                t("CrossServerReqCSiritSkillP", function(t) {
                    function i() {
                        return t.call(this) || this
                    }
                    return e(i, t),
                        i.prototype.getADFType = function() {
                            return r.CMD_WORLD_FIGHT_CHANGE_SPIRIT_SKILL
                        }
                        ,
                        i
                }(n));
                i._RF.pop()
            }
        }
    }
));
