System.register("chunks:///_virtual/MainWin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./WindowBase.ts", "./UserInfoPanel.ts", "./WindowCloseAction.ts", "./Config.ts", "./LadderMatchUIPlugin.ts", "./NoOpponentAlert.ts", "./RewardPanel.ts", "./RankPanel.ts", "./DescPanel.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./HistoryPanel.ts", "./RewardExchangePanel.ts", "./MatchingPopUp.ts"], (function(n) {
        var i, e, t, s, a, o, h, l, _, r, c, u, p, f, d, P, C, U, I, b, w;
        return {
            setters: [function(n) {
                i = n.inheritsLoose,
                    e = n.createForOfIteratorHelperLoose,
                    t = n.createClass,
                    s = n.assertThisInitialized
            }
                , function(n) {
                    a = n.cclegacy,
                        o = n.NodeEventType
                }
                , function(n) {
                    h = n.AgentNode
                }
                , function(n) {
                    l = n.WindowBase
                }
                , function(n) {
                    _ = n.UserInfoPanel
                }
                , function(n) {
                    r = n.WindowCloseAction
                }
                , function(n) {
                    c = n.Config
                }
                , function(n) {
                    u = n.default
                }
                , function(n) {
                    p = n.NoOpponentAlert
                }
                , function(n) {
                    f = n.RewardPanel
                }
                , function(n) {
                    d = n.RankPanel
                }
                , function(n) {
                    P = n.DescPanel
                }
                , function(n) {
                    C = n.PureNotificationCenter
                }
                , function(n) {
                    U = n.AppConstDef
                }
                , function(n) {
                    I = n.HistoryPanel
                }
                , function(n) {
                    b = n.RewardExchangePanel
                }
                , function(n) {
                    w = n.MatchingPopUp
                }
            ],
            execute: function() {
                a._RF.push({}, "55d431Cf4NGiZO+ufWNIkbc", "MainWin", void 0);
                n("MainWin", function(n) {
                    function t(i, e) {
                        var t;
                        return void 0 === i && (i = null),
                        void 0 === e && (e = !1),
                            (t = n.call(this) || this)._mainUI = void 0,
                            t._panels = void 0,
                            t._userInfoPanel = void 0,
                            t._rankPanel = void 0,
                            t._historyPanel = void 0,
                            t._rewardPanel = void 0,
                            t._descPanel = void 0,
                            t._alert = void 0,
                            t._matchingPopUp = void 0,
                            t._exchangePanel = void 0,
                            t.fType = 0,
                            t._panelNum = 4,
                            t.init(),
                            t.initialize(i, null, null, s(t), e),
                            t.center(),
                            t
                    }
                    i(t, n);
                    var a = t.prototype;
                    return a.center = function() {
                        moveTo(155, 15)
                    }
                        ,
                        a.showAlert = function(n) {
                            this._alert.setFtype(n),
                                this._alert.visible = !0
                        }
                        ,
                        a.showMatching = function() {
                            this._matchingPopUp.visible = !0,
                                this._matchingPopUp.show()
                        }
                        ,
                        a.closeMatching = function() {
                            this._matchingPopUp.visible = !1
                        }
                        ,
                        a.dispose = function() {
                            if (this._mainUI && this.delEvent(),
                            this._alert && this._alert.dispose(),
                                this._alert = null,
                            this._matchingPopUp && this._matchingPopUp.dispose(),
                                this._matchingPopUp = null,
                                this._panels)
                                for (var n, i = e(this._panels); !(n = i()).done; ) {
                                    var t = n.value;
                                    t.dispose(),
                                        t = null
                                }
                            this._panels = null
                        }
                        ,
                        a.onCloseWin = function(n, i, e, t) {
                            c.checkMatching() || (this.closeAction = r.HIDE,
                                this.close())
                        }
                        ,
                        a.init = function() {
                            this._mainUI = new g(u.target),
                                this.addChild(this._mainUI.target),
                                this._userInfoPanel = new _(this._mainUI.panel_0,this),
                                this._rankPanel = new d(this._mainUI.panel_1,this),
                                this._historyPanel = new I(this._mainUI.panel_4),
                                this._rewardPanel = new f(this._mainUI.panel_2),
                                this._descPanel = new P(this._mainUI.panel_3),
                                this._exchangePanel = new b(this._mainUI.exchangePanel),
                                this._alert = new p(this._mainUI.alert,this),
                                this._alert.visible = !1,
                                this._matchingPopUp = new w(this._mainUI.matchingPopUp,this),
                                this._panels = [this._userInfoPanel, this._rewardPanel, this._rankPanel, this._descPanel, this._historyPanel],
                                this._userInfoPanel._banSpiritPanel.visible = !1,
                                this._userInfoPanel._dayTaskPanel.visible = !1,
                                this.addEvent()
                        }
                        ,
                        a.addEvent = function() {
                            this._userInfoPanel._ui.btnClose.on(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowIntroduce.on(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowRewardIntroduce.on(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowBanSpirit.on(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowDayTask.on(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowRank.on(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowHistory.on(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnReward.on(o.TOUCH_END, this.onUIClick, this),
                                this._descPanel._ui.btnClose.on(o.TOUCH_END, this.onUIClick, this),
                                this._rewardPanel._ui.btnClose.on(o.TOUCH_END, this.onUIClick, this),
                                this._rewardPanel._ui.btnShowIntroduce.on(o.TOUCH_END, this.onUIClick, this),
                                this._historyPanel._ui.btnClose.on(o.TOUCH_END, this.onUIClick, this),
                                this._historyPanel._ui.btnShowIntroduce.on(o.TOUCH_END, this.onUIClick, this),
                                this._exchangePanel._ui.btnClose.on(o.TOUCH_END, this.onUIClick, this)
                        }
                        ,
                        a.delEvent = function() {
                            this._userInfoPanel._ui.btnClose.off(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowIntroduce.off(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowRewardIntroduce.off(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowBanSpirit.off(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowDayTask.off(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowRank.off(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnShowHistory.off(o.TOUCH_END, this.onUIClick, this),
                                this._userInfoPanel._ui.btnReward.off(o.TOUCH_END, this.onUIClick, this),
                                this._descPanel._ui.btnClose.off(o.TOUCH_END, this.onUIClick, this),
                                this._rewardPanel._ui.btnClose.off(o.TOUCH_END, this.onUIClick, this),
                                this._rewardPanel._ui.btnShowIntroduce.off(o.TOUCH_END, this.onUIClick, this),
                                this._historyPanel._ui.btnClose.off(o.TOUCH_END, this.onUIClick, this),
                                this._historyPanel._ui.btnShowIntroduce.off(o.TOUCH_END, this.onUIClick, this),
                                this._exchangePanel._ui.btnClose.off(o.TOUCH_END, this.onUIClick, this)
                        }
                        ,
                        a.setPanelByType = function(n) {
                            this.fType = n,
                            0 == this.fType && this._panels[0].update()
                        }
                        ,
                        a.setfType = function(n) {
                            this.fType = n
                        }
                        ,
                        a.onReqUserInfo = function(n, i, e, t) {
                            void 0 === e && (e = null),
                            void 0 === t && (t = null),
                                this._userInfoPanel.onReqUserInfo(n, i, e, t)
                        }
                        ,
                        a.onSpiritChanged = function(n, i, e, t) {
                            return this._userInfoPanel.onSpiritChanged(n, i, e, t)
                        }
                        ,
                        a.updateHistory = function(n, i) {
                            this._historyPanel.processFunc(n, i)
                        }
                        ,
                        a.updateTab = function(n) {}
                        ,
                        a.startMatch = function(n) {
                            0 == n && this._userInfoPanel.startMatch()
                        }
                        ,
                        a.showDesPanel = function() {
                            this._descPanel.visible = !0,
                                this._descPanel.update()
                        }
                        ,
                        a.onUIClick = function(n) {
                            switch (n.target.name) {
                                case "btnClose":
                                    if (this._descPanel.visible)
                                        this._descPanel.visible = !1;
                                    else if (this._rewardPanel.visible)
                                        this._rewardPanel.visible = !1;
                                    else if (this._historyPanel.visible)
                                        this._historyPanel.visible = !1;
                                    else if (this._exchangePanel.visible)
                                        this._exchangePanel.visible = !1;
                                    else {
                                        if (c.checkMatching())
                                            return;
                                        C.sendNotification(U.NN_V_CLOSE_LADDER_MATCH_VIEW)
                                    }
                                    break;
                                case "btnShowBanSpirit":
                                    this._userInfoPanel._banSpiritPanel.visible = !0;
                                    break;
                                case "btnShowDayTask":
                                    this._userInfoPanel._dayTaskPanel.visible = !0;
                                    break;
                                case "btnShowIntroduce":
                                    this.showDesPanel();
                                    break;
                                case "btnShowIntroducePeak":
                                case "btnShowRewardIntroduce":
                                    this._panels[1].visible = !0,
                                        this._panels[1].update();
                                    break;
                                case "btnShowRewardIntroducePeak":
                                    break;
                                case "btnShowRank":
                                    this._panels[2].visible = !0,
                                        this._panels[2].update();
                                    break;
                                case "btnShowHistory":
                                    this._panels[4].visible = !0,
                                        this._panels[4].update();
                                    break;
                                case "btnOpenPeak":
                                    this._panels[5].visible = !0,
                                        this._panels[5].update();
                                    break;
                                case "btnLink":
                                    window.open("https://17roco.gamebbs.qq.com/forum.php?mod=viewthread&tid=127987");
                                    break;
                                case "btnReward":
                                    this._exchangePanel.visible = !0,
                                        this._exchangePanel.updateInfo()
                            }
                        }
                        ,
                        t
                }(l));
                var g = function(n) {
                    function e() {
                        for (var i, e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                            t[s] = arguments[s];
                        return (i = n.call.apply(n, [this].concat(t)) || this)._panel_0 = void 0,
                            i._panel_1 = void 0,
                            i._panel_2 = void 0,
                            i._panel_3 = void 0,
                            i._panel_4 = void 0,
                            i._alert = void 0,
                            i._exchangePanel = void 0,
                            i._matchingPopUp = void 0,
                            i._mainWin = void 0,
                            i
                    }
                    return i(e, n),
                        t(e, [{
                            key: "panel_0",
                            get: function() {
                                return this._panel_0 || (this._panel_0 = new h(this.getChildByName("LadderMatchMain_1600"))),
                                    this._panel_0
                            }
                        }, {
                            key: "panel_1",
                            get: function() {
                                return this._panel_1 || (this._panel_1 = new h(this.getChildByName("panel_1"))),
                                    this._panel_1
                            }
                        }, {
                            key: "panel_2",
                            get: function() {
                                return this._panel_2 || (this._panel_2 = new h(this.getChildByName("panel_2"))),
                                    this._panel_2
                            }
                        }, {
                            key: "panel_3",
                            get: function() {
                                return this._panel_3 || (this._panel_3 = new h(this.getChildByName("panel_3"))),
                                    this._panel_3
                            }
                        }, {
                            key: "panel_4",
                            get: function() {
                                return this._panel_4 || (this._panel_4 = new h(this.getChildByName("panel_4"))),
                                    this._panel_4
                            }
                        }, {
                            key: "alert",
                            get: function() {
                                return this._alert || (this._alert = new h(this.getChildByName("alert"))),
                                    this._alert
                            }
                        }, {
                            key: "exchangePanel",
                            get: function() {
                                return this._exchangePanel || (this._exchangePanel = new h(this.getChildByName("exchangePanel"))),
                                    this._exchangePanel
                            }
                        }, {
                            key: "matchingPopUp",
                            get: function() {
                                return this._matchingPopUp || (this._matchingPopUp = new h(this.getChildByName("matchingPopUp"))),
                                    this._matchingPopUp
                            }
                        }, {
                            key: "mainWin",
                            get: function() {
                                return this._mainWin || (this._mainWin = new h(this.getChildByName("mainWin"))),
                                    this._mainWin
                            }
                        }]),
                        e
                }(h);
                a._RF.pop()
            }
        }
    }
));
