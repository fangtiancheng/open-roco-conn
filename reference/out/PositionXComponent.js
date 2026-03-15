System.register("chunks:///_virtual/PositionXComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(o) {
        var t, e, n, i, r, s, c, a;
        return {
            setters: [function(o) {
                t = o.applyDecoratedDescriptor,
                    e = o.inheritsLoose,
                    n = o.initializerDefineProperty,
                    i = o.assertThisInitialized
            }
                , function(o) {
                    r = o.cclegacy,
                        s = o._decorator,
                        c = o.CCInteger,
                        a = o.Component
                }
            ],
            execute: function() {
                var p, u, l, h, f, y, P;
                r._RF.push({}, "ed2acUJrs1AvIIAJejItHer", "PositionXComponent", void 0);
                var X = s.ccclass
                    , g = s.property;
                o("PositionXComponent", (p = X("PositionXComponent"),
                    u = g(c),
                    l = g(c),
                p((y = t((f = function(o) {
                    function t() {
                        for (var t, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return t = o.call.apply(o, [this].concat(r)) || this,
                            n(t, "posX1", y, i(t)),
                            n(t, "posX2", P, i(t)),
                            t
                    }
                    e(t, o);
                    var r = t.prototype;
                    return r.changeToPosX1 = function() {
                        return this.node.setPosition(this.posX1, this.node.getPosition().y),
                            !0
                    }
                        ,
                        r.changeToPosX2 = function() {
                            return this.node.setPosition(this.posX2, this.node.getPosition().y),
                                !0
                        }
                        ,
                        t
                }(a)).prototype, "posX1", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }),
                    P = t(f.prototype, "posX2", [l], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    h = f)) || h));
                r._RF.pop()
            }
        }
    }
));
