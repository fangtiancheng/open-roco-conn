System.register("chunks:///_virtual/CurrentSpirit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./PropertyDes.ts", "./BubbleSkinType.ts", "./AgentNode.ts", "./ToolTip.ts", "./WindowMode.ts", "./WindowResult.ts", "./CFunction.ts", "./FilterFactory.ts", "./SpriteFrameSelector.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./BagDataProxy.ts", "./BagFunctionProxy.ts", "./ClickItemLogic.ts", "./LangStrings.ts", "./LangUtils.ts", "./NetActionProxy.ts", "./SpiritBagSpiritIcon.ts", "./SpiritMc.ts", "./SpiritRecoverCheckBox.ts", "./DynamicButton.ts", "./SpiritBagRefProxy.ts", "./SpiritPropertyTranslator.ts", "./SexIcon.ts", "./GuardianPetPlugin.ts", "./OpenAsWinDes.ts", "./ui1973.ts", "./ReBirthDataProxy.ts"], (function(t) {
        var i, e, o, n, s, r, h, u, a, _, c, T, l, p, g, f, d, B, x, S, v, I, m, P, y, C, D, R, N, M, w, F, O, E, k;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        n = t.NodeEventType,
                        s = t.Vec2,
                        r = t.Sprite
                }
                , function(t) {
                    h = t.__global
                }
                , function(t) {
                    u = t.PropertyDes
                }
                , function(t) {
                    a = t.BubbleSkinType
                }
                , function(t) {
                    _ = t.AgentNode
                }
                , function(t) {
                    c = t.ToolTipComponent
                }
                , function(t) {
                    T = t.WindowMode
                }
                , function(t) {
                    l = t.WindowResult
                }
                , function(t) {
                    p = t.CFunction
                }
                , function(t) {
                    g = t.FilterFactory
                }
                , function(t) {
                    f = t.default
                }
                , function(t) {
                    d = t.PureNotificationCenter
                }
                , function(t) {
                    B = t.AppConstDef
                }
                , function(t) {
                    x = t.BagDataProxy
                }
                , function(t) {
                    S = t.BagFunctionProxy
                }
                , function(t) {
                    v = t.ClickItemLogic
                }
                , function(t) {
                    I = t.LangStrings
                }
                , function(t) {
                    m = t.LangUtils
                }
                , function(t) {
                    P = t.NetActionProxy
                }
                , function(t) {
                    y = t.SpiritBagSpiritIcon
                }
                , function(t) {
                    C = t.SpiritMc
                }
                , function(t) {
                    D = t.SpiritRecoverCheckBox
                }
                , function(t) {
                    R = t.DynamicButton
                }
                , function(t) {
                    N = t.SpiritBagRefProxy
                }
                , function(t) {
                    M = t.SpiritPropertyTranslator
                }
                , function(t) {
                    w = t.SexIcon
                }
                , function(t) {
                    F = t.GuardianPetPlugin
                }
                , function(t) {
                    O = t.OpenAsWinDes
                }
                , function(t) {
                    E = t.ui1973
                }
                , function(t) {
                    k = t.ReBirthDataProxy
                }
            ],
            execute: function() {
                o._RF.push({}, "6a45cwUaWtAwrkS4VGAzXXZ", "CurrentSpirit", void 0);
                var b = t("CurrentSpirit", function() {
                    var t = e.prototype;
                    function e(t) {
                        var i;
                        this._ui = void 0,
                            this._spirit = void 0,
                            this._spiritMC = void 0,
                            this._featureIcons = void 0,
                            this._groupIcons = void 0,
                            this._setToFirstButton = void 0,
                            this._spiritStorageButton = void 0,
                            this._spiritRecoveryButton = void 0,
                            this._sexIcon = void 0,
                            this._homeButtonEffectPlayed = void 0,
                            this._clickItemLogic = void 0,
                            this._curClickItem = void 0,
                            this._curSpiritData = void 0,
                            this._curSpiritEquipData = void 0,
                            this._itemData = void 0,
                            this._spiritRecoverButton = void 0,
                            this._moveToStorage = void 0,
                            this._edenButton = void 0,
                            this._offlinePracticeButton = void 0,
                            this._lockOfflinePractice = void 0,
                            this._lockMoveToStorage = void 0,
                            this._data = void 0,
                            this._ui = new z(t),
                            this._ui.spiritMoreDetai.y = 0,
                            this._spiritRecoverButton = new D(this._ui.recoverButton.target),
                            this._ui.recoverButton.on(n.TOUCH_END, this.onAutoRecover, this),
                            this._setToFirstButton = new R(this._ui.setToFirstButton),
                            this._setToFirstButton.target.addComponent(c),
                            this._setToFirstButton.setProperty("tooltip", I.SET_AS_FIRST),
                            this._ui.setToFirstButton.mouseChildren = !1,
                            this._ui.setToFirstButton.on(n.TOUCH_END, this.onSetToFirst, this),
                            this._edenButton = new R(this._ui.edenButton),
                            this._edenButton.target.addComponent(c),
                            this._edenButton.setProperty("tooltip", I.EDEN_BUTTON),
                            this._ui.edenButton.mouseChildren = !1,
                            this._ui.edenButton.on(n.TOUCH_END, this.onMoveToEden, this),
                            this._moveToStorage = new R(this._ui.moveToStorageButton),
                            this._moveToStorage.target.addComponent(c),
                            this._moveToStorage.setProperty("tooltip", I.PUT_TO_STORAGE),
                            this._ui.moveToStorageButton.mouseChildren = !1,
                            this._ui.moveToStorageButton.on(n.TOUCH_END, this.onMoveToStorage, this),
                            this._spiritStorageButton = new R(this._ui.spiritStorageButton),
                            this._spiritStorageButton.target.addComponent(c),
                            this._spiritStorageButton.setProperty("tooltip", I.SPIRIT_STORAGE),
                            this._ui.spiritStorageButton.mouseChildren = !1,
                            this._ui.spiritStorageButton.on(n.TOUCH_END, this.openStorage, this),
                            (i = new R(this._ui.spiritRecoveryButton)).target.addComponent(c),
                            i.setProperty("tooltip", I.FULL_RESTORE_SPIRIT),
                            this._ui.spiritRecoveryButton.mouseChildren = !1,
                            this._ui.spiritRecoveryButton.on(n.TOUCH_END, this.onRecoverySpirit, this),
                            (i = new R(this._ui.trainButton)).target.addComponent(c),
                            i.setProperty("tooltip", I.SPIRIT_TRAIN),
                            this._ui.trainButton.mouseChildren = !1,
                            this._ui.trainButton.on(n.TOUCH_END, this.onSpiritTrain, this),
                            this._offlinePracticeButton = new R(this._ui.offlinePracticeButton),
                            this._offlinePracticeButton.target.addComponent(c),
                            this._offlinePracticeButton.setProperty("tooltip", I.OFFLINE_TRAINING),
                            this._ui.offlinePracticeButton.mouseChildren = !1,
                            this._ui.offlinePracticeButton.on(n.TOUCH_END, this.onOfflinePractice, this),
                            this._ui.guardianPetBtn.mouseChildren = !0,
                            this._ui.guardianPetBtn.on(n.TOUCH_END, this.onClickGuardianPet, this),
                            this._ui.rebirthBtn.mouseChildren = !0,
                            this._ui.rebirthBtn.on(n.TOUCH_END, this.onClickRebirth, this),
                            this._spiritMC = new C,
                            this._spiritMC.ui = this._ui.spiritNode,
                            this._spiritMC.display.x = e.SPIRIT_X,
                            this._spiritMC.display.y = e.SPIRIT_Y,
                            this._spiritMC.display.scaleX = .8,
                            this._spiritMC.display.scaleY = .8,
                        h.MainRoleData.isVip || this._spiritStorageButton.setProperty("tooltip", I.NOT_VIP_SPIRIT_STORAGE),
                            this._sexIcon = new w(this._ui.sexIcon),
                            this._clickItemLogic = new v,
                            this.initFeatureIcons(),
                            this.initGroupIcons(),
                            this.refreshSetToFirstButton(0),
                            this.data = null
                    }
                    return t.eyeShow = function(t) {}
                        ,
                        t.showTab = function(t) {
                            this._ui.trainButton.visible = 1 == t,
                                this._ui.spiritMoreDetai.visible = 5 == t
                        }
                        ,
                        t.reset_spiritStorageButton = function() {
                            this._ui.spiritStorageButton.mouseChildren = !1,
                                this._ui.spiritStorageButton.filters = h.MainRoleData.isVip ? [] : [g.createGrayFilter()],
                                this._spiritStorageButton.enabled = h.MainRoleData.isVip,
                                h.MainRoleData.isVip ? this._spiritStorageButton.setProperty("tooltip", I.SPIRIT_STORAGE) : this._spiritStorageButton.setProperty("tooltip", I.NOT_VIP_SPIRIT_STORAGE)
                        }
                        ,
                        t.openStorage = function(t) {
                            d.sendNotification(B.NN_V_SHOW_SPIRIT_STORAGE_VIEW),
                                setTimeout((function() {
                                        d.sendNotification(B.NN_V_CLOSE_SPIRIT_BAG_VIEW)
                                    }
                                ), 50),
                            this._ui.spiritStorageButton.getComponent(c) && this._ui.spiritStorageButton.getComponent(c).hide()
                        }
                        ,
                        t.cleanResData = function() {}
                        ,
                        t.getItemData = function() {}
                        ,
                        t.dispose = function() {
                            this.cleanResData(),
                                this._ui.setToFirstButton.off(n.TOUCH_END, this.onSetToFirst, this),
                                this._ui.moveToStorageButton.off(n.TOUCH_END, this.onMoveToStorage, this),
                                this._ui.spiritStorageButton.off(n.TOUCH_END, this.openStorage, this),
                                this._ui.offlinePracticeButton.off(n.TOUCH_END, this.onOfflinePractice, this),
                                this._ui.spiritRecoveryButton.off(n.TOUCH_END, this.onRecoverySpirit, this),
                                this._ui.sexIcon.getComponent(f).gotoAndStop(1),
                                this._clickItemLogic.dispose()
                        }
                        ,
                        t.reset = function() {
                            this._ui.nameText.text = "",
                                this._sexIcon.sex = 0,
                                this.refreshSetToFirstButton(0),
                                this.refreshMoveToStorageButton(0),
                                this.refreshOfflinePracticeButton(-1),
                                this._ui.spiritMoreDetai.heightText.text = "",
                                this._ui.spiritMoreDetai.weightText.text = "",
                                this._ui.spiritMoreDetai.descriptionText.text = "",
                                this._ui.spiritMoreDetai.idText.text = "",
                                this._ui.spiritMoreDetai.interestText.text = "",
                                this._ui.spiritMoreDetai.temperText.text = "",
                                this._ui.spiritMoreDetai.caughtInfoText.text = "",
                                this._ui.spiritMoreDetai.sexText.text = "",
                                this._ui.spiritMoreDetai.groupText.text = "",
                                this._ui.spiritMoreDetai.zhpText.text = "",
                                this._ui.spiritMoreDetai.zpaText.text = "",
                                this._ui.spiritMoreDetai.zpdText.text = "",
                                this._ui.spiritMoreDetai.zmaText.text = "",
                                this._ui.spiritMoreDetai.zmdText.text = "",
                                this._ui.spiritMoreDetai.zspText.text = "",
                                this._ui.spiritMoreDetai.evolutionText.text = "",
                                this.setSpiritMC(0),
                                this.setFeatureIcons(null),
                                this.setGroupIcons(null)
                        }
                        ,
                        t.refreshOfflinePracticeButton = function(t) {
                            this._lockOfflinePractice || (-1 == t ? (this._ui.offlinePracticeButton.off(n.TOUCH_END, this.onOfflinePractice, this),
                                this._ui.offlinePracticeButton.filters = [g.createGrayFilter()],
                                this._offlinePracticeButton.enabled = !1) : (this._ui.offlinePracticeButton.hasEventListener(n.TOUCH_END, this.onOfflinePractice, this) || this._ui.offlinePracticeButton.on(n.TOUCH_END, this.onOfflinePractice, this),
                                this._ui.offlinePracticeButton.filters = [],
                                this._offlinePracticeButton.enabled = !0))
                        }
                        ,
                        t.refreshMoveToStorageButton = function(t) {
                            this._lockMoveToStorage || (0 == t ? (this._ui.moveToStorageButton.off(n.TOUCH_END, this.onMoveToStorage, this),
                                this._ui.moveToStorageButton.filters = [g.createGrayFilter()],
                                this._ui.moveToStorageButton.enableTag = !1,
                                this._moveToStorage.enabled = !1) : (this._ui.moveToStorageButton.hasEventListener(n.TOUCH_END, this.onMoveToStorage, this) || this._ui.moveToStorageButton.on(n.TOUCH_END, this.onMoveToStorage, this),
                                this._ui.moveToStorageButton.filters = [],
                                this._ui.moveToStorageButton.enableTag = !0,
                                this._moveToStorage.enabled = !0))
                        }
                        ,
                        t.enableMoveToStorage = function(t) {
                            this.refreshMoveToStorageButton(0),
                                this._lockMoveToStorage = !t
                        }
                        ,
                        t.enableOfflinePractice = function(t) {
                            this.refreshOfflinePracticeButton(-1),
                                this._lockOfflinePractice = !t
                        }
                        ,
                        t.checkRebirth = function() {
                            this._ui.rebirthBtn.visible = k.checkRebirth(this._data.id, this._data.level),
                                this.refreshBtns()
                        }
                        ,
                        t.refreshBtns = function() {
                            0 == this._ui.rebirthBtn.visible ? (this._ui.guardianPetBtn.changeToPosX1(),
                                this._ui.offlinePracticeButton.changeToPosX1(),
                                this._ui.edenButton.changeToPosX1(),
                                this._ui.spiritStorageButton.changeToPosX1(),
                                this._ui.spiritRecoveryButton.changeToPosX1(),
                                this._ui.recoverButton.changeToPosX1()) : (this._ui.guardianPetBtn.changeToPosX2(),
                                this._ui.offlinePracticeButton.changeToPosX2(),
                                this._ui.edenButton.changeToPosX2(),
                                this._ui.spiritStorageButton.changeToPosX2(),
                                this._ui.spiritRecoveryButton.changeToPosX2(),
                                this._ui.recoverButton.changeToPosX2())
                        }
                        ,
                        t.initFeatureIcons = function() {
                            this._featureIcons = [new y, new y];
                            for (var t, i = this._featureIcons.length, o = 0; o < i; ++o)
                                null != (t = this._featureIcons[o]) && (t.scaleParam = .8,
                                    t.scaleParam = .8,
                                    t.addComponent(c),
                                    t.tooltipType = a.SERISE_TIPS,
                                    t.tooltipPos = new s(446,-254),
                                    t.ui = this._ui.target,
                                    t.display.x = e.SPIRIT_SKILL_X + e.SPIRIT_SKILL_WIDTH * o,
                                    t.display.y = e.SPIRIT_SKILL_Y)
                        }
                        ,
                        t.initGroupIcons = function() {}
                        ,
                        t.onAutoRecover = function(t) {
                            0 == h.MainRoleData.isVip ? h.showVipConfirm1() : this._spiritRecoverButton.clickBox()
                        }
                        ,
                        t.onFollowUser = function(t) {
                            P.followUser(x.selectedIndex + 1)
                        }
                        ,
                        t.onUnfollowUser = function(t) {
                            P.followUser(0)
                        }
                        ,
                        t.onSetToFirst = function(t) {
                            0 != this._ui.setToFirstButton.enableTag && 0 != x.selectedIndex && (N.spiritBagPanel.initChooseItem(),
                                P.swapSpirits(x.selectedIndex + 1, 1))
                        }
                        ,
                        t.onItem = function(t) {
                            x.striveChange ? S.striveChangeFun.call(this.onItemFun) : this.onItemFun()
                        }
                        ,
                        t.onItemFun = function() {
                            N.spiritBagPanel.details.visible = !1,
                                N.spiritBagPanel.itemShell.visible = !0,
                                P.getItemList()
                        }
                        ,
                        t.onSpiritInfo = function(t) {
                            N.spiritBagPanel.details.visible = !0,
                                N.spiritBagPanel.itemShell.visible = !1
                        }
                        ,
                        t.onMoveToStorage = function(t) {
                            N.spiritBagPanel.initChooseItem(),
                                x.striveChange ? S.striveChangeFun.call(this.onItemFun2) : this.onItemFun2()
                        }
                        ,
                        t.onMoveToEden = function(t) {
                            h.UI.alert("", "乐园尚未实装，敬请期待！", T.OK)
                        }
                        ,
                        t.onItemFun2 = function() {
                            var t = x.selectedSpirit
                                , i = null != t && null != t.name ? t.name : I.UNKNOWN_SPIRIT
                                , e = m.translate(I.SURE_TO_MOVE_TO_STORAGE, i);
                            1 == x.data.length && (e = "背包里只剩一只宠物，没有宠物将不能战斗！\n" + e),
                                h.UI.alert("", e, T.OK_CANCEL, new p(this.onMoveToStorageResult,this))
                        }
                        ,
                        t.setSpiritMC = function(t) {
                            this._spiritMC.load(t)
                        }
                        ,
                        t.setSpiritMCBySkin = function(t) {
                            this._spiritMC.load(t)
                        }
                        ,
                        t.setFeatureIcons = function(t) {
                            var i, o = this._featureIcons.length, n = e.SPIRIT_SKILL_X;
                            null != t && (n -= (t.length - 1) * e.SPIRIT_SKILL_WIDTH);
                            for (var s = 0; s < o; ++s)
                                null != this._featureIcons[s] && (null != t && null != t[s] ? (t[s].name,
                                    i = t[s].id) : i = 0,
                                    this._featureIcons[s].tooltip = i.toString(),
                                    this._featureIcons[s].load1(i),
                                    this._featureIcons[s].display.x = n + e.SPIRIT_SKILL_WIDTH * s,
                                    this._featureIcons[s].display.y = e.SPIRIT_SKILL_Y)
                        }
                        ,
                        t.setGroupIcons = function(t) {}
                        ,
                        t.refreshSetToFirstButton = function(t) {
                            0 == t ? (this._ui.setToFirstButton.off(n.TOUCH_END, this.onSetToFirst, this),
                                this._ui.setToFirstButton.filters = [g.createGrayFilter()],
                                this._ui.setToFirstButton.getComponent(r).grayscale = !0,
                                this._setToFirstButton.enabled = !1) : (this._ui.setToFirstButton.hasEventListener(n.TOUCH_END, this.onSetToFirst, this) || this._ui.setToFirstButton.on(n.TOUCH_END, this.onSetToFirst, this),
                                this._ui.setToFirstButton.filters = [],
                                this._ui.setToFirstButton.getComponent(r).grayscale = !1,
                                this._setToFirstButton.enabled = !0)
                        }
                        ,
                        t.onMoveToStorageResult = function(t) {
                            switch (t) {
                                case l.OK:
                                    P.moveSpiritToStorage(x.selectedIndex + 1)
                            }
                        }
                        ,
                        t.onClickGuardianPet = function(t) {
                            F.instance.call("ui")
                        }
                        ,
                        t.onClickRebirth = function(t) {
                            if (this._data.level < 100)
                                h.UI.alert("", "当前宠物等级未满级，先去升级后再来重生吧。");
                            else {
                                var i = new O;
                                i.winPos = new s(0,0),
                                    i.name = "",
                                    i.src = "activityApp://3435/3101";
                                var e = {
                                    id: this._data.id,
                                    catch_time: this._data.caughtTime,
                                    level: this._data.level,
                                    prs: this._data.temper,
                                    need_money: 0
                                };
                                i.params = {
                                    ui: "IconClick",
                                    args: e
                                },
                                    i.isModal = !0,
                                    i.cache = !1,
                                    E.Instance.setParams(i.params)
                            }
                        }
                        ,
                        t.onOfflinePractice = function(t) {
                            N.spiritBagPanel.initChooseItem(),
                                x.striveChange ? S.striveChangeFun.call(this.onItemFun3) : this.onItemFun3()
                        }
                        ,
                        t.onItemFun3 = function() {
                            var t = x.selectedSpirit
                                , i = null != t && null != t.name ? t.name : I.UNKNOWN_SPIRIT
                                , e = m.translate(I.SURE_TO_START_OFFLINE_TRAINING, i);
                            1 == x.data.length && (e = "背包里只剩一只宠物，没有宠物将不能战斗！\n" + e),
                                h.UI.alert("", e, T.OK_CANCEL, new p(this.onOfflinePracticeResult,this))
                        }
                        ,
                        t.onOfflinePracticeResult = function(t) {
                            switch (t) {
                                case l.OK:
                                    P.trainOffline()
                            }
                        }
                        ,
                        t.onRecoverySpirit = function(t) {
                            this._clickItemLogic.restore(x.selectedSpirit)
                        }
                        ,
                        t.onSpiritTrain = function(t) {
                            N.spiritBagPanel.showProperty()
                        }
                        ,
                        i(e, [{
                            key: "spiritData",
                            set: function(t) {}
                        }, {
                            key: "data",
                            set: function(t) {
                                if (this._data = t,
                                    this._ui.rebirthBtn.visible = !1,
                                    this.refreshBtns(),
                                null != t && null != t) {
                                    this._ui.nameText.text = t.name,
                                        this._ui.setToFirstButton.visible = !0,
                                        this._ui.setToFirstButton.filters = 0 == t.index ? [g.createGrayFilter()] : [],
                                        this._ui.moveToStorageButton.visible = !0,
                                        this._sexIcon.sex = t.sex,
                                        this.refreshSetToFirstButton(t.index),
                                        this.refreshMoveToStorageButton(1),
                                        this.refreshOfflinePracticeButton(t.index),
                                        0 != t.skinID ? this.setSpiritMC(t.skinID) : this.setSpiritMC(t.id),
                                        this.setFeatureIcons(t.features),
                                        this.setGroupIcons(t.groups),
                                        this._ui.spiritMoreDetai.heightText.text = t.height,
                                        this._ui.spiritMoreDetai.weightText.text = t.weight,
                                        this._ui.spiritMoreDetai.idText.text = t.id.toString(),
                                        this._ui.spiritMoreDetai.descriptionText.text = t.description,
                                        this._ui.spiritMoreDetai.interestText.text = t.interest,
                                        this._ui.spiritMoreDetai.temperText.text = m.translate(I.TEMPER_IS, M.getTemper(t.temper)) + u.getTemperDesHtmlStr(t.temper),
                                        this._ui.spiritMoreDetai.caughtInfoText.text = M.getCaughtDescriptionStr(t.caughtTime, t.caughtLocation),
                                        1 == t.sex ? (this._ui.spiritMoreDetai.sexText.visible = !0,
                                            this._ui.spiritMoreDetai.sexText.text = "♂") : 2 == t.sex ? (this._ui.spiritMoreDetai.sexText.visible = !0,
                                            this._ui.spiritMoreDetai.sexText.text = "♀") : this._ui.spiritMoreDetai.sexText.visible = !1,
                                        this._ui.spiritMoreDetai.groupText.text = t.groups.toString(),
                                        this._ui.spiritMoreDetai.zhpText.text = t.ZHP.toString(),
                                        this._ui.spiritMoreDetai.zpaText.text = t.ZPA.toString(),
                                        this._ui.spiritMoreDetai.zpdText.text = t.ZPD.toString(),
                                        this._ui.spiritMoreDetai.zmaText.text = t.ZMA.toString(),
                                        this._ui.spiritMoreDetai.zmdText.text = t.ZMD.toString(),
                                        this._ui.spiritMoreDetai.zspText.text = t.ZSP.toString();
                                    var i = t.evolution;
                                    if (null != t.evolution) {
                                        var e = Number(i.split(" ")[0]);
                                        t.level >= e && (i = i.split(" ")[2])
                                    }
                                    this._ui.spiritMoreDetai.evolutionText.text = null != i ? i : I.CANT_EVOLVE,
                                        this.checkRebirth()
                                } else
                                    this.reset()
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(t) {
                                this._ui.visible = t
                            }
                        }, {
                            key: "listUIContainer",
                            get: function() {
                                return h.SysAPI.getUISysAPI().getWindowContainer()
                            }
                        }]),
                        e
                }());
                b.SPIRIT_SCALE_WIDTH = 1.2,
                    b.SPIRIT_SCALE_HEIGHT = 1.2,
                    b.SPIRIT_X = -1e3,
                    b.SPIRIT_Y = 360,
                    b.SPIRIT_ICON_SPACE_Y = 25,
                    b.SPIRIT_SKILL_WIDTH = 72,
                    b.SPIRIT_SKILL_HEIGHT = 72,
                    b.SPIRIT_SKILL_X = -338,
                    b.SPIRIT_SKILL_Y = 368,
                    b.SPIRIT_GROUP_WIDTH = 25,
                    b.SPIRIT_GROUP_HEIGHT = 25,
                    b.SPIRIT_GROUP_X = 0,
                    b.SPIRIT_GROUP_Y = 0;
                var z = function(t) {
                    function o() {
                        for (var i, e = arguments.length, o = new Array(e), n = 0; n < e; n++)
                            o[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(o)) || this)._sexIcon = void 0,
                            i._trainButton = void 0,
                            i._nameText = void 0,
                            i._setToFirstButton = void 0,
                            i._edenButton = void 0,
                            i._spiritRecoveryButton = void 0,
                            i._spiritStorageButton = void 0,
                            i._moveToStorageButton = void 0,
                            i._recoverButton = void 0,
                            i._spiritMoreDetai = void 0,
                            i._guardianPetBtn = void 0,
                            i._rebirthBtn = void 0,
                            i._offlinePracticeButton = void 0,
                            i._spiritNode = void 0,
                            i
                    }
                    return e(o, t),
                        i(o, [{
                            key: "sexIcon",
                            get: function() {
                                return this._sexIcon || (this._sexIcon = this.getChildByName("sexIcon")),
                                    this._sexIcon
                            }
                        }, {
                            key: "trainButton",
                            get: function() {
                                return this._trainButton || (this._trainButton = new _(this.getChildByName("trainButton"))),
                                    this._trainButton
                            }
                        }, {
                            key: "nameText",
                            get: function() {
                                return this._nameText || (this._nameText = new _(this.getChildByName("nameText"))),
                                    this._nameText
                            }
                        }, {
                            key: "setToFirstButton",
                            get: function() {
                                return this._setToFirstButton || (this._setToFirstButton = new _(this.getChildByName("setToFirstButton"))),
                                    this._setToFirstButton
                            }
                        }, {
                            key: "edenButton",
                            get: function() {
                                return this._edenButton || (this._edenButton = new _(this.getChildByName("edenButton"))),
                                    this._edenButton
                            }
                        }, {
                            key: "spiritRecoveryButton",
                            get: function() {
                                return this._spiritRecoveryButton || (this._spiritRecoveryButton = new _(this.getChildByName("spiritRecoveryButton"))),
                                    this._spiritRecoveryButton
                            }
                        }, {
                            key: "spiritStorageButton",
                            get: function() {
                                return this._spiritStorageButton || (this._spiritStorageButton = new _(this.getChildByName("spiritStorageButton"))),
                                    this._spiritStorageButton
                            }
                        }, {
                            key: "moveToStorageButton",
                            get: function() {
                                return this._moveToStorageButton || (this._moveToStorageButton = new _(this.getChildByName("moveToStorageButton"))),
                                    this._moveToStorageButton
                            }
                        }, {
                            key: "recoverButton",
                            get: function() {
                                return this._recoverButton || (this._recoverButton = new _(this.getChildByName("recoverButton"))),
                                    this._recoverButton
                            }
                        }, {
                            key: "spiritMoreDetai",
                            get: function() {
                                return this._spiritMoreDetai || (this._spiritMoreDetai = new L(this.getChildByName("spiritMoreDetai"))),
                                    this._spiritMoreDetai
                            }
                        }, {
                            key: "guardianPetBtn",
                            get: function() {
                                return this._guardianPetBtn || (this._guardianPetBtn = new _(this.getChildByName("guardianPetBtn"))),
                                    this._guardianPetBtn
                            }
                        }, {
                            key: "rebirthBtn",
                            get: function() {
                                return this._rebirthBtn || (this._rebirthBtn = new _(this.getChildByName("rebirthBtn"))),
                                    this._rebirthBtn
                            }
                        }, {
                            key: "offlinePracticeButton",
                            get: function() {
                                return this._offlinePracticeButton || (this._offlinePracticeButton = new _(this.getChildByName("offlinePracticeButton"))),
                                    this._offlinePracticeButton
                            }
                        }, {
                            key: "spiritNode",
                            get: function() {
                                return this._spiritNode || (this._spiritNode = this.getChildByName("spiritNode")),
                                    this._spiritNode
                            }
                        }]),
                        o
                }(_)
                    , L = function(t) {
                    function o() {
                        for (var i, e = arguments.length, o = new Array(e), n = 0; n < e; n++)
                            o[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(o)) || this)._heightText = void 0,
                            i._weightText = void 0,
                            i._descriptionText = void 0,
                            i._idText = void 0,
                            i._interestText = void 0,
                            i._temperText = void 0,
                            i._caughtInfoText = void 0,
                            i._sexText = void 0,
                            i._groupText = void 0,
                            i._zhpText = void 0,
                            i._zpaText = void 0,
                            i._zpdText = void 0,
                            i._zmaText = void 0,
                            i._zmdText = void 0,
                            i._zspText = void 0,
                            i._evolutionText = void 0,
                            i
                    }
                    return e(o, t),
                        i(o, [{
                            key: "heightText",
                            get: function() {
                                return this._heightText || (this._heightText = new _(this.getChildByName("heightText"))),
                                    this._heightText
                            }
                        }, {
                            key: "weightText",
                            get: function() {
                                return this._weightText || (this._weightText = new _(this.getChildByName("weightText"))),
                                    this._weightText
                            }
                        }, {
                            key: "descriptionText",
                            get: function() {
                                return this._descriptionText || (this._descriptionText = new _(this.getChildByName("descriptionText"))),
                                    this._descriptionText
                            }
                        }, {
                            key: "idText",
                            get: function() {
                                return this._idText || (this._idText = new _(this.getChildByName("idText"))),
                                    this._idText
                            }
                        }, {
                            key: "interestText",
                            get: function() {
                                return this._interestText || (this._interestText = new _(this.getChildByName("interestText"))),
                                    this._interestText
                            }
                        }, {
                            key: "temperText",
                            get: function() {
                                return this._temperText || (this._temperText = new _(this.getChildByName("temperText"))),
                                    this._temperText
                            }
                        }, {
                            key: "caughtInfoText",
                            get: function() {
                                return this._caughtInfoText || (this._caughtInfoText = new _(this.getChildByName("caughtInfoText"))),
                                    this._caughtInfoText
                            }
                        }, {
                            key: "sexText",
                            get: function() {
                                return this._sexText || (this._sexText = new _(this.getChildByName("sexText"))),
                                    this._sexText
                            }
                        }, {
                            key: "groupText",
                            get: function() {
                                return this._groupText || (this._groupText = new _(this.getChildByName("groupText"))),
                                    this._groupText
                            }
                        }, {
                            key: "zhpText",
                            get: function() {
                                return this._zhpText || (this._zhpText = new _(this.getChildByName("zhpText"))),
                                    this._zhpText
                            }
                        }, {
                            key: "zpaText",
                            get: function() {
                                return this._zpaText || (this._zpaText = new _(this.getChildByName("zpaText"))),
                                    this._zpaText
                            }
                        }, {
                            key: "zpdText",
                            get: function() {
                                return this._zpdText || (this._zpdText = new _(this.getChildByName("zpdText"))),
                                    this._zpdText
                            }
                        }, {
                            key: "zmaText",
                            get: function() {
                                return this._zmaText || (this._zmaText = new _(this.getChildByName("zmaText"))),
                                    this._zmaText
                            }
                        }, {
                            key: "zmdText",
                            get: function() {
                                return this._zmdText || (this._zmdText = new _(this.getChildByName("zmdText"))),
                                    this._zmdText
                            }
                        }, {
                            key: "zspText",
                            get: function() {
                                return this._zspText || (this._zspText = new _(this.getChildByName("zspText"))),
                                    this._zspText
                            }
                        }, {
                            key: "evolutionText",
                            get: function() {
                                return this._evolutionText || (this._evolutionText = new _(this.getChildByName("evolutionText"))),
                                    this._evolutionText
                            }
                        }]),
                        o
                }(_);
                o._RF.pop()
            }
        }
    }
));
