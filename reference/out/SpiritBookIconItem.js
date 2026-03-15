System.register("chunks:///_virtual/SpiritBookIconItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, i, r, n, o, c, a, l, u, s;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    n = e.assertThisInitialized,
                    o = e.createClass
            }
                , function(e) {
                    c = e.cclegacy,
                        a = e._decorator,
                        l = e.Sprite,
                        u = e.Node,
                        s = e.Component
                }
            ],
            execute: function() {
                var p, f, d, m, h, v, y;
                c._RF.push({}, "f42dbGKT5BC3YhdjVr6tY/V", "SpiritBookIconItem", void 0);
                var I = a.ccclass
                    , S = a.property;
                e("SpiritIconItem", (p = I("SpiritIconItem"),
                    f = S(l),
                    d = S(u),
                p((v = t((h = function(e) {
                    function t() {
                        for (var t, i = arguments.length, o = new Array(i), c = 0; c < i; c++)
                            o[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            r(t, "mcNew", v, n(t)),
                            r(t, "mcSelected", y, n(t)),
                            t._spirit = void 0,
                            t
                    }
                    i(t, e);
                    var c = t.prototype;
                    return c.onLoad = function() {}
                        ,
                        c.updateInfo = function(e) {
                            this._spirit = e,
                                this.mcNew.node.active = e.isNew
                        }
                        ,
                        o(t, [{
                            key: "selected",
                            get: function() {
                                return this.mcSelected.active
                            },
                            set: function(e) {
                                this.mcSelected.active = e
                            }
                        }]),
                        t
                }(s)).prototype, "mcNew", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = t(h.prototype, "mcSelected", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    m = h)) || m));
                c._RF.pop()
            }
        }
    }
));
