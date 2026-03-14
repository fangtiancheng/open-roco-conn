System.register("chunks:///_virtual/SecretRealmRewardEgg.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./ActivityAPI.ts", "./Icon.ts", "./SecretRealmMessage.ts", "./ResManager.ts", "./SecretRealmConfig.ts"], (function(e) {
        var t, r, i, n, a, o, c, l, s, u, f, g, p, m, b, R, d, h;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        o = e._decorator,
                        c = e.Button,
                        l = e.Sprite,
                        s = e.Label,
                        u = e.Node,
                        f = e.NodeEventType,
                        g = e.SpriteFrame
                }
                , function(e) {
                    p = e.GameUI
                }
                , function(e) {
                    m = e.ActivityAPI
                }
                , function(e) {
                    b = e.IconType
                }
                , function(e) {
                    R = e.SecretRealmMessage
                }
                , function(e) {
                    d = e.default
                }
                , function(e) {
                    h = e.SecretRealmConfig
                }
            ],
            execute: function() {
                var y, v, S, A, C, I, _, E, w, N;
                a._RF.push({}, "75bc9dUJWZAtp5PqUeEgSUc", "SecretRealmRewardEgg", void 0);
                var M = o.ccclass
                    , O = o.property;
                e("SecretRealmRewardEgg", (y = O(c),
                    v = O(l),
                    S = O(s),
                    A = O(u),
                M((_ = t((I = function(e) {
                    function t() {
                        for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                            a[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            i(t, "btnClose", _, n(t)),
                            i(t, "icon", E, n(t)),
                            i(t, "attribute", w, n(t)),
                            i(t, "confirmBtn", N, n(t)),
                            t.formatAttribute = "",
                            t
                    }
                    r(t, e);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.formatAttribute = this.attribute.string,
                            this.btnClose.node.on(f.TOUCH_END, this.onCloseClick, this)
                    }
                        ,
                        a.refreshAwakePage = function(e) {
                            var t = this
                                , r = h.SUMMON_REWARD_ICON_CONFIG.get(e.page);
                            if (r) {
                                var i = r[e.index];
                                if (i) {
                                    var n = "prefabs/secret-realm/imgs/" + i;
                                    d.Instance.loadingRes("gui", n, (function(e, r) {
                                            if (e)
                                                console.error("[jinlong] [SecretRealmRewardEgg] loadingRes error: " + e.message);
                                            else {
                                                var i = g.createWithImage(r);
                                                t.icon.spriteFrame = i
                                            }
                                        }
                                    ))
                                }
                            }
                            var a = h.SUMMON_REWARD_CONFIG.get(e.page);
                            if (a) {
                                var o = a[e.index];
                                if (o) {
                                    var c = m.getAnyItemName(b.PROPS, o) || ""
                                        , l = m.getItemDesc(o) || "";
                                    this.attribute.string = this.formatAttribute.replace("{0}", c).replace("{1}", l).replace("{2}", "不可")
                                }
                            }
                        }
                        ,
                        a.onCloseClick = function() {
                            this.notify(R.CLOSE_CALL_MONSTER_REWARD_EGG_VIEW)
                        }
                        ,
                        t
                }(p)).prototype, "btnClose", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    E = t(I.prototype, "icon", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(I.prototype, "attribute", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = t(I.prototype, "confirmBtn", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    C = I)) || C));
                a._RF.pop()
            }
        }
    }
));
