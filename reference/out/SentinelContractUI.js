System.register("chunks:///_virtual/SentinelContractUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SentinelIntelligenceMessage.ts", "./SentinelContractItem.ts", "./SentinelIntelligenceDataProcessor.ts"], (function(t) {
        var e, n, i, a, r, o, s, c, l, h, g, u, f;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    a = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        o = t._decorator,
                        s = t.Node,
                        c = t.Label,
                        l = t.NodeEventType
                }
                , function(t) {
                    h = t.GameUI
                }
                , function(t) {
                    g = t.SentinelIntelligenceMessage
                }
                , function(t) {
                    u = t.SentinelContractItem
                }
                , function(t) {
                    f = t.sentinelIntelligenceDataProcessor
                }
            ],
            execute: function() {
                var p, P, C, I, v, D, S, d, b, y, m, w, _, E;
                r._RF.push({}, "52cdbUsD7FNxZ+LzjqKH22v", "SentinelContractUI", void 0);
                var L = o.ccclass
                    , N = o.property;
                t("SentinelContractUI", (p = N(s),
                    P = N(s),
                    C = N(c),
                    I = N(s),
                    v = N(s),
                    D = N(c),
                L((b = e((d = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                            r[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            i(e, "closeBtn", b, a(e)),
                            i(e, "petList", y, a(e)),
                            i(e, "ownedContractCount", m, a(e)),
                            i(e, "prevPage", w, a(e)),
                            i(e, "nextPage", _, a(e)),
                            i(e, "pageInfo", E, a(e)),
                            e.pageInfoFormat = "",
                            e.eagleContractFormat = "",
                            e.currentDataPage = 1,
                            e.totalDataPage = 1,
                            e.eagleContractCount = 0,
                            e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.closeBtn.on(l.TOUCH_END, this.onCloseBtn, this),
                            this.prevPage.on(l.TOUCH_END, this.onPrevPage, this),
                            this.nextPage.on(l.TOUCH_END, this.onNextPage, this),
                            this.pageInfoFormat = this.pageInfo.string,
                            this.eagleContractFormat = this.ownedContractCount.string
                    }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(g.SHOW_MAIN_VIEW)
                        }
                        ,
                        r.onPrevPage = function() {
                            this.currentDataPage > 1 && (this.currentDataPage--,
                                this.refreshPage(),
                                this.refreshPageInfo())
                        }
                        ,
                        r.onNextPage = function() {
                            this.currentDataPage < this.totalDataPage && (this.currentDataPage++,
                                this.refreshPage(),
                                this.refreshPageInfo())
                        }
                        ,
                        r.refreshAwakePage = function() {
                            var t = f.processedActivityData.spiritList;
                            this.eagleContractCount = t.length,
                                this.totalDataPage = Math.ceil(this.eagleContractCount / this.petList.children.length),
                                this.currentDataPage = Math.min(this.currentDataPage, this.totalDataPage),
                                this.refreshPage(),
                                this.refreshPageInfo(),
                                this.refreshOwnedContractCount()
                        }
                        ,
                        r.refreshPage = function() {
                            this.petList.children.forEach((function(t) {
                                    t.active = !1,
                                        t.off(u.SIGN_SUCCESS),
                                        t.off(u.SHOW_EVOLVE_VIEW)
                                }
                            ));
                            for (var t = f.processedActivityData.spiritList, e = (this.currentDataPage - 1) * this.petList.children.length, n = e + this.petList.children.length, i = e; i < n; i++) {
                                var a = this.petList.children[i - e]
                                    , r = a.getComponent(u);
                                if (i < t.length) {
                                    a.active = !0;
                                    var o = t[i];
                                    r.setContractData(o, i),
                                        r.node.on(u.SIGN_SUCCESS, this.refreshAwakePage, this),
                                        r.node.on(u.SHOW_EVOLVE_VIEW, this.onShowEvolveView, this)
                                } else
                                    a.active = !1
                            }
                        }
                        ,
                        r.onShowEvolveView = function(t) {
                            this.notify(g.SHOW_CONTRACT_SIGN_VIEW, t)
                        }
                        ,
                        r.refreshPageInfo = function() {
                            this.pageInfo.string = this.pageInfoFormat.replace("{0}", this.currentDataPage.toString()).replace("{1}", this.totalDataPage.toString())
                        }
                        ,
                        r.refreshOwnedContractCount = function() {
                            var t = f.processedActivityData.activityInfo;
                            this.ownedContractCount.string = this.eagleContractFormat.replace("{0}", t.contractPages.toString())
                        }
                        ,
                        e
                }(h)).prototype, "closeBtn", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = e(d.prototype, "petList", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    m = e(d.prototype, "ownedContractCount", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = e(d.prototype, "prevPage", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = e(d.prototype, "nextPage", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = e(d.prototype, "pageInfo", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = d)) || S));
                r._RF.pop()
            }
        }
    }
));
