System.register("chunks:///_virtual/SentinelIntelligenceEggDetailsUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SentinelIntelligenceMessage.ts", "./SentinelIntelligenceEggPet.ts", "./ConfigManager.ts", "./SentineIntelligenceEggSpriteAdapter.ts"], (function(e) {
        var t, n, i, a, r, g, l, o, s, c, h, u, p, f, P, b;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    a = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        g = e._decorator,
                        l = e.Node,
                        o = e.Label,
                        s = e.Sprite,
                        c = e.NodeEventType,
                        h = e.JsonAsset
                }
                , function(e) {
                    u = e.GameUI
                }
                , function(e) {
                    p = e.SentinelIntelligenceMessage
                }
                , function(e) {
                    f = e.SentinelIntelligenceEggPet
                }
                , function(e) {
                    P = e.default
                }
                , function(e) {
                    b = e.SentineIntelligenceEggSpriteAdapter
                }
            ],
            execute: function() {
                var D, d, m, I, y, S, v, E, C, z, w, F, T, N, x, U, _, L, O, j, B, H, A, G, M, R, q, W, J, V;
                r._RF.push({}, "2691dr/DyhOB6xj19VZAM1e", "SentinelIntelligenceEggDetailsUI", void 0);
                var k = g.ccclass
                    , Z = g.property;
                e("SentinelIntelligenceEggDetailsUI", (D = Z(l),
                    d = Z(o),
                    m = Z(s),
                    I = Z(o),
                    y = Z(o),
                    S = Z(o),
                    v = Z(o),
                    E = Z(l),
                    C = Z(l),
                    z = Z(o),
                    w = Z(l),
                    F = Z(l),
                    T = Z(o),
                    N = Z(l),
                k((_ = t((U = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), g = 0; g < n; g++)
                            r[g] = arguments[g];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            i(t, "closeBtn", _, a(t)),
                            i(t, "selectedEggType", L, a(t)),
                            i(t, "eggIcon", O, a(t)),
                            i(t, "description1", j, a(t)),
                            i(t, "description2", B, a(t)),
                            i(t, "description3", H, a(t)),
                            i(t, "description4", A, a(t)),
                            i(t, "prevPage", G, a(t)),
                            i(t, "nextPage", M, a(t)),
                            i(t, "pageInfo", R, a(t)),
                            i(t, "prevPageData", q, a(t)),
                            i(t, "nextPageData", W, a(t)),
                            i(t, "pageInfoData", J, a(t)),
                            i(t, "eggList", V, a(t)),
                            t.currentPage = 1,
                            t.totalPage = 1,
                            t.currentDataPage = 1,
                            t.totalDataPage = 1,
                            t.eggCfg = [],
                            t.hatchablePetFormat = "",
                            t.requiredGoldFormat = "",
                            t.hatchTimeFormat = "",
                            t.tradeableFormat = "",
                            t
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        this.hatchablePetFormat = this.description1.string,
                            this.requiredGoldFormat = this.description2.string,
                            this.hatchTimeFormat = this.description3.string,
                            this.tradeableFormat = this.description4.string,
                            this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this),
                            this.prevPage.on(c.TOUCH_END, this.onPrevPage, this),
                            this.nextPage.on(c.TOUCH_END, this.onNextPage, this),
                            this.prevPageData.on(c.TOUCH_END, this.onPrevPageData, this),
                            this.nextPageData.on(c.TOUCH_END, this.onNextPageData, this),
                            this.eggCfg = this.getEggData(),
                            console.log("[jinlong] [sentinel-Intelligence] [SentinelIntelligenceEggDetailsUI] [onLoad] eggData " + JSON.stringify(this.eggCfg || "")),
                            this.totalDataPage = this.eggCfg.length,
                            this.currentDataPage = 1,
                            this.refreshPageData()
                    }
                        ,
                        r.getEggData = function() {
                            var e = []
                                , t = P.Instance.getRes("json/sentinel-egg-2601", h);
                            if (t)
                                for (var n = 0; n < t.json.length; n++) {
                                    var i = t.json[n];
                                    e.push(i)
                                }
                            return e
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(p.SHOW_REWARD_VIEW)
                        }
                        ,
                        r.onPrevPage = function() {
                            this.currentPage <= 1 || (this.currentPage--,
                                this.refreshPage())
                        }
                        ,
                        r.onNextPage = function() {
                            this.currentPage >= this.totalPage || (this.currentPage++,
                                this.refreshPage())
                        }
                        ,
                        r.onPrevPageData = function() {
                            this.currentDataPage <= 1 || (this.currentDataPage--,
                                this.refreshPageData())
                        }
                        ,
                        r.onNextPageData = function() {
                            this.currentDataPage >= this.totalDataPage || (this.currentDataPage++,
                                this.refreshPageData())
                        }
                        ,
                        r.refreshPage = function() {
                            this.eggList.children.forEach((function(e) {
                                    e.active = !1
                                }
                            ));
                            var e = this.eggCfg[this.currentDataPage - 1]
                                , t = 3 * (this.currentPage - 1)
                                , n = t + 3;
                            n > e.hatchableSprites.length && (n = e.hatchableSprites.length);
                            for (var i = t; i < n; i++) {
                                var a = e.hatchableSprites[i]
                                    , r = this.eggList.children[i - t];
                                if (r)
                                    r.active = !0,
                                        r.getComponent(f).setPetData(a)
                            }
                            this.pageInfo.string = this.currentPage + "/" + this.totalPage
                        }
                        ,
                        r.refreshPageData = function() {
                            console.log("[jinlong] [sentinel-Intelligence] [SentinelIntelligenceEggDetailsUI] [refreshPageData] currentDataPage " + this.currentDataPage),
                                this.pageInfoData.string = this.currentDataPage + "/" + this.totalDataPage;
                            var e = this.eggCfg[this.currentDataPage - 1];
                            this.currentPage = 1,
                                this.totalPage = Math.ceil(e.hatchableSprites.length / 3),
                                this.refreshPage(),
                                this.selectedEggType.string = e.eggName,
                                this.description1.string = this.hatchablePetFormat.replace("{0}", e.hatchSettings.hatchableCount.toString()),
                                this.description2.string = this.requiredGoldFormat.replace("{0}", e.hatchSettings.requiredGold.toString()),
                                this.description3.string = this.hatchTimeFormat.replace("{0}", e.hatchSettings.hatchTime.toString()),
                                this.description4.string = this.tradeableFormat.replace("{0}", e.hatchSettings.tradeable ? "可交易" : "不可交易");
                            var t = this.eggIcon.getComponent(b);
                            null == t || t.updateSprite(e.eggId)
                        }
                        ,
                        t
                }(u)).prototype, "closeBtn", [D], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    L = t(U.prototype, "selectedEggType", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = t(U.prototype, "eggIcon", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = t(U.prototype, "description1", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = t(U.prototype, "description2", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = t(U.prototype, "description3", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = t(U.prototype, "description4", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = t(U.prototype, "prevPage", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = t(U.prototype, "nextPage", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = t(U.prototype, "pageInfo", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = t(U.prototype, "prevPageData", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = t(U.prototype, "nextPageData", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = t(U.prototype, "pageInfoData", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = t(U.prototype, "eggList", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = U)) || x));
                r._RF.pop()
            }
        }
    }
));
