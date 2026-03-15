System.register("chunks:///_virtual/SecretRealmRewardItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SecretRealmMessage.ts", "./ResManager.ts", "./SecretRealmConfig.ts"], (function(e) {
        var t, r, n, i, a, o, l, c, s, u, f, m, p, g, R, b;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        o = e._decorator,
                        l = e.Button,
                        c = e.Sprite,
                        s = e.Label,
                        u = e.Node,
                        f = e.NodeEventType,
                        m = e.SpriteFrame
                }
                , function(e) {
                    p = e.GameUI
                }
                , function(e) {
                    g = e.SecretRealmMessage
                }
                , function(e) {
                    R = e.default
                }
                , function(e) {
                    b = e.SecretRealmConfig
                }
            ],
            execute: function() {
                var d, C, S, h, _, v, y, I, N, M;
                a._RF.push({}, "450bdQ3PxJFIKCUxfx2VoR2", "SecretRealmRewardItem", void 0);
                var w = o.ccclass
                    , E = o.property;
                e("SecretRealmRewardItem", (d = E(l),
                    C = E(c),
                    S = E(s),
                    h = E(u),
                w((y = t((v = function(e) {
                    function t() {
                        for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                            a[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            n(t, "btnClose", y, i(t)),
                            n(t, "icon", I, i(t)),
                            n(t, "itemName", N, i(t)),
                            n(t, "confirmBtn", M, i(t)),
                            t
                    }
                    r(t, e);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.btnClose.node.on(f.TOUCH_END, this.onCloseClick, this)
                    }
                        ,
                        a.refreshAwakePage = function(e) {
                            var t = this
                                , r = b.SUMMON_REWARD_ICON_CONFIG.get(e.page);
                            if (r) {
                                var n = r[e.index];
                                if (n) {
                                    var i = "prefabs/secret-realm/imgs/" + n;
                                    R.Instance.loadingRes("gui", i, (function(e, r) {
                                            if (e)
                                                console.error("[jinlong] [SecretRealmSoulpearltem] loadingRes error: " + e.message);
                                            else {
                                                var n = m.createWithImage(r);
                                                t.icon.spriteFrame = n
                                            }
                                        }
                                    ))
                                }
                            }
                            var a = b.SUMMON_REWARD_CONFIG.get(e.page);
                            if (a) {
                                var o = a[e.index];
                                o && (this.itemName.string = 50 === o ? "50万经验果礼包" : 100 === o ? "100万经验果礼包" : "努力果礼包")
                            }
                        }
                        ,
                        a.onCloseClick = function() {
                            this.notify(g.CLOSE_CALL_MONSTER_REWARD_ITEM_VIEW)
                        }
                        ,
                        t
                }(p)).prototype, "btnClose", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    I = t(v.prototype, "icon", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = t(v.prototype, "itemName", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = t(v.prototype, "confirmBtn", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = v)) || _));
                a._RF.pop()
            }
        }
    }
));
