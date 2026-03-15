System.register("chunks:///_virtual/SentinelIntelligenceMainUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SentinelIntelligenceMessage.ts", "./SentinelIntelligenceProtocol.ts", "./SentinelMainBossItem.ts", "./SentinelIntelligenceDataProcessor.ts", "./ActivityAPI.ts", "./CommonAPI.ts", "./CombatType.ts", "./CFunction.ts", "./PureNotificationCenter.ts", "./global.ts", "./NotificationCenter.ts", "./NotifyDef.ts"], (function(t) {
        var n, e, i, o, s, r, l, a, u, c, f, h, g, p, B, I, v, y, C, m, b, d;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        r = t._decorator,
                        l = t.Node,
                        a = t.Label,
                        u = t.NodeEventType
                }
                , function(t) {
                    c = t.GameUI
                }
                , function(t) {
                    f = t.SentinelIntelligenceMessage
                }
                , function(t) {
                    h = t.sentinelIntelligenceProtocol
                }
                , function(t) {
                    g = t.SentinelMainBossItem
                }
                , function(t) {
                    p = t.sentinelIntelligenceDataProcessor
                }
                , function(t) {
                    B = t.ActivityAPI
                }
                , function(t) {
                    I = t.CommonAPI
                }
                , function(t) {
                    v = t.CombatType
                }
                , function(t) {
                    y = t.CFunction
                }
                , function(t) {
                    C = t.PureNotificationCenter
                }
                , function(t) {
                    m = t.__global
                }
                , function(t) {
                    b = t.NotificationCenter
                }
                , function(t) {
                    d = t.NotifyDef
                }
            ],
            execute: function() {
                var A, _, w, S, T, D, E, N, R, O, P, F, L, U, H, M, W, k, z, G, V, j, q, x;
                s._RF.push({}, "062b14XfWlLR5qtm6FXBhdP", "SentinelIntelligenceMainUI", void 0);
                var J = r.ccclass
                    , X = r.property;
                t("SentinelIntelligenceMainUI", (A = X(l),
                    _ = X(l),
                    w = X(l),
                    S = X(l),
                    T = X(l),
                    D = X(l),
                    E = X(l),
                    N = X(l),
                    R = X(a),
                    O = X(a),
                    P = X(l),
                J((U = n((L = function(t) {
                    function n() {
                        for (var n, e = arguments.length, s = new Array(e), r = 0; r < e; r++)
                            s[r] = arguments[r];
                        return n = t.call.apply(t, [this].concat(s)) || this,
                            i(n, "closeBtn", U, o(n)),
                            i(n, "ruleBtn", H, o(n)),
                            i(n, "rewardShopBtn", M, o(n)),
                            i(n, "forestBtn", W, o(n)),
                            i(n, "contractBtn", k, o(n)),
                            i(n, "refreshBtn", z, o(n)),
                            i(n, "refreshBossBtn", G, o(n)),
                            i(n, "refreshBossGray", V, o(n)),
                            i(n, "todayFightCount", j, o(n)),
                            i(n, "taskContent", q, o(n)),
                            i(n, "bossList", x, o(n)),
                            n
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.onLoad = function() {
                        this.closeBtn.on(u.TOUCH_END, this.onCloseBtn, this),
                            this.ruleBtn.on(u.TOUCH_END, this.onRuleBtn, this),
                            this.rewardShopBtn.on(u.TOUCH_END, this.onRewardShopBtn, this),
                            this.forestBtn.on(u.TOUCH_END, this.onForestBtn, this),
                            this.contractBtn.on(u.TOUCH_END, this.onContractBtn, this),
                            this.refreshBtn.on(u.TOUCH_END, this.onRefreshBtn, this),
                            this.refreshBossBtn.on(u.TOUCH_END, this.onRefreshBossBtn, this),
                            this.refreshBossGray.on(u.TOUCH_END, this.onRefreshBossGray, this)
                    }
                        ,
                        s.onCloseBtn = function() {
                            this.notify(f.CLOSE_MASTER_VIEW)
                        }
                        ,
                        s.onRuleBtn = function() {
                            this.notify(f.SHOW_RULE_VIEW)
                        }
                        ,
                        s.onRewardShopBtn = function() {
                            this.notify(f.SHOW_REWARD_VIEW)
                        }
                        ,
                        s.onForestBtn = function() {
                            this.notify(f.SHOW_FOREST_INTELLIGENCE_VIEW)
                        }
                        ,
                        s.onContractBtn = function() {
                            this.notify(f.SHOW_CONTRACT_VIEW)
                        }
                        ,
                        s.onRefreshBtn = function() {
                            var t = this
                                , n = p.processedActivityData.activityInfo.bossRefreshCount;
                            if (n < 5) {
                                var e = p.getRefreshCostDescription(n);
                                console.log("[jinlong] [sentinel-Intelligence] [onRefreshBtn] " + e),
                                    "首次刷新免费" == e ? B.showConfirmAlert("首次刷新免费，是否刷新？", (function() {
                                            t.refreshTask()
                                        }
                                    )) : B.showConfirmAlert("确定消耗" + e + "进行刷新吗？", (function() {
                                            t.refreshTask()
                                        }
                                    ))
                            } else
                                B.showConfirmAlert("每日最多可以刷新5次，今日已达上限!")
                        }
                        ,
                        s.onRefreshBossBtn = function() {
                            var t = this;
                            B.showConfirmAlert("确定消耗10洛克钻，刷新Boss吗？", (function() {
                                    t.refreshBoss()
                                }
                            ))
                        }
                        ,
                        s.onRefreshBossGray = function() {}
                        ,
                        s.refreshAwakePage = function() {
                            this.refreshBossList(),
                                this.setTaskContent(),
                                this.setFightCount()
                        }
                        ,
                        s.refreshTask = function() {
                            var t = this;
                            h.refresh({
                                index: 1
                            }, (function(n) {
                                    var e, i;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [refreshTask] " + JSON.stringify(n || "")),
                                    "0" === (null == n || null == (e = n.result) ? void 0 : e.value))
                                        p.processActivityData(n),
                                            t.refreshAwakePage(),
                                            b.sendNotification(d.MAIN_UI_UPDATE_DIAMOND);
                                    else if ("-2" === (null == n || null == (i = n.result) ? void 0 : i.value))
                                        m.showRocoDiamondConfirm();
                                    else {
                                        var o;
                                        B.showAlert((null == n || null == (o = n.result) ? void 0 : o.msg) || "刷新失败")
                                    }
                                }
                            ), (function(t) {
                                    B.showAlert(t)
                                }
                            ))
                        }
                        ,
                        s.refreshBoss = function() {
                            var t = this;
                            h.refresh({
                                index: 2
                            }, (function(n) {
                                    var e, i;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [refreshBoss] " + JSON.stringify(n || "")),
                                    "0" === (null == n || null == (e = n.result) ? void 0 : e.value))
                                        p.processActivityData(n),
                                            t.refreshAwakePage(),
                                            b.sendNotification(d.MAIN_UI_UPDATE_DIAMOND);
                                    else if ("-2" === (null == n || null == (i = n.result) ? void 0 : i.value))
                                        m.showRocoDiamondConfirm();
                                    else {
                                        var o;
                                        B.showAlert((null == n || null == (o = n.result) ? void 0 : o.msg) || "刷新失败")
                                    }
                                }
                            ), (function(t) {
                                    B.showAlert(t)
                                }
                            ))
                        }
                        ,
                        s.refreshBossList = function() {
                            this.bossList.children.forEach((function(t) {
                                    t.active = !1,
                                        t.off(g.START_FIGHT)
                                }
                            ));
                            for (var t = p.processedActivityData, n = 0; n < this.bossList.children.length; n++) {
                                var e = this.bossList.children[n]
                                    , i = e.getComponent(g);
                                n < t.bossList.length ? (e.active = !0,
                                    e.on(g.START_FIGHT, this.onStartFight, this),
                                    i.setBossData(t.bossList[n], n)) : e.active = !1
                            }
                        }
                        ,
                        s.setTaskContent = function() {
                            var t = p.processedActivityData;
                            this.taskContent.string = t.missionInfo.description
                        }
                        ,
                        s.setFightCount = function() {
                            var t = p.processedActivityData;
                            this.todayFightCount.string = t.activityInfo.remainingFights + "/" + t.activityInfo.totalFights
                        }
                        ,
                        s.onStartFight = function(t) {
                            var n = new y(this.onBattleComplete,this);
                            I.startNpcCombat(parseInt(t), v.PVB, n),
                                this.notify(f.CLOSE_MASTER_VIEW)
                        }
                        ,
                        s.onBattleComplete = function(t) {
                            console.log("[jinlong] [sentinel-Intelligence] [onBattleComplete] " + t),
                                2 === t ? h.fightSettle((function(t) {
                                        var n, e;
                                        if (console.log("[jinlong] [sentinel-Intelligence] [onBattleComplete] " + JSON.stringify(t || "")),
                                        "0" === (null == t || null == (n = t.result) ? void 0 : n.value))
                                            if (null != t && t.Item) {
                                                var i, o, s, r, l = {
                                                    id: parseInt((null == t || null == (i = t.Item) ? void 0 : i.id) || "0"),
                                                    count: parseInt((null == t || null == (o = t.Item) ? void 0 : o.count) || "0"),
                                                    type: parseInt((null == t || null == (s = t.Item) ? void 0 : s.type) || "0"),
                                                    equipItemId: parseInt((null == t || null == (r = t.Item) ? void 0 : r.equipItemId) || "0")
                                                };
                                                m.showItemPanelBySingle([l])
                                            } else
                                                B.showAlert("战斗胜利");
                                        else
                                            B.showAlert("" + ((null == t || null == (e = t.result) ? void 0 : e.msg) || "未知错误"))
                                    }
                                )) : -1 === t || B.showAlert("战斗失败"),
                                C.sendNotification(f.SHOW_MASTER_VIEW)
                        }
                        ,
                        n
                }(c)).prototype, "closeBtn", [A], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    H = n(L.prototype, "ruleBtn", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = n(L.prototype, "rewardShopBtn", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = n(L.prototype, "forestBtn", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = n(L.prototype, "contractBtn", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = n(L.prototype, "refreshBtn", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = n(L.prototype, "refreshBossBtn", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = n(L.prototype, "refreshBossGray", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = n(L.prototype, "todayFightCount", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = n(L.prototype, "taskContent", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = n(L.prototype, "bossList", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = L)) || F));
                s._RF.pop()
            }
        }
    }
));
