System.register("chunks:///_virtual/SentinelIntelligenceMasterUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SentinelIntelligenceMessage.ts", "./SentinelIntelligenceMainUI.ts", "./SentinelIntelligenceRuleUI.ts", "./SentinelRewardShopUI.ts", "./SentinelContractSigningUI.ts", "./SentinelIntelligenceEggDetailsUI.ts", "./SentinelContractUI.ts", "./SentinelIntelligenceForestUI.ts", "./SentinelIntelligenceProtocol.ts", "./SentinelIntelligenceDataProcessor.ts", "./ActivityAPI.ts"], (function(e) {
        var n, t, i, l, o, r, s, c, a, I, u, g, S, f, h, U, p, d, C, _;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    l = e.assertThisInitialized,
                    o = e.createForOfIteratorHelperLoose
            }
                , function(e) {
                    r = e.cclegacy,
                        s = e._decorator,
                        c = e.Node
                }
                , function(e) {
                    a = e.GameUI
                }
                , function(e) {
                    I = e.SentinelIntelligenceMessage
                }
                , function(e) {
                    u = e.SentinelIntelligenceMainUI
                }
                , function(e) {
                    g = e.SentinelIntelligenceRuleUI
                }
                , function(e) {
                    S = e.SentinelRewardShopUI
                }
                , function(e) {
                    f = e.SentinelContractSigningUI
                }
                , function(e) {
                    h = e.SentinelIntelligenceEggDetailsUI
                }
                , function(e) {
                    U = e.SentinelContractUI
                }
                , function(e) {
                    p = e.SentinelIntelligenceForestUI
                }
                , function(e) {
                    d = e.sentinelIntelligenceProtocol
                }
                , function(e) {
                    C = e.sentinelIntelligenceDataProcessor
                }
                , function(e) {
                    _ = e.ActivityAPI
                }
            ],
            execute: function() {
                var b, y, w, E, v, R, O, A, M, N, W, D, m, L, P, k, z, F;
                r._RF.push({}, "ec1ebYsUVZEZpQXNiORQbiO", "SentinelIntelligenceMasterUI", void 0);
                var V = s.ccclass
                    , H = s.property;
                e("SentinelIntelligenceMasterUI", (b = H(u),
                    y = H(g),
                    w = H(S),
                    E = H(f),
                    v = H(U),
                    R = H(h),
                    O = H(p),
                    A = H(c),
                V((W = n((N = function(e) {
                    function n() {
                        for (var n, t = arguments.length, o = new Array(t), r = 0; r < t; r++)
                            o[r] = arguments[r];
                        return n = e.call.apply(e, [this].concat(o)) || this,
                            i(n, "SentinelIntelligenceMainUI", W, l(n)),
                            i(n, "SentinelIntelligenceRuleUI", D, l(n)),
                            i(n, "SentinelRewardShopUI", m, l(n)),
                            i(n, "SentinelContractSigningUI", L, l(n)),
                            i(n, "SentinelContractUI", P, l(n)),
                            i(n, "SentinelIntelligenceEggDetailsUI", k, l(n)),
                            i(n, "SentinelIntelligenceForestUI", z, l(n)),
                            i(n, "frontNode", F, l(n)),
                            n._uiConfig = new Map,
                            n
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.initUIConfig = function() {
                        this._uiConfig.set(this.SentinelIntelligenceMainUI.node, [this.SentinelIntelligenceRuleUI.node]),
                            this._uiConfig.set(this.SentinelIntelligenceRuleUI.node, [this.SentinelIntelligenceMainUI.node]),
                            this._uiConfig.set(this.SentinelRewardShopUI.node, []),
                            this._uiConfig.set(this.SentinelContractSigningUI.node, [this.SentinelContractUI.node]),
                            this._uiConfig.set(this.SentinelContractUI.node, [this.SentinelContractSigningUI.node]),
                            this._uiConfig.set(this.SentinelIntelligenceEggDetailsUI.node, []),
                            this._uiConfig.set(this.SentinelIntelligenceForestUI.node, []),
                            this._uiConfig.set(this.frontNode, [])
                    }
                        ,
                        r.showUI = function(e, n) {
                            var t;
                            e.node.active = !0,
                            null == (t = e.refreshAwakePage) || t.call(e, n);
                            for (var i, l = e.node, r = this._uiConfig.get(l) || [], s = o(this._uiConfig); !(i = s()).done; ) {
                                var c = i.value
                                    , a = c[0];
                                c[1];
                                a !== l && (a.active && !r.includes(a) && (a.active = !1))
                            }
                        }
                        ,
                        r.showSubUI = function(e) {
                            switch (e.getName()) {
                                case I.SHOW_MAIN_VIEW:
                                    this.showUI(this.SentinelIntelligenceMainUI);
                                    break;
                                case I.SHOW_RULE_VIEW:
                                    this.showUI(this.SentinelIntelligenceRuleUI);
                                    break;
                                case I.SHOW_REWARD_VIEW:
                                    this.showUI(this.SentinelRewardShopUI);
                                    break;
                                case I.SHOW_CONTRACT_VIEW:
                                    this.showUI(this.SentinelContractUI);
                                    break;
                                case I.SHOW_FOREST_INTELLIGENCE_VIEW:
                                    this.showUI(this.SentinelIntelligenceForestUI);
                                    break;
                                case I.SHOW_INTELLIGENCE_EGG_VIEW:
                                    this.showUI(this.SentinelIntelligenceEggDetailsUI);
                                    break;
                                case I.SHOW_CONTRACT_SIGN_VIEW:
                                    this.showUI(this.SentinelContractSigningUI, e.getBody())
                            }
                        }
                        ,
                        r.refreshAwakePage = function() {
                            var e = this;
                            d.queryActivityStatus((function(n) {
                                    var t, i, l;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [queryIntelligenceData] success " + JSON.stringify(n || "")),
                                    "0" !== (null == n || null == (t = n.result) ? void 0 : t.value))
                                        return console.error("查询失败:", (null == n || null == (i = n.result) ? void 0 : i.msg) || "未知错误"),
                                            _.showAlert((null == n || null == (l = n.result) ? void 0 : l.msg) || "未知错误"),
                                            void e.notify(I.CLOSE_MASTER_VIEW);
                                    C.processActivityData(n),
                                        e.showUI(e.SentinelIntelligenceMainUI),
                                        e.SentinelIntelligenceMainUI.refreshAwakePage()
                                }
                            ), (function(e) {
                                    console.log("[jinlong] [sentinel-Intelligence] [queryIntelligenceData] error " + JSON.stringify(e || "")),
                                        _.showAlert(e)
                                }
                            )),
                                d.queryAllBoss((function(e) {
                                        console.log("[jinlong] [sentinel-Intelligence] [queryBossInfo] success " + JSON.stringify(e || ""))
                                    }
                                ), (function(e) {
                                        console.log("[jinlong] [sentinel-Intelligence] [queryBossInfo] error " + JSON.stringify(e || ""))
                                    }
                                ))
                        }
                        ,
                        r.onLoad = function() {
                            this.initUIConfig()
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(I.CLOSE_RULE_VIEW)
                        }
                        ,
                        n
                }(a)).prototype, "SentinelIntelligenceMainUI", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    D = n(N.prototype, "SentinelIntelligenceRuleUI", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    m = n(N.prototype, "SentinelRewardShopUI", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = n(N.prototype, "SentinelContractSigningUI", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = n(N.prototype, "SentinelContractUI", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = n(N.prototype, "SentinelIntelligenceEggDetailsUI", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = n(N.prototype, "SentinelIntelligenceForestUI", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = n(N.prototype, "frontNode", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = N)) || M));
                r._RF.pop()
            }
        }
    }
));
