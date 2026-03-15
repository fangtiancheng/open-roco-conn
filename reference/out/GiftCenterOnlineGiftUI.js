System.register("chunks:///_virtual/GiftCenterOnlineGiftUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./OnLineIntroduceUI.ts", "./Timer.ts", "./TimerEvent.ts", "./ActivityAPI.ts", "./GiftCenterMessage.ts", "./SpriteFrameSelector.ts", "./global.ts", "./GiftCenterOnlineConfig.ts", "./NetResult.ts", "./NetManager.ts", "./CFunction.ts", "./NotifyDef.ts", "./NotificationCenter.ts"], (function(t) {
        var i, n, e, o, r, a, s, l, u, c, h, p, f, m, d, b, I, y, C, S, g, T, _, w, v, E, N;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    e = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        a = t._decorator,
                        s = t.Node,
                        l = t.Button,
                        u = t.Label,
                        c = t.Sprite,
                        h = t.Animation,
                        p = t.NodeEventType,
                        f = t.sys
                }
                , function(t) {
                    m = t.GameSubUI
                }
                , function(t) {
                    d = t.OnLineIntroduceUI
                }
                , function(t) {
                    b = t.Timer
                }
                , function(t) {
                    I = t.default
                }
                , function(t) {
                    y = t.ActivityAPI
                }
                , function(t) {
                    C = t.GiftCenterMessage
                }
                , function(t) {
                    S = t.default
                }
                , function(t) {
                    g = t.__global
                }
                , function(t) {
                    T = t.GiftCenterOnlineConfig
                }
                , function(t) {
                    _ = t.NetResult
                }
                , function(t) {
                    w = t.NetManager
                }
                , function(t) {
                    v = t.CFunction
                }
                , function(t) {
                    E = t.NotifyDef
                }
                , function(t) {
                    N = t.NotificationCenter
                }
            ],
            execute: function() {
                var G, x, M, L, D, O, U, R, z, F, A, B, P, H, Q, X, Y, k, V, W, j, K, q, J, Z, $, tt, it, nt, et, ot, rt;
                r._RF.push({}, "f55864K3vlAG4T4LQIObluN", "GiftCenterOnlineGiftUI", void 0);
                var at = a.ccclass
                    , st = a.property;
                t("GiftCenterOnlineGiftUI", (G = st(s),
                    x = st(s),
                    M = st(l),
                    L = st(s),
                    D = st(s),
                    O = st(s),
                    U = st(d),
                    R = st(u),
                    z = st(u),
                    F = st(S),
                    A = st(u),
                    B = st(c),
                    P = st(h),
                    H = st(s),
                    Q = st(s),
                at((k = i((Y = function(t) {
                    function i() {
                        for (var i, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                            r[a] = arguments[a];
                        return i = t.call.apply(t, [this].concat(r)) || this,
                            e(i, "closeBtn", k, o(i)),
                            e(i, "btnShowIntroduce", V, o(i)),
                            e(i, "btnStart", W, o(i)),
                            e(i, "stateShow", j, o(i)),
                            e(i, "btnCloseIntroduce", K, o(i)),
                            e(i, "holidayTips", q, o(i)),
                            e(i, "ctlIntroduce", J, o(i)),
                            e(i, "txtLimit", Z, o(i)),
                            e(i, "txtOnLineTime", $, o(i)),
                            e(i, "iconShow2", tt, o(i)),
                            e(i, "txtIconShow2", it, o(i)),
                            e(i, "iconShows", nt, o(i)),
                            e(i, "playMc", et, o(i)),
                            e(i, "tips", ot, o(i)),
                            e(i, "btnSign", rt, o(i)),
                            i.m_timer = void 0,
                            i.m_data = void 0,
                            i.isPlaying = !1,
                            i.currentClipIndex = 0,
                            i.currentIndex = 0,
                            i.mcXmlData = null,
                            i.isFinishedEventBound = !1,
                            i
                    }
                    n(i, t);
                    var r = i.prototype;
                    return r.onLoad = function() {
                        this.onInit(),
                            this.m_timer = new b(1e3),
                            this.m_timer.addEventListener(I.TIMER, this.onTime.bind(this)),
                            this.addEvents()
                    }
                        ,
                        r.onNetError = function(t) {
                            g.UI.alert("", t.msg)
                        }
                        ,
                        r.onInit = function() {
                            this.onCloseIntroduce(),
                                this.stateShow.active = !1,
                                this.holidayTips.active = !1,
                                this.tips.active = !1,
                                this.btnStart.interactable = !1,
                                this.btnStart.getComponent(c).grayscale = !0,
                                this.txtLimit.string = "0",
                                this.iconShow2.gotoAndStop(2),
                                this.txtIconShow2.string = "x15"
                        }
                        ,
                        r.addEvents = function() {
                            this.closeBtn.on(p.TOUCH_END, this.onClose, this),
                                this.btnShowIntroduce.on(p.TOUCH_END, this.onShowIntroduce, this),
                                this.btnStart.node.on(p.TOUCH_END, this.onStart, this),
                                this.btnCloseIntroduce.on(p.TOUCH_END, this.onCloseIntroduce, this),
                                f.platform === f.Platform.MOBILE_BROWSER ? (this.btnSign.on(p.TOUCH_START, this.onTouchTipsStart, this, !0),
                                    this.btnSign.on(p.TOUCH_CANCEL, this.onTouchTipsCancel, this, !0)) : (this.btnSign.on(p.MOUSE_ENTER, this.onTouchTipsStart, this),
                                    this.btnSign.on(p.MOUSE_LEAVE, this.onTouchTipsCancel, this))
                        }
                        ,
                        r.onTouchTipsStart = function() {
                            this.tips.active = !0
                        }
                        ,
                        r.onTouchTipsCancel = function() {
                            this.tips.active = !1
                        }
                        ,
                        r.onClose = function() {
                            this.notify(C.CLOSE_MAIN_VIEW)
                        }
                        ,
                        r.onShowIntroduce = function() {
                            if (this.ctlIntroduce.node.active = !0,
                                this.m_data) {
                                var t = Number(this.m_data.windex);
                                t = t > 0 ? t - 1 : 0,
                                    this.ctlIntroduce.updatePropInfo(t)
                            }
                        }
                        ,
                        r.onCloseIntroduce = function() {
                            this.ctlIntroduce.node.active = !1
                        }
                        ,
                        r.onStart = function() {
                            this.isPlaying || (this.isPlaying = !0,
                                this.setLotteryState(),
                                w.tcpCGISend(T.CGI, T.CMD_GETGIFT, null, null, null, this.onTcpCGIResult.bind(this), !0, !0))
                        }
                        ,
                        r.onTime = function(t) {
                            this.m_data && this.m_data.time && (this.m_data.time = Number(this.m_data.time) + 1,
                                this.txtOnLineTime.string = "今天已累计在线时长：" + y.timeFormat(Number(this.m_data.time)).timeStr,
                            Number(this.m_data.time) % 300 == 0 && w.tcpCGISend(T.CGI, T.CMD_QUERY, null, null, null, this.onTcpCGIResult.bind(this), !0, !0))
                        }
                        ,
                        r.updateInfo = function() {
                            w.tcpCGISend(T.CGI, T.CMD_QUERY, null, null, null, this.onTcpCGIResult.bind(this), !0, !0),
                                this.onInit()
                        }
                        ,
                        r.onTcpCGIResult = function(t, i, n) {
                            var e = new _(t)
                                , o = t;
                            if (i == T.CMD_GETGIFT && e.value < 0 && (this.isPlaying = !1,
                                this.setLotteryState()),
                            e.value >= 0)
                                switch (i) {
                                    case T.CMD_QUERY:
                                        this.m_data = o;
                                        var r = Number(o.windex);
                                        this.iconShow2.gotoAndStop(r),
                                            this.txtIconShow2.string = r < 7 ? "x15" : "x1",
                                            this.updateBtnItem(),
                                        this.m_timer && this.m_timer.start(),
                                            N.sendNotification(E.MAIN_UI_UPDATE_DIAMOND);
                                        break;
                                    case T.CMD_GETGIFT:
                                        this.currentClipIndex = 0,
                                            this.currentIndex = o.index,
                                            this.mcXmlData = o,
                                            this.playNextClip(),
                                            this.isFinishedEventBound = !1
                                }
                        }
                        ,
                        r.playNextClip = function() {
                            0 === this.currentClipIndex ? this.playClip(this.playMc.clips[10], this.playMc.clips[this.currentIndex]) : 1 === this.currentClipIndex && this.playClip(this.playMc.clips[this.currentIndex], null)
                        }
                        ,
                        r.playClip = function(t, i) {
                            var n = this;
                            if (this.playMc && t) {
                                this.playMc.defaultClip = t,
                                    this.playMc.play();
                                this.isFinishedEventBound || (this.playMc.on(h.EventType.FINISHED, (function t() {
                                        n.currentClipIndex++,
                                            i ? n.playNextClip() : (console.log("所有动画播放完毕"),
                                                n.isPlaying = !1,
                                                n.setLotteryState(),
                                                y.showCgiXmlRewardList(n.mcXmlData, new v((function() {
                                                        n.playMc.defaultClip = n.playMc.clips[0],
                                                            w.tcpCGISend(T.CGI, T.CMD_QUERY, null, null, null, n.onTcpCGIResult.bind(n), !0, !0)
                                                    }
                                                ))),
                                                n.playMc.off(h.EventType.FINISHED, t, n),
                                                n.isFinishedEventBound = !1)
                                    }
                                ), this),
                                    this.isFinishedEventBound = !0)
                            }
                        }
                        ,
                        r.setLotteryState = function() {
                            this.btnStart.interactable = !this.isPlaying
                        }
                        ,
                        r.updateBtnItem = function() {
                            1 == Number(this.m_data.type) ? (this.holidayTips.active = !1,
                                this.stateShow.active = !1) : (this.holidayTips.active = !0,
                                this.stateShow.active = !0);
                            for (var t = 0; t < 8; t++)
                                0 == Number(this.m_data.status[t]) ? this.iconShows[t].grayscale = !1 : this.iconShows[t].grayscale = !0;
                            Number(this.m_data.times) < Number(this.m_data.alltimes) ? (this.btnStart.interactable = !0,
                                this.btnStart.getComponent(c).grayscale = !1) : (this.btnStart.interactable = !1,
                                this.btnStart.getComponent(c).grayscale = !0),
                                this.txtLimit.string = Number(this.m_data.alltimes) - Number(this.m_data.times) + "",
                                this.txtOnLineTime.string = "今天已累计在线时长：" + y.timeFormat(Number(this.m_data.time)).timeStr
                        }
                        ,
                        i
                }(m)).prototype, "closeBtn", [G], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    V = i(Y.prototype, "btnShowIntroduce", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = i(Y.prototype, "btnStart", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = i(Y.prototype, "stateShow", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    K = i(Y.prototype, "btnCloseIntroduce", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = i(Y.prototype, "holidayTips", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = i(Y.prototype, "ctlIntroduce", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Z = i(Y.prototype, "txtLimit", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = i(Y.prototype, "txtOnLineTime", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    tt = i(Y.prototype, "iconShow2", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    it = i(Y.prototype, "txtIconShow2", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    nt = i(Y.prototype, "iconShows", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    et = i(Y.prototype, "playMc", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ot = i(Y.prototype, "tips", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    rt = i(Y.prototype, "btnSign", [Q], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    X = Y)) || X));
                r._RF.pop()
            }
        }
    }
));
