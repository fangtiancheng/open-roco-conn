System.register("chunks:///_virtual/CtlUISonBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpriteFrameSelector.ts"], (function(t) {
        var e, n, i, r, a, o, l, u, c, s, b, h;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    r = t.assertThisInitialized,
                    a = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        l = t._decorator,
                        u = t.Button,
                        c = t.Label,
                        s = t.NodeEventType,
                        b = t.Component
                }
                , function(t) {
                    h = t.default
                }
            ],
            execute: function() {
                var d, m, p, f, _, T, g, x, C, y, N, v, I, z, B, w;
                o._RF.push({}, "06ae0iDy/ZFhq1PO4RtOJIy", "CtlUISonBar", void 0);
                var S = l.ccclass
                    , k = l.property;
                t("CtlUISonBar", (d = k(u),
                    m = k(u),
                    p = k(h),
                    f = k(c),
                    _ = k(c),
                    T = k(c),
                    g = k(c),
                S((y = e((C = function(t) {
                    function e() {
                        for (var e, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                            a[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(a)) || this,
                            i(e, "btnChild_0", y, r(e)),
                            i(e, "btnChild_1", N, r(e)),
                            i(e, "bar", v, r(e)),
                            i(e, "txtTabName0", I, r(e)),
                            i(e, "txtTabName1", z, r(e)),
                            i(e, "txtTabName0_1", B, r(e)),
                            i(e, "txtTabName1_1", w, r(e)),
                            e.m_length = void 0,
                            e.m_curIndex = void 0,
                            e.m_onTick = void 0,
                            e
                    }
                    n(e, t);
                    var o = e.prototype;
                    return o.onLoad = function() {
                        this.btnChild_0.node.on(s.TOUCH_END, this.onChild0Btn, this),
                            this.btnChild_1.node.on(s.TOUCH_END, this.onChild1Btn, this),
                            this.m_curIndex = 0
                    }
                        ,
                        o.setCurIndex = function(t) {
                            this.m_onTick(t)
                        }
                        ,
                        o.onChild0Btn = function() {
                            this.setCurIndex(0)
                        }
                        ,
                        o.onChild1Btn = function() {
                            this.setCurIndex(1)
                        }
                        ,
                        o.tabName = function(t, e) {
                            this.txtTabName0.string = t,
                                this.txtTabName1.string = e,
                                this.txtTabName0_1.string = t,
                                this.txtTabName1_1.string = e
                        }
                        ,
                        o.changeColor = function(t) {
                            this.txtTabName0.node.active = 0 == t,
                                this.txtTabName0_1.node.active = 1 == t,
                                this.txtTabName1.node.active = 1 == t,
                                this.txtTabName1_1.node.active = 0 == t
                        }
                        ,
                        a(e, [{
                            key: "length",
                            set: function(t) {
                                this.m_length = t
                            }
                        }, {
                            key: "handler",
                            set: function(t) {
                                this.m_onTick = t
                            }
                        }, {
                            key: "gotoAndStop",
                            set: function(t) {
                                this.bar.gotoAndStop(t),
                                    this.changeColor(t - 1)
                            }
                        }]),
                        e
                }(b)).prototype, "btnChild_0", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    N = e(C.prototype, "btnChild_1", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = e(C.prototype, "bar", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = e(C.prototype, "txtTabName0", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = e(C.prototype, "txtTabName1", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = e(C.prototype, "txtTabName0_1", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = e(C.prototype, "txtTabName1_1", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = C)) || x));
                o._RF.pop()
            }
        }
    }
));
