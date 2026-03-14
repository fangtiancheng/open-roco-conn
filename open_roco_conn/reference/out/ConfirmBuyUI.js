System.register("chunks:///_virtual/ConfirmBuyUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MarketMessage.ts", "./MarketConfig.ts", "./global.ts", "./GameUI.ts"], (function(t) {
        var n, e, i, r, u, o, a, l, c, s, m, _, f, b, h;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    u = t.cclegacy,
                        o = t._decorator,
                        a = t.Button,
                        l = t.Label,
                        c = t.Node,
                        s = t.Slider,
                        m = t.NodeEventType
                }
                , function(t) {
                    _ = t.MarketMessage
                }
                , function(t) {
                    f = t.MarketConfig
                }
                , function(t) {
                    b = t.__global
                }
                , function(t) {
                    h = t.GameSubUI
                }
            ],
            execute: function() {
                var p, d, y, g, N, x, v, I, S, B, C, M, z, U, w, D, E, T, k, O, H, L, P, A;
                u._RF.push({}, "97df9AaDS1MlJlrFaW3kbMc", "ConfirmBuyUI", void 0);
                var V = o.ccclass
                    , F = o.property;
                t("ConfirmBuyUI", (p = F(a),
                    d = F(a),
                    y = F(l),
                    g = F(c),
                    N = F(a),
                    x = F(a),
                    v = F(l),
                    I = F(l),
                    S = F(l),
                    B = F(s),
                    C = F(l),
                V((U = n((z = function(t) {
                    function n() {
                        for (var n, e = arguments.length, u = new Array(e), o = 0; o < e; o++)
                            u[o] = arguments[o];
                        return n = t.call.apply(t, [this].concat(u)) || this,
                            i(n, "btn_sure", U, r(n)),
                            i(n, "btn_cancel", w, r(n)),
                            i(n, "txt_useNum", D, r(n)),
                            i(n, "mc_icon", E, r(n)),
                            i(n, "btn_add", T, r(n)),
                            i(n, "btn_min", k, r(n)),
                            i(n, "txt_name", O, r(n)),
                            i(n, "txt_desc", H, r(n)),
                            i(n, "txt_haveNum", L, r(n)),
                            i(n, "slider", P, r(n)),
                            i(n, "txt_needValue", A, r(n)),
                            n._minNum = 1,
                            n._maxNum = 999,
                            n._currentItem = void 0,
                            n._callback = void 0,
                            n
                    }
                    e(n, t);
                    var u = n.prototype;
                    return u.onLoad = function() {
                        this.btn_sure.node.on(m.TOUCH_END, this.onSureBtn, this),
                            this.btn_cancel.node.on(m.TOUCH_END, this.onCancelBtn, this),
                            this.btn_add.node.on(m.TOUCH_END, this.onAddBtn, this),
                            this.btn_min.node.on(m.TOUCH_END, this.onMinBtn, this)
                    }
                        ,
                        u.onSureBtn = function() {}
                        ,
                        u.onCancelBtn = function() {
                            this.notify(_.CLOSE_BUY_SUCCESS_VIEW)
                        }
                        ,
                        u.onAddBtn = function() {}
                        ,
                        u.onMinBtn = function() {
                            var t = Number(this.txt_useNum.string);
                            t > 1 && (this.updateUseNum(t - 1),
                                this.updateSlider(t - 1))
                        }
                        ,
                        u.updateUseNum = function(t) {
                            t > this._maxNum ? t = this._maxNum : t < this._minNum && (t = this._minNum),
                                this.txt_useNum.string = t.toString()
                        }
                        ,
                        u.updateSlider = function(t) {
                            t > this._maxNum ? t = this._maxNum : t < this._minNum ? t = this._minNum : t == this._minNum && (t = 0),
                                this.slider.progress = t / this._maxNum
                        }
                        ,
                        u.getCanBuyMax = function() {
                            return 1 == this._currentItem.itemType || 3 == this._currentItem.itemType || 1 == this._currentItem.onlyOne || this.isSpItem() ? 1 : b.MainRoleData.isVip && -1 != this._currentItem.vipPrice ? Math.floor(f.rocoShell / this._currentItem.vipPrice) : Math.floor(f.rocoShell / this._currentItem.discountPrice)
                        }
                        ,
                        u.isSpItem = function() {
                            for (var t = [33816862, 33620285, 34013409, 33947775, 33882195, 33751351, 34340866, 34340867, 34340868], n = 0; n < t.length; n++)
                                if (this._currentItem.id == t[n])
                                    return !0;
                            return !1
                        }
                        ,
                        u.hide = function() {
                            this.node.active = !1
                        }
                        ,
                        n
                }(h)).prototype, "btn_sure", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    w = n(z.prototype, "btn_cancel", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = n(z.prototype, "txt_useNum", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = n(z.prototype, "mc_icon", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = n(z.prototype, "btn_add", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = n(z.prototype, "btn_min", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = n(z.prototype, "txt_name", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = n(z.prototype, "txt_desc", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = n(z.prototype, "txt_haveNum", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = n(z.prototype, "slider", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = n(z.prototype, "txt_needValue", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = z)) || M));
                u._RF.pop()
            }
        }
    }
));
