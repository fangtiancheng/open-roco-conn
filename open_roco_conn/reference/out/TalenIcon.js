System.register("chunks:///_virtual/TalenIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts", "./Icon.ts"], (function(e) {
        var n, t, r, i, o, a, c, l, u;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        a = e._decorator,
                        c = e.Label
                }
                , function(e) {
                    l = e.ItemIcon
                }
                , function(e) {
                    u = e.IconType
                }
            ],
            execute: function() {
                var s, p, f, b, y, I;
                o._RF.push({}, "28de4h9fZNOdaL5ZlgpNjaO", "TalenIcon", void 0);
                var d = a.ccclass
                    , h = a.property;
                e("TalenIcon", (s = h(c),
                    p = h(c),
                d((y = n((b = function(e) {
                    function n() {
                        for (var n, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                            o[a] = arguments[a];
                        return n = e.call.apply(e, [this].concat(o)) || this,
                            r(n, "nameLabel", y, i(n)),
                            r(n, "descLabel", I, i(n)),
                            n
                    }
                    return t(n, e),
                        n.prototype.onInitParams = function(e) {
                            e.type = u.TALEN,
                                e.showTips = !1
                        }
                        ,
                        n
                }(l)).prototype, "nameLabel", [s], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    I = n(b.prototype, "descLabel", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f = b)) || f));
                o._RF.pop()
            }
        }
    }
));
