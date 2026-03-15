System.register("chunks:///_virtual/SentinelIntelligenceMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./SentinelIntelligenceMessage.ts", "./SentinelIntelligenceView.ts"], (function(e) {
        var n, t, E, _, i;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    E = e.GameMediator
                }
                , function(e) {
                    _ = e.SentinelIntelligenceMessage
                }
                , function(e) {
                    i = e.SentinelIntelligenceView
                }
            ],
            execute: function() {
                t._RF.push({}, "b2c4bk0i1VKU584Npv7JvF1", "SentinelIntelligenceMediator", void 0),
                    e("SentinelIntelligenceMediator", function(e) {
                        function t() {
                            return e.call(this, t.NAME) || this
                        }
                        n(t, e);
                        var E = t.prototype;
                        return E.onRegisterView = function() {
                            this.registerView(i)
                        }
                            ,
                            E.onRegisterProtocol = function() {}
                            ,
                            E.onUnregisterProtocol = function() {}
                            ,
                            E.onNotificationInterests = function() {
                                return [_.SHOW_MASTER_VIEW, _.CLOSE_MASTER_VIEW, _.SHOW_MAIN_VIEW, _.CLOSE_MAIN_VIEW, _.SHOW_RULE_VIEW, _.CLOSE_RULE_VIEW, _.SHOW_REWARD_VIEW, _.CLOSE_REWARD_VIEW, _.SHOW_CONTRACT_VIEW, _.CLOSE_CONTRACT_VIEW, _.SHOW_CONTRACT_SIGN_VIEW, _.CLOSE_CONTRACT_SIGN_VIEW, _.SHOW_FOREST_INTELLIGENCE_VIEW, _.CLOSE_FOREST_INTELLIGENCE_VIEW, _.SHOW_CONTRACT_SIGN_VIEW, _.CLOSE_CONTRACT_SIGN_VIEW, _.SHOW_INTELLIGENCE_EGG_VIEW, _.CLOSE_INTELLIGENCE_EGG_VIEW]
                            }
                            ,
                            E.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case _.SHOW_MASTER_VIEW:
                                        this.getView(i).show(e.getBody());
                                        break;
                                    case _.CLOSE_MASTER_VIEW:
                                        this.getView(i).close();
                                        break;
                                    case _.SHOW_MAIN_VIEW:
                                    case _.SHOW_RULE_VIEW:
                                    case _.SHOW_REWARD_VIEW:
                                    case _.SHOW_CONTRACT_VIEW:
                                    case _.SHOW_FOREST_INTELLIGENCE_VIEW:
                                    case _.SHOW_INTELLIGENCE_EGG_VIEW:
                                    case _.SHOW_CONTRACT_SIGN_VIEW:
                                        this.getView(i).showSubUI(e)
                                }
                            }
                            ,
                            t
                    }(E)).NAME = "SentinelIntelligenceMediator",
                    t._RF.pop()
            }
        }
    }
));
