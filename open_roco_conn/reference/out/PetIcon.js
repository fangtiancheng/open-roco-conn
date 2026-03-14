System.register("chunks:///_virtual/PetIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts", "./Icon.ts"], (function(e) {
        var n, t, r, i, o, l, a, c, u;
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
                    c = e.ItemIcon
                }
                , function(e) {
                    u = e.IconType
                }
            ],
            execute: function() {
                var s, p, b, f, y, I, L, m;
                o._RF.push({}, "93e4bXKPrBJw5z3OiXoMBIS", "PetIcon", void 0);
                var v = l.ccclass
                    , h = l.property;
                e("PetIcon", (s = h(a),
                    p = h(a),
                    b = h(a),
                v((I = n((y = function(e) {
                    function n() {
                        for (var n, t = arguments.length, o = new Array(t), l = 0; l < t; l++)
                            o[l] = arguments[l];
                        return n = e.call.apply(e, [this].concat(o)) || this,
                            r(n, "nameLabel", I, i(n)),
                            r(n, "descLabel", L, i(n)),
                            r(n, "levelLabel", m, i(n)),
                            n
                    }
                    return t(n, e),
                        n.prototype.onInitParams = function(e) {
                            e.type = u.PET,
                                e.showTips = !1,
                                e.levelTitle = "LV."
                        }
                        ,
                        n
                }(c)).prototype, "nameLabel", [s], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    L = n(y.prototype, "descLabel", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    m = n(y.prototype, "levelLabel", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f = y)) || f));
                o._RF.pop()
            }
        }
    }
));
