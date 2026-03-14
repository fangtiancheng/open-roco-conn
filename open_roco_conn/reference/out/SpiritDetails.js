System.register("chunks:///_virtual/SpiritDetails.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./GuideTargetName.ts", "./global.ts", "./TalentDes.ts", "./AImage.ts", "./BagDataProxy.ts", "./EquipBagUILogic.ts", "./SpiritItemShell.ts", "./NetActionProxy.ts", "./CurrentEquipUILogic.ts", "./SpiritFollowCheckBox.ts", "./TalentChooseUI.ts", "./SpiritBagRefProxy.ts", "./SpiritBagIntimacyIcon.ts", "./SpiritBasicDetail.ts", "./SpiritDetailButton.ts", "./OpenAsWinDes.ts", "./AgentNode.ts", "./FilterUtil.ts", "./SkinChooseLogic.ts", "./ToolTip.ts", "./BuildLogHelper.ts"], (function(t) {
        var i, e, s, n, o, a, l, h, u, c, r, _, p, g, T, d, m, B, I, b, D, f, y, U, v, C, k, S, w, q;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType,
                        o = t.Vec2,
                        a = t.sys,
                        l = t.Button
                }
                , function(t) {
                    h = t.DEFINE
                }
                , function(t) {
                    u = t.GuideTargetName
                }
                , function(t) {
                    c = t.__global
                }
                , function(t) {
                    r = t.TalentDes
                }
                , function(t) {
                    _ = t.AImage
                }
                , function(t) {
                    p = t.BagDataProxy
                }
                , function(t) {
                    g = t.EquipBagUILogic
                }
                , function(t) {
                    T = t.SpiritItemShell
                }
                , function(t) {
                    d = t.NetActionProxy
                }
                , function(t) {
                    m = t.CurrentEquipUILogic
                }
                , function(t) {
                    B = t.SpiritFollowCheckBox
                }
                , function(t) {
                    I = t.TalentChooseUI
                }
                , function(t) {
                    b = t.SpiritBagRefProxy
                }
                , function(t) {
                    D = t.SpiritBagIntimacyIcon
                }
                , function(t) {
                    f = t.SpiritBasicDetail
                }
                , function(t) {
                    y = t.SpiritDetailButton
                }
                , function(t) {
                    U = t.OpenAsWinDes
                }
                , function(t) {
                    v = t.AgentNodeComponent,
                        C = t.AgentNode
                }
                , function(t) {
                    k = t.FilterUtil
                }
                , function(t) {
                    S = t.SkinChooseLogic
                }
                , function(t) {
                    w = t.ToolTipComponent
                }
                , function(t) {
                    q = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "4b0badxgFJDe5aiQad3+tl2", "SpiritDetails", void 0);
                t("SpiritDetails", function() {
                    var t = e.prototype;
                    function e(t) {
                        this._ui = void 0,
                            this._basicDetail = void 0,
                            this._basicDetailButton = void 0,
                            this._propsDetailButton = void 0,
                            this._equipDetailsButton = void 0,
                            this._exteriorDetailsButton = void 0,
                            this._dataDetailsButton = void 0,
                            this._spiritFollowToggleButton = void 0,
                            this._itemShell = void 0,
                            this._isInitItemShellData = void 0,
                            this._currentEquip = void 0,
                            this._equipBagUI = void 0,
                            this._tabButtons = void 0,
                            this._talentImage = void 0,
                            this._talentImage2 = void 0,
                            this._talentChooseUI = void 0,
                            this._skinChooseLogic = void 0,
                            this._intimacyIcon = void 0,
                            this._bgMC = void 0,
                            this._talentLevelTemp = -1,
                            this._talentTypeTemp = -1,
                            this._isHireTemp = !1,
                            this._ui = new M(t),
                            this._bgMC = new C(t.parent.getChildByName("bgMC")),
                            this._talentChooseUI = new I(this._ui.parentTarget.talentChooseUI),
                            this._talentChooseUI.onChooseWakeUp = this.onChooseTalentWake.bind(this),
                            this._talentChooseUI.onChooseSuccess = this.onTalentChooseSuccess.bind(this),
                            this._intimacyIcon = new D(this._ui.intimacyMc),
                            this._skinChooseLogic = new S(this._ui.skinChooseUI),
                            this._ui.basicDetailsUI.y = 0,
                            this._basicDetail = new f(this._ui.basicDetailsUI.target),
                            this._itemShell = new T(this._ui.itemShellUI),
                            this._ui.currentEquipUI.y = 0,
                            this._currentEquip = new m(this._ui.currentEquipUI.target),
                            this._equipBagUI = new g(this._ui.equipBagUI,this),
                            this._equipBagUI.visible = !1,
                            this._basicDetailButton = new y(this._ui.basicDetailsButtonUI,this.onSelectBasicDetails.bind(this),null,this._ui.getChildIndex(this._ui.basicDetailsButtonUI)),
                            this._propsDetailButton = new y(this._ui.propsDetailButtonUI,this.onSelectPropsDetail.bind(this),null,this._ui.getChildIndex(this._ui.propsDetailButtonUI)),
                            this._equipDetailsButton = new y(this._ui.equipDetailsButtonUI,this.onSelectEquipDetails.bind(this),null,this._ui.getChildIndex(this._ui.equipDetailsButtonUI)),
                            this._exteriorDetailsButton = new y(this._ui.exteriorDetailsButtonUI,this.onSelectExteriorDetails.bind(this),null,this._ui.getChildIndex(this._ui.exteriorDetailsButtonUI)),
                            this._dataDetailsButton = new y(this._ui.dataDetailsButtonUI,this.onSelectDataDetails.bind(this),null,this._ui.getChildIndex(this._ui.dataDetailsButtonUI)),
                            this._tabButtons = [this._basicDetailButton, this._propsDetailButton, this._equipDetailsButton, this._exteriorDetailsButton, this._dataDetailsButton],
                            this._spiritFollowToggleButton = new B(this._ui.followToggleButton),
                            this._ui.followToggleButton.on(n.TOUCH_END, this.onToggleFollowUser, this),
                            this.addEvents(),
                            this.initTalentIcon()
                    }
                    return t.eyeShow = function(t) {
                        this._currentEquip.eyeShow(t),
                            this._equipBagUI.eyeShow(t),
                            this._skinChooseLogic.eyeShow(t),
                            this._ui.followToggleButton.active = t,
                            this._ui.intimacyMc.active = t
                    }
                        ,
                        t.showTab = function(t) {
                            this._currentEquip.showTab(t),
                                this._equipBagUI.showTab(t),
                                this._skinChooseLogic.showTab(t)
                        }
                        ,
                        t.addEvents = function() {
                            for (var t = 0, i = ["btn_skill", "btn_expAlloc", "basicTarget", "propsTarget", "equipTarget", "btnShowEquipBag", "exteriorTarget", "dataTarget"]; t < i.length; t++) {
                                var e = i[t];
                                if (e) {
                                    var s = this._ui.getChildByName(e);
                                    s && s.on(n.TOUCH_END, this.onUIClick, this)
                                }
                            }
                            this._currentEquip.target.cellBg.btnShowEquipBag.on(n.TOUCH_END, this.onUIClick, this),
                                this._basicDetail.target.btn_skill.on(n.TOUCH_END, this.onUIClick, this),
                                this._basicDetail.target.btn_expAlloc.on(n.TOUCH_END, this.onUIClick, this)
                        }
                        ,
                        t.showSpiritSkinChooseUI = function() {}
                        ,
                        t.onToggleFollowUser = function(t) {
                            null != p.selectedSpirit && null != p.selectedSpirit ? this._spiritFollowToggleButton.check ? d.followUser(0) : d.followUser(p.selectedIndex + 1) : c.showMsgBox("当前无宠物可跟随！")
                        }
                        ,
                        t.onModelTopLevelAskDo = function(t) {}
                        ,
                        t.onModelTopLevelAskClose = function(t) {}
                        ,
                        t.onModelTopLevelConfirmClose = function(t) {}
                        ,
                        t.onModelItemNotEnoughClose = function(t) {}
                        ,
                        t.onSuccessPanelClose = function(t) {}
                        ,
                        t.onModelTopLevelConfirmDo = function(t) {}
                        ,
                        t.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btn_skill":
                                    t.target.getComponent(w) && t.target.getComponent(w).hide(),
                                        b.spiritBagPanel.showLearnSkill();
                                    break;
                                case "btn_expAlloc":
                                    1 == t.target.getComponent(v).target.enableTag && b.spiritBagPanel.showExpAlloc();
                                    break;
                                case "basicTarget":
                                    this._basicDetailButton.selected = !0;
                                    break;
                                case "propsTarget":
                                    this._propsDetailButton.selected = !0;
                                    break;
                                case "equipTarget":
                                    this._equipDetailsButton.selected = !0;
                                    break;
                                case "exteriorTarget":
                                    this._exteriorDetailsButton.selected = !0;
                                    break;
                                case "dataTarget":
                                    this._dataDetailsButton.selected = !0;
                                    break;
                                case "btnShowEquipBag":
                                    this._equipBagUI.visible = !0,
                                        this._equipBagUI.reset(),
                                        this._currentEquip.showBag(!0)
                            }
                        }
                        ,
                        t.dispose = function() {
                            this._basicDetail.dispose(),
                                this._itemShell.dispose(),
                                this._currentEquip.dispose(),
                                this._basicDetailButton.dispose(),
                                this._equipDetailsButton.dispose(),
                                this._talentChooseUI.dispose(),
                                this._ui.talent.off(n.TOUCH_END, this.onTalentButtonClick, this)
                        }
                        ,
                        t.reset = function() {
                            this._basicDetailButton.selected = !0,
                                this._spiritFollowToggleButton.check = !1
                        }
                        ,
                        t.onTalentWakeFail = function(t, i) {}
                        ,
                        t.onChooseTalentWake = function(t, i, e) {
                            b.spiritBagPanel.close();
                            var s = new U;
                            s.winPos = new o(0,0),
                                s.name = "",
                                s.src = "activityApp://3470/ui3470",
                                s.params = {
                                    ui: "NpcClick",
                                    args: {
                                        xml: t,
                                        index: i,
                                        spiritData: e,
                                        tab: 1
                                    }
                                },
                                s.isModal = !0,
                                c.openAsWin(s)
                        }
                        ,
                        t.onTalentChooseSuccess = function() {
                            d.getSpiritBag()
                        }
                        ,
                        t.onTalentWakeSuccess = function() {}
                        ,
                        t.initTalentIcon = function() {
                            this._ui.talent.mouseChildren = !1,
                                this._ui.talent.buttonMode = !0;
                            for (var t = this._ui.talent.container; t.children.length > 0; )
                                t.removeChildAt(0);
                            var i = new _(60,60);
                            t.addChild(i),
                                this._talentImage = i,
                                this._ui.talent.mcTooltip.visible = !1,
                                a.platform == a.Platform.MOBILE_BROWSER ? (this._ui.on(n.TOUCH_START, this.onTouchStart, this, !0),
                                    this._ui.talent.on(n.TOUCH_START, this.onTalentTouchStart, this),
                                    this._ui.talent.on(n.TOUCH_CANCEL, this.onTalentTouchCancel, this),
                                    this._ui.talent.on(n.TOUCH_END, this.onTalentTouchEnd, this)) : (this._ui.talent.on(n.MOUSE_ENTER, this.onTalentOver, this),
                                    this._ui.talent.on(n.MOUSE_LEAVE, this.onTalentOut, this),
                                    this._ui.talent.on(n.MOUSE_DOWN, this.onTalentMouseDown, this)),
                                this._ui.talent.on(l.EventType.CLICK, this.onTalentButtonClick, this)
                        }
                        ,
                        t.onTouchStartRoot = function(t) {
                            t && (1 == q.IS_LOCAL && console.log("SpiritDetails-onTouchStartRoot"),
                            a.platform == a.Platform.MOBILE_BROWSER && (this._ui.talent.mcTooltip.visible = !1))
                        }
                        ,
                        t.onTouchStart = function(t) {
                            1 == q.IS_LOCAL && console.log("SpiritDetails-onTouchStart")
                        }
                        ,
                        t.onTalentButtonClick = function(t) {
                            -1 == this._talentTypeTemp || 0 == this._talentTypeTemp || (this._talentLevelTemp > 0 ? (this._talentChooseUI.show(),
                                this._talentChooseUI.query()) : this._isHireTemp ? c.UI.alert("", "所选宠物是雇佣兵，无法觉醒!") : (this._talentChooseUI.show(),
                                this._talentChooseUI.query()))
                        }
                        ,
                        t.onTalentOver = function(t) {
                            -1 != this._talentTypeTemp && (this._ui.talent.mcTooltip.visible = !0)
                        }
                        ,
                        t.onTalentOut = function(t) {
                            this._ui.talent.mcTooltip.visible = !1
                        }
                        ,
                        t.onTalentMouseDown = function(t) {
                            this._ui.talent.mcTooltip.visible = !1
                        }
                        ,
                        t.onTalentTouchStart = function(t) {
                            -1 != this._talentTypeTemp && (this._ui.talent.mcTooltip.visible = !0)
                        }
                        ,
                        t.onTalentTouchCancel = function(t) {}
                        ,
                        t.onTalentTouchEnd = function(t) {}
                        ,
                        t.setTalentIcon = function(t) {
                            if (this._talentChooseUI.setSpiritData(t),
                            t.talentLevel != this._talentLevelTemp || t.talentType != this._talentTypeTemp) {
                                this._isHireTemp = t.isHire,
                                    this._talentLevelTemp = t.talentLevel,
                                    this._talentTypeTemp = t.talentType;
                                var i = t.talentType;
                                if (0 == t.talentType)
                                    this._ui.talent.mcTooltip.mcWake.gotoAndStop(3),
                                        this._ui.talent.mcTooltip.mcWake.y = -34,
                                        this._ui.talent.mcTooltip.bg.height = 72,
                                        this._ui.talent.mcTooltip.txtTalentDes.visible = !1,
                                        this._ui.talent.mcTooltip.txtTalentName.visible = !1,
                                        this._ui.talent.mcTooltip.mcLabel.visible = !1;
                                else if (200 == t.talentType)
                                    this._ui.talent.mcTooltip.mcWake.gotoAndStop(4),
                                        this._ui.talent.mcTooltip.mcWake.y = -28,
                                        this._ui.talent.mcTooltip.bg.height = 56,
                                        this._ui.talent.mcTooltip.txtTalentDes.visible = !1,
                                        this._ui.talent.mcTooltip.txtTalentName.visible = !1,
                                        this._ui.talent.mcTooltip.mcLabel.visible = !1;
                                else if (t.talentLevel > 0) {
                                    this._ui.talent.mcTooltip.txtTalentDes.visible = !0,
                                        this._ui.talent.mcTooltip.txtTalentName.visible = !0,
                                        this._ui.talent.mcTooltip.mcLabel.visible = !0,
                                        this._ui.talent.mcTooltip.txtTalentDes.text = r.SET[t.talentType].description + "",
                                        this._ui.talent.mcTooltip.txtTalentDes.updateRenderData(!0),
                                        this._ui.talent.mcTooltip.txtTalentName.text = "血脉天赋：" + r.getName(t.talentType),
                                        this._ui.talent.mcTooltip.mcWake.gotoAndStop(t.talentLevel > 0 ? 2 : 1);
                                    var e = -20 + this._ui.talent.mcTooltip.txtTalentDes.y - this._ui.talent.mcTooltip.txtTalentDes.height * this._ui.talent.mcTooltip.txtTalentDes.scaleY;
                                    e = (e = Math.floor(e)) % 2 == 0 ? e : e - 1,
                                        this._ui.talent.mcTooltip.mcWake.y = e,
                                        this._ui.talent.mcTooltip.bg.height = Math.abs(this._ui.talent.mcTooltip.mcWake.y) + this._ui.talent.mcTooltip.mcWake.height + 10
                                } else
                                    this._ui.talent.mcTooltip.mcWake.gotoAndStop(5),
                                        this._ui.talent.mcTooltip.mcWake.y = -28,
                                        this._ui.talent.mcTooltip.bg.height = 70,
                                        this._ui.talent.mcTooltip.txtTalentDes.visible = !1,
                                        this._ui.talent.mcTooltip.txtTalentName.visible = !1,
                                        this._ui.talent.mcTooltip.mcLabel.visible = !1,
                                        i = 201;
                                this._ui.talent.mcTooltip.visible = !1,
                                    this._talentImage.setPath(h.COMM_ROOT + "res/talent/" + i + "_small.png"),
                                    t.talentLevel >= 0 && t.talentType > 0 ? this._talentImage.filters = [] : this._talentImage.filters = k.getGrayFilter()
                            }
                        }
                        ,
                        t.resetTalentIcon = function() {
                            this._talentLevelTemp = -1,
                                this._talentTypeTemp = -1,
                                this._talentImage.unload(),
                                this._talentImage.filters = []
                        }
                        ,
                        t.getEqupData = function() {
                            this._currentEquip.getItemData()
                        }
                        ,
                        t.hideEquipItemList = function() {
                            this._currentEquip.hideEquipItemList()
                        }
                        ,
                        t.onSelectBasicDetails = function(t) {
                            b.spiritBagPanel.showTab(1),
                                this._bgMC.gotoAndStop(1),
                                this._propsDetailButton.selected = !1,
                                this._equipDetailsButton.selected = !1,
                                this._exteriorDetailsButton.selected = !1,
                                this._dataDetailsButton.selected = !1,
                                this._ui.basicDetailsUI.visible = !0,
                                this._itemShell.visible = !1,
                                this._currentEquip.hideEquipItemList(),
                                this.sortButtonIndex()
                        }
                        ,
                        t.onSelectPropsDetail = function(t) {
                            b.spiritBagPanel.showTab(2),
                                this._bgMC.gotoAndStop(2),
                                this._basicDetailButton.selected = !1,
                                this._equipDetailsButton.selected = !1,
                                this._exteriorDetailsButton.selected = !1,
                                this._dataDetailsButton.selected = !1,
                                this._ui.basicDetailsUI.visible = !1,
                                this._itemShell.visible = !0,
                                this._currentEquip.hideEquipItemList(),
                                this.sortButtonIndex()
                        }
                        ,
                        t.onSelectEquipDetails = function(t) {
                            b.spiritBagPanel.showTab(3),
                                this._bgMC.gotoAndStop(3),
                                this._basicDetailButton.selected = !1,
                                this._propsDetailButton.selected = !1,
                                this._exteriorDetailsButton.selected = !1,
                                this._dataDetailsButton.selected = !1,
                                this._ui.basicDetailsUI.visible = !1,
                                this._itemShell.visible = !1,
                                this._currentEquip.showEquipItemList(),
                                this._currentEquip.getItemData(),
                                this.sortButtonIndex()
                        }
                        ,
                        t.onSelectExteriorDetails = function(t) {
                            b.spiritBagPanel.showTab(4),
                                this._bgMC.gotoAndStop(4),
                                this._basicDetailButton.selected = !1,
                                this._propsDetailButton.selected = !1,
                                this._equipDetailsButton.selected = !1,
                                this._dataDetailsButton.selected = !1,
                                this._ui.basicDetailsUI.visible = !1,
                                this._itemShell.visible = !1,
                                this._currentEquip.hideEquipItemList(),
                                this.sortButtonIndex()
                        }
                        ,
                        t.onSelectDataDetails = function(t) {
                            this._bgMC.gotoAndStop(5),
                                this._basicDetailButton.selected = !1,
                                this._propsDetailButton.selected = !1,
                                this._equipDetailsButton.selected = !1,
                                this._exteriorDetailsButton.selected = !1,
                                this._ui.basicDetailsUI.visible = !1,
                                this._itemShell.visible = !1,
                                this._currentEquip.hideEquipItemList(),
                                this.sortButtonIndex(),
                                b.spiritBagPanel.showTab(5)
                        }
                        ,
                        t.sortButtonIndex = function() {
                            for (var t = 0; t < this._tabButtons.length; t++)
                                if (this._tabButtons[t].selected) {
                                    for (var i = 0; i < this._tabButtons.length; i++)
                                        if (this._tabButtons[t].childrenIndex < this._tabButtons[i].childrenIndex) {
                                            var e = this._tabButtons[t].childrenIndex;
                                            this._tabButtons[t].childrenIndex = this._tabButtons[i].childrenIndex,
                                                this._tabButtons[i].childrenIndex = e,
                                                this._ui.swapChildren(this._tabButtons[t].display, this._tabButtons[i].display)
                                        }
                                    break
                                }
                        }
                        ,
                        t.getGuideTarget = function(t) {
                            switch (t) {
                                case u.TAB + "_1":
                                    return this._ui.propsTarget.target;
                                case u.ITEM + "_0":
                                    return null != this._itemShell.cells[4] ? this._itemShell.cells[4].display : null
                            }
                            return null
                        }
                        ,
                        i(e, [{
                            key: "itemShell",
                            get: function() {
                                return this._itemShell
                            }
                        }, {
                            key: "currentEquip",
                            get: function() {
                                return this._currentEquip
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                null == t || null == t ? (this._itemShell.hideCells(),
                                    this.resetTalentIcon(),
                                    this._intimacyIcon.intimacy = -1,
                                    this._basicDetail.target.btn_expAlloc.active = !1) : (this._basicDetail.target.btn_expAlloc.active = t.level < 100,
                                    this._itemShell.showCells(),
                                    this.setTalentIcon(t),
                                    0 == t.affiliation ? t.closeness > 100 ? this._intimacyIcon.intimacy = 100 : this._intimacyIcon.intimacy = t.closeness : t.affiliation > 5 ? this._intimacyIcon.intimacy = 105 : this._intimacyIcon.intimacy = t.affiliation + 100,
                                    this._spiritFollowToggleButton.check = t.following,
                                    this._skinChooseLogic.show()),
                                    this._skinChooseLogic.data = t,
                                    this._basicDetail.data = t,
                                    this._currentEquip.spiritData = t
                            }
                        }, {
                            key: "bagvisible",
                            get: function() {
                                return this._equipBagUI.visible
                            },
                            set: function(t) {
                                this._equipBagUI.visible = t,
                                this._equipBagUI.visible || (this._ui.currentEquipUI.gotoBookBtn.visible = !1,
                                    this._currentEquip.getItemData()),
                                    this._currentEquip.showBag(t)
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(t) {
                                this._ui.visible = t
                            }
                        }]),
                        e
                }());
                var x = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._bg = void 0,
                            i._mcWake = void 0,
                            i._mcLabel = void 0,
                            i._txtTalentDes = void 0,
                            i._txtTalentName = void 0,
                            i
                    }
                    return e(s, t),
                        i(s, [{
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new C(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "mcWake",
                            get: function() {
                                return this._mcWake || (this._mcWake = new C(this.getChildByName("mcWake"))),
                                    this._mcWake
                            }
                        }, {
                            key: "mcLabel",
                            get: function() {
                                return this._mcLabel || (this._mcLabel = new C(this.getChildByName("mcLabel"))),
                                    this._mcLabel
                            }
                        }, {
                            key: "txtTalentDes",
                            get: function() {
                                return this._txtTalentDes || (this._txtTalentDes = new C(this.getChildByName("txtTalentDes"))),
                                    this._txtTalentDes
                            }
                        }, {
                            key: "txtTalentName",
                            get: function() {
                                return this._txtTalentName || (this._txtTalentName = new C(this.getChildByName("txtTalentName"))),
                                    this._txtTalentName
                            }
                        }]),
                        s
                }(C)
                    , E = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._mcTooltip = void 0,
                            i._mcWake = void 0,
                            i._container = void 0,
                            i
                    }
                    return e(s, t),
                        i(s, [{
                            key: "mcTooltip",
                            get: function() {
                                return this._mcTooltip || (this._mcTooltip = new x(this.getChildByName("mcTooltip"))),
                                    this._mcTooltip
                            }
                        }, {
                            key: "mcWake",
                            get: function() {
                                return this._mcWake || (this._mcWake = new C(this.getChildByName("mcWake"))),
                                    this._mcWake
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new C(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        s
                }(C)
                    , N = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._gotoBookBtn = void 0,
                            i
                    }
                    return e(s, t),
                        i(s, [{
                            key: "gotoBookBtn",
                            get: function() {
                                return this._gotoBookBtn || (this._gotoBookBtn = new C(this.getChildByName("gotoBookBtn")),
                                    this._gotoBookBtn.visible = !1),
                                    this._gotoBookBtn
                            }
                        }]),
                        s
                }(C)
                    , L = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._talentChooseUI = void 0,
                            i
                    }
                    return e(s, t),
                        i(s, [{
                            key: "talentChooseUI",
                            get: function() {
                                return this._talentChooseUI || (this._talentChooseUI = this.getChildByName("talentChooseUI")),
                                    this._talentChooseUI
                            }
                        }]),
                        s
                }(C)
                    , M = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._bg = void 0,
                            i._intimacyMc = void 0,
                            i._skinChooseUI = void 0,
                            i._currentEquipUI = void 0,
                            i._basicTarget = void 0,
                            i._propsTarget = void 0,
                            i._equipTarget = void 0,
                            i._skinMc = void 0,
                            i._basicDetailsUI = void 0,
                            i._talent = void 0,
                            i._basicDetailsButtonUI = void 0,
                            i._propsDetailButtonUI = void 0,
                            i._equipDetailsButtonUI = void 0,
                            i._exteriorDetailsButtonUI = void 0,
                            i._dataDetailsButtonUI = void 0,
                            i._followToggleButton = void 0,
                            i._parentTarget = void 0,
                            i._itemShellUI = void 0,
                            i._equipBagUI = void 0,
                            i
                    }
                    return e(s, t),
                        s.prototype.swapChildren = function(t, i) {}
                        ,
                        i(s, [{
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new C(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "intimacyMc",
                            get: function() {
                                return this._intimacyMc || (this._intimacyMc = this.getChildByName("intimacyMc")),
                                    this._intimacyMc
                            }
                        }, {
                            key: "skinChooseUI",
                            get: function() {
                                return this._skinChooseUI || (this._skinChooseUI = this.getChildByName("skinChooseUI")),
                                    this._skinChooseUI
                            }
                        }, {
                            key: "currentEquipUI",
                            get: function() {
                                return this._currentEquipUI || (this._currentEquipUI = new N(this.getChildByName("currentEquipUI"))),
                                    this._currentEquipUI
                            }
                        }, {
                            key: "basicTarget",
                            get: function() {
                                return this._basicTarget || (this._basicTarget = new C(this.getChildByName("basicTarget"))),
                                    this._basicTarget
                            }
                        }, {
                            key: "propsTarget",
                            get: function() {
                                return this._propsTarget || (this._propsTarget = new C(this.getChildByName("propsTarget"))),
                                    this._propsTarget
                            }
                        }, {
                            key: "equipTarget",
                            get: function() {
                                return this._equipTarget || (this._equipTarget = new C(this.getChildByName("equipTarget"))),
                                    this._equipTarget
                            }
                        }, {
                            key: "skinMc",
                            get: function() {
                                return this._skinMc || (this._skinMc = new C(this.getChildByName("skinMc"))),
                                    this._skinMc
                            }
                        }, {
                            key: "basicDetailsUI",
                            get: function() {
                                return this._basicDetailsUI || (this._basicDetailsUI = new C(this.getChildByName("basicDetailsUI"))),
                                    this._basicDetailsUI
                            }
                        }, {
                            key: "talent",
                            get: function() {
                                return this._talent || (this._talent = new E(this.getChildByName("talent"))),
                                    this._talent
                            }
                        }, {
                            key: "basicDetailsButtonUI",
                            get: function() {
                                return this._basicDetailsButtonUI || (this._basicDetailsButtonUI = this.getChildByName("basicDetailsButtonUI")),
                                    this._basicDetailsButtonUI
                            }
                        }, {
                            key: "propsDetailButtonUI",
                            get: function() {
                                return this._propsDetailButtonUI || (this._propsDetailButtonUI = this.getChildByName("propsDetailButtonUI")),
                                    this._propsDetailButtonUI
                            }
                        }, {
                            key: "equipDetailsButtonUI",
                            get: function() {
                                return this._equipDetailsButtonUI || (this._equipDetailsButtonUI = this.getChildByName("equipDetailsButtonUI")),
                                    this._equipDetailsButtonUI
                            }
                        }, {
                            key: "exteriorDetailsButtonUI",
                            get: function() {
                                return this._exteriorDetailsButtonUI || (this._exteriorDetailsButtonUI = this.getChildByName("exteriorDetailsButtonUI")),
                                    this._exteriorDetailsButtonUI
                            }
                        }, {
                            key: "dataDetailsButtonUI",
                            get: function() {
                                return this._dataDetailsButtonUI || (this._dataDetailsButtonUI = this.getChildByName("dataDetailsButtonUI")),
                                    this._dataDetailsButtonUI
                            }
                        }, {
                            key: "followToggleButton",
                            get: function() {
                                return this._followToggleButton || (this._followToggleButton = this.getChildByName("followToggleButton")),
                                    this._followToggleButton
                            }
                        }, {
                            key: "parentTarget",
                            get: function() {
                                return this._parentTarget || (this._parentTarget = new L(this.target.parent)),
                                    this._parentTarget
                            }
                        }, {
                            key: "itemShellUI",
                            get: function() {
                                return this._itemShellUI || (this._itemShellUI = this.getChildByName("itemShellUI")),
                                    this._itemShellUI
                            }
                        }, {
                            key: "equipBagUI",
                            get: function() {
                                return this._equipBagUI || (this._equipBagUI = this.getChildByName("equipBagUI")),
                                    this._equipBagUI
                            }
                        }]),
                        s
                }(C);
                s._RF.pop()
            }
        }
    }
));
