System.register("chunks:///_virtual/BuySuitItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpriteFrameSelector.ts", "./GameUI.ts", "./MarketMessage.ts", "./ActivityAPI.ts", "./PropsIcon.ts"], (function(t) {
        var e, i, n, o, r, a, s, u, c, l, h, p, f, m, d;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized,
                    r = t.createClass
            }
                , function(t) {
                    a = t.cclegacy,
                        s = t._decorator,
                        u = t.Label,
                        c = t.Button,
                        l = t.NodeEventType
                }
                , function(t) {
                    h = t.default
                }
                , function(t) {
                    p = t.GameSubUI
                }
                , function(t) {
                    f = t.MarketMessage
                }
                , function(t) {
                    m = t.ActivityAPI
                }
                , function(t) {
                    d = t.PropsIcon
                }
            ],
            execute: function() {
                var g, y, b, _, v, P, C, I, S, w, x, A, B, z, U;
                a._RF.push({}, "357513A1NVO+L3uGZ28ghwe", "BuySuitItem", void 0);
                var T = s.ccclass
                    , k = s.property;
                t("BuySuitItem", (g = T("BuySuitItem"),
                    y = k(d),
                    b = k(u),
                    _ = k(u),
                    v = k(u),
                    P = k(h),
                    C = k(c),
                g((w = e((S = function(t) {
                    function e() {
                        for (var e, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                            r[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            n(e, "mc_icon", w, o(e)),
                            n(e, "txt_nowPrice", x, o(e)),
                            n(e, "txt_vipPrice", A, o(e)),
                            n(e, "txt_name", B, o(e)),
                            n(e, "itemChoose", z, o(e)),
                            n(e, "btnChoose", U, o(e)),
                            e
                    }
                    i(e, t);
                    var a = e.prototype;
                    return a.onLoad = function() {
                        this.isChoosed = !1,
                            this.hide(),
                            this.btnChoose.node.on(l.TOUCH_END, this.onChooseBtn, this)
                    }
                        ,
                        a.onChooseBtn = function() {
                            this.itemChoose.gotoAndStop(1 == this.itemChoose.currentFrame ? 2 : 1);
                            var t = this.node.name.split("_");
                            if (2 == t.length) {
                                var e = parseInt(t[1]);
                                this.notify(f.UPDATE_BUY_SUIT_PRICE, e)
                            }
                        }
                        ,
                        a.hide = function() {
                            this.node.active = !1
                        }
                        ,
                        a.resetUI = function() {
                            this.hide(),
                                this.isChoosed = !1
                        }
                        ,
                        r(e, [{
                            key: "data",
                            set: function(t) {
                                var e = ""
                                    , i = t.itemType;
                                e = 7 == i || 2 == i ? m.getSrcPath(2, t.id) : m.getSrcPath(i, t.id);
                                var n = {
                                    dataSource: t,
                                    id: t.id,
                                    name: t.name,
                                    url: e
                                };
                                this.mc_icon.data = n,
                                    this.txt_name.string = m.getItemName(t.id),
                                    this.txt_nowPrice.string = "售价:" + t.discountPrice.toString(),
                                    this.txt_vipPrice.string = "VIP:" + t.vipPrice.toString(),
                                    this.node.active = !0
                            }
                        }, {
                            key: "isChoosed",
                            get: function() {
                                return 2 == this.itemChoose.currentFrame
                            },
                            set: function(t) {
                                this.itemChoose.gotoAndStop(t ? 2 : 1)
                            }
                        }]),
                        e
                }(p)).prototype, "mc_icon", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    x = e(S.prototype, "txt_nowPrice", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = e(S.prototype, "txt_vipPrice", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = e(S.prototype, "txt_name", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = e(S.prototype, "itemChoose", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = e(S.prototype, "btnChoose", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = S)) || I));
                a._RF.pop()
            }
        }
    }
));
