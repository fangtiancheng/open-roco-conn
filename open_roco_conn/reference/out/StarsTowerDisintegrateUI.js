System.register("chunks:///_virtual/StarsTowerDisintegrateUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerMessage.ts", "./StarsTowerDisintegrateItem.ts", "./PetIcon.ts", "./StarsTowerShopCGI.ts", "./StarsTowerConfig.ts", "./ActivityAPI.ts"], (function(t) {
        var e, n, i, s, a, o, r, u, l, c, h, d, p, g, m, f, C, I, P;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        o = t._decorator,
                        r = t.Node,
                        u = t.EditBox,
                        l = t.Label,
                        c = t.NodeEventType,
                        h = t.Sprite,
                        d = t.Button
                }
                , function(t) {
                    p = t.GameUI
                }
                , function(t) {
                    g = t.StarsTowerMessage
                }
                , function(t) {
                    m = t.StarsTowerDisintegrateItem
                }
                , function(t) {
                    f = t.PetIcon
                }
                , function(t) {
                    C = t.Disintegrate
                }
                , function(t) {
                    I = t.PETARR
                }
                , function(t) {
                    P = t.ActivityAPI
                }
            ],
            execute: function() {
                var x, b, B, v, w, S, T, U, y, D, E, N, A, _, z, O, H, L, V, R, G, j, M, F, W, k, q, X;
                a._RF.push({}, "3cd4ei5hOFEC6leG0AP7Vbq", "StarsTowerDisintegrateUI", void 0);
                var J = o.ccclass
                    , K = o.property;
                t("StarsTowerDisintegrateUI", (x = K(r),
                    b = K(r),
                    B = K(u),
                    v = K(r),
                    w = K(m),
                    S = K(r),
                    T = K(r),
                    U = K(f),
                    y = K(l),
                    D = K(u),
                    E = K(r),
                    N = K(r),
                    A = K(l),
                J((O = e((z = function(t) {
                    function e() {
                        for (var e, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                            a[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(a)) || this,
                            i(e, "closeBtn", O, s(e)),
                            i(e, "confirmButton", H, s(e)),
                            i(e, "searchEditBox", L, s(e)),
                            i(e, "searchTips", V, s(e)),
                            i(e, "items", R, s(e)),
                            i(e, "lastPageBtn", G, s(e)),
                            i(e, "nextPageBtn", j, s(e)),
                            i(e, "selectedPetIcon", M, s(e)),
                            i(e, "selectedPetName", F, s(e)),
                            i(e, "selectedPetCount", W, s(e)),
                            i(e, "addCountBtn", k, s(e)),
                            i(e, "reduceCountBtn", q, s(e)),
                            i(e, "scoreLabel", X, s(e)),
                            e.params = null,
                            e.pageIndex = void 0,
                            e.maxPage = void 0,
                            e.selectedIndex = null,
                            e.selectedCount = void 0,
                            e.maxCount = void 0,
                            e.dataItems = void 0,
                            e.currDataItems = void 0,
                            e
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.start = function() {
                        this.searchTips.active = !1,
                            this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this),
                            this.confirmButton.on(c.TOUCH_END, this.onConfirmBtn, this),
                            this.lastPageBtn.on(c.TOUCH_END, this.onLastPageBtn, this),
                            this.nextPageBtn.on(c.TOUCH_END, this.onNextPageBtn, this),
                            this.addCountBtn.on(c.TOUCH_END, this.onAddCountBtn, this),
                            this.reduceCountBtn.on(c.TOUCH_END, this.onReduceCountBtn, this),
                            this.selectedPetCount.node.on(u.EventType.TEXT_CHANGED, this.onCountInputChanged, this);
                        for (var t = this.items.length, e = 0; e < t; e++) {
                            this.items[e].node.on(c.TOUCH_END, this.onItem, this)
                        }
                    }
                        ,
                        a.refresh = function(t) {
                            this.params = t,
                                this.pageIndex = 1,
                                this.onUpdateDataItems(),
                                this.onInputChanged(),
                                this.updateView()
                        }
                        ,
                        a.updateView = function(t) {
                            void 0 === t && (t = null),
                                this.maxPage = Math.ceil(this.currDataItems.length / this.items.length),
                            this.maxPage <= 0 && (this.maxPage = 1),
                                this.onUpdatePageBtnState(),
                                this.onUpdateItems(),
                                this.onUpdateSelectedIndex(t)
                        }
                        ,
                        a.onUpdateItems = function() {
                            for (var t = this.items.length, e = (this.pageIndex - 1) * t, n = 0; n < t; n++) {
                                var i = this.items[n]
                                    , s = this.currDataItems[n + e];
                                i.refresh(s)
                            }
                        }
                        ,
                        a.onUpdateSelectedIndex = function(t) {
                            var e = this.items[this.selectedIndex]
                                , n = this.items[t];
                            this.selectedIndex = t,
                            e && (e.selected = !1),
                                n ? (n.selected = !0,
                                    this.onUpdateSelectedPet(n.data),
                                    this.maxCount = parseInt(n.data.count)) : (this.maxCount = 0,
                                    this.onUpdateSelectedPet()),
                                this.selectedCount = 0,
                                this.onUpdateSelectedCount()
                        }
                        ,
                        a.onUpdateSelectedPet = function(t) {
                            t ? (this.selectedPetIcon.data = {
                                id: t.id
                            },
                                this.selectedPetName.string = this.selectedPetIcon.data.name + "碎片") : (this.selectedPetIcon.data = {
                                id: null
                            },
                                this.selectedPetName.string = "")
                        }
                        ,
                        a.onUpdateSelectedCount = function() {
                            0 == this.selectedCount ? this.scoreLabel.string = "?星辰积分" : this.scoreLabel.string = this.selectedCount + "星辰积分",
                                this.selectedPetCount.string = "",
                                this.selectedPetCount.placeholder = this.selectedCount + "/" + this.maxCount
                        }
                        ,
                        a.onUpdateDataItems = function() {
                            for (var t = [], e = 0; e < I.length; e++)
                                for (var n = I[e], i = this.params.t[e].n, s = 0; s < n.length; s++) {
                                    var a = n[s]
                                        , o = i[s];
                                    t.push({
                                        id: a,
                                        count: o,
                                        i: e,
                                        j: s
                                    })
                                }
                            this.dataItems = t
                        }
                        ,
                        a.onUpdatePageBtnState = function() {
                            this.lastPageBtn.getComponent(h).grayscale = this.pageIndex <= 1,
                                this.lastPageBtn.getComponent(d).interactable = this.pageIndex > 1,
                                this.nextPageBtn.getComponent(h).grayscale = this.pageIndex >= this.maxPage,
                                this.nextPageBtn.getComponent(d).interactable = this.pageIndex < this.maxPage
                        }
                        ,
                        a.onCloseBtn = function() {
                            this.notify(g.UPDATE_SHOP_VIEW),
                                this.notify(g.CLOSE_DISINTEGRATE_VIEW)
                        }
                        ,
                        a.onInputChanged = function() {
                            var t = this.searchEditBox.string;
                            if ("" === t)
                                this.currDataItems = this.dataItems,
                                    this.searchTips.active = !1;
                            else {
                                for (var e = [], n = 0; n < this.dataItems.length; n++) {
                                    var i = this.dataItems[n];
                                    -1 != P.getSpiritName(i.id.toString()).indexOf(t) && "0" !== i.count && e.push(i)
                                }
                                this.currDataItems = e,
                                    this.searchTips.active = 0 == this.currDataItems.length
                            }
                            this.pageIndex = 1,
                                this.updateView()
                        }
                        ,
                        a.onCountInputChanged = function() {
                            var t = this.selectedPetCount.string.replace(/[^\d]/g, "")
                                , e = parseInt(t);
                            Number.isNaN(e) && (e = 0),
                            e > this.maxCount && (e = this.maxCount),
                                this.selectedPetCount.string = "" + e
                        }
                        ,
                        a.onCountInputEnded = function() {
                            var t = this.selectedPetCount.string.replace(/[^\d]/g, "")
                                , e = parseInt(t);
                            Number.isNaN(e) && (e = 0),
                            e > this.maxCount && (e = this.maxCount),
                                this.selectedCount = e,
                                this.onUpdateSelectedCount()
                        }
                        ,
                        a.onConfirmBtn = function() {
                            var t = this;
                            if (null !== this.selectedIndex)
                                if (this.selectedCount <= 0)
                                    P.showAlert("请选择分解碎片的数量~");
                                else {
                                    var e = this.items.length
                                        , n = (this.pageIndex - 1) * e
                                        , i = this.selectedIndex + n
                                        , s = this.currDataItems[i];
                                    C(s.i, s.j, this.selectedCount, (function(e) {
                                            if ("0" === e.result.value) {
                                                P.showAlert("分解成功~");
                                                var n = e.n;
                                                t.params.score = e.score,
                                                    t.params.t[s.i].n[s.j] = n,
                                                    s.count = n,
                                                    t.updateView()
                                            } else
                                                P.showAlert(e.result.msg)
                                        }
                                    ))
                                }
                            else
                                P.showAlert("请选择要分解的碎片~")
                        }
                        ,
                        a.onLastPageBtn = function() {
                            this.pageIndex > 1 && (this.pageIndex--,
                                this.updateView())
                        }
                        ,
                        a.onNextPageBtn = function() {
                            this.pageIndex < this.maxPage && (this.pageIndex++,
                                this.updateView())
                        }
                        ,
                        a.onAddCountBtn = function() {
                            this.selectedCount < this.maxCount && (this.selectedCount++,
                                this.onUpdateSelectedCount())
                        }
                        ,
                        a.onReduceCountBtn = function() {
                            this.selectedCount > 0 && (this.selectedCount--,
                                this.onUpdateSelectedCount())
                        }
                        ,
                        a.onItem = function(t) {
                            var e = t.target.getComponent(m)
                                , n = this.items.indexOf(e);
                            this.onUpdateSelectedIndex(n)
                        }
                        ,
                        e
                }(p)).prototype, "closeBtn", [x], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    H = e(z.prototype, "confirmButton", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = e(z.prototype, "searchEditBox", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = e(z.prototype, "searchTips", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = e(z.prototype, "items", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    G = e(z.prototype, "lastPageBtn", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = e(z.prototype, "nextPageBtn", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = e(z.prototype, "selectedPetIcon", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = e(z.prototype, "selectedPetName", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = e(z.prototype, "selectedPetCount", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = e(z.prototype, "addCountBtn", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = e(z.prototype, "reduceCountBtn", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    X = e(z.prototype, "scoreLabel", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = z)) || _));
                a._RF.pop()
            }
        }
    }
));
