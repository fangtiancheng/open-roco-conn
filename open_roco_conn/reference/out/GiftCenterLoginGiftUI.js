System.register("chunks:///_virtual/GiftCenterLoginGiftUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./ActivityAPI.ts", "./GiftCenterLoginConfig.ts", "./GiftCenterMessage.ts", "./QueryInfoReq.ts", "./NetManager.ts", "./QueryInfoRsp.ts", "./GiftCenterCommonTips.ts", "./NetResult.ts", "./NotificationCenter.ts", "./NotifyDef.ts", "./CFunction.ts"], (function(t) {
        var i, e, n, o, a, s, r, l, c, u, h, f, p, b, C, d, y, g, T, G, I, m, _, v;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        s = t._decorator,
                        r = t.Node,
                        l = t.Button,
                        c = t.RichText,
                        u = t.Label,
                        h = t.NodeEventType,
                        f = t.sys
                }
                , function(t) {
                    p = t.GameSubUI
                }
                , function(t) {
                    b = t.ActivityAPI
                }
                , function(t) {
                    C = t.GiftCenterLoginConfig
                }
                , function(t) {
                    d = t.GiftCenterMessage
                }
                , function(t) {
                    y = t.QueryInfoReq
                }
                , function(t) {
                    g = t.NetManager
                }
                , function(t) {
                    T = t.QueryInfoRsp
                }
                , function(t) {
                    G = t.GiftCenterCommonTips
                }
                , function(t) {
                    I = t.NetResult
                }
                , function(t) {
                    m = t.NotificationCenter
                }
                , function(t) {
                    _ = t.NotifyDef
                }
                , function(t) {
                    v = t.CFunction
                }
            ],
            execute: function() {
                var R, E, w, N, D, S, F, L, O, U, M, A, z, x, B, W, H, k, P, V, Q, X, q, Y, j, K, J, Z, $, tt, it, et, nt, ot, at, st;
                a._RF.push({}, "253d5MNvXNEYK+sMflVNb7N", "GiftCenterLoginGiftUI", void 0);
                var rt = s.ccclass
                    , lt = s.property;
                t("GiftCenterLoginGiftUI", (R = lt(r),
                    E = lt(r),
                    w = lt(l),
                    N = lt(l),
                    D = lt(l),
                    S = lt(r),
                    F = lt(G),
                    L = lt(r),
                    O = lt(r),
                    U = lt(r),
                    M = lt(r),
                    A = lt(r),
                    z = lt(c),
                    x = lt(u),
                    B = lt(r),
                    W = lt(r),
                    H = lt(r),
                rt((V = i((P = function(t) {
                    function i() {
                        for (var i, e = arguments.length, a = new Array(e), s = 0; s < e; s++)
                            a[s] = arguments[s];
                        return i = t.call.apply(t, [this].concat(a)) || this,
                            n(i, "closeBtn", V, o(i)),
                            n(i, "btnCloseReward", Q, o(i)),
                            n(i, "btnGiftWeek", X, o(i)),
                            n(i, "btnDailyGet", q, o(i)),
                            n(i, "btnGets", Y, o(i)),
                            n(i, "icons", j, o(i)),
                            n(i, "iconTips", K, o(i)),
                            n(i, "getsFlage", J, o(i)),
                            n(i, "holidayTips", Z, o(i)),
                            n(i, "mcFlag", $, o(i)),
                            n(i, "mcDaiyFlag", tt, o(i)),
                            n(i, "btnDailyGray", it, o(i)),
                            n(i, "txtNext", et, o(i)),
                            n(i, "txtLast", nt, o(i)),
                            n(i, "ctlReward", ot, o(i)),
                            n(i, "tips", at, o(i)),
                            n(i, "btnSign", st, o(i)),
                            i.MAX_COUNT = 3,
                            i.TOTAL_MAX_COUNT = 4,
                            i.m_queryInfo = void 0,
                            i.m_vipRewardFlag = 2,
                            i
                    }
                    e(i, t);
                    var a = i.prototype;
                    return a.onLoad = function() {
                        this.onInit(),
                            this.addEvents(),
                        0 == C.CURR_ENTER_MODEL && (this.updateInfo(),
                            this.node.active = !1)
                    }
                        ,
                        a.onInit = function() {
                            this.ctlReward.active = !1,
                                this.mcFlag.active = !1,
                                this.txtLast.string = "",
                                this.tips.active = !1,
                                this.updateDailyState(1),
                                this.holidayTips.active = !1,
                                this.updateTotalState(1)
                        }
                        ,
                        a.addEvents = function() {
                            this.closeBtn.on(h.TOUCH_END, this.onCloseBtn, this),
                                this.btnGiftWeek.node.on(h.TOUCH_END, this.onGiftWeek, this),
                                this.btnDailyGet.node.on(h.TOUCH_END, this.onDaiyGet, this),
                                this.btnCloseReward.on(h.TOUCH_END, this.onCloseReward, this);
                            for (var t = 0; t < this.MAX_COUNT; t++)
                                this.btnGets[t].node.on(h.TOUCH_END, this.onGets.bind(this, t), this);
                            for (t = 0; t < this.TOTAL_MAX_COUNT; t++)
                                f.platform === f.Platform.MOBILE_BROWSER ? (this.icons[t].on(h.TOUCH_START, this.onTouchStart.bind(this, t), this, !0),
                                    this.icons[t].on(h.TOUCH_CANCEL, this.onTouchCancel.bind(this, t), this, !0)) : (this.icons[t].on(h.MOUSE_ENTER, this.onTouchStart.bind(this, t), this),
                                    this.icons[t].on(h.MOUSE_LEAVE, this.onTouchCancel.bind(this, t), this));
                            f.platform === f.Platform.MOBILE_BROWSER ? (this.btnSign.on(h.TOUCH_START, this.onTouchTipsStart, this, !0),
                                this.btnSign.on(h.TOUCH_CANCEL, this.onTouchTipsCancel, this, !0)) : (this.btnSign.on(h.MOUSE_ENTER, this.onTouchTipsStart, this),
                                this.btnSign.on(h.MOUSE_LEAVE, this.onTouchTipsCancel, this))
                        }
                        ,
                        a.onTouchTipsStart = function() {
                            this.tips.active = !0
                        }
                        ,
                        a.onTouchTipsCancel = function() {
                            this.tips.active = !1
                        }
                        ,
                        a.onTouchStart = function(t) {
                            this.iconTips[t].node.active = !0
                        }
                        ,
                        a.onTouchCancel = function(t) {
                            this.iconTips[t].node.active = !1
                        }
                        ,
                        a.onCloseBtn = function() {
                            this.notify(d.CLOSE_MAIN_VIEW),
                                this.notify(d.CLOSE_LOGIN_GIFT_VIEW)
                        }
                        ,
                        a.onCloseReward = function() {
                            this.ctlReward.active = !1
                        }
                        ,
                        a.onGiftWeek = function() {
                            this.ctlReward.active = !0
                        }
                        ,
                        a.onDaiyGet = function() {
                            g.tcpCGISend(C.CGI, C.CMD_GETGIFT, "&day=1", null, null, this.onTcpCGIResult.bind(this), !0, !0)
                        }
                        ,
                        a.onGets = function(t) {
                            g.tcpCGISend(C.CGI, C.CMD_GETGIFT, "&index=" + t + "&type=1&day=0", null, null, this.onTcpCGIResult.bind(this), !0, !0)
                        }
                        ,
                        a.updateDailyState = function(t) {
                            this.btnDailyGet.node.active = 1 == t,
                                this.mcDaiyFlag.active = 3 == t,
                                this.btnDailyGray.active = 2 == t || 3 == t
                        }
                        ,
                        a.updateTotalState = function(t) {
                            for (var i = 0; i < this.MAX_COUNT; i++)
                                this.btnGets[i].node.active = 1 == t,
                                    this.getsFlage[i].active = 2 == t
                        }
                        ,
                        a.updateInfo = function() {
                            this.onInit();
                            var t = new y;
                            2 == b.platformValue ? t.type = 1 : t.type = 0,
                                g.tcpCGISend(C.CGI, C.CMD_QUERY, t, null, T, this.onTcpCGIResult.bind(this), !0, !0)
                        }
                        ,
                        a.onTcpCGIResult = function(t, i, e) {
                            var n = this
                                , o = new I(t)
                                , a = t;
                            if (i == C.CMD_QUERY && o.value < 0)
                                this.notify(d.CLOSE_LOGIN_GIFT_VIEW);
                            else if (o.value >= 0)
                                switch (i) {
                                    case C.CMD_QUERY:
                                        var s = t
                                            , r = !1;
                                        this.m_queryInfo = s,
                                            this.txtLast.string = s.newLoginDay.toString();
                                        var l = "<outline color=#FFFFFF width=2><color=#3333CC>距离下期重置还有</color><color=#FF6600>" + s.nextDay + "</color><color=#3333CC>天</color></outline>";
                                        this.txtNext.string = l,
                                            this.updatePage();
                                        for (var c = 0; c < s.dayInfos.length; c++) {
                                            var u = s.dayInfos[c];
                                            1 != Number(u.state) && (r = !0);
                                            var h = u.items ? u.items.length : 0;
                                            l = "";
                                            for (var f = 0; f < h; f++)
                                                l += b.getAnyItemName(u.items[f].type, u.items[f].id) + "x" + u.items[f].count + "\n";
                                            this.iconTips[0].setTips(l, h)
                                        }
                                        if (!r && 0 == C.CURR_ENTER_MODEL)
                                            return void this.notify(d.CLOSE_LOGIN_GIFT_VIEW);
                                        0 == C.CURR_ENTER_MODEL && (this.node.active = !0);
                                        for (var p = 0; p < s.newInfos.length; p++) {
                                            var G = s.newInfos[p]
                                                , R = this.iconTips[p + 1];
                                            if (R) {
                                                l = "第" + [7, 14, 21][p] + "天：\n";
                                                for (f = 0; f < G.items.length; f++)
                                                    l += b.getAnyItemName(G.items[f].type, G.items[f].id) + "x" + G.items[f].count + "\n";
                                                R.setTips(l, G.items.length + 1),
                                                    1 == Number(G.state) ? (this.btnGets[p].node.active = !1,
                                                        this.getsFlage[p].active = !0) : s.newLoginDay >= G.day ? (this.btnGets[p].node.active = !0,
                                                        this.getsFlage[p].active = !1) : (this.btnGets[p].node.active = !1,
                                                        this.getsFlage[p].active = !1)
                                            }
                                        }
                                        C.CGI = "vip_tab_state",
                                            g.tcpCGISend(C.CGI, 0, null, null, null, this.onTcpCGIResult.bind(this), !0, !0);
                                        break;
                                    case C.CMD_GETGIFT:
                                        if ("vip_tab_state" == C.CGI)
                                            C.CGI = "day_login",
                                                this.m_vipRewardFlag = Number(a.stat),
                                                2 == this.m_vipRewardFlag ? this.mcFlag.active = !0 : this.mcFlag.active = !1;
                                        else {
                                            b.showCgiXmlRewardList(a, new v((function() {
                                                    0 == n.m_vipRewardFlag && (C.CGI = "vipweeklyaward",
                                                        g.tcpCGISend(C.CGI, 1, null, null, null, n.onTcpCGIResult.bind(n), !0, !0))
                                                }
                                            )));
                                            var E = new y;
                                            2 == b.platformValue ? E.type = 1 : E.type = 0,
                                                g.tcpCGISend(C.CGI, C.CMD_QUERY, E, null, T, this.onTcpCGIResult.bind(this), !0, !0)
                                        }
                                        m.sendNotification(_.MAIN_UI_UPDATE_DIAMOND);
                                        break;
                                    case 1:
                                        C.CGI = "day_login",
                                            this.m_vipRewardFlag = 2,
                                            this.mcFlag.active = !0,
                                            b.showCgiXmlRewardList(a)
                                }
                        }
                        ,
                        a.updatePage = function() {
                            1 == this.m_queryInfo.dayType ? this.holidayTips.active = !1 : this.holidayTips.active = !0,
                                1 == Number(this.m_queryInfo.dayInfos[0].state) ? this.updateDailyState(3) : this.updateDailyState(1)
                        }
                        ,
                        i
                }(p)).prototype, "closeBtn", [R], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    Q = i(P.prototype, "btnCloseReward", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    X = i(P.prototype, "btnGiftWeek", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = i(P.prototype, "btnDailyGet", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = i(P.prototype, "btnGets", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    j = i(P.prototype, "icons", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    K = i(P.prototype, "iconTips", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    J = i(P.prototype, "getsFlage", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    Z = i(P.prototype, "holidayTips", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = i(P.prototype, "mcFlag", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    tt = i(P.prototype, "mcDaiyFlag", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    it = i(P.prototype, "btnDailyGray", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    et = i(P.prototype, "txtNext", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    nt = i(P.prototype, "txtLast", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ot = i(P.prototype, "ctlReward", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    at = i(P.prototype, "tips", [W], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    st = i(P.prototype, "btnSign", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = P)) || k));
                a._RF.pop()
            }
        }
    }
));
