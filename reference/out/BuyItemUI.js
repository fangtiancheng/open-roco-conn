System.register("chunks:///_virtual/BuyItemUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./WholeIcon.ts", "./CommonMessage.ts", "./global.ts"], (function(t) {
        var n, e, i, r, a, o, s, u, c, h, l, p, m, f, d, b;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        o = t._decorator,
                        s = t.Button,
                        u = t.Slider,
                        c = t.Label,
                        h = t.EditBox,
                        l = t.NodeEventType,
                        p = t.Sprite
                }
                , function(t) {
                    m = t.GameUI
                }
                , function(t) {
                    f = t.WholeIcon
                }
                , function(t) {
                    d = t.CommonMessage
                }
                , function(t) {
                    b = t.__global
                }
            ],
            execute: function() {
                var g, C, y, B, I, x, _, E, N, v, R, L, D, z, S, T, U, w, H, M, O, A;
                a._RF.push({}, "20734/d1k1E76mIm/c1dghD", "BuyItemUI", void 0);
                var W = o.ccclass
                    , k = o.property;
                t("BuyItemUI", (g = k(s),
                    C = k(s),
                    y = k(f),
                    B = k(u),
                    I = k(c),
                    x = k(c),
                    _ = k(c),
                    E = k(s),
                    N = k(s),
                    v = k(h),
                W((D = n((L = function(t) {
                    function n() {
                        for (var n, e = arguments.length, a = new Array(e), o = 0; o < e; o++)
                            a[o] = arguments[o];
                        return n = t.call.apply(t, [this].concat(a)) || this,
                            i(n, "cancelBtn", D, r(n)),
                            i(n, "confirmBtn", z, r(n)),
                            i(n, "itemIcon", S, r(n)),
                            i(n, "countSlider", T, r(n)),
                            i(n, "buyCount", U, r(n)),
                            i(n, "descLabel", w, r(n)),
                            i(n, "expendLabel", H, r(n)),
                            i(n, "addBtn", M, r(n)),
                            i(n, "decBtn", O, r(n)),
                            i(n, "txt_useNum", A, r(n)),
                            n.params = void 0,
                            n
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.onLoad = function() {
                        this.cancelBtn.node.on(l.TOUCH_END, this.onCancel, this),
                            this.confirmBtn.node.on(l.TOUCH_END, this.onConfirm, this),
                            this.addBtn.node.on(l.TOUCH_END, this.onAddBtn, this),
                            this.decBtn.node.on(l.TOUCH_END, this.onDecBtn, this),
                            this.txt_useNum.node.on(h.EventType.TEXT_CHANGED, this.useNumChangehandle, this)
                    }
                        ,
                        a.refresh = function(t) {
                            this.params = t,
                                this.itemIcon.params = {
                                    type: t.itemType
                                },
                                this.itemIcon.data = {
                                    id: t.itemId
                                },
                                this.onRefreshCount(t),
                                this.onRefreshExpend(t)
                        }
                        ,
                        a.onRefreshCount = function(t) {
                            var n = t.count
                                , e = t.maxCount
                                , i = t.buyDesc;
                            void 0 !== i && (this.descLabel.string = i),
                                this.countSlider.progress = n / e,
                                this.buyCount.string = "" + n,
                                this.addBtn.interactable = n < e,
                                this.addBtn.getComponent(p).grayscale = !this.addBtn.interactable,
                                this.decBtn.interactable = n > 1,
                                this.decBtn.getComponent(p).grayscale = !this.decBtn.interactable
                        }
                        ,
                        a.onRefreshExpend = function(t) {
                            var n = t.count
                                , e = t.costName
                                , i = t.costCount
                                , r = t.haveCount
                                , a = i * n;
                            this.expendLabel.string = e + " " + a + " / " + r
                        }
                        ,
                        a.onCancel = function() {
                            this.notify(d.CLOSE_BUY_ITEM_VIEW)
                        }
                        ,
                        a.onConfirm = function() {
                            var t = this.params.costCount * this.params.count;
                            this.params.count > 0 && t > this.params.haveCount ? b.UI.alert("", this.params.describe) : (this.notify(d.CLOSE_BUY_ITEM_VIEW),
                                this.params.confirmCallback({
                                    itemID: this.params.itemId,
                                    count: this.params.count
                                }))
                        }
                        ,
                        a.onAddBtn = function() {
                            this.addBtn.interactable && this.params.count < this.params.maxCount && (this.params.count++,
                                this.onRefreshCount(this.params),
                                this.onRefreshExpend(this.params),
                                this.onRefreshInput())
                        }
                        ,
                        a.onDecBtn = function() {
                            this.decBtn.interactable && this.params.count > 1 && (this.params.count--,
                                this.onRefreshCount(this.params),
                                this.onRefreshExpend(this.params),
                                this.onRefreshInput())
                        }
                        ,
                        a.onSlider = function() {
                            var t = this.countSlider.progress;
                            this.params.count = Math.floor(t * this.params.maxCount),
                            this.params.count < 1 && (this.params.count = 1),
                                this.onRefreshCount(this.params),
                                this.onRefreshExpend(this.params),
                                this.onRefreshInput()
                        }
                        ,
                        a.useNumChangehandle = function(t) {
                            var n = Number(this.txt_useNum.string);
                            n > this.params.maxCount ? this.params.count = this.params.maxCount : n < 1 || Number.isNaN(n) ? (this.params.count = 1,
                                this.txt_useNum.textLabel.string = "1",
                                this.txt_useNum.string = "1") : this.params.count = n,
                                this.onRefreshCount(this.params),
                                this.onRefreshExpend(this.params)
                        }
                        ,
                        a.onRefreshInput = function() {
                            this.txt_useNum.textLabel.string = this.params.count.toString(),
                                this.txt_useNum.string = this.params.count.toString()
                        }
                        ,
                        n
                }(m)).prototype, "cancelBtn", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    z = n(L.prototype, "confirmBtn", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = n(L.prototype, "itemIcon", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = n(L.prototype, "countSlider", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = n(L.prototype, "buyCount", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = n(L.prototype, "descLabel", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = n(L.prototype, "expendLabel", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = n(L.prototype, "addBtn", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = n(L.prototype, "decBtn", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = n(L.prototype, "txt_useNum", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = L)) || R));
                a._RF.pop()
            }
        }
    }
));
