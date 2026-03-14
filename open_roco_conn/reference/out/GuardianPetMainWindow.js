System.register("chunks:///_virtual/GuardianPetMainWindow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./ADFCmdsType.ts", "./NetManager.ts", "./CFunction.ts", "./CommFunction.ts", "./EffectManager.ts", "./GuardianPetWindowManager.ts", "./GuardianPetMainUIVO.ts", "./GuardianPetCtlCheckBox.ts", "./GuardianPetCtlProgressBar.ts", "./GuardianPetIdleIcon.ts", "./WindowBase.ts", "./AgentNode.ts", "./ResManager.ts", "./Loader.ts", "./URLRequest.ts", "./DEFINE.ts", "./PTB_0x03227C_GuidanceOperate_C2S.ts", "./PTB_0x03227C_GuidanceOperate_S2C.ts"], (function(t) {
        var i, e, n, s, a, o, u, r, h, _, c, d, l, g, m, f, p, C, v, y, x, b, P, N, k, B;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        a = t.NodeEventType,
                        o = t.sys
                }
                , function(t) {
                    u = t.Constants
                }
                , function(t) {
                    r = t.__global
                }
                , function(t) {
                    h = t.ADFCmdsType
                }
                , function(t) {
                    _ = t.NetManager
                }
                , function(t) {
                    c = t.CFunction
                }
                , function(t) {
                    d = t.CommFunction
                }
                , function(t) {
                    l = t.EffectManager
                }
                , function(t) {
                    g = t.GuardianPetWindowManager
                }
                , function(t) {
                    m = t.GuardianPetMainUIVO
                }
                , function(t) {
                    f = t.GuardianPetCtlCheckBox
                }
                , function(t) {
                    p = t.GuardianPetCtlProgressBar
                }
                , function(t) {
                    C = t.GuardianPetIdleIcon
                }
                , function(t) {
                    v = t.WindowBase
                }
                , function(t) {
                    y = t.AgentNode
                }
                , function(t) {
                    x = t.default
                }
                , function(t) {
                    b = t.Loader
                }
                , function(t) {
                    P = t.URLRequest
                }
                , function(t) {
                    N = t.DEFINE
                }
                , function(t) {
                    k = t.PTB_0x03227C_GuidanceOperate_C2S
                }
                , function(t) {
                    B = t.PTB_0x03227C_GuidanceOperate_S2C
                }
            ],
            execute: function() {
                s._RF.push({}, "8c88bLiiNdP8rdA9VXBNmKT", "GuardianPetMainWindow", void 0);
                var D = t("GuardianPetMainWindow", function(t) {
                    function s(i, e) {
                        var s;
                        void 0 === i && (i = null),
                        void 0 === e && (e = !1),
                            (s = t.call(this) || this)._ui = void 0,
                            s._guardianPetIcon = void 0,
                            s._data = void 0,
                            s._followChk = void 0,
                            s._progressBar = void 0,
                            s._curGuardianPetID = void 0,
                            s._curGuardianPetLv = void 0,
                            s._curExp = void 0,
                            s._totalNeedExp = void 0,
                            s._curAvatarID = void 0,
                            s._curPhase = void 0,
                            s._needDelay = !1,
                            s._dailyGiftGot = void 0,
                            s._dailyGiftNum = void 0,
                            s.uiLogic = void 0,
                            s._alertWin = void 0,
                            s._pillNum = void 0,
                            s._highestLv = void 0;
                        var h = x.Instance.getPrefabByName("guardianPet/GuardianPetUI_1600");
                        return s._ui = new L(h),
                            s.addChild(s._ui.target),
                            s._highestLv = r.SysAPI.getGDataAPI().getDataProxy(u.GUARDIANPET_DATA).getHighestLv(),
                            s.initUI(),
                            l.getInstance().initialize(s._ui.target),
                            s.initialize(i, s._ui.bg.target, null, null, e),
                            s._ui.btnClose.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s._ui.mcLvTree.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s._ui.mcChkFollow.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s._ui.mcStatus.btnOneKey.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s._ui.mcStatus.btnLevelUp.on(a.TOUCH_END, s.onWinClick, n(s)),
                            o.platform == o.Platform.MOBILE_BROWSER ? (s._ui.giftNode.on(a.TOUCH_START, s.onWinOver, n(s)),
                                s._ui.giftNode.on(a.TOUCH_CANCEL, s.onWinOut, n(s)),
                                s._ui.giftNode.on(a.TOUCH_END, s.onWinOut, n(s))) : (s._ui.giftNode.on(a.MOUSE_ENTER, s.onWinOver, n(s)),
                                s._ui.giftNode.on(a.MOUSE_LEAVE, s.onWinOut, n(s))),
                            s._ui.giftNodeTips.visible = !1,
                            s._ui.onekey.init(),
                            s._ui.onekey.btnConfirm.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s._ui.onekey.btnClosePop.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s._ui.getState.btnOpenGetGift.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s._ui.firstTIme.btnFirstTime.on(a.TOUCH_END, s.onWinClick, n(s)),
                            s.center(),
                            s
                    }
                    i(s, t);
                    var v = s.prototype;
                    return v.onWinOver = function(t) {
                        "btnLevelUp" == t.target.name ? this._ui.consumeTips.visible = !0 : "giftNode" == t.target.name && (this._ui.giftNodeTips.visible = !0)
                    }
                        ,
                        v.onWinOut = function(t) {
                            "btnLevelUp" == t.target.name ? this._ui.consumeTips.visible = !1 : "giftNode" == t.target.name && (this._ui.giftNodeTips.visible = !1)
                        }
                        ,
                        v.onWinClick = function(t) {
                            var i = r.MainRoleData.isVip;
                            switch (t.target.name) {
                                case "mcLvTree":
                                    this.uiLogic.close(),
                                        g.getInstance().openVipAvatarWind(this._curGuardianPetID);
                                    break;
                                case "btnFeed":
                                    this._needDelay = !0,
                                        this.uiLogic.feed();
                                    break;
                                case "btnLevelUp":
                                    this.showLevelupConfirm();
                                    break;
                                case "btnGetGift":
                                    if (!i)
                                        return void r.showMsgBox("你还不是VIP，不能领取礼包哦！快去开通VIP吧！", 1, new c(this.toBeVip,this));
                                    this.uiLogic.getDailyGift();
                                    break;
                                case "btnOpenGetGift":
                                    if (this._dailyGiftGot)
                                        return r.showMsgBox("今天你已经领过礼包了，明天再来吧！"),
                                            void this.hideAlert();
                                    this.uiLogic.getDailyGift();
                                    break;
                                case "closeAlertBtn":
                                    this.hideAlert();
                                    break;
                                case "openVip":
                                    this.toBeVip(),
                                        this.hideAlert();
                                    break;
                                case "btnOpenSkin":
                                    this.uiLogic.close(),
                                        g.getInstance().openVipAvatarWind(this._curGuardianPetID);
                                    break;
                                case "btnToBeVip":
                                    this.toBeVip();
                                    break;
                                case "mcChkFollow":
                                    this.uiLogic.setFollowState();
                                    break;
                                case "btnOneKey":
                                    this._ui.onekey.visible = !0,
                                        this._ui.onekey.inputCount.text = "1",
                                        this._ui.onekey.txtCount.text = this.pillNum + "",
                                        this._ui.onekey.txtCount1.text = "（当前拥有灵兽丹：" + this.pillNum + "）",
                                        this._guardianPetIcon.visible = !1;
                                    break;
                                case "btnConfirm":
                                    var e = Number(this._ui.onekey.inputCount.text);
                                    if (e <= 0)
                                        return;
                                    if (e > this.pillNum)
                                        return void r.SysAPI.getUISysAPI().commUIManager.alert("", "灵兽丹不足");
                                    this.uiLogic.multfeed(e),
                                        this._ui.onekey.visible = !1;
                                case "btnClosePop":
                                    this._ui.onekey.visible = !1,
                                        this._guardianPetIcon.visible = !0;
                                    break;
                                case "btnConfirmLevelup":
                                    this.msgBoxHandler(1),
                                        this._guardianPetIcon.visible = !0,
                                        this._ui.levelupConfirm.visible = !1;
                                    break;
                                case "btnCloseConfirm":
                                    this._guardianPetIcon.visible = !0,
                                        this._ui.levelupConfirm.visible = !1;
                                    break;
                                case "btnFirstTime":
                                    d.setWaiting(!0);
                                    var n = new k;
                                    n.type = 1,
                                        _.send(h.T_GUARDIANPET_GUIDANCE, n, B, this.firstTimeHandler.bind(this));
                                    break;
                                case "btnClose":
                                    this.dispose()
                            }
                        }
                        ,
                        v.firstTimeHandler = function(t) {
                            d.setWaiting(!1),
                                this._ui.firstTIme.visible = !1,
                                this._guardianPetIcon.visible = !0,
                                r.showItemPanel([{
                                    id: t.item.id,
                                    count: t.item.count
                                }]),
                                g.getInstance().openMainWind()
                        }
                        ,
                        v.showLevelupConfirm = function() {
                            var t = r.SysAPI.getGDataAPI().getDataProxy(u.GUARDIANPET_DATA).selectConsumeByLv(this._curGuardianPetLv);
                            this._guardianPetIcon.visible = !1,
                                this._ui.levelupConfirm.visible = !0,
                                this._ui.levelupConfirm.txtCost.text = "升级需要" + t + "洛克贝"
                        }
                        ,
                        v.msgBoxHandler = function(t) {
                            1 == t && (this._needDelay = !1,
                                this.uiLogic.levelUp())
                        }
                        ,
                        v.showAlert = function() {}
                        ,
                        v.hideAlert = function() {}
                        ,
                        v.toBeVip = function() {
                            r.linkToVipPayPage({
                                ctag: "shouhu"
                            })
                        }
                        ,
                        v.openCurWin = function() {}
                        ,
                        v.closeCurWin = function() {
                            t.prototype.close.call(this)
                        }
                        ,
                        v.initUI = function() {
                            this._ui.mcStatus.gotoAndStop(1),
                                this._ui.getState.gotoAndStop(1),
                                this._ui.consumeTips.visible = !1,
                                this._ui.onekey.visible = !1,
                                this._ui.levelupConfirm.visible = !1,
                                this._ui.levelupConfirm.btnConfirmLevelup.on(a.TOUCH_END, this.onWinClick, this),
                                this._ui.levelupConfirm.btnCloseConfirm.on(a.TOUCH_END, this.onWinClick, this),
                                this._ui.txtName.text = "",
                                this._ui.mcLvTree.mouseChildren = !1,
                                this._ui.mcLvTree.buttonMode = !0,
                                this._ui.mcLvTree.tooltip = "守护兽外观",
                                this._ui.mcPropTips.mouseChildren = !1,
                                this._ui.mcPropTips.tooltip = "能力加成在战斗中生效!",
                                this._followChk = new f(this._ui.mcChkFollow.target),
                                this._followChk.selected = !1,
                                this._progressBar = new p(this._ui.mcProgressBar.target),
                                this._progressBar.total = 0,
                                this._progressBar.current = 0,
                                this.initSpiritIcon()
                        }
                        ,
                        v.getFollowState = function() {
                            return 1 == this._followChk.selected ? 1 : 0
                        }
                        ,
                        v.initSpiritIcon = function() {
                            this._guardianPetIcon = new C(s.ICON_W,s.ICON_H,!1),
                                this._guardianPetIcon.mouseChildren = !1,
                                this._guardianPetIcon.mouseEnabled = !1,
                                this._guardianPetIcon.uiContainer = this._ui.target,
                                this._guardianPetIcon.x = s.ICON_X,
                                this._guardianPetIcon.y = s.ICON_Y,
                                this._guardianPetIcon.setMask(s.ICON_W, s.ICON_H),
                                0 == g.getInstance().finishFlag ? (this._ui.firstTIme.visible = !0,
                                    this._guardianPetIcon.visible = !1) : this._ui.firstTIme.visible = !1
                        }
                        ,
                        v.setIcon = function(t) {
                            null == this._guardianPetIcon && this.initSpiritIcon(),
                            t != this._curAvatarID && this._guardianPetIcon.load1(t),
                                this._curAvatarID = t
                        }
                        ,
                        v.getPill = function() {
                            this.pillNum += this._dailyGiftNum
                        }
                        ,
                        v.processData = function(t) {
                            this._ui.txtLv.text = "Lv" + t.guardianPetData.level,
                                this.pillNum = t.pillNum,
                                this._ui.txtEnergyBonus.text = "+" + t.guardianPetData.guardianPetDes.energyBonus,
                                this._ui.txtAttackBonus.text = "+" + t.guardianPetData.guardianPetDes.attackBonus,
                                this._ui.txtDefendBonus.text = "+" + t.guardianPetData.guardianPetDes.defendBonus,
                                this._ui.txtMagicAttack.text = "+" + t.guardianPetData.guardianPetDes.magicAttackBonus,
                                this._ui.txtMagicDefend.text = "+" + t.guardianPetData.guardianPetDes.magicDefendBonus,
                                this._progressBar.total = this._totalNeedExp = t.nextLv_exp,
                                this._curGuardianPetLv = t.guardianPetData.level;
                            var i = r.SysAPI.getGDataAPI().getDataProxy(u.GUARDIANPET_DATA).selectConsumeByLv(this._curGuardianPetLv);
                            this._ui.consumeTips.txtNum.htmlText = "升级需要消耗" + i + "洛克贝",
                                this._curPhase = t.guardianPetData.guardianPetDes.phase,
                                this._curExp = t.cur_exp;
                            var e = 100 * t.guardianPetData.typeID + this._curPhase;
                            this.setIcon(e),
                                this._progressBar.current = t.cur_exp,
                                this._curGuardianPetLv >= this._highestLv ? this._progressBar.setFullProgress() : this._progressBar.setProgress(1)
                        }
                        ,
                        v.checkLv = function(t) {
                            t.cur_exp >= t.nextLv_exp ? this._ui.mcStatus.gotoAndStop(2) : this._ui.mcStatus.gotoAndStop(1),
                                this._curGuardianPetLv = this._data.guardianPetData.level;
                            var i = r.SysAPI.getGDataAPI().getDataProxy(u.GUARDIANPET_DATA).selectConsumeByLv(this._curGuardianPetLv);
                            this._ui.consumeTips.txtNum.htmlText = "升级需要消耗" + i + "洛克贝",
                                this.pillNum = this._data.pillNum
                        }
                        ,
                        v.dispose = function() {
                            this._guardianPetIcon && (this._guardianPetIcon.dispose(),
                                this._guardianPetIcon = null),
                                l.getInstance().dispose(),
                                g.getInstance().dispose(),
                                this._ui.target.destroy(),
                                this.destroy(),
                                t.prototype.close.call(this)
                        }
                        ,
                        e(s, [{
                            key: "data",
                            set: function(t) {
                                var i;
                                if (this._data = t,
                                    this._data)
                                    switch (this._curGuardianPetID = this._data.guardianPetData.typeID,
                                        this._ui.txtName.text = this._data.guardianPetData.guardianPetDes.name,
                                        this._data.dataSrc) {
                                        case m.DATA_SRC_QUERY:
                                            this._dailyGiftNum = this._data.dailyGiftNum,
                                                this._dailyGiftGot = this._data.dailyGiftGot,
                                                this._followChk.selected = 1 == this._data.isFollowing,
                                                this._ui.txtLv.text = "Lv" + this._data.guardianPetData.level,
                                                this.pillNum = this._data.pillNum,
                                                this._curGuardianPetID = this._data.guardianPetData.typeID,
                                                this._curGuardianPetLv = this._data.guardianPetData.level,
                                                0 == this._dailyGiftGot ? this._ui.getState.gotoAndStop(1) : this._ui.getState.gotoAndStop(2);
                                            var e = r.SysAPI.getGDataAPI().getDataProxy(u.GUARDIANPET_DATA).selectConsumeByLv(this._curGuardianPetLv);
                                            this._ui.consumeTips.txtNum.htmlText = "升级需要消耗" + e + "洛克贝",
                                                this._curPhase = this._data.guardianPetData.guardianPetDes.phase,
                                                i = 100 * this._data.guardianPetData.typeID + this._data.guardianPetData.guardianPetDes.phase,
                                                this.setIcon(i),
                                                this._ui.txtEnergyBonus.text = "+" + this._data.guardianPetData.guardianPetDes.energyBonus,
                                                this._ui.txtAttackBonus.text = "+" + this._data.guardianPetData.guardianPetDes.attackBonus,
                                                this._ui.txtDefendBonus.text = "+" + this._data.guardianPetData.guardianPetDes.defendBonus,
                                                this._ui.txtMagicAttack.text = "+" + this._data.guardianPetData.guardianPetDes.magicAttackBonus,
                                                this._ui.txtMagicDefend.text = "+" + this._data.guardianPetData.guardianPetDes.magicDefendBonus,
                                                this._curExp = this._data.cur_exp,
                                                this._progressBar.total = this._totalNeedExp = this._data.nextLv_exp,
                                                this._progressBar.current = this._data.cur_exp,
                                                this._curGuardianPetLv < this._highestLv ? (this._totalNeedExp <= this._data.cur_exp ? this._ui.mcStatus.gotoAndStop(2) : this._ui.mcStatus.gotoAndStop(1),
                                                    this._progressBar.setProgress(1)) : (this._ui.mcStatus.gotoAndStop(3),
                                                    this._progressBar.total = this._progressBar.current = this._data.nextLv_exp,
                                                    this._progressBar.setProgress(1));
                                            break;
                                        case m.DATA_SRC_FEED:
                                            this.curExp = this._data.cur_exp,
                                                this._progressBar.total = this._totalNeedExp = this._data.nextLv_exp,
                                                this._progressBar.current = this._data.cur_exp,
                                                this._progressBar.setProgress(2);
                                            break;
                                        case m.DATA_SRC_LEVELUP:
                                            this._data.guardianPetData.guardianPetDes.phase > this._curPhase ? l.getInstance().playAdavanceEffect(this.processData.bind(this), this._data) : l.getInstance().playLevelupEffect(this.processData.bind(this), this._data),
                                                this._data.guardianPetData.level >= this._highestLv ? (this._progressBar.total = this._progressBar.current = this._data.nextLv_exp,
                                                    this._progressBar.setProgress(1),
                                                    this._ui.mcStatus.gotoAndStop(3)) : this._ui.mcStatus.gotoAndStop(1)
                                    }
                                else
                                    this._ui.txtLv.text = "",
                                        this._ui.txtEnergyBonus.text = "",
                                        this._ui.txtAttackBonus.text = "",
                                        this._ui.txtDefendBonus.text = "",
                                        this._ui.txtMagicAttack.text = "",
                                        this._ui.txtMagicDefend.text = "",
                                        this._followChk.selected = !1,
                                        this._dailyGiftGot = 1,
                                        this.setIcon(0)
                            }
                        }, {
                            key: "dailyGiftGot",
                            get: function() {
                                return this._dailyGiftGot
                            },
                            set: function(t) {
                                this._dailyGiftGot = t,
                                1 == this._dailyGiftGot && this._ui.getState.gotoAndStop(2)
                            }
                        }, {
                            key: "pillNum",
                            get: function() {
                                return this._pillNum
                            },
                            set: function(t) {
                                this._pillNum = t
                            }
                        }, {
                            key: "curExp",
                            get: function() {
                                return this._curExp
                            },
                            set: function(t) {
                                if (t != this._curExp) {
                                    var i = Math.abs(t - this._curExp);
                                    l.getInstance().playNumEffect(i, null, null),
                                        this.checkLv(this._data)
                                }
                                this._curExp = t
                            }
                        }]),
                        s
                }(v));
                D.ICON_X = -256,
                    D.ICON_Y = -76,
                    D.ICON_W = 176,
                    D.ICON_H = 167;
                var I = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._txtNum = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "txtNum",
                            get: function() {
                                return this._txtNum || (this._txtNum = new y(this.getChildByName("txtNum"))),
                                    this._txtNum
                            }
                        }]),
                        n
                }(y)
                    , T = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._btnOneKey = void 0,
                            i._btnLevelUp = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "btnOneKey",
                            get: function() {
                                return this._btnOneKey || (this._btnOneKey = new y(this.getChildByName("btnOneKey"))),
                                    this._btnOneKey
                            }
                        }, {
                            key: "btnLevelUp",
                            get: function() {
                                return this._btnLevelUp || (this._btnLevelUp = new y(this.getChildByName("btnLevelUp"))),
                                    this._btnLevelUp
                            }
                        }]),
                        n
                }(y)
                    , A = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._btnOpenGetGift = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "btnOpenGetGift",
                            get: function() {
                                return this._btnOpenGetGift || (this._btnOpenGetGift = new y(this.getChildByName("btnOpenGetGift"))),
                                    this._btnOpenGetGift
                            }
                        }]),
                        n
                }(y)
                    , L = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._bg = void 0,
                            i._btnClose = void 0,
                            i._giftNode = void 0,
                            i._giftNodeTips = void 0,
                            i._consumeTips = void 0,
                            i._onekey = void 0,
                            i._firstTIme = void 0,
                            i._levelupConfirm = void 0,
                            i._mcStatus = void 0,
                            i._getState = void 0,
                            i._txtName = void 0,
                            i._mcLvTree = void 0,
                            i._mcPropTips = void 0,
                            i._mcChkFollow = void 0,
                            i._mcProgressBar = void 0,
                            i._txtLv = void 0,
                            i._txtEnergyBonus = void 0,
                            i._txtAttackBonus = void 0,
                            i._txtDefendBonus = void 0,
                            i._txtMagicAttack = void 0,
                            i._txtMagicDefend = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new y(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new y(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "giftNode",
                            get: function() {
                                return this._giftNode || (this._giftNode = new y(this.getChildByName("giftNode"))),
                                    this._giftNode
                            }
                        }, {
                            key: "giftNodeTips",
                            get: function() {
                                return this._giftNodeTips || (this._giftNodeTips = new y(this.getChildByName("giftNodeTips"))),
                                    this._giftNodeTips
                            }
                        }, {
                            key: "consumeTips",
                            get: function() {
                                return this._consumeTips || (this._consumeTips = new I(this.getChildByName("consumeTips"))),
                                    this._consumeTips
                            }
                        }, {
                            key: "onekey",
                            get: function() {
                                return this._onekey || (this._onekey = new G(this.getChildByName("onekey"))),
                                    this._onekey
                            }
                        }, {
                            key: "firstTIme",
                            get: function() {
                                return this._firstTIme || (this._firstTIme = new w(this.getChildByName("firstTIme"))),
                                    this._firstTIme
                            }
                        }, {
                            key: "levelupConfirm",
                            get: function() {
                                return this._levelupConfirm || (this._levelupConfirm = new E(this.getChildByName("levelupConfirm"))),
                                    this._levelupConfirm
                            }
                        }, {
                            key: "mcStatus",
                            get: function() {
                                return this._mcStatus || (this._mcStatus = new T(this.getChildByName("mcStatus"))),
                                    this._mcStatus
                            }
                        }, {
                            key: "getState",
                            get: function() {
                                return this._getState || (this._getState = new A(this.getChildByName("getState"))),
                                    this._getState
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new y(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }, {
                            key: "mcLvTree",
                            get: function() {
                                return this._mcLvTree || (this._mcLvTree = new y(this.getChildByName("mcLvTree"))),
                                    this._mcLvTree
                            }
                        }, {
                            key: "mcPropTips",
                            get: function() {
                                return this._mcPropTips || (this._mcPropTips = new y(this.getChildByName("mcPropTips"))),
                                    this._mcPropTips
                            }
                        }, {
                            key: "mcChkFollow",
                            get: function() {
                                return this._mcChkFollow || (this._mcChkFollow = new y(this.getChildByName("mcChkFollow"))),
                                    this._mcChkFollow
                            }
                        }, {
                            key: "mcProgressBar",
                            get: function() {
                                return this._mcProgressBar || (this._mcProgressBar = new y(this.getChildByName("mcProgressBar"))),
                                    this._mcProgressBar
                            }
                        }, {
                            key: "txtLv",
                            get: function() {
                                return this._txtLv || (this._txtLv = new y(this.getChildByName("txtLv"))),
                                    this._txtLv
                            }
                        }, {
                            key: "txtEnergyBonus",
                            get: function() {
                                return this._txtEnergyBonus || (this._txtEnergyBonus = new y(this.getChildByName("txtEnergyBonus"))),
                                    this._txtEnergyBonus
                            }
                        }, {
                            key: "txtAttackBonus",
                            get: function() {
                                return this._txtAttackBonus || (this._txtAttackBonus = new y(this.getChildByName("txtAttackBonus"))),
                                    this._txtAttackBonus
                            }
                        }, {
                            key: "txtDefendBonus",
                            get: function() {
                                return this._txtDefendBonus || (this._txtDefendBonus = new y(this.getChildByName("txtDefendBonus"))),
                                    this._txtDefendBonus
                            }
                        }, {
                            key: "txtMagicAttack",
                            get: function() {
                                return this._txtMagicAttack || (this._txtMagicAttack = new y(this.getChildByName("txtMagicAttack"))),
                                    this._txtMagicAttack
                            }
                        }, {
                            key: "txtMagicDefend",
                            get: function() {
                                return this._txtMagicDefend || (this._txtMagicDefend = new y(this.getChildByName("txtMagicDefend"))),
                                    this._txtMagicDefend
                            }
                        }]),
                        n
                }(y)
                    , G = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._itemID = 67371909,
                            i._iconLoader = void 0,
                            i._minNum = 0,
                            i._maxNum = 99,
                            i._btn_add = void 0,
                            i._btn_sub = void 0,
                            i._mc_icon = void 0,
                            i._txt_name = void 0,
                            i._btnConfirm = void 0,
                            i._btnClosePop = void 0,
                            i._inputCount = void 0,
                            i._txtCount = void 0,
                            i._txtCount1 = void 0,
                            i
                    }
                    i(n, t);
                    var s = n.prototype;
                    return s.init = function() {
                        var t = r.SysAPI.getGDataAPI().getDataProxy(u.ITEM_DATA).select(this._itemID);
                        this.txt_name.string = t.name,
                        this._iconLoader || (this._iconLoader = new b,
                            this.mc_icon.addChild(this._iconLoader)),
                            this._iconLoader.unload(),
                            this._iconLoader.load(new P(N.ITEM_RES_ROOT + "/" + this._itemID + ".png")),
                            this.btn_add.on(a.TOUCH_END, this.onClick, this),
                            this.btn_sub.on(a.TOUCH_END, this.onClick, this)
                    }
                        ,
                        s.onClick = function(t) {
                            switch (t.target.name) {
                                case "btn_add":
                                    Number(this.inputCount.text) < this._maxNum && (this.inputCount.text = (Number(this.inputCount.text) + 1).toString());
                                    break;
                                case "btn_sub":
                                    Number(this.inputCount.text) > 1 && (this.inputCount.text = (Number(this.inputCount.text) - 1).toString())
                            }
                        }
                        ,
                        e(n, [{
                            key: "btn_add",
                            get: function() {
                                return this._btn_add || (this._btn_add = new y(this.getChildByName("btn_add"))),
                                    this._btn_add
                            }
                        }, {
                            key: "btn_sub",
                            get: function() {
                                return this._btn_sub || (this._btn_sub = new y(this.getChildByName("btn_sub"))),
                                    this._btn_sub
                            }
                        }, {
                            key: "mc_icon",
                            get: function() {
                                return this._mc_icon || (this._mc_icon = new y(this.getChildByName("mc_icon"))),
                                    this._mc_icon
                            }
                        }, {
                            key: "txt_name",
                            get: function() {
                                return this._txt_name || (this._txt_name = new y(this.getChildByName("txt_name"))),
                                    this._txt_name
                            }
                        }, {
                            key: "btnConfirm",
                            get: function() {
                                return this._btnConfirm || (this._btnConfirm = new y(this.getChildByName("btnConfirm"))),
                                    this._btnConfirm
                            }
                        }, {
                            key: "btnClosePop",
                            get: function() {
                                return this._btnClosePop || (this._btnClosePop = new y(this.getChildByName("btnClosePop"))),
                                    this._btnClosePop
                            }
                        }, {
                            key: "inputCount",
                            get: function() {
                                return this._inputCount || (this._inputCount = new y(this.getChildByName("inputCount"))),
                                    this._inputCount
                            }
                        }, {
                            key: "txtCount",
                            get: function() {
                                return this._txtCount || (this._txtCount = new y(this.getChildByName("txtCount"))),
                                    this._txtCount
                            }
                        }, {
                            key: "txtCount1",
                            get: function() {
                                return this._txtCount1 || (this._txtCount1 = new y(this.getChildByName("txtCount1"))),
                                    this._txtCount1
                            }
                        }]),
                        n
                }(y)
                    , w = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._btnFirstTime = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "btnFirstTime",
                            get: function() {
                                return this._btnFirstTime || (this._btnFirstTime = new y(this.getChildByName("btnFirstTime"))),
                                    this._btnFirstTime
                            }
                        }]),
                        n
                }(y)
                    , E = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._txtCost = void 0,
                            i._btnConfirmLevelup = void 0,
                            i._btnCloseConfirm = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "txtCost",
                            get: function() {
                                return this._txtCost || (this._txtCost = new y(this.getChildByName("txtCost"))),
                                    this._txtCost
                            }
                        }, {
                            key: "btnConfirmLevelup",
                            get: function() {
                                return this._btnConfirmLevelup || (this._btnConfirmLevelup = new y(this.getChildByName("btnConfirmLevelup"))),
                                    this._btnConfirmLevelup
                            }
                        }, {
                            key: "btnCloseConfirm",
                            get: function() {
                                return this._btnCloseConfirm || (this._btnCloseConfirm = new y(this.getChildByName("btnCloseConfirm"))),
                                    this._btnCloseConfirm
                            }
                        }]),
                        n
                }(y);
                s._RF.pop()
            }
        }
    }
));
