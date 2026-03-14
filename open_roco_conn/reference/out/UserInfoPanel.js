System.register("chunks:///_virtual/UserInfoPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./global.ts", "./CallbackCenter.ts", "./LadderMatchSystemDP.ts", "./Config.ts", "./TimerHelper.ts", "./RetInfo.ts", "./CommonAPI.ts", "./CombatType.ts", "./CFunction.ts", "./CommFunction.ts", "./PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C2.ts", "./UICtlBase.ts", "./StringUtil.ts", "./CtlList02.ts", "./BanSpiritPanel.ts", "./DayTaskPanel.ts", "./SeasonRewardWin.ts", "./ResultWin.ts", "./ToolTip.ts", "./BubbleSkinType.ts", "./FilterUtil.ts", "./LadderMatchView.ts"], (function(t) {
        var i, e, n, s, a, o, r, u, l, h, _, c, d, p, b, T, y, g, v, k, f, P, w, S, C, m, R, B, I;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.assertThisInitialized,
                    n = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        a = t.NodeEventType,
                        o = t.Button
                }
                , function(t) {
                    r = t.AgentNode
                }
                , function(t) {
                    u = t.__global
                }
                , function(t) {
                    l = t.CallbackCenter
                }
                , function(t) {
                    h = t.LadderMatchSystemDP
                }
                , function(t) {
                    _ = t.Config
                }
                , function(t) {
                    c = t.TimerHelper
                }
                , function(t) {
                    d = t.RetInfo
                }
                , function(t) {
                    p = t.CommonAPI
                }
                , function(t) {
                    b = t.CombatType
                }
                , function(t) {
                    T = t.CFunction
                }
                , function(t) {
                    y = t.CommFunction
                }
                , function(t) {
                    g = t.PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C
                }
                , function(t) {
                    v = t.UICtlBase
                }
                , function(t) {
                    k = t.StringUtil
                }
                , function(t) {
                    f = t.CtlList02
                }
                , function(t) {
                    P = t.BanSpiritPanel
                }
                , function(t) {
                    w = t.DayTaskPanel
                }
                , function(t) {
                    S = t.SeasonRewardWin
                }
                , function(t) {
                    C = t.ResultWin
                }
                , function(t) {
                    m = t.ToolTipComponent
                }
                , function(t) {
                    R = t.BubbleSkinType
                }
                , function(t) {
                    B = t.FilterUtil
                }
                , function(t) {
                    I = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "9c606MmBxROQIlUvFmSWIMv", "UserInfoPanel", void 0);
                t("UserInfoPanel", function(t) {
                    function n(i, n, s, a, r) {
                        var l;
                        return void 0 === s && (s = 0),
                        void 0 === a && (a = ""),
                        void 0 === r && (r = null),
                            (l = t.call(this, i, s, a, r) || this)._ui = void 0,
                            l.spiritList = void 0,
                            l.topOwner = void 0,
                            l.desArr = [],
                            l.fType = 0,
                            l._banSpiritPanel = void 0,
                            l._dayTaskPanel = void 0,
                            l._resultPanel = void 0,
                            l.matchData = {
                                fType: 0,
                                score: 0,
                                battleCount: 0,
                                dailyChallengeCount: 0
                            },
                            l.curTask = void 0,
                            l._ui = new M(i.target),
                            l.topOwner = n,
                            l._banSpiritPanel = new P(l._ui.banSpiritPanel),
                            l._banSpiritPanel.visible = !1,
                            l._dayTaskPanel = new w(l._ui.dayTaskPanel),
                            l._dayTaskPanel.visible = !1,
                            l._resultPanel = new C(l._ui.resultPanel),
                            l._resultPanel.visible = !1,
                            l._ui.spiritRecoveryButton.mouseChildren = !1,
                        null == l._ui.spiritRecoveryButton.getComponent(m) && (l._ui.spiritRecoveryButton.addComponent(m),
                            l._ui.spiritRecoveryButton.tooltipType = R.COMBAT_ITEMS),
                        null == l._ui.openPeakPanelBtn.getComponent(m) && (l._ui.openPeakPanelBtn.addComponent(m),
                            l._ui.openPeakPanelBtn.tooltipType = R.ROUND_RECT,
                            l._ui.openPeakPanelBtn.tooltip = "敬请期待"),
                        null == l._ui.btnShowRewardIntroduce.getComponent(m) && (l._ui.btnShowRewardIntroduce.addComponent(m),
                            l._ui.btnShowRewardIntroduce.tooltipType = R.ROUND_RECT,
                            l._ui.btnShowRewardIntroduce.tooltip = "赛季奖励"),
                        null == l._ui.btnShowRank.getComponent(m) && (l._ui.btnShowRank.addComponent(m),
                            l._ui.btnShowRank.tooltipType = R.ROUND_RECT,
                            l._ui.btnShowRank.tooltip = "赛季排行"),
                        null == l._ui.btnReward.getComponent(m) && (l._ui.btnReward.addComponent(m),
                            l._ui.btnReward.tooltipType = R.ROUND_RECT,
                            l._ui.btnReward.tooltip = "奖励兑换"),
                        null == l._ui.btnShowHistory.getComponent(m) && (l._ui.btnShowHistory.addComponent(m),
                            l._ui.btnShowHistory.tooltipType = R.ROUND_RECT,
                            l._ui.btnShowHistory.tooltip = "对局记录"),
                            u.MainRoleData.isVip ? (l._ui.spiritRecoveryButton.filters = [],
                                l._ui.spiritRecoveryButton.enabled = !0,
                                l._ui.spiritRecoveryButton.enableTag = !0,
                                l._ui.spiritRecoveryButton.tooltip = _.WORDS_FULL_RECOVERY_SPIRIT,
                                l._ui.spiritRecoveryButton.on(o.EventType.CLICK, l.onRecoverySpirit, e(l))) : (l._ui.spiritRecoveryButton.filters = B.getGrayFilter(),
                                l._ui.spiritRecoveryButton.enabled = !1,
                                l._ui.spiritRecoveryButton.enableTag = !1,
                                l._ui.spiritRecoveryButton.tooltip = _.WORDS_FULL_RECOVERY_SPIRIT_DENY,
                                l._ui.spiritRecoveryButton.off(o.EventType.CLICK, l.onRecoverySpirit, e(l))),
                            l._ui.txtMatchTimes.text = "",
                            l._ui.txtProgress.text = "0/16",
                            l._ui.blueprogress.gotoAndStop(1),
                            l._ui.blueprogress.visible = !0,
                            l._ui.redprogress.gotoAndStop(1),
                            l._ui.redprogress.visible = !1,
                            l._ui.view_1.icon.buttonMode = !0,
                            l._ui.view_1.icon.mouseChildren = !1,
                            l._ui.view_1.icon.mouseEnabled = !0,
                            l._ui.view_1.icon.gotoAndStop(1),
                            l._ui.view_1.txtWinPoint.text = "",
                            l._ui.view_1.txtWinTimes.text = "",
                            l._ui.btnUnopen.buttonMode = !0,
                            l._ui.btnUnopen.mouseEnabled = !0,
                            l._ui.btnUnopen.mouseChildren = !1,
                            l.refreshTaskStatus(2, 0),
                            l.refreshTaskStatus(2, 1),
                            l.spiritList = new f(l._ui.list,6),
                            l.addEvents(),
                            l
                    }
                    i(n, t);
                    var s = n.prototype;
                    return s.addEvents = function() {
                        this._dayTaskPanel._ui.ctlTask0_btnGiveup.on(a.TOUCH_END, this.onUIClick, this),
                            this._dayTaskPanel._ui.ctlTask1_btnGiveup.on(a.TOUCH_END, this.onUIClick, this),
                            this._dayTaskPanel._ui.btnClose.on(a.TOUCH_END, this.onUIClick, this),
                            this._ui.btnMain.on(a.TOUCH_END, this.onUIClick, this),
                            this._ui.btnSpiritStorage.on(a.TOUCH_END, this.onUIClick, this)
                    }
                        ,
                        s.dispose = function() {
                            this._ui && (this._dayTaskPanel._ui.ctlTask0_btnGiveup.off(a.TOUCH_END, this.onUIClick, this),
                                this._dayTaskPanel._ui.ctlTask1_btnGiveup.off(a.TOUCH_END, this.onUIClick, this),
                                this._dayTaskPanel._ui.btnClose.off(a.TOUCH_END, this.onUIClick, this),
                                this._ui.btnMain.off(a.TOUCH_END, this.onUIClick, this),
                                this._ui.btnSpiritStorage.off(a.TOUCH_END, this.onUIClick, this),
                            this._ui.spiritRecoveryButton && this._ui.spiritRecoveryButton.off(a.TOUCH_END, this.onRecoverySpirit, this),
                            this._banSpiritPanel && this._banSpiritPanel.dispose(),
                            this._dayTaskPanel && this._dayTaskPanel.dispose()),
                                c.disposeTimer(_.PLUG_NAME)
                        }
                        ,
                        s.onReqUserInfo = function(t, i, e, n) {
                            this.update()
                        }
                        ,
                        s.onSpiritChanged = function(t, i, e, n) {
                            return "SpiritBag" != i && "SpiritStorageApp" != i || this.update(),
                                l.EVENT_OK
                        }
                        ,
                        s.update = function() {
                            h.requestQueryInfo(this.processFunc.bind(this))
                        }
                        ,
                        s.onRecoverySpirit = function(t) {
                            (this._ui.spiritRecoveryButton.enableTag = !0) && h.requestRecoverySpirit(this.onRecoveryFunc.bind(this))
                        }
                        ,
                        s.onRecoveryFunc = function(t) {
                            y.setWaiting(!1),
                            null != t && null != t.returnCode && (t.returnCode.isError() ? p.showAlert(t.returnCode.message) : p.showAlert(_.WORDS_FULL_RECOVERY_SPIRIT_SUCC))
                        }
                        ,
                        s.processMatch = function(t, i) {
                            _.isMatching = !1,
                                this.topOwner.closeMatching(),
                                0 == i.retInfo.retCode ? p.startNpcCombat(i.npcId, 1 == i.type ? b.PVB : b.L_PVP, new T(this.onNpcCombatCallBack,this)) : 2 == i.retInfo.retCode ? this.topOwner.showAlert(this.fType) : u.showMsgBox(p.byteToString(i.retInfo.retMsg))
                        }
                        ,
                        s.processFunc = function(t) {
                            if (y.setWaiting(!1),
                                this.visible = !0,
                                this.topOwner.updateHistory(t, this.fType),
                            t instanceof g) {
                                var i = t;
                                this.handleQueryPersonalMessageResponse(i)
                            } else if (t instanceof d) {
                                var e = t;
                                this.handleRetInfoResponse(e)
                            }
                        }
                        ,
                        s.handleQueryPersonalMessageResponse = function(t) {
                            if (0 === t.retInfo.retCode) {
                                if (this.matchData.score = t.winPoint,
                                    this.matchData.battleCount = t.allNums,
                                    this.matchData.dailyChallengeCount = t.leftPlayTimes,
                                1 == t.seasonRewardFlag)
                                    u.UI.createWindow(S).show();
                                _.info = t,
                                    _.LIMIT_SPIRIT = t.banList.slice(),
                                    this.updateBanSpiritDescription(),
                                    this.updateTask(),
                                    this.updateRankInformation(t),
                                    this.updateMatchTimes(t),
                                    this.updateProgress(t),
                                    this.updateSpiritList(t),
                                    this.updateOpenStatus(t.leftTime)
                            } else
                                u.showMsgBox(p.byteToString(t.retInfo.retMsg))
                        }
                        ,
                        s.handleRetInfoResponse = function(t) {
                            0 !== t.retCode ? p.showAlert(p.byteToString(t.retMsg)) : p.showAlert(_.WORDS_FULL_RECOVERY_SPIRIT_SUCC)
                        }
                        ,
                        s.updateBanSpiritDescription = function() {
                            var t = _.LIMIT_SPIRIT.map((function(t) {
                                    return p.getSpiritName(t)
                                }
                            )).join("，")
                                , i = _.LIMIT_SPIRIT.length > 0 ? "·" + t : "无"
                                , e = "二、宠物魔力说明：";
                            [6, 5, 4, 3, 2].forEach((function(t) {
                                    var i = _.SPIRIT_COST.filter((function(i) {
                                            return i.cost === t
                                        }
                                    )).map((function(t) {
                                            return p.getSpiritName(t.id)
                                        }
                                    )).join("、");
                                    i && (e += "\n·" + t + "魔力宠物：\n" + i)
                                }
                            ));
                            var n = "一、本周禁赛宠物：\n" + i + "\n" + (e += "\n·1魔力宠物：\n以上之外所有宠物") + "\n三、不可同时参赛宠物：\n·柴可司机、普之舜舜、禁之舜舜、立春、桃夭不可同时参赛\n·紫薇莨儿、堇楹仙子、蔓羽毒后、幻鸩毒王、如意毒王不可同时参赛\n·朝曦冰夕、圣域白狐、夜礼伊芙、踏云蹦影、美狄亚、墨菲斯不可同时参赛";
                            this._banSpiritPanel.updateDes(n)
                        }
                        ,
                        s.updateRankInformation = function(t) {
                            _.curLevel = t.rankLevel,
                                _.curWinPoint = t.winPoint,
                                this._ui.view_1.txtTitle.text = 0 === t.rankLevel ? "证明你的实力" : "" + _.getTitle(t.rankLevel) + _.getSmallLevel() + "段",
                                this._ui.view_1.icon.tooltip = 0 === t.rankLevel ? "" : _.getTitle(t.rankLevel),
                                this._ui.view_1.icon.gotoAndStop(0 === t.rankLevel ? 1 : _.getBigLevel(t.rankLevel)),
                                this._ui.view_1.txtWinPoint.text = t.winPoint + "/" + t.nextWinPoint,
                                this._ui.view_1.txtWinTimes.text = t.winNums + "/" + t.allNums,
                                this._ui.view_1.txtCount.text = t.season.toString()
                        }
                        ,
                        s.updateMatchTimes = function(t) {
                            this._ui.txtMatchTimes.text = k.substitute(_.WORDS_MATCH_TIMES, t.leftPlayTimes);
                            var i = 10 - Number(t.leftPlayTimes);
                            this._dayTaskPanel._ui.mcFlg0.visible = i >= 5,
                                this._dayTaskPanel._ui.mcFlg1.visible = i >= 5,
                                this._dayTaskPanel._ui.txtMission0.text = "完成" + i + "/5场对局",
                                this._dayTaskPanel._ui.txtMission1.text = "前5场对局获胜" + i + "/5次"
                        }
                        ,
                        s.updateProgress = function(t) {
                            var i = t.spiritInfo.reduce((function(t, i) {
                                    var e;
                                    return i ? (t += 1) + ((null == (e = _.SPIRIT_COST.find((function(t) {
                                            return t.id === i.petId
                                        }
                                    ))) ? void 0 : e.cost) || 1) - 1 : t
                                }
                            ), 0);
                            this._ui.txtProgress.text = i + "/16",
                                i <= 16 ? (this._ui.txtProgress.visible = !0,
                                    this._ui.redprogress.visible = !1,
                                    this._ui.blueprogress.visible = !0,
                                    this._ui.blueprogress.gotoAndStop(Math.floor(i / 16 * 100))) : (this._ui.blueprogress.visible = !1,
                                    this._ui.redprogress.gotoAndStop(100),
                                    this._ui.redprogress.visible = !0,
                                    this._ui.blueprogress.gotoAndStop(1))
                        }
                        ,
                        s.updateSpiritList = function(t) {
                            for (; t.spiritInfo.length < 6; )
                                t.spiritInfo.push(null);
                            this.spiritList.setListData(t.spiritInfo)
                        }
                        ,
                        s.updateOpenStatus = function(t) {
                            0 === t ? (this._ui.btnMain.visible = !0,
                                this._ui.btnUnopen.visible = !1) : (c.disposeTimer(_.PLUG_NAME),
                                c.startTimer(_.PLUG_NAME, 1e3, t, null, this.onTimeEnd.bind(this)),
                                this._ui.btnMain.visible = !1,
                                this._ui.btnUnopen.visible = !0,
                                this._ui.btnUnopen.tooltip = _.WORDS_TIME)
                        }
                        ,
                        s.setOpenStatus = function(t) {
                            0 == t ? (this._ui.btnMain.visible = !0,
                                this._ui.btnUnopen.visible = !1) : (c.disposeTimer(_.PLUG_NAME),
                                c.startTimer(_.PLUG_NAME, 1e3, t, null, this.onTimeEnd.bind(this)),
                                this._ui.btnMain.visible = !1,
                                this._ui.btnUnopen.visible = !0,
                                this._ui.btnUnopen.tooltip = _.WORDS_TIME)
                        }
                        ,
                        s.onTimeEnd = function() {
                            this._ui.btnMain.visible = !0,
                                this._ui.btnUnopen.visible = !1
                        }
                        ,
                        s.refreshTaskStatus = function(t, i) {
                            0 == i && (this._dayTaskPanel._ui.ctlTask0_btnGiveup.visible = !1,
                                this._dayTaskPanel._ui.ctlTask0_img_flg.active = !1,
                                1 == t ? (this._dayTaskPanel._ui.ctlTask0_btnGiveup.visible = !0,
                                    this._dayTaskPanel._ui.ctlTask0_btnGiveup.grayscale = !1,
                                    this._dayTaskPanel._ui.ctlTask0_btnGiveup.enabled = !0,
                                    this._dayTaskPanel._ui.ctlTask0_btnGiveup.enableTag = !0) : 2 == t ? (this._dayTaskPanel._ui.ctlTask0_btnGiveup.visible = !0,
                                    this._dayTaskPanel._ui.ctlTask0_btnGiveup.grayscale = !0,
                                    this._dayTaskPanel._ui.ctlTask0_btnGiveup.enabled = !1,
                                    this._dayTaskPanel._ui.ctlTask0_btnGiveup.enableTag = !1) : 3 == t && (this._dayTaskPanel._ui.ctlTask0_img_flg.active = !0)),
                            1 == i && (this._dayTaskPanel._ui.ctlTask1_btnGiveup.visible = !1,
                                this._dayTaskPanel._ui.ctlTask1_img_flg.active = !1,
                                1 == t ? (this._dayTaskPanel._ui.ctlTask1_btnGiveup.visible = !0,
                                    this._dayTaskPanel._ui.ctlTask1_btnGiveup.grayscale = !1,
                                    this._dayTaskPanel._ui.ctlTask1_btnGiveup.enabled = !0,
                                    this._dayTaskPanel._ui.ctlTask1_btnGiveup.enableTag = !0) : 2 == t ? (this._dayTaskPanel._ui.ctlTask1_btnGiveup.visible = !0,
                                    this._dayTaskPanel._ui.ctlTask1_btnGiveup.grayscale = !0,
                                    this._dayTaskPanel._ui.ctlTask1_btnGiveup.enabled = !1,
                                    this._dayTaskPanel._ui.ctlTask1_btnGiveup.enableTag = !1) : 3 == t && (this._dayTaskPanel._ui.ctlTask1_img_flg.active = !0))
                        }
                        ,
                        s.updateTask = function() {
                            1 == _.info.dayQuest[0].status ? this.refreshTaskStatus(3, 0) : 1 == _.info.dayQuest[0].giveUp ? this.refreshTaskStatus(1, 0) : this.refreshTaskStatus(2, 0),
                                1 == _.info.dayQuest[1].status ? this.refreshTaskStatus(3, 1) : 1 == _.info.dayQuest[1].giveUp ? this.refreshTaskStatus(1, 1) : this.refreshTaskStatus(2, 1),
                                this._dayTaskPanel._ui.ctlTask0_txtName.text = _.getTask0Des(_.info.dayQuest[0].id).desc,
                                this._dayTaskPanel._ui.ctlTask1_txtName.text = _.getTask1Des(_.info.dayQuest[1].id).desc
                        }
                        ,
                        s.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnClose":
                                    this._dayTaskPanel.visible && (this._dayTaskPanel.visible = !1);
                                    break;
                                case "btnSpiritStorage":
                                    if (_.checkMatching())
                                        return;
                                    p.openSpiritBag();
                                    break;
                                case "btnMain":
                                    if (_.checkMatching())
                                        return;
                                    this.startMatch();
                                    break;
                                case "btnAchieve":
                                    break;
                                case "btnGiveup":
                                    if (t.target == this._dayTaskPanel._ui.ctlTask0_btnGiveup.target && 0 == this._dayTaskPanel._ui.ctlTask0_btnGiveup.enableTag)
                                        return;
                                    if (t.target == this._dayTaskPanel._ui.ctlTask1_btnGiveup.target && 0 == this._dayTaskPanel._ui.ctlTask1_btnGiveup.enableTag)
                                        return;
                                    this.curTask = Number(String(t.target.parent.name).charAt(7)),
                                        h.requestGiveupTask(this.curTask + 1, function(t) {
                                            y.setWaiting(!1),
                                                0 == t.retInfo.retCode ? (_.info.dayQuest = t.dayQuest,
                                                    this.updateTask()) : u.showMsgBox(p.byteToString(t.retInfo.retMsg))
                                        }
                                            .bind(this))
                            }
                        }
                        ,
                        s.startMatch = function() {
                            this.topOwner.showMatching(),
                                _.oldWinPoint = _.info.winPoint,
                                _.oldCurLevel = _.curLevel,
                                h.requestMatch(this.matchData, this.processMatch.bind(this))
                        }
                        ,
                        s.onNpcCombatCallBack = function(t) {
                            -1 != t && (I.plugin && I.plugin.createMainWinPanel1(this.fType),
                                this._resultPanel.visible = !0,
                                this._resultPanel.showResult(t, this.fType))
                        }
                        ,
                        n
                }(v));
                var x = function(t) {
                    function e() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._icon = void 0,
                            i._txtWinPoint = void 0,
                            i._txtWinTimes = void 0,
                            i._txtCount = void 0,
                            i._txtTitle = void 0,
                            i
                    }
                    return i(e, t),
                        n(e, [{
                            key: "icon",
                            get: function() {
                                return this._icon || (this._icon = new r(this.getChildByName("icon"))),
                                    this._icon
                            }
                        }, {
                            key: "txtWinPoint",
                            get: function() {
                                return this._txtWinPoint || (this._txtWinPoint = new r(this.getChildByName("txtWinPoint"))),
                                    this._txtWinPoint
                            }
                        }, {
                            key: "txtWinTimes",
                            get: function() {
                                return this._txtWinTimes || (this._txtWinTimes = new r(this.getChildByName("txtWinTimes"))),
                                    this._txtWinTimes
                            }
                        }, {
                            key: "txtCount",
                            get: function() {
                                return this._txtCount || (this._txtCount = new r(this.getChildByName("txtCount"))),
                                    this._txtCount
                            }
                        }, {
                            key: "txtTitle",
                            get: function() {
                                return this._txtTitle || (this._txtTitle = new r(this.getChildByName("txtTitle"))),
                                    this._txtTitle
                            }
                        }]),
                        e
                }(r)
                    , M = function(t) {
                    function e() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._btnClose = void 0,
                            i._view_1 = void 0,
                            i._viewTxtCount = void 0,
                            i._btnShowBanSpirit = void 0,
                            i._btnShowDayTask = void 0,
                            i._txtMatchTimes = void 0,
                            i._btnShowIntroduce = void 0,
                            i._openPeakPanelBtn = void 0,
                            i._btnShowRewardIntroduce = void 0,
                            i._btnShowRank = void 0,
                            i._btnReward = void 0,
                            i._btnShowHistory = void 0,
                            i._btnUnopen = void 0,
                            i._btnMain = void 0,
                            i._txtProgress = void 0,
                            i._btnSpiritStorage = void 0,
                            i._spiritRecoveryButton = void 0,
                            i._redprogress = void 0,
                            i._blueprogress = void 0,
                            i._list = void 0,
                            i._dayTaskPanel = void 0,
                            i._banSpiritPanel = void 0,
                            i._rewardExchangePanel = void 0,
                            i._resultPanel = void 0,
                            i
                    }
                    return i(e, t),
                        n(e, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new r(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "view_1",
                            get: function() {
                                return this._view_1 || (this._view_1 = new x(this.getChildByName("view_1"))),
                                    this._view_1
                            }
                        }, {
                            key: "viewTxtCount",
                            get: function() {
                                return this._viewTxtCount || (this._viewTxtCount = new r(this.getChildByName("view_1").getChildByName("txtCount"))),
                                    this._viewTxtCount
                            }
                        }, {
                            key: "btnShowBanSpirit",
                            get: function() {
                                return this._btnShowBanSpirit || (this._btnShowBanSpirit = new r(this.getChildByName("btnShowBanSpirit"))),
                                    this._btnShowBanSpirit
                            }
                        }, {
                            key: "btnShowDayTask",
                            get: function() {
                                return this._btnShowDayTask || (this._btnShowDayTask = new r(this.getChildByName("btnShowDayTask"))),
                                    this._btnShowDayTask
                            }
                        }, {
                            key: "txtMatchTimes",
                            get: function() {
                                return this._txtMatchTimes || (this._txtMatchTimes = new r(this.getChildByName("txtMatchTimes"))),
                                    this._txtMatchTimes
                            }
                        }, {
                            key: "btnShowIntroduce",
                            get: function() {
                                return this._btnShowIntroduce || (this._btnShowIntroduce = new r(this.getChildByName("btnShowIntroduce"))),
                                    this._btnShowIntroduce
                            }
                        }, {
                            key: "openPeakPanelBtn",
                            get: function() {
                                return this._openPeakPanelBtn || (this._openPeakPanelBtn = new r(this.getChildByName("openPeakPanelBtn"))),
                                    this._openPeakPanelBtn
                            }
                        }, {
                            key: "btnShowRewardIntroduce",
                            get: function() {
                                return this._btnShowRewardIntroduce || (this._btnShowRewardIntroduce = new r(this.getChildByName("btnShowRewardIntroduce"))),
                                    this._btnShowRewardIntroduce
                            }
                        }, {
                            key: "btnShowRank",
                            get: function() {
                                return this._btnShowRank || (this._btnShowRank = new r(this.getChildByName("btnShowRank"))),
                                    this._btnShowRank
                            }
                        }, {
                            key: "btnReward",
                            get: function() {
                                return this._btnReward || (this._btnReward = new r(this.getChildByName("btnReward"))),
                                    this._btnReward
                            }
                        }, {
                            key: "btnShowHistory",
                            get: function() {
                                return this._btnShowHistory || (this._btnShowHistory = new r(this.getChildByName("btnShowHistory"))),
                                    this._btnShowHistory
                            }
                        }, {
                            key: "btnUnopen",
                            get: function() {
                                return this._btnUnopen || (this._btnUnopen = new r(this.getChildByName("btnUnopen"))),
                                    this._btnUnopen
                            }
                        }, {
                            key: "btnMain",
                            get: function() {
                                return this._btnMain || (this._btnMain = new r(this.getChildByName("btnMain"))),
                                    this._btnMain
                            }
                        }, {
                            key: "txtProgress",
                            get: function() {
                                return this._txtProgress || (this._txtProgress = new r(this.getChildByName("txtProgress"))),
                                    this._txtProgress
                            }
                        }, {
                            key: "btnSpiritStorage",
                            get: function() {
                                return this._btnSpiritStorage || (this._btnSpiritStorage = new r(this.getChildByName("btnSpiritStorage"))),
                                    this._btnSpiritStorage
                            }
                        }, {
                            key: "spiritRecoveryButton",
                            get: function() {
                                return this._spiritRecoveryButton || (this._spiritRecoveryButton = new r(this.getChildByName("spiritRecoveryButton"))),
                                    this._spiritRecoveryButton
                            }
                        }, {
                            key: "redprogress",
                            get: function() {
                                return this._redprogress || (this._redprogress = new r(this.getChildByName("redprogress"))),
                                    this._redprogress
                            }
                        }, {
                            key: "blueprogress",
                            get: function() {
                                return this._blueprogress || (this._blueprogress = new r(this.getChildByName("progress"))),
                                    this._blueprogress
                            }
                        }, {
                            key: "list",
                            get: function() {
                                return this._list || (this._list = new r(this.getChildByName("list"))),
                                    this._list
                            }
                        }, {
                            key: "dayTaskPanel",
                            get: function() {
                                return this._dayTaskPanel ? this._list : (this._dayTaskPanel = new r(this.getChildByName("dayTaskPanel")),
                                    this._dayTaskPanel)
                            }
                        }, {
                            key: "banSpiritPanel",
                            get: function() {
                                return this._banSpiritPanel || (this._banSpiritPanel = new r(this.getChildByName("banSpiritPanel"))),
                                    this._banSpiritPanel
                            }
                        }, {
                            key: "rewardExchangePanel",
                            get: function() {
                                return this._rewardExchangePanel || (this._rewardExchangePanel = new r(this.getChildByName("rewardExchangePanel"))),
                                    this._rewardExchangePanel
                            }
                        }, {
                            key: "resultPanel",
                            get: function() {
                                return this._resultPanel || (this._resultPanel = new r(this.getChildByName("resultPanel"))),
                                    this._resultPanel
                            }
                        }]),
                        e
                }(r);
                s._RF.pop()
            }
        }
    }
));
