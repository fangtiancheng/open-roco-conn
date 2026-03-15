System.register("chunks:///_virtual/BraveTrainingUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./BraveTrainingMessage.ts", "./BraveTrainingChallengeUI.ts", "./ActivityAPI.ts", "./NetManager.ts", "./BraveTrainingConfig.ts", "./NetResult.ts", "./CFunction.ts", "./SpriteFrameSelector.ts"], (function(t) {
        var n, e, i, o, l, r, a, u, s, c, h, d, f, C, b, p, g, v, I, m;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    l = t.cclegacy,
                        r = t._decorator,
                        a = t.Node,
                        u = t.Label,
                        s = t.NodeEventType,
                        c = t.Sprite,
                        h = t.Button
                }
                , function(t) {
                    d = t.GameUI
                }
                , function(t) {
                    f = t.BraveTrainingMessage
                }
                , function(t) {
                    C = t.BraveTrainingChallengeUI
                }
                , function(t) {
                    b = t.ActivityAPI
                }
                , function(t) {
                    p = t.NetManager
                }
                , function(t) {
                    g = t.BraveTrainingConfig
                }
                , function(t) {
                    v = t.NetResult
                }
                , function(t) {
                    I = t.CFunction
                }
                , function(t) {
                    m = t.default
                }
            ],
            execute: function() {
                var _, R, D, S, U, y, N, B, L, G, M, k, w, T, E, A, x, O, z, F, H, Q, Y, K;
                l._RF.push({}, "abeb1XWSpRDBIyH7J4XsVtg", "BraveTrainingUI", void 0);
                var P = r.ccclass
                    , X = r.property;
                t("BraveTrainingUI", (_ = X(a),
                    R = X(a),
                    D = X(a),
                    S = X(a),
                    U = X(m),
                    y = X(m),
                    N = X(u),
                    B = X(a),
                    L = X(a),
                    G = X(a),
                    M = X(C),
                P((T = n((w = function(t) {
                    function n() {
                        for (var n, e = arguments.length, l = new Array(e), r = 0; r < e; r++)
                            l[r] = arguments[r];
                        return n = t.call.apply(t, [this].concat(l)) || this,
                            i(n, "btnClose", T, o(n)),
                            i(n, "btnRule", E, o(n)),
                            i(n, "btnLock", A, o(n)),
                            i(n, "door", x, o(n)),
                            i(n, "doorSF", O, o(n)),
                            i(n, "doorNameSF", z, o(n)),
                            i(n, "txtCount", F, o(n)),
                            i(n, "ruleUI", H, o(n)),
                            i(n, "btnRuleClose", Q, o(n)),
                            i(n, "btnRuleSure", Y, o(n)),
                            i(n, "challengeUI", K, o(n)),
                            n.m_curIndex = void 0,
                            n
                    }
                    e(n, t);
                    var l = n.prototype;
                    return l.onLoad = function() {
                        this.ruleUI.active = !1,
                            this.challengeUI.node.active = !1,
                            this.btnClose.on(s.TOUCH_END, this.onCloseBtn, this),
                            this.btnRule.on(s.TOUCH_END, this.onRuleBtn, this),
                            this.btnLock.on(s.TOUCH_END, this.onLockBtn, this),
                            this.btnRuleClose.on(s.TOUCH_END, this.onRuleCloseBtn, this),
                            this.btnRuleSure.on(s.TOUCH_END, this.onRuleCloseBtn, this);
                        for (var t = 0; t < this.door.length; t++)
                            this.door[t].on(s.TOUCH_END, this.onClickDoor.bind(this, t), this);
                        this.initShow(),
                            this.updateInfo()
                    }
                        ,
                        l.initShow = function() {
                            this.btnLock.active = !1
                        }
                        ,
                        l.onCloseBtn = function() {
                            this.notify(f.CLOSE_MAIN_VIEW)
                        }
                        ,
                        l.onRuleBtn = function() {
                            this.ruleUI.active = !0
                        }
                        ,
                        l.onLockBtn = function() {
                            g.info.open_num > 0 && p.tcpCGISend(g.CGI, g.CMD_UNLOCK, null, null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        l.onRuleCloseBtn = function() {
                            this.ruleUI.active = !1
                        }
                        ,
                        l.onClickDoor = function(t) {
                            1 != this.door[t].getComponent(c).grayscale && (this.m_curIndex = t,
                                4 == this.m_curIndex ? 1 == g.info.final_open ? p.tcpCGISend(g.CGI, g.CMD_QUERY, null, 2, null, this.onDataReceived.bind(this), !0, !0) : p.tcpCGISend(g.CGI, g.CMD_UNLOCK, null, null, null, this.onDataReceived.bind(this), !0, !0) : p.tcpCGISend(g.CGI, g.CMD_QUERY, null, 2, null, this.onDataReceived.bind(this), !0, !0))
                        }
                        ,
                        l.updateInfo = function() {
                            g.info ? this.updateRes() : this.query()
                        }
                        ,
                        l.updateRes = function() {
                            var t;
                            for (this.txtCount.string = "今日剩余解锁机会：" + g.info.open_num.toString(),
                                     t = 0; t < 5; t++) {
                                t < 4 && (this.door[t].getComponent(h).interactable = !1,
                                    this.door[t].getComponent(c).grayscale = !0);
                                var n = g.info.door_type[t];
                                this.doorSF[t].gotoAndStop(n),
                                    this.doorNameSF[t].gotoAndStop(n)
                            }
                            if (1 == g.info.door_state[4])
                                this.btnLock.active = !1,
                                    this.txtCount.string = "",
                                    this.door[4].active = !0,
                                    this.door[4].getComponent(h).interactable = !1,
                                    this.door[4].getComponent(c).grayscale = !0;
                            else
                                for (1 == g.info.final_open ? (this.txtCount.string = "",
                                    this.btnLock.active = !1,
                                    this.door[4].active = !0) : g.info.open_num > 0 ? this.changeLockState(!0) : this.changeLockState(!1),
                                         t = 0; t < 4; t++)
                                    0 == g.info.door_state[t] && (this.door[t].getComponent(h).interactable = !0,
                                        this.door[t].getComponent(c).grayscale = !1)
                        }
                        ,
                        l.changeLockState = function(t) {
                            this.door[4].active = !1,
                                this.btnLock.active = !0,
                                this.btnLock.getComponent(h).interactable = t,
                                this.btnLock.getComponent(c).grayscale = !t,
                                this.doorNameSF[4].node.active = !1
                        }
                        ,
                        l.onDataReceived = function(t, n, e) {
                            void 0 === e && (e = null);
                            var i = t;
                            if (new v(t).value >= 0 && this.node)
                                switch (n) {
                                    case g.CMD_QUERY:
                                        if (g.updateInfo(i),
                                        0 == g.info.before && p.tcpCGISend(g.CGI, g.CMD_TASK, null, null, null, this.onDataReceived.bind(this)),
                                            this.updateRes(),
                                        1 == e)
                                            if (1 == g.info.spirit_lv_flag) {
                                                var o = Number(g.info.xml.fight_place.place[this.m_curIndex].fight);
                                                this.challengeUI.node.active = !1,
                                                    b.startNpcCombat(o, g.DOOR_NAME[g.info.door_type[this.m_curIndex] - 1], new I(this.onNpcCombatCallBack.bind(this),this))
                                            } else
                                                b.showAlert("背包中的宠物等级需达60级哦。");
                                        else
                                            2 == e && (this.challengeUI.node.active = !0,
                                                this.challengeUI.updateInfo(this.m_curIndex));
                                        break;
                                    case g.CMD_COMBAT:
                                        p.tcpCGISend(g.CGI, g.CMD_QUERY, null, null, null, this.onDataReceived.bind(this)),
                                            b.showCgiXmlRewardList(i);
                                        break;
                                    case g.CMD_UNLOCK:
                                        1 == Number(i.succ[0]) ? (this.door[4].active = !0,
                                            this.btnLock.active = !1,
                                            this.doorNameSF[4].node.active = !0,
                                            p.tcpCGISend(g.CGI, g.CMD_QUERY, null, null, null, this.onDataReceived.bind(this))) : (p.tcpCGISend(g.CGI, g.CMD_QUERY, null, null, null, this.onDataReceived.bind(this)),
                                            b.showAlert("解锁失败！继续努力吧！"));
                                        break;
                                    case g.CMD_TASK:
                                        g.info.before = 1,
                                            this.updateRes(),
                                            b.showCgiXmlRewardList(i)
                                }
                        }
                        ,
                        l.query = function() {
                            p.tcpCGISend(g.CGI, g.CMD_QUERY, null, null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        l.sendCombat = function(t) {
                            p.tcpCGISend(g.CGI, g.CMD_QUERY, null, 1, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        l.onNpcCombatCallBack = function(t) {
                            if (2 == t) {
                                var n = g.info.door_type[this.m_curIndex];
                                p.tcpCGISend(g.CGI, g.CMD_COMBAT, "&id=" + n, null, null, this.onDataReceived.bind(this), !0, !0)
                            }
                        }
                        ,
                        n
                }(d)).prototype, "btnClose", [_], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    E = n(w.prototype, "btnRule", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = n(w.prototype, "btnLock", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = n(w.prototype, "door", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    O = n(w.prototype, "doorSF", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    z = n(w.prototype, "doorNameSF", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    F = n(w.prototype, "txtCount", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = n(w.prototype, "ruleUI", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Q = n(w.prototype, "btnRuleClose", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = n(w.prototype, "btnRuleSure", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    K = n(w.prototype, "challengeUI", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = w)) || k));
                l._RF.pop()
            }
        }
    }
));
