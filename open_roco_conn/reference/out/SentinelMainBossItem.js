System.register("chunks:///_virtual/SentinelMainBossItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SentinelIntelligenceProtocol.ts", "./ActivityAPI.ts", "./SentinelMainBossItemIcon.ts", "./Icon.ts"], (function(t) {
        var n, e, i, l, o, r, a, c, s, u, h, f, p;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    l = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        r = t._decorator,
                        a = t.Node,
                        c = t.NodeEventType,
                        s = t.Component
                }
                , function(t) {
                    u = t.sentinelIntelligenceProtocol
                }
                , function(t) {
                    h = t.ActivityAPI
                }
                , function(t) {
                    f = t.SentinelMainBossItemIcon
                }
                , function(t) {
                    p = t.IconType
                }
            ],
            execute: function() {
                var g, d, b, y, v, I, S, m, B, w, F, T, z, C, D, A, G, M, _, N, P, x;
                o._RF.push({}, "a118exIMlRC7LLAGmIeqcEV", "SentinelMainBossItem", void 0);
                var H = r.ccclass
                    , E = r.property;
                t("SentinelMainBossItem", (g = H("SentinelMainBossItem"),
                    d = E(a),
                    b = E(a),
                    y = E(a),
                    v = E(a),
                    I = E(a),
                    S = E(a),
                    m = E(a),
                    B = E(a),
                    w = E(a),
                g(((x = function(t) {
                    function n() {
                        for (var n, e = arguments.length, o = new Array(e), r = 0; r < e; r++)
                            o[r] = arguments[r];
                        return n = t.call.apply(t, [this].concat(o)) || this,
                            i(n, "hardStart1", z, l(n)),
                            i(n, "hardStart2", C, l(n)),
                            i(n, "hardStart3", D, l(n)),
                            i(n, "collectGray", A, l(n)),
                            i(n, "collectBtn", G, l(n)),
                            i(n, "bossIcon", M, l(n)),
                            i(n, "hardDrop", _, l(n)),
                            i(n, "newFlag", N, l(n)),
                            i(n, "finishFlag", P, l(n)),
                            n.index = 0,
                            n
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.onLoad = function() {
                        this.collectBtn.on(c.TOUCH_END, this.onCollectBtn, this),
                            this.collectGray.on(c.TOUCH_END, this.onCollectGray, this),
                            this.hardDrop.active = !1,
                            this.newFlag.active = !1,
                            this.finishFlag.active = !1
                    }
                        ,
                        o.setBossData = function(t, n) {
                            this.index = n;
                            for (var e = [this.hardStart1, this.hardStart2, this.hardStart3], i = 0; i < t.stars.length; i++)
                                e[i].active = t.stars[i];
                            this.collectBtn.active = 2 === t.fightButtonState,
                                this.collectGray.active = 2 !== t.fightButtonState,
                                this.finishFlag.active = 3 === t.fightButtonState,
                                this.hardDrop.active = t.showHardFlag,
                                this.newFlag.active = t.showNewFlag;
                            var l = {
                                type: p.PET,
                                showTips: !1
                            }
                                , o = {
                                id: t.id
                            }
                                , r = this.bossIcon.getComponent(f);
                            r.params = l,
                                r.data = o
                        }
                        ,
                        o.onCollectBtn = function() {
                            var t = this;
                            u.startFight({
                                boss_index: this.index + 1
                            }, (function(e) {
                                    var i, l;
                                    (console.log("[jinlong] [sentinel-Intelligence] [onCollectBtn] " + JSON.stringify(e || "")),
                                    "0" === (null == e || null == (i = e.result) ? void 0 : i.value)) ? t.node.emit(n.START_FIGHT, e.id) : h.showAlert((null == e || null == (l = e.result) ? void 0 : l.msg) || "请求战斗失败")
                                }
                            ), (function(t) {
                                    console.log("[jinlong] [sentinel-Intelligence] [onCollectBtn] " + JSON.stringify(t || ""))
                                }
                            ))
                        }
                        ,
                        o.onCollectGray = function() {}
                        ,
                        n
                }(s)).START_FIGHT = "startFight@SentinelMainBossItem",
                    z = n((T = x).prototype, "hardStart1", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    C = n(T.prototype, "hardStart2", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = n(T.prototype, "hardStart3", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = n(T.prototype, "collectGray", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = n(T.prototype, "collectBtn", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = n(T.prototype, "bossIcon", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = n(T.prototype, "hardDrop", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = n(T.prototype, "newFlag", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = n(T.prototype, "finishFlag", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = T)) || F));
                o._RF.pop()
            }
        }
    }
));
