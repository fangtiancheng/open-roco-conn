System.register("chunks:///_virtual/PropsIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts", "./Icon.ts"], (function(e) {
        var n, t, r, i, o, l, a, u, c;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        l = e._decorator,
                        a = e.Label
                }
                , function(e) {
                    u = e.ItemIcon
                }
                , function(e) {
                    c = e.IconType
                }
            ],
            execute: function() {
                var p, b, s, f, y, m, L, I, g, d, h, w, z, P;
                o._RF.push({}, "d9012iB1qtBVpyuJe29ySn6", "PropsIcon", void 0);
                var v = l.ccclass
                    , T = l.property;
                e("PropsIcon", (p = T(a),
                    b = T(a),
                    s = T(a),
                    f = T(a),
                    y = T(a),
                    m = T(a),
                v((g = n((I = function(e) {
                    function n() {
                        for (var n, t = arguments.length, o = new Array(t), l = 0; l < t; l++)
                            o[l] = arguments[l];
                        return n = e.call.apply(e, [this].concat(o)) || this,
                            r(n, "nameLabel", g, i(n)),
                            r(n, "descLabel", d, i(n)),
                            r(n, "countLabel", h, i(n)),
                            r(n, "expireTimeLabel", w, i(n)),
                            r(n, "priceLabel", z, i(n)),
                            r(n, "timeStr", P, i(n)),
                            n
                    }
                    return t(n, e),
                        n.prototype.onInitParams = function(e) {
                            e.type = c.PROPS,
                                e.showTips = !0,
                                e.countTitle = ""
                        }
                        ,
                        n
                }(u)).prototype, "nameLabel", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    d = n(I.prototype, "descLabel", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = n(I.prototype, "countLabel", [s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = n(I.prototype, "expireTimeLabel", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = n(I.prototype, "priceLabel", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = n(I.prototype, "timeStr", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = I)) || L));
                o._RF.pop()
            }
        }
    }
));
