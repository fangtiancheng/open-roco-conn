System.register("chunks:///_virtual/MainUI1.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./AngelSysEvent.ts", "./ADFCmdsType.ts", "./AngelTcpHelper.ts", "./ProtocolHelper.ts", "./GlobalAPI.ts", "./UserData.ts", "./CombatPlugin.ts", "./HttpRequest.ts", "./AchieveCfgLoader.ts", "./PetAnimationCfgLoader.ts", "./FrameAnimation.ts", "./AppConstDef.ts", "./BuildLogHelper.ts", "./PureNotificationCenter.ts", "./NotificationCenter.ts", "./NotifyDef.ts", "./GAFAnimation.ts", "./global.ts", "./StringUtil.ts", "./AgentNode.ts", "./AnimationLoader.ts", "./SceneDes.ts", "./SpiritAnimationContainerGaf.ts", "./PetResCfgLoader.ts", "./CommonAPI.ts", "./ShowItemAwards.ts", "./CFunction.ts", "./ActivityAPI.ts", "./GiftCenterMessage.ts", "./MarketMessage.ts", "./AvatarPreview.ts", "./OpenAsWinDes.ts", "./ui3101.ts", "./GuardianPetIdleIcon.ts", "./GuardianPetMainWindow.ts", "./GuardianPetUtil.ts", "./RoleDetailData.ts", "./UserInfoDazzleAvatarPreview.ts", "./ui3435.ts", "./SpiritBooksMessage.ts", "./GlobalManager.ts"], (function(t) {
        var i, n, e, o, a, s, h, r, l, d, c, u, _, g, f, m, v, C, B, N, p, A, I, y, S, L, b, w, D, k, P, T, G, E, F, O, M, R, U, W, x, H, V, z, q, Q, j, X, K, Y, J, Z, $, tt, it, nt, et;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy,
                        o = t._decorator,
                        a = t.Event,
                        s = t.Label,
                        h = t.NodeEventType,
                        r = t.color,
                        l = t.Node,
                        d = t.AnimationClip,
                        c = t.tween,
                        u = t.v3,
                        _ = t.Vec2,
                        g = t.assetManager,
                        f = t.SpriteFrame,
                        m = t.Texture2D,
                        v = t.Sprite,
                        C = t.Animation,
                        B = t.Component
                }
                , function(t) {
                    N = t.Constants
                }
                , function(t) {
                    p = t.AngelSysEvent
                }
                , function(t) {
                    A = t.ADFCmdsType
                }
                , function(t) {
                    I = t.AngelTcpHelper
                }
                , function(t) {
                    y = t.ProtocolHelper
                }
                , function(t) {
                    S = t.GlobalAPI
                }
                , function(t) {
                    L = t.UserData
                }
                , function(t) {
                    b = t.default
                }
                , function(t) {
                    w = t.HttpRequest
                }
                , function(t) {
                    D = t.AchieveCfgLoader
                }
                , function(t) {
                    k = t.PetAnimationCfgLoader
                }
                , function(t) {
                    P = t.FrameAnimation
                }
                , function(t) {
                    T = t.AppConstDef
                }
                , function(t) {
                    G = t.default
                }
                , function(t) {
                    E = t.PureNotificationCenter
                }
                , function(t) {
                    F = t.NotificationCenter
                }
                , function(t) {
                    O = t.NotifyDef
                }
                , function(t) {
                    M = t.GAFAnimation
                }
                , function(t) {
                    R = t.__global
                }
                , function(t) {
                    U = t.StringUtil
                }
                , function(t) {
                    W = t.AgentNode
                }
                , null, function(t) {
                    x = t.SceneDes
                }
                , function(t) {
                    H = t.SpiritAnimationContainerGaf
                }
                , function(t) {
                    V = t.PetResCfgLoader
                }
                , null, null, null, function(t) {
                    z = t.ActivityAPI
                }
                , function(t) {
                    q = t.GiftCenterMessage
                }
                , function(t) {
                    Q = t.MarketMessage
                }
                , function(t) {
                    j = t.AvatarPreview
                }
                , function(t) {
                    X = t.OpenAsWinDes
                }
                , function(t) {
                    K = t.ui3101
                }
                , function(t) {
                    Y = t.GuardianPetIdleIcon
                }
                , function(t) {
                    J = t.GuardianPetMainWindow
                }
                , function(t) {
                    Z = t.GuardianPetUtil
                }
                , function(t) {
                    $ = t.default
                }
                , function(t) {
                    tt = t.UserInfoDazzleAvatarPreview
                }
                , function(t) {
                    it = t.ui3435
                }
                , function(t) {
                    nt = t.SpiritBooksMessage
                }
                , function(t) {
                    et = t.GlobalManager
                }
            ],
            execute: function() {
                var ot;
                e._RF.push({}, "e2761FZMTxLFbzUKYQf+NtX", "MainUI1", void 0);
                var at = o.ccclass
                    , st = (o.property,
                    o.menu)
                    , ht = (t("default", at(ot = st("AUI/MainUI1")(ot = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._mainData = void 0,
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
                            i._first = !0,
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
                    i(e, t);
                    var o = e.prototype;
                    return o.onLoad = function() {}
                        ,
                        o.start = function() {
                            var t, i, n = this, e = R.GEventAPI.angelEventDispatcher, o = new a(p.ON_SCENEDATA_INIT);
                            e.dispatchEvent(o),
                                this.printTimerLog(),
                                F.addNotification(O.MAIN_UI_SPIRIT_DISPLAY_CHANGED, this.onSpiritIdChanged, this),
                                F.addNotification(O.MAIN_UI_DIAMOND_CHANGED, this.onDiamondChanged, this),
                                F.addNotification(O.MAIN_UI_UPDATE_DIAMOND, this.onDiamondUpdate, this),
                                F.addNotification(O.MAIN_UI_GUARDIANPET_DISPLAY_CHANGED, this.showGuardianPet, this),
                                F.addNotification(O.ON_COMBAT_RES_PRELOAD_DONE, this.onCombatResPreLoadDone, this),
                                this._ui = new rt(this.node),
                                this._ui.TestGAF.visible = G.IS_LOCAL,
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
                                this.combatPlugin = new b,
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
                                this._ui.versusBtn.on(h.TOUCH_END, this.onClickVersusBtn, this),
                                this._ui.pveBtn.on(h.TOUCH_END, this.onClickPveBtn, this),
                                this._ui.giftBtn.on(h.TOUCH_END, this.onClickGiftBtn, this),
                                this._ui.feedbackBtn.on(h.TOUCH_END, this.onClickFeedbackBtn, this),
                                this._ui.mailBtn.on(h.TOUCH_END, this.onClickMailBtn, this),
                                this._ui.menuNode.spiritBagBtn.on(h.TOUCH_END, this.onClickSpiritBagBtn, this),
                                this._ui.menuNode.systemBtn.on(h.TOUCH_END, this.onClickSystemBtn, this),
                                this._ui.menuNode.btnLulu.on(h.TOUCH_END, this.onClickBtnluluBtn, this),
                            null == (t = this._ui.menuNode.shopBox.getChildByName("BtnQRCodeShop")) || t.on(h.TOUCH_END, this.onBtnQRCodeShop, this),
                            null == (i = this.node.getChildByName("TestGAF")) || i.on(h.TOUCH_END, this.onTestGAFClick2, this),
                                this.label = "未登录",
                                this.fetch(),
                                this.start1(),
                            1 == G.IS_LOCAL && (I.isDebuggerCombat ? setTimeout((function() {
                                    n.onClickLadderBtn()
                                }
                            ), 200) : I.isDebuggerStorage ? setTimeout((function() {
                                    n.onClickStorageBtn(null)
                                }
                            ), 200) : I.isDebuggerSpiritBagApp && setTimeout((function() {
                                    n.onClickSpiritBagBtn(null)
                                }
                            ), 200)),
                                E.sendNotification(q.SHOW_LOGIN_GIFT_VIEW)
                        }
                        ,
                        o.start1 = function() {
                            var t = this.system.getGDataAPI();
                            this._roleData = t.getGlobalVal(N.MAIN_ROLE_INFO),
                                this.showName(),
                                this.showSpirit(),
                                this.showVip(),
                                this.showGuardianPet(),
                            L.GameStroyData && 1 == L.GameStroyDataFlag && (z.showCgiXmlRewardList(L.GameStroyData),
                                L.GameStroyDataFlag = !1)
                        }
                        ,
                        o.showName = function() {
                            var t, i;
                            this._ui && this._ui.tfUserName && (this._ui.tfUserName.string = (null == (t = this._roleData) ? void 0 : t.nickName) || "",
                                this._ui.tfUserName.color = 1 == ((null == (i = this._roleData) ? void 0 : i.isVip) || !1) ? r(255, 0, 0) : r(0, 0, 0))
                        }
                        ,
                        o.showSpirit = function() {
                            if (this._roleData) {
                                var t = this._roleData.spiritID >> 28 & 15
                                    , i = 268435455 & this._roleData.spiritID
                                    , n = 1e5 + 10 * i + (t - 1);
                                if (0 != t) {
                                    n = 1e5 + 10 * i + (t - 1);
                                    this.loadIdle(n)
                                } else {
                                    var e;
                                    this.loadIdle(0 | (null == (e = this._roleData) ? void 0 : e.spiritID))
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
                                    this._guardianPetIcon || (this._guardianPetIcon = new Y(J.ICON_W,J.ICON_H,!1),
                                        this._guardianPetIcon.mouseChildren = !1,
                                        this._guardianPetIcon.mouseEnabled = !1,
                                        this._guardianPetIcon.uiContainer = this._ui.guardianPetNode.target,
                                        this._guardianPetIcon.scaleX = -1,
                                        this._guardianPetIcon.setMask(J.ICON_W, J.ICON_H));
                                    var t = Z.getGuardianPetIconID(this._roleData.guardianPetID, this._roleData.guardianPetLv);
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
                                    1 == G.IS_LOCAL && console.log("[jinlong] onTestGAFClick");
                                    var t = this.node.getChildByName("TestGAFRoot");
                                    t || ((t = new l("TestGAFRoot")).parent = this.node);
                                    var i = new l("TestGAF");
                                    i.parent = t;
                                    var n = i.addComponent(M);
                                    i.setPosition(-1500, 360);
                                    var e = V.Instance.getPath(9999);
                                    n.loadWithAnyPlist("", ["gaf/Pet/" + e], [], 24, d.WrapMode.Loop, this.onGAFMvLoadSuccess, this.onGAFMvLoadFail, this),
                                        this._ani = n
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
                            1 == G.IS_LOCAL && console.log("[jinlong] onTestGAFClick");
                            var i = this.node.getChildByName("TestGAFRoot1");
                            i || ((i = new l("TestGAFRoot1")).parent = this.node);
                            var n = new l("TestGAF");
                            n.parent = i;
                            var e = n.addComponent(M);
                            n.setPosition(-1200, 360);
                            var o = V.Instance.getPath(t);
                            e.loadWithAnyPlist("", ["gaf/Pet/" + o], [], 24, d.WrapMode.Loop, this.onGAFMvLoadSuccess, this.onGAFMvLoadFail, this)
                        }
                        ,
                        o.audio = function() {}
                        ,
                        o.onTestGAFClick2 = function() {
                            1 == G.IS_LOCAL && console.log("[jinlong] onTestGAFClick");
                            var t = this.node.getChildByName("TestGAFRoot");
                            t || ((t = new l("TestGAFRoot1")).parent = this.node);
                            var i = new l("TestGAF");
                            i.parent = t;
                            var n = i.addComponent(M);
                            i.setPosition(-700, 360);
                            var e = V.Instance.getPath(9999);
                            n.loadWithAnyPlist("", ["gaf/Pet/" + e], [], 24, d.WrapMode.Loop, this.onGAFMvLoadSuccess, this.onGAFMvLoadFail, this)
                        }
                        ,
                        o.onGAFMvLoadSuccess = function(t) {
                            1 == G.IS_LOCAL && console.log("[jinlong] onGAFMvLoadSuccess"),
                                t.getComponent(M).play("Spirit", "APPEAR")
                        }
                        ,
                        o.onGAFMvLoadFail = function() {
                            1 == G.IS_LOCAL && console.log("[jinlong] onGAFMvLoadFail")
                        }
                        ,
                        o.onCombatResPreLoadDone = function() {
                            var t = this;
                            G.IS_LOCAL && I.isDebuggerCombat && 1 == G.IS_LOCAL && setTimeout((function() {
                                    t.onClickLadderBtn()
                                }
                            ), 200)
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
                            1 == G.IS_LOCAL && console.info("WebSocket连接成功" + S.getTimerFormat()),
                                this.label = "WebSocket连接成功",
                                this.hideRecButton();
                            t.getTCPID();
                            this.sendLoginConnData(A.T_LoginRoom, {
                                roomID: L.recServerIdx,
                                key: L.sessionKey,
                                uin: L.uin
                            })
                        }
                        ,
                        o.sendLoginConnData = function(t, i) {
                            var n;
                            void 0 === t && (t = -1),
                            void 0 === i && (i = null),
                            1 == G.IS_LOCAL && console.info("sendLoginConnData"),
                            null == (n = this.receiver) || n.sendData(1, t, i)
                        }
                        ,
                        o.dataHandle = function(t, i) {
                            var n = this;
                            switch (1 == G.IS_LOCAL && console.info("dataHandle===" + t + "==" + i),
                                t) {
                                case A.T_LoginRoom:
                                    this.hideRecButton(),
                                        this.label = "登录成功";
                                    var e = i;
                                    if (CONFIG.DEBUG && console.log("登录返回码:", e.returnCode.message),
                                    -101 == e.returnCode.code)
                                        ;
                                    else if (-143 == e.returnCode.code)
                                        ;
                                    else if (-103 == e.returnCode.code)
                                        ;
                                    else if (e.returnCode.code < 0)
                                        ;
                                    else {
                                        this._roleData = e.mainRole,
                                            this.loadIdle(this._roleData.spiritID);
                                        var o = this.system.getGDataAPI();
                                        o.addGlobalVal(N.MAIN_ROLE_INFO, e.mainRole),
                                            this.showMainDataLogin(),
                                            S.roleData = e.mainRole;
                                        var a = new x;
                                        a.sceneID = e.sceneID,
                                            a.sceneVersion = e.sceneVer,
                                            o.addGlobalVal(N.WANT_TO_SCENE, a);
                                        var s = new p(p.LOGIN_OK);
                                        s.data = this.getPlugName(),
                                            y.USERUIN = e.mainRole.uin,
                                            this.system.getGEventAPI().angelEventDispatcher.dispatchEvent(s)
                                    }
                                    S.isLogin = !0;
                                    var h = {
                                        cmd: 0,
                                        unkown: "@EPuLiMQuf",
                                        skey: "@EPuLiMQuf",
                                        platfrom: 2,
                                        angel_uin: L.uin,
                                        angel_key: L.sessionKey,
                                        time: (new Date).getTime()
                                    };
                                    w.Instance.getWithParamsByTxt("https://17roco.qq.com/cgi-bin/h5_panel", h, this._completeCallback.bind(this), this._errorCallback.bind(this)),
                                    1 == G.IS_LOCAL && (I.isDebuggerCombat ? setTimeout((function() {
                                            n.onClickLadderBtn()
                                        }
                                    ), 200) : I.isDebuggerStorage ? setTimeout((function() {
                                            n.onClickStorageBtn(null)
                                        }
                                    ), 200) : I.isDebuggerSpiritBagApp && setTimeout((function() {
                                            n.onClickSpiritBagBtn(null)
                                        }
                                    ), 200))
                            }
                        }
                        ,
                        o.showMainDataLogin = function() {
                            this._ui && this._ui.tfUserName && (this._ui.tfUserName.string = this._roleData.nickName,
                                this._ui.tfUserName.color = 1 == this._roleData.isVip ? r(255, 0, 0) : r(0, 0, 0))
                        }
                        ,
                        o._completeCallback = function(t) {
                            var i = JSON.parse(t);
                            if (i && i.angel) {
                                if (0 == Number(i.angel.result.value)) {
                                    this._mainData = i.angel;
                                    var n = this._mainData.follow;
                                    1 == G.IS_LOCAL && console.log("_completeCallback=followId=" + n),
                                        this._showMainData()
                                } else
                                    console.error("拉取主界面信息失败:" + i.angel.result.msg);
                                1 == this._first && et.LoginSuccessLogic(),
                                    this._first = !1
                            }
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
                            t && t instanceof $ && (this._ui.nameCardNode.removeAllChildren(),
                                t.dazzleAvatar ? this.loadNameCard(t.daAvatar[tt.NAMEBG]) : this.loadNameCard(t.namebgId))
                        }
                        ,
                        o.loadNameCard = function(t) {
                            if (this._roleData && t > 0) {
                                var i = t + "-0"
                                    , n = "avatar/13/";
                                [44, 437, 622].indexOf(t) > -1 && (n = "avatar_new/27/");
                                var e = [n + i];
                                this.addFrameAnimation(this._ui.nameCardNode.target, e, [])
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
                            1 == G.IS_LOCAL && console.log("按下活动Activity:" + i.name)
                        }
                        ,
                        o.showTitle = function() {
                            var t = Number(this._mainData.titleid)
                                , i = Number(this._mainData.titlelv)
                                , n = D.Instance.getTitleData(t, i)
                                , e = "";
                            n && (e = n.level.label),
                                this._userTitle.getComponent(s).string = e
                        }
                        ,
                        o.loadBanner = function() {}
                        ,
                        o.onBannerDown = function(t) {
                            if (this._moveEnd) {
                                this._downTime = (new Date).getTime();
                                var i = this._nowIndex;
                                1 == G.IS_LOCAL && console.log("按下活动Banner:" + this._bannerArr[i]),
                                    this._startX = t.getLocation().x
                            }
                        }
                        ,
                        o.onBannerUp = function(t) {
                            if (this._moveEnd) {
                                var i = (new Date).getTime()
                                    , n = t.getLocation().x - this._startX
                                    , e = this._nowIndex;
                                if (this._downTime > 0 && i - this._downTime < 150)
                                    this._downTime = 0,
                                    1 == G.IS_LOCAL && console.log("按下活动Banner:" + this._bannerArr[e]);
                                else if (Math.abs(n) > 50) {
                                    var o = 0;
                                    n < 0 && (o = 1),
                                        this._downTime = 0,
                                        this.bannerRun(o, !0),
                                    1 == G.IS_LOCAL && console.log("滑动活动Banner:" + this._bannerArr[e])
                                }
                            }
                        }
                        ,
                        o.bannerRun = function(t, i) {
                            var n = this;
                            void 0 === i && (i = !1);
                            var e = this._bannerArr.length;
                            if (!(e < 2)) {
                                this._moveEnd = !1;
                                var o, a = .5, s = 0;
                                if (t) {
                                    (s = this._nowIndex + 1) >= e && (s -= e),
                                        (o = this._bannerSprArr[s]).setPosition(this._bannerWidth, 3),
                                        o.setScale(1, 1.05),
                                        this._bannerNode.addChild(o),
                                        c(o).to(a, {
                                            position: u(0, 0),
                                            scale: u(1, 1)
                                        }).call((function() {
                                                n._moveEnd = !0
                                            }
                                        )).start();
                                    var h = this._bannerSprArr[this._nowIndex];
                                    c(h).to(a, {
                                        position: u(-this._bannerWidth, -3),
                                        scale: u(1, .95)
                                    }).start()
                                } else {
                                    (s = this._nowIndex - 1) < 0 && (s += e),
                                        (o = this._bannerSprArr[s]).setPosition(-this._bannerWidth, -3),
                                        o.setScale(1, .95),
                                        c(o).to(a, {
                                            position: u(0, 0),
                                            scale: u(1, 1)
                                        }).call((function() {
                                                n._moveEnd = !0
                                            }
                                        )).start();
                                    var r = this._bannerSprArr[this._nowIndex];
                                    c(r).to(a, {
                                        position: u(this._bannerWidth, 3),
                                        scale: u(1, 1.05)
                                    }).start()
                                }
                                this._nowIndex = s,
                                this._timeoutId > 0 && clearTimeout(this._timeoutId),
                                i && !this._downTime && (this._timeoutId = setTimeout((function() {
                                        n.bannerRun(1, !0)
                                    }
                                ), 5e3))
                            }
                        }
                        ,
                        o.loadFollowRes = function() {
                            Number(this._mainData.follow);
                            var t = k.Instance.getPetAnimationData(8, "IDLE");
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
                            this._avatar || (this._avatar = new j,
                                this._ui.avatarNode.addChild(this._avatar)),
                            null == this._dazzleAvatar && (this._dazzleAvatar = new tt,
                                this._ui.avatarNode.addChild(this._dazzleAvatar)),
                                R.DataAPI.requestRoleDetail(this.requestRoleDetailCB.bind(this), this._roleData.id)
                        }
                        ,
                        o.requestRoleDetailCB = function(t) {
                            t instanceof $ && (t.dazzleAvatar ? (this._dazzleAvatar && (this._dazzleAvatar.visible = !0,
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
                            E.sendNotification(q.SHOW_MAIN_VIEW)
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
                        o.onClickLadderBtn = function() {}
                        ,
                        o.onClickVersusBtn = function() {
                            E.sendNotification(T.NN_V_SHOW_VERSUS_VIEW)
                        }
                        ,
                        o.onClickPveBtn = function() {
                            E.sendNotification(T.NN_V_SHOW_PVE_VIEW)
                        }
                        ,
                        o.callback = function(t) {}
                        ,
                        o.onClickSeriesBtn = function() {}
                        ,
                        o.onClickMatchingBtn = function() {}
                        ,
                        o.onClickMailBtn = function() {}
                        ,
                        o.onClickSummonBtn = function() {
                            var t = new X;
                            t.winPos = new _(0,0),
                                t.name = "",
                                t.src = "activityApp://3435/3101",
                                t.params = {
                                    ui: "IconClick"
                                },
                                t.isModal = !0,
                                t.cache = !1,
                                it.Instance.setParams(t.params)
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
                                E.sendNotification(Q.SHOW_MAIN_VIEW)
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
                            G.IS_LOCAL,
                                E.sendNotification(T.NN_V_SHOW_SPIRIT_STORAGE_VIEW)
                        }
                        ,
                        o.onClickSpiritBagBtn = function(t) {
                            E.sendNotification(T.NN_V_SHOW_SPIRIT_BAG_VIEW)
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
                        o.onBtnQRCodeShop = function() {
                            E.sendNotification(T.NN_V_SHOW_QRCODESHOP_VIEW)
                        }
                        ,
                        o.onClickBtnluluBtn = function() {
                            E.sendNotification(T.NN_V_SHOW_LULU_VIEW)
                        }
                        ,
                        o.openWDApp = function(t) {
                            var i = new X;
                            i.winPos = new _(0,0),
                                i.name = "",
                                i.src = "activityApp://3101/ui3101",
                                i.params = {
                                    ui: "IconClick"
                                },
                                i.isModal = !0,
                                i.cache = !1,
                                K.Instance.setParams(i.params)
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
                        o.onClickPetBtn = function() {
                            E.sendNotification(nt.SHOW_MAIN_VIEW)
                        }
                        ,
                        o.getPlugName = function() {
                            return "login"
                        }
                        ,
                        o.addImage = function(t, i) {
                            g.loadBundle("dynamic", (function(n, e) {
                                    if (n) {
                                        if (G.IS_LOCAL,
                                            G.IS_LOCAL)
                                            throw new Error("assetManager.loadBundle failed.")
                                    } else
                                        e.load(i, null, (function(i, n) {
                                                if (i) {
                                                    if (G.IS_LOCAL,
                                                        G.IS_LOCAL)
                                                        throw new Error("assetManager.loadBundle failed.")
                                                } else {
                                                    var e = new f
                                                        , o = new m;
                                                    o.image = n,
                                                        e.texture = o,
                                                        t.getComponent(v).spriteFrame = e
                                                }
                                            }
                                        ))
                                }
                            ))
                        }
                        ,
                        o.addFrameAnimation = function(t, i, n) {
                            var e = n
                                , o = t.addComponent(P);
                            o.loadWithAnyPlist("dynamic", i, e, 12, d.WrapMode.Loop, this.onLoadMvSuccess, this.onLoadMvFail, this),
                                o.node.on(P.FRAMEANIMATION_FRAME_EVENT, this.onFrameEvent, this)
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
                            1 == G.IS_LOCAL && console.log("loadIdle=id=" + t),
                                this.loadIdle1(t)
                        }
                        ,
                        o.loadIdle1 = function(t) {
                            t <= 0 ? this.removeIdle() : (this._gaf && this.removeIdle(),
                            this._gaf || (this._gaf = new H,
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
                            this._ui && this._ui.tfLog && (G.IS_LOCAL || 270855974 == L.uin ? this._ui.tfLog.active = !0 : this._ui.tfLog.active = !1,
                                this._ui.tfLog.string = "CBT:" + G.TIMER)
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
                                angel_uin: L.uin,
                                angel_key: L.sessionKey,
                                time: (new Date).getTime()
                            };
                            w.Instance.getWithParamsByTxt("https://17roco.qq.com/cgi-bin/h5_panel", i, this._completeCallback.bind(this), this._errorCallback.bind(this)),
                            1 == G.IS_LOCAL && (I.isDebuggerCombat ? setTimeout((function() {
                                    t.onClickLadderBtn()
                                }
                            ), 200) : I.isDebuggerStorage ? setTimeout((function() {
                                    t.onClickStorageBtn(null)
                                }
                            ), 200) : I.isDebuggerSpiritBagApp && setTimeout((function() {
                                    t.onClickSpiritBagBtn(null)
                                }
                            ), 200))
                        }
                        ,
                        n(e, [{
                            key: "label",
                            set: function(t) {
                                this._label.getComponent(s).string = t
                            }
                        }]),
                        e
                }(B)) || ot) || ot),
                    function(t) {
                        function e() {
                            for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                                e[o] = arguments[o];
                            return (i = t.call.apply(t, [this].concat(e)) || this)._showShopBtn = void 0,
                                i._hideShopBtn = void 0,
                                i._shopBox = void 0,
                                i._spiritBagBtn = void 0,
                                i._systemBtn = void 0,
                                i._btnLulu = void 0,
                                i
                        }
                        return i(e, t),
                            n(e, [{
                                key: "showShopBtn",
                                get: function() {
                                    return this._showShopBtn || (this._showShopBtn = new W(this.getChildByName("showShopBtn"))),
                                        this._showShopBtn
                                }
                            }, {
                                key: "hideShopBtn",
                                get: function() {
                                    return this._hideShopBtn || (this._hideShopBtn = new W(this.getChildByName("hideShopBtn"))),
                                        this._hideShopBtn
                                }
                            }, {
                                key: "shopBox",
                                get: function() {
                                    return this._shopBox || (this._shopBox = new W(this.getChildByName("shopBox"))),
                                        this._shopBox
                                }
                            }, {
                                key: "spiritBagBtn",
                                get: function() {
                                    return this._spiritBagBtn || (this._spiritBagBtn = new W(this.getChildByName("btn_spiritBag1"))),
                                        this._spiritBagBtn
                                }
                            }, {
                                key: "systemBtn",
                                get: function() {
                                    return this._systemBtn || (this._systemBtn = new W(this.getChildByName("btn_system"))),
                                        this._systemBtn
                                }
                            }, {
                                key: "btnLulu",
                                get: function() {
                                    return this._btnLulu || (this._btnLulu = new W(this.getChildByName("BtnLulu"))),
                                        this._btnLulu
                                }
                            }]),
                            e
                    }(W))
                    , rt = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._spiritNode = void 0,
                            i._guardianPetNode = void 0,
                            i._loginBtn = void 0,
                            i._versusBtn = void 0,
                            i._pveBtn = void 0,
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
                    return i(e, t),
                        n(e, [{
                            key: "spiritNode",
                            get: function() {
                                return this._spiritNode || (this._spiritNode = new W(this.getChildByName("spiritNode"))),
                                    this._spiritNode
                            }
                        }, {
                            key: "guardianPetNode",
                            get: function() {
                                return this._guardianPetNode || (this._guardianPetNode = new W(this.getChildByName("guardianPetNode"))),
                                    this._guardianPetNode
                            }
                        }, {
                            key: "loginBtn",
                            get: function() {
                                return this._loginBtn || (this._loginBtn = new W(this.getChildByName("loginBtn"))),
                                    this._loginBtn
                            }
                        }, {
                            key: "versusBtn",
                            get: function() {
                                return this._versusBtn || (this._versusBtn = new W(this.getChildByName("versusBtn"))),
                                    this._versusBtn
                            }
                        }, {
                            key: "pveBtn",
                            get: function() {
                                return this._pveBtn || (this._pveBtn = new W(this.getChildByName("pveBtn"))),
                                    this._pveBtn
                            }
                        }, {
                            key: "mailBtn",
                            get: function() {
                                return this._mailBtn || (this._mailBtn = new W(this.getChildByName("TopRight").getChildByName("EmailIconEntrance"))),
                                    this._mailBtn
                            }
                        }, {
                            key: "badgeNode",
                            get: function() {
                                return this._badgeNode || (this._badgeNode = new W(this.getChildByName("badgeNode"))),
                                    this._badgeNode
                            }
                        }, {
                            key: "avatarNode",
                            get: function() {
                                return this._avatarNode || (this._avatarNode = new W(this.getChildByName("avatarNode"))),
                                    this._avatarNode
                            }
                        }, {
                            key: "vipNode",
                            get: function() {
                                return this._vipNode || (this._vipNode = new W(this.getChildByName("vipNode"))),
                                    this._vipNode
                            }
                        }, {
                            key: "tfLog",
                            get: function() {
                                return this._tfLog || (this._tfLog = new W(this.getChildByName("tfLog"))),
                                    this._tfLog
                            }
                        }, {
                            key: "TestGAF",
                            get: function() {
                                return this._TestGAF || (this._TestGAF = new W(this.getChildByName("TestGAF"))),
                                    this._TestGAF
                            }
                        }, {
                            key: "giftBtn",
                            get: function() {
                                return this._giftBtn || (this._giftBtn = new W(this.getChildByName("TopRight").getChildByName("giftBtn"))),
                                    this._giftBtn
                            }
                        }, {
                            key: "feedbackBtn",
                            get: function() {
                                return this._feedbackBtn || (this._feedbackBtn = new W(this.getChildByName("TopRight").getChildByName("feedbackBtn"))),
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
                                return this._tfUserName || (this._tfUserName = new W(this.getChildByName("tfUserName"))),
                                    this._tfUserName
                            }
                        }, {
                            key: "nameCardNode",
                            get: function() {
                                return this._nameCardNode || (this._nameCardNode = new W(this.getChildByName("nameCardNode"))),
                                    this._nameCardNode
                            }
                        }]),
                        e
                }(W);
                e._RF.pop()
            }
        }
    }
));
