System.register("chunks:///_virtual/BloodTalenMediatior.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts", "./CombatType.ts", "./CFunction.ts", "./GameMediator.ts", "./CommonAPI.ts", "./BloodTalenMessage.ts", "./BloodTalenCGI.ts", "./BloodTalenSelectTalenView.ts", "./BloodTalentAwakeView.ts", "./BloodTalentSelectPetView.ts", "./BloodTalenView.ts"], (function(e) {
        var t, o, i, n, a, s, l, E, c, r, _, T, V, u, A;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    i = e.ActivityAPI
                }
                , function(e) {
                    n = e.CombatType
                }
                , function(e) {
                    a = e.CFunction
                }
                , function(e) {
                    s = e.GameMediator
                }
                , function(e) {
                    l = e.CommonAPI
                }
                , function(e) {
                    E = e.BloodTalenMessage,
                        c = e.MainViewPage
                }
                , function(e) {
                    r = e.ReqChallenge,
                        _ = e.ReqChallengeAward
                }
                , function(e) {
                    T = e.BloodTalenSelectTalenView
                }
                , function(e) {
                    V = e.BloodTalentAwakeView
                }
                , function(e) {
                    u = e.BloodTalentSelectPetView
                }
                , function(e) {
                    A = e.BloodTalenView
                }
            ],
            execute: function() {
                o._RF.push({}, "1f5995sWVxEDKK/xbHCBcoV", "BloodTalenMediatior", void 0),
                    e("BloodTalenMediatior", function(e) {
                        function o() {
                            return e.call(this, o.NAME) || this
                        }
                        t(o, e);
                        var s = o.prototype;
                        return s.onRegisterView = function() {
                            this.registerView(A),
                                this.registerView(u),
                                this.registerView(T),
                                this.registerView(V)
                        }
                            ,
                            s.onRegisterProtocol = function() {}
                            ,
                            s.onUnregisterProtocol = function() {}
                            ,
                            s.onNotificationInterests = function() {
                                return [E.SHOW_MAIN_VIEW, E.CLOSE_MAIN_VIEW, E.SHOW_SELECT_PET_VIEW, E.CLOSE_SELECT_PET_VIEW, E.SHOW_SELECT_TALEN_VIEW, E.CLOSE_SELECT_TALEN_VIEW, E.SHOW_TALEN_AWAKE_VIEW, E.CLOSE_TALEN_AWAKE_VIEW, E.BATTLE_START]
                            }
                            ,
                            s.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case E.SHOW_MAIN_VIEW:
                                        this.getView(A).show(e.getBody());
                                        break;
                                    case E.CLOSE_MAIN_VIEW:
                                        this.getView(A).close();
                                        break;
                                    case E.SHOW_SELECT_PET_VIEW:
                                        this.getView(u).show(e.getBody());
                                        break;
                                    case E.CLOSE_SELECT_PET_VIEW:
                                        this.getView(u).close();
                                        break;
                                    case E.SHOW_SELECT_TALEN_VIEW:
                                        this.getView(T).show(e.getBody());
                                        break;
                                    case E.CLOSE_SELECT_TALEN_VIEW:
                                        this.getView(T).close();
                                        break;
                                    case E.SHOW_TALEN_AWAKE_VIEW:
                                        this.getView(V).show(e.getBody());
                                        break;
                                    case E.CLOSE_TALEN_AWAKE_VIEW:
                                        this.getView(V).close();
                                        break;
                                    case E.BATTLE_START:
                                        this.onBattleStart(e.getBody())
                                }
                            }
                            ,
                            s.onBattleStart = function(e) {
                                var t = this;
                                r(e, (function(e) {
                                        "0" === e.result.value && (t.notify(E.CLOSE_MAIN_VIEW),
                                            l.startNpcCombat(parseInt(e.id), n.PVB, new a(t.onBattleComplete,t)))
                                    }
                                ))
                            }
                            ,
                            s.onBattleComplete = function(e) {
                                var t = this;
                                if (2 === e)
                                    _((function(e) {
                                            "0" === e.result.value && (i.showCgiXmlRewardList(e),
                                            "0" !== e.add && i.showAlert("获得" + e.add + "点暗黑城声望"));
                                            var o = {
                                                selectPage: c.EXPEDITION
                                            };
                                            t.notify(E.SHOW_MAIN_VIEW, o)
                                        }
                                    ));
                                else {
                                    var o = {
                                        selectPage: c.EXPEDITION
                                    };
                                    this.notify(E.SHOW_MAIN_VIEW, o)
                                }
                            }
                            ,
                            o
                    }(s)).NAME = "BloodTalenMediatior",
                    o._RF.pop()
            }
        }
    }
));
