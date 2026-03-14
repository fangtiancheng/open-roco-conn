System.register("chunks:///_virtual/SuccessorEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var E, t, n;
        return {
            setters: [function(e) {
                E = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy,
                        n = e.Event
                }
            ],
            execute: function() {
                t._RF.push({}, "47787TWckFECLynJsBaTPvU", "SuccessorEvent", void 0);
                var S = e("SuccessorEvent", function(e) {
                    function t(E, t, n) {
                        return void 0 === t && (t = !1),
                        e.call(this, E, t) || this
                    }
                    return E(t, e),
                        t.prototype.clone = function() {
                            return new t(this.type,this.bubbles)
                        }
                        ,
                        t
                }(n));
                S.CONFIRM_SURE = "confirmSure",
                    S.CONFIRM_CANCEL = "confirmCancel",
                    S.LOSE_SURE = "loseSure",
                    S.VICTORY_SURE = "vicotrySure",
                    S.PROMPT_SURE = "promptSure",
                    S.LEVEL_UP_SURE = "levelUpSure",
                    S.CATCH_SUCCESS_SURE = "catchSuccessSure",
                    S.GET_NEW_SKILL_CHANGE = "getNewSkillChange",
                    S.GET_NEW_SKILL_NOCHANGE = "getNewSkillNoChange",
                    S.FIGHT_OVER_SURE = "fightOverSure",
                    S.PROCESS_EVENT = "processEvent",
                    S.GET_EXP_SURE = "getExpSure",
                    S.EVOLUTION_DONE = "evolutionDone",
                    S.EVOLUTION_ALL_DONE = "evolutionAllDone",
                    S.HIDE_PETS = "hidePets",
                    S.NEW_SKILL_TIP_CLOSE = "newSkillTipPanel",
                    S.NEW_SKILL_TIP_SURE = "newSkillTipSure",
                    S.TEMPER_SURE = "temperSure",
                    t._RF.pop()
            }
        }
    }
));
