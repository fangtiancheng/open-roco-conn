System.register("chunks:///_virtual/SpiritInformationBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./DEFINE.ts", "./global.ts", "./PropertyDes.ts", "./TalentDes.ts", "./EquipmentType.ts", "./EquipIconTips.ts", "./AImage.ts", "./AgentNode.ts", "./ToolTip.ts", "./EquipmentIcon.ts", "./SpriteFrameSelector.ts", "./SpiritStorageIntimacyIcon.ts", "./SearchData.ts", "./NodeExtendEx.ts", "./ResManager.ts", "./Bitmap.ts", "./BuildLogHelper.ts", "./SpiritBagSpiritIcon.ts", "./BubbleSkinType.ts"], (function(t) {
        var i, e, n, o, r, s, a, m, h, l, p, c, u, g, B, d, _, y, I, f, v, S, T, x, N, C, k, M, w, b, E;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.NodeEventType,
                        r = t.sys,
                        s = t.Sprite,
                        a = t.Vec2,
                        m = t.UITransform,
                        h = t.view
                }
                , function(t) {
                    l = t.Constants
                }
                , function(t) {
                    p = t.DEFINE
                }
                , function(t) {
                    c = t.__global
                }
                , function(t) {
                    u = t.PropertyDes
                }
                , function(t) {
                    g = t.TalentDes
                }
                , function(t) {
                    B = t.EquipmentType
                }
                , function(t) {
                    d = t.EquipIconTips
                }
                , function(t) {
                    _ = t.AImage
                }
                , function(t) {
                    y = t.AgentNode,
                        I = t.GotoAndStopCallBackComponent,
                        f = t.AgentNodeDebugger
                }
                , function(t) {
                    v = t.ToolTipComponent
                }
                , function(t) {
                    S = t.EquipmentIcon
                }
                , function(t) {
                    T = t.default
                }
                , function(t) {
                    x = t.SpiritStorageIntimacyIcon
                }
                , function(t) {
                    N = t.SearchData
                }
                , function(t) {
                    C = t.NodeExtendEx
                }
                , function(t) {
                    k = t.default
                }
                , function(t) {
                    M = t.Bitmap
                }
                , function(t) {
                    w = t.default
                }
                , function(t) {
                    b = t.SpiritBagSpiritIcon
                }
                , function(t) {
                    E = t.BubbleSkinType
                }
            ],
            execute: function() {
                n._RF.push({}, "c8610BSH1RCuJyog2OargiT", "SpiritInformationBar", void 0),
                    t("SpiritInformationBar", function(t) {
                        i(y, t);
                        var n = y.prototype;
                        function y(i) {
                            var e;
                            (e = t.call(this) || this).type = 1,
                                e.mainBar = void 0,
                                e.canbutton = !0,
                                e.par = void 0,
                                e.idleMc = void 0,
                                e._idled = !1,
                                e.putIned = !1,
                                e.putInHome = !1,
                                e.putToDefend = !1,
                                e.trainString = "家园锻炼",
                                e.defendString = "庄园驻守",
                                e.getDataed = !1,
                                e._curEqIcon0 = void 0,
                                e._curEqIcon1 = void 0,
                                e._curEqIcon2 = void 0,
                                e._curItemTooltips = void 0,
                                e._SpiritStorageIntimacyIcon = void 0,
                                e.par = i;
                            var n = k.Instance.getPrefabByName(e.exportLink);
                            return e.initView(n),
                                e
                        }
                        return n.dispose = function() {}
                            ,
                            n.onInit = function() {
                                for (this.mainBar = new P(this._view),
                                         this.addChild(this.mainBar.target),
                                         this.mainBar.moreMsg.visible = !1,
                                         this.mainBar.normalStorageButton.visible = !0,
                                         this.mainBar.abandonedStorageButton.visible = !0,
                                         this.mainBar.putToNormalStorageButton.visible = !1,
                                         this.mainBar.switchBtn.on(o.TOUCH_END, this.onClickSwitch, this),
                                         this.mainBar.switchBtn.gotoAndStop(1),
                                         this.mainBar.expandStorageButton.visible = !0; this.mainBar.talent.container.numChildren > 0; )
                                    this.mainBar.talent.container.removeChildAt(0);
                                this.mainBar.talent.container.image = new _(78,78,!0),
                                    this.mainBar.talent.container.addChild(this.mainBar.talent.container.image),
                                    r.platform == r.Platform.MOBILE_BROWSER ? (this.mainBar.talent.container.on(o.TOUCH_START, this.onTalentOver, this),
                                        this.mainBar.talent.container.on(o.TOUCH_END, this.onTalentOut, this),
                                        this.mainBar.talent.container.on(o.TOUCH_CANCEL, this.onTalentOut, this)) : (this.mainBar.talent.container.on(o.MOUSE_ENTER, this.onTalentOver, this),
                                        this.mainBar.talent.container.on(o.MOUSE_LEAVE, this.onTalentOut, this)),
                                    this.mainBar.talent.mcTooltip.visible = !1,
                                    this._SpiritStorageIntimacyIcon = new x(this.mainBar.intimacyMc),
                                    this.setBgStyleByID(0),
                                    this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames),
                                    this.mainBar.propertyIcon2.gotoAndStop(this.mainBar.propertyIcon2.totalFrames),
                                    this.mainBar.propertyIcon3.gotoAndStop(this.mainBar.propertyIcon3.totalFrames),
                                    this.mainBar.propertyIcon.target.tooltip = "",
                                    this.mainBar.propertyIcon2.target.tooltip = "",
                                    this.mainBar.propertyIcon3.target.tooltip = ""
                            }
                            ,
                            n.onClickSwitch = function(t) {
                                0 == this.mainBar.switchBtn.selectedIndex ? (this.mainBar.switchBtn.gotoAndStop(2),
                                    this.par.playIdle(!1)) : 1 == this.mainBar.switchBtn.selectedIndex && (this.mainBar.switchBtn.gotoAndStop(1),
                                    this.par.playIdle(!0))
                            }
                            ,
                            n.setBgStyleByID = function(t) {}
                            ,
                            n.onTalentOver = function(t) {
                                0 != N.allSpirits.length && (this.mainBar.talent.mcTooltip.visible = !0)
                            }
                            ,
                            n.onTalentOut = function(t) {
                                this.mainBar.talent.mcTooltip.visible = !1
                            }
                            ,
                            n.setTalent = function() {
                                var t = N.tempSpiritTalentType;
                                0 == N.tempSpiritTalentType ? (this.mainBar.talent.mcTooltip.mcWake.gotoAndStop(3),
                                    this.mainBar.talent.mcTooltip.mcWake.y = -32,
                                    this.mainBar.talent.mcTooltip.bg.height = 70,
                                    this.mainBar.talent.mcTooltip.txtTalentDes.visible = !1,
                                    this.mainBar.talent.mcTooltip.txtTalentName.visible = !1,
                                    this.mainBar.talent.mcTooltip.mcLabel.visible = !1) : 200 == N.tempSpiritTalentType ? (this.mainBar.talent.mcTooltip.mcWake.gotoAndStop(4),
                                    this.mainBar.talent.mcTooltip.mcWake.y = -28,
                                    this.mainBar.talent.mcTooltip.bg.height = 58,
                                    this.mainBar.talent.mcTooltip.txtTalentDes.visible = !1,
                                    this.mainBar.talent.mcTooltip.txtTalentName.visible = !1,
                                    this.mainBar.talent.mcTooltip.mcLabel.visible = !1) : N.tempSpiritTalentLevel > 0 ? (this.mainBar.talent.mcTooltip.txtTalentDes.visible = !0,
                                    this.mainBar.talent.mcTooltip.txtTalentName.visible = !0,
                                    this.mainBar.talent.mcTooltip.mcLabel.visible = !0,
                                    this.mainBar.talent.mcTooltip.txtTalentDes.text = g.SET[N.tempSpiritTalentType].description,
                                    this.mainBar.talent.mcTooltip.txtTalentName.text = "血脉天赋：" + g.getName(N.tempSpiritTalentType),
                                    this.mainBar.talent.mcTooltip.mcWake.gotoAndStop(N.tempSpiritTalentLevel > 0 ? 2 : 1),
                                    this.mainBar.talent.mcTooltip.mcWake.y = -256,
                                    this.mainBar.talent.mcTooltip.bg.height = 290) : (this.mainBar.talent.mcTooltip.mcWake.gotoAndStop(5),
                                    this.mainBar.talent.mcTooltip.mcWake.y = -32,
                                    this.mainBar.talent.mcTooltip.bg.height = 70,
                                    this.mainBar.talent.mcTooltip.txtTalentDes.visible = !1,
                                    this.mainBar.talent.mcTooltip.txtTalentName.visible = !1,
                                    this.mainBar.talent.mcTooltip.mcLabel.visible = !1,
                                    t = 201),
                                    this.mainBar.talent.container.image.setPath(p.COMM_ROOT + "res/talent/" + t + "_small.png"),
                                    N.tempSpiritTalentLevel >= 0 && N.tempSpiritTalentType > 0 ? this.mainBar.talent.container.image.getComponent(s).grayscale = !1 : this.mainBar.talent.container.image.getComponent(s).grayscale = !0,
                                    this.mainBar.talent.mcTooltip.visible = !1,
                                    this.mainBar.talent.mouseEnabled = !0
                            }
                            ,
                            n.unsetTalent = function() {
                                this.mainBar.talent.container.image.unload(),
                                    this.mainBar.talent.container.image.filters = [],
                                    this.mainBar.talent.mcTooltip.visible = !1,
                                    this.mainBar.talent.mouseEnabled = !1
                            }
                            ,
                            n.afterLoaded = function() {
                                this.init()
                            }
                            ,
                            n.init = function() {
                                this._isInit && (y.sysApi = this.par.sysApi,
                                    r.platform == r.Platform.MOBILE_BROWSER ? (this.mainBar.moreBtn.on(o.TOUCH_START, this.moreoveraction, this),
                                        this.mainBar.moreBtn.on(o.TOUCH_END, this.moreoutaction, this),
                                        this.mainBar.moreBtn.on(o.TOUCH_CANCEL, this.moreoutaction, this)) : (this.mainBar.moreBtn.on(o.MOUSE_ENTER, this.moreoveraction, this),
                                        this.mainBar.moreBtn.on(o.MOUSE_LEAVE, this.moreoutaction, this)),
                                    this.mainBar.sexIcon.buttonMode = !0,
                                    this.mainBar.sexIcon.gotoAndStop(1),
                                    this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames),
                                    this.mainBar.propertyIcon2.gotoAndStop(this.mainBar.propertyIcon2.totalFrames),
                                    this.mainBar.propertyIcon3.gotoAndStop(this.mainBar.propertyIcon3.totalFrames),
                                    this.mainBar.propertyIcon.target.tooltip = "",
                                    this.mainBar.propertyIcon2.target.tooltip = "",
                                    this.mainBar.propertyIcon3.target.tooltip = "",
                                    this.mainBar.groupIcon0.buttonMode = !0,
                                    this.mainBar.groupIcon1.buttonMode = !0,
                                    this.mainBar.moreMsg.visible = !1,
                                    this.mainBar.btnShowSkinStore.on(o.TOUCH_END, this.showSkinStore, this),
                                    this.mainBar.releaseBtn.on(o.TOUCH_END, this.releaseaction, this),
                                    this.mainBar.putInBtn.on(o.TOUCH_END, this.putInaction, this),
                                    this.mainBar.trainBtn.on(o.TOUCH_END, this.trainaction, this),
                                    this.mainBar.equipmentIcon0.mouseChildren = !1,
                                    this.mainBar.equipmentIcon1.mouseChildren = !1,
                                    this.mainBar.equipmentIcon2.mouseChildren = !1,
                                    this._curItemTooltips = new d(0),
                                    this._curItemTooltips.hide(),
                                null != this.mainBar.normalStorageButton && (this.mainBar.normalStorageButton.on(o.TOUCH_END, this.onOpenNormalStorage, this),
                                    this.mainBar.normalStorageButton.gotoAndStop(2)),
                                null != this.mainBar.abandonedStorageButton && (this.mainBar.abandonedStorageButton.on(o.TOUCH_END, this.onOpenAbandonedStorage, this),
                                    this.mainBar.abandonedStorageButton.gotoAndStop(1)),
                                null != this.mainBar.expandStorageButton && this.mainBar.expandStorageButton.on(o.TOUCH_END, this.onOpenExpandStorage, this),
                                null != this.mainBar.putToCloudButton && this.mainBar.putToCloudButton.on(o.TOUCH_END, this.onPutToCloudStorage, this))
                            }
                            ,
                            n.init1 = function() {
                                null != this.mainBar.normalStorageButton && (this.mainBar.normalStorageButton.on(o.TOUCH_END, this.onOpenNormalStorage, this),
                                    this.mainBar.normalStorageButton.gotoAndStop(1)),
                                null != this.mainBar.abandonedStorageButton && (this.mainBar.abandonedStorageButton.on(o.TOUCH_END, this.onOpenAbandonedStorage, this),
                                    this.mainBar.abandonedStorageButton.gotoAndStop(2))
                            }
                            ,
                            n.showSkinStore = function(t) {
                                this.par.showSkinStoreUI()
                            }
                            ,
                            n.putToCloudShow = function(t) {
                                this.mainBar.putToCloudButton.visible = false,
                                    this.mainBar.putToCloudDisButton.visible = !0,
                                    this.mainBar.putToCloudDisButton.mouseChildren = !1,
                                    this.mainBar.putToCloudDisButton.target.tooltip = "当前宠物仓库容量满1000上限，可解锁寄存云仓功能。"
                            }
                            ,
                            n.onOpenExpandStorage = function(t) {
                                this.par.showExpandStorage()
                            }
                            ,
                            n.onOpenNormalStorage = function(t) {
                                this.mainBar.normalStorageButton.gotoAndStop(2),
                                    this.mainBar.abandonedStorageButton.gotoAndStop(1),
                                    this.par.showNormalStorage()
                            }
                            ,
                            n.onPutToCloudStorage = function(t) {
                                this.par.onPutToCloud()
                            }
                            ,
                            n.onOpenAbandonedStorage = function(t) {
                                this.mainBar.normalStorageButton.gotoAndStop(1),
                                    this.mainBar.abandonedStorageButton.gotoAndStop(2),
                                    this.par.showAbandonedStorage()
                            }
                            ,
                            n.trainOver = function(t) {}
                            ,
                            n.trainOut = function(t) {}
                            ,
                            n.refresh = function() {
                                if (N.searchedSpirits.length > 0) {
                                    var t = 16 * (this.par.getCurrentpage() - 1);
                                    null != N.searchedSpirits[t] && (N.tempSpiritId = N.searchedSpirits[t].id,
                                        N.tempSpiritTime = N.searchedSpirits[t].catchTime,
                                        N.tempSpiritName = N.searchedSpirits[t].spiritDes.name,
                                        N.tempSpiritTalentType = N.searchedSpirits[t].talentType,
                                        N.tempSpiritTalentLevel = N.searchedSpirits[t].talentLevel,
                                        N.tempSpiritSkinID = N.searchedSpirits[t].skinID);
                                    N.searchedSpirits[t].talentType;
                                    this.par.requestSPiritDetail(N.tempSpiritId, N.tempSpiritTime),
                                        this.par.setIdle()
                                }
                                0 == N.searchedSpirits.length ? (this.removeText(),
                                    this.showInfo(!1),
                                this.idled && this.par.removeIdle()) : this.showInfo(!0)
                            }
                            ,
                            n.showInfo = function(t) {
                                1 == this.type ? (this.mainBar.intimacyMc.active = 1 == t,
                                    this.mainBar.revolutionMc.visible = 1 == t,
                                    this.mainBar.xgMc.visible = 1 == t,
                                    this.mainBar.imgXg.visible = 1 == t,
                                    this.mainBar.bgNode.visible = 1 == t,
                                    this.mainBar.moreBtn.visible = 1 == t,
                                    this.mainBar.trainBtn.visible = 1 == t,
                                    this.mainBar.releaseBtn.visible = 1 == t,
                                    this.mainBar.putInBtn.visible = 1 == t,
                                    this.mainBar.switchBtn.visible = 1 == t,
                                    this.mainBar.putToCloudButton.visible = 1 == t,
                                    this.mainBar.putToCloudDisButton.visible = 1 == t,
                                    this.mainBar.spiritNameText.visible = 1 == t,
                                    this.mainBar.propertyIconBG.visible = 1 == t,
                                    this.mainBar.propertyIcon2BG.visible = 1 == t,
                                    this.mainBar.talent.visible = 1 == t) : (this.mainBar.intimacyMc.active = 1 == t,
                                    this.mainBar.revolutionMc.visible = 1 == t,
                                    this.mainBar.xgMc.visible = 1 == t,
                                    this.mainBar.imgXg.visible = 1 == t,
                                    this.mainBar.bgNode.visible = 1 == t,
                                    this.mainBar.moreBtn.visible = 1 == t,
                                    this.mainBar.putToCloudDisButton.visible = 1 == t,
                                    this.mainBar.putToNormalStorageButton.visible = 1 == t,
                                    this.mainBar.switchBtn.visible = 1 == t,
                                    this.mainBar.spiritNameText.visible = 1 == t,
                                    this.mainBar.propertyIconBG.visible = 1 == t,
                                    this.mainBar.propertyIcon2BG.visible = 1 == t,
                                    this.mainBar.talent.visible = 1 == t)
                            }
                            ,
                            n.trainaction = function(t) {
                                N.searchedSpirits[0] && 0 == this.putInHome && 1 == this.par.canbutton && (this.putInHome = !0,
                                    this.par.windows2())
                            }
                            ,
                            n.defendaction = function(t) {
                                N.searchedSpirits[0] && 0 == this.putInHome && 1 == this.par.canbutton && (this.putInHome = !0,
                                    this.par.windows3())
                            }
                            ,
                            n.putInaction = function(t) {
                                N.searchedSpirits[0] && 0 == this.putIned && 1 == this.par.canbutton && (this.putIned = !0,
                                    this.par.requestBagSpirits())
                            }
                            ,
                            n.releaseaction = function(t) {
                                N.searchedSpirits[0] && 1 == this.par.canbutton && 0 != N.tempSpiritId && this.par.windows1()
                            }
                            ,
                            n.moreoveraction = function(t) {
                                this.mainBar.moreMsg.visible = !0
                            }
                            ,
                            n.moreoutaction = function(t) {
                                this.mainBar.moreMsg.visible = !1
                            }
                            ,
                            n.zzzoveraction = function(t) {}
                            ,
                            n.zzzoutaction = function(t) {}
                            ,
                            n.getCurSpiritData = function(t, i) {
                                for (var e, n = 0; n < N.allSpirits.length; n++)
                                    if ((e = N.allSpirits[n]).id == t && e.catchTime == i)
                                        return e;
                                return null
                            }
                            ,
                            n.setEquipItemByType = function(t, i) {
                                this.mainBar["equipmentIcon" + t].mouseChildren = !0,
                                    this["_curEqIcon" + t] ? this["_curEqIcon" + t].update(i) : (this["_curEqIcon" + t] = new S(i,this.mainBar["equipmentIcon" + t],this.mainBar["equipmentIcon" + t].width,this.mainBar["equipmentIcon" + t].height),
                                        r.platform == r.Platform.MOBILE_BROWSER ? (this["_curEqIcon" + t].hasEventListener(o.TOUCH_START, this.eqItemOverHandler, this) || this["_curEqIcon" + t].on(o.TOUCH_START, this.eqItemOverHandler, this),
                                        this["_curEqIcon" + t].hasEventListener(o.TOUCH_CANCEL, this.eqItemOutHandler, this) || this["_curEqIcon" + t].on(o.TOUCH_CANCEL, this.eqItemOutHandler, this),
                                        this["_curEqIcon" + t].hasEventListener(o.TOUCH_END, this.eqItemOutHandler, this) || this["_curEqIcon" + t].on(o.TOUCH_END, this.eqItemOutHandler, this)) : (this["_curEqIcon" + t].hasEventListener(o.MOUSE_ENTER, this.eqItemOverHandler, this) || this["_curEqIcon" + t].on(o.MOUSE_ENTER, this.eqItemOverHandler, this),
                                        this["_curEqIcon" + t].hasEventListener(o.MOUSE_LEAVE, this.eqItemOutHandler, this) || this["_curEqIcon" + t].on(o.MOUSE_LEAVE, this.eqItemOutHandler, this)))
                            }
                            ,
                            n.eqItemOverHandler = function(t) {
                                var i = t.currentTarget;
                                null == i.data || null == i.data ? i.container.getComponent(v).pauseImmediate = !1 : i.container.getComponent(v).pauseImmediate = !0;
                                var e = new a(0,Math.ceil(i.getComponent(m).height / 2))
                                    , n = i.getWorldPosition();
                                e.x += n.x,
                                    e.y += n.y,
                                    e.x -= h.getVisibleSize().width / 2,
                                    e.y -= h.getVisibleSize().height / 2,
                                    e.x += -50,
                                    e.y += 20,
                                    this._curItemTooltips.show(e.x, e.y, i.data)
                            }
                            ,
                            n.eqItemOutHandler = function(t) {
                                t.propagationImmediateStopped = !1,
                                    this._curItemTooltips.hide()
                            }
                            ,
                            n.writeText = function() {
                                var t = N.detailVo;
                                if (this.mainBar.moreMsg.m1t1.text = "",
                                    this.mainBar.moreMsg.m1t2.text = "",
                                    this.mainBar.moreMsg.m1t3.text = "",
                                    this.mainBar.moreMsg.m1t4.text = "",
                                    this.mainBar.moreMsg.m1t1.visible = !1,
                                    this.mainBar.moreMsg.m1t2.visible = !1,
                                    this.mainBar.moreMsg.m1t3.visible = !1,
                                    this.mainBar.moreMsg.m1t4.visible = !1,
                                    this.mainBar.moreMsg.skillNode1.visible = !1,
                                    this.mainBar.moreMsg.skillNode2.visible = !1,
                                    this.mainBar.moreMsg.skillNode3.visible = !1,
                                    this.mainBar.moreMsg.skillNode4.visible = !1,
                                    N.detailVo) {
                                    var i = this.getCurSpiritData(t.id, t.caughtTime);
                                    i && (i.weaponInfo && this.setEquipItemByType(B.WEAPON_TYPE, i.weaponInfo),
                                    i.armorInfo && this.setEquipItemByType(B.ARMOR_TYPE, i.armorInfo),
                                    i.jewelryInfo && this.setEquipItemByType(B.JEWELRY_TYPE, i.jewelryInfo)),
                                        this.mainBar.moreMsg.m4t1.text = "" + t.spiritDes.sm,
                                        this.mainBar.moreMsg.m4t2.text = "" + t.spiritDes.wg,
                                        this.mainBar.moreMsg.m4t3.text = "" + t.spiritDes.fy,
                                        this.mainBar.moreMsg.m4t4.text = "" + t.spiritDes.mg,
                                        this.mainBar.moreMsg.m4t5.text = "" + t.spiritDes.mk,
                                        this.mainBar.moreMsg.m4t6.text = "" + t.spiritDes.sd,
                                        this.mainBar.xh.text = t.spiritID + "",
                                        this.mainBar.moreMsg.xh.text = t.spiritID + "",
                                        this.mainBar.dj.text = "Lv." + t.level,
                                        this.mainBar.revolutionMc.gotoAndStop(2);
                                    var e = t.spiritDes.evolution;
                                    if (null != e && null != e && e.length > 0) {
                                        var n = Number(e.split(" ")[0]);
                                        t.level >= n && (e = n + "级进化成" + e.split(" ")[2]),
                                            this.mainBar.revolutionMc.gotoAndStop(1),
                                            this.mainBar.revolutionMc.target.tooltip = e
                                    }
                                    null == t.spiritDes.evolution && (this.mainBar.revolutionMc.gotoAndStop(2),
                                        this.mainBar.revolutionMc.target.tooltip = "无法进化"),
                                        0 == t.sex ? this.mainBar.sexIcon.gotoAndStop(1) : 1 == t.sex ? this.mainBar.sexIcon.gotoAndStop(2) : 2 == t.sex && this.mainBar.sexIcon.gotoAndStop(3),
                                        this.mainBar.sexIcon.target.tooltip = t.sexNmae,
                                        this.mainBar.groupIcon0.visible = !1,
                                        this.mainBar.groupIcon1.visible = !1;
                                    for (var o = c.SysAPI.getResSysAPI().getResAdapter(l.COMBAT_RES), r = 0; r < t.spiritDes.group.length; r++)
                                        if (null != o.getSpiritGroupImage(t.spiritDes.group[r].id)) {
                                            this.mainBar["groupIcon" + r].getComponent(v) || this.mainBar["groupIcon" + r].addComponent(v),
                                                this.mainBar["groupIcon" + r].visible = !0;
                                            for (var s = this.mainBar["groupIcon" + r].numChildren, m = 0; m < s; m++)
                                                this.mainBar["groupIcon" + r].removeChild(this.mainBar["groupIcon" + r].getChildAt(0));
                                            var h = new M;
                                            h.scaleX = 1.2,
                                                h.scaleY = 1.2,
                                                this.mainBar["groupIcon" + r].addChild(h),
                                                h.loadSpiritGroupImage(t.spiritDes.group[r].id),
                                                this.mainBar["groupIcon" + r].tooltip = t.spiritDes.group[r].name
                                        }
                                    for (var p = 0; p < t.skills.length; p++) {
                                        var g, d;
                                        if (0 == p && (g = this.mainBar.moreMsg.m1t1,
                                            d = this.mainBar.moreMsg.skillNode1),
                                        1 == p && (g = this.mainBar.moreMsg.m1t2,
                                            d = this.mainBar.moreMsg.skillNode2),
                                        2 == p && (g = this.mainBar.moreMsg.m1t3,
                                            d = this.mainBar.moreMsg.skillNode3),
                                        3 == p && (g = this.mainBar.moreMsg.m1t4,
                                            d = this.mainBar.moreMsg.skillNode4),
                                            g.text = "",
                                            d.visible = !1,
                                        null != t.skills[p].skillDes && (d.visible = !0,
                                            g.text = t.skills[p].skillDes.name + "\n威力:" + t.skills[p].skillDes.power + " PP:" + t.skills[p].skillDes.ppMax),
                                            d.skillName.text = t.skills[p].skillDes.name,
                                            d.powerText.text = "" + t.skills[p].skillDes.power,
                                            d.ppText.text = "PP:" + t.skills[p].ppLeft + "/" + t.skills[p].skillDes.ppMax,
                                            d.speedText.text = "" + t.skills[p].skillDes.speed,
                                            d.damageMC.getComponent(T).gotoAndStop(t.skills[p].skillDes.damageType),
                                            d.bar.gotoAndStop(t.skills[p].ppLeft / t.skills[p].skillDes.ppMax * 100),
                                            !d.__SkillIcon__) {
                                            var _ = new b;
                                            _.ui = d.target,
                                                _.x = 38,
                                                _.y = 78,
                                                _.width = 54,
                                                _.height = 54,
                                                d.__SkillIcon__ = _,
                                                d.addChild(_)
                                        }
                                        d.__SkillIcon__.load(t.skills[p].skillDes.property.id)
                                    }
                                    this.mainBar.moreMsg.m2t1.text = "" + t.maxHP,
                                        this.mainBar.moreMsg.m2t2.text = "" + t.SP,
                                        this.mainBar.moreMsg.m2t3.text = "" + t.PA,
                                        this.mainBar.moreMsg.m2t4.text = "" + t.PD,
                                        this.mainBar.moreMsg.m2t5.text = "" + t.MA,
                                        this.mainBar.moreMsg.m2t6.text = "" + t.MD,
                                        this.mainBar.moreMsg.m2t7.text = "0",
                                        this.mainBar.moreMsg.m2t8.text = "0",
                                        this.mainBar.moreMsg.m2t9.text = "0",
                                        this.mainBar.moreMsg.m2t10.text = "0";
                                    var I = t.innateValue;
                                    this.mainBar.moreMsg.m2t11.text = "" + I.HP,
                                        this.mainBar.moreMsg.m2t21.text = "" + I.SP,
                                        this.mainBar.moreMsg.m2t31.text = "" + I.PA,
                                        this.mainBar.moreMsg.m2t41.text = "" + I.PD,
                                        this.mainBar.moreMsg.m2t51.text = "" + I.MA,
                                        this.mainBar.moreMsg.m2t61.text = "" + I.MD,
                                        this.mainBar.m3t7.text = y.getTemper(t.temper) + "的性格",
                                        this.mainBar.m3t7.visible = !1,
                                        this.mainBar.m3t8.text = u.getTemperDesHtmlStr(t.temper),
                                        this.mainBar.xgMc.target.tooltip = u.getTemperDesHtmlStr1(t.temper),
                                        this.mainBar.imgXg.gotoAndStop(t.temper + 1),
                                        this.mainBar.moreMsg.m3t1.text = "未知",
                                        this.mainBar.moreMsg.m3t2.text = "未知",
                                        this.mainBar.moreMsg.m3t3.text = "未知",
                                        this.mainBar.moreMsg.m3t4.text = "未知",
                                        this.mainBar.moreMsg.m3t5.text = "";
                                    t.spiritDes.features[0].name;
                                    var f = Number(t.spiritDes.features[0].id);
                                    if (this.mainBar.propertyIcon.mouseChildren = !1,
                                        this.mainBar.propertyIcon.target.tooltipType = E.SERISE_TIPS,
                                        this.mainBar.propertyIcon.target.tooltipPos = new a(472,-36),
                                        this.mainBar.propertyIcon.target.tooltip = f.toString(),
                                        this.mainBar.propertyIcon.gotoAndStop(f),
                                        this.mainBar.propertyIcon.data = f,
                                        this.mainBar.propertyIconBG.data = f,
                                        t.spiritDes.features[1]) {
                                        t.spiritDes.features[1].name;
                                        var S = Number(t.spiritDes.features[1].id);
                                        this.mainBar.propertyIcon2.mouseChildren = !1,
                                            this.mainBar.propertyIcon2.target.tooltipType = E.SERISE_TIPS,
                                            this.mainBar.propertyIcon2.target.tooltipPos = new a(472,-36),
                                            this.mainBar.propertyIcon2.target.tooltip = S.toString(),
                                            this.mainBar.propertyIcon2.gotoAndStop(S),
                                            this.mainBar.propertyIcon2.data = S,
                                            this.mainBar.propertyIcon2BG.data = S
                                    }
                                    if (t.spiritDes.features[2]) {
                                        t.spiritDes.features[2].name;
                                        var x = Number(t.spiritDes.features[2].id);
                                        this.mainBar.propertyIcon3.mouseChildren = !1,
                                            this.mainBar.propertyIcon3.target.tooltip = t.spiritDes.features[2].name,
                                            this.mainBar.propertyIcon3.gotoAndStop(x)
                                    }
                                    if (t.spiritDes) {
                                        this.mainBar.moreMsg.m3t1.text = t.spiritDes.height,
                                            this.mainBar.moreMsg.m3t2.text = t.spiritDes.weight,
                                            this.mainBar.moreMsg.m3t3.text = t.spiritDes.color;
                                        var C = t.spiritDes.interest;
                                        C.length > 11 && (C = C.substring(0, 9) + "…"),
                                            this.mainBar.moreMsg.m3t4.text = C,
                                            this.mainBar.moreMsg.m3t5.text = t.spiritDes.description
                                    }
                                    0 == t.affiliation ? t.closeness > 100 ? this._SpiritStorageIntimacyIcon.intimacy = 100 : this._SpiritStorageIntimacyIcon.intimacy = t.closeness : t.affiliation > 5 ? this._SpiritStorageIntimacyIcon.intimacy = 105 : this._SpiritStorageIntimacyIcon.intimacy = t.affiliation + 100
                                }
                            }
                            ,
                            n.removeText = function() {
                                for (var t = 0; t < 2; t++)
                                    for (var i = this.mainBar["groupIcon" + t].numChildren, e = 0; e < i; e++)
                                        this.mainBar["groupIcon" + t].removeChild(this.mainBar["groupIcon" + t].getChildAt(0));
                                this.mainBar.sexIcon.gotoAndStop(1),
                                    this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames),
                                    this.mainBar.propertyIcon2.gotoAndStop(this.mainBar.propertyIcon2.totalFrames),
                                    this.mainBar.propertyIcon3.gotoAndStop(this.mainBar.propertyIcon3.totalFrames),
                                    this.mainBar.propertyIcon.target.tooltip = "",
                                    this.mainBar.propertyIcon2.target.tooltip = "",
                                    this.mainBar.propertyIcon3.target.tooltip = "",
                                    this.mainBar.xh.text = "",
                                    this.mainBar.moreMsg.xh.text = "",
                                    this.mainBar.dj.text = "",
                                    this.mainBar.revolutionMc.gotoAndStop(2);
                                for (var n = 0; n < 4; n++) {
                                    var o, r;
                                    0 == n && (o = this.mainBar.moreMsg.m1t1,
                                        r = this.mainBar.moreMsg.skillNode1),
                                    1 == n && (o = this.mainBar.moreMsg.m1t2,
                                        r = this.mainBar.moreMsg.skillNode2),
                                    2 == n && (o = this.mainBar.moreMsg.m1t3,
                                        r = this.mainBar.moreMsg.skillNode3),
                                    3 == n && (o = this.mainBar.moreMsg.m1t4,
                                        r = this.mainBar.moreMsg.skillNode4),
                                        o.text = "",
                                        r.visible = !1
                                }
                                this.mainBar.moreMsg.m2t1.text = "",
                                    this.mainBar.moreMsg.m2t2.text = "",
                                    this.mainBar.moreMsg.m2t3.text = "",
                                    this.mainBar.moreMsg.m2t4.text = "",
                                    this.mainBar.moreMsg.m2t5.text = "",
                                    this.mainBar.moreMsg.m2t6.text = "",
                                    this.mainBar.moreMsg.m2t7.text = "",
                                    this.mainBar.moreMsg.m2t8.text = "",
                                    this.mainBar.moreMsg.m2t9.text = "",
                                    this.mainBar.moreMsg.m2t10.text = "",
                                    this.mainBar.moreMsg.m2t11.text = "",
                                    this.mainBar.moreMsg.m2t21.text = "",
                                    this.mainBar.moreMsg.m2t31.text = "",
                                    this.mainBar.moreMsg.m2t41.text = "",
                                    this.mainBar.moreMsg.m2t51.text = "",
                                    this.mainBar.moreMsg.m2t61.text = "",
                                    this.mainBar.moreMsg.m4t1.text = "",
                                    this.mainBar.moreMsg.m4t2.text = "",
                                    this.mainBar.moreMsg.m4t3.text = "",
                                    this.mainBar.moreMsg.m4t4.text = "",
                                    this.mainBar.moreMsg.m4t5.text = "",
                                    this.mainBar.moreMsg.m4t6.text = "",
                                    this.mainBar.m3t7.text = "",
                                    this.mainBar.m3t8.text = "",
                                    this.mainBar.moreMsg.m3t1.text = "",
                                    this.mainBar.moreMsg.m3t2.text = "",
                                    this.mainBar.moreMsg.m3t3.text = "",
                                    this.mainBar.moreMsg.m3t4.text = "",
                                    this.mainBar.moreMsg.m3t5.text = "",
                                    this.mainBar.moreMsg.m3t1.text = "",
                                    this.mainBar.moreMsg.m3t2.text = "",
                                    this.mainBar.moreMsg.m3t3.text = "",
                                    this.mainBar.moreMsg.m3t4.text = "",
                                    this.mainBar.moreMsg.m3t5.text = "",
                                    this.mainBar.equipmentIcon0.mouseChildren = !1,
                                    this.mainBar.equipmentIcon1.mouseChildren = !1,
                                    this.mainBar.equipmentIcon2.mouseChildren = !1,
                                this._curEqIcon0 && this._curEqIcon0.update(null),
                                this._curEqIcon1 && this._curEqIcon1.update(null),
                                this._curEqIcon2 && this._curEqIcon2.update(null)
                            }
                            ,
                            y.getTemper = function(t) {
                                return t > 0 && t <= u.TEMPERS.length ? u.TEMPERS[t - 1] : "未知"
                            }
                            ,
                            y.getCaughtLocation = function(t) {
                                try {
                                    return y.sysApi.getGDataAPI().getDataProxy(l.SCENE_DATA).select(t).sceneName
                                } catch (i) {
                                    console.log("[SpiritInfoWindow] Error: Can not get caught location(index = " + t + ") !")
                                }
                                return "未知"
                            }
                            ,
                            n.del = function() {
                                this.mainBar.moreBtn.off(o.MOUSE_ENTER, this.moreoveraction, this),
                                    this.mainBar.moreBtn.off(o.MOUSE_LEAVE, this.moreoutaction, this),
                                    this.mainBar.releaseBtn.off(o.TOUCH_END, this.releaseaction, this),
                                    this.mainBar.putInBtn.off(o.TOUCH_END, this.putInaction, this),
                                    this.mainBar.trainBtn.off(o.TOUCH_END, this.trainaction, this),
                                    this.mainBar = null,
                                    this.par = null,
                                    this.idleMc = null,
                                this._curEqIcon0 && (this._curEqIcon0.dispose(),
                                    this._curEqIcon0.off(o.MOUSE_ENTER, this.eqItemOverHandler, this),
                                    this._curEqIcon0.off(o.MOUSE_LEAVE, this.eqItemOutHandler, this)),
                                this._curEqIcon1 && (this._curEqIcon1.dispose(),
                                    this._curEqIcon1.off(o.MOUSE_ENTER, this.eqItemOverHandler, this),
                                    this._curEqIcon1.off(o.MOUSE_LEAVE, this.eqItemOutHandler, this)),
                                this._curEqIcon2 && (this._curEqIcon2.dispose(),
                                    this._curEqIcon2.off(o.MOUSE_ENTER, this.eqItemOverHandler, this),
                                    this._curEqIcon2.off(o.MOUSE_LEAVE, this.eqItemOutHandler, this)),
                                this._curItemTooltips && this._curItemTooltips.dispose()
                            }
                            ,
                            e(y, [{
                                key: "idled",
                                get: function() {
                                    return this._idled
                                },
                                set: function(t) {
                                    this._idled = t
                                }
                            }, {
                                key: "resBundleKey",
                                get: function() {
                                    return "gui"
                                }
                            }, {
                                key: "exportLink",
                                get: function() {
                                    return "spriteStore/SpiritInformationBarUI_1600"
                                }
                            }]),
                            y
                    }(C)).sysApi = void 0;
                var D = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._bg = void 0,
                            i._mcWake = void 0,
                            i._mcLabel = void 0,
                            i._txtTalentDes = void 0,
                            i._txtTalentName = void 0,
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
                            key: "mcWake",
                            get: function() {
                                return this._mcWake || (this._mcWake = new y(this.getChildByName("mcWake"))),
                                    this._mcWake
                            }
                        }, {
                            key: "mcLabel",
                            get: function() {
                                return this._mcLabel || (this._mcLabel = new y(this.getChildByName("mcLabel"))),
                                    this._mcLabel
                            }
                        }, {
                            key: "txtTalentDes",
                            get: function() {
                                return this._txtTalentDes || (this._txtTalentDes = new y(this.getChildByName("txtTalentDes"))),
                                    this._txtTalentDes
                            }
                        }, {
                            key: "txtTalentName",
                            get: function() {
                                return this._txtTalentName || (this._txtTalentName = new y(this.getChildByName("txtTalentName"))),
                                    this._txtTalentName
                            }
                        }]),
                        n
                }(y)
                    , q = function(t) {
                    function e() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this).image = void 0,
                            i
                    }
                    return i(e, t),
                        e
                }(y)
                    , A = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            i._mcTooltip = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new q(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "mcTooltip",
                            get: function() {
                                return this._mcTooltip || (this._mcTooltip = new D(this.getChildByName("mcTooltip"))),
                                    this._mcTooltip
                            }
                        }]),
                        n
                }(y)
                    , O = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._skillName = void 0,
                            i._ppText = void 0,
                            i._powerText = void 0,
                            i._speedText = void 0,
                            i._damageMC = void 0,
                            i._bar = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "skillName",
                            get: function() {
                                return this._skillName || (this._skillName = new y(this.getChildByName("skillName"))),
                                    this._skillName
                            }
                        }, {
                            key: "ppText",
                            get: function() {
                                return this._ppText || (this._ppText = new y(this.getChildByName("ppText"))),
                                    this._ppText
                            }
                        }, {
                            key: "powerText",
                            get: function() {
                                return this._powerText || (this._powerText = new y(this.getChildByName("powerText"))),
                                    this._powerText
                            }
                        }, {
                            key: "speedText",
                            get: function() {
                                return this._speedText || (this._speedText = new y(this.getChildByName("speedText"))),
                                    this._speedText
                            }
                        }, {
                            key: "damageMC",
                            get: function() {
                                return this._damageMC || (this._damageMC = new y(this.getChildByName("damageMC"))),
                                    this._damageMC
                            }
                        }, {
                            key: "bar",
                            get: function() {
                                return this._bar || (this._bar = new y(this.getChildByName("bar"))),
                                    this._bar
                            }
                        }]),
                        n
                }(y)
                    , H = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._m1t1 = void 0,
                            i._m1t2 = void 0,
                            i._m1t3 = void 0,
                            i._m1t4 = void 0,
                            i._m2t1 = void 0,
                            i._m2t2 = void 0,
                            i._m2t3 = void 0,
                            i._m2t4 = void 0,
                            i._m2t5 = void 0,
                            i._m2t6 = void 0,
                            i._m2t7 = void 0,
                            i._m2t8 = void 0,
                            i._m2t9 = void 0,
                            i._m2t10 = void 0,
                            i._m2t11 = void 0,
                            i._m2t21 = void 0,
                            i._m2t31 = void 0,
                            i._m2t41 = void 0,
                            i._m2t51 = void 0,
                            i._m2t61 = void 0,
                            i._m3t1 = void 0,
                            i._m3t2 = void 0,
                            i._m3t3 = void 0,
                            i._m3t4 = void 0,
                            i._m3t5 = void 0,
                            i._m4t1 = void 0,
                            i._m4t2 = void 0,
                            i._m4t3 = void 0,
                            i._m4t4 = void 0,
                            i._m4t5 = void 0,
                            i._m4t6 = void 0,
                            i._xh = void 0,
                            i._skillNode1 = void 0,
                            i._skillNode2 = void 0,
                            i._skillNode3 = void 0,
                            i._skillNode4 = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "m1t1",
                            get: function() {
                                return this._m1t1 || (this._m1t1 = new y(this.getChildByName("m1t1"))),
                                    this._m1t1
                            }
                        }, {
                            key: "m1t2",
                            get: function() {
                                return this._m1t2 || (this._m1t2 = new y(this.getChildByName("m1t2"))),
                                    this._m1t2
                            }
                        }, {
                            key: "m1t3",
                            get: function() {
                                return this._m1t3 || (this._m1t3 = new y(this.getChildByName("m1t3"))),
                                    this._m1t3
                            }
                        }, {
                            key: "m1t4",
                            get: function() {
                                return this._m1t4 || (this._m1t4 = new y(this.getChildByName("m1t4"))),
                                    this._m1t4
                            }
                        }, {
                            key: "m2t1",
                            get: function() {
                                return this._m2t1 || (this._m2t1 = new y(this.getChildByName("m2t1"))),
                                    this._m2t1
                            }
                        }, {
                            key: "m2t2",
                            get: function() {
                                return this._m2t2 || (this._m2t2 = new y(this.getChildByName("m2t2"))),
                                    this._m2t2
                            }
                        }, {
                            key: "m2t3",
                            get: function() {
                                return this._m2t3 || (this._m2t3 = new y(this.getChildByName("m2t3"))),
                                    this._m2t3
                            }
                        }, {
                            key: "m2t4",
                            get: function() {
                                return this._m2t4 || (this._m2t4 = new y(this.getChildByName("m2t4"))),
                                    this._m2t4
                            }
                        }, {
                            key: "m2t5",
                            get: function() {
                                return this._m2t5 || (this._m2t5 = new y(this.getChildByName("m2t5"))),
                                    this._m2t5
                            }
                        }, {
                            key: "m2t6",
                            get: function() {
                                return this._m2t6 || (this._m2t6 = new y(this.getChildByName("m2t6"))),
                                    this._m2t6
                            }
                        }, {
                            key: "m2t7",
                            get: function() {
                                return this._m2t7 || (this._m2t7 = new y(this.getChildByName("m2t7"))),
                                    this._m2t7
                            }
                        }, {
                            key: "m2t8",
                            get: function() {
                                return this._m2t8 || (this._m2t8 = new y(this.getChildByName("m2t8"))),
                                    this._m2t8
                            }
                        }, {
                            key: "m2t9",
                            get: function() {
                                return this._m2t9 || (this._m2t9 = new y(this.getChildByName("m2t9"))),
                                    this._m2t9
                            }
                        }, {
                            key: "m2t10",
                            get: function() {
                                return this._m2t10 || (this._m2t10 = new y(this.getChildByName("m2t10"))),
                                    this._m2t10
                            }
                        }, {
                            key: "m2t11",
                            get: function() {
                                return this._m2t11 || (this._m2t11 = new y(this.getChildByName("m2t11"))),
                                    this._m2t11
                            }
                        }, {
                            key: "m2t21",
                            get: function() {
                                return this._m2t21 || (this._m2t21 = new y(this.getChildByName("m2t21"))),
                                    this._m2t21
                            }
                        }, {
                            key: "m2t31",
                            get: function() {
                                return this._m2t31 || (this._m2t31 = new y(this.getChildByName("m2t31"))),
                                    this._m2t31
                            }
                        }, {
                            key: "m2t41",
                            get: function() {
                                return this._m2t41 || (this._m2t41 = new y(this.getChildByName("m2t41"))),
                                    this._m2t41
                            }
                        }, {
                            key: "m2t51",
                            get: function() {
                                return this._m2t51 || (this._m2t51 = new y(this.getChildByName("m2t51"))),
                                    this._m2t51
                            }
                        }, {
                            key: "m2t61",
                            get: function() {
                                return this._m2t61 || (this._m2t61 = new y(this.getChildByName("m2t61"))),
                                    this._m2t61
                            }
                        }, {
                            key: "m3t1",
                            get: function() {
                                return this._m3t1 || (this._m3t1 = new y(this.getChildByName("m3t1"))),
                                    this._m3t1
                            }
                        }, {
                            key: "m3t2",
                            get: function() {
                                return this._m3t2 || (this._m3t2 = new y(this.getChildByName("m3t2"))),
                                    this._m3t2
                            }
                        }, {
                            key: "m3t3",
                            get: function() {
                                return this._m3t3 || (this._m3t3 = new y(this.getChildByName("m3t3"))),
                                    this._m3t3
                            }
                        }, {
                            key: "m3t4",
                            get: function() {
                                return this._m3t4 || (this._m3t4 = new y(this.getChildByName("m3t4"))),
                                    this._m3t4
                            }
                        }, {
                            key: "m3t5",
                            get: function() {
                                return this._m3t5 || (this._m3t5 = new y(this.getChildByName("m3t5"))),
                                    this._m3t5
                            }
                        }, {
                            key: "m4t1",
                            get: function() {
                                return this._m4t1 || (this._m4t1 = new y(this.getChildByName("m4t1"))),
                                    this._m4t1
                            }
                        }, {
                            key: "m4t2",
                            get: function() {
                                return this._m4t2 || (this._m4t2 = new y(this.getChildByName("m4t2"))),
                                    this._m4t2
                            }
                        }, {
                            key: "m4t3",
                            get: function() {
                                return this._m4t3 || (this._m4t3 = new y(this.getChildByName("m4t3"))),
                                    this._m4t3
                            }
                        }, {
                            key: "m4t4",
                            get: function() {
                                return this._m4t4 || (this._m4t4 = new y(this.getChildByName("m4t4"))),
                                    this._m4t4
                            }
                        }, {
                            key: "m4t5",
                            get: function() {
                                return this._m4t5 || (this._m4t5 = new y(this.getChildByName("m4t5"))),
                                    this._m4t5
                            }
                        }, {
                            key: "m4t6",
                            get: function() {
                                return this._m4t6 || (this._m4t6 = new y(this.getChildByName("m4t6"))),
                                    this._m4t6
                            }
                        }, {
                            key: "xh",
                            get: function() {
                                return this._xh || (this._xh = new y(this.getChildByName("xh"))),
                                    this._xh
                            }
                        }, {
                            key: "skillNode1",
                            get: function() {
                                return this._skillNode1 || (this._skillNode1 = new O(this.getChildByName("skillNode1"))),
                                    this._skillNode1
                            }
                        }, {
                            key: "skillNode2",
                            get: function() {
                                return this._skillNode2 || (this._skillNode2 = new O(this.getChildByName("skillNode2"))),
                                    this._skillNode2
                            }
                        }, {
                            key: "skillNode3",
                            get: function() {
                                return this._skillNode3 || (this._skillNode3 = new O(this.getChildByName("skillNode3"))),
                                    this._skillNode3
                            }
                        }, {
                            key: "skillNode4",
                            get: function() {
                                return this._skillNode4 || (this._skillNode4 = new O(this.getChildByName("skillNode4"))),
                                    this._skillNode4
                            }
                        }]),
                        n
                }(y)
                    , L = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return i(e, t),
                        e
                }(y)
                    , U = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return i(e, t),
                        e
                }(y)
                    , P = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._dj = void 0,
                            i._xh = void 0,
                            i._m3t7 = void 0,
                            i._m3t8 = void 0,
                            i._groupIcon0 = void 0,
                            i._groupIcon1 = void 0,
                            i._propertyIconBG = void 0,
                            i._propertyIcon = void 0,
                            i._propertyIcon2BG = void 0,
                            i._propertyIcon2 = void 0,
                            i._propertyIcon3 = void 0,
                            i._revolutionMc = void 0,
                            i._equipmentIcon0 = void 0,
                            i._equipmentIcon1 = void 0,
                            i._equipmentIcon2 = void 0,
                            i._talent = void 0,
                            i._sexIcon = void 0,
                            i._spiritNameText = void 0,
                            i._moreMsg = void 0,
                            i._btnShowSkinStore = void 0,
                            i._releaseBtn = void 0,
                            i._putInBtn = void 0,
                            i._trainBtn = void 0,
                            i._bgNode = void 0,
                            i._moreBtn = void 0,
                            i._closeBtn = void 0,
                            i._intimacyMc = void 0,
                            i._expandStorageButton = void 0,
                            i._spiritLittleMc = void 0,
                            i._putToCloudButton = void 0,
                            i._putToCloudDisButton = void 0,
                            i._normalStorageButton = void 0,
                            i._abandonedStorageButton = void 0,
                            i._putToNormalStorageButton = void 0,
                            i._imgXg = void 0,
                            i._xgMc = void 0,
                            i._switchBtn = void 0,
                            i
                    }
                    return i(n, t),
                        n.prototype.propertyIcon2CallBack = function(t, i) {
                            void 0 === i && (i = 0),
                                t >= i ? this.propertyIcon2BG && (this.propertyIcon2BG.visible = !1) : this.propertyIcon2BG && (this.propertyIcon2BG.visible = !0)
                        }
                        ,
                        e(n, [{
                            key: "dj",
                            get: function() {
                                return this._dj || (this._dj = new y(this.getChildByName("dj"))),
                                    this._dj
                            }
                        }, {
                            key: "xh",
                            get: function() {
                                return this._xh || (this._xh = new y(this.getChildByName("xh"))),
                                    this._xh
                            }
                        }, {
                            key: "m3t7",
                            get: function() {
                                return this._m3t7 || (this._m3t7 = new y(this.getChildByName("m3t7"))),
                                    this._m3t7
                            }
                        }, {
                            key: "m3t8",
                            get: function() {
                                return this._m3t8 || (this._m3t8 = new y(this.getChildByName("m3t8"))),
                                    this._m3t8
                            }
                        }, {
                            key: "groupIcon0",
                            get: function() {
                                return this._groupIcon0 || (this._groupIcon0 = new y(this.getChildByName("groupIcon0"))),
                                    this._groupIcon0
                            }
                        }, {
                            key: "groupIcon1",
                            get: function() {
                                return this._groupIcon1 || (this._groupIcon1 = new y(this.getChildByName("groupIcon1"))),
                                    this._groupIcon1
                            }
                        }, {
                            key: "propertyIconBG",
                            get: function() {
                                return this._propertyIconBG || (this._propertyIconBG = new y(this.getChildByName("propertyIconBG"))),
                                    this._propertyIconBG
                            }
                        }, {
                            key: "propertyIcon",
                            get: function() {
                                return this._propertyIcon || (this._propertyIcon = new y(this.getChildByName("propertyIcon")),
                                    this._propertyIcon.addComponent(v)),
                                    this._propertyIcon
                            }
                        }, {
                            key: "propertyIcon2BG",
                            get: function() {
                                return this._propertyIcon2BG || (this._propertyIcon2BG = new y(this.getChildByName("propertyIcon2BG"))),
                                    this._propertyIcon2BG
                            }
                        }, {
                            key: "propertyIcon2",
                            get: function() {
                                return this._propertyIcon2 || (this._propertyIcon2 = new y(this.getChildByName("propertyIcon2")),
                                    this._propertyIcon2.addComponent(v),
                                    this._propertyIcon2.addComponent(I).callback = this.propertyIcon2CallBack.bind(this)),
                                    this._propertyIcon2
                            }
                        }, {
                            key: "propertyIcon3",
                            get: function() {
                                return this._propertyIcon3 || (this._propertyIcon3 = new y(this.getChildByName("propertyIcon3"))),
                                    this._propertyIcon3
                            }
                        }, {
                            key: "revolutionMc",
                            get: function() {
                                return this._revolutionMc || (this._revolutionMc = new y(this.getChildByName("revolutionMc")),
                                    this._revolutionMc.addComponent(v)),
                                    this._revolutionMc
                            }
                        }, {
                            key: "equipmentIcon0",
                            get: function() {
                                return this._equipmentIcon0 || (this._equipmentIcon0 = new y(this.getChildByName("equipmentIcon0")),
                                    this._equipmentIcon0.addComponent(v)),
                                    this._equipmentIcon0
                            }
                        }, {
                            key: "equipmentIcon1",
                            get: function() {
                                return this._equipmentIcon1 || (this._equipmentIcon1 = new y(this.getChildByName("equipmentIcon1")),
                                    this._equipmentIcon1.addComponent(v)),
                                    this._equipmentIcon1
                            }
                        }, {
                            key: "equipmentIcon2",
                            get: function() {
                                return this._equipmentIcon2 || (this._equipmentIcon2 = new y(this.getChildByName("equipmentIcon2")),
                                    this._equipmentIcon2.addComponent(v)),
                                    this._equipmentIcon2
                            }
                        }, {
                            key: "talent",
                            get: function() {
                                return this._talent || (this._talent = new A(this.getChildByName("talent"))),
                                    this._talent
                            }
                        }, {
                            key: "sexIcon",
                            get: function() {
                                return this._sexIcon || (this._sexIcon = new L(this.getChildByName("sexIcon")),
                                    this._sexIcon.addComponent(v)),
                                    this._sexIcon
                            }
                        }, {
                            key: "spiritNameText",
                            get: function() {
                                return this._spiritNameText || (this._spiritNameText = new U(this.getChildByName("spiritNameText"))),
                                    this._spiritNameText
                            }
                        }, {
                            key: "moreMsg",
                            get: function() {
                                return this._moreMsg || (this._moreMsg = new H(this.getChildByName("moreMsg"))),
                                    this._moreMsg
                            }
                        }, {
                            key: "btnShowSkinStore",
                            get: function() {
                                return this._btnShowSkinStore || (this._btnShowSkinStore = new y(this.getChildByName("btnShowSkinStore"))),
                                    this._btnShowSkinStore
                            }
                        }, {
                            key: "releaseBtn",
                            get: function() {
                                return this._releaseBtn || (this._releaseBtn = new y(this.getChildByName("releaseBtn"))),
                                    this._releaseBtn
                            }
                        }, {
                            key: "putInBtn",
                            get: function() {
                                return this._putInBtn || (this._putInBtn = new y(this.getChildByName("putInBtn"))),
                                    this._putInBtn
                            }
                        }, {
                            key: "trainBtn",
                            get: function() {
                                return this._trainBtn || (this._trainBtn = new y(this.getChildByName("trainBtn"))),
                                    this._trainBtn
                            }
                        }, {
                            key: "bgNode",
                            get: function() {
                                return this._bgNode || (this._bgNode = new y(this.getChildByName("bgNode"))),
                                    this._bgNode
                            }
                        }, {
                            key: "moreBtn",
                            get: function() {
                                return this._moreBtn || (this._moreBtn = new y(this.getChildByName("moreBtn"))),
                                    this._moreBtn
                            }
                        }, {
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new y(this.getChildByName("closeBtn")),
                                1 == w.IS_LOCAL && (this._closeBtn.x = 0)),
                                    this._closeBtn
                            }
                        }, {
                            key: "intimacyMc",
                            get: function() {
                                return this._intimacyMc || (this._intimacyMc = this.getChildByName("intimacyMc")),
                                    this._intimacyMc
                            }
                        }, {
                            key: "expandStorageButton",
                            get: function() {
                                return this._expandStorageButton || (this._expandStorageButton = new y(this.getChildByName("expandStorageButton"))),
                                    this._expandStorageButton
                            }
                        }, {
                            key: "spiritLittleMc",
                            get: function() {
                                return this._spiritLittleMc || (this._spiritLittleMc = new y(this.getChildByName("spiritLittleMc"))),
                                    this._spiritLittleMc
                            }
                        }, {
                            key: "putToCloudButton",
                            get: function() {
                                return this._putToCloudButton || (this._putToCloudButton = new y(this.getChildByName("putToCloudButton"))),
                                    this._putToCloudButton
                            }
                        }, {
                            key: "putToCloudDisButton",
                            get: function() {
                                return this._putToCloudDisButton || (this._putToCloudDisButton = new y(this.getChildByName("putToCloudDisButton")),
                                    this._putToCloudDisButton.addComponent(v)),
                                    this._putToCloudDisButton
                            }
                        }, {
                            key: "normalStorageButton",
                            get: function() {
                                return this._normalStorageButton || (this._normalStorageButton = new f(this.getChildByName("normalStorageButton"))),
                                    this._normalStorageButton
                            }
                        }, {
                            key: "abandonedStorageButton",
                            get: function() {
                                return this._abandonedStorageButton || (this._abandonedStorageButton = new y(this.getChildByName("abandonedStorageButton"))),
                                    this._abandonedStorageButton
                            }
                        }, {
                            key: "putToNormalStorageButton",
                            get: function() {
                                return this._putToNormalStorageButton || (this._putToNormalStorageButton = new y(this.getChildByName("putToNormalStorageButton"))),
                                    this._putToNormalStorageButton
                            }
                        }, {
                            key: "imgXg",
                            get: function() {
                                return this._imgXg || (this._imgXg = new y(this.getChildByName("imgXg")),
                                    this._imgXg.addComponent(v)),
                                    this._imgXg
                            }
                        }, {
                            key: "xgMc",
                            get: function() {
                                return this._xgMc || (this._xgMc = new y(this.getChildByName("xgMc")),
                                    this._xgMc.addComponent(v)),
                                    this._xgMc
                            }
                        }, {
                            key: "switchBtn",
                            get: function() {
                                return this._switchBtn || (this._switchBtn = new y(this.getChildByName("switchBtn"))),
                                    this._switchBtn
                            }
                        }]),
                        n
                }(y);
                n._RF.pop()
            }
        }
    }
));
