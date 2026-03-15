System.register("chunks:///_virtual/SevenHolyLandChallengeUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SpriteFrameSelector.ts", "./ActivityAPI.ts", "./SevenHolyLandConfig.ts", "./SevenHolyLandMessage.ts"], (function(t) {
        var i, e, n, a, r, o, l, s, u, c, h, p, b, d, f, m, v, y;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    a = t.assertThisInitialized,
                    r = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        l = t._decorator,
                        s = t.Button,
                        u = t.Node,
                        c = t.Label,
                        h = t.NodeEventType,
                        p = t.sys,
                        b = t.Sprite
                }
                , function(t) {
                    d = t.GameSubUI
                }
                , function(t) {
                    f = t.default
                }
                , function(t) {
                    m = t.ActivityAPI
                }
                , function(t) {
                    v = t.SevenHolyLandConfig
                }
                , function(t) {
                    y = t.SevenHolyLandMessage
                }
            ],
            execute: function() {
                var C, g, _, S, w, T, I, N, D, z, E, k, L, V, H, A, U, P, x, B, O, R, M, G, F, j, W, Z, q, J, K, Q, X, Y, $, tt, it, et, nt;
                o._RF.push({}, "aa5dcBLbodLBIiRRzk3MZS5", "SevenHolyLandChallengeUI", void 0);
                var at = l.ccclass
                    , rt = l.property;
                t("SevenHolyLandChallengeUI", (C = at("SevenHolyLandChallengeUI"),
                    g = rt(s),
                    _ = rt(f),
                    S = rt(u),
                    w = rt(c),
                    T = rt(u),
                    I = rt(f),
                    N = rt(f),
                    D = rt(f),
                    z = rt(f),
                    E = rt(c),
                    k = rt(c),
                    L = rt(c),
                    V = rt(u),
                    H = rt(u),
                    A = rt(u),
                    U = rt(u),
                    P = rt(u),
                    x = rt(u),
                C((R = i((O = function(t) {
                    function i() {
                        for (var i, e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                            r[o] = arguments[o];
                        return i = t.call.apply(t, [this].concat(r)) || this,
                            n(i, "combatState", R, a(i)),
                            n(i, "dayname", M, a(i)),
                            n(i, "active", G, a(i)),
                            n(i, "txtCount", F, a(i)),
                            n(i, "dayBouns", j, a(i)),
                            n(i, "daygift", W, a(i)),
                            n(i, "reward_0", Z, a(i)),
                            n(i, "reward_1", q, a(i)),
                            n(i, "reward_2", J, a(i)),
                            n(i, "rewardCount_0", K, a(i)),
                            n(i, "rewardCount_1", Q, a(i)),
                            n(i, "rewardCount_2", X, a(i)),
                            n(i, "mcNotVipNotice", Y, a(i)),
                            n(i, "btnVipClose", $, a(i)),
                            n(i, "btnVipPay", tt, a(i)),
                            n(i, "vipTips", it, a(i)),
                            n(i, "vipNode", et, a(i)),
                            n(i, "checkmark", nt, a(i)),
                            i.starID = void 0,
                            i.m_xml = void 0,
                            i
                    }
                    e(i, t);
                    var o = i.prototype;
                    return o.onLoad = function() {
                        this.addEvents(),
                            this.initShow()
                    }
                        ,
                        o.initShow = function() {
                            this.isChecked = !1,
                                this.mcNotVipNotice.active = !1,
                                this.vipTips.active = !1
                        }
                        ,
                        o.addEvents = function() {
                            this.vipNode.on(h.TOUCH_END, this.onCheked, this),
                                this.btnVipClose.on(h.TOUCH_END, this.onVipClose, this),
                                this.btnVipPay.on(h.TOUCH_END, this.onVipPay, this);
                            for (var t = 0; t < this.combatState.length; t++)
                                this.combatState[t].node.on(h.TOUCH_END, this.onCombat.bind(this, t), this);
                            p.platform === p.Platform.MOBILE_BROWSER ? (this.vipNode.on(h.TOUCH_START, this.onTouchTipsStart, this, !0),
                                this.vipNode.on(h.TOUCH_CANCEL, this.onTouchTipsCancel, this, !0)) : (this.vipNode.on(h.MOUSE_ENTER, this.onTouchTipsStart, this),
                                this.vipNode.on(h.MOUSE_LEAVE, this.onTouchTipsCancel, this))
                        }
                        ,
                        o.onTouchTipsStart = function() {
                            this.vipTips.active = !0
                        }
                        ,
                        o.onTouchTipsCancel = function() {
                            this.vipTips.active = !1
                        }
                        ,
                        o.onVipClose = function() {
                            this.mcNotVipNotice.active = !1
                        }
                        ,
                        o.onVipPay = function() {
                            m.navigateToVipPay()
                        }
                        ,
                        o.onCheked = function() {
                            0 != this.m_xml.vip ? this.notify(y.SEND_VIP_CHANGE, this.isChecked ? 1 : 2) : m.showVipConfirm()
                        }
                        ,
                        o.onCombat = function(t) {
                            if (0 != this.combatState[t].interactable) {
                                var i = {
                                    param: t,
                                    vipState: this.isChecked ? 2 : 1
                                };
                                this.notify(y.SEND_CHALLENGE_COMBAT, i)
                            }
                        }
                        ,
                        o.updateInfo = function(t, i, e, n) {
                            this.starID = t,
                                this.m_xml = n;
                            for (var a = 0; a < 3; a++)
                                i < 3 ? (this.combatState[a].interactable = !0,
                                    this.combatState[a].getComponent(b).grayscale = !1) : (this.combatState[a].interactable = !1,
                                    this.combatState[a].getComponent(b).grayscale = !0);
                            e == this.starID + 1 || 0 == e && 6 == this.starID ? this.dayBouns.active = !0 : this.dayBouns.active = !1,
                                this.daygift.gotoAndStop(this.starID + 1),
                                this.dayname.gotoAndStop(this.starID + 1),
                                this.txtCount.string = 3 - i + "/3",
                                this.reward_0.gotoAndStop(this.starID + 1),
                                this.reward_1.gotoAndStop(this.starID + 1),
                                this.reward_2.gotoAndStop(this.starID + 1),
                                this.rewardCount_0.string = v.StarReward_0[this.starID],
                                this.rewardCount_1.string = v.StarReward_1[this.starID],
                                this.rewardCount_2.string = v.StarReward_2[this.starID];
                            var r = 0 == this.m_xml.vip || 0 == this.m_xml.pass ? 1 : 2;
                            this.isChecked = 2 == r,
                                0 == this.m_xml.battle[this.starID] ? this.active.active = !1 : 1 == this.m_xml.battle[this.starID] && (this.active.active = !0),
                            6 == this.starID && (this.active.active = !1)
                        }
                        ,
                        o.changeVipState = function(t) {
                            this.isChecked = 2 == t
                        }
                        ,
                        r(i, [{
                            key: "isChecked",
                            get: function() {
                                return this.checkmark.active
                            },
                            set: function(t) {
                                this.checkmark.active = t
                            }
                        }]),
                        i
                }(d)).prototype, "combatState", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    M = i(O.prototype, "dayname", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = i(O.prototype, "active", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = i(O.prototype, "txtCount", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = i(O.prototype, "dayBouns", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = i(O.prototype, "daygift", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Z = i(O.prototype, "reward_0", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = i(O.prototype, "reward_1", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = i(O.prototype, "reward_2", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    K = i(O.prototype, "rewardCount_0", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Q = i(O.prototype, "rewardCount_1", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    X = i(O.prototype, "rewardCount_2", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = i(O.prototype, "mcNotVipNotice", [V], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = i(O.prototype, "btnVipClose", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    tt = i(O.prototype, "btnVipPay", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    it = i(O.prototype, "vipTips", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    et = i(O.prototype, "vipNode", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    nt = i(O.prototype, "checkmark", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = O)) || B));
                o._RF.pop()
            }
        }
    }
));
