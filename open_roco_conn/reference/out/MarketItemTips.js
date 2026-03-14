System.register("chunks:///_virtual/MarketItemTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, i, n, r, o, a, l, u, c;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized,
                    o = t.createClass
            }
                , function(t) {
                    a = t.cclegacy,
                        l = t._decorator,
                        u = t.Label,
                        c = t.Component
                }
            ],
            execute: function() {
                var s, p, f, m, x, y, b, _, h;
                a._RF.push({}, "2f1dcdpJnxE5rlQ2mr2axHB", "MarketItemTips", void 0);
                var g = l.ccclass
                    , d = l.property;
                t("MarketItemTips", (s = g("MarketItemTips"),
                    p = d(u),
                    f = d(u),
                    m = d(u),
                s((b = e((y = function(t) {
                    function e() {
                        for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                            o[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(o)) || this,
                            n(e, "txt_name", b, r(e)),
                            n(e, "txt_time", _, r(e)),
                            n(e, "txt_info", h, r(e)),
                            e
                    }
                    return i(e, t),
                        e.prototype.onLoad = function() {
                            this.visible = !0
                        }
                        ,
                        o(e, [{
                            key: "visible",
                            set: function(t) {
                                this.node.active = t
                            }
                        }, {
                            key: "txtInfo",
                            get: function() {
                                return this.txt_info
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this.txt_name
                            }
                        }, {
                            key: "txtTime",
                            get: function() {
                                return this.txt_time
                            }
                        }]),
                        e
                }(c)).prototype, "txt_name", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    _ = e(y.prototype, "txt_time", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = e(y.prototype, "txt_info", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = y)) || x));
                a._RF.pop()
            }
        }
    }
));
