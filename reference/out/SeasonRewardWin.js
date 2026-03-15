System.register("chunks:///_virtual/SeasonRewardWin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./global.ts", "./WindowBase.ts", "./CommFunction.ts", "./CGIEvent.ts", "./CGILoader.ts", "./CommonAPI.ts", "./Config.ts", "./LadderMatchSystemDP.ts", "./AgentNode.ts", "./ResManager.ts", "./CtlListReward.ts", "./NetResult.ts", "./ToolTip.ts", "./BubbleSkinType.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts"], (function(t) {
        var i, e, n, s, o, l, c, a, r, u, _, h, d, f, g, C, L, v, D, w, N, b;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.assertThisInitialized,
                    n = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.NodeEventType
                }
                , function(t) {
                    l = t.DEFINE
                }
                , function(t) {
                    c = t.__global
                }
                , function(t) {
                    a = t.WindowBase
                }
                , function(t) {
                    r = t.CommFunction
                }
                , function(t) {
                    u = t.CGIEvent
                }
                , function(t) {
                    _ = t.CGILoader
                }
                , function(t) {
                    h = t.CommonAPI
                }
                , function(t) {
                    d = t.Config
                }
                , function(t) {
                    f = t.LadderMatchSystemDP
                }
                , function(t) {
                    g = t.AgentNode
                }
                , function(t) {
                    C = t.default
                }
                , function(t) {
                    L = t.CtlListReward
                }
                , function(t) {
                    v = t.NetResult
                }
                , function(t) {
                    D = t.ToolTipComponent
                }
                , function(t) {
                    w = t.BubbleSkinType
                }
                , function(t) {
                    N = t.PureNotificationCenter
                }
                , function(t) {
                    b = t.AppConstDef
                }
            ],
            execute: function() {
                s._RF.push({}, "c03aelJIUhDiohw24LYUyqC", "SeasonRewardWin", void 0);
                t("SeasonRewardWin", function(t) {
                    function n() {
                        var i;
                        (i = t.call(this) || this)._ui = void 0,
                            i._list0 = void 0,
                            i._list1 = void 0,
                            i._loader = void 0;
                        var n = C.Instance.getPrefabByName("ladderMatch_1600/ui/UIResSeasonReward_1600");
                        return i._ui = new y(n),
                            i.addChild(i._ui.target),
                            i._ui.btnClose.on(o.TOUCH_END, i.onUIClick, e(i)),
                            i._ui.btnGet.on(o.TOUCH_END, i.onUIClick, e(i)),
                        null == i._ui.icon.getComponent(D) && (i._ui.icon.addComponent(D),
                            i._ui.icon.tooltipType = w.COMBAT_ITEMS),
                            i._list0 = new L(i._ui.ctlList0,5),
                            i._list0.setListData([]),
                            i._list1 = new L(i._ui.ctlList1,2),
                            i._list1.setListData([]),
                            i._loader = new _(l.CGI_ROOT + "ladder_season_reward",c.SysAPI.getNetSysAPI().createURLLoader(!0)),
                            i._loader.addEventListener(u.COMPLETE, i.onRecieveData, e(i)),
                            i._loader.addEventListener(u.GOT_ERROR, i.onNetError, e(i)),
                            i
                    }
                    i(n, t);
                    var s = n.prototype;
                    return s.onNetError = function(t) {
                        c.UI.alert("", t.msg)
                    }
                        ,
                        s.dispose = function() {
                            this._ui && (this._ui.btnClose.on(o.TOUCH_END, this.onUIClick, this),
                                this._ui.btnGet.on(o.TOUCH_END, this.onUIClick, this)),
                            this._list0 && this._list0.dispose(),
                                this._list0 = null,
                            this._list1 && this._list1.dispose(),
                                this._list1 = null
                        }
                        ,
                        s.processFunc = function(t) {
                            if (r.setWaiting(!1),
                                t) {
                                var i = t;
                                if (i.retInfo.retCode >= 0) {
                                    d.curLevel = i.rankLevel,
                                        d.curWinPoint = i.winPoint;
                                    var e = "恭喜您在上届天梯赛中获得<font color='#FFFF00'>" + d.getTitle(i.rankLevel) + d.getSmallLevel() + "段</font>，共出战<font color='#FFFF00'>" + i.allNums + "</font>场，取得<font color='#FFFF00'>" + i.winNums + "</font>胜场；在上届巅峰赛中获得<font color='#FFFF00'>" + i.winPointDf + "</font>巅峰星数。\n*赛季奖励领取后通过邮件发送，请预留充足的邮箱空位。</font> ";
                                    this._ui.txtMsg.htmlText = "<outline color=0x1A1D63 width=3>" + e + "</outline>",
                                        this._ui.icon.gotoAndStop(d.getBigLevel(i.rankLevel)),
                                        this._ui.icon.tooltip = d.getTitle(i.rankLevel),
                                        this._list0.setListData(d.SEASON_REWARD_IDS[d.getBigLevel(i.rankLevel) - 1]),
                                        -1 != d.getBigLevelDF(i.winPointDf) ? (this._ui.txtDf.visible = !0,
                                            this._list1.setListData(d.DF_SEASON_REWARD_IDS[d.getBigLevelDF(i.winPointDf)])) : (this._ui.txtDf.visible = !1,
                                            this._list1.setListData([]))
                                } else
                                    c.showMsgBox(h.byteToString(i.retInfo.retMsg))
                            }
                        }
                        ,
                        s.show = function() {
                            f.requestQueryInfo(this.processFunc.bind(this))
                        }
                        ,
                        s.onRecieveData = function(t) {
                            c.UI.closeMiniLoading();
                            var i = t.data;
                            if (new v(i).value >= 0)
                                switch (t.sendType) {
                                    case "?cmd=0":
                                        this.close(),
                                            h.showCgiXmlRewardList(i),
                                            N.sendNotification(b.NN_V_UPDATE_USER_INFO_PANEL)
                                }
                        }
                        ,
                        s.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnGet":
                                    this._loader.sendData("?cmd=0");
                                    break;
                                case "btnClose":
                                    this.visible = !1
                            }
                        }
                        ,
                        n
                }(a));
                var y = function(t) {
                    function e() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._btnClose = void 0,
                            i._icon = void 0,
                            i._btnGet = void 0,
                            i._ctlList0 = void 0,
                            i._ctlList1 = void 0,
                            i._txtMsg = void 0,
                            i._txtDf = void 0,
                            i
                    }
                    return i(e, t),
                        n(e, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new g(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "icon",
                            get: function() {
                                return this._icon || (this._icon = new g(this.getChildByName("icon"))),
                                    this._icon
                            }
                        }, {
                            key: "btnGet",
                            get: function() {
                                return this._btnGet || (this._btnGet = new g(this.getChildByName("btnGet"))),
                                    this._btnGet
                            }
                        }, {
                            key: "ctlList0",
                            get: function() {
                                return this._ctlList0 || (this._ctlList0 = new g(this.getChildByName("ctlList0"))),
                                    this._ctlList0
                            }
                        }, {
                            key: "ctlList1",
                            get: function() {
                                return this._ctlList1 || (this._ctlList1 = new g(this.getChildByName("ctlList1"))),
                                    this._ctlList1
                            }
                        }, {
                            key: "txtMsg",
                            get: function() {
                                return this._txtMsg || (this._txtMsg = new g(this.getChildByName("txtMsg"))),
                                    this._txtMsg
                            }
                        }, {
                            key: "txtDf",
                            get: function() {
                                return this._txtDf || (this._txtDf = new g(this.getChildByName("txtDf"))),
                                    this._txtDf
                            }
                        }]),
                        e
                }(g);
                s._RF.pop()
            }
        }
    }
));
