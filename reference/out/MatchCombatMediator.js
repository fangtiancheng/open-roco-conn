System.register("chunks:///_virtual/MatchCombatMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./MatchCombatPlugin.ts"], (function(t) {
        var e, i, n, o, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.Mediator
                }
                , function(t) {
                    o = t.AppConstDef
                }
                , function(t) {
                    a = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "7549fRPUXdGUZuwffvVvYBn", "MatchCombatMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = new a,
                                e
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [o.NN_V_SHOW_MATCH_COMBAT_VIEW, o.NN_V_CLOSE_MATCH_COMBAT_VIEW]
                        }
                            ,
                            n.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case o.NN_V_SHOW_MATCH_COMBAT_VIEW:
                                        this._view.show();
                                        break;
                                    case o.NN_V_CLOSE_MATCH_COMBAT_VIEW:
                                        this._view.close()
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "MatchCombatMediator",
                    i._RF.pop()
            }
        }
    }
));
