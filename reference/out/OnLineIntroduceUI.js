System.register("chunks:///_virtual/OnLineIntroduceUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./GiftCenterOnlineConfig.ts", "./SpriteFrameSelector.ts"], (function(e) {
        var t, i, n, o, r, a, l, u, c, s, h, p, d, f, g;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        a = e._decorator,
                        l = e.Node,
                        u = e.RichText,
                        c = e.Label,
                        s = e.ToggleComponent,
                        h = e.sys,
                        p = e.NodeEventType
                }
                , function(e) {
                    d = e.GameSubUI
                }
                , function(e) {
                    f = e.GiftCenterOnlineConfig
                }
                , function(e) {
                    g = e.default
                }
            ],
            execute: function() {
                var b, m, w, T, C, S, y, v, R, O, E, I, N, _, A, F;
                r._RF.push({}, "85578LOc+BGCbuu7GJwQ7TM", "OnLineIntroduceUI", void 0);
                var L = a.ccclass
                    , U = a.property;
                e("OnLineIntroduceUI", (b = U(l),
                    m = U(l),
                    w = U(u),
                    T = U(c),
                    C = U(s),
                    S = U(g),
                    y = U(l),
                L((O = t((R = function(e) {
                    function t() {
                        for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                            r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            n(t, "propShow", O, o(t)),
                            n(t, "detailDes", E, o(t)),
                            n(t, "rewardName", I, o(t)),
                            n(t, "rewardCount", N, o(t)),
                            n(t, "toggle1", _, o(t)),
                            n(t, "line", A, o(t)),
                            n(t, "tips", F, o(t)),
                            t.maxToggle = 2,
                            t
                    }
                    i(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        h.platform === h.Platform.MOBILE_BROWSER ? (this.rewardName.node.on(p.TOUCH_START, this.onTouchStart.bind(this), this, !0),
                            this.rewardName.node.on(p.TOUCH_CANCEL, this.onTouchCancel.bind(this), this, !0)) : (this.rewardName.node.on(p.MOUSE_ENTER, this.onTouchStart.bind(this), this),
                            this.rewardName.node.on(p.MOUSE_LEAVE, this.onTouchCancel.bind(this), this)),
                            this.line.gotoAndStop(1)
                    }
                        ,
                        r.onTouchStart = function() {
                            this.tips.active = !0,
                                this.line.gotoAndStop(2)
                        }
                        ,
                        r.onTouchCancel = function(e) {
                            this.tips.active = !1,
                                this.line.gotoAndStop(1)
                        }
                        ,
                        r.onToggle = function(e) {
                            var t = e.node.getSiblingIndex();
                            t < 0 && (t = 0),
                            t >= this.maxToggle && (t = this.maxToggle - 1),
                                0 == t ? (this.detailDes.active = !0,
                                    this.propShow.active = !1) : (this.detailDes.active = !1,
                                    this.propShow.active = !0)
                        }
                        ,
                        r.updatePropInfo = function(e) {
                            this.toggle1.isChecked = !0;
                            var t = "<color=#FF3300>*</color><outline color=#FFFFFF width=2><color=#3333CC>" + f.REWARD_ARR[e] + "</color></outline>";
                            this.rewardName.string = t,
                                this.rewardCount.string = f.REWARD_COUNT_ARR[e]
                        }
                        ,
                        t
                }(d)).prototype, "propShow", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    E = t(R.prototype, "detailDes", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = t(R.prototype, "rewardName", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = t(R.prototype, "rewardCount", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = t(R.prototype, "toggle1", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = t(R.prototype, "line", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = t(R.prototype, "tips", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = R)) || v));
                r._RF.pop()
            }
        }
    }
));
