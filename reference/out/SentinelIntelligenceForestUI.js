System.register("chunks:///_virtual/SentinelIntelligenceForestUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SentinelIntelligenceMessage.ts", "./SentinelForestIntelligenceRewardItem.ts", "./SentinelIntelligenceDataProcessor.ts", "./SentinelIntelligenceProtocol.ts", "./ActivityAPI.ts"], (function(e) {
        var n, t, i, r, s, l, o, a, c, g, u, h, f, v, P;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    s = e.cclegacy,
                        l = e._decorator,
                        o = e.Node,
                        a = e.Label,
                        c = e.NodeEventType
                }
                , function(e) {
                    g = e.GameUI
                }
                , function(e) {
                    u = e.SentinelIntelligenceMessage
                }
                , function(e) {
                    h = e.SentinelForestIntelligenceRewardItem
                }
                , function(e) {
                    f = e.sentinelIntelligenceDataProcessor
                }
                , function(e) {
                    v = e.sentinelIntelligenceProtocol
                }
                , function(e) {
                    P = e.ActivityAPI
                }
            ],
            execute: function() {
                var p, I, d, b, y, L, B, m, S, E, N, _;
                s._RF.push({}, "f2b58Umds1L4p4TT7/0W9Tx", "SentinelIntelligenceForestUI", void 0);
                var R = l.ccclass
                    , T = l.property;
                e("SentinelIntelligenceForestUI", (p = T(o),
                    I = T(o),
                    d = T(o),
                    b = T(o),
                    y = T(a),
                R((m = n((B = function(e) {
                    function n() {
                        for (var n, t = arguments.length, s = new Array(t), l = 0; l < t; l++)
                            s[l] = arguments[l];
                        return n = e.call.apply(e, [this].concat(s)) || this,
                            i(n, "closeBtn", m, r(n)),
                            i(n, "intelligenceList", S, r(n)),
                            i(n, "prevPage", E, r(n)),
                            i(n, "nextPage", N, r(n)),
                            i(n, "pageInfo", _, r(n)),
                            n.pageInfoFormat = "",
                            n.currentPage = 1,
                            n.totalPage = 1,
                            n.bossList = [],
                            n.originalBossList = [],
                            n
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.onLoad = function() {
                        this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this),
                            this.prevPage.on(c.TOUCH_END, this.onPrevPage, this),
                            this.nextPage.on(c.TOUCH_END, this.onNextPage, this),
                            this.pageInfoFormat = this.pageInfo.string
                    }
                        ,
                        s.onCloseBtn = function() {
                            this.notify(u.SHOW_MASTER_VIEW)
                        }
                        ,
                        s.onPrevPage = function() {
                            this.currentPage > 1 && (this.currentPage--,
                                this.refreshPage())
                        }
                        ,
                        s.onNextPage = function() {
                            this.currentPage < this.totalPage && (this.currentPage++,
                                this.refreshPage())
                        }
                        ,
                        s.refreshAwakePage = function() {
                            var e = this;
                            v.queryAllBoss((function(n) {
                                    var t;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [queryBossInfo] success " + JSON.stringify(n || "")),
                                    "0" === (null == n || null == (t = n.result) ? void 0 : t.value)) {
                                        var i = f.processBossList(n);
                                        e.originalBossList = i;
                                        var r = [].concat(i);
                                        r.sort((function(e, n) {
                                                return n.schedule - e.schedule
                                            }
                                        )),
                                            e.bossList = r,
                                            e.refreshPage()
                                    } else {
                                        var s;
                                        console.error("查询失败:", (null == n || null == (s = n.result) ? void 0 : s.msg) || "未知错误")
                                    }
                                }
                            ), (function(e) {
                                    console.log("[jinlong] [sentinel-Intelligence] [queryBossInfo] error " + JSON.stringify(e || ""))
                                }
                            ))
                        }
                        ,
                        s.refreshPage = function() {
                            var e = this;
                            this.intelligenceList.children.forEach((function(n) {
                                    n.active = !1,
                                        n.off(h.EVENT_ON_RECEIVE_BTN, e.onReceiveBtn, e)
                                }
                            ));
                            for (var n = (this.currentPage - 1) * this.intelligenceList.children.length, t = n + this.intelligenceList.children.length, i = n; i < t; i++) {
                                var r = this.intelligenceList.children[i - n]
                                    , s = r.getComponent(h);
                                if (i < this.bossList.length) {
                                    r.active = !0;
                                    var l = this.bossList[i];
                                    s.setRewardData(l),
                                        s.node.on(h.EVENT_ON_RECEIVE_BTN, this.onReceiveBtn, this)
                                } else
                                    r.active = !1
                            }
                            this.refreshPageInfo()
                        }
                        ,
                        s.refreshPageInfo = function() {
                            this.totalPage = Math.ceil(this.bossList.length / this.intelligenceList.children.length),
                                this.currentPage = Math.min(this.currentPage, this.totalPage),
                                this.pageInfo.string = this.pageInfoFormat.replace("{0}", this.currentPage.toString()).replace("{1}", this.totalPage.toString())
                        }
                        ,
                        s.onReceiveBtn = function(e) {
                            var n = this;
                            console.log("[jinlong] [sentinel-Intelligence] [onReceiveBtn] " + JSON.stringify(e || ""));
                            var t = this.originalBossList.findIndex((function(n) {
                                    return n.id === e.id
                                }
                            ));
                            -1 !== t && v.getPrize({
                                index: t + 1
                            }, (function(e) {
                                    var t;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [onReceiveBtn] " + JSON.stringify(e || "")),
                                    "0" === (null == e || null == (t = e.result) ? void 0 : t.value)) {
                                        null != e && e.add && P.showAlert("获得" + e.add + "赏金");
                                        var i = f.processBossList(e);
                                        n.originalBossList = i;
                                        var r = [].concat(i);
                                        r.sort((function(e, n) {
                                                return n.schedule - e.schedule
                                            }
                                        )),
                                            n.bossList = r,
                                            n.refreshPage()
                                    } else {
                                        var s;
                                        P.showAlert("" + ((null == e || null == (s = e.result) ? void 0 : s.msg) || "未知错误"))
                                    }
                                }
                            ))
                        }
                        ,
                        n
                }(g)).prototype, "closeBtn", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    S = n(B.prototype, "intelligenceList", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = n(B.prototype, "prevPage", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = n(B.prototype, "nextPage", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = n(B.prototype, "pageInfo", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = B)) || L));
                s._RF.pop()
            }
        }
    }
));
