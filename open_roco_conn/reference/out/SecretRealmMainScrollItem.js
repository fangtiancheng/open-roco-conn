System.register("chunks:///_virtual/SecretRealmMainScrollItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SecretRealmConfig.ts", "./ResManager.ts"], (function(e) {
        var t, n, o, i, r, a, c, l, s, u, p, m, h;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        a = e._decorator,
                        c = e.Sprite,
                        l = e.Label,
                        s = e.NodeEventType,
                        u = e.SpriteFrame,
                        p = e.Component
                }
                , function(e) {
                    m = e.SecretRealmConfig
                }
                , function(e) {
                    h = e.default
                }
            ],
            execute: function() {
                var g, f, S, d, T, b, I, v, B, R, y;
                r._RF.push({}, "4252bZu5bFGN6rU61lw6Upg", "SecretRealmMainScrollItem", void 0);
                var E = a.ccclass
                    , M = a.property;
                e("SecretRealmMainScrollItem", (g = E("SecretRealmMainScrollItem"),
                    f = M(c),
                    S = M(c),
                    d = M(l),
                    T = M(c),
                g((v = t((I = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                            r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            o(t, "monsterIcon", v, i(t)),
                            o(t, "unlockStamp", B, i(t)),
                            o(t, "scrollName", R, i(t)),
                            o(t, "tipBg", y, i(t)),
                            t
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        this.tipBg.node.active = !1,
                            this.monsterIcon.node.on(s.TOUCH_START, this.onTipBgTouchStart, this),
                            this.monsterIcon.node.on(s.TOUCH_END, this.onTipBgTouchEnd, this),
                            this.monsterIcon.node.on(s.TOUCH_CANCEL, this.onTipBgTouchEnd, this),
                            this.monsterIcon.node.on(s.MOUSE_ENTER, this.onTipBgTouchStart, this),
                            this.monsterIcon.node.on(s.MOUSE_LEAVE, this.onTipBgTouchEnd, this)
                    }
                        ,
                        r.onTipBgTouchStart = function() {
                            this.tipBg.node.active = !0
                        }
                        ,
                        r.onTipBgTouchEnd = function() {
                            this.tipBg.node.active = !1
                        }
                        ,
                        r.setScrollData = function(e, t, n) {
                            var o = this;
                            this.unlockStamp.node.active = !n,
                                this.scrollName.string = t;
                            var i = m.COMBAT_IDS.indexOf(e);
                            if (-1 != i) {
                                var r = "prefabs/secret-realm/imgs/scroll-icon/山海秘境-卷轴宠物-" + (i + 1);
                                h.Instance.loadingRes("gui", r, (function(e, t) {
                                        if (e)
                                            console.error("[jinlong] [SecretRealmMainScrollItem] loadingRes error: " + e.message);
                                        else {
                                            var n = u.createWithImage(t);
                                            o.monsterIcon.spriteFrame = n
                                        }
                                    }
                                ))
                            }
                        }
                        ,
                        t
                }(p)).prototype, "monsterIcon", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    B = t(I.prototype, "unlockStamp", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = t(I.prototype, "scrollName", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    y = t(I.prototype, "tipBg", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    b = I)) || b));
                r._RF.pop()
            }
        }
    }
));
