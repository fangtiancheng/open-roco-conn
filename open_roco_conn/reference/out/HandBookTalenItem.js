System.register("chunks:///_virtual/HandBookTalenItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, r, o, i, a, c, l;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy,
                        a = e._decorator,
                        c = e.Node,
                        l = e.Component
                }
            ],
            execute: function() {
                var s, u, p, d;
                i._RF.push({}, "bdf65PztEpFOY/YT3eJ5HsK", "HandBookTalenItem", void 0);
                var f = a.ccclass
                    , y = a.property;
                e("HandBookTalenItem", (s = y(c),
                f((d = t((p = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                            i[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(i)) || this,
                            r(t, "selected", d, o(t)),
                            t
                    }
                    return n(t, e),
                        t
                }(l)).prototype, "selected", [s], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    u = p)) || u));
                i._RF.pop()
            }
        }
    }
));
