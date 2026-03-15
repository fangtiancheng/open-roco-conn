System.register("chunks:///_virtual/SecretRealmRewardMonster.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SecretRealmMessage.ts", "./SecretRealmConfig.ts", "./ResManager.ts"], (function(e) {
        var t, r, n, i, o, a, l, s, c, u, f, p, m, g, R, b;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        a = e._decorator,
                        l = e.Button,
                        s = e.Sprite,
                        c = e.Label,
                        u = e.Node,
                        f = e.NodeEventType,
                        p = e.SpriteFrame
                }
                , function(e) {
                    m = e.GameUI
                }
                , function(e) {
                    g = e.SecretRealmMessage
                }
                , function(e) {
                    R = e.SecretRealmConfig
                }
                , function(e) {
                    b = e.default
                }
            ],
            execute: function() {
                var d, v, C, S, h, y, M, _, N, w;
                o._RF.push({}, "fc42cpCrvpHF5gYi/HiLDwl", "SecretRealmRewardMonster", void 0);
                var I = a.ccclass
                    , D = a.property;
                e("SecretRealmRewardMonster", (d = D(l),
                    v = D(s),
                    C = D(c),
                    S = D(u),
                I((M = t((y = function(e) {
                    function t() {
                        for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                            o[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            n(t, "btnClose", M, i(t)),
                            n(t, "icon", _, i(t)),
                            n(t, "monsterName", N, i(t)),
                            n(t, "confirmBtn", w, i(t)),
                            t
                    }
                    r(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.btnClose.node.on(f.TOUCH_END, this.onCloseClick, this)
                    }
                        ,
                        o.refreshAwakePage = function(e) {
                            var t = this
                                , r = R.SUMMON_REWARD_ICON_CONFIG.get(e.page);
                            if (r) {
                                var n = r[e.index];
                                if (n) {
                                    var i = "prefabs/secret-realm/imgs/" + n;
                                    b.Instance.loadingRes("gui", i, (function(e, r) {
                                            if (e)
                                                console.error("[jinlong] [SecretRealmSoulpearltem] loadingRes error: " + e.message);
                                            else {
                                                var n = p.createWithImage(r);
                                                t.icon.spriteFrame = n
                                            }
                                        }
                                    ))
                                }
                            }
                            var o = R.SUMMON_REWARD_CONFIG.get(e.page);
                            if (o) {
                                var a = o[e.index];
                                if (a) {
                                    var l = R.getMonsterIndex(a)
                                        , s = R.getMonsterName(l);
                                    this.monsterName.string = s
                                }
                            }
                        }
                        ,
                        o.onCloseClick = function() {
                            this.notify(g.CLOSE_CALL_MONSTER_REWARD_VIEW)
                        }
                        ,
                        t
                }(m)).prototype, "btnClose", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    _ = t(y.prototype, "icon", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = t(y.prototype, "monsterName", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(y.prototype, "confirmBtn", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = y)) || h));
                o._RF.pop()
            }
        }
    }
));
