System.register("chunks:///_virtual/BraveTrainingChallengeUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SpriteFrameSelector.ts", "./BraveTrainingMessage.ts", "./BraveTrainingConfig.ts", "./ActivityAPI.ts", "./CombatImage.ts", "./AImage.ts", "./CommonAPI.ts"], (function(i) {
        var e, t, n, o, r, a, l, s, p, c, u, h, f, T, g, b, d, v;
        return {
            setters: [function(i) {
                e = i.applyDecoratedDescriptor,
                    t = i.inheritsLoose,
                    n = i.initializerDefineProperty,
                    o = i.assertThisInitialized
            }
                , function(i) {
                    r = i.cclegacy,
                        a = i._decorator,
                        l = i.Node,
                        s = i.Label,
                        p = i.NodeEventType,
                        c = i.sys
                }
                , function(i) {
                    u = i.GameSubUI
                }
                , function(i) {
                    h = i.default
                }
                , function(i) {
                    f = i.BraveTrainingMessage
                }
                , function(i) {
                    T = i.BraveTrainingConfig
                }
                , function(i) {
                    g = i.ActivityAPI
                }
                , function(i) {
                    b = i.CombatImage
                }
                , function(i) {
                    d = i.AImage
                }
                , function(i) {
                    v = i.CommonAPI
                }
            ],
            execute: function() {
                var m, I, C, y, E, x, S, w, N, A, _, z, U, B, L, O, H, R, k, D, M, P, F, G, V, W, j, J, Q, q, K, X;
                r._RF.push({}, "9dd47GpWc1LH5DAEaJE1SQr", "BraveTrainingChallengeUI", void 0);
                var Y = a.ccclass
                    , Z = a.property;
                i("BraveTrainingChallengeUI", (m = Z(l),
                    I = Z(l),
                    C = Z(h),
                    y = Z(h),
                    E = Z(l),
                    x = Z(l),
                    S = Z(l),
                    w = Z(l),
                    N = Z(l),
                    A = Z(l),
                    _ = Z(l),
                    z = Z(l),
                    U = Z(l),
                    B = Z(s),
                    L = Z(s),
                Y((R = e((H = function(i) {
                    function e() {
                        for (var e, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                            r[a] = arguments[a];
                        return e = i.call.apply(i, [this].concat(r)) || this,
                            n(e, "btnClose", R, o(e)),
                            n(e, "btnChallenge", k, o(e)),
                            n(e, "starIcon", D, o(e)),
                            n(e, "title", M, o(e)),
                            n(e, "rewardIcon1", P, o(e)),
                            n(e, "rewardIcon2", F, o(e)),
                            n(e, "vipTips", G, o(e)),
                            n(e, "expTips", V, o(e)),
                            n(e, "expNode", W, o(e)),
                            n(e, "vipNode", j, o(e)),
                            n(e, "vipState", J, o(e)),
                            n(e, "headIcon", Q, o(e)),
                            n(e, "skillIcon", q, o(e)),
                            n(e, "titleLabel", K, o(e)),
                            n(e, "expTooltip", X, o(e)),
                            e.allImage = [],
                            e.spImage = [],
                            e.skillImage = [],
                            e.doorType = void 0,
                            e
                    }
                    t(e, i);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.vipTips.active = !1,
                            this.expTips.active = !1,
                            this.btnClose.on(p.TOUCH_END, this.onCloseBtn, this),
                            this.btnChallenge.on(p.TOUCH_END, this.onChallengeBtn, this),
                            c.platform === c.Platform.MOBILE_BROWSER ? (this.vipNode.on(p.TOUCH_START, this.onTouchTipsStart, this, !0),
                                this.vipNode.on(p.TOUCH_CANCEL, this.onTouchTipsCancel, this, !0),
                                this.expNode.on(p.TOUCH_START, this.onTouchExpTipsStart, this, !0),
                                this.expNode.on(p.TOUCH_CANCEL, this.onTouchExpTipsCancel, this, !0)) : (this.vipNode.on(p.MOUSE_ENTER, this.onTouchTipsStart, this),
                                this.vipNode.on(p.MOUSE_LEAVE, this.onTouchTipsCancel, this),
                                this.expNode.on(p.MOUSE_ENTER, this.onTouchExpTipsStart, this),
                                this.expNode.on(p.MOUSE_LEAVE, this.onTouchExpTipsCancel, this)),
                            this.vipNode.on(p.TOUCH_END, this.onCheked, this)
                    }
                        ,
                        r.onCloseBtn = function() {
                            this.node.active = !1
                        }
                        ,
                        r.onTouchTipsStart = function() {
                            this.vipTips.active = !0
                        }
                        ,
                        r.onTouchTipsCancel = function() {
                            this.vipTips.active = !1
                        }
                        ,
                        r.onTouchExpTipsStart = function() {
                            "" != this.expTooltip.string && (this.expTips.active = !0)
                        }
                        ,
                        r.onTouchExpTipsCancel = function() {
                            this.expTips.active = !1
                        }
                        ,
                        r.onCheked = function() {
                            0 == T.info.xml.vip && g.showVipConfirm()
                        }
                        ,
                        r.updateInfo = function(i) {
                            if (this.expTooltip.string = "",
                                this.doorType = T.info.door_type[i],
                                this.starIcon.gotoAndStop(this.doorType),
                                this.title.gotoAndStop(this.doorType),
                                this.titleLabel.string = this.doorType >= 6 ? "终极训练馆" : "普通训练馆",
                                this.doorType >= 6 ? (this.rewardIcon2.active = !0,
                                    this.rewardIcon1.active = !1) : (this.rewardIcon2.active = !1,
                                    this.rewardIcon1.active = !0,
                                    this.expTooltip.string = "钥匙：激活终极训练馆机会"),
                                T.info.xml) {
                                this.doorType >= 6 && (this.expTooltip.string = "奖励:开心豆*5、果儿糖*10、经验*50000"),
                                    this.clearImage();
                                for (var e = 0; e < 3; e++) {
                                    var t = Number(T.info.xml.fight_place.place[i].npc_list.npc[e])
                                        , n = Number(g.getSpiriteDes(t).features[0].id)
                                        , o = new b(28,28);
                                    o.setSkillIcon(n),
                                        this.skillIcon[e].addChild(o),
                                        this.allImage.push(o);
                                    var r = void 0;
                                    null == this.spImage[e] ? (r = new d(142,142),
                                        this.headIcon[e].addChild(r)) : r = this.spImage[e],
                                        r.setPath(v.getSpiritSrc(t))
                                }
                                this.vipState.active = 0 != T.info.xml.vip
                            }
                        }
                        ,
                        r.clearImage = function() {
                            for (var i = 0; i < this.allImage.length; i++)
                                this.allImage[i].dispose();
                            this.allImage = []
                        }
                        ,
                        r.onChallengeBtn = function() {
                            this.notify(f.BATTLE_START)
                        }
                        ,
                        e
                }(u)).prototype, "btnClose", [m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    k = e(H.prototype, "btnChallenge", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = e(H.prototype, "starIcon", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = e(H.prototype, "title", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = e(H.prototype, "rewardIcon1", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = e(H.prototype, "rewardIcon2", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = e(H.prototype, "vipTips", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = e(H.prototype, "expTips", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = e(H.prototype, "expNode", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = e(H.prototype, "vipNode", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = e(H.prototype, "vipState", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Q = e(H.prototype, "headIcon", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    q = e(H.prototype, "skillIcon", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    K = e(H.prototype, "titleLabel", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    X = e(H.prototype, "expTooltip", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = H)) || O));
                r._RF.pop()
            }
        }
    }
));
