System.register("chunks:///_virtual/ConfirmSuitPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuySuitItem.ts", "./ActivityAPI.ts", "./global.ts", "./Constants.ts", "./AImage.ts", "./DEFINE.ts", "./GameUI.ts"], (function(t) {
        var i, e, s, n, o, r, h, a, c, m, l, _, u, p, v, P, b, g;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    s = t.initializerDefineProperty,
                    n = t.assertThisInitialized,
                    o = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        h = t._decorator,
                        a = t.Button,
                        c = t.Node,
                        m = t.Label,
                        l = t.NodeEventType
                }
                , function(t) {
                    _ = t.BuySuitItem
                }
                , function(t) {
                    u = t.ActivityAPI
                }
                , function(t) {
                    p = t.__global
                }
                , function(t) {
                    v = t.Constants
                }
                , function(t) {
                    P = t.AImage
                }
                , function(t) {
                    b = t.DEFINE
                }
                , function(t) {
                    g = t.GameSubUI
                }
            ],
            execute: function() {
                var d, f, w, x, y, I, S, D, A, C, N, z, B, E, L, U, T, H, k, O, M, F;
                r._RF.push({}, "6904cEj5YRMlrTOUwnh0wHp", "ConfirmSuitPanel", void 0);
                var R = h.ccclass
                    , V = h.property;
                t("ConfirmSuitPanel", (d = V(a),
                    f = V(a),
                    w = V(a),
                    x = V(a),
                    y = V(a),
                    I = V(c),
                    S = V(m),
                    D = V(m),
                    A = V(m),
                    C = V(_),
                R((B = i((z = function(t) {
                    function i() {
                        for (var i, e = arguments.length, o = new Array(e), r = 0; r < e; r++)
                            o[r] = arguments[r];
                        return i = t.call.apply(t, [this].concat(o)) || this,
                            s(i, "btn_all", B, n(i)),
                            s(i, "btn_sure", E, n(i)),
                            s(i, "btn_cancel", L, n(i)),
                            s(i, "btnLast", U, n(i)),
                            s(i, "btnNext", T, n(i)),
                            s(i, "ctlAvatar", H, n(i)),
                            s(i, "txt_nowPrice", k, n(i)),
                            s(i, "txt_vipPrice", O, n(i)),
                            s(i, "txtDes", M, n(i)),
                            s(i, "items", F, n(i)),
                            i._callback = void 0,
                            i.m_suit = void 0,
                            i.m_items = void 0,
                            i.m_icons = void 0,
                            i.m_chooses = [],
                            i.m_nowPrice = void 0,
                            i.m_vipPrice = void 0,
                            i.m_pageIndex = 0,
                            i._image = void 0,
                            i
                    }
                    e(i, t);
                    var r = i.prototype;
                    return r.onLoad = function() {
                        this.m_icons = [],
                            this.btn_all.node.active = !1,
                            this.btnLast.node.on(l.TOUCH_END, this.onLastBtn, this),
                            this.btnNext.node.on(l.TOUCH_END, this.onNextBtn, this),
                            this.btn_all.node.on(l.TOUCH_END, this.onAllBtn, this),
                            this.btn_cancel.node.on(l.TOUCH_END, this.onCancelBtn, this),
                            this.btn_sure.node.on(l.TOUCH_END, this.onSureBtn, this)
                    }
                        ,
                        r.loadSuit = function() {
                            this.ctlAvatar.removeAllChildren(),
                            this._image || (this._image = new P),
                                this._image.setPath(b.CDN + "/rocoShop/suit/" + this.m_suit.id + ".png"),
                                this.ctlAvatar.addChild(this._image)
                        }
                        ,
                        r.onLastBtn = function() {
                            var t = Math.max(0, this.m_pageIndex - 1);
                            this.showSuit(this.m_suit, t)
                        }
                        ,
                        r.onNextBtn = function() {
                            var t = Math.min(Math.ceil(this.m_suit.items.length / 8) - 1, this.m_pageIndex + 1);
                            this.showSuit(this.m_suit, t)
                        }
                        ,
                        r.onAllBtn = function() {
                            this.m_nowPrice = 0,
                                this.m_vipPrice = 0;
                            for (var t = 0; t < this.m_suit.items.length; t++)
                                this.m_chooses[t] = 1,
                                    this.m_nowPrice += this.m_suit.items[t].discountPrice,
                                    this.m_vipPrice += this.m_suit.items[t].vipPrice,
                                this.items[t] && (this.items[t].isChoosed = !0);
                            this.txt_nowPrice.string = "售价:" + this.m_nowPrice.toString(),
                                this.txt_vipPrice.string = "VIP:" + this.m_vipPrice.toString()
                        }
                        ,
                        r.onCancelBtn = function() {
                            this.hide()
                        }
                        ,
                        r.onSureBtn = function() {
                            for (var t = [], i = [], e = 0; e < this.m_items.length; e++) {
                                var s = this.m_items[e];
                                t.push(s.id),
                                    i.push(1)
                            }
                            if (this.m_suit) {
                                for (var n = [], o = [], r = 0; r < this.m_suit.items.length; r++)
                                    this.m_suit.items[r] && this.m_chooses[r] && (n.push(r),
                                        o.push(1));
                                if (0 == n.length)
                                    return void u.showAlert("请先选择要购买的物品~");
                                this._callback(this.m_suit, n, o, this.m_nowPrice, this.m_vipPrice)
                            } else
                                this._callback(this.m_items[0].itemType, t, i, this.m_nowPrice, this.m_vipPrice)
                        }
                        ,
                        r.updatePrice = function(t) {
                            this.m_chooses[8 * this.m_pageIndex + t] = 1 ^ this.m_chooses[8 * this.m_pageIndex + t],
                                this.m_nowPrice = 0,
                                this.m_vipPrice = 0;
                            for (var i = 0; i < this.m_suit.items.length; i++)
                                this.m_chooses[i] && this.m_suit.items[i] && (this.m_nowPrice += this.m_suit.items[i].discountPrice,
                                    this.m_vipPrice += this.m_suit.items[i].vipPrice);
                            this.txt_nowPrice.string = "售价:" + this.m_nowPrice.toString(),
                                this.txt_vipPrice.string = "VIP:" + this.m_vipPrice.toString()
                        }
                        ,
                        r.resetUI = function() {
                            this.m_icons = [];
                            for (var t = 0; t < this.items.length; t++)
                                this.items[t].resetUI();
                            this.btn_all.node.active = !1
                        }
                        ,
                        r.showSuit = function(t, i) {
                            void 0 === i && (i = 0),
                                this.m_suit = t,
                                this.m_items = t.items,
                                this.resetUI(),
                                this.m_pageIndex = i,
                                t.items.length > 8 ? (this.btnNext.node.active = !0,
                                    this.btnLast.node.active = !0) : (this.btnNext.node.active = !1,
                                    this.btnLast.node.active = !1),
                                this.m_nowPrice = 0,
                                this.m_vipPrice = 0;
                            for (var e = 0; e < 8; e++) {
                                var s = 8 * i + e;
                                if (s < this.m_items.length) {
                                    var n = this.m_items[s];
                                    this.items[e].data = n,
                                        this.m_chooses[s] && 1 == this.m_chooses[s] ? this.items[e].isChoosed = !0 : this.items[e].isChoosed = !1
                                } else
                                    this.items[e].hide()
                            }
                            this.txtDes.string = "",
                                this.txtDes.node.active = !1;
                            for (e = 0; e < this.m_suit.items.length; e++)
                                this.m_chooses[e] && (this.m_nowPrice += this.m_suit.items[e].discountPrice,
                                    this.m_vipPrice += this.m_suit.items[e].vipPrice);
                            this.txt_nowPrice.string = "售价:" + this.m_nowPrice.toString(),
                                this.txt_vipPrice.string = "VIP:" + this.m_vipPrice.toString(),
                                this.loadSuit(),
                                this.btn_all.node.active = !0
                        }
                        ,
                        i.getDazzleScore = function(t) {
                            var i = p.SysAPI.getGDataAPI().getDataProxy(v.DAZZLE_DRESS_DATA).select(t);
                            return null != i ? i.score : 0
                        }
                        ,
                        r.showItems = function(t) {
                            this.m_suit = null,
                                this.m_items = t,
                                this.m_nowPrice = 0,
                                this.m_vipPrice = 0;
                            for (var i = 0; i < 8; i++)
                                if (i < this.m_items.length) {
                                    var e = this.m_items[i];
                                    this.m_nowPrice += e.discountPrice,
                                        this.m_vipPrice += e.vipPrice,
                                        this.items[i].data = e
                                } else
                                    this["item" + i].visible = !1;
                            this.txt_nowPrice.string = "总价格 : " + this.m_nowPrice.toString(),
                                this.txt_vipPrice.string = "VIP价 : " + this.m_vipPrice.toString()
                        }
                        ,
                        r.hide = function() {
                            this.m_chooses = [],
                                this.node.active = !1
                        }
                        ,
                        o(i, [{
                            key: "handler",
                            set: function(t) {
                                this._callback = t
                            }
                        }]),
                        i
                }(g)).prototype, "btn_all", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    E = i(z.prototype, "btn_sure", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    L = i(z.prototype, "btn_cancel", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    U = i(z.prototype, "btnLast", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    T = i(z.prototype, "btnNext", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    H = i(z.prototype, "ctlAvatar", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    k = i(z.prototype, "txt_nowPrice", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    O = i(z.prototype, "txt_vipPrice", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    M = i(z.prototype, "txtDes", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    F = i(z.prototype, "items", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    N = z)) || N));
                r._RF.pop()
            }
        }
    }
));
