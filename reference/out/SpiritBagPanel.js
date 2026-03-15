System.register("chunks:///_virtual/SpiritBagPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CALLBACK.ts", "./CallbackCenter.ts", "./GuideModuleName.ts", "./GuideTargetName.ts", "./global.ts", "./AgentNode.ts", "./WindowBase.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./BuildLogHelper.ts", "./SpiritBalls.ts", "./CurrentSpirit.ts", "./BagDataProxy.ts", "./BagFunctionProxy.ts", "./SpiritDetails.ts", "./SpiritEquipFilter.ts", "./SpiritPropertiesDetail.ts", "./ExpAllocatorApp.ts", "./NetActionProxy.ts", "./SpiritBagPlugin.ts", "./EmptySpiritBallUILogic.ts", "./SpiritSkillWakeupApp.ts", "./UseManyAddExpItemPanel.ts", "./WidgetAdapter.ts", "./UseStriveUIDetail.ts", "./NotificationCenter.ts", "./NotifyDef.ts"], (function(t) {
        var i, e, l, s, n, r, a, o, p, u, h, c, _, d, S, I, A, f, g, m, y, U, B, k, x, w, v, N, C, E, D, b;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    l = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    r = t.CALLBACK
                }
                , function(t) {
                    a = t.CallbackCenter
                }
                , function(t) {
                    o = t.GuideModuleName
                }
                , function(t) {
                    p = t.GuideTargetName
                }
                , function(t) {
                    u = t.__global
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    c = t.WindowBase
                }
                , function(t) {
                    _ = t.PureNotificationCenter
                }
                , function(t) {
                    d = t.AppConstDef
                }
                , function(t) {
                    S = t.default
                }
                , function(t) {
                    I = t.SpiritBalls
                }
                , function(t) {
                    A = t.CurrentSpirit
                }
                , function(t) {
                    f = t.BagDataProxy
                }
                , function(t) {
                    g = t.BagFunctionProxy
                }
                , function(t) {
                    m = t.SpiritDetails
                }
                , function(t) {
                    y = t.SpiritEquipFilter
                }
                , function(t) {
                    U = t.SpiritPropertiesDetail
                }
                , function(t) {
                    B = t.ExpAllocatorApp
                }
                , function(t) {
                    k = t.NetActionProxy
                }
                , function(t) {
                    x = t.SpiritBagPlugin
                }
                , function(t) {
                    w = t.EmptySpiritBallUILogic
                }
                , function(t) {
                    v = t.SpiritSkillWakeupApp
                }
                , function(t) {
                    N = t.UseManyAddExpItemPanel
                }
                , function(t) {
                    C = t.WidgetAdapter
                }
                , function(t) {
                    E = t.UseStriveUIDetail
                }
                , function(t) {
                    D = t.NotificationCenter
                }
                , function(t) {
                    b = t.NotifyDef
                }
            ],
            execute: function() {
                s._RF.push({}, "7b4c8+J5FJO7ocj9D/g8p/r", "SpiritBagPanel", void 0);
                t("SpiritBagPanel", function(t) {
                    function s(i, e) {
                        var s;
                        void 0 === i && (i = null),
                        void 0 === e && (e = !1),
                            (s = t.call(this) || this)._ui = void 0,
                            s._data = void 0,
                            s._currentSpirit = void 0,
                            s._details = void 0,
                            s._balls = void 0,
                            s._thumbInfos = void 0,
                            s._useStriveUI = void 0,
                            s._propertiesDetail = void 0,
                            s._spiritEquipFilter = void 0,
                            s._useManyAddExpItemPanel = void 0,
                            s._emptySpiritBallUI = void 0,
                            s._isItemShellOnCurTab1 = !0,
                            s._tabIndex = 1,
                            s._isInitBagData = void 0,
                            s._isInitItemShellData = void 0,
                            s._learnNewSkillApp = void 0,
                            s._expAllocApp = void 0,
                            s._selectPetIndex = -1,
                            s._equipFilterCallBack = null,
                            s._needShowExpAlloc = !1,
                            s._needShowLearnSkill = !1,
                            s.addComponent(C),
                            a.notifyEvent(r.ANGEL_NEWBIE_GUIDE_ON_REGISTER, [o.SPIRIT_BAG, l(s)]);
                        var p = x.target;
                        return s._ui = new T(p),
                            s._ui.mcTitle.gotoAndStop(1),
                            s._ui.mcCloseState.gotoAndStop(1),
                            s.addChild(s._ui.target),
                            s._ui.on(n.TOUCH_START, s.onTouchStartRoot, l(s), !0),
                        1 == S.IS_LOCAL && (s._ui.closeButton.x = 0),
                            s._ui.closeButton.on(n.TOUCH_END, s.onUIClick, l(s)),
                            s._emptySpiritBallUI = new w(s._ui.emptySpiritBallUI),
                            s._currentSpirit = new A(s._ui.currentSpiritUI),
                            s._details = new m(s._ui.detailsUI),
                            s._balls = new I(s._ui.ballsUI),
                            s._useStriveUI = new E(s._ui.useStriveUI),
                            s._useManyAddExpItemPanel = new N(s._ui.useManyAddExpItemUI),
                            s._spiritEquipFilter = new y(s._ui.equipFilter),
                            s._spiritEquipFilter.callback = s.spiritEquipFilterCallBack.bind(l(s)),
                            s._spiritEquipFilter.hide(),
                            s._propertiesDetail = new U(s._ui.propertiesDetailUI),
                            s._learnNewSkillApp = new v,
                            s._learnNewSkillApp.ui = s._ui.learnNewSkill,
                            s._learnNewSkillApp.hide(),
                            s._expAllocApp = new B,
                            s._expAllocApp.uiContainer = s._ui.expAllocUI,
                            s._expAllocApp.hide(),
                            s._details.hideEquipItemList(),
                            s._propertiesDetail.hide(),
                            s._useStriveUI.visible = !1,
                            s._useManyAddExpItemPanel.visible = !1,
                            s._isInitBagData = !1,
                            s._isInitItemShellData = !1,
                            s.initialize(i, null, null, s._ui.target, e),
                            s.center(),
                            s
                    }
                    i(s, t);
                    var h = s.prototype;
                    return h.eyeShow = function(t) {
                        this._currentSpirit.eyeShow(t),
                            this._details.eyeShow(t),
                            this._ui.ballsUI.active = t
                    }
                        ,
                        h.showTab = function(t) {
                            this._currentSpirit.showTab(t),
                                this._details.showTab(t)
                        }
                        ,
                        h.onTouchStartRoot = function(t) {
                            this._details && this._details.onTouchStartRoot(t)
                        }
                        ,
                        h.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnBack":
                                    this.goBack();
                                    break;
                                case "closeButton":
                                    D.sendNotification(b.MAIN_UI_UPDATE_DIAMOND),
                                        _.sendNotification(d.NN_V_UPDATE_USER_INFO_PANEL),
                                        _.sendNotification(d.NN_V_CLOSE_SPIRIT_BAG_VIEW)
                            }
                        }
                        ,
                        h.goBack = function() {
                            this.closeState.gotoAndStop(1),
                                this._currentSpirit.visible = !0,
                                this._details.visible = !0,
                                this._learnNewSkillApp.hide(),
                                this._expAllocApp.hide(),
                                this._propertiesDetail.hide(),
                                this._spiritEquipFilter.hide()
                        }
                        ,
                        h.center = function() {
                            moveTo(155, 15)
                        }
                        ,
                        h.close = function() {
                            f.striveChange ? g.striveChangeFun.call(t.prototype.close) : t.prototype.close.call(this),
                                k.dispose(),
                                f.dispose(),
                                this._currentSpirit.cleanResData(),
                                this._isInitBagData = !1,
                                this._isInitItemShellData = !1
                        }
                        ,
                        h.dispose = function() {
                            this._currentSpirit.dispose(),
                                this._details.dispose(),
                                this._balls.dispose(),
                                this._learnNewSkillApp.dispose()
                        }
                        ,
                        h.reset = function() {
                            this._currentSpirit.reset(),
                                this._details.reset(),
                                this._emptySpiritBallUI.reset(),
                                this._balls.data = null,
                                this._useManyAddExpItemPanel.visible = !1,
                                this._details.hideEquipItemList(),
                                this.select(0)
                        }
                        ,
                        h.needShowExpAlloc = function(t) {
                            this._needShowExpAlloc = t
                        }
                        ,
                        h.needShowLearnSkill = function(t) {
                            this._needShowLearnSkill = t
                        }
                        ,
                        h.initBagData = function() {
                            this._isItemShellOnCurTab1 = !0,
                                f.selectedIndex = 0,
                                k.getSpiritBag()
                        }
                        ,
                        h.initChooseItem = function() {
                            this._balls.initCurrentChoose()
                        }
                        ,
                        h.update = function() {
                            this._isInitBagData = !0,
                                f.data.length > 0 ? (this._currentSpirit.data = f.selectedSpirit,
                                    this._expAllocApp.setSelectIndex(f.selectedIndex),
                                    this._expAllocApp.updateData(),
                                    this._expAllocApp.spiritData = f.selectedSpirit,
                                    this._details.data = f.selectedSpirit,
                                    this._propertiesDetail.data = f.selectedSpirit,
                                    this._spiritEquipFilter.data = f.selectedSpirit,
                                    this._balls.data = f.data,
                                    this._useStriveUI.spiritData = f.selectedSpirit,
                                    this._balls.select(f.selectedIndex),
                                    v.openIndex = f.selectedIndex,
                                    this._learnNewSkillApp.updateData(),
                                this._needShowExpAlloc && (this.showExpAlloc(),
                                    this._needShowExpAlloc = !1),
                                this._needShowLearnSkill && (this.showLearnSkill(),
                                    this._needShowLearnSkill = !1)) : (this._learnNewSkillApp && this._learnNewSkillApp.updateData(),
                                this._needShowExpAlloc && (u.showMsgBox("背包中还没有宠物！"),
                                    this._needShowExpAlloc = !1),
                                    this.reset(),
                                    this._details.data = null,
                                    this._details.hideEquipItemList(),
                                    this._emptySpiritBallUI.visible = !1),
                                k.getItemList(),
                            1 == this._tabIndex && f.data.length > 0 && this._isItemShellOnCurTab1 && (this._isInitItemShellData = !0),
                                this._emptySpiritBallUI.update()
                        }
                        ,
                        h.showLearnSkill = function() {
                            this._learnNewSkillApp && (this._learnNewSkillApp.show(),
                                this.closeState.gotoAndStop(2))
                        }
                        ,
                        h.showExpAlloc = function() {
                            this._expAllocApp && (this._expAllocApp.updateData(),
                                this._expAllocApp.show(),
                                this.closeState.gotoAndStop(2))
                        }
                        ,
                        h.showProperty = function() {
                            this._propertiesDetail.show(),
                                this.closeState.gotoAndStop(2)
                        }
                        ,
                        h.spiritEquipFilterCallBack = function(t) {
                            this._equipFilterCallBack && this._equipFilterCallBack(t)
                        }
                        ,
                        h.showEquipFilter = function(t, i) {
                            this._equipFilterCallBack = i,
                                this._spiritEquipFilter.show(t)
                        }
                        ,
                        h.select = function(t) {
                            f.selectedIndex = t,
                                this._currentSpirit.data = f.selectedSpirit,
                                this._details.data = f.selectedSpirit,
                                this._expAllocApp.spiritData = f.selectedSpirit,
                                this._currentSpirit.spiritData = f.selectedSpirit,
                            this._selectPetIndex != t && (this._details.data = f.selectedSpirit),
                                this._propertiesDetail.data = f.selectedSpirit,
                                this._balls.select(t),
                                this._learnNewSkillApp.setCurSpiritSkill(t),
                                this._expAllocApp.allocExpByIndex(t),
                                this._selectPetIndex = t
                        }
                        ,
                        h.changeSkillLogic = function() {
                            this._learnNewSkillApp.changeSkillLogic(f.selectedIndex)
                        }
                        ,
                        h.setSpiritMCBySkin = function(t) {
                            this._currentSpirit && this._currentSpirit.setSpiritMCBySkin(t)
                        }
                        ,
                        h.displayRestoreAnimation = function() {}
                        ,
                        h.getGuideTarget = function(t) {
                            switch (t) {
                                case p.TAB + "_1":
                                    return this._details.getGuideTarget(p.TAB + "_1");
                                case p.ITEM + "_0":
                                    return this._details.getGuideTarget(p.ITEM + "_0");
                                case p.OK:
                                    return this._useManyAddExpItemPanel.getGuideTarget(p.OK)
                            }
                            return null
                        }
                        ,
                        e(s, [{
                            key: "bagTabIndex",
                            set: function(t) {
                                this._tabIndex = t,
                                    this._currentSpirit.visible = !0,
                                    this._details.visible = !0
                            }
                        }, {
                            key: "currentSpirit",
                            get: function() {
                                return this._currentSpirit
                            }
                        }, {
                            key: "currentEquip",
                            get: function() {
                                return this._details.currentEquip
                            }
                        }, {
                            key: "learnNewSkill",
                            get: function() {
                                return this._learnNewSkillApp
                            }
                        }, {
                            key: "details",
                            get: function() {
                                return this._details
                            }
                        }, {
                            key: "itemShell",
                            get: function() {
                                return this._details.itemShell
                            }
                        }, {
                            key: "useStriveUI",
                            get: function() {
                                return this._useStriveUI
                            }
                        }, {
                            key: "propertiesDetail",
                            get: function() {
                                return this._propertiesDetail
                            }
                        }, {
                            key: "title",
                            get: function() {
                                return this._ui.mcTitle
                            }
                        }, {
                            key: "closeState",
                            get: function() {
                                return this._ui.mcCloseState
                            }
                        }, {
                            key: "useManyAddExpItemPanel",
                            get: function() {
                                return this._useManyAddExpItemPanel
                            }
                        }]),
                        s
                }(c));
                var T = function(t) {
                    function l() {
                        for (var i, e = arguments.length, l = new Array(e), s = 0; s < e; s++)
                            l[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(l)) || this)._closeButton = void 0,
                            i._expAllocUI = void 0,
                            i._restoreAnimation = void 0,
                            i._mcTitle = void 0,
                            i._mcCloseState = void 0,
                            i._emptySpiritBallUI = void 0,
                            i._currentSpiritUI = void 0,
                            i._detailsUI = void 0,
                            i._ballsUI = void 0,
                            i._expBtnUI = void 0,
                            i._thumbInfosUI = void 0,
                            i._useStriveUI = void 0,
                            i._useManyAddExpItemUI = void 0,
                            i._propertiesDetailUI = void 0,
                            i._equipFilter = void 0,
                            i._learnNewSkill = void 0,
                            i
                    }
                    return i(l, t),
                        e(l, [{
                            key: "closeButton",
                            get: function() {
                                return this._closeButton || (this._closeButton = new h(this.getChildByName("closeButton"))),
                                    this._closeButton
                            }
                        }, {
                            key: "expAllocUI",
                            get: function() {
                                return this._expAllocUI || (this._expAllocUI = this.getChildByName("expAllocUI")),
                                    this._expAllocUI
                            }
                        }, {
                            key: "restoreAnimation",
                            get: function() {
                                return this._restoreAnimation || (this._restoreAnimation = new h(this.getChildByName("restoreAnimation"))),
                                    this._restoreAnimation
                            }
                        }, {
                            key: "mcTitle",
                            get: function() {
                                return this._mcTitle || (this._mcTitle = new h(this.getChildByName("mcTitle"))),
                                    this._mcTitle
                            }
                        }, {
                            key: "mcCloseState",
                            get: function() {
                                return this._mcCloseState || (this._mcCloseState = new h(this.getChildByName("mcCloseState"))),
                                    this._mcCloseState
                            }
                        }, {
                            key: "emptySpiritBallUI",
                            get: function() {
                                return this._emptySpiritBallUI || (this._emptySpiritBallUI = this.getChildByName("emptySpiritBallUI")),
                                    this._emptySpiritBallUI
                            }
                        }, {
                            key: "currentSpiritUI",
                            get: function() {
                                return this._currentSpiritUI || (this._currentSpiritUI = this.getChildByName("currentSpiritUI")),
                                    this._currentSpiritUI
                            }
                        }, {
                            key: "detailsUI",
                            get: function() {
                                return this._detailsUI || (this._detailsUI = this.getChildByName("detailsUI")),
                                    this._detailsUI
                            }
                        }, {
                            key: "ballsUI",
                            get: function() {
                                return this._ballsUI || (this._ballsUI = this.getChildByName("ballsUI")),
                                    this._ballsUI
                            }
                        }, {
                            key: "expBtnUI",
                            get: function() {
                                return this._expBtnUI || (this._expBtnUI = this.getChildByName("expBtnUI")),
                                    this._expBtnUI
                            }
                        }, {
                            key: "thumbInfosUI",
                            get: function() {
                                return this._thumbInfosUI || (this._thumbInfosUI = this.getChildByName("thumbInfosUI")),
                                    this._thumbInfosUI
                            }
                        }, {
                            key: "useStriveUI",
                            get: function() {
                                return this._useStriveUI || (this._useStriveUI = this.getChildByName("useStriveUI")),
                                    this._useStriveUI
                            }
                        }, {
                            key: "useManyAddExpItemUI",
                            get: function() {
                                return this._useManyAddExpItemUI || (this._useManyAddExpItemUI = this.getChildByName("useManyAddExpItemUI")),
                                    this._useManyAddExpItemUI
                            }
                        }, {
                            key: "propertiesDetailUI",
                            get: function() {
                                return this._propertiesDetailUI || (this._propertiesDetailUI = this.getChildByName("propertiesDetailUI")),
                                    this._propertiesDetailUI
                            }
                        }, {
                            key: "equipFilter",
                            get: function() {
                                return this._equipFilter || (this._equipFilter = this.getChildByName("equipFilter")),
                                    this._equipFilter
                            }
                        }, {
                            key: "learnNewSkill",
                            get: function() {
                                return this._learnNewSkill || (this._learnNewSkill = this.getChildByName("learnNewSkill")),
                                    this._learnNewSkill
                            }
                        }]),
                        l
                }(h);
                s._RF.pop()
            }
        }
    }
));
