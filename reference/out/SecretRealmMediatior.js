System.register("chunks:///_virtual/SecretRealmMediatior.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./SecretRealmMessage.ts", "./index.ts", "./SecretRealmView.ts", "./SecretRealmMainView.ts", "./SecretRealmMainRuleView.ts", "./SecretRealmHasSoulpearlView.ts", "./SecretRealmSelectSoulpearlView.ts", "./SecretRealmRewardPoolCallView.ts", "./SecretRealmCallRuleView.ts", "./SecretRealmChallengeView.ts", "./SecretRealmRewardMonsterView.ts", "./SecretRealmRewardEggView.ts", "./SecretRealmRewardItemView.ts"], (function(e) {
        var t, _, E, S, i, r, a, n, R, l, o, L, V, W, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    _ = e.cclegacy
                }
                , function(e) {
                    E = e.GameMediator
                }
                , function(e) {
                    S = e.SecretRealmMessage
                }
                , null, function(e) {
                    i = e.SecretRealmMasterView
                }
                , function(e) {
                    r = e.SecretRealmMainView
                }
                , function(e) {
                    a = e.SecretRealmMainRuleView
                }
                , function(e) {
                    n = e.SecretRealmHasSoulpearlView
                }
                , function(e) {
                    R = e.SecretRealmSelectSoulpearlView
                }
                , function(e) {
                    l = e.SecretRealmRewardPoolCallView
                }
                , function(e) {
                    o = e.SecretRealmCallRuleView
                }
                , function(e) {
                    L = e.SecretRealmChallengeView
                }
                , function(e) {
                    V = e.SecretRealmRewardMonsterView
                }
                , function(e) {
                    W = e.SecretRealmRewardEggView
                }
                , function(e) {
                    c = e.SecretRealmRewardItemView
                }
            ],
            execute: function() {
                _._RF.push({}, "839ffBq2EtDuIdfcLutHh7k", "SecretRealmMediatior", void 0);
                var M = e("SecretRealmMediatior", function(e) {
                    function _() {
                        return e.call(this, _.NAME) || this
                    }
                    t(_, e);
                    var E = _.prototype;
                    return E.onRegisterView = function() {
                        this.registerView(i),
                            this.registerView(r),
                            this.registerView(a),
                            this.registerView(n),
                            this.registerView(R),
                            this.registerView(l),
                            this.registerView(o),
                            this.registerView(L),
                            this.registerView(V),
                            this.registerView(W),
                            this.registerView(c)
                    }
                        ,
                        E.onRegisterProtocol = function() {}
                        ,
                        E.onUnregisterProtocol = function() {}
                        ,
                        E.onNotificationInterests = function() {
                            return [S.SHOW_MASTER_VIEW, S.CLOSE_MASTER_VIEW, S.SHOW_MAIN_VIEW, S.CLOSE_MAIN_VIEW, S.SHOW_MAIN_RULE_VIEW, S.CLOSE_MAIN_RULE_VIEW, S.SHOW_HAS_STAMPS_VIEW, S.CLOSE_HAS_STAMPS_VIEW, S.SHOW_SELECT_STAMPS_VIEW, S.CLOSE_SELECT_STAMPS_VIEW, S.SHOW_CALL_MONSTER_VIEW, S.CLOSE_CALL_MONSTER_VIEW, S.SHOW_CALL_RULE_VIEW, S.CLOSE_CALL_RULE_VIEW, S.SHOW_CHALLENGE_VIEW, S.CLOSE_CHALLENGE_VIEW, S.SHOW_CALL_MONSTER_REWARD_VIEW, S.CLOSE_CALL_MONSTER_REWARD_VIEW, S.SHOW_CALL_MONSTER_REWARD_EGG_VIEW, S.CLOSE_CALL_MONSTER_REWARD_EGG_VIEW, S.SHOW_CALL_MONSTER_REWARD_ITEM_VIEW, S.CLOSE_CALL_MONSTER_REWARD_ITEM_VIEW, S.SELECT_SOULPEARL]
                        }
                        ,
                        E.onHandleNotification = function(e) {
                            if (!e.getBody() || !e.getBody().isSubUIMutex) {
                                switch (e.getName()) {
                                    case S.SELECT_SOULPEARL:
                                        return void this.handleSelectSoulpearl(e)
                                }
                                this.handleSubUIMutex(e),
                                    this.handleMessageMapView(e)
                            }
                        }
                        ,
                        E.handleSelectSoulpearl = function(e) {
                            console.info("SecretRealmMediatior: handleSelectSoulpearl", e.getBody());
                            var t = e.getBody();
                            this.getView(l).updateSelectSoulpearl(t)
                        }
                        ,
                        E.handleSubUIMutex = function(e) {
                            _.SUB_UI_MUTEX_GROUP.find((function(t) {
                                    return t[0] === e.getName()
                                }
                            )) && _.SUB_UI_MUTEX_GROUP.forEach((function(t) {
                                    t[0] !== e.getName() && console.log("[SecretRealmMediatior] [handleSubUIMutex]处理子UI互斥,关闭" + t[0])
                                }
                            ))
                        }
                        ,
                        E.handleMessageMapView = function(e) {
                            var t = this
                                , E = _.MESSAGE_MAP_VIEW.find((function(t) {
                                    return t[1] === e.getName() || t[2] === e.getName()
                                }
                            ));
                            E && (e.getName() === E[1] ? (this.getView(E[0]).show(e.getBody()),
                                console.log("[SecretRealmMediatior] [handleMessageMapView]处理消息映射View,显示" + e.getName())) : (e.getName() === S.CLOSE_MASTER_VIEW && _.MESSAGE_MAP_VIEW.forEach((function(e) {
                                    e[1] != S.SHOW_MASTER_VIEW && t.getView(e[0]).close()
                                }
                            )),
                                this.getView(E[0]).close(),
                                console.log("[SecretRealmMediatior] [handleMessageMapView]处理消息映射View,关闭" + e.getName())))
                        }
                        ,
                        _
                }(E));
                M.NAME = "SecretRealmMediatiorMediatior",
                    M.SUB_UI_MUTEX_GROUP = [[S.SHOW_MAIN_VIEW, S.CLOSE_MAIN_VIEW], [S.SHOW_SELECT_STAMPS_VIEW, S.CLOSE_SELECT_STAMPS_VIEW], [S.SHOW_CALL_MONSTER_VIEW, S.CLOSE_CALL_MONSTER_VIEW]],
                    M.MESSAGE_MAP_VIEW = [[i, S.SHOW_MASTER_VIEW, S.CLOSE_MASTER_VIEW], [r, S.SHOW_MAIN_VIEW, S.CLOSE_MAIN_VIEW], [a, S.SHOW_MAIN_RULE_VIEW, S.CLOSE_MAIN_RULE_VIEW], [n, S.SHOW_HAS_STAMPS_VIEW, S.CLOSE_HAS_STAMPS_VIEW], [R, S.SHOW_SELECT_STAMPS_VIEW, S.CLOSE_SELECT_STAMPS_VIEW], [l, S.SHOW_CALL_MONSTER_VIEW, S.CLOSE_CALL_MONSTER_VIEW], [o, S.SHOW_CALL_RULE_VIEW, S.CLOSE_CALL_RULE_VIEW], [L, S.SHOW_CHALLENGE_VIEW, S.CLOSE_CHALLENGE_VIEW], [V, S.SHOW_CALL_MONSTER_REWARD_VIEW, S.CLOSE_CALL_MONSTER_REWARD_VIEW], [W, S.SHOW_CALL_MONSTER_REWARD_EGG_VIEW, S.CLOSE_CALL_MONSTER_REWARD_EGG_VIEW], [c, S.SHOW_CALL_MONSTER_REWARD_ITEM_VIEW, S.CLOSE_CALL_MONSTER_REWARD_ITEM_VIEW]],
                    _._RF.pop()
            }
        }
    }
));
