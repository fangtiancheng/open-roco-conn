System.register("chunks:///_virtual/PropsIconTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIconTips.ts"], (function(e) {
        var r, t, n, i, o, l, a, c;
        return {
            setters: [function(e) {
                r = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        l = e._decorator,
                        a = e.Label
                }
                , function(e) {
                    c = e.ItemIconTips
                }
            ],
            execute: function() {
                var u, s, p, b, f, m, y, L;
                o._RF.push({}, "28568eJtbtBopQPJJ4e9DAn", "PropsIconTips", void 0);
                var I = l.ccclass
                    , d = l.property;
                e("PropsIconTips", (u = d(a),
                    s = d(a),
                    p = d(a),
                I((m = r((f = function(e) {
                    function r() {
                        for (var r, t = arguments.length, o = new Array(t), l = 0; l < t; l++)
                            o[l] = arguments[l];
                        return r = e.call.apply(e, [this].concat(o)) || this,
                            n(r, "nameLabel", m, i(r)),
                            n(r, "descLabel", y, i(r)),
                            n(r, "timeStrLabel", L, i(r)),
                            r
                    }
                    return t(r, e),
                        r
                }(c)).prototype, "nameLabel", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = r(f.prototype, "descLabel", [s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = r(f.prototype, "timeStrLabel", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    b = f)) || b));
                o._RF.pop()
            }
        }
    }
));
