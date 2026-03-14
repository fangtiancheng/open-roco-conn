System.register("chunks:///_virtual/NormalIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts", "./Icon.ts"], (function(e) {
        var n, t, r, o, i, a, c, l, u;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy,
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
                var s, p, f, b, m, y;
                i._RF.push({}, "5a65amlQuNEooN12OQo40p2", "NormalIcon", void 0);
                var I = a.ccclass
                    , L = a.property;
                e("NormalIcon", (s = L(c),
                    p = L(c),
                I((m = n((b = function(e) {
                    function n() {
                        for (var n, t = arguments.length, i = new Array(t), a = 0; a < t; a++)
                            i[a] = arguments[a];
                        return n = e.call.apply(e, [this].concat(i)) || this,
                            r(n, "nameLabel", m, o(n)),
                            r(n, "descLabel", y, o(n)),
                            n
                    }
                    return t(n, e),
                        n.prototype.onInitParams = function(e) {
                            e.type = u.NORMAL
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
                    y = n(b.prototype, "descLabel", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f = b)) || f));
                i._RF.pop()
            }
        }
    }
));
