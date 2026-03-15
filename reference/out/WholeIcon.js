System.register("chunks:///_virtual/WholeIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts", "./Icon.ts"], (function(e) {
        var n, t, i, r, l, o, a, c, u;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    l = e.cclegacy,
                        o = e._decorator,
                        a = e.Label
                }
                , function(e) {
                    c = e.ItemIcon
                }
                , function(e) {
                    u = e.IconType
                }
            ],
            execute: function() {
                var p, b, s, f, y, L, m, h, I, g, v, T;
                l._RF.push({}, "e1256kTEPxH6KhcfBjBFRqs", "WholeIcon", void 0);
                var d = o.ccclass
                    , w = o.property;
                e("WholeIcon", (p = w(a),
                    b = w(a),
                    s = w(a),
                    f = w(a),
                    y = w(a),
                d((h = n((m = function(e) {
                    function n() {
                        for (var n, t = arguments.length, l = new Array(t), o = 0; o < t; o++)
                            l[o] = arguments[o];
                        return n = e.call.apply(e, [this].concat(l)) || this,
                            i(n, "nameLabel", h, r(n)),
                            i(n, "descLabel", I, r(n)),
                            i(n, "countLabel", g, r(n)),
                            i(n, "expireTimeLabel", v, r(n)),
                            i(n, "levelLabel", T, r(n)),
                            n
                    }
                    return t(n, e),
                        n.prototype.onInitParams = function(e) {
                            e.type = u.PROPS,
                                e.showTips = !1,
                                e.countTitle = "",
                                e.levelTitle = "LV."
                        }
                        ,
                        n
                }(c)).prototype, "nameLabel", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    I = n(m.prototype, "descLabel", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    g = n(m.prototype, "countLabel", [s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = n(m.prototype, "expireTimeLabel", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = n(m.prototype, "levelLabel", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = m)) || L));
                l._RF.pop()
            }
        }
    }
));
