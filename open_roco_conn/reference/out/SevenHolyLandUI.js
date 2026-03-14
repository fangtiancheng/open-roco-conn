System.register("chunks:///_virtual/SevenHolyLandUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SevenHolyLandMessage.ts", "./SpriteFrameSelector.ts", "./NetManager.ts", "./SevenHolyLandConfig.ts", "./NetResult.ts", "./ActivityAPI.ts", "./SevenHolyLandChallengeUI.ts", "./CFunction.ts"], (function(t) {
        var e, n, i, a, r, o, s, l, u, h, c, b, p, f, d, g, C, S, y, m;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    a = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        o = t._decorator,
                        s = t.Node,
                        l = t.Button,
                        u = t.Sprite,
                        h = t.NodeEventType,
                        c = t.sys
                }
                , function(t) {
                    b = t.GameUI
                }
                , function(t) {
                    p = t.SevenHolyLandMessage
                }
                , function(t) {
                    f = t.default
                }
                , function(t) {
                    d = t.NetManager
                }
                , function(t) {
                    g = t.SevenHolyLandConfig
                }
                , function(t) {
                    C = t.NetResult
                }
                , function(t) {
                    S = t.ActivityAPI
                }
                , function(t) {
                    y = t.SevenHolyLandChallengeUI
                }
                , function(t) {
                    m = t.CFunction
                }
            ],
            execute: function() {
                var v, I, U, T, w, _, D, R, N, P, E, L, G, H, M, O, z, F, A, x, B, k, V, Y, Q, W, X, j, J, q, K, Z, $, tt, et;
                r._RF.push({}, "fda41ivh4dJY4a+Fgm+/X7E", "SevenHolyLandUI", void 0);
                var nt = o.ccclass
                    , it = o.property;
                t("SevenHolyLandUI", (v = nt("SevenHolyLandUI"),
                    I = it(s),
                    U = it(s),
                    T = it(s),
                    w = it(l),
                    _ = it(l),
                    D = it(s),
                    R = it(s),
                    N = it(s),
                    P = it(s),
                    E = it(u),
                    L = it(f),
                    G = it(s),
                    H = it(f),
                    M = it(y),
                    O = it(s),
                    z = it(s),
                v((x = e((A = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                            r[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            i(e, "pageList", x, a(e)),
                            i(e, "btnClose", B, a(e)),
                            i(e, "btnRule", k, a(e)),
                            i(e, "btnPre", V, a(e)),
                            i(e, "btnNext", Y, a(e)),
                            i(e, "ruleUI", Q, a(e)),
                            i(e, "btnRuleClose", W, a(e)),
                            i(e, "btnRuleSure", X, a(e)),
                            i(e, "btnStar", j, a(e)),
                            i(e, "btnStarGray", J, a(e)),
                            i(e, "starFrame", q, a(e)),
                            i(e, "arrow", K, a(e)),
                            i(e, "starName", Z, a(e)),
                            i(e, "starUI", $, a(e)),
                            i(e, "btnStarClose", tt, a(e)),
                            i(e, "noOpenTips", et, a(e)),
                            e.m_xml = void 0,
                            e.dayfinish = void 0,
                            e.starbless = void 0,
                            e.daytime = void 0,
                            e.curPage = 1,
                            e.totalPage = 2,
                            e.starID = 0,
                            e.m_level = void 0,
                            e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.addEvents(),
                            this.initShow()
                    }
                        ,
                        r.initShow = function() {
                            this.setPageShow(this.curPage),
                                this.updateInfo(),
                                this.ruleUI.active = !1,
                                this.starUI.node.active = !1,
                                this.noOpenTips.active = !1
                        }
                        ,
                        r.addEvents = function() {
                            this.btnClose.on(h.TOUCH_END, this.onClose, this),
                                this.btnRule.on(h.TOUCH_END, this.onRuleShow, this),
                                this.btnPre.node.on(h.TOUCH_END, this.onPre, this),
                                this.btnNext.node.on(h.TOUCH_END, this.onNext, this),
                                this.btnRuleClose.on(h.TOUCH_END, this.onRuleClose, this),
                                this.btnRuleSure.on(h.TOUCH_END, this.onRuleClose, this),
                                this.btnStarClose.on(h.TOUCH_END, this.onStarClose, this);
                            for (var t = 0; t < this.btnStar.length; t++)
                                this.btnStar[t].on(h.TOUCH_END, this.onStart.bind(this, t), this);
                            c.platform === c.Platform.MOBILE_BROWSER ? (this.btnStar[6].on(h.TOUCH_START, this.onTouchTipsStart, this, !0),
                                this.btnStar[6].on(h.TOUCH_CANCEL, this.onTouchTipsCancel, this, !0)) : (this.btnStar[6].on(h.MOUSE_ENTER, this.onTouchTipsStart, this),
                                this.btnStar[6].on(h.MOUSE_LEAVE, this.onTouchTipsCancel, this))
                        }
                        ,
                        r.onTouchTipsStart = function() {
                            1 == this.btnStarGray[6].grayscale && (this.noOpenTips.active = !0)
                        }
                        ,
                        r.onTouchTipsCancel = function() {
                            this.noOpenTips.active = !1
                        }
                        ,
                        r.onClose = function() {
                            this.notify(p.CLOSE_MAIN_VIEW)
                        }
                        ,
                        r.onStarClose = function() {
                            this.starUI.node.active = !1
                        }
                        ,
                        r.onRuleShow = function() {
                            this.ruleUI.active = !0
                        }
                        ,
                        r.onRuleClose = function() {
                            this.ruleUI.active = !1
                        }
                        ,
                        r.onPre = function() {
                            1 != this.curPage && (this.curPage--,
                                this.setPageShow(this.curPage))
                        }
                        ,
                        r.onNext = function() {
                            this.curPage != this.totalPage && (this.curPage++,
                                this.setPageShow(this.curPage))
                        }
                        ,
                        r.setPageShow = function(t) {
                            for (var e = 0; e < this.pageList.length; e++)
                                this.pageList[e].active = !1;
                            this.pageList[t - 1].active = !0,
                                this.btnPre.node.active = 1 != this.curPage,
                                this.btnNext.node.active = this.curPage != this.totalPage
                        }
                        ,
                        r.updateInfo = function() {
                            d.tcpCGISend(g.CGI, g.CMD_QUERY, null, null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        r.UpdaaUI = function(t) {
                            if (this.node && this.node.active) {
                                for (var e = 0, n = 0; n < 6; n++)
                                    0 != parseInt(t.battle[n]) && e++,
                                        this.btnStar[n].getComponent(l).interactable = !0,
                                        this.btnStarGray[n].grayscale = !1;
                                if (0 == this.daytime && e >= 6 ? (this.btnStar[6].getComponent(l).interactable = !0,
                                    this.btnStarGray[6].grayscale = !1,
                                    this.starFrame[6].getComponent(u).grayscale = !1) : (this.btnStar[6].getComponent(l).interactable = !1,
                                    this.btnStarGray[6].grayscale = !0,
                                    this.starFrame[6].getComponent(u).grayscale = !0),
                                0 == parseInt(t.daytime))
                                    this.arrow.angle = g.StarAngle[6],
                                        this.starName.gotoAndStop(7);
                                else {
                                    var i = parseInt(t.daytime);
                                    this.arrow.angle = g.StarAngle[i - 1],
                                        this.starName.gotoAndStop(i)
                                }
                            }
                        }
                        ,
                        r.onDataReceived = function(t, e, n) {
                            var i = t;
                            if (new C(t).value >= 0 && this && this.node)
                                switch (e) {
                                    case g.CMD_QUERY:
                                        this.dayfinish = parseInt(i.dayfinish),
                                            this.starbless = parseInt(i.starbless),
                                            this.daytime = parseInt(i.daytime),
                                            this.m_xml = i,
                                            this.UpdaaUI(i);
                                        break;
                                    case g.CMD_VIP:
                                        this.starUI.changeVipState(0 == i.pass ? 1 : 2);
                                        break;
                                    case g.CMD_SUBMIT:
                                        this.starUI.node.active = !1,
                                            S.startNpcCombat(g.FightArry[this.starID][this.m_level], g.FrightName[this.starID], new m(this.onNpcCombatCallBack,this));
                                        break;
                                    case g.CMD_GETGIFT:
                                        S.showCgiXmlRewardList(i),
                                            d.tcpCGISend(g.CGI, g.CMD_QUERY, null, null, null, this.onDataReceived.bind(this), !0, !0)
                                }
                        }
                        ,
                        r.onStart = function(t) {
                            1 != this.starFrame[t].getComponent(u).grayscale && (this.starID = t,
                                this.initLevel(),
                                this.starUI.node.active = !0)
                        }
                        ,
                        r.initLevel = function() {
                            this.starUI.updateInfo(this.starID, this.dayfinish, this.daytime, this.m_xml)
                        }
                        ,
                        r.onNpcCombatCallBack = function(t) {
                            2 == t && d.tcpCGISend(g.CGI, g.CMD_GETGIFT, null, null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        r.sendVipChange = function(t) {
                            d.tcpCGISend(g.CGI, g.CMD_VIP, "&pass=" + t, null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        r.sendCombat = function(t) {
                            this.m_level = t.param,
                                d.tcpCGISend(g.CGI, g.CMD_SUBMIT, "&index=" + this.starID + "&type=" + t.param + "&pass=" + t.vipState, null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        e
                }(b)).prototype, "pageList", [I], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    B = e(A.prototype, "btnClose", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = e(A.prototype, "btnRule", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = e(A.prototype, "btnPre", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = e(A.prototype, "btnNext", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Q = e(A.prototype, "ruleUI", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = e(A.prototype, "btnRuleClose", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    X = e(A.prototype, "btnRuleSure", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = e(A.prototype, "btnStar", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    J = e(A.prototype, "btnStarGray", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    q = e(A.prototype, "starFrame", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    K = e(A.prototype, "arrow", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Z = e(A.prototype, "starName", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = e(A.prototype, "starUI", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    tt = e(A.prototype, "btnStarClose", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    et = e(A.prototype, "noOpenTips", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = A)) || F));
                r._RF.pop()
            }
        }
    }
));
