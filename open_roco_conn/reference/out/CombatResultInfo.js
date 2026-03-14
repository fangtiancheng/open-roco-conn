System.register("chunks:///_virtual/CombatResultInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var i, e;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
            ],
            execute: function() {
                e._RF.push({}, "74597MO+/xCXpOTjSgGqUJ2", "CombatResultInfo", void 0);
                t("CombatResultInfo", function() {
                    function t() {
                        this.type = 0,
                            this.combatType = 0,
                            this.canCombat = 0,
                            this.finished = 0,
                            this.version = 0,
                            this.spiritPropsVar = void 0,
                            this.obtainItems = void 0,
                            this.spiritInfos = void 0,
                            this._trainerExp = 0,
                            this.nextLevelTrainerExp = 0,
                            this.meetCondition = 0,
                            this.expAddBits = 0,
                            this.honourPoint = 0
                    }
                    return i(t, [{
                        key: "trainerExp",
                        get: function() {
                            return this._trainerExp
                        },
                        set: function(t) {
                            this._trainerExp = t
                        }
                    }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
