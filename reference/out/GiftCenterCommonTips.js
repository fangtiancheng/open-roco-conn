System.register("chunks:///_virtual/GiftCenterCommonTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, i, r, n, o, s, a, c, l;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        s = e._decorator,
                        a = e.Label,
                        c = e.UITransform,
                        l = e.Component
                }
            ],
            execute: function() {
                var p, u, f, h, m, b, g;
                o._RF.push({}, "b6442MfUVVPf7Fhhrsc+K0n", "GiftCenterCommonTips", void 0);
                var y = s.ccclass
                    , d = s.property;
                e("GiftCenterCommonTips", (p = y("GiftCenterCommonTips"),
                    u = d(a),
                    f = d(c),
                p((b = t((m = function(e) {
                    function t() {
                        for (var t, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
                            o[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            r(t, "descLabel", b, n(t)),
                            r(t, "tipsBg", g, n(t)),
                            t
                    }
                    return i(t, e),
                        t.prototype.setTips = function(e, t) {
                            void 0 === t && (t = 1),
                                this.descLabel.string = e,
                                this.tipsBg.height = 22 * t + 17
                        }
                        ,
                        t
                }(l)).prototype, "descLabel", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    g = t(m.prototype, "tipsBg", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = m)) || h));
                o._RF.pop()
            }
        }
    }
));
