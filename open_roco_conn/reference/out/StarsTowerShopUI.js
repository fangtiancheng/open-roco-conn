System.register("chunks:///_virtual/StarsTowerShopUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerMessage.ts", "./StarsTowerShopCGI.ts", "./StarsTowerShopItem.ts", "./StarsTowerConfig.ts", "./PropsIcon.ts", "./ActivityAPI.ts", "./CFunction.ts"], (function(t) {
        var e, n, o, i, a, r, s, l, c, p, h, g, u, f, d, y, m, b, B, I, P;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    o = t.initializerDefineProperty,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        r = t._decorator,
                        s = t.Node,
                        l = t.Label,
                        c = t.NodeEventType,
                        p = t.Button,
                        h = t.Sprite,
                        g = t.Tween
                }
                , function(t) {
                    u = t.GameUI
                }
                , function(t) {
                    f = t.StarsTowerMessage
                }
                , function(t) {
                    d = t.Lottery
                }
                , function(t) {
                    y = t.StarsTowerShopItem
                }
                , function(t) {
                    m = t.PETARR,
                        b = t.LOTTERY_PROPS
                }
                , function(t) {
                    B = t.PropsIcon
                }
                , function(t) {
                    I = t.ActivityAPI
                }
                , function(t) {
                    P = t.CFunction
                }
            ],
            execute: function() {
                var x, w, C, S, L, v, T, U, _, E, z, D, A, N, O, V, H, R, k, F;
                a._RF.push({}, "3bfa7IhJ+lF+otictBGgsrj", "StarsTowerShopUI", void 0);
                var G = r.ccclass
                    , M = r.property;
                t("StarsTowerShopUI", (x = M(s),
                    w = M(s),
                    C = M(s),
                    S = M(y),
                    L = M(s),
                    v = M(s),
                    T = M(l),
                    U = M(s),
                    _ = M(B),
                G((D = e((z = function(t) {
                    function e() {
                        for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                            a[r] = arguments[r];
                        return e = t.call.apply(t, [this].concat(a)) || this,
                            o(e, "closeBtn", D, i(e)),
                            o(e, "disintegrateBtn", A, i(e)),
                            o(e, "lotteryBtn", N, i(e)),
                            o(e, "items", O, i(e)),
                            o(e, "lastPageBtn", V, i(e)),
                            o(e, "nextPageBtn", H, i(e)),
                            o(e, "scoreLabel", R, i(e)),
                            o(e, "lotteryPointer", k, i(e)),
                            o(e, "propsList", F, i(e)),
                            e.params = null,
                            e.selectedIndex = 0,
                            e.pageIndex = 1,
                            e.maxPage = void 0,
                            e
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.start = function() {
                        this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this),
                            this.disintegrateBtn.on(c.TOUCH_END, this.onDisintegrateBtn, this),
                            this.lastPageBtn.on(c.TOUCH_END, this.onLastPageBtn, this),
                            this.nextPageBtn.on(c.TOUCH_END, this.onNextPageBtn, this),
                            this.lotteryBtn.on(c.TOUCH_END, this.onLotteryBtn, this),
                            this.onInitLotteryPropsList()
                    }
                        ,
                        a.refresh = function(t) {
                            t && (this.params = t),
                                this.updateView()
                        }
                        ,
                        a.onInitLotteryPropsList = function() {
                            for (var t = this.propsList.length, e = 0; e < t; e++) {
                                var n = this.propsList[e]
                                    , o = b[e];
                                n.data = {
                                    id: o
                                }
                            }
                        }
                        ,
                        a.updateView = function() {
                            this.onUpdateShopView(),
                                this.onUpdateScore(this.params)
                        }
                        ,
                        a.onUpdateShopView = function() {
                            this.onUpdateItems(),
                                this.onUpdatePageBtnState()
                        }
                        ,
                        a.onUpdateItems = function() {
                            var t, e, n;
                            if (0 == this.selectedIndex) {
                                t = [],
                                    e = [],
                                    n = [];
                                for (var o = 0; o < m.length; o++)
                                    t = t.concat(m[o]),
                                        e = e.concat(this.params.t[o].n),
                                        n = n.concat(this.params.t1[o].f)
                            } else
                                t = m[this.selectedIndex - 1],
                                    e = this.params.t[this.selectedIndex - 1].n,
                                    n = this.params.t1[this.selectedIndex - 1].f;
                            var i = this.items.length;
                            this.maxPage = Math.ceil(t.length / i);
                            for (var a = 0; a < i; a++) {
                                var r = this.items[a]
                                    , s = (this.pageIndex - 1) * i + a
                                    , l = e[s]
                                    , c = n[s]
                                    , p = t[s]
                                    , h = 0 == this.selectedIndex ? this.pageIndex - 1 : this.selectedIndex - 1
                                    , g = a;
                                r.refresh({
                                    index: h,
                                    id: g,
                                    petId: p,
                                    count: l,
                                    own: "1" === c
                                })
                            }
                        }
                        ,
                        a.onUpdatePageBtnState = function() {
                            this.pageIndex > 1 ? (this.lastPageBtn.getComponent(p).interactable = !0,
                                this.lastPageBtn.getComponent(h).grayscale = !1) : (this.lastPageBtn.getComponent(p).interactable = !1,
                                this.lastPageBtn.getComponent(h).grayscale = !0),
                                this.pageIndex < this.maxPage ? (this.nextPageBtn.getComponent(p).interactable = !0,
                                    this.nextPageBtn.getComponent(h).grayscale = !1) : (this.nextPageBtn.getComponent(p).interactable = !1,
                                    this.nextPageBtn.getComponent(h).grayscale = !0)
                        }
                        ,
                        a.onUpdateScore = function(t) {
                            var e = t.score;
                            this.scoreLabel.string = "已经拥有星辰积分：" + e,
                                parseInt(e) < 10 ? (this.lotteryBtn.getComponent(p).interactable = !1,
                                    this.lotteryBtn.getComponent(h).grayscale = !0) : (this.lotteryBtn.getComponent(p).interactable = !0,
                                    this.lotteryBtn.getComponent(h).grayscale = !1)
                        }
                        ,
                        a.onCloseBtn = function() {
                            this.notify(f.CLOSE_SHOP_VIEW)
                        }
                        ,
                        a.onDisintegrateBtn = function() {
                            this.notify(f.SHOW_DISINTEGRATE_VIEW, this.params)
                        }
                        ,
                        a.onToggleChanged = function(t) {
                            var e = t.node.getSiblingIndex();
                            this.selectedIndex != e && (this.selectedIndex = e,
                                this.pageIndex = 1,
                                this.onUpdateShopView())
                        }
                        ,
                        a.onLastPageBtn = function() {
                            this.pageIndex > 1 && (this.pageIndex--,
                                this.onUpdateShopView())
                        }
                        ,
                        a.onNextPageBtn = function() {
                            this.pageIndex < this.maxPage && (this.pageIndex++,
                                this.onUpdateShopView())
                        }
                        ,
                        a.onLotteryBtn = function() {
                            var t = this;
                            parseInt(this.params.score) < 10 || d((function(e) {
                                    if (e.result.code < 0)
                                        I.showAlert(e.result.msg);
                                    else {
                                        t.lotteryBtn.getComponent(p).interactable = !1,
                                            t.lotteryBtn.getComponent(h).grayscale = !0;
                                        var n = "";
                                        switch (e.index) {
                                            case "3":
                                                n = "4";
                                                break;
                                            case "5":
                                                n = "7";
                                                break;
                                            case "8":
                                                n = "6";
                                                break;
                                            case "4":
                                                n = "5";
                                                break;
                                            case "6":
                                                n = "8";
                                                break;
                                            case "7":
                                                n = "3";
                                                break;
                                            default:
                                                n = e.index
                                        }
                                        t.onPlayLotteryAni(parseInt(n), (function() {
                                                t.lotteryBtn.getComponent(p).interactable = !0,
                                                    t.lotteryBtn.getComponent(h).grayscale = !1,
                                                    t.params.score = e.score,
                                                    t.onUpdateScore(t.params),
                                                    I.showCgiXmlRewardList(e, new P((function() {
                                                            t.lotteryPointer.angle = 0
                                                        }
                                                    ),t))
                                            }
                                        ))
                                    }
                                }
                            ))
                        }
                        ,
                        a.onPlayLotteryAni = function(t, e) {
                            var n = this
                                , o = 36 * t
                                , i = new g(this.lotteryPointer)
                                , a = .5 / (10 + t);
                            i = i.to(.25, {
                                angle: -360
                            }, {
                                onComplete: function() {
                                    return n.lotteryPointer.angle = 0
                                }
                            }).to(.25, {
                                angle: -360
                            }, {
                                onComplete: function() {
                                    return n.lotteryPointer.angle = 0
                                }
                            }),
                                (i = t >= 5 ? i.to(a * t, {
                                    angle: -o
                                }) : i.to(10 * a, {
                                    angle: -360
                                }, {
                                    onComplete: function() {
                                        return n.lotteryPointer.angle = 0
                                    }
                                }).to(a * t, {
                                    angle: -o
                                })).delay(.5).call((function() {
                                        e()
                                    }
                                )).start()
                        }
                        ,
                        e
                }(u)).prototype, "closeBtn", [x], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    A = e(z.prototype, "disintegrateBtn", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = e(z.prototype, "lotteryBtn", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = e(z.prototype, "items", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    V = e(z.prototype, "lastPageBtn", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = e(z.prototype, "nextPageBtn", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = e(z.prototype, "scoreLabel", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = e(z.prototype, "lotteryPointer", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = e(z.prototype, "propsList", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    E = z)) || E));
                a._RF.pop()
            }
        }
    }
));
