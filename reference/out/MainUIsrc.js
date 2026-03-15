System.register("chunks:///_virtual/MainUIsrc.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./AngelSysEvent.ts", "./ADFCmdsType.ts", "./AngelTcpHelper.ts", "./ProtocolHelper.ts", "./GlobalAPI.ts", "./UserData.ts", "./CombatPlugin.ts", "./HttpRequest.ts", "./AchieveCfgLoader.ts", "./PetAnimationCfgLoader.ts", "./FrameAnimation.ts", "./AppConstDef.ts", "./BuildLogHelper.ts", "./PureNotificationCenter.ts", "./NotificationCenter.ts", "./NotifyDef.ts", "./GAFAnimation.ts", "./global.ts", "./StringUtil.ts", "./AgentNode.ts", "./AnimationLoader.ts", "./SceneDes.ts", "./SpiritAnimationContainerGaf.ts", "./PetResCfgLoader.ts", "./CommonAPI.ts", "./ShowItemAwards.ts", "./CFunction.ts", "./ActivityAPI.ts", "./GiftCenterMessage.ts", "./MarketMessage.ts", "./AvatarPreview.ts", "./OpenAsWinDes.ts", "./ui3101.ts", "./GuardianPetIdleIcon.ts", "./GuardianPetMainWindow.ts", "./GuardianPetUtil.ts", "./RoleDetailData.ts", "./UserInfoDazzleAvatarPreview.ts", "./SentinelIntelligenceEntrance.ts", "./ui3435.ts"], (function(t) {
        var i, e, n, o, a, s, h, r, d, l, c, u, _, g, m, f, v, B, C, p, N, A, I, y, w, S, b, L, D, k, P, T, G, E, M, F, O, R, W, U, x, H, V, z, q, j, K, Q, X, J, Y, Z, $, tt, it, et, nt;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t._decorator,
                        a = t.Event,
                        s = t.Label,
                        h = t.NodeEventType,
                        r = t.Sprite,
                        d = t.Button,
                        l = t.color,
                        c = t.Node,
                        u = t.AnimationClip,
                        _ = t.tween,
                        g = t.v3,
                        m = t.Vec2,
                        f = t.assetManager,
                        v = t.SpriteFrame,
                        B = t.Texture2D,
                        C = t.Animation,
                        p = t.Component
                }
                , function(t) {
                    N = t.Constants
                }
                , function(t) {
                    A = t.AngelSysEvent
                }
                , function(t) {
                    I = t.ADFCmdsType
                }
                , function(t) {
                    y = t.AngelTcpHelper
                }
                , function(t) {
                    w = t.ProtocolHelper
                }
                , function(t) {
                    S = t.GlobalAPI
                }
                , function(t) {
                    b = t.UserData
                }
                , function(t) {
                    L = t.default
                }
                , function(t) {
                    D = t.HttpRequest
                }
                , function(t) {
                    k = t.AchieveCfgLoader
                }
                , function(t) {
                    P = t.PetAnimationCfgLoader
                }
                , function(t) {
                    T = t.FrameAnimation
                }
                , function(t) {
                    G = t.AppConstDef
                }
                , function(t) {
                    E = t.default
                }
                , function(t) {
                    M = t.PureNotificationCenter
                }
                , function(t) {
                    F = t.NotificationCenter
                }
                , function(t) {
                    O = t.NotifyDef
                }
                , function(t) {
                    R = t.GAFAnimation
                }
                , function(t) {
                    W = t.__global
                }
                , function(t) {
                    U = t.StringUtil
                }
                , function(t) {
                    x = t.AgentNode
                }
                , null, function(t) {
                    H = t.SceneDes
                }
                , function(t) {
                    V = t.SpiritAnimationContainerGaf
                }
                , function(t) {
                    z = t.PetResCfgLoader
                }
                , null, null, null, function(t) {
                    q = t.ActivityAPI
                }
                , function(t) {
                    j = t.GiftCenterMessage
                }
                , function(t) {
                    K = t.MarketMessage
                }
                , function(t) {
                    Q = t.AvatarPreview
                }
                , function(t) {
                    X = t.OpenAsWinDes
                }
                , function(t) {
                    J = t.ui3101
                }
                , function(t) {
                    Y = t.GuardianPetIdleIcon
                }
                , function(t) {
                    Z = t.GuardianPetMainWindow
                }
                , function(t) {
                    $ = t.GuardianPetUtil
                }
                , function(t) {
                    tt = t.default
                }
                , function(t) {
                    it = t.UserInfoDazzleAvatarPreview
                }
                , function(t) {
                    et = t.SentinelIntelligenceEntrance
                }
                , function(t) {
                    nt = t.ui3435
                }
            ],
            execute: function() {
                var ot;
                n._RF.push({}, "4251eJzGW5ITajZjQn64fKf", "MainUIsrc", void 0);
                var at = o.ccclass
                    , st = (o.property,
                    o.menu)
                    , ht = (t("default", at(ot = st("AUI/MainUIsrc")(ot = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._mainData = void 0,
                            i.tcpProxy = null,
                            i.receiver = null,
                            i.system = void 0,
                            i.globalData = void 0,
                            i.combatPlugin = void 0,
                            i._money = void 0,
                            i._diamond = void 0,
                            i._label = void 0,
                            i._reconnectBtn = void 0,
                            i._userTitle = void 0,
                            i._avatar = void 0,
                            i._dazzleAvatar = void 0,
                            i._followNode = void 0,
                            i._activityNode = void 0,
                            i._activityBtnArr = [],
                            i._bannerNode = void 0,
                            i._bannerSprArr = [],
                            i._showBtn = void 0,
                            i._hideBtn = void 0,
                            i._btnBox = void 0,
                            i._showIllustrate = !1,
                            i._showShop = !1,
                            i._lunaNode = void 0,
                            i._vip = void 0,
                            i._ui = void 0,
                            i._guardianPetIcon = void 0,
                            i._ani = null,
                            i.isOnce = !0,
                            i._roleData = void 0,
                            i._activityArr = [1, 2, 3, 4, 5, 6, 7, 8],
                            i._bannerArr = [1, 2, 3],
                            i._bannerWidth = 390,
                            i._downTime = 0,
                            i._startX = 0,
                            i._moveEnd = !0,
                            i._nowIndex = 0,
                            i._timeoutId = 0,
                            i.arr = new Array,
                            i._gaf = null,
                            i._isPlay = !0,
                            i
                    }
                    i(n, t);
                    var o = n.prototype;
                    return o.onLoad = function() {}
                        ,
                        o.start = function() {
                            var t, i = this, e = W.GEventAPI.angelEventDispatcher, n = new a(A.ON_SCENEDATA_INIT);
                            e.dispatchEvent(n),
                                this.printTimerLog(),
                                F.addNotification(O.MAIN_UI_SPIRIT_DISPLAY_CHANGED, this.onSpiritIdChanged, this),
                                F.addNotification(O.MAIN_UI_DIAMOND_CHANGED, this.onDiamondChanged, this),
                                F.addNotification(O.MAIN_UI_UPDATE_DIAMOND, this.onDiamondUpdate, this),
                                F.addNotification(O.MAIN_UI_GUARDIANPET_DISPLAY_CHANGED, this.showGuardianPet, this),
                                F.addNotification(O.ON_COMBAT_RES_PRELOAD_DONE, this.onCombatResPreLoadDone, this),
                                this._ui = new rt(this.node),
                                this._ui.TestGAF.visible = E.IS_LOCAL,
                                this._label = this.node.getChildByName("tfLab"),
                                this._label.active = !1,
                                this._money = this.node.getChildByName("node_money").getChildByName("money"),
                                this._money.getComponent(s).string = "0",
                                this._diamond = this.node.getChildByName("node_diamond").getChildByName("diamond"),
                                this._diamond.getComponent(s).string = "0",
                                this._followNode = this.node.getChildByName("node_follow"),
                                this._followNode.setPosition(660, -400),
                                this._bannerNode = this.node.getChildByName("bannerNode"),
                                this._activityNode = this.node.getChildByName("node_activity"),
                                this._lunaNode = this.node.getChildByName("node_menu").getChildByName("node_luna"),
                                this._vip = this.node.getChildByName("node_menu").getChildByName("vip"),
                                this._userTitle = this.node.getChildByName("tfUserTitle"),
                                this.system = S.gAngelSysAPI,
                                this.globalData = this.system.getGDataAPI(),
                                this.combatPlugin = new L,
                                this.combatPlugin.setAngelSysAPI(S.gAngelSysAPI),
                                this._showBtn = this.node.getChildByName("node_menu").getChildByName("btn_show"),
                                this._hideBtn = this.node.getChildByName("node_menu").getChildByName("btn_hide"),
                                this._showBtn.active = !0,
                                this._hideBtn.active = !1,
                                this._showIllustrate = !1,
                                this._btnBox = this.node.getChildByName("node_menu").getChildByName("node_btnBox"),
                                this._btnBox.active = !1,
                                this._ui.menuNode.showShopBtn.visible = !0,
                                this._ui.menuNode.hideShopBtn.visible = !1,
                                this._showShop = !1,
                                this._ui.menuNode.shopBox.visible = !1,
                                this._ui.ladderBtn.on(h.TOUCH_END, this.onClickLadderBtn, this),
                                this._ui.ladderBtn.getComponent(r).grayscale = !0,
                                this._ui.ladderBtn.getComponent(d).enabled = !1,
                                this._ui.seriesBtn.on(h.TOUCH_END, this.onClickSeriesBtn, this),
                                this._ui.matchBtn.on(h.TOUCH_END, this.onClickMatchingBtn, this),
                                this._ui.matchBtn.getComponent(r).grayscale = !0,
                                this._ui.matchBtn.getComponent(d).enabled = !1,
                                this._ui.giftBtn.on(h.TOUCH_END, this.onClickGiftBtn, this),
                                this._ui.feedbackBtn.on(h.TOUCH_END, this.onClickFeedbackBtn, this),
                                this._ui.mailBtn.on(h.TOUCH_END, this.onClickMailBtn, this),
                                this._ui.menuNode.spiritBagBtn.on(h.TOUCH_END, this.onClickSpiritBagBtn, this),
                                this._ui.menuNode.systemBtn.on(h.TOUCH_END, this.onClickSystemBtn, this),
                            null == (t = this.node.getChildByName("TestGAF")) || t.addComponent(et),
                                this.label = "未登录",
                                this.fetch(),
                                this.start1(),
                            1 == E.IS_LOCAL && (y.isDebuggerCombat ? setTimeout((function() {
                                    i.onClickLadderBtn()
                                }
                            ), 200) : y.isDebuggerStorage ? setTimeout((function() {
                                    i.onClickStorageBtn(null)
                                }
                            ), 200) : y.isDebuggerSpiritBagApp && setTimeout((function() {
                                    i.onClickSpiritBagBtn(null)
                                }
                            ), 200)),
                                M.sendNotification(j.SHOW_LOGIN_GIFT_VIEW)
                        }
                        ,
                        o.start1 = function() {
                            var t = this.system.getGDataAPI();
                            this._roleData = t.getGlobalVal(N.MAIN_ROLE_INFO),
                                this.showName(),
                                this.showSpirit(),
                                this.showVip(),
                                this.showGuardianPet(),
                            b.GameStroyData && 1 == b.GameStroyDataFlag && (q.showCgiXmlRewardList(b.GameStroyData),
                                b.GameStroyDataFlag = !1)
                        }
                        ,
                        o.showName = function() {
                            var t, i;
                            this._ui && this._ui.tfUserName && (this._ui.tfUserName.string = (null == (t = this._roleData) ? void 0 : t.nickName) || "",
                                this._ui.tfUserName.color = 1 == ((null == (i = this._roleData) ? void 0 : i.isVip) || !1) ? l(255, 0, 0) : l(0, 0, 0))
                        }
                        ,
                        o.showSpirit = function() {
                            if (this._roleData) {
                                var t = this._roleData.spiritID >> 28 & 15
                                    , i = 268435455 & this._roleData.spiritID
                                    , e = 1e5 + 10 * i + (t - 1);
                                if (0 != t) {
                                    e = 1e5 + 10 * i + (t - 1);
                                    this.loadIdle(e)
                                } else {
                                    var n;
                                    this.loadIdle(0 | (null == (n = this._roleData) ? void 0 : n.spiritID))
                                }
                            }
                        }
                        ,
                        o.showVip = function() {
                            this._ui && this._ui.vipNode && this._roleData && (this._ui.vipNode.visible = 1 == this._roleData.isVip)
                        }
                        ,
                        o.showGuardianPet = function() {
                            if (this._ui && this._ui.avatarNode && this._roleData)
                                if (this._roleData.guardianPetID > 0) {
                                    this._guardianPetIcon || (this._guardianPetIcon = new Y(Z.ICON_W,Z.ICON_H,!1),
                                        this._guardianPetIcon.mouseChildren = !1,
                                        this._guardianPetIcon.mouseEnabled = !1,
                                        this._guardianPetIcon.uiContainer = this._ui.guardianPetNode.target,
                                        this._guardianPetIcon.scaleX = -1,
                                        this._guardianPetIcon.setMask(Z.ICON_W, Z.ICON_H));
                                    var t = $.getGuardianPetIconID(this._roleData.guardianPetID, this._roleData.guardianPetLv);
                                    this._guardianPetIcon.load(t)
                                } else
                                    this._guardianPetIcon && (this._guardianPetIcon.destroy(),
                                        this._guardianPetIcon = null)
                        }
                        ,
                        o.onTestGAFClick = function() {
                            if (0 != this.isOnce) {
                                if (this.isOnce = !1,
                                    !this._ani) {
                                    1 == E.IS_LOCAL && console.log("[jinlong] onTestGAFClick");
                                    var t = this.node.getChildByName("TestGAFRoot");
                                    t || ((t = new c("TestGAFRoot")).parent = this.node);
                                    var i = new c("TestGAF");
                                    i.parent = t;
                                    var e = i.addComponent(R);
                                    i.setPosition(-1500, 360);
                                    var n = z.Instance.getPath(9999);
                                    e.loadWithAnyPlist("", ["gaf/Pet/" + n], [], 24, u.WrapMode.Loop, this.onGAFMvLoadSuccess, this.onGAFMvLoadFail, this),
                                        this._ani = e
                                }
                            } else
                                this.onTestGAFClick2()
                        }
                        ,
                        o.cpuText = function() {
                            for (var t = 0; t < 200; t++)
                                this.onTestGAFClick1(t + 1)
                        }
                        ,
                        o.removeGaf = function() {
                            var t = this.node.getChildByName("TestGAFRoot1");
                            t && t.destroy()
                        }
                        ,
                        o.onTestGAFClick1 = function(t) {
                            1 == E.IS_LOCAL && console.log("[jinlong] onTestGAFClick");
                            var i = this.node.getChildByName("TestGAFRoot1");
                            i || ((i = new c("TestGAFRoot1")).parent = this.node);
                            var e = new c("TestGAF");
                            e.parent = i;
                            var n = e.addComponent(R);
                            e.setPosition(-1200, 360);
                            var o = z.Instance.getPath(t);
                            n.loadWithAnyPlist("", ["gaf/Pet/" + o], [], 24, u.WrapMode.Loop, this.onGAFMvLoadSuccess, this.onGAFMvLoadFail, this)
                        }
                        ,
                        o.audio = function() {}
                        ,
                        o.onTestGAFClick2 = function() {
                            1 == E.IS_LOCAL && console.log("[jinlong] onTestGAFClick");
                            var t = this.node.getChildByName("TestGAFRoot");
                            t || ((t = new c("TestGAFRoot1")).parent = this.node);
                            var i = new c("TestGAF");
                            i.parent = t;
                            var e = i.addComponent(R);
                            i.setPosition(-700, 360);
                            var n = z.Instance.getPath(9999);
                            e.loadWithAnyPlist("", ["gaf/Pet/" + n], [], 24, u.WrapMode.Loop, this.onGAFMvLoadSuccess, this.onGAFMvLoadFail, this)
                        }
                        ,
                        o.onGAFMvLoadSuccess = function(t) {
                            1 == E.IS_LOCAL && console.log("[jinlong] onGAFMvLoadSuccess"),
                                t.getComponent(R).play("Spirit", "APPEAR")
                        }
                        ,
                        o.onGAFMvLoadFail = function() {
                            1 == E.IS_LOCAL && console.log("[jinlong] onGAFMvLoadFail")
                        }
                        ,
                        o.onCombatResPreLoadDone = function() {
                            var t = this;
                            E.IS_LOCAL && y.isDebuggerCombat && 1 == E.IS_LOCAL && setTimeout((function() {
                                    t.onClickLadderBtn()
                                }
                            ), 200),
                                this._ui.ladderBtn.getComponent(r).grayscale = !1,
                                this._ui.ladderBtn.getComponent(d).enabled = !0,
                                this._ui.matchBtn.getComponent(r).grayscale = !1,
                                this._ui.matchBtn.getComponent(d).enabled = !0
                        }
                        ,
                        o.onDisable = function() {
                            this._timeoutId > 0 && clearTimeout(this._timeoutId)
                        }
                        ,
                        o.showRecButton = function() {
                            this._reconnectBtn.active = !0
                        }
                        ,
                        o.hideRecButton = function() {
                            this._reconnectBtn.active = !1
                        }
                        ,
                        o.onTCPConnectError = function(t) {
                            this.label = "WebSocket连接异常，点击按钮可重新连接",
                                this.showRecButton()
                        }
                        ,
                        o.onTCPConnect = function(t) {
                            1 == E.IS_LOCAL && console.info("WebSocket连接成功" + S.getTimerFormat()),
                                this.label = "WebSocket连接成功",
                                this.hideRecButton();
                            t.getTCPID();
                            this.sendLoginConnData(I.T_LoginRoom, {
                                roomID: b.recServerIdx,
                                key: b.sessionKey,
                                uin: b.uin
                            })
                        }
                        ,
                        o.sendLoginConnData = function(t, i) {
                            var e;
                            void 0 === t && (t = -1),
                            void 0 === i && (i = null),
                            1 == E.IS_LOCAL && console.info("sendLoginConnData"),
                            null == (e = this.receiver) || e.sendData(1, t, i)
                        }
                        ,
                        o.dataHandle = function(t, i) {
                            var e = this;
                            switch (1 == E.IS_LOCAL && console.info("dataHandle===" + t + "==" + i),
                                t) {
                                case I.T_LoginRoom:
                                    this.hideRecButton(),
                                        this.label = "登录成功";
                                    var n = i;
                                    if (CONFIG.DEBUG && console.log("登录返回码:", n.returnCode.message),
                                    -101 == n.returnCode.code)
                                        ;
                                    else if (-143 == n.returnCode.code)
                                        ;
                                    else if (-103 == n.returnCode.code)
                                        ;
                                    else if (n.returnCode.code < 0)
                                        ;
                                    else {
                                        this._roleData = n.mainRole,
                                            this.loadIdle(this._roleData.spiritID);
                                        var o = this.system.getGDataAPI();
                                        o.addGlobalVal(N.MAIN_ROLE_INFO, n.mainRole),
                                            this.showMainDataLogin(),
                                            S.roleData = n.mainRole;
                                        var a = new H;
                                        a.sceneID = n.sceneID,
                                            a.sceneVersion = n.sceneVer,
                                            o.addGlobalVal(N.WANT_TO_SCENE, a);
                                        var s = new A(A.LOGIN_OK);
                                        s.data = this.getPlugName(),
                                            w.USERUIN = n.mainRole.uin,
                                            this.system.getGEventAPI().angelEventDispatcher.dispatchEvent(s)
                                    }
                                    S.isLogin = !0;
                                    var h = {
                                        cmd: 0,
                                        unkown: "@EPuLiMQuf",
                                        skey: "@EPuLiMQuf",
                                        platfrom: 2,
                                        angel_uin: b.uin,
                                        angel_key: b.sessionKey,
                                        time: (new Date).getTime()
                                    };
                                    D.Instance.getWithParamsByTxt("https://17roco.qq.com/cgi-bin/h5_panel", h, this._completeCallback.bind(this), this._errorCallback.bind(this)),
                                    1 == E.IS_LOCAL && (y.isDebuggerCombat ? setTimeout((function() {
                                            e.onClickLadderBtn()
                                        }
                                    ), 200) : y.isDebuggerStorage ? setTimeout((function() {
                                            e.onClickStorageBtn(null)
                                        }
                                    ), 200) : y.isDebuggerSpiritBagApp && setTimeout((function() {
                                            e.onClickSpiritBagBtn(null)
                                        }
                                    ), 200))
                            }
                        }
                        ,
                        o.showMainDataLogin = function() {
                            this._ui && this._ui.tfUserName && (this._ui.tfUserName.string = this._roleData.nickName,
                                this._ui.tfUserName.color = 1 == this._roleData.isVip ? l(255, 0, 0) : l(0, 0, 0))
                        }
                        ,
                        o._completeCallback = function(t) {
                            var i = JSON.parse(t);
                            if (i && i.angel)
                                if (0 == Number(i.angel.result.value)) {
                                    this._mainData = i.angel;
                                    var e = this._mainData.follow;
                                    1 == E.IS_LOCAL && console.log("_completeCallback=followId=" + e),
                                        this._showMainData()
                                } else
                                    console.error("拉取主界面信息失败:" + i.angel.result.msg)
                        }
                        ,
                        o.onDiamondUpdate = function(t, i) {
                            this.fetch()
                        }
                        ,
                        o.onDiamondChanged = function(t, i) {
                            this._diamond.getComponent(s).string = U.caculateMoneyStr(i)
                        }
                        ,
                        o._showMainData = function() {
                            this._money.getComponent(s).string = U.caculateMoneyStr(this._mainData.money),
                                this._diamond.getComponent(s).string = U.caculateMoneyStr(this._mainData.diamond),
                                this.showBadge(),
                                this.showTitle(),
                                this.loadVipRes(),
                                this.loadAvatar(),
                                this.loadBanner(),
                                this.loadActivity()
                        }
                        ,
                        o.showNameCard = function(t) {
                            t && t instanceof tt && (this._ui.nameCardNode.removeAllChildren(),
                                t.dazzleAvatar ? this.loadNameCard(t.daAvatar[it.NAMEBG]) : this.loadNameCard(t.namebgId))
                        }
                        ,
                        o.loadNameCard = function(t) {
                            if (this._roleData && t > 0) {
                                var i = t + "-0"
                                    , e = "avatar/13/";
                                [44, 437, 622].indexOf(t) > -1 && (e = "avatar_new/27/");
                                var n = [e + i];
                                this.addFrameAnimation(this._ui.nameCardNode.target, n, [])
                            }
                        }
                        ,
                        o.showBadge = function() {
                            this._ui.badgeNode.target.removeAllChildren();
                            var t = Number(this._mainData.medal);
                            if (t > 0) {
                                var i = ["badge/" + (t + "-0")];
                                this.addFrameAnimation(this._ui.badgeNode.target, i, [])
                            }
                        }
                        ,
                        o.loadActivity = function() {
                            this._activityNode.removeAllChildren()
                        }
                        ,
                        o.onActivityBtnDown = function(t) {
                            var i = t.currentTarget;
                            1 == E.IS_LOCAL && console.log("按下活动Activity:" + i.name)
                        }
                        ,
                        o.showTitle = function() {
                            var t = Number(this._mainData.titleid)
                                , i = Number(this._mainData.titlelv)
                                , e = k.Instance.getTitleData(t, i)
                                , n = "";
                            e && (n = e.level.label),
                                this._userTitle.getComponent(s).string = n
                        }
                        ,
                        o.loadBanner = function() {}
                        ,
                        o.onBannerDown = function(t) {
                            if (this._moveEnd) {
                                this._downTime = (new Date).getTime();
                                var i = this._nowIndex;
                                1 == E.IS_LOCAL && console.log("按下活动Banner:" + this._bannerArr[i]),
                                    this._startX = t.getLocation().x
                            }
                        }
                        ,
                        o.onBannerUp = function(t) {
                            if (this._moveEnd) {
                                var i = (new Date).getTime()
                                    , e = t.getLocation().x - this._startX
                                    , n = this._nowIndex;
                                if (this._downTime > 0 && i - this._downTime < 150)
                                    this._downTime = 0,
                                    1 == E.IS_LOCAL && console.log("按下活动Banner:" + this._bannerArr[n]);
                                else if (Math.abs(e) > 50) {
                                    var o = 0;
                                    e < 0 && (o = 1),
                                        this._downTime = 0,
                                        this.bannerRun(o, !0),
                                    1 == E.IS_LOCAL && console.log("滑动活动Banner:" + this._bannerArr[n])
                                }
                            }
                        }
                        ,
                        o.bannerRun = function(t, i) {
                            var e = this;
                            void 0 === i && (i = !1);
                            var n = this._bannerArr.length;
                            if (!(n < 2)) {
                                this._moveEnd = !1;
                                var o, a = .5, s = 0;
                                if (t) {
                                    (s = this._nowIndex + 1) >= n && (s -= n),
                                        (o = this._bannerSprArr[s]).setPosition(this._bannerWidth, 3),
                                        o.setScale(1, 1.05),
                                        this._bannerNode.addChild(o),
                                        _(o).to(a, {
                                            position: g(0, 0),
                                            scale: g(1, 1)
                                        }).call((function() {
                                                e._moveEnd = !0
                                            }
                                        )).start();
                                    var h = this._bannerSprArr[this._nowIndex];
                                    _(h).to(a, {
                                        position: g(-this._bannerWidth, -3),
                                        scale: g(1, .95)
                                    }).start()
                                } else {
                                    (s = this._nowIndex - 1) < 0 && (s += n),
                                        (o = this._bannerSprArr[s]).setPosition(-this._bannerWidth, -3),
                                        o.setScale(1, .95),
                                        _(o).to(a, {
                                            position: g(0, 0),
                                            scale: g(1, 1)
                                        }).call((function() {
                                                e._moveEnd = !0
                                            }
                                        )).start();
                                    var r = this._bannerSprArr[this._nowIndex];
                                    _(r).to(a, {
                                        position: g(this._bannerWidth, 3),
                                        scale: g(1, 1.05)
                                    }).start()
                                }
                                this._nowIndex = s,
                                this._timeoutId > 0 && clearTimeout(this._timeoutId),
                                i && !this._downTime && (this._timeoutId = setTimeout((function() {
                                        e.bannerRun(1, !0)
                                    }
                                ), 5e3))
                            }
                        }
                        ,
                        o.loadFollowRes = function() {
                            Number(this._mainData.follow);
                            var t = P.Instance.getPetAnimationData(8, "IDLE");
                            t && this.addFrameAnimation(this._followNode, t.res_list, t.eventFrame)
                        }
                        ,
                        o.loadVipRes = function() {
                            var t = Number(this._mainData.vip);
                            this._vip.active = t > 0,
                                this.loadLunaMc()
                        }
                        ,
                        o.loadLunaMc = function() {
                            var t = "lunals";
                            Number(this._mainData.vip) > 0 && (t = "lunahs");
                            var i = ["luna/" + t];
                            this.addFrameAnimation(this._lunaNode, i, [])
                        }
                        ,
                        o.loadAvatar = function() {
                            this._avatar || (this._avatar = new Q,
                                this._ui.avatarNode.addChild(this._avatar)),
                            null == this._dazzleAvatar && (this._dazzleAvatar = new it,
                                this._ui.avatarNode.addChild(this._dazzleAvatar)),
                                W.DataAPI.requestRoleDetail(this.requestRoleDetailCB.bind(this), this._roleData.id)
                        }
                        ,
                        o.requestRoleDetailCB = function(t) {
                            t instanceof tt && (t.dazzleAvatar ? (this._dazzleAvatar && (this._dazzleAvatar.visible = !0,
                                this._dazzleAvatar.setAvatars(t.daAvatar)),
                            this._avatar && (this._avatar.visible = !1)) : (this._dazzleAvatar && (this._dazzleAvatar.visible = !1),
                            this._avatar && (this._avatar.visible = !0,
                                this._avatar.setAvatars(t.avatar, t.avatarVersion, t.avatarEffectID, t.avatarTransformID))),
                                this.showNameCard(t))
                        }
                        ,
                        o._errorCallback = function(t) {
                            console.log("_errorCallback:" + t)
                        }
                        ,
                        o.onClickAddBtn = function() {}
                        ,
                        o.onClickGiftBtn = function() {
                            M.sendNotification(j.SHOW_MAIN_VIEW)
                        }
                        ,
                        o.onClickFeedbackBtn = function(t) {
                            window.open("https://wj.qq.com/s2/21513525/9be6/", "_blank")
                        }
                        ,
                        o.onClickGuideBtn = function() {}
                        ,
                        o.onClickReconnect = function() {
                            var t;
                            0 == S.isLogin && (null == (t = this.tcpProxy) || t.reconnect())
                        }
                        ,
                        o.onClickLadderBtn = function() {
                            0 != S.isLogin && M.sendNotification(G.NN_V_SHOW_LADDER_MATCH_VIEW)
                        }
                        ,
                        o.callback = function(t) {}
                        ,
                        o.onClickSeriesBtn = function() {}
                        ,
                        o.onClickMatchingBtn = function() {
                            M.sendNotification(G.NN_V_SHOW_MATCH_COMBAT_VIEW)
                        }
                        ,
                        o.onClickMailBtn = function() {}
                        ,
                        o.onClickSummonBtn = function() {
                            var t = new X;
                            t.winPos = new m(0,0),
                                t.name = "",
                                t.src = "activityApp://3435/3101",
                                t.params = {
                                    ui: "IconClick"
                                },
                                t.isModal = !0,
                                t.cache = !1,
                                nt.Instance.setParams(t.params)
                        }
                        ,
                        o.onClickShopBtn = function() {
                            this.clickShopBoxLogic()
                        }
                        ,
                        o.onClickAccessoriesBtn = function() {
                            this.clickShopBoxLogic()
                        }
                        ,
                        o.onClickMarketBtn = function() {
                            this.clickShopBoxLogic(),
                                M.sendNotification(K.SHOW_MAIN_VIEW)
                        }
                        ,
                        o.onClickShopBoxBtn = function() {
                            this.clickShopBoxLogic()
                        }
                        ,
                        o.clickShopBoxLogic = function() {
                            this._showShop ? (this._ui.menuNode.showShopBtn.visible = !0,
                                this._ui.menuNode.hideShopBtn.active = !1,
                                this._ui.menuNode.shopBox.active = !1,
                                this._showShop = !1) : (this._ui.menuNode.showShopBtn.visible = !1,
                                this._ui.menuNode.hideShopBtn.visible = !0,
                                this._ui.menuNode.shopBox.visible = !0,
                                this._showShop = !0)
                        }
                        ,
                        o.onClickStorageBtn = function(t) {
                            1 != E.IS_LOCAL ? 0 != W.MainRoleData.isVip ? M.sendNotification(G.NN_V_SHOW_SPIRIT_STORAGE_VIEW) : W.showVipConfirm() : M.sendNotification(G.NN_V_SHOW_SPIRIT_STORAGE_VIEW)
                        }
                        ,
                        o.onClickSpiritBagBtn = function(t) {
                            M.sendNotification(G.NN_V_SHOW_SPIRIT_BAG_VIEW)
                        }
                        ,
                        o.onClickBagBtn = function() {
                            this.removeGaf()
                        }
                        ,
                        o.onClickSystemBtn = function() {
                            this.openWDApp()
                        }
                        ,
                        o.openWDApp = function(t) {
                            var i = new X;
                            i.winPos = new m(0,0),
                                i.name = "",
                                i.src = "activityApp://3101/ui3101",
                                i.params = {
                                    ui: "IconClick"
                                },
                                i.isModal = !0,
                                i.cache = !1,
                                J.Instance.setParams(i.params)
                        }
                        ,
                        o.onClickIllustrateBtn = function() {
                            this._showIllustrate ? (this._showBtn.active = !0,
                                this._hideBtn.active = !1,
                                this._btnBox.active = !1,
                                this._showIllustrate = !1) : (this._showBtn.active = !1,
                                this._hideBtn.active = !0,
                                this._btnBox.active = !0,
                                this._showIllustrate = !0)
                        }
                        ,
                        o.onClickEvernoteBtn = function() {}
                        ,
                        o.onClickRankBtn = function() {}
                        ,
                        o.onClickPetBtn = function() {}
                        ,
                        o.getPlugName = function() {
                            return "login"
                        }
                        ,
                        o.addImage = function(t, i) {
                            f.loadBundle("dynamic", (function(e, n) {
                                    if (e) {
                                        if (E.IS_LOCAL,
                                            E.IS_LOCAL)
                                            throw new Error("assetManager.loadBundle failed.")
                                    } else
                                        n.load(i, null, (function(i, e) {
                                                if (i) {
                                                    if (E.IS_LOCAL,
                                                        E.IS_LOCAL)
                                                        throw new Error("assetManager.loadBundle failed.")
                                                } else {
                                                    var n = new v
                                                        , o = new B;
                                                    o.image = e,
                                                        n.texture = o,
                                                        t.getComponent(r).spriteFrame = n
                                                }
                                            }
                                        ))
                                }
                            ))
                        }
                        ,
                        o.addFrameAnimation = function(t, i, e) {
                            var n = e
                                , o = t.addComponent(T);
                            o.loadWithAnyPlist("dynamic", i, n, 12, u.WrapMode.Loop, this.onLoadMvSuccess, this.onLoadMvFail, this),
                                o.node.on(T.FRAMEANIMATION_FRAME_EVENT, this.onFrameEvent, this)
                        }
                        ,
                        o.onFrameEvent = function(t) {}
                        ,
                        o.onLoadMvFail = function(t, i) {}
                        ,
                        o.onLoadMvSuccess = function(t) {
                            t.getComponent(C).play()
                        }
                        ,
                        o.onSpiritIdChanged = function(t, i) {
                            this.loadIdle(i)
                        }
                        ,
                        o.loadIdle = function(t) {
                            1 == E.IS_LOCAL && console.log("loadIdle=id=" + t),
                                this.loadIdle1(t)
                        }
                        ,
                        o.loadIdle1 = function(t) {
                            t <= 0 ? this.removeIdle() : (this._gaf && this.removeIdle(),
                            this._gaf || (this._gaf = new V,
                                this._gaf.loadedCallBack = this.onSpiritAnimationLoaded.bind(this),
                                this._gaf.initWithPetWithGaf(t),
                                this._ui.spiritNode.addChild(this._gaf),
                                this._gaf.x = -1240,
                                this._gaf.y = 400))
                        }
                        ,
                        o.onSpiritAnimationLoaded = function(t) {
                            t && this.playIdle(!0)
                        }
                        ,
                        o.playIdle = function(t) {
                            this.playIdle1(this._isPlay)
                        }
                        ,
                        o.playIdle1 = function(t) {
                            this._isPlay = t,
                            this._gaf && (1 == t ? this._gaf.play("IDLE") : this._gaf.stop())
                        }
                        ,
                        o.removeIdle = function() {
                            this.removeIdle1()
                        }
                        ,
                        o.removeIdle1 = function() {
                            this._gaf && this._gaf.destroy(),
                                this._gaf = null
                        }
                        ,
                        o.printTimerLog = function() {
                            this._ui && this._ui.tfLog && (E.IS_LOCAL || 270855974 == b.uin ? this._ui.tfLog.active = !0 : this._ui.tfLog.active = !1,
                                this._ui.tfLog.string = "CBT:" + E.TIMER)
                        }
                        ,
                        o.onClickLoginBtn = function(t) {
                            S.isLogin
                        }
                        ,
                        o.fetch = function() {
                            var t = this
                                , i = {
                                cmd: 0,
                                unkown: "@EPuLiMQuf",
                                skey: "@EPuLiMQuf",
                                platfrom: 2,
                                angel_uin: b.uin,
                                angel_key: b.sessionKey,
                                time: (new Date).getTime()
                            };
                            D.Instance.getWithParamsByTxt("https://17roco.qq.com/cgi-bin/h5_panel", i, this._completeCallback.bind(this), this._errorCallback.bind(this)),
                            1 == E.IS_LOCAL && (y.isDebuggerCombat ? setTimeout((function() {
                                    t.onClickLadderBtn()
                                }
                            ), 200) : y.isDebuggerStorage ? setTimeout((function() {
                                    t.onClickStorageBtn(null)
                                }
                            ), 200) : y.isDebuggerSpiritBagApp && setTimeout((function() {
                                    t.onClickSpiritBagBtn(null)
                                }
                            ), 200))
                        }
                        ,
                        e(n, [{
                            key: "label",
                            set: function(t) {
                                this._label.getComponent(s).string = t
                            }
                        }]),
                        n
                }(p)) || ot) || ot),
                    function(t) {
                        function n() {
                            for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                                n[o] = arguments[o];
                            return (i = t.call.apply(t, [this].concat(n)) || this)._showShopBtn = void 0,
                                i._hideShopBtn = void 0,
                                i._shopBox = void 0,
                                i._spiritBagBtn = void 0,
                                i._systemBtn = void 0,
                                i
                        }
                        return i(n, t),
                            e(n, [{
                                key: "showShopBtn",
                                get: function() {
                                    return this._showShopBtn || (this._showShopBtn = new x(this.getChildByName("showShopBtn"))),
                                        this._showShopBtn
                                }
                            }, {
                                key: "hideShopBtn",
                                get: function() {
                                    return this._hideShopBtn || (this._hideShopBtn = new x(this.getChildByName("hideShopBtn"))),
                                        this._hideShopBtn
                                }
                            }, {
                                key: "shopBox",
                                get: function() {
                                    return this._shopBox || (this._shopBox = new x(this.getChildByName("shopBox"))),
                                        this._shopBox
                                }
                            }, {
                                key: "spiritBagBtn",
                                get: function() {
                                    return this._spiritBagBtn || (this._spiritBagBtn = new x(this.getChildByName("btn_spiritBag1"))),
                                        this._spiritBagBtn
                                }
                            }, {
                                key: "systemBtn",
                                get: function() {
                                    return this._systemBtn || (this._systemBtn = new x(this.getChildByName("btn_system"))),
                                        this._systemBtn
                                }
                            }]),
                            n
                    }(x))
                    , rt = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._spiritNode = void 0,
                            i._guardianPetNode = void 0,
                            i._loginBtn = void 0,
                            i._ladderBtn = void 0,
                            i._seriesBtn = void 0,
                            i._matchBtn = void 0,
                            i._mailBtn = void 0,
                            i._badgeNode = void 0,
                            i._avatarNode = void 0,
                            i._vipNode = void 0,
                            i._tfLog = void 0,
                            i._TestGAF = void 0,
                            i._giftBtn = void 0,
                            i._feedbackBtn = void 0,
                            i._menuNode = void 0,
                            i._tfUserName = void 0,
                            i._nameCardNode = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "spiritNode",
                            get: function() {
                                return this._spiritNode || (this._spiritNode = new x(this.getChildByName("spiritNode"))),
                                    this._spiritNode
                            }
                        }, {
                            key: "guardianPetNode",
                            get: function() {
                                return this._guardianPetNode || (this._guardianPetNode = new x(this.getChildByName("guardianPetNode"))),
                                    this._guardianPetNode
                            }
                        }, {
                            key: "loginBtn",
                            get: function() {
                                return this._loginBtn || (this._loginBtn = new x(this.getChildByName("loginBtn"))),
                                    this._loginBtn
                            }
                        }, {
                            key: "ladderBtn",
                            get: function() {
                                return this._ladderBtn || (this._ladderBtn = new x(this.getChildByName("ladderBtn"))),
                                    this._ladderBtn
                            }
                        }, {
                            key: "seriesBtn",
                            get: function() {
                                return this._seriesBtn || (this._seriesBtn = new x(this.getChildByName("seriesBtn"))),
                                    this._seriesBtn
                            }
                        }, {
                            key: "matchBtn",
                            get: function() {
                                return this._matchBtn || (this._matchBtn = new x(this.getChildByName("matchBtn"))),
                                    this._matchBtn
                            }
                        }, {
                            key: "mailBtn",
                            get: function() {
                                return this._mailBtn || (this._mailBtn = new x(this.getChildByName("TopRight").getChildByName("EmailIconEntrance"))),
                                    this._mailBtn
                            }
                        }, {
                            key: "badgeNode",
                            get: function() {
                                return this._badgeNode || (this._badgeNode = new x(this.getChildByName("badgeNode"))),
                                    this._badgeNode
                            }
                        }, {
                            key: "avatarNode",
                            get: function() {
                                return this._avatarNode || (this._avatarNode = new x(this.getChildByName("avatarNode"))),
                                    this._avatarNode
                            }
                        }, {
                            key: "vipNode",
                            get: function() {
                                return this._vipNode || (this._vipNode = new x(this.getChildByName("vipNode"))),
                                    this._vipNode
                            }
                        }, {
                            key: "tfLog",
                            get: function() {
                                return this._tfLog || (this._tfLog = new x(this.getChildByName("tfLog"))),
                                    this._tfLog
                            }
                        }, {
                            key: "TestGAF",
                            get: function() {
                                return this._TestGAF || (this._TestGAF = new x(this.getChildByName("TestGAF"))),
                                    this._TestGAF
                            }
                        }, {
                            key: "giftBtn",
                            get: function() {
                                return this._giftBtn || (this._giftBtn = new x(this.getChildByName("TopRight").getChildByName("btn_gift"))),
                                    this._giftBtn
                            }
                        }, {
                            key: "feedbackBtn",
                            get: function() {
                                return this._feedbackBtn || (this._feedbackBtn = new x(this.getChildByName("TopRight").getChildByName("feedbackBtn"))),
                                    this._feedbackBtn
                            }
                        }, {
                            key: "menuNode",
                            get: function() {
                                return this._menuNode || (this._menuNode = new ht(this.getChildByName("node_menu"))),
                                    this._menuNode
                            }
                        }, {
                            key: "tfUserName",
                            get: function() {
                                return this._tfUserName || (this._tfUserName = new x(this.getChildByName("tfUserName"))),
                                    this._tfUserName
                            }
                        }, {
                            key: "nameCardNode",
                            get: function() {
                                return this._nameCardNode || (this._nameCardNode = new x(this.getChildByName("nameCardNode"))),
                                    this._nameCardNode
                            }
                        }]),
                        n
                }(x);
                n._RF.pop()
            }
        }
    }
));
