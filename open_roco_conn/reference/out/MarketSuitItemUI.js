System.register("chunks:///_virtual/MarketSuitItemUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpriteFrameSelector.ts", "./GameUI.ts", "./AImage.ts", "./DEFINE.ts", "./MarketMessage.ts"], (function(t) {
        var e, i, n, r, a, o, u, l, c, s, h, p, m, d, _, f;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized,
                    a = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        u = t._decorator,
                        l = t.Label,
                        c = t.Node,
                        s = t.Button,
                        h = t.NodeEventType
                }
                , function(t) {
                    p = t.default
                }
                , function(t) {
                    m = t.GameSubUI
                }
                , function(t) {
                    d = t.AImage
                }
                , function(t) {
                    _ = t.DEFINE
                }
                , function(t) {
                    f = t.MarketMessage
                }
            ],
            execute: function() {
                var g, b, y, v, I, x, S, w, z, F, N, k, P, T, U, D, M, A, B, C, E;
                o._RF.push({}, "c5445IvV1hGxpAmvG7FFkoz", "MarketSuitItemUI", void 0);
                var G = u.ccclass
                    , L = u.property;
                t("MarketSuitItemUI", (g = G("MarketSuitItemUI"),
                    b = L(p),
                    y = L(l),
                    v = L(l),
                    I = L(l),
                    x = L(p),
                    S = L(c),
                    w = L(l),
                    z = L(s),
                    F = L(c),
                g((P = e((k = function(t) {
                    function e() {
                        for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                            a[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(a)) || this,
                            n(e, "mc_quality", P, r(e)),
                            n(e, "txt_name", T, r(e)),
                            n(e, "txt_price", U, r(e)),
                            n(e, "txt_vipPrice", D, r(e)),
                            n(e, "mc_hotNew", M, r(e)),
                            n(e, "diamond", A, r(e)),
                            n(e, "txt_endTime", B, r(e)),
                            n(e, "btn_buy_suit", C, r(e)),
                            n(e, "container", E, r(e)),
                            e._data = void 0,
                            e._image = void 0,
                            e
                    }
                    i(e, t);
                    var o = e.prototype;
                    return o.onLoad = function() {
                        this.btn_buy_suit.node.on(h.TOUCH_END, this.onBuySuit, this)
                    }
                        ,
                        o.onBuySuit = function() {
                            this.notify(f.OPEN_BUY_SUIT, this._data)
                        }
                        ,
                        o.rushUI = function(t) {
                            if (this._data = t,
                                this._data)
                                if (this.mc_quality.node.active = !1,
                                    this.visible = !0,
                                    this.txt_name.string = t.name,
                                    this.txt_price.string = "售价:" + t.discountPrice.toString(),
                                    this.txt_vipPrice.string = "VIP:" + t.vipPrice.toString(),
                                    this.loadSuitByIndex(),
                                    0 == t.hotFlag ? this.mc_hotNew.gotoAndStop(8) : this.mc_hotNew.gotoAndStop(t.hotFlag),
                                    t.hotFlag >= 3 ? (this.txt_price.string = "",
                                        this.diamond.active = !1) : this.diamond.active = !0,
                                2 != t.hotFlag)
                                    this.txt_endTime.string = "";
                                else {
                                    var e, i = new Date;
                                    e = t.endTime,
                                        i.setTime(1e3 * e),
                                        this.txt_endTime.string = "距离结束：" + i.getDate() + "天" + i.getHours() + "小时"
                                }
                        }
                        ,
                        o.loadSuitByIndex = function() {
                            this.clearContainer(),
                            this._image || (this._image = new d),
                                this._image.setPath(_.CDN + "rocoShop/suit/" + this._data.id + ".png"),
                                this.container.addChild(this._image)
                        }
                        ,
                        o.clearContainer = function() {
                            this.container.removeAllChildren()
                        }
                        ,
                        a(e, [{
                            key: "visible",
                            set: function(t) {
                                this.node.active = t
                            }
                        }, {
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }]),
                        e
                }(m)).prototype, "mc_quality", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    T = e(k.prototype, "txt_name", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = e(k.prototype, "txt_price", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = e(k.prototype, "txt_vipPrice", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = e(k.prototype, "mc_hotNew", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = e(k.prototype, "diamond", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = e(k.prototype, "txt_endTime", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    C = e(k.prototype, "btn_buy_suit", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = e(k.prototype, "container", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = k)) || N));
                o._RF.pop()
            }
        }
    }
));
