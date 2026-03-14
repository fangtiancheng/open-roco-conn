System.register("chunks:///_virtual/ServerListItemUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpriteFrameSelector.ts"], (function(e) {
        var t, r, i, n, o, c, a, m, l, u;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        c = e._decorator,
                        a = e.Sprite,
                        m = e.Label,
                        l = e.Component
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                var s, f, d, p, g, v, b, h, R, S, y;
                o._RF.push({}, "3b874JxE69OGonpJa5VRL/G", "ServerListItemUI", void 0);
                var L = c.ccclass
                    , z = c.property;
                e("default", (s = L("ServerListItemUI"),
                    f = z(u),
                    d = z(a),
                    p = z(a),
                    g = z(m),
                s((h = t((b = function(e) {
                    function t() {
                        for (var t, r = arguments.length, o = new Array(r), c = 0; c < r; c++)
                            o[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            i(t, "mcStar", h, n(t)),
                            i(t, "bgRecommend", R, n(t)),
                            i(t, "imgRecommend", S, n(t)),
                            i(t, "tfServerName", y, n(t)),
                            t.zid = "",
                            t
                    }
                    r(t, e);
                    var o = t.prototype;
                    return o.start = function() {}
                        ,
                        o.onLoad = function() {
                            this.imgRecommend && (this.imgRecommend.node.active = !1),
                            this.bgRecommend && (this.bgRecommend.node.active = !1)
                        }
                        ,
                        o.refreshServerName = function(e) {
                            this.tfServerName.string = e
                        }
                        ,
                        o.refreshRecommend = function(e) {
                            e == this.tfServerName.string ? this.imgRecommend.node.active = !0 : this.imgRecommend.node.active = !1,
                                this.bgRecommend.node.active = this.imgRecommend.node.active
                        }
                        ,
                        t
                }(l)).prototype, "mcStar", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    R = t(b.prototype, "bgRecommend", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = t(b.prototype, "imgRecommend", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    y = t(b.prototype, "tfServerName", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = b)) || v));
                o._RF.pop()
            }
        }
    }
));
