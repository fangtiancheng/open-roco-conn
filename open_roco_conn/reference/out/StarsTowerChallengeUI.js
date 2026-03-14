System.register("chunks:///_virtual/StarsTowerChallengeUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerMessage.ts", "./PetAnimation.ts", "./StarsTowerChallengeItem.ts", "./StarsTowerConfig.ts", "./ActivityAPI.ts", "./StarsTowerCGI.ts"], (function(t) {
        var n, e, i, o, r, a, s, l, c, u, p, f, h, d, g, m, b;
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
                        s = t.Node,
                        l = t.Label,
                        c = t.NodeEventType
                }
                , function(t) {
                    u = t.GameUI
                }
                , function(t) {
                    p = t.StarsTowerMessage
                }
                , function(t) {
                    f = t.PetAnimation,
                        h = t.PetAction
                }
                , function(t) {
                    d = t.StarsTowerChallengeItem
                }
                , function(t) {
                    g = t.STARS_CONDITION
                }
                , function(t) {
                    m = t.ActivityAPI
                }
                , function(t) {
                    b = t.GetStarsTowerConfig
                }
            ],
            execute: function() {
                var C, I, T, y, w, S, v, N, A, B, U, L;
                r._RF.push({}, "3692eIeqHNMup4KaKrMl9Xa", "StarsTowerChallengeUI", void 0);
                var P = a.ccclass
                    , _ = a.property;
                t("StarsTowerChallengeUI", (C = _(s),
                    I = _(s),
                    T = _(l),
                    y = _(f),
                    w = _(d),
                P((N = n((v = function(t) {
                    function n() {
                        for (var n, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
                            r[a] = arguments[a];
                        return n = t.call.apply(t, [this].concat(r)) || this,
                            i(n, "closeBtn", N, o(n)),
                            i(n, "challengeButton", A, o(n)),
                            i(n, "bossNameLabel", B, o(n)),
                            i(n, "petAnimation", U, o(n)),
                            i(n, "conditions", L, o(n)),
                            n.params = void 0,
                            n
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.onLoad = function() {
                        this.onInitConditions()
                    }
                        ,
                        r.start = function() {
                            this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this),
                                this.challengeButton.on(c.TOUCH_END, this.onChallengeBtn, this)
                        }
                        ,
                        r.refresh = function(t) {
                            this.params = t,
                                this.onUpdatePet(t),
                                this.onUpdateConditions(t),
                                this.onUpdatePetName(t)
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(p.CLOSE_CHALLENGE_VIEW)
                        }
                        ,
                        r.onChallengeBtn = function() {
                            this.onCloseBtn(),
                                this.notify(p.BATTLE_START, this.params)
                        }
                        ,
                        r.onInitConditions = function() {
                            for (var t = 0; t < this.conditions.length; t++) {
                                this.conditions[t].desc = g[t]
                            }
                        }
                        ,
                        r.onUpdateConditions = function(t) {
                            for (var n = t.star, e = t.pageIndex, i = t.nodeIndex, o = b().Storey[e].Node[i].Reward, r = 0; r < this.conditions.length; r++) {
                                var a = this.conditions[r];
                                a.star = parseInt(n) > r,
                                    a.tip = o[r]
                            }
                        }
                        ,
                        r.onUpdatePet = function(t) {
                            var n = t.spiritid;
                            this.petAnimation.data = {
                                id: n,
                                actionName: h.IDLE
                            }
                        }
                        ,
                        r.onUpdatePetName = function(t) {
                            var n = t.spiritid
                                , e = m.getSpiritName(n);
                            this.bossNameLabel.string = e
                        }
                        ,
                        n
                }(u)).prototype, "closeBtn", [C], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    A = n(v.prototype, "challengeButton", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = n(v.prototype, "bossNameLabel", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = n(v.prototype, "petAnimation", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = n(v.prototype, "conditions", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    S = v)) || S));
                r._RF.pop()
            }
        }
    }
));
