System.register("chunks:///_virtual/SentinelRewardShopUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SentinelIntelligenceMessage.ts", "./SentinelRewardShopItem.ts", "./SentinelIntelligenceDataProcessor.ts", "./ActivityAPI.ts", "./SentinelIntelligenceProtocol.ts", "./NotificationCenter.ts", "./NotifyDef.ts"], (function(e) {
        var t, n, i, r, o, s, l, a, c, f, u, h, g, p, d, I, v;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        s = e._decorator,
                        l = e.Node,
                        a = e.Label,
                        c = e.NodeEventType
                }
                , function(e) {
                    f = e.GameUI
                }
                , function(e) {
                    u = e.SentinelIntelligenceMessage
                }
                , function(e) {
                    h = e.SentinelRewardShopItem
                }
                , function(e) {
                    g = e.sentinelIntelligenceDataProcessor
                }
                , function(e) {
                    p = e.ActivityAPI
                }
                , function(e) {
                    d = e.sentinelIntelligenceProtocol
                }
                , function(e) {
                    I = e.NotificationCenter
                }
                , function(e) {
                    v = e.NotifyDef
                }
            ],
            execute: function() {
                var y, w, S, C, A, b, D, B, m, E, _, N;
                o._RF.push({}, "132ffjZ6j9HYqIo6lYYSCpS", "SentinelRewardShopUI", void 0);
                var P = s.ccclass
                    , R = s.property;
                e("SentinelRewardShopUI", (y = R(l),
                    w = R(l),
                    S = R(l),
                    C = R(l),
                    A = R(a),
                P((B = t((D = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
                            o[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            i(t, "closeBtn", B, r(t)),
                            i(t, "rewardList", m, r(t)),
                            i(t, "refreshBtn", E, r(t)),
                            i(t, "eggInfoBtn", _, r(t)),
                            i(t, "goldCount", N, r(t)),
                            t.backupGoldFormat = "",
                            t
                    }
                    n(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this),
                            this.refreshBtn.on(c.TOUCH_END, this.onRefreshBtn, this),
                            this.eggInfoBtn.on(c.TOUCH_END, this.onEggInfoBtn, this),
                            this.backupGoldFormat = this.goldCount.string
                    }
                        ,
                        o.onCloseBtn = function() {
                            this.notify(u.SHOW_MAIN_VIEW)
                        }
                        ,
                        o.onRefreshBtn = function() {
                            var e = this
                                , t = g.processedActivityData.activityInfo.exchangeRefreshCount
                                , n = t < 8;
                            if (g.processedActivityData.exchangeList.every((function(e) {
                                    return 1 == e.status
                                }
                            )))
                                p.showAlert("今日赏金已全部兑换");
                            else if (n) {
                                var i = g.getExchangeRefreshCostDescription(t);
                                console.log("[jinlong] [sentinel-Intelligence] [onRefreshBtn] " + i),
                                    p.showConfirmAlert(i, (function() {
                                            e.refreshReward()
                                        }
                                    ))
                            } else
                                p.showConfirmAlert("每日最多可以刷新8次，今日已达上限!")
                        }
                        ,
                        o.refreshReward = function() {
                            var e = this;
                            d.refresh({
                                index: 3
                            }, (function(t) {
                                    var n, i;
                                    (console.log("[jinlong] [sentinel-Intelligence] [refreshReward] " + JSON.stringify(t || "")),
                                    "0" === (null == t || null == (n = t.result) ? void 0 : n.value)) ? (g.processActivityData(t),
                                        e.refreshAwakePage(),
                                        I.sendNotification(v.MAIN_UI_UPDATE_DIAMOND)) : p.showAlert((null == t || null == (i = t.result) ? void 0 : i.msg) || "刷新失败")
                                }
                            ), (function(e) {
                                    p.showAlert(e)
                                }
                            ))
                        }
                        ,
                        o.onEggInfoBtn = function() {
                            this.notify(u.SHOW_INTELLIGENCE_EGG_VIEW)
                        }
                        ,
                        o.refreshAwakePage = function() {
                            this.refreshPage(),
                                this.refreshGoldCount()
                        }
                        ,
                        o.refreshPage = function() {
                            this.rewardList.children.forEach((function(e) {
                                    e.active = !1,
                                        e.off(h.BUY_SUCCESS)
                                }
                            ));
                            for (var e = g.processedActivityData.exchangeList, t = 0; t < this.rewardList.children.length; t++) {
                                var n = this.rewardList.children[t];
                                n.active = !0;
                                var i = n.getComponent(h);
                                if (t < e.length) {
                                    var r = e[t];
                                    i.setItemData(r, t),
                                        i.node.on(h.BUY_SUCCESS, this.refreshAwakePage, this)
                                }
                            }
                        }
                        ,
                        o.refreshGoldCount = function() {
                            var e = g.processedActivityData.activityInfo;
                            this.goldCount.string = this.backupGoldFormat.replace("{0}", e.currentPoint.toString())
                        }
                        ,
                        t
                }(f)).prototype, "closeBtn", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    m = t(D.prototype, "rewardList", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = t(D.prototype, "refreshBtn", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = t(D.prototype, "eggInfoBtn", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = t(D.prototype, "goldCount", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    b = D)) || b));
                o._RF.pop()
            }
        }
    }
));
