System.register("chunks:///_virtual/SecretRealmSoulpearltem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts"], (function(e) {
        var t, r, l, n, o, a, i, u, s, c, p, g;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    l = e.initializerDefineProperty,
                    n = e.assertThisInitialized,
                    o = e.createClass
            }
                , function(e) {
                    a = e.cclegacy,
                        i = e._decorator,
                        u = e.Sprite,
                        s = e.Label,
                        c = e.SpriteFrame,
                        p = e.Component
                }
                , function(e) {
                    g = e.default
                }
            ],
            execute: function() {
                var m, f, d, h, S, b, v, y, I, R, B, z, w;
                a._RF.push({}, "c5e7cdTY9ZP0qXdQM1XuS7v", "SecretRealmSoulpearltem", void 0);
                var C = i.ccclass
                    , N = i.property;
                e("SecretRealmSoulpearltem", (m = C("SecretRealmSoulpearltem"),
                    f = N(u),
                    d = N(s),
                    h = N(s),
                    S = N(u),
                    b = N(u),
                m((I = t((y = function(e) {
                    function t() {
                        for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                            o[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            l(t, "soulpearlIcon", I, n(t)),
                            l(t, "soulpearlName", R, n(t)),
                            l(t, "soulpearlCount", B, n(t)),
                            l(t, "soulpearlBg", z, n(t)),
                            l(t, "soulpearlBgSelected", w, n(t)),
                            t.data = null,
                            t
                    }
                    r(t, e);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.soulpearlBg.node.active = !0,
                            this.soulpearlBgSelected.node.active = !1
                    }
                        ,
                        a.setData = function(e) {
                            var t = this;
                            if (this.data = e,
                            !e || null == e.monsterId)
                                return this.soulpearlIcon.node.active = !1,
                                    this.soulpearlName.string = "",
                                    void (this.soulpearlCount.string = "");
                            this.soulpearlIcon.node.active = !0,
                                this.soulpearlName.string = e.monsterName,
                                this.soulpearlCount.string = e.count.toString();
                            var r = "prefabs/secret-realm/imgs/soulpearl-icon/icon-魂珠-" + (e.monsterId + 1);
                            g.Instance.loadingRes("gui", r, (function(e, r) {
                                    if (e)
                                        console.error("[jinlong] [SecretRealmSoulpearltem] loadingRes error: " + e.message);
                                    else {
                                        var l = c.createWithImage(r);
                                        t.soulpearlIcon.spriteFrame = l
                                    }
                                }
                            ))
                        }
                        ,
                        a.setSelected = function(e) {
                            this.soulpearlBg.node.active = !e,
                                this.soulpearlBgSelected.node.active = e
                        }
                        ,
                        o(t, [{
                            key: "soulpearlInfo",
                            get: function() {
                                return this.data
                            }
                        }]),
                        t
                }(p)).prototype, "soulpearlIcon", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    R = t(y.prototype, "soulpearlName", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = t(y.prototype, "soulpearlCount", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = t(y.prototype, "soulpearlBg", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(y.prototype, "soulpearlBgSelected", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = y)) || v));
                a._RF.pop()
            }
        }
    }
));
