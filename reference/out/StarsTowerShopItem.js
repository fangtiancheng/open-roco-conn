System.register("chunks:///_virtual/StarsTowerShopItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PetIcon.ts", "./StarsTowerShopCGI.ts", "./ActivityAPI.ts", "./GameUI.ts", "./StarsTowerMessage.ts"], (function(t) {
        var e, n, i, o, r, a, u, s, c, l, p, h, f, b, y, d;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        a = t._decorator,
                        u = t.Node,
                        s = t.Label,
                        c = t.NodeEventType,
                        l = t.Button,
                        p = t.Sprite
                }
                , function(t) {
                    h = t.PetIcon
                }
                , function(t) {
                    f = t.Buy
                }
                , function(t) {
                    b = t.ActivityAPI
                }
                , function(t) {
                    y = t.GameSubUI
                }
                , function(t) {
                    d = t.StarsTowerMessage
                }
            ],
            execute: function() {
                var g, v, m, B, I, w, S, T, x, C;
                r._RF.push({}, "b3d9asHtQFO14xxEBR5om3l", "StarsTowerShopItem", void 0);
                var L = a.ccclass
                    , P = a.property;
                t("StarsTowerShopItem", (g = P(u),
                    v = P(s),
                    m = P(h),
                    B = P(u),
                L((S = e((w = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                            r[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            i(e, "buyBtn", S, o(e)),
                            i(e, "countLabel", T, o(e)),
                            i(e, "petIcon", x, o(e)),
                            i(e, "flag", C, o(e)),
                            e.id = void 0,
                            e.index = void 0,
                            e.count = void 0,
                            e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.start = function() {
                        this.buyBtn.on(c.TOUCH_END, this.onBuyBtn, this)
                    }
                        ,
                        r.refresh = function(t) {
                            var e = t.index
                                , n = t.id
                                , i = t.petId
                                , o = t.count
                                , r = t.own;
                            this.index = e,
                                this.id = n,
                                this.count = parseInt(o),
                                this.petIcon.data = {
                                    id: i
                                },
                                this.countLabel.string = "宠物碎片:" + o + "/60",
                                r ? (this.buyBtn.active = !1,
                                    this.flag.active = !0) : (this.buyBtn.active = !0,
                                    this.flag.active = !1,
                                    this.count < 60 ? (this.buyBtn.getComponent(l).interactable = !1,
                                        this.buyBtn.getComponent(p).grayscale = !0) : (this.buyBtn.getComponent(l).interactable = !0,
                                        this.buyBtn.getComponent(p).grayscale = !1))
                        }
                        ,
                        r.onBuyBtn = function() {
                            var t = this;
                            this.count < 60 || f(this.index, this.id, (function(e) {
                                    "0" === e.result.value ? ("1" != e.value && b.showCgiXmlRewardList(e),
                                        t.notify(d.SHOW_SHOP_VIEW)) : b.showAlert(e.result.msg)
                                }
                            ))
                        }
                        ,
                        e
                }(y)).prototype, "buyBtn", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    T = e(w.prototype, "countLabel", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = e(w.prototype, "petIcon", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    C = e(w.prototype, "flag", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = w)) || I));
                r._RF.pop()
            }
        }
    }
));
