System.register("chunks:///_virtual/MarketNoticeUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./global.ts"], (function(t) {
        var n, e, i, o, r, a, l, c, u, s;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        a = t._decorator,
                        l = t.Button,
                        c = t.NodeEventType
                }
                , function(t) {
                    u = t.GameUI
                }
                , function(t) {
                    s = t.__global
                }
            ],
            execute: function() {
                var p, f, h, b, g, y;
                r._RF.push({}, "3fc4e9fNx9KpoqwwDZmBmMg", "MarketNoticeUI", void 0);
                var d = a.ccclass
                    , k = a.property;
                t("MarketNoticeUI", (p = k(l),
                    f = k(l),
                d((g = n((b = function(t) {
                    function n() {
                        for (var n, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
                            r[a] = arguments[a];
                        return n = t.call.apply(t, [this].concat(r)) || this,
                            i(n, "btnTrueLinkVip", g, o(n)),
                            i(n, "btnCloseCharge", y, o(n)),
                            n
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.onLoad = function() {
                        this.btnTrueLinkVip.node.on(c.TOUCH_END, this.onLinkVipBtn, this),
                            this.btnCloseCharge.node.on(c.TOUCH_END, this.onCloseBtn, this)
                    }
                        ,
                        r.onLinkVipBtn = function() {
                            s.linkToVipPayPage()
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.node.active = !1
                        }
                        ,
                        n
                }(u)).prototype, "btnTrueLinkVip", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = n(b.prototype, "btnCloseCharge", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = b)) || h));
                r._RF.pop()
            }
        }
    }
));
