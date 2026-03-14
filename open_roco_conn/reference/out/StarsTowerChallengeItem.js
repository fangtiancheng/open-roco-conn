System.register("chunks:///_virtual/StarsTowerChallengeItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ToolTip.ts", "./BubbleSkinType.ts"], (function(e) {
        var t, r, i, a, n, l, o, u, c, s, p, b;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    a = e.assertThisInitialized,
                    n = e.createClass
            }
                , function(e) {
                    l = e.cclegacy,
                        o = e._decorator,
                        u = e.Node,
                        c = e.Label,
                        s = e.Component
                }
                , function(e) {
                    p = e.TipUtils
                }
                , function(e) {
                    b = e.BubbleSkinType
                }
            ],
            execute: function() {
                var f, g, y, d, h, w, T, m, v, F, L, O;
                l._RF.push({}, "a6820sbo5FFFLYSo0lf/2tO", "StarsTowerChallengeItem", void 0);
                var z = o.ccclass
                    , C = o.property;
                e("StarsTowerChallengeItem", (f = C(u),
                    g = C(c),
                    y = C(u),
                    d = C(u),
                    h = C(u),
                z((m = t((T = function(e) {
                    function t() {
                        for (var t, r = arguments.length, n = new Array(r), l = 0; l < r; l++)
                            n[l] = arguments[l];
                        return t = e.call.apply(e, [this].concat(n)) || this,
                            i(t, "starFlag", m, a(t)),
                            i(t, "descLabel", v, a(t)),
                            i(t, "awardNormal", F, a(t)),
                            i(t, "awardOpen", L, a(t)),
                            i(t, "tipTarget", O, a(t)),
                            t
                    }
                    return r(t, e),
                        n(t, [{
                            key: "star",
                            set: function(e) {
                                this.starFlag.active = e,
                                    this.awardNormal.active = !e,
                                    this.awardOpen.active = e
                            }
                        }, {
                            key: "desc",
                            set: function(e) {
                                this.descLabel.string = e
                            }
                        }, {
                            key: "tip",
                            set: function(e) {
                                p.CreateTip(this.tipTarget, e, b.COMMON_TOOLTIP)
                            }
                        }]),
                        t
                }(s)).prototype, "starFlag", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    v = t(T.prototype, "descLabel", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = t(T.prototype, "awardNormal", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = t(T.prototype, "awardOpen", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = t(T.prototype, "tipTarget", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = T)) || w));
                l._RF.pop()
            }
        }
    }
));
