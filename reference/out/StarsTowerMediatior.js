System.register("chunks:///_virtual/StarsTowerMediatior.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts", "./global.ts", "./CombatType.ts", "./CFunction.ts", "./GameMediator.ts", "./Xml2Json.ts", "./CommonAPI.ts", "./StarsTowerCGI.ts", "./StarsTowerShopCGI.ts", "./StarsTowerConfig.ts", "./StarsTowerMessage.ts", "./StarsTowerChallengeView.ts", "./StarsTowerDisintegrateView.ts", "./StarsTowerRuleView.ts", "./StarsTowerShopView.ts", "./StarsTowerSweepRuleView.ts", "./StarsTowerSweepView.ts", "./StarsTowerUpgradePetView.ts", "./StarsTowerUpRuleView.ts", "./StarsTowerView.ts"], (function(e) {
        var t, s, i, o, r, n, a, w, S, E, _, c, V, g, h, l, I, u, W, f, p, T, O, d, A, L;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    i = e.ActivityAPI
                }
                , function(e) {
                    o = e.__global
                }
                , function(e) {
                    r = e.CombatType
                }
                , function(e) {
                    n = e.CFunction
                }
                , function(e) {
                    a = e.GameMediator
                }
                , function(e) {
                    w = e.Xml2Json
                }
                , function(e) {
                    S = e.CommonAPI
                }
                , function(e) {
                    E = e.GetStarsTowerData,
                        _ = e.GetBagData,
                        c = e.GetBossFightAward,
                        V = e.GetFightAward,
                        g = e.GetStarsTowerConfig
                }
                , function(e) {
                    h = e.GetStarsShopData
                }
                , function(e) {
                    l = e.CLIP_ARR
                }
                , function(e) {
                    I = e.StarsTowerMessage
                }
                , function(e) {
                    u = e.StarsTowerChallengeView
                }
                , function(e) {
                    W = e.StarsTowerDisintegrateView
                }
                , function(e) {
                    f = e.StarsTowerRuleView
                }
                , function(e) {
                    p = e.StarsTowerShopView
                }
                , function(e) {
                    T = e.StarsTowerSweepRuleView
                }
                , function(e) {
                    O = e.StarsTowerSweepView
                }
                , function(e) {
                    d = e.StarsTowerUpgradePetView
                }
                , function(e) {
                    A = e.StarsTowerUpRuleView
                }
                , function(e) {
                    L = e.StarsTowerView
                }
            ],
            execute: function() {
                s._RF.push({}, "2a612+21xtIdJiBOAgPGPvn", "StarsTowerMediatior", void 0),
                    e("StarsTowerMediatior", function(e) {
                        function s() {
                            return e.call(this, s.NAME) || this
                        }
                        t(s, e);
                        var a = s.prototype;
                        return a.onRegisterView = function() {
                            this.registerView(L),
                                this.registerView(u),
                                this.registerView(O),
                                this.registerView(f),
                                this.registerView(A),
                                this.registerView(p),
                                this.registerView(W),
                                this.registerView(d),
                                this.registerView(T)
                        }
                            ,
                            a.onRegisterProtocol = function() {}
                            ,
                            a.onUnregisterProtocol = function() {}
                            ,
                            a.onNotificationInterests = function() {
                                return [I.BATTLE_START, I.SHOW_MAIN_VIEW, I.CLOSE_MAIN_VIEW, I.SHOW_CHALLENGE_VIEW, I.CLOSE_CHALLENGE_VIEW, I.SHOW_SWEEP_VIEW, I.CLOSE_SWEEP_VIEW, I.SHOW_RULE_VIEW, I.CLOSE_RULE_VIEW, I.SHOW_UPBOSS_RULE_VIEW, I.CLOSE_UPBOSS_RULE_VIEW, I.SHOW_SHOP_VIEW, I.CLOSE_SHOP_VIEW, I.UPDATE_SHOP_VIEW, I.SHOW_DISINTEGRATE_VIEW, I.CLOSE_DISINTEGRATE_VIEW, I.SHOW_UPGRADE_PET_VIEW, I.CLOSE_UPGRADE_PET_VIEW, I.SHOW_SWEEP_RULE_VIEW, I.CLOSE_SWEEP_RULE_VIEW]
                            }
                            ,
                            a.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case I.BATTLE_START:
                                        this.onBattleStart(e.getBody());
                                        break;
                                    case I.SHOW_MAIN_VIEW:
                                        this.onShowMainView(e.getBody());
                                        break;
                                    case I.CLOSE_MAIN_VIEW:
                                        this.getView(L).close();
                                        break;
                                    case I.SHOW_CHALLENGE_VIEW:
                                        this.getView(u).show(e.getBody());
                                        break;
                                    case I.CLOSE_CHALLENGE_VIEW:
                                        this.getView(u).close();
                                        break;
                                    case I.SHOW_SWEEP_VIEW:
                                        this.getView(O).show(e.getBody());
                                        break;
                                    case I.CLOSE_SWEEP_VIEW:
                                        this.getView(O).close();
                                        break;
                                    case I.SHOW_RULE_VIEW:
                                        this.getView(f).show(e.getBody());
                                        break;
                                    case I.CLOSE_RULE_VIEW:
                                        this.getView(f).close();
                                        break;
                                    case I.SHOW_UPBOSS_RULE_VIEW:
                                        this.getView(A).show(e.getBody());
                                        break;
                                    case I.CLOSE_UPBOSS_RULE_VIEW:
                                        this.getView(A).close();
                                        break;
                                    case I.SHOW_SHOP_VIEW:
                                        this.onShowShopView();
                                        break;
                                    case I.CLOSE_SHOP_VIEW:
                                        this.getView(p).close();
                                        break;
                                    case I.UPDATE_SHOP_VIEW:
                                        this.getView(p).show();
                                        break;
                                    case I.SHOW_DISINTEGRATE_VIEW:
                                        this.getView(W).show(e.getBody());
                                        break;
                                    case I.CLOSE_DISINTEGRATE_VIEW:
                                        this.getView(W).close();
                                        break;
                                    case I.SHOW_UPGRADE_PET_VIEW:
                                        this.onShowUpgradePetView();
                                        break;
                                    case I.CLOSE_UPGRADE_PET_VIEW:
                                        this.getView(d).close();
                                        break;
                                    case I.SHOW_SWEEP_RULE_VIEW:
                                        this.getView(T).show(e.getBody());
                                        break;
                                    case I.CLOSE_SWEEP_RULE_VIEW:
                                        this.getView(T).close()
                                }
                            }
                            ,
                            a.onShowMainView = function(e) {
                                var t = this;
                                E((function(s) {
                                        s.result.code < 0 ? o.showMsgBox(s.result.msg) : g() ? t.getView(L).show({
                                            params: s,
                                            pageIndex: null == e ? void 0 : e.pageIndex
                                        }) : i.parseConfig(1989, ["client_star_tower_new"], (function(o) {
                                                var r = w.getJsonNew(o.client_star_tower_new);
                                                i.setGlobalValue("1989", r.Root),
                                                    t.getView(L).show({
                                                        params: s,
                                                        pageIndex: null == e ? void 0 : e.pageIndex
                                                    })
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            a.onShowShopView = function() {
                                var e = this;
                                h((function(t) {
                                        t.result.code < 0 ? o.showMsgBox(t.result.msg) : e.getView(p).show(t)
                                    }
                                ))
                            }
                            ,
                            a.onShowUpgradePetView = function() {
                                var e = this;
                                _((function(t) {
                                        t.result.code < 0 ? (o.showMsgBox(t.result.msg),
                                            e.notify(I.SHOW_MAIN_VIEW)) : e.getView(d).show(t)
                                    }
                                ))
                            }
                            ,
                            a.onBattleStart = function(e) {
                                var t = e.fightid
                                    , s = e.pageIndex
                                    , i = e.nodeIndex;
                                S.startNpcCombat(parseInt(t), r.PVB, new n(this.onBattleComplete,this,[s, i]))
                            }
                            ,
                            a.onBattleComplete = function(e, t) {
                                var s = this
                                    , o = t[0];
                                if (2 === e)
                                    if (7 === o)
                                        c((function(e) {
                                                e.result.code < 0 ? i.showAlert(e.result.msg) : i.showCgiXmlRewardList(e),
                                                    s.notify(I.SHOW_MAIN_VIEW, {
                                                        pageIndex: o
                                                    })
                                            }
                                        ));
                                    else {
                                        var r = t[1];
                                        V(o, r, (function(e) {
                                                e.result.code < 0 ? i.showAlert(e.result.msg) : (s.onShowBattleAwards(e),
                                                    s.notify(I.SHOW_MAIN_VIEW, {
                                                        pageIndex: o
                                                    }))
                                            }
                                        ))
                                    }
                                else
                                    this.notify(I.SHOW_MAIN_VIEW, {
                                        pageIndex: o
                                    })
                            }
                            ,
                            a.onShowBattleAwards = function(e) {
                                var t = ""
                                    , s = e.result.code
                                    , o = s % 10
                                    , r = s / 10 % 10
                                    , n = s / 100 % 10;
                                1 == n ? (t += "宠物",
                                    1 == r ? (t += "、装备",
                                    1 == o && (t += "、道具")) : 1 == o && (t += "、道具")) : 1 == r ? (t += "装备",
                                1 == o && (t += "、道具")) : 1 == o && (t += "道具"),
                                1 != n && 1 != r && 1 != o || i.showAlert("你获得的部分" + t + "奖励已发送至邮箱。"),
                                    i.showCgiXmlRewardList(e),
                                e.clip && ("string" != typeof e.clip ? e.clip.length > 0 && (2 == e.clip.length ? i.showAlert("获得" + l[parseInt(e.clip[0])] + "碎片*10和" + l[parseInt(e.clip[1])] + "碎片*10") : i.showAlert("获得" + l[parseInt(e.clip[0])] + "碎片*10")) : i.showAlert("获得" + l[parseInt(e.clip)] + "碎片*10"))
                            }
                            ,
                            s
                    }(a)).NAME = "StarsTowerMediatior",
                    s._RF.pop()
            }
        }
    }
));
