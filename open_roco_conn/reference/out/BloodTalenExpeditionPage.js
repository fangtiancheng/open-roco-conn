System.register("chunks:///_virtual/BloodTalenExpeditionPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./BloodTalenCGI.ts", "./BloodTalenExpeditionItem.ts", "./global.ts", "./CFunction.ts", "./BloodTalenMessage.ts"], (function(e) {
        var t, i, n, o, s, l, a, r, c, h, p, u, g, f, d, b, v, m, B;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    s = e.cclegacy,
                        l = e._decorator,
                        a = e.Button,
                        r = e.Node,
                        c = e.Toggle,
                        h = e.Label,
                        p = e.NodeEventType,
                        u = e.Sprite
                }
                , function(e) {
                    g = e.GameSubUI
                }
                , function(e) {
                    f = e.GetExpeditionData,
                        d = e.ReqVipSkip
                }
                , function(e) {
                    b = e.BloodTalenExpeditionItem
                }
                , function(e) {
                    v = e.__global
                }
                , function(e) {
                    m = e.CFunction
                }
                , function(e) {
                    B = e.BloodTalenMessage
                }
            ],
            execute: function() {
                var T, y, I, C, L, R, N, S, k, x, w, E, P, _;
                s._RF.push({}, "d6de244kYdDyY7PUAceAXPK", "BloodTalenExpeditionPage", void 0);
                var z = l.ccclass
                    , D = l.property
                    , V = ["畏惧", "嚣张", "猖狂"]
                    , A = [2007, 1799, 2128];
                e("BloodTalenExpeditionPage", (T = D(a),
                    y = D(r),
                    I = D(r),
                    C = D(c),
                    L = D(r),
                    R = D(h),
                z((k = t((S = function(e) {
                    function t() {
                        for (var t, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
                            s[l] = arguments[l];
                        return t = e.call.apply(e, [this].concat(s)) || this,
                            n(t, "challengeBtn", k, o(t)),
                            n(t, "challengeComplete", x, o(t)),
                            n(t, "vipNode", w, o(t)),
                            n(t, "vipToggle", E, o(t)),
                            n(t, "bossNode", P, o(t)),
                            n(t, "bossStateLabel", _, o(t)),
                            t.bossItemList = void 0,
                            t.params = void 0,
                            t
                    }
                    i(t, e);
                    var s = t.prototype;
                    return s.onLoad = function() {
                        this.challengeBtn.node.on(p.TOUCH_END, this.onChallengeBtn, this),
                            this.vipNode.on(p.TOUCH_END, this.onVipNode, this),
                            this.onInitBossItemList();
                        this.onRefresh({
                            init: !0,
                            fightindex: "0",
                            id: "803966",
                            pass: "0",
                            schedule: "0",
                            vip: "0"
                        }),
                            this.refresh()
                    }
                        ,
                        s.onInitBossItemList = function() {
                            var e = this.bossNode.children;
                            this.bossItemList = new Array(e.length);
                            for (var t = 0; t < e.length; t++) {
                                var i = e[t].getComponent(b);
                                i.selected = !1,
                                    i.state = 0,
                                    i.petId = A[t],
                                    this.bossItemList[t] = i
                            }
                        }
                        ,
                        s.refresh = function() {
                            var e = this;
                            f((function(t) {
                                    "0" === t.result.value && e.onRefresh(t)
                                }
                            ))
                        }
                        ,
                        s.onRefresh = function(e) {
                            this.params = e,
                                this.onRefreshBoss(e),
                                this.onRefreshState(e),
                                this.onRefreshVip(e)
                        }
                        ,
                        s.onRefreshBoss = function(e) {
                            for (var t = e.fightindex, i = e.schedule, n = parseInt(t), o = 0; o < this.bossItemList.length; o++) {
                                var s = this.bossItemList[o];
                                s.selected = o === n,
                                    s.state = o < n ? 1 : 0
                            }
                            this.bossStateLabel.string = "对手状态：" + V[parseInt(i)]
                        }
                        ,
                        s.onRefreshState = function(e) {
                            var t = e.fightindex;
                            if (!0 === e.init)
                                this.challengeBtn.interactable = !1,
                                    this.challengeBtn.getComponent(u).grayscale = !0,
                                    this.challengeComplete.active = !1;
                            else {
                                this.challengeBtn.interactable = !0,
                                    this.challengeBtn.getComponent(u).grayscale = !1;
                                var i = parseInt(t);
                                this.challengeBtn.node.active = i < 3,
                                    this.challengeComplete.active = i >= 3
                            }
                        }
                        ,
                        s.onRefreshVip = function(e) {
                            var t = e.vip
                                , i = e.pass;
                            this.vipToggle.isChecked = "0" !== t && "0" !== i
                        }
                        ,
                        s.onVipNode = function() {
                            "0" !== this.params.vip ? (this.vipToggle.isChecked = !this.vipToggle.isChecked,
                                d({
                                    vipSkip: this.vipToggle.isChecked
                                }, (function(e) {
                                        e.result.value
                                    }
                                ))) : v.showMsgBox("充值VIP才能享有特权，是否前往开通?", 2, new m((function(e) {
                                    1 == e && v.linkToVipPayPage()
                                }
                            )))
                        }
                        ,
                        s.onChallengeBtn = function() {
                            if (this.challengeBtn.interactable) {
                                var e = {
                                    id: this.params.id,
                                    vipSkip: this.vipToggle.isChecked
                                };
                                this.notify(B.BATTLE_START, e)
                            }
                        }
                        ,
                        t
                }(g)).prototype, "challengeBtn", [T], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    x = t(S.prototype, "challengeComplete", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(S.prototype, "vipNode", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = t(S.prototype, "vipToggle", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = t(S.prototype, "bossNode", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = t(S.prototype, "bossStateLabel", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = S)) || N));
                s._RF.pop()
            }
        }
    }
));
