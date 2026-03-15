System.register("chunks:///_virtual/CurrentEquipUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./DEFINE.ts", "./global.ts", "./PropertyDes.ts", "./EquipmentType.ts", "./OpenAsWinDes.ts", "./SpiritEquipInfoProxy.ts", "./DropReq.ts", "./DropRsp.ts", "./FixUpReq.ts", "./FixUpRsp.ts", "./SellEquipmentReq.ts", "./SellEquipmentRsp.ts", "./NetManager.ts", "./DefaultImgCache.ts", "./AgentNode.ts", "./NodeExtend.ts", "./EquipmentIcon.ts", "./CFunction.ts", "./CGIEvent.ts", "./CGILoader.ts", "./ResManager.ts", "./BagDataProxy.ts", "./SpiritBagGetEquipmentBagRsp.ts", "./LangStrings.ts", "./LangUtils.ts", "./NetActionProxy.ts", "./NetResult.ts", "./Math_ListCoord.ts", "./SpiritBagRefProxy.ts", "./SpiritPropertyTranslator.ts", "./BagEquipmentIcon.ts", "./EquipIconCompareTipsWithSpiritBag.ts", "./EquipIconTipsWithSpiritBag.ts", "./SpiritBagUISafeCodeShow.ts", "./ui1112.ts", "./FixTemperDataProxy.ts"], (function(t) {
        var i, e, r, s, a, n, h, u, o, l, c, _, p, g, d, T, m, x, S, B, f, I, D, C, y, b, v, w, F, P, k, E, q, A, N, M, H, L, R, U, O, G, W, Q;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t.Label,
                        a = t.NodeEventType,
                        n = t.sys,
                        h = t.Vec2
                }
                , function(t) {
                    u = t.Constants
                }
                , function(t) {
                    o = t.DEFINE
                }
                , function(t) {
                    l = t.__global
                }
                , function(t) {
                    c = t.PropertyDes
                }
                , function(t) {
                    _ = t.EquipmentType
                }
                , function(t) {
                    p = t.OpenAsWinDes
                }
                , function(t) {
                    g = t.SpiritEquipInfoProxy
                }
                , function(t) {
                    d = t.DropReq
                }
                , function(t) {
                    T = t.DropRsp
                }
                , function(t) {
                    m = t.FixUpReq
                }
                , function(t) {
                    x = t.FixUpRsp
                }
                , function(t) {
                    S = t.SellEquipmentReq
                }
                , function(t) {
                    B = t.SellEquipmentRsp
                }
                , function(t) {
                    f = t.NetManager
                }
                , function(t) {
                    I = t.DefaultImgCache
                }
                , function(t) {
                    D = t.AgentNode
                }
                , function(t) {
                    C = t.NodeExtend
                }
                , function(t) {
                    y = t.EquipmentIcon
                }
                , function(t) {
                    b = t.CFunction
                }
                , function(t) {
                    v = t.CGIEvent
                }
                , function(t) {
                    w = t.CGILoader
                }
                , function(t) {
                    F = t.default
                }
                , function(t) {
                    P = t.BagDataProxy
                }
                , function(t) {
                    k = t.SpiritBagGetEquipmentBagRsp
                }
                , function(t) {
                    E = t.LangStrings
                }
                , function(t) {
                    q = t.LangUtils
                }
                , function(t) {
                    A = t.NetActionProxy
                }
                , function(t) {
                    N = t.NetResult
                }
                , function(t) {
                    M = t.Math_ListCoord
                }
                , function(t) {
                    H = t.SpiritBagRefProxy
                }
                , function(t) {
                    L = t.SpiritPropertyTranslator
                }
                , function(t) {
                    R = t.BagEquipmentIcon
                }
                , function(t) {
                    U = t.EquipIconCompareTipsWithSpiritBag
                }
                , function(t) {
                    O = t.EquipIconTipsWithSpiritBag
                }
                , function(t) {
                    G = t.SpiritBagUISafeCodeShow
                }
                , function(t) {
                    W = t.ui1112
                }
                , function(t) {
                    Q = t.FixTemperDataProxy
                }
            ],
            execute: function() {
                r._RF.push({}, "2e93d8DwypPe4t1ilFiEGlN", "CurrentEquipUILogic", void 0);
                var Y = t("CurrentEquipUILogic", function() {
                    var t = e.prototype;
                    function e(t) {
                        this._ui = void 0,
                            this._itemResLib = void 0,
                            this._itemData = void 0,
                            this._newItemData = void 0,
                            this._newEquipmentResponse = void 0,
                            this._curItemList = void 0,
                            this._curPageNum = void 0,
                            this._curTotalPageNum = void 0,
                            this._equipmentSpaceNum = void 0,
                            this._curSearchType = 0,
                            this._curSearchQuality = 0,
                            this._curSearchBase = 0,
                            this._itemCoordManager = void 0,
                            this._curSpiritData = void 0,
                            this._spiritMC = void 0,
                            this._curSpiritEquipData = void 0,
                            this._curEqIcon0 = void 0,
                            this._curEqIcon1 = void 0,
                            this._curEqIcon2 = void 0,
                            this._curItemTooltips = void 0,
                            this._compareTooltips = void 0,
                            this._listBoxUI = void 0,
                            this._curClickItem = void 0,
                            this._itemContainer = void 0,
                            this._combox = void 0,
                            this._comboxQuality = void 0,
                            this._comboxBase = void 0,
                            this._uiSafeCodeShow = void 0,
                            this._hideFlg = !1,
                            this._loader = void 0,
                            this._canPut = !0,
                            this.needSafecode = !0,
                            this._tabIdx = void 0,
                            this._name = ["全部", "精力", "物攻", "物防", "魔攻", "魔防", "暴击", "闪避", "命中", "抗暴"],
                        null == e.imageCache && (e.imageCache = new I),
                            this._ui = new J(t),
                            this._ui.attribute1.y = 0,
                            this._itemContainer = new D(new C),
                            this._ui.addChild(this._itemContainer.target),
                            this._ui.cellBg.selectBtn0.on(a.TOUCH_END, this.onClickSelect, this),
                            this._ui.cellBg.selectBtn1.on(a.TOUCH_END, this.onClickSelect, this),
                            this._ui.cellBg.selectBtn2.on(a.TOUCH_END, this.onClickSelect, this),
                            this._ui.cellBg.selectBtn3.on(a.TOUCH_END, this.onClickSelect, this),
                            this._ui.cellBg.selectBtn4.on(a.TOUCH_END, this.onClickSelect, this),
                            this.onSelect(this._curSearchType),
                            this._hideFlg = !1,
                            this._ui.cellBg.chooseBtn.gotoAndStop(2),
                            this._itemCoordManager = new M(300,198,e.SPIRIT_EQ_ICON_WIDTH,e.SPIRIT_EQ_ICON_HEIGHT,4,4,10,18),
                            this._curItemTooltips = new O,
                            this._curItemTooltips.hide(),
                            this._compareTooltips = new U,
                            this._compareTooltips.hide(),
                            this._listBoxUI = new Z,
                            this._listBoxUI.state.gotoAndStop(1),
                            this._listBoxUI.bg.on(a.TOUCH_END, this.listBoxClickHandler, this),
                            this._listBoxUI.state.equipBtn.on(a.TOUCH_END, this.listBoxClickHandler, this),
                            this._listBoxUI.state.sellBtn.on(a.TOUCH_END, this.listBoxClickHandler, this),
                            this._listBoxUI.state.puttobagBtn.on(a.TOUCH_END, this.listBoxClickHandler, this),
                            this._listBoxUI.state.getOffBtn.on(a.TOUCH_END, this.listBoxClickHandler, this),
                            this._ui.cellBg.btnDownCurEquip.on(a.TOUCH_END, this.btnClickHandler, this),
                            this._ui.cellBg.chooseBtn.btnChooseHide.on(a.TOUCH_END, this.btnClickHandler, this),
                            this._ui.cellBg.prevPageButton.on(a.TOUCH_END, this.btnClickHandler, this),
                            this._ui.cellBg.nextPageButton.on(a.TOUCH_END, this.btnClickHandler, this),
                            this._uiSafeCodeShow = new G(this,!0),
                            this._ui.parentNode.addChild(this._uiSafeCodeShow),
                            this._uiSafeCodeShow.visible = !1,
                            this._ui.gotoBookBtn.visible = !0,
                            this._ui.attribute1.fixBtn.on(a.TOUCH_END, this.btnClickHandler, this),
                            this._ui.attribute1.fixBtn.visible = !1,
                            this._curPageNum = 1,
                            this._ui.cellBg.pageText.text = "1/1",
                            this._ui.cellBg.txtBagSize.text = "仓库容量：0/80",
                            this._loader = new w(o.CGI_ROOT + "equip_cloud_storage",l.SysAPI.getNetSysAPI().createURLLoader(!0)),
                            this._loader.addEventListener(v.COMPLETE, this.onDataReceive, this),
                            this._loader.addEventListener(v.GOT_ERROR, this.onNetError, this),
                            this.reset()
                    }
                    return t.eyeShow = function(t) {
                        this._ui.equip0.visible = t,
                            this._ui.equip1.visible = t,
                            this._ui.equip2.visible = t,
                            this._ui.equip3.visible = t
                    }
                        ,
                        t.showTab = function(t) {
                            this._tabIdx = t,
                                this._ui.attribute.visible = 1 != t,
                                this._ui.attribute1.visible = 1 == t
                        }
                        ,
                        t.showBag = function(t) {
                            this._ui.cellBg.visible = !t,
                                this._itemContainer.visible = !t
                        }
                        ,
                        t.onSelect = function(t) {
                            for (var i = 0; i <= 3; i++) {
                                var e = this._ui.cellBg["selectBtn" + i];
                                e && e.gotoAndStop(i == t ? 2 : 1)
                            }
                        }
                        ,
                        t.onClickSelect = function(t) {
                            switch (t.target) {
                                case this._ui.cellBg.selectBtn0.target:
                                    this.searchItemsByType(0);
                                    break;
                                case this._ui.cellBg.selectBtn1.target:
                                    this.searchItemsByType(1);
                                    break;
                                case this._ui.cellBg.selectBtn2.target:
                                    this.searchItemsByType(2);
                                    break;
                                case this._ui.cellBg.selectBtn3.target:
                                    this.searchItemsByType(3);
                                    break;
                                case this._ui.cellBg.selectBtn4:
                                    H.spiritBagPanel.showEquipFilter(this._curSearchBase, this.filterCallBack.bind(this));
                                    break;
                                default:
                                    this.searchItemsByType(0)
                            }
                        }
                        ,
                        t.filterCallBack = function(t) {
                            for (var i = 0, r = 0; r < e.FILTER_TYPE.length; r++)
                                if (t == e.FILTER_TYPE[r]) {
                                    i = r;
                                    break
                                }
                            this._ui.cellBg.selectBtn4.getChildByName("tfName").getComponent(s).string = this._name[i],
                                this.searchItemsByBase(t)
                        }
                        ,
                        t.btnOverHandler = function(t) {}
                        ,
                        t.btnOutHandler = function(t) {}
                        ,
                        t.onDataReceive = function(t) {
                            var i = t.data
                                , e = new N(i);
                            if (e.value >= 0)
                                switch (t.sendType) {
                                    case "?cmd=1":
                                        this._canPut = !0,
                                            this._itemData.deleted(this._curClickItem.data.serverID, this._curClickItem.data.catchTime),
                                            this.rushCurSpiritHP(!1, this._curClickItem.data),
                                            this.showEquipment()
                                }
                            else
                                this._canPut = !0,
                                    l.UI.alert("", e.msg)
                        }
                        ,
                        t.onNetError = function(t) {
                            l.UI.alert("", t.msg)
                        }
                        ,
                        t.showEquipItemList = function() {
                            this._listBoxUI.visible = !0,
                            this._itemContainer && (this._itemContainer.visible = !0),
                                this._ui.cellBg.visible = !0
                        }
                        ,
                        t.hideEquipItemList = function(t) {
                            void 0 === t && (t = !1),
                                this._listBoxUI.visible = !1,
                            this._itemContainer && (this._itemContainer.visible = !1),
                            t || (this._ui.cellBg.visible = !1),
                                this._ui.gotoBookBtn.visible = !1,
                                this._curPageNum = 1
                        }
                        ,
                        t.resetCurSpirit = function() {
                            var t;
                            this._curPageNum = 1,
                                this._ui.gotoBookBtn.visible = !1,
                                this._uiSafeCodeShow.visible = !1,
                                this._ui.attribute.hpText.text = "",
                                this._ui.attribute.paText.text = "",
                                this._ui.attribute.pdText.text = "",
                                this._ui.attribute.maText.text = "",
                                this._ui.attribute.mdText.text = "",
                                this._ui.attribute.spText.text = "",
                                this._ui.attribute.hitText.text = "",
                                this._ui.attribute.dodgeText.text = "",
                                this._ui.attribute.critText.text = "",
                                this._ui.attribute.dcritText.text = "",
                                this._ui.attribute.talentedEnergyText.text = "",
                                this._ui.attribute.talentedSpeedText.text = "",
                                this._ui.attribute.talentedPhysicalAttackText.text = "",
                                this._ui.attribute.talentedPhysicalDefenseText.text = "",
                                this._ui.attribute.talentedMagicAttackText.text = "",
                                this._ui.attribute.talentedMagicDefenseText.text = "",
                                this._ui.attribute1.hpText.text = "",
                                this._ui.attribute1.paText.text = "",
                                this._ui.attribute1.pdText.text = "",
                                this._ui.attribute1.maText.text = "",
                                this._ui.attribute1.mdText.text = "",
                                this._ui.attribute1.spText.text = "",
                                this._ui.attribute1.hitText.text = "",
                                this._ui.attribute1.dodgeText.text = "",
                                this._ui.attribute1.critText.text = "",
                                this._ui.attribute1.dcritText.text = "",
                                this._ui.attribute1.talentedEnergyText.text = "",
                                this._ui.attribute1.talentedSpeedText.text = "",
                                this._ui.attribute1.talentedPhysicalAttackText.text = "",
                                this._ui.attribute1.talentedPhysicalDefenseText.text = "",
                                this._ui.attribute1.talentedMagicAttackText.text = "",
                                this._ui.attribute1.talentedMagicDefenseText.text = "",
                                this._ui.attribute1.StriveEnergyText.text = "",
                                this._ui.attribute1.StrivePhysicalAttackText.text = "",
                                this._ui.attribute1.StrivePhysicalDefenseText.text = "",
                                this._ui.attribute1.StriveMagicAttackText.text = "",
                                this._ui.attribute1.StriveMagicDefenseText.text = "",
                                this._ui.attribute1.StriveSpeedText.text = "",
                                this._ui.attribute1.temperText.text = "";
                            for (var i = 0; i < c.EQUIPMENT_TYPE.length; i++)
                                (t = this["_curEqIcon" + i]) && (t.off(a.TOUCH_END, this.curItemClcikHandler, this),
                                    n.platform == n.Platform.MOBILE_BROWSER ? (t.off(a.TOUCH_START, this.curItemOverHandler, this),
                                        t.off(a.TOUCH_CANCEL, this.curItemOutHandler, this)) : (t.off(a.MOUSE_ENTER, this.curItemOverHandler, this),
                                        t.off(a.MOUSE_LEAVE, this.curItemOutHandler, this)),
                                    t.dispose(),
                                    this._ui["equip" + i].hasOwnProperty("iconContainer") ? this._ui["equip" + i].iconContainer.contains(t) && this._ui["equip" + i].iconContainer.removeChild(t) : this._ui["equip" + i].contains(t) && this._ui["equip" + i].removeChild(t)),
                                    this["_curEqIcon" + i] = null;
                            this._curSpiritData = null,
                                this._curSpiritEquipData = null
                        }
                        ,
                        t.reset = function() {}
                        ,
                        t.dispose = function() {
                            this.cleanResData(),
                                this._ui.off(a.TOUCH_END, this.btnClickHandler, this)
                        }
                        ,
                        t.sellHandlerFromEquiped = function(t) {
                            1 == t && (this._curClickItem.data.quality > 2 ? l.showMsgBox("该装备是稀有以上品质装备，是否要出售？", 2, new b(this.sellHandlerFromHQ,this)) : this.sellEquipment())
                        }
                        ,
                        t.sellHandlerFromHQ = function(t) {
                            1 == t && this.sellEquipment()
                        }
                        ,
                        t.sureEquipSellRelease = function(t) {
                            var i = this;
                            l.UI.createMiniLoading();
                            var e = new S;
                            e.id = this._curClickItem.data.serverID,
                                e.serialNum = this._curClickItem.data.catchTime,
                                e.password = t,
                                f.send(721031, e, B, (function(t) {
                                        if (l.UI.closeMiniLoading(),
                                        0 == t.retInfo.retCode)
                                            i.needSafecode = !1,
                                                i.rushCurSpiritHP(!1, i._curClickItem.data),
                                                i._itemData.deleted(i._curClickItem.data.serverID, i._curClickItem.data.catchTime),
                                                i.showEquipment();
                                        else {
                                            var e = t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312");
                                            if (l.showMsgBox(e),
                                            -4 == t.retInfo.retCode)
                                                i.needSafecode = !0,
                                                    i._uiSafeCodeShow.visible = !0,
                                                    i._uiSafeCodeShow.init();
                                            else {
                                                e = t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312");
                                                l.showMsgBox(e)
                                            }
                                        }
                                    }
                                ))
                        }
                        ,
                        t.sellEquipment = function() {
                            var t = this;
                            if (this.needSafecode)
                                this.needSafecode = !0,
                                    this._uiSafeCodeShow.visible = !0,
                                    this._uiSafeCodeShow.init();
                            else {
                                l.UI.createMiniLoading();
                                var i = new S;
                                i.id = this._curClickItem.data.serverID,
                                    i.serialNum = this._curClickItem.data.catchTime,
                                    i.password = 0,
                                    f.send(721031, i, B, (function(i) {
                                            if (l.UI.closeMiniLoading(),
                                            0 == i.retInfo.retCode)
                                                t.needSafecode = !1,
                                                    t.rushCurSpiritHP(!1, t._curClickItem.data),
                                                    t._itemData.deleted(t._curClickItem.data.serverID, t._curClickItem.data.catchTime),
                                                    t.showEquipment();
                                            else if (-4 == i.retInfo.retCode) {
                                                var e = i.retInfo.retMsg.readMultiByte(i.retInfo.retMsg.length, "gb2312");
                                                l.showMsgBox(e),
                                                    t.needSafecode = !0,
                                                    t._uiSafeCodeShow.visible = !0,
                                                    t._uiSafeCodeShow.init()
                                            } else {
                                                e = i.retInfo.retMsg.readMultiByte(i.retInfo.retMsg.length, "gb2312");
                                                l.showMsgBox(e)
                                            }
                                        }
                                    ))
                            }
                        }
                        ,
                        t.rushCurSpiritHP = function(t, i) {
                            if (null != P.data) {
                                for (var e, r, s = 0; s < P.data.length; s++)
                                    if ((r = P.data[s]).id == i.spiritID && r.caughtTime == i.spiritCatchTime) {
                                        e = r;
                                        break
                                    }
                                null != e && (t ? (6 == i.baseAttr && (e.maxHP += i.baseValue),
                                6 == i.specialAttr && (e.maxHP += i.specialValue)) : (6 == i.baseAttr && (e.maxHP -= i.baseValue),
                                6 == i.specialAttr && (e.maxHP -= i.specialValue),
                                e.HP > e.maxHP && (e.HP = e.maxHP)),
                                    H.spiritBagPanel.update())
                            }
                        }
                        ,
                        t.listBoxClickHandler = function(t) {
                            var i = this;
                            switch (this.listUIContainer.removeChild(this._listBoxUI.target),
                                this._curItemTooltips.hide(),
                                t.target.name) {
                                case "sellBtn":
                                    0 != this._curClickItem.data.spiritID ? l.showMsgBox("该装备已经被宠物装备在身上，是否要出售？", 2, new b(this.sellHandlerFromEquiped,this)) : this._curClickItem.data.quality > 2 ? l.showMsgBox("该装备是稀有以上品质装备，是否要出售？", 2, new b(this.sellHandlerFromHQ,this)) : this.sellEquipment();
                                    break;
                                case "puttobagBtn":
                                    0 != this._curClickItem.data.spiritID ? l.showMsgBox("该装备已被宠物装备在身上，是否脱下装备并存入仓库？", 2, new b((function(t) {
                                            1 == t && i._canPut && (i._canPut = !1,
                                                i._loader.sendData("?cmd=1", {
                                                    id: i._curClickItem.data.serverID,
                                                    serialnum: i._curClickItem.data.catchTime
                                                }))
                                        }
                                    ),this)) : this._canPut && (this._canPut = !1,
                                        this._loader.sendData("?cmd=1", {
                                            id: this._curClickItem.data.serverID,
                                            serialnum: this._curClickItem.data.catchTime
                                        }));
                                    break;
                                case "getOffBtn":
                                    l.UI.createMiniLoading();
                                    var e = new d;
                                    e.id = this._curClickItem.data.serverID,
                                        e.serialNum = this._curClickItem.data.catchTime,
                                        e.spiritId = this._curClickItem.data.spiritID,
                                        e.spiritCatchTime = this._curClickItem.data.spiritCatchTime,
                                        f.send(721030, e, T, (function(t) {
                                                if (l.UI.closeMiniLoading(),
                                                0 == t.retInfo.retCode)
                                                    i.rushCurSpiritHP(!1, i._curClickItem.data),
                                                        i._curClickItem.data.spiritID = 0,
                                                        i._curClickItem.data.spiritCatchTime = 0,
                                                        i.showEquipment();
                                                else {
                                                    var e = t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312");
                                                    l.showMsgBox(e)
                                                }
                                            }
                                        ));
                                    break;
                                case "equipBtn":
                                    if (null == this._curSpiritData)
                                        return void l.showMsgBox("当前无宠物可穿戴！");
                                    l.UI.createMiniLoading();
                                    var r = new m;
                                    r.id = this._curClickItem.data.serverID,
                                        r.serialNum = this._curClickItem.data.catchTime,
                                        r.spiritIndex = this._curSpiritData.index,
                                        r.spiritId = this._curSpiritData.id,
                                        r.spiritCatchTime = this._curSpiritData.caughtTime,
                                        f.send(721029, r, x, (function(t) {
                                                if (l.UI.closeMiniLoading(),
                                                0 == t.retInfo.retCode) {
                                                    var e = i.getCurSpiritEquipmentByType(i._curClickItem.data.type);
                                                    null != e && (i.rushCurSpiritHP(!1, e),
                                                        e.spiritID = 0,
                                                        e.spiritCatchTime = 0),
                                                        i._curClickItem.data.spiritID = i._curSpiritData.id,
                                                        i._curClickItem.data.spiritCatchTime = i._curSpiritData.caughtTime,
                                                        i.rushCurSpiritHP(!0, i._curClickItem.data),
                                                        i.showEquipment()
                                                } else {
                                                    var r = t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312");
                                                    l.showMsgBox(r)
                                                }
                                            }
                                        ))
                            }
                        }
                        ,
                        t.btnClickHandler = function(t) {
                            var i = this;
                            switch (t.target) {
                                case this._ui.cellBg.btnDownEquip.target:
                                case this._ui.cellBg.btnDownCurEquip.target:
                                    if (null == this._curSpiritData)
                                        l.showMsgBox("宠物背包中没有宠物！");
                                    else {
                                        if (P.data.length > 0) {
                                            for (var e = !1, r = 0; r < P.data.length; r++)
                                                for (var s = this._itemData.selectBySpiritData(P.data[r].id, P.data[r].caughtTime), a = 0; a < s.length; a++) {
                                                    if (null != s[a]) {
                                                        e = !0;
                                                        break
                                                    }
                                                }
                                            if (!e)
                                                return void l.showMsgBox("当前没有可以脱下的装备！", 1)
                                        }
                                        l.UI.createMiniLoading();
                                        var n = new d;
                                        n.spiritId = this._curSpiritData.id,
                                            n.spiritCatchTime = this._curSpiritData.caughtTime,
                                            f.send(721030, n, T, (function(t) {
                                                    if (l.UI.closeMiniLoading(),
                                                    0 == t.retInfo.retCode) {
                                                        i.getItemData();
                                                        for (var e = 0; e < i._curSpiritEquipData.length; e++) {
                                                            var r = i._curSpiritEquipData[e];
                                                            null != r && i.rushCurSpiritHP(!1, r)
                                                        }
                                                    } else {
                                                        var s = t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312");
                                                        l.showMsgBox(s)
                                                    }
                                                }
                                            ))
                                    }
                                    break;
                                case this._ui.cellBg.btnDownAllEquip.target:
                                    l.showMsgBox("确定要把背包中的所有装备脱下吗？\n（仓库宠物身上的装备也会被脱下哦！）", 2, new b((function(t) {
                                            if (1 == t) {
                                                l.UI.createMiniLoading();
                                                var e = new d;
                                                e.spiritId = 0,
                                                    e.spiritCatchTime = 0,
                                                    f.send(721030, e, T, (function(t) {
                                                            if (l.UI.closeMiniLoading(),
                                                            0 == t.retInfo.retCode) {
                                                                A.getSpiritBag();
                                                                for (var e = 0; e < P.data.length; e++)
                                                                    for (var r = i._itemData.selectBySpiritData(P.data[e].id, P.data[e].caughtTime), s = 0; s < r.length; s++) {
                                                                        var a = r[s];
                                                                        null != a && i.rushCurSpiritHP(!1, a)
                                                                    }
                                                            } else {
                                                                var n = t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312");
                                                                l.showMsgBox(n)
                                                            }
                                                        }
                                                    ))
                                            }
                                        }
                                    ),this));
                                    break;
                                case this._ui.cellBg.chooseBtn.btnChooseHide.target:
                                    this._hideFlg ? this._hideFlg = !1 : this._hideFlg = !0,
                                        this._hideFlg ? this._ui.cellBg.chooseBtn.gotoAndStop(1) : this._ui.cellBg.chooseBtn.gotoAndStop(2),
                                        this._curPageNum = 1,
                                        this.searchItems();
                                    break;
                                case this._ui.cellBg.prevPageButton.target:
                                    this._curPageNum > 1 && (this._curPageNum--,
                                        this.rushItems());
                                    break;
                                case this._ui.cellBg.nextPageButton.target:
                                    this._curPageNum < this._curTotalPageNum && (this._curPageNum++,
                                        this.rushItems());
                                    break;
                                case this._ui.gotoBookBtn.target:
                                    this.openActivityAppWithParams(3536, "ui3536", {
                                        ui: "NpcClick"
                                    });
                                    break;
                                case this._ui.attribute1.fixBtn.target:
                                    this.onClickFixTemperBtn()
                            }
                        }
                        ,
                        t.onClickFixTemperBtn = function() {
                            var t = new p;
                            t.winPos = new h(0,0),
                                t.name = "",
                                t.src = "activityApp://3435/3101";
                            var i = {
                                id: this._curSpiritData.id,
                                catch_time: this._curSpiritData.caughtTime,
                                level: this._curSpiritData.level,
                                prs: this._curSpiritData.temper,
                                need_money: 0
                            };
                            t.params = {
                                ui: "IconClick",
                                args: i
                            },
                                t.isModal = !0,
                                t.cache = !1,
                                W.Instance.setParams(t.params)
                        }
                        ,
                        t.openActivityAppWithParams = function(t, i, e, r, s) {
                            void 0 === r && (r = !1),
                            void 0 === s && (s = !0),
                                this._curPageNum = 1,
                                this._ui.gotoBookBtn.visible = !1,
                                H.spiritBagPanel.close();
                            var a = new p;
                            a.winPos = new h(0,0),
                                a.name = "",
                                a.src = "activityApp://" + t + "/" + i,
                                a.params = e,
                                a.isModal = s,
                                a.cache = r,
                                l.openAsWin(a)
                        }
                        ,
                        t.searchItemsByType = function(t) {
                            this.onSelect(t),
                                this._curSearchType = t,
                                this._curPageNum = 1,
                                this.searchItems()
                        }
                        ,
                        t.searchItemsByQuality = function(t) {
                            this._curSearchQuality = t,
                                this._curPageNum = 1,
                                this.searchItems()
                        }
                        ,
                        t.searchItemsByBase = function(t) {
                            this._curSearchBase = t,
                                this._curPageNum = 1,
                                this.searchItems()
                        }
                        ,
                        t.cleanResData = function() {
                            var t;
                            if (null != this._itemResLib)
                                for (var i in this._itemResLib)
                                    (t = this._itemResLib[i]).dispose(),
                                        t.off(a.TOUCH_END, this.bagItemClcikHandler, this),
                                        this._itemContainer.removeChild(t);
                            this.resetCurSpirit(),
                                this._itemResLib = null,
                                this._itemData = null,
                                this._curClickItem = null
                        }
                        ,
                        t.showEquipment = function() {
                            this.showSpiritEquitment(),
                                this.searchItems()
                        }
                        ,
                        e.goRich = function(t) {}
                        ,
                        t.showSpiritEquitment = function() {
                            if (null != this._curSpiritData) {
                                if (null != this._itemData) {
                                    var t;
                                    this._curSpiritEquipData = this._itemData.selectBySpiritData(this._curSpiritData.id, this._curSpiritData.caughtTime);
                                    for (var i = [], e = 1; e <= c.EQUIPMENT_PROPETY.length; e++) {
                                        i.push(0);
                                        for (var r = 0; r < this._curSpiritEquipData.length; r++)
                                            e == (t = this._curSpiritEquipData[r]).baseAttr && (i[e - 1] += t.baseValue),
                                            e == t.specialAttr && (i[e - 1] += t.specialValue)
                                    }
                                    i[0] > 0 ? this._ui.attribute.paText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PA.toString() + "</color></outline><color=#339900>+" + i[0] + "</color></outline>" : this._ui.attribute.paText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PA.toString() + "</color></outline>",
                                        i[1] > 0 ? this._ui.attribute.pdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PD.toString() + "</color></outline><outline color=#FFFFFF width=2><color=#339900>+" + i[1] + "</color></outline>" : this._ui.attribute.pdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PD.toString() + "</color></outline>",
                                        i[2] > 0 ? this._ui.attribute.maText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MA.toString() + "</color></outline><color=#339900>+" + i[2] + "</color></outline>" : this._ui.attribute.maText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MA.toString() + "</color></outline>",
                                        i[3] > 0 ? this._ui.attribute.mdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MD.toString() + "</color></outline><color=#339900>+" + i[3] + "</color></outline>" : this._ui.attribute.mdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MD.toString() + "</color></outline>",
                                        i[4] > 0 ? this._ui.attribute.spText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.SP.toString() + "</color></outline><color=#339900>+" + i[4] + "</color></outline>" : this._ui.attribute.spText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.SP.toString() + "</color></outline>",
                                        i[5] > 0 ? this._ui.attribute.hpText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.baseHP.toString() + "</color></outline><color=#339900>+" + i[5] + "</color></outline>" : this._ui.attribute.hpText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.baseHP.toString() + "</color></outline>",
                                        i[6] > 0 ? this._ui.attribute.hitText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.HIT.toString() + "</color></outline><color=#339900>+" + i[6] + "</color></outline>" : this._ui.attribute.hitText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.HIT.toString() + "</color></outline>",
                                        i[7] > 0 ? this._ui.attribute.dodgeText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DODGE.toString() + "</color></outline><color=#339900>+" + i[7] + "</color></outline>" : this._ui.attribute.dodgeText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DODGE.toString() + "</color></outline>",
                                        i[8] > 0 ? this._ui.attribute.critText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.CRIT.toString() + "</color></outline><color=#339900>+" + i[8] + "</color></outline>" : this._ui.attribute.critText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.CRIT.toString() + "</color></outline>",
                                        i[9] > 0 ? this._ui.attribute.dcritText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DCRIT.toString() + "</color></outline><color=#339900>+" + i[9] + "</color></outline>" : this._ui.attribute.dcritText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DCRIT.toString() + "</color></outline>",
                                        i[0] > 0 ? this._ui.attribute1.paText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PA.toString() + "</color></outline><color=#339900>+" + i[0] + "</color></outline>" : this._ui.attribute1.paText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PA.toString() + "</color></outline>",
                                        i[1] > 0 ? this._ui.attribute1.pdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PD.toString() + "</color></outline><color=#339900>+" + i[1] + "</color></outline>" : this._ui.attribute1.pdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.PD.toString() + "</color></outline>",
                                        i[2] > 0 ? this._ui.attribute1.maText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MA.toString() + "</color></outline><color=#339900>+" + i[2] + "</color></outline>" : this._ui.attribute1.maText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MA.toString() + "</color></outline>",
                                        i[3] > 0 ? this._ui.attribute1.mdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MD.toString() + "</color></outline><color=#339900>+" + i[3] + "</color></outline>" : this._ui.attribute1.mdText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.MD.toString() + "</color></outline>",
                                        i[4] > 0 ? this._ui.attribute1.spText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.SP.toString() + "</color></outline><color=#339900>+" + i[4] + "</color></outline>" : this._ui.attribute1.spText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.SP.toString() + "</color></outline>",
                                        i[5] > 0 ? this._ui.attribute1.hpText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.baseHP.toString() + "</color></outline><color=#339900>+" + i[5] + "</color></outline>" : this._ui.attribute1.hpText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.baseHP.toString() + "</color></outline>",
                                        i[6] > 0 ? this._ui.attribute1.hitText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.HIT.toString() + "</color></outline><color=#339900>+" + i[6] + "</color></outline>" : this._ui.attribute1.hitText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.HIT.toString() + "</color></outline>",
                                        i[7] > 0 ? this._ui.attribute1.dodgeText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DODGE.toString() + "</color></outline><color=#339900>+" + i[7] + "</color></outline>" : this._ui.attribute1.dodgeText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DODGE.toString() + "</color></outline>",
                                        i[8] > 0 ? this._ui.attribute1.critText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.CRIT.toString() + "</color></outline><color=#339900>+" + i[8] + "</color></outline>" : this._ui.attribute1.critText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.CRIT.toString() + "</color></outline>",
                                        i[9] > 0 ? this._ui.attribute1.dcritText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DCRIT.toString() + "</color></outline><color=#339900>+" + i[9] + "</color></outline>" : this._ui.attribute1.dcritText.htmlText = "<outline color=#FFFFFF width=2><color=#C8002A>" + this._curSpiritData.DCRIT.toString() + "</color></outline>"
                                } else
                                    this._ui.attribute.paText.htmlText = this._curSpiritData.PA.toString(),
                                        this._ui.attribute.pdText.htmlText = this._curSpiritData.PD.toString(),
                                        this._ui.attribute.maText.htmlText = this._curSpiritData.MA.toString(),
                                        this._ui.attribute.mdText.htmlText = this._curSpiritData.MD.toString(),
                                        this._ui.attribute.hpText.htmlText = this._curSpiritData.baseHP.toString(),
                                        this._ui.attribute.spText.htmlText = this._curSpiritData.SP.toString(),
                                        this._ui.attribute.hitText.htmlText = this._curSpiritData.HIT.toString(),
                                        this._ui.attribute.dodgeText.htmlText = this._curSpiritData.DODGE.toString(),
                                        this._ui.attribute.critText.htmlText = this._curSpiritData.CRIT.toString(),
                                        this._ui.attribute.dcritText.htmlText = this._curSpiritData.DCRIT.toString(),
                                        this._ui.attribute.talentedEnergyText.htmlText = this._curSpiritData.THP.toString(),
                                        this._ui.attribute.talentedSpeedText.htmlText = this._curSpiritData.TSP.toString(),
                                        this._ui.attribute.talentedPhysicalAttackText.htmlText = this._curSpiritData.TPA.toString(),
                                        this._ui.attribute.talentedPhysicalDefenseText.htmlText = this._curSpiritData.TPD.toString(),
                                        this._ui.attribute.talentedMagicAttackText.htmlText = this._curSpiritData.TMA.toString(),
                                        this._ui.attribute.talentedMagicDefenseText.htmlText = this._curSpiritData.TMD.toString(),
                                        this._ui.attribute1.paText.htmlText = this._curSpiritData.PA.toString(),
                                        this._ui.attribute1.pdText.htmlText = this._curSpiritData.PD.toString(),
                                        this._ui.attribute1.maText.htmlText = this._curSpiritData.MA.toString(),
                                        this._ui.attribute1.mdText.htmlText = this._curSpiritData.MD.toString(),
                                        this._ui.attribute1.hpText.htmlText = this._curSpiritData.baseHP.toString(),
                                        this._ui.attribute1.spText.htmlText = this._curSpiritData.SP.toString(),
                                        this._ui.attribute1.hitText.htmlText = this._curSpiritData.HIT.toString(),
                                        this._ui.attribute1.dodgeText.htmlText = this._curSpiritData.DODGE.toString(),
                                        this._ui.attribute1.critText.htmlText = this._curSpiritData.CRIT.toString(),
                                        this._ui.attribute1.dcritText.htmlText = this._curSpiritData.DCRIT.toString(),
                                        this._ui.attribute1.talentedEnergyText.htmlText = this._curSpiritData.THP.toString(),
                                        this._ui.attribute1.talentedSpeedText.htmlText = this._curSpiritData.TSP.toString(),
                                        this._ui.attribute1.talentedPhysicalAttackText.htmlText = this._curSpiritData.TPA.toString(),
                                        this._ui.attribute1.talentedPhysicalDefenseText.htmlText = this._curSpiritData.TPD.toString(),
                                        this._ui.attribute1.talentedMagicAttackText.htmlText = this._curSpiritData.TMA.toString(),
                                        this._ui.attribute1.talentedMagicDefenseText.htmlText = this._curSpiritData.TMD.toString(),
                                        this._ui.attribute1.StriveEnergyText.text = this._curSpiritData.GHP.toString(),
                                        this._ui.attribute1.StrivePhysicalAttackText.text = this._curSpiritData.GPA.toString(),
                                        this._ui.attribute1.StrivePhysicalDefenseText.text = this._curSpiritData.GPD.toString(),
                                        this._ui.attribute1.StriveMagicAttackText.text = this._curSpiritData.GMA.toString(),
                                        this._ui.attribute1.StriveMagicDefenseText.text = this._curSpiritData.GMD.toString(),
                                        this._ui.attribute1.StriveSpeedText.text = this._curSpiritData.GSP.toString();
                                this._ui.attribute1.temperText.text = q.translate(E.TEMPER_IS, L.getTemper(this._curSpiritData.temper)) + c.getTemperDesHtmlStr(this._curSpiritData.temper)
                            }
                            this.setCurEquipmentIconByType(_.WEAPON_TYPE),
                                this.setCurEquipmentIconByType(_.ARMOR_TYPE),
                                this.setCurEquipmentIconByType(_.JEWELRY_TYPE)
                        }
                        ,
                        t.setCurEquipmentIconByType = function(t) {
                            for (var i, e = this["_curEqIcon" + t]; this._ui["equip" + t].iconContainer.numChildren > 0; )
                                this._ui["equip" + t].iconContainer.removeChildAt(0);
                            if (i = this.getCurSpiritEquipmentByType(t),
                                this._ui["equip" + t].equipType.text = ["武器", "防具", "饰品"][t],
                            null == i) {
                                switch (t) {
                                    case _.WEAPON_TYPE:
                                        if (null != this._newItemData && 1 == this._newItemData.awakeA)
                                            return this._ui["equip" + t].equipType.text = "魂之共鸣",
                                                void this.setNewEquipmentIconByType(t, 1, this._newItemData.equipA);
                                        if (null != this._newItemData && 2 == this._newItemData.awakeA)
                                            return this._ui["equip" + t].equipType.text = "魂之共鸣",
                                                void this.setNewEquipmentIconByType(t, 2, this._newItemData.equipB);
                                        break;
                                    case _.ARMOR_TYPE:
                                        if (this._ui.equip3.visible = !1,
                                        null != this._newItemData && 1 == this._newItemData.awakeB)
                                            return this._ui["equip" + t].equipType.text = "魂之共鸣",
                                                this.setNewEquipmentIconByType(t, 3, this._newItemData.equipC),
                                                void (null != this._newItemData && 1 == this._newItemData.awakeC && (this._ui.equip3.visible = !0,
                                                    this.setNewEquipmentIconByType(3, 4, this._newItemData.equipD)));
                                        break;
                                    case _.JEWELRY_TYPE:
                                        if (null != this._newItemData && 1 == this._newItemData.awakeD)
                                            return this._ui["equip" + t].equipType.text = "魂之共鸣",
                                                void this.setNewEquipmentIconByType(t, 5, this._newItemData.equipE)
                                }
                                this._ui["equip" + t].mouseChildren = !1,
                                    this._ui["equip" + t].tooltip = c.EQUIPMENT_TYPE[t]
                            } else
                                this._ui["equip" + t].mouseChildren = !0,
                                    this._ui["equip" + t].tooltip = null,
                                    null == e ? (this["_curEqIcon" + t] = new y(i,this._ui["equip" + t].iconContainer,60,60),
                                        (e = this["_curEqIcon" + t]).on(a.TOUCH_END, this.curItemClcikHandler, this),
                                        n.platform == n.Platform.MOBILE_BROWSER ? (e.on(a.TOUCH_START, this.curItemOverHandler, this),
                                            e.on(a.TOUCH_CANCEL, this.curItemOutHandler, this),
                                            e.on(a.TOUCH_END, this.curItemOutHandler, this)) : (e.on(a.MOUSE_ENTER, this.curItemOverHandler, this),
                                            e.on(a.MOUSE_LEAVE, this.curItemOutHandler, this))) : (this._ui["equip" + t].iconContainer.addChild(e),
                                        e.update(i))
                        }
                        ,
                        t.setNewEquipmentIconByType = function(t, i, e) {}
                        ,
                        t.getCurSpiritEquipmentByType = function(t) {
                            if (null == this._itemData)
                                return null;
                            if (null == this._curSpiritEquipData)
                                return null;
                            for (var i, e = 0; e < this._curSpiritEquipData.length; e++)
                                if ((i = this._curSpiritEquipData[e]).type == t)
                                    return i;
                            return null
                        }
                        ,
                        t.searchItems = function() {
                            var t;
                            this._curItemList = [];
                            for (var i = 0; i < this._itemData.length; i++)
                                switch (t = this._itemData.list[i],
                                    this._curSearchType) {
                                    case 0:
                                        switch (this._curSearchQuality) {
                                            case 0:
                                                switch (this._curSearchBase) {
                                                    case 0:
                                                        this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime);
                                                        break;
                                                    default:
                                                        (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && (this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime))
                                                }
                                                break;
                                            default:
                                                switch (this._curSearchBase) {
                                                    case 0:
                                                        t.quality == this._curSearchQuality - 1 && (this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime));
                                                        break;
                                                    default:
                                                        t.quality == this._curSearchQuality - 1 && (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && (this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime))
                                                }
                                        }
                                        break;
                                    default:
                                        switch (this._curSearchQuality) {
                                            case 0:
                                                switch (this._curSearchBase) {
                                                    case 0:
                                                        t.type == this._curSearchType - 1 && (this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime));
                                                        break;
                                                    default:
                                                        t.type == this._curSearchType - 1 && (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && (this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime))
                                                }
                                                break;
                                            default:
                                                switch (this._curSearchBase) {
                                                    case 0:
                                                        t.type == this._curSearchType - 1 && t.quality == this._curSearchQuality - 1 && (this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime));
                                                        break;
                                                    default:
                                                        t.type == this._curSearchType - 1 && t.quality == this._curSearchQuality - 1 && (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && (this._hideFlg ? 0 == t.spiritID && this._curItemList.push(t.serverID + "_" + t.catchTime) : this._curItemList.push(t.serverID + "_" + t.catchTime))
                                                }
                                        }
                                }
                            0 != this._curSearchBase && this._curItemList && this._curItemList.length > 0 && this.BubbleSort(),
                                this._equipmentSpaceNum % this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM == 0 ? this._curTotalPageNum = 1 + Math.ceil(this._equipmentSpaceNum / this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM) : this._curTotalPageNum = Math.ceil(this._equipmentSpaceNum / this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM),
                            0 == this._curTotalPageNum && (this._curTotalPageNum = 1),
                            this._curPageNum > this._curTotalPageNum && (this._curPageNum = this._curTotalPageNum),
                                this.rushItems()
                        }
                        ,
                        t.BubbleSort = function() {
                            for (var t = 0; t < this._curItemList.length; t++)
                                for (var i = this._curItemList.length - 1; i > t; i--) {
                                    var e, r, s = this._curItemList[i].split("_"), a = Number(s[0]), n = Number(s[1]), h = this._curItemList[i - 1].split("_"), u = Number(h[0]), o = Number(h[1]);
                                    e = this._itemData.select(a, n),
                                        r = this._itemData.select(u, o);
                                    var l = "";
                                    this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? e.baseValue > r.baseValue && (l = this._curItemList[i],
                                        this._curItemList[i] = this._curItemList[i - 1],
                                        this._curItemList[i - 1] = l) : e.specialValue > r.specialValue && (l = this._curItemList[i],
                                        this._curItemList[i] = this._curItemList[i - 1],
                                        this._curItemList[i - 1] = l)
                                }
                        }
                        ,
                        t.rushItems = function() {
                            var t, i, r, s, n, h;
                            for (var u in this._itemResLib)
                                (t = this._itemResLib[u]).visible = !1;
                            null == this._itemResLib && (this._itemResLib = new Map),
                                this._ui.gotoBookBtn.visible = !1;
                            for (var o = (this._curPageNum - 1) * this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM, l = 0; l < this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM; l++)
                                this._ui.cellBg["cell" + l].visible = !1,
                                    o + l == this._equipmentSpaceNum ? this._ui.cellBg.visible && (this._ui.gotoBookBtn.visible = !0,
                                        this._ui.gotoBookBtn.x = this._itemCoordManager.getX(l),
                                        this._ui.gotoBookBtn.y = this._itemCoordManager.getY(l),
                                        this._ui.cellBg["cell" + l].visible = !0) : o + l < this._equipmentSpaceNum && (this._ui.cellBg["cell" + l].visible = !0),
                                o + l < this._curItemList.length && (h = (n = this._curItemList[o + l]).split("_"),
                                    r = Number(h[0]),
                                    s = Number(h[1]),
                                    t = this._itemResLib[n],
                                    i = this._itemData.select(r, s),
                                    null != t ? (t.update(i),
                                        t.visible = !0) : ((t = new R(i,this._itemContainer.target,e.SPIRIT_EQ_ICON_WIDTH - 16,e.SPIRIT_EQ_ICON_HEIGHT - 16,l)).on(a.TOUCH_END, this.bagItemClcikHandler, this),
                                        this._itemResLib[n] = t),
                                    t.x = this._itemCoordManager.getX(l),
                                    t.y = this._itemCoordManager.getYDown(l));
                            this._ui.cellBg.pageText.text = this._curPageNum + "/" + this._curTotalPageNum,
                                this._ui.cellBg.txtBagSize.text = "仓库容量：" + this._itemData.length + "/" + this._equipmentSpaceNum
                        }
                        ,
                        t.needCompareItem = function(t) {
                            return !1
                        }
                        ,
                        t.isCurSpiritEquip = function(t) {
                            return t.spiritID == this._curSpiritData.id && t.spiritCatchTime == this._curSpiritData.caughtTime
                        }
                        ,
                        t.isEmptyCurEquipByType = function(t) {
                            return null == this.getCurSpiritEquipmentByType(t)
                        }
                        ,
                        t.curItemClcikHandler = function(t, i, e) {
                            var r = this;
                            return void 0 === i && (i = 0),
                            void 0 === e && (e = 0),
                                function(i, e) {
                                    r._curClickItem = t.currentTarget,
                                        r._listBoxUI.state.gotoAndStop(2),
                                    0 == i && (i = -4),
                                    0 == e && (e = -58),
                                        r._listBoxUI.state.x = r._curClickItem.localToGlobalWithMenu(new h(i,e)).x,
                                        r._listBoxUI.state.y = r._curClickItem.localToGlobalWithMenu(new h(i,e)).y,
                                        r.listUIContainer.addChild(r._listBoxUI.target);
                                    var s = t.currentTarget;
                                    i = -30,
                                        e = 12;
                                    r._curItemTooltips.show(s.localToGlobalWithMenu(new h(i,e)).x, s.localToGlobalWithMenu(new h(i,e)).y, s.data)
                                }(i, e)
                        }
                        ,
                        t.curItemOverHandler = function(t) {
                            if (3 != this._tabIdx) {
                                var i = t.currentTarget;
                                this._curItemTooltips.show(i.localToGlobalWithMenu(new h(-30,12)).x, i.localToGlobalWithMenu(new h(-30,12)).y, i.data),
                                    this.curItemClcikHandler(t)
                            }
                        }
                        ,
                        t.curItemOutHandler = function(t) {
                            3 != this._tabIdx && (this._curItemTooltips.hide(),
                                this.listUIContainer.removeChild(this._listBoxUI.target))
                        }
                        ,
                        t.bagItemClcikHandler = function(t) {
                            this._curClickItem = t.currentTarget,
                                0 != this._curClickItem.data.spiritID ? this._listBoxUI.state.gotoAndStop(2) : this._listBoxUI.state.gotoAndStop(1);
                            this._listBoxUI.state.x = this._curClickItem.localToGlobalWithMenu(new h(-18,-48)).x,
                                this._listBoxUI.state.y = this._curClickItem.localToGlobalWithMenu(new h(-18,-48)).y,
                                this.listUIContainer.addChild(this._listBoxUI.target);
                            var i = t.currentTarget;
                            if (this.needCompareItem(i.data)) {
                                this["_curEqIcon" + i.data.type];
                                this._curItemTooltips.show(i.localToGlobalWithMenu(new h(-42,32)).x, i.localToGlobalWithMenu(new h(-42,32)).y, i.data)
                            } else {
                                this._curItemTooltips.show(i.localToGlobalWithMenu(new h(-42,20)).x, i.localToGlobalWithMenu(new h(-42,20)).y, i.data)
                            }
                        }
                        ,
                        t.bagItemOverHandler = function(t) {
                            if (3 != this._tabIdx) {
                                var i = t.currentTarget;
                                if (this.needCompareItem(i.data)) {
                                    this["_curEqIcon" + i.data.type];
                                    this._curItemTooltips.show(i.localToGlobalWithMenu(new h(-42,20)).x, i.localToGlobalWithMenu(new h(-42,20)).y, i.data)
                                } else {
                                    this._curItemTooltips.show(i.localToGlobalWithMenu(new h(-42,20)).x, i.localToGlobalWithMenu(new h(-42,20)).y, i.data)
                                }
                            }
                        }
                        ,
                        t.bagItemOutHandler = function(t) {
                            3 != this._tabIdx && (this._curItemTooltips.hide(),
                                this._compareTooltips.hide(),
                                this.listUIContainer.removeChild(this._listBoxUI.target))
                        }
                        ,
                        t.getItemData = function() {
                            var t = this;
                            null == this._itemResLib && (this._itemResLib = new Map),
                                l.UI.createMiniLoading(),
                                f.send(721028, null, k, (function(i) {
                                        if (0 != i.retInfo.retCode) {
                                            var e = i.retInfo.retMsg.readMultiByte(i.retInfo.retMsg.length, "gb2312");
                                            return l.showMsgBox(e),
                                                void (t._itemData = new g(0,null))
                                        }
                                        1 == i.need ? t.needSafecode = !0 : t.needSafecode = !1,
                                            i.allNum < i.equipmentCount ? t._equipmentSpaceNum = i.equipmentCount : t._equipmentSpaceNum = i.allNum,
                                            0 == i.equipmentCount ? t._itemData = new g(0,null) : (l.SysAPI.getGDataAPI().addDataProxy(new g(i.equipmentCount,i.equipmentInfo)),
                                                t._itemData = l.SysAPI.getGDataAPI().getDataProxy(u.SEQUIP_INFO_DATA),
                                                t._itemData.list.sort((function(t, i) {
                                                        var e = t.selectValue;
                                                        return i.selectValue - e
                                                    }
                                                ))),
                                            l.UI.closeMiniLoading(),
                                            t.showEquipment()
                                    }
                                ))
                        }
                        ,
                        t.checkFixTemper = function() {
                            0 != l.MainRoleData.isVip ? this._ui.attribute1.fixBtn.visible = Q.checkFixTemper(this._curSpiritData.id) : this._ui.attribute1.fixBtn.visible = !1
                        }
                        ,
                        e.openActivityApp = function(t, i, e, r, s) {
                            void 0 === e && (e = null),
                            void 0 === r && (r = !0),
                            void 0 === s && (s = !1);
                            var a = new p;
                            a.winPos = new h(0,0),
                                a.name = "",
                                a.src = "activityApp://" + t + "/" + i,
                                a.isModal = r,
                                a.cache = s,
                                a.params = e,
                                l.openAsWin(a)
                        }
                        ,
                        i(e, [{
                            key: "target",
                            get: function() {
                                return this._ui
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(t) {
                                this._ui.visible = t,
                                    this._listBoxUI.visible = t
                            }
                        }, {
                            key: "spiritData",
                            set: function(t) {
                                this._ui.attribute1.fixBtn.visible = !1,
                                    null != t ? (this._curSpiritData = t,
                                        null == this._newEquipmentResponse ? this._newItemData = null : this._newItemData = this._newEquipmentResponse.equip[this._curSpiritData.index],
                                        this._ui.attribute.hpText.htmlText = this._curSpiritData.baseHP.toString(),
                                        this._ui.attribute.paText.htmlText = this._curSpiritData.PA.toString(),
                                        this._ui.attribute.pdText.htmlText = this._curSpiritData.PD.toString(),
                                        this._ui.attribute.maText.htmlText = this._curSpiritData.MA.toString(),
                                        this._ui.attribute.mdText.htmlText = this._curSpiritData.MD.toString(),
                                        this._ui.attribute.spText.htmlText = this._curSpiritData.SP.toString(),
                                        this._ui.attribute.hitText.htmlText = this._curSpiritData.HIT.toString(),
                                        this._ui.attribute.dodgeText.htmlText = this._curSpiritData.DODGE.toString(),
                                        this._ui.attribute.critText.htmlText = this._curSpiritData.CRIT.toString(),
                                        this._ui.attribute.dcritText.htmlText = this._curSpiritData.DCRIT.toString(),
                                        this._ui.attribute.talentedEnergyText.htmlText = this._curSpiritData.THP.toString(),
                                        this._ui.attribute.talentedSpeedText.htmlText = this._curSpiritData.TSP.toString(),
                                        this._ui.attribute.talentedPhysicalAttackText.htmlText = this._curSpiritData.TPA.toString(),
                                        this._ui.attribute.talentedPhysicalDefenseText.htmlText = this._curSpiritData.TPD.toString(),
                                        this._ui.attribute.talentedMagicAttackText.htmlText = this._curSpiritData.TMA.toString(),
                                        this._ui.attribute.talentedMagicDefenseText.htmlText = this._curSpiritData.TMD.toString(),
                                        this._ui.attribute1.hpText.htmlText = this._curSpiritData.baseHP.toString(),
                                        this._ui.attribute1.paText.htmlText = this._curSpiritData.PA.toString(),
                                        this._ui.attribute1.pdText.htmlText = this._curSpiritData.PD.toString(),
                                        this._ui.attribute1.maText.htmlText = this._curSpiritData.MA.toString(),
                                        this._ui.attribute1.mdText.htmlText = this._curSpiritData.MD.toString(),
                                        this._ui.attribute1.spText.htmlText = this._curSpiritData.SP.toString(),
                                        this._ui.attribute1.hitText.htmlText = this._curSpiritData.HIT.toString(),
                                        this._ui.attribute1.dodgeText.htmlText = this._curSpiritData.DODGE.toString(),
                                        this._ui.attribute1.critText.htmlText = this._curSpiritData.CRIT.toString(),
                                        this._ui.attribute1.dcritText.htmlText = this._curSpiritData.DCRIT.toString(),
                                        this._ui.attribute1.talentedEnergyText.htmlText = this._curSpiritData.THP.toString(),
                                        this._ui.attribute1.talentedSpeedText.htmlText = this._curSpiritData.TSP.toString(),
                                        this._ui.attribute1.talentedPhysicalAttackText.htmlText = this._curSpiritData.TPA.toString(),
                                        this._ui.attribute1.talentedPhysicalDefenseText.htmlText = this._curSpiritData.TPD.toString(),
                                        this._ui.attribute1.talentedMagicAttackText.htmlText = this._curSpiritData.TMA.toString(),
                                        this._ui.attribute1.talentedMagicDefenseText.htmlText = this._curSpiritData.TMD.toString(),
                                        this._ui.attribute1.StriveEnergyText.text = this._curSpiritData.GHP.toString(),
                                        this._ui.attribute1.StrivePhysicalAttackText.text = this._curSpiritData.GPA.toString(),
                                        this._ui.attribute1.StrivePhysicalDefenseText.text = this._curSpiritData.GPD.toString(),
                                        this._ui.attribute1.StriveMagicAttackText.text = this._curSpiritData.GMA.toString(),
                                        this._ui.attribute1.StriveMagicDefenseText.text = this._curSpiritData.GMD.toString(),
                                        this._ui.attribute1.StriveSpeedText.text = this._curSpiritData.GSP.toString(),
                                        this._ui.attribute1.temperText.text = q.translate(E.TEMPER_IS, L.getTemper(this._curSpiritData.temper)) + " " + c.getTemperDesHtmlStr(this._curSpiritData.temper),
                                        this.showSpiritEquitment(),
                                        this.getItemData(),
                                        this.checkFixTemper()) : this.resetCurSpirit()
                            }
                        }, {
                            key: "listUIContainer",
                            get: function() {
                                return l.SysAPI.getUISysAPI().getWindowContainer()
                            }
                        }]),
                        e
                }());
                Y.ALL_SEARCH_TYPE = 3,
                    Y.SPIRIT_SCALE_WIDTH = 1.2,
                    Y.SPIRIT_SCALE_HEIGHT = 1.2,
                    Y.SPIRIT_X = 40,
                    Y.SPIRIT_Y = 60,
                    Y.SPIRIT_EQ_ICON_WIDTH = 96,
                    Y.SPIRIT_EQ_ICON_HEIGHT = 96,
                    Y.imageCache = void 0,
                    Y.FILTER_TYPE = [0, 7, 2, 3, 4, 5, 10, 9, 8, 11];
                var V = function(t) {
                    function r() {
                        for (var i, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._btnChooseHide = void 0,
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "btnChooseHide",
                            get: function() {
                                return this._btnChooseHide || (this._btnChooseHide = new D(this.getChildByName("btnChooseHide"))),
                                    this._btnChooseHide
                            }
                        }]),
                        r
                }(D)
                    , z = function(t) {
                    function r() {
                        for (var i, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._selectBtn0 = void 0,
                            i._selectBtn1 = void 0,
                            i._selectBtn2 = void 0,
                            i._selectBtn3 = void 0,
                            i._selectBtn4 = void 0,
                            i._btnShowEquipBag = void 0,
                            i._chooseBtn = void 0,
                            i._btnDownCurEquip = void 0,
                            i._btnDownAllEquip = void 0,
                            i._btnDownEquip = void 0,
                            i._paText = void 0,
                            i._pageText = void 0,
                            i._txtBagSize = void 0,
                            i._prevPageButton = void 0,
                            i._nextPageButton = void 0,
                            i._cell0 = void 0,
                            i._cell1 = void 0,
                            i._cell2 = void 0,
                            i._cell3 = void 0,
                            i._cell4 = void 0,
                            i._cell5 = void 0,
                            i._cell6 = void 0,
                            i._cell7 = void 0,
                            i._cell8 = void 0,
                            i._cell9 = void 0,
                            i._cell10 = void 0,
                            i._cell11 = void 0,
                            i._cell12 = void 0,
                            i._cell13 = void 0,
                            i._cell14 = void 0,
                            i._cell15 = void 0,
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "selectBtn0",
                            get: function() {
                                return this._selectBtn0 || (this._selectBtn0 = new D(this.getChildByName("selectBtn0"))),
                                    this._selectBtn0
                            }
                        }, {
                            key: "selectBtn1",
                            get: function() {
                                return this._selectBtn1 || (this._selectBtn1 = new D(this.getChildByName("selectBtn1"))),
                                    this._selectBtn1
                            }
                        }, {
                            key: "selectBtn2",
                            get: function() {
                                return this._selectBtn2 || (this._selectBtn2 = new D(this.getChildByName("selectBtn2"))),
                                    this._selectBtn2
                            }
                        }, {
                            key: "selectBtn3",
                            get: function() {
                                return this._selectBtn3 || (this._selectBtn3 = new D(this.getChildByName("selectBtn3"))),
                                    this._selectBtn3
                            }
                        }, {
                            key: "selectBtn4",
                            get: function() {
                                return this._selectBtn4 || (this._selectBtn4 = this.getChildByName("selectBtn4")),
                                    this._selectBtn4
                            }
                        }, {
                            key: "btnShowEquipBag",
                            get: function() {
                                return this._btnShowEquipBag || (this._btnShowEquipBag = new D(this.getChildByName("btnShowEquipBag"))),
                                    this._btnShowEquipBag
                            }
                        }, {
                            key: "chooseBtn",
                            get: function() {
                                return this._chooseBtn || (this._chooseBtn = new V(this.getChildByName("chooseBtn"))),
                                    this._chooseBtn
                            }
                        }, {
                            key: "btnDownCurEquip",
                            get: function() {
                                return this._btnDownCurEquip || (this._btnDownCurEquip = new D(this.getChildByName("btnDownCurEquip"))),
                                    this._btnDownCurEquip
                            }
                        }, {
                            key: "btnDownAllEquip",
                            get: function() {
                                return this._btnDownAllEquip || (this._btnDownAllEquip = new D(this.getChildByName("btnDownAllEquip"))),
                                    this._btnDownAllEquip
                            }
                        }, {
                            key: "btnDownEquip",
                            get: function() {
                                return this._btnDownEquip || (this._btnDownEquip = new D(this.getChildByName("btnDownEquip"))),
                                    this._btnDownEquip
                            }
                        }, {
                            key: "paText",
                            get: function() {
                                return this._paText || (this._paText = new D(this.getChildByName("paText"))),
                                    this._paText
                            }
                        }, {
                            key: "pageText",
                            get: function() {
                                return this._pageText || (this._pageText = new D(this.getChildByName("pageText"))),
                                    this._pageText
                            }
                        }, {
                            key: "txtBagSize",
                            get: function() {
                                return this._txtBagSize || (this._txtBagSize = new D(this.getChildByName("txtBagSize"))),
                                    this._txtBagSize
                            }
                        }, {
                            key: "prevPageButton",
                            get: function() {
                                return this._prevPageButton || (this._prevPageButton = new D(this.getChildByName("prevPageButton"))),
                                    this._prevPageButton
                            }
                        }, {
                            key: "nextPageButton",
                            get: function() {
                                return this._nextPageButton || (this._nextPageButton = new D(this.getChildByName("nextPageButton"))),
                                    this._nextPageButton
                            }
                        }, {
                            key: "cell0",
                            get: function() {
                                return this._cell0 || (this._cell0 = new D(this.getChildByName("cell0"))),
                                    this._cell0
                            }
                        }, {
                            key: "cell1",
                            get: function() {
                                return this._cell1 || (this._cell1 = new D(this.getChildByName("cell1"))),
                                    this._cell1
                            }
                        }, {
                            key: "cell2",
                            get: function() {
                                return this._cell2 || (this._cell2 = new D(this.getChildByName("cell2"))),
                                    this._cell2
                            }
                        }, {
                            key: "cell3",
                            get: function() {
                                return this._cell3 || (this._cell3 = new D(this.getChildByName("cell3"))),
                                    this._cell3
                            }
                        }, {
                            key: "cell4",
                            get: function() {
                                return this._cell4 || (this._cell4 = new D(this.getChildByName("cell4"))),
                                    this._cell4
                            }
                        }, {
                            key: "cell5",
                            get: function() {
                                return this._cell5 || (this._cell5 = new D(this.getChildByName("cell5"))),
                                    this._cell5
                            }
                        }, {
                            key: "cell6",
                            get: function() {
                                return this._cell6 || (this._cell6 = new D(this.getChildByName("cell6"))),
                                    this._cell6
                            }
                        }, {
                            key: "cell7",
                            get: function() {
                                return this._cell7 || (this._cell7 = new D(this.getChildByName("cell7"))),
                                    this._cell7
                            }
                        }, {
                            key: "cell8",
                            get: function() {
                                return this._cell8 || (this._cell8 = new D(this.getChildByName("cell8"))),
                                    this._cell8
                            }
                        }, {
                            key: "cell9",
                            get: function() {
                                return this._cell9 || (this._cell9 = new D(this.getChildByName("cell9"))),
                                    this._cell9
                            }
                        }, {
                            key: "cell10",
                            get: function() {
                                return this._cell10 || (this._cell10 = new D(this.getChildByName("cell10"))),
                                    this._cell10
                            }
                        }, {
                            key: "cell11",
                            get: function() {
                                return this._cell11 || (this._cell11 = new D(this.getChildByName("cell11"))),
                                    this._cell11
                            }
                        }, {
                            key: "cell12",
                            get: function() {
                                return this._cell12 || (this._cell12 = new D(this.getChildByName("cell12"))),
                                    this._cell12
                            }
                        }, {
                            key: "cell13",
                            get: function() {
                                return this._cell13 || (this._cell13 = new D(this.getChildByName("cell13"))),
                                    this._cell13
                            }
                        }, {
                            key: "cell14",
                            get: function() {
                                return this._cell14 || (this._cell14 = new D(this.getChildByName("cell14"))),
                                    this._cell14
                            }
                        }, {
                            key: "cell15",
                            get: function() {
                                return this._cell15 || (this._cell15 = new D(this.getChildByName("cell15"))),
                                    this._cell15
                            }
                        }]),
                        r
                }(D)
                    , j = function(t) {
                    function r() {
                        for (var i, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._equipType = void 0,
                            i._iconContainer = void 0,
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "equipType",
                            get: function() {
                                return this._equipType || (this._equipType = new D(this.getChildByName("equipType"))),
                                    this._equipType
                            }
                        }, {
                            key: "iconContainer",
                            get: function() {
                                return this._iconContainer || (this._iconContainer = new D(this.getChildByName("iconContainer"))),
                                    this._iconContainer
                            }
                        }]),
                        r
                }(D)
                    , X = function(t) {
                    function r() {
                        for (var i, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._fixBtn = void 0,
                            i._hpText = void 0,
                            i._paText = void 0,
                            i._pdText = void 0,
                            i._maText = void 0,
                            i._mdText = void 0,
                            i._spText = void 0,
                            i._hitText = void 0,
                            i._dodgeText = void 0,
                            i._critText = void 0,
                            i._dcritText = void 0,
                            i._talentedEnergyText = void 0,
                            i._talentedSpeedText = void 0,
                            i._talentedPhysicalAttackText = void 0,
                            i._talentedPhysicalDefenseText = void 0,
                            i._talentedMagicAttackText = void 0,
                            i._talentedMagicDefenseText = void 0,
                            i._StriveEnergyText = void 0,
                            i._StriveSpeedText = void 0,
                            i._StrivePhysicalAttackText = void 0,
                            i._StrivePhysicalDefenseText = void 0,
                            i._StriveMagicAttackText = void 0,
                            i._StriveMagicDefenseText = void 0,
                            i._temperText = void 0,
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "fixBtn",
                            get: function() {
                                return this._fixBtn || (this._fixBtn = new D(this.getChildByName("fixBtn"))),
                                    this._fixBtn
                            }
                        }, {
                            key: "hpText",
                            get: function() {
                                return this._hpText || (this._hpText = new D(this.getChildByName("hpText"))),
                                    this._hpText
                            }
                        }, {
                            key: "paText",
                            get: function() {
                                return this._paText || (this._paText = new D(this.getChildByName("paText"))),
                                    this._paText
                            }
                        }, {
                            key: "pdText",
                            get: function() {
                                return this._pdText || (this._pdText = new D(this.getChildByName("pdText"))),
                                    this._pdText
                            }
                        }, {
                            key: "maText",
                            get: function() {
                                return this._maText || (this._maText = new D(this.getChildByName("maText"))),
                                    this._maText
                            }
                        }, {
                            key: "mdText",
                            get: function() {
                                return this._mdText || (this._mdText = new D(this.getChildByName("mdText"))),
                                    this._mdText
                            }
                        }, {
                            key: "spText",
                            get: function() {
                                return this._spText || (this._spText = new D(this.getChildByName("spText"))),
                                    this._spText
                            }
                        }, {
                            key: "hitText",
                            get: function() {
                                return this._hitText || (this._hitText = new D(this.getChildByName("hitText"))),
                                    this._hitText
                            }
                        }, {
                            key: "dodgeText",
                            get: function() {
                                return this._dodgeText || (this._dodgeText = new D(this.getChildByName("dodgeText"))),
                                    this._dodgeText
                            }
                        }, {
                            key: "critText",
                            get: function() {
                                return this._critText || (this._critText = new D(this.getChildByName("critText"))),
                                    this._critText
                            }
                        }, {
                            key: "dcritText",
                            get: function() {
                                return this._dcritText || (this._dcritText = new D(this.getChildByName("dcritText"))),
                                    this._dcritText
                            }
                        }, {
                            key: "talentedEnergyText",
                            get: function() {
                                return this._talentedEnergyText || (this._talentedEnergyText = new D(this.getChildByName("talentedEnergyText"))),
                                    this._talentedEnergyText
                            }
                        }, {
                            key: "talentedSpeedText",
                            get: function() {
                                return this._talentedSpeedText || (this._talentedSpeedText = new D(this.getChildByName("talentedSpeedText"))),
                                    this._talentedSpeedText
                            }
                        }, {
                            key: "talentedPhysicalAttackText",
                            get: function() {
                                return this._talentedPhysicalAttackText || (this._talentedPhysicalAttackText = new D(this.getChildByName("talentedPhysicalAttackText"))),
                                    this._talentedPhysicalAttackText
                            }
                        }, {
                            key: "talentedPhysicalDefenseText",
                            get: function() {
                                return this._talentedPhysicalDefenseText || (this._talentedPhysicalDefenseText = new D(this.getChildByName("talentedPhysicalDefenseText"))),
                                    this._talentedPhysicalDefenseText
                            }
                        }, {
                            key: "talentedMagicAttackText",
                            get: function() {
                                return this._talentedMagicAttackText || (this._talentedMagicAttackText = new D(this.getChildByName("talentedMagicAttackText"))),
                                    this._talentedMagicAttackText
                            }
                        }, {
                            key: "talentedMagicDefenseText",
                            get: function() {
                                return this._talentedMagicDefenseText || (this._talentedMagicDefenseText = new D(this.getChildByName("talentedMagicDefenseText"))),
                                    this._talentedMagicDefenseText
                            }
                        }, {
                            key: "StriveEnergyText",
                            get: function() {
                                return this._StriveEnergyText || (this._StriveEnergyText = new D(this.getChildByName("StriveEnergyText"))),
                                    this._StriveEnergyText
                            }
                        }, {
                            key: "StriveSpeedText",
                            get: function() {
                                return this._StriveSpeedText || (this._StriveSpeedText = new D(this.getChildByName("StriveSpeedText"))),
                                    this._StriveSpeedText
                            }
                        }, {
                            key: "StrivePhysicalAttackText",
                            get: function() {
                                return this._StrivePhysicalAttackText || (this._StrivePhysicalAttackText = new D(this.getChildByName("StrivePhysicalAttackText"))),
                                    this._StrivePhysicalAttackText
                            }
                        }, {
                            key: "StrivePhysicalDefenseText",
                            get: function() {
                                return this._StrivePhysicalDefenseText || (this._StrivePhysicalDefenseText = new D(this.getChildByName("StrivePhysicalDefenseText"))),
                                    this._StrivePhysicalDefenseText
                            }
                        }, {
                            key: "StriveMagicAttackText",
                            get: function() {
                                return this._StriveMagicAttackText || (this._StriveMagicAttackText = new D(this.getChildByName("StriveMagicAttackText"))),
                                    this._StriveMagicAttackText
                            }
                        }, {
                            key: "StriveMagicDefenseText",
                            get: function() {
                                return this._StriveMagicDefenseText || (this._StriveMagicDefenseText = new D(this.getChildByName("StriveMagicDefenseText"))),
                                    this._StriveMagicDefenseText
                            }
                        }, {
                            key: "temperText",
                            get: function() {
                                return this._temperText || (this._temperText = new D(this.getChildByName("temperText"))),
                                    this._temperText
                            }
                        }]),
                        r
                }(D)
                    , J = function(t) {
                    function r() {
                        for (var i, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._attribute = void 0,
                            i._attribute1 = void 0,
                            i._cellBg = void 0,
                            i._allBtn = void 0,
                            i._weaponBtn = void 0,
                            i._armorBtn = void 0,
                            i._jewelryBtn = void 0,
                            i._prevPageButton = void 0,
                            i._nextPageButton = void 0,
                            i._gotoBookBtn = void 0,
                            i._equip0 = void 0,
                            i._equip1 = void 0,
                            i._equip2 = void 0,
                            i._equip3 = void 0,
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "attribute",
                            get: function() {
                                return this._attribute || (this._attribute = new X(this.getChildByName("attribute"))),
                                    this._attribute
                            }
                        }, {
                            key: "attribute1",
                            get: function() {
                                return this._attribute1 || (this._attribute1 = new X(this.getChildByName("attribute1"))),
                                    this._attribute1
                            }
                        }, {
                            key: "cellBg",
                            get: function() {
                                return this._cellBg || (this._cellBg = new z(this.getChildByName("cellBg"))),
                                    this._cellBg
                            }
                        }, {
                            key: "allBtn",
                            get: function() {
                                return this._allBtn || (this._allBtn = new D(this.getChildByName("allBtn"))),
                                    this._allBtn
                            }
                        }, {
                            key: "weaponBtn",
                            get: function() {
                                return this._weaponBtn || (this._weaponBtn = new D(this.getChildByName("weaponBtn"))),
                                    this._weaponBtn
                            }
                        }, {
                            key: "armorBtn",
                            get: function() {
                                return this._armorBtn || (this._armorBtn = new D(this.getChildByName("armorBtn"))),
                                    this._armorBtn
                            }
                        }, {
                            key: "jewelryBtn",
                            get: function() {
                                return this._jewelryBtn || (this._jewelryBtn = new D(this.getChildByName("jewelryBtn"))),
                                    this._jewelryBtn
                            }
                        }, {
                            key: "prevPageButton",
                            get: function() {
                                return this._prevPageButton || (this._prevPageButton = new D(this.getChildByName("prevPageButton"))),
                                    this._prevPageButton
                            }
                        }, {
                            key: "nextPageButton",
                            get: function() {
                                return this._nextPageButton || (this._nextPageButton = new D(this.getChildByName("nextPageButton"))),
                                    this._nextPageButton
                            }
                        }, {
                            key: "gotoBookBtn",
                            get: function() {
                                return this._gotoBookBtn || (this._gotoBookBtn = new D(this.getChildByName("gotoBookBtn"))),
                                    this._gotoBookBtn
                            }
                        }, {
                            key: "equip0",
                            get: function() {
                                return this._equip0 || (this._equip0 = new j(this.getChildByName("equip0"))),
                                    this._equip0
                            }
                        }, {
                            key: "equip1",
                            get: function() {
                                return this._equip1 || (this._equip1 = new j(this.getChildByName("equip1"))),
                                    this._equip1
                            }
                        }, {
                            key: "equip2",
                            get: function() {
                                return this._equip2 || (this._equip2 = new j(this.getChildByName("equip2"))),
                                    this._equip2
                            }
                        }, {
                            key: "equip3",
                            get: function() {
                                return this._equip3 || (this._equip3 = new j(this.getChildByName("equip3"))),
                                    this._equip3
                            }
                        }]),
                        r
                }(D)
                    , K = function(t) {
                    function r() {
                        for (var i, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._equipBtn = void 0,
                            i._sellBtn = void 0,
                            i._puttobagBtn = void 0,
                            i._getOffBtn = void 0,
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "equipBtn",
                            get: function() {
                                return this._equipBtn || (this._equipBtn = new D(this.getChildByName("equipBtn"))),
                                    this._equipBtn
                            }
                        }, {
                            key: "sellBtn",
                            get: function() {
                                return this._sellBtn || (this._sellBtn = new D(this.getChildByName("sellBtn"))),
                                    this._sellBtn
                            }
                        }, {
                            key: "puttobagBtn",
                            get: function() {
                                return this._puttobagBtn || (this._puttobagBtn = new D(this.getChildByName("puttobagBtn"))),
                                    this._puttobagBtn
                            }
                        }, {
                            key: "getOffBtn",
                            get: function() {
                                return this._getOffBtn || (this._getOffBtn = this.getChildByName("getOffBtn")),
                                    this._getOffBtn
                            }
                        }]),
                        r
                }(D)
                    , Z = function(t) {
                    function r() {
                        var i;
                        return (i = t.call(this) || this)._state = void 0,
                            i._bg = void 0,
                            i._target = F.Instance.getPrefabByName("SpiritBag_1600/SpiritEquipList_1600"),
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "state",
                            get: function() {
                                return this._state || (this._state = new K(this.getChildByName("state"))),
                                    this._state
                            }
                        }, {
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = this.getChildByName("bg")),
                                    this._bg
                            }
                        }]),
                        r
                }(D);
                r._RF.pop()
            }
        }
    }
));
