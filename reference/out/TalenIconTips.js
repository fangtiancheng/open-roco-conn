System.register("chunks:///_virtual/TalenIconTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIconTips.ts"], (function(e) {
        var n, t, r, i, a, l, o, c, u;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        l = e._decorator,
                        o = e.Label,
                        c = e.Node
                }
                , function(e) {
                    u = e.ItemIconTips
                }
            ],
            execute: function() {
                var s, p, b, f, y, d, m, I;
                a._RF.push({}, "3305avqwbdKI4ekFpcE2b1m", "TalenIconTips", void 0);
                var T = l.ccclass
                    , g = l.property;
                e("TalenIconTips", (s = g(o),
                    p = g(o),
                    b = g(c),
                T((d = n((y = function(e) {
                    function n() {
                        for (var n, t = arguments.length, a = new Array(t), l = 0; l < t; l++)
                            a[l] = arguments[l];
                        return n = e.call.apply(e, [this].concat(a)) || this,
                            r(n, "nameLabel", d, i(n)),
                            r(n, "descLabel", m, i(n)),
                            r(n, "talenState", I, i(n)),
                            n
                    }
                    return t(n, e),
                        n
                }(u)).prototype, "nameLabel", [s], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    m = n(y.prototype, "descLabel", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = n(y.prototype, "talenState", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f = y)) || f));
                a._RF.pop()
            }
        }
    }
));
