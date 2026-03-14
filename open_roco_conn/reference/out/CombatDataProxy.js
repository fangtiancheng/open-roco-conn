System.register("chunks:///_virtual/CombatDataProxy.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "be847PAQIJMCZDKUZxGL/o5", "CombatDataProxy", void 0),
                    t("CombatDataProxy", function() {
                        function t() {
                            throw new Error("CombatDataProxy can not be instantiated.")
                        }
                        return t.initialize = function(n) {
                            t._plugin = n
                        }
                            ,
                            t.getCombatData = function() {
                                return null != t._plugin ? t._plugin.getCurrCombatData() : null
                            }
                            ,
                            t.getCurrentSpirit = function() {
                                return null != t._plugin && null != t._plugin.getCurrCombatData() ? t._plugin.getCurrCombatData().myCurSpirit : null
                            }
                            ,
                            t
                    }())._plugin = void 0,
                    n._RF.pop()
            }
        }
    }
));
