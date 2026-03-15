System.register("chunks:///_virtual/EquipBagUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./global.ts", "./DefaultImgCache.ts", "./AgentNode.ts", "./NodeExtend.ts", "./CFunction.ts", "./CGIEvent.ts", "./CGILoader.ts", "./ResManager.ts", "./NetResult.ts", "./BagEquipmentIcon.ts", "./EquipIconTipsWithSpiritBag.ts", "./SpiritBagUISafeCodeShow.ts", "./Math_ListCoord.ts", "./SpiritBagRefProxy.ts", "./SpiritEquipBagInfoProxy.ts"], (function(t) {
        var e, i, s, a, h, r, n, c, u, l, _, o, B, m, g, d, I, p, S, f, C, y, v, T, b;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        h = t.Label,
                        r = t.NodeEventType,
                        n = t.Vec2,
                        c = t.isValid
                }
                , function(t) {
                    u = t.DEFINE
                }
                , function(t) {
                    l = t.__global
                }
                , function(t) {
                    _ = t.DefaultImgCache
                }
                , function(t) {
                    o = t.AgentNode,
                        B = t.AgentNodeComponent
                }
                , function(t) {
                    m = t.NodeExtend
                }
                , function(t) {
                    g = t.CFunction
                }
                , function(t) {
                    d = t.CGIEvent
                }
                , function(t) {
                    I = t.CGILoader
                }
                , function(t) {
                    p = t.default
                }
                , function(t) {
                    S = t.NetResult
                }
                , function(t) {
                    f = t.BagEquipmentIcon
                }
                , function(t) {
                    C = t.EquipIconTipsWithSpiritBag
                }
                , function(t) {
                    y = t.SpiritBagUISafeCodeShow
                }
                , function(t) {
                    v = t.Math_ListCoord
                }
                , function(t) {
                    T = t.SpiritBagRefProxy
                }
                , function(t) {
                    b = t.SpiritEquipBagInfoProxy
                }
            ],
            execute: function() {
                a._RF.push({}, "6b76cVySsVKLqJkHaPOGbGE", "EquipBagUILogic", void 0);
                var N = t("EquipBagUILogic", function() {
                    var t = i.prototype;
                    function i(t, e) {
                        this._ui = void 0,
                            this._itemResLib = void 0,
                            this._itemData = void 0,
                            this._curItemTooltips = void 0,
                            this._listBoxUI = void 0,
                            this._curClickItem = void 0,
                            this._itemCoordManager = void 0,
                            this._itemContainer = void 0,
                            this._curItemList = void 0,
                            this._curSpiritEquipData = void 0,
                            this._curPageNum = void 0,
                            this._curTotalPageNum = void 0,
                            this._curSearchType = 0,
                            this._curSearchQuality = 0,
                            this._curSearchBase = 0,
                            this._combox = void 0,
                            this._comboxQuality = void 0,
                            this._comboxBase = void 0,
                            this._loader = void 0,
                            this._canGet = !0,
                            this._uiSafeCodeShow = void 0,
                            this._needSafecode = !0,
                            this._parent = void 0,
                            this._name = ["全部", "精力", "物攻", "物防", "魔攻", "魔防", "暴击", "闪避", "命中", "抗暴"],
                            this._count1 = 0,
                            this._count2 = 0,
                            this._parent = e,
                        null == i.imageCache && (i.imageCache = new _),
                            this._ui = new E(t),
                            this._ui.y = 0,
                            this._itemContainer = new o(new m),
                            this._ui.addChild(this._itemContainer.target),
                            this._ui.selectBtn0.on(r.TOUCH_END, this.onClickSelect, this),
                            this._ui.selectBtn1.on(r.TOUCH_END, this.onClickSelect, this),
                            this._ui.selectBtn2.on(r.TOUCH_END, this.onClickSelect, this),
                            this._ui.selectBtn3.on(r.TOUCH_END, this.onClickSelect, this),
                            this._ui.selectBtn4.on(r.TOUCH_END, this.onClickSelect, this),
                            this._uiSafeCodeShow = new y(this,!1),
                            this._ui.parent.addChild(this._uiSafeCodeShow),
                            this._uiSafeCodeShow.visible = !1,
                            this._itemCoordManager = new v(300,147,i.SPIRIT_EQ_ICON_WIDTH,i.SPIRIT_EQ_ICON_HEIGHT,4,4,10,12),
                            this._curItemTooltips = new C,
                            this._curItemTooltips.hide(),
                            this._listBoxUI = new x,
                            this._listBoxUI.state.gotoAndStop(1),
                            this._listBoxUI.bg.on(r.TOUCH_END, this.listBoxClickHandler, this),
                            this._listBoxUI.state.sellBtn.on(r.TOUCH_END, this.listBoxClickHandler, this),
                            this._listBoxUI.state.putOutBtn.on(r.TOUCH_END, this.listBoxClickHandler, this),
                            this._ui.btnBack.on(r.TOUCH_END, this.btnClickHandler, this),
                            this._ui.cellBg.prevPageButton.on(r.TOUCH_END, this.btnClickHandler, this),
                            this._ui.cellBg.nextPageButton.on(r.TOUCH_END, this.btnClickHandler, this),
                            this._curPageNum = 1,
                            this._ui.cellBg.pageText.text = "1/1",
                            this._ui.cellBg.txtBagSize.text = "仓库容量：0/80",
                            this._loader = new I(u.CGI_ROOT + "equip_cloud_storage",l.SysAPI.getNetSysAPI().createURLLoader(!0)),
                            this._loader.addEventListener(d.COMPLETE, this.onDataReceive, this),
                            this._loader.addEventListener(d.GOT_ERROR, this.onNetError, this)
                    }
                    return t.eyeShow = function(t) {}
                        ,
                        t.showTab = function(t) {
                            3 != t && (this.visible = !1)
                        }
                        ,
                        t.onSelect = function(t) {
                            for (var e = 0; e <= 3; e++) {
                                var i = this._ui["selectBtn" + e];
                                i && i.gotoAndStop(e == t ? 2 : 1)
                            }
                        }
                        ,
                        t.onClickSelect = function(t) {
                            switch (t.target) {
                                case this._ui.selectBtn0.target:
                                    this.searchItemsByType(0);
                                    break;
                                case this._ui.selectBtn1.target:
                                    this.searchItemsByType(1);
                                    break;
                                case this._ui.selectBtn2.target:
                                    this.searchItemsByType(2);
                                    break;
                                case this._ui.selectBtn3.target:
                                    this.searchItemsByType(3);
                                    break;
                                case this._ui.selectBtn4:
                                    T.spiritBagPanel.showEquipFilter(this._curSearchType, this.filterCallBack.bind(this));
                                    break;
                                default:
                                    this.searchItemsByType(0)
                            }
                        }
                        ,
                        t.filterCallBack = function(t) {
                            for (var e = 0, s = 0; s < i.FILTER_TYPE.length; s++)
                                if (t == i.FILTER_TYPE[s]) {
                                    e = s;
                                    break
                                }
                            this._ui.selectBtn4.getChildByName("tfName").getComponent(h).string = this._name[e],
                                this.searchItemsByBase(t)
                        }
                        ,
                        t.onDataReceive = function(t) {
                            var e = t.data
                                , i = new S(e);
                            if (-4 == i.value && "?cmd=3" == t.sendType && (this._needSafecode = !0,
                                this._uiSafeCodeShow.visible = !0,
                                this._uiSafeCodeShow.init()),
                            i.value >= 0)
                                switch (t.sendType) {
                                    case "?cmd=0":
                                        1 == Number(e.need) ? this._needSafecode = !0 : this._needSafecode = !1,
                                        null != e.equip && null != e.equip || (e.equip = []),
                                        Array.isArray(e.equip) || (e.equip = [e.equip]),
                                            this._itemData = new b(e.equip.length,e),
                                            this._ui.cellBg.txtBagSize.text = "仓库容量：" + e.cur + "/" + e.limit,
                                            this._itemData.list.sort((function(t, e) {
                                                    var i = t.selectValue;
                                                    return e.selectValue - i
                                                }
                                            )),
                                            this.showEquipment();
                                        break;
                                    case "?cmd=1":
                                        null != e.equip && null != e.equip || (e.equip = []),
                                        Array.isArray(e.equip) || (e.equip = [e.equip]),
                                            this._itemData = new b(e.equip.length,e),
                                            this._ui.cellBg.txtBagSize.text = "仓库容量：" + e.cur + "/" + e.limit,
                                            this._itemData.list.sort((function(t, e) {
                                                    var i = t.selectValue;
                                                    return e.selectValue - i
                                                }
                                            )),
                                            this.showEquipment();
                                        break;
                                    case "?cmd=2":
                                        null != e.equip && null != e.equip || (e.equip = []),
                                        Array.isArray(e.equip) || (e.equip = [e.equip]),
                                            this._itemData = new b(e.equip.length,e),
                                            this._itemData.list.sort((function(t, e) {
                                                    var i = t.selectValue;
                                                    return e.selectValue - i
                                                }
                                            )),
                                            this._ui.cellBg.txtBagSize.text = "仓库容量：" + e.cur + "/" + e.limit,
                                            this.showEquipment();
                                        break;
                                    case "?cmd=3":
                                        null != e.equip && null != e.equip || (e.equip = []),
                                        Array.isArray(e.equip) || (e.equip = [e.equip]),
                                            this._needSafecode = !1,
                                            this._itemData = new b(e.equip.length,e),
                                            this._ui.cellBg.txtBagSize.text = "仓库容量：" + e.cur + "/" + e.limit,
                                            this._itemData.list.sort((function(t, e) {
                                                    var i = t.selectValue;
                                                    return e.selectValue - i
                                                }
                                            )),
                                            this.showEquipment()
                                }
                            else
                                this._canGet = !0,
                                    l.UI.alert("", i.msg)
                        }
                        ,
                        t.onNetError = function(t) {
                            l.UI.alert("", t.msg)
                        }
                        ,
                        t.showEquipItemList = function() {
                            this._listBoxUI.visible = !0,
                            this._itemContainer && (this._itemContainer.visible = !0)
                        }
                        ,
                        t.hideEquipItemList = function(t) {
                            this._listBoxUI.visible = !1,
                            this._itemContainer && (this._itemContainer.visible = !1)
                        }
                        ,
                        t.reset = function() {
                            this._uiSafeCodeShow.visible = !1,
                                this.getItemData()
                        }
                        ,
                        t.dispose = function() {
                            this.cleanResData(),
                                this._ui.off(r.TOUCH_END, this.btnClickHandler, this)
                        }
                        ,
                        t.sellHandlerFromEquiped = function(t) {
                            1 == t && (this._curClickItem.data.quality > 2 ? l.showMsgBox("该装备是稀有以上品质装备，是否要出售？", 2, new g(this.sellHandlerFromHQ,this)) : this.sellEquipment())
                        }
                        ,
                        t.sellHandlerFromHQ = function(t) {
                            1 == t && this.sellEquipment()
                        }
                        ,
                        t.sureEquipSelt = function() {
                            this._canGet = !1,
                                this._loader.sendData("?cmd=3", {
                                    id: this._curClickItem.data.serverID,
                                    serialnum: this._curClickItem.data.catchTime
                                })
                        }
                        ,
                        t.sellEquipment = function() {
                            this._needSafecode ? (this._needSafecode = !0,
                                this._uiSafeCodeShow.visible = !0,
                                this._uiSafeCodeShow.init()) : (this._canGet = !1,
                                this._loader.sendData("?cmd=3", {
                                    id: this._curClickItem.data.serverID,
                                    serialnum: this._curClickItem.data.catchTime
                                }))
                        }
                        ,
                        t.listBoxClickHandler = function(t) {
                            switch (this.listUIContainer.removeChild(this._listBoxUI.target),
                                this._curItemTooltips.hide(),
                                t.target.name) {
                                case "sellBtn":
                                    0 != this._curClickItem.data.spiritID ? (this._count1++,
                                        l.showMsgBox("该装备已经被宠物装备在身上，是否要出售？==" + this._count1, 2, new g(this.sellHandlerFromEquiped,this))) : this._curClickItem.data.quality > 2 ? (this._count2++,
                                        l.showMsgBox("该装备是稀有以上品质装备，是否要出售？==" + this._count2, 2, new g(this.sellHandlerFromHQ,this))) : this.sellEquipment();
                                    break;
                                case "putOutBtn":
                                    this._canGet = !1,
                                        this._loader.sendData("?cmd=2", {
                                            id: this._curClickItem.data.serverID,
                                            serialnum: this._curClickItem.data.catchTime
                                        })
                            }
                        }
                        ,
                        t.btnClickHandler = function(t) {
                            switch (t.target) {
                                case this._ui.btnBack:
                                    this._parent.bagvisible = !1;
                                    break;
                                case this._ui.allBtn:
                                    this._curSearchType = 0,
                                        this._curPageNum = 1,
                                        this.searchItems();
                                case this._ui.weaponBtn:
                                    this._curSearchType = 1,
                                        this._curPageNum = 1,
                                        this.searchItems();
                                    break;
                                case this._ui.armorBtn:
                                    this._curSearchType = 2,
                                        this._curPageNum = 1,
                                        this.searchItems();
                                    break;
                                case this._ui.jewelryBtn:
                                    this._curSearchType = 3,
                                        this._curPageNum = 1,
                                        this.searchItems();
                                    break;
                                case this._ui.cellBg.prevPageButton:
                                    this._curPageNum > 1 && (this._curPageNum--,
                                        this.rushItems());
                                    break;
                                case this._ui.cellBg.nextPageButton:
                                    this._curPageNum < this._curTotalPageNum && (this._curPageNum++,
                                        this.rushItems())
                            }
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
                                for (var e in this._itemResLib)
                                    (t = this._itemResLib[e]).dispose(),
                                        t.off(r.TOUCH_END, this.bagItemClcikHandler),
                                        t.off(r.MOUSE_ENTER, this.bagItemOverHandler),
                                        t.off(r.MOUSE_LEAVE, this.bagItemOutHandler),
                                        this._itemContainer.removeChild(t);
                            this._itemResLib = null,
                                this._itemData = null,
                                this._curClickItem = null
                        }
                        ,
                        t.showEquipment = function() {
                            this.searchItems()
                        }
                        ,
                        t.searchItems = function() {
                            if (this._itemData) {
                                var t;
                                this._curItemList = [];
                                for (var e = 0; e < this._itemData.length; e++)
                                    switch (t = this._itemData.list[e],
                                        this._curSearchType) {
                                        case 0:
                                            switch (this._curSearchQuality) {
                                                case 0:
                                                    switch (this._curSearchBase) {
                                                        case 0:
                                                            this._curItemList.push(t.serverID + "_" + t.catchTime);
                                                            break;
                                                        default:
                                                            (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && this._curItemList.push(t.serverID + "_" + t.catchTime)
                                                    }
                                                    break;
                                                default:
                                                    switch (this._curSearchBase) {
                                                        case 0:
                                                            t.quality == this._curSearchQuality - 1 && this._curItemList.push(t.serverID + "_" + t.catchTime);
                                                            break;
                                                        default:
                                                            t.quality == this._curSearchQuality - 1 && (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && this._curItemList.push(t.serverID + "_" + t.catchTime)
                                                    }
                                            }
                                            break;
                                        default:
                                            switch (this._curSearchQuality) {
                                                case 0:
                                                    switch (this._curSearchBase) {
                                                        case 0:
                                                            t.type == this._curSearchType - 1 && this._curItemList.push(t.serverID + "_" + t.catchTime);
                                                            break;
                                                        default:
                                                            t.type == this._curSearchType - 1 && (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && this._curItemList.push(t.serverID + "_" + t.catchTime)
                                                    }
                                                    break;
                                                default:
                                                    switch (this._curSearchBase) {
                                                        case 0:
                                                            t.type == this._curSearchType - 1 && t.quality == this._curSearchQuality - 1 && this._curItemList.push(t.serverID + "_" + t.catchTime);
                                                            break;
                                                        default:
                                                            t.type == this._curSearchType - 1 && t.quality == this._curSearchQuality - 1 && (this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? t.baseAttr == this._curSearchBase - 1 : t.specialAttr == this._curSearchBase - 1) && this._curItemList.push(t.serverID + "_" + t.catchTime)
                                                    }
                                            }
                                    }
                                0 != this._curSearchBase && this._curItemList && this._curItemList.length > 0 && this.BubbleSort(),
                                    this._curTotalPageNum = Math.ceil(this._curItemList.length / this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM),
                                0 == this._curTotalPageNum && (this._curTotalPageNum = 1),
                                this._curPageNum > this._curTotalPageNum && (this._curPageNum = this._curTotalPageNum),
                                    this.rushItems()
                            }
                        }
                        ,
                        t.BubbleSort = function() {
                            for (var t = 0; t < this._curItemList.length; t++)
                                for (var e = this._curItemList.length - 1; e > t; e--) {
                                    var i, s, a = this._curItemList[e].split("_"), h = Number(a[0]), r = Number(a[1]), n = this._curItemList[e - 1].split("_"), c = Number(n[0]), u = Number(n[1]);
                                    i = this._itemData.select(h, r),
                                        s = this._itemData.select(c, u);
                                    var l = "";
                                    this._curSearchBase - 1 == 6 || this._curSearchBase - 1 == 1 || this._curSearchBase - 1 == 2 || this._curSearchBase - 1 == 3 || this._curSearchBase - 1 == 4 ? i.baseValue > s.baseValue && (l = this._curItemList[e],
                                        this._curItemList[e] = this._curItemList[e - 1],
                                        this._curItemList[e - 1] = l) : i.specialValue > s.specialValue && (l = this._curItemList[e],
                                        this._curItemList[e] = this._curItemList[e - 1],
                                        this._curItemList[e - 1] = l)
                                }
                        }
                        ,
                        t.rushItems = function() {
                            var t, e, s, a, h, n;
                            for (var c in this._itemResLib)
                                (t = this._itemResLib[c]).visible = !1;
                            null == this._itemResLib && (this._itemResLib = new Map);
                            for (var u = (this._curPageNum - 1) * this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM, l = 0; l < this._itemCoordManager.ICON_LIST_PAGE_TOTALNUM && !(u + l >= this._curItemList.length); l++)
                                n = (h = this._curItemList[u + l]).split("_"),
                                    s = Number(n[0]),
                                    a = Number(n[1]),
                                    t = this._itemResLib[h],
                                    e = this._itemData.select(s, a),
                                    null != t ? (t.update(e),
                                        t.visible = !0) : ((t = new f(e,this._itemContainer.target,i.SPIRIT_EQ_ICON_WIDTH - 16,i.SPIRIT_EQ_ICON_HEIGHT - 16,l)).on(r.TOUCH_END, this.bagItemClcikHandler, this),
                                        t.on(r.MOUSE_ENTER, this.bagItemOverHandler, this),
                                        t.on(r.MOUSE_LEAVE, this.bagItemOutHandler, this),
                                        this._itemResLib[h] = t),
                                    t.x = this._itemCoordManager.getX(l),
                                    t.y = this._itemCoordManager.getYDown(l);
                            this._ui.cellBg.pageText.text = this._curPageNum + "/" + this._curTotalPageNum,
                                this._canGet = !0
                        }
                        ,
                        t.curItemClcikHandler = function(t) {
                            this._canGet && (this._curClickItem = t.currentTarget,
                                this._listBoxUI.state.gotoAndStop(1),
                                this._listBoxUI.state.x = this._listBoxUI.mouseX,
                                this._listBoxUI.state.y = this._listBoxUI.mouseY,
                                this.listUIContainer.addChild(this._listBoxUI.target))
                        }
                        ,
                        t.bagItemClcikHandler = function(t) {
                            if (this._canGet) {
                                this._curClickItem = t.currentTarget,
                                    this._curClickItem.data.spiritID,
                                    this._listBoxUI.state.gotoAndStop(1);
                                this._listBoxUI.state.x = this._curClickItem.localToGlobalWithMenu(new n(-18,-32)).x,
                                    this._listBoxUI.state.y = this._curClickItem.localToGlobalWithMenu(new n(-18,-32)).y,
                                    this.listUIContainer.addChild(this._listBoxUI.target);
                                var e = t.currentTarget
                                    , i = e.localToGlobalWithMenu(new n(-42,20));
                                this._curItemTooltips.show(i.x, i.y, e.data)
                            }
                        }
                        ,
                        t.bagItemOverHandler = function(t) {}
                        ,
                        t.bagItemOutHandler = function(t) {}
                        ,
                        t.getItemData = function() {
                            null == this._itemResLib && (this._itemResLib = new Map),
                                this._loader.sendData("?cmd=0")
                        }
                        ,
                        e(i, [{
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(t) {
                                this._ui.visible = t,
                                    this._listBoxUI.visible = t
                            }
                        }, {
                            key: "listUIContainer",
                            get: function() {
                                return l.SysAPI.getUISysAPI().getWindowContainer()
                            }
                        }]),
                        i
                }());
                N.ALL_SEARCH_TYPE = 3,
                    N.SPIRIT_SCALE_WIDTH = 1.2,
                    N.SPIRIT_SCALE_HEIGHT = 1.2,
                    N.SPIRIT_X = 40,
                    N.SPIRIT_Y = 60,
                    N.SPIRIT_EQ_ICON_WIDTH = 96,
                    N.SPIRIT_EQ_ICON_HEIGHT = 96,
                    N.imageCache = void 0,
                    N.FILTER_TYPE = [0, 7, 2, 3, 4, 5, 10, 9, 8, 11];
                var E = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._selectBtn0 = void 0,
                            e._selectBtn1 = void 0,
                            e._selectBtn2 = void 0,
                            e._selectBtn3 = void 0,
                            e._selectBtn4 = void 0,
                            e._btnBack = void 0,
                            e._cellBg = void 0,
                            e._allBtn = void 0,
                            e._weaponBtn = void 0,
                            e._armorBtn = void 0,
                            e._jewelryBtn = void 0,
                            e
                    }
                    return i(s, t),
                        e(s, [{
                            key: "selectBtn0",
                            get: function() {
                                return this._selectBtn0 || (this._selectBtn0 = new o(this.getChildByName("selectBtn0"))),
                                    this._selectBtn0
                            }
                        }, {
                            key: "selectBtn1",
                            get: function() {
                                return this._selectBtn1 || (this._selectBtn1 = new o(this.getChildByName("selectBtn1"))),
                                    this._selectBtn1
                            }
                        }, {
                            key: "selectBtn2",
                            get: function() {
                                return this._selectBtn2 || (this._selectBtn2 = new o(this.getChildByName("selectBtn2"))),
                                    this._selectBtn2
                            }
                        }, {
                            key: "selectBtn3",
                            get: function() {
                                return this._selectBtn3 || (this._selectBtn3 = new o(this.getChildByName("selectBtn3"))),
                                    this._selectBtn3
                            }
                        }, {
                            key: "selectBtn4",
                            get: function() {
                                return this._selectBtn4 || (this._selectBtn4 = this.getChildByName("selectBtn4")),
                                    this._selectBtn4
                            }
                        }, {
                            key: "btnBack",
                            get: function() {
                                return this._btnBack || (this._btnBack = this.getChildByName("btnBack")),
                                    this._btnBack
                            }
                        }, {
                            key: "cellBg",
                            get: function() {
                                return this._cellBg || (this._cellBg = new k(this.getChildByName("cellBg"))),
                                    this._cellBg
                            }
                        }, {
                            key: "allBtn",
                            get: function() {
                                return this._allBtn || (this._allBtn = this.getChildByName("allBtn")),
                                    this._allBtn
                            }
                        }, {
                            key: "weaponBtn",
                            get: function() {
                                return this._weaponBtn || (this._weaponBtn = this.getChildByName("weaponBtn")),
                                    this._weaponBtn
                            }
                        }, {
                            key: "armorBtn",
                            get: function() {
                                return this._armorBtn || (this._armorBtn = this.getChildByName("armorBtn")),
                                    this._armorBtn
                            }
                        }, {
                            key: "jewelryBtn",
                            get: function() {
                                return this._jewelryBtn || (this._jewelryBtn = this.getChildByName("jewelryBtn")),
                                    this._jewelryBtn
                            }
                        }]),
                        s
                }(o)
                    , k = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._txtBagSize = void 0,
                            e._pageText = void 0,
                            e._prevPageButton = void 0,
                            e._nextPageButton = void 0,
                            e
                    }
                    return i(s, t),
                        e(s, [{
                            key: "txtBagSize",
                            get: function() {
                                return this._txtBagSize || (this._txtBagSize = new o(this.getChildByName("txtBagSize"))),
                                    this._txtBagSize
                            }
                        }, {
                            key: "pageText",
                            get: function() {
                                return this._pageText || (this._pageText = new o(this.getChildByName("pageText"))),
                                    this._pageText
                            }
                        }, {
                            key: "prevPageButton",
                            get: function() {
                                return this._prevPageButton || (this._prevPageButton = this.getChildByName("prevPageButton")),
                                    this._prevPageButton
                            }
                        }, {
                            key: "nextPageButton",
                            get: function() {
                                return this._nextPageButton || (this._nextPageButton = this.getChildByName("nextPageButton")),
                                    this._nextPageButton
                            }
                        }]),
                        s
                }(o)
                    , w = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._sellBtn = void 0,
                            e._putOutBtn = void 0,
                            e
                    }
                    return i(s, t),
                        e(s, [{
                            key: "sellBtn",
                            get: function() {
                                return this._sellBtn || (this._sellBtn = new o(this.getChildByName("sellBtn"))),
                                    this._sellBtn
                            }
                        }, {
                            key: "putOutBtn",
                            get: function() {
                                return this._putOutBtn || (this._putOutBtn = new o(this.getChildByName("putOutBtn"))),
                                    this._putOutBtn
                            }
                        }]),
                        s
                }(o)
                    , x = function(t) {
                    function a() {
                        var e;
                        return (e = t.call(this) || this)._state = void 0,
                            e._bg = void 0,
                            e._target = p.Instance.getPrefabByName("SpiritBag_1600/SpiritEquipBagList_1600"),
                        e._target && c(e._target) && null == e._target.getComponent(B) && (e._target.addComponent(B).target = s(e)),
                            e
                    }
                    return i(a, t),
                        e(a, [{
                            key: "state",
                            get: function() {
                                return this._state || (this._state = new w(this.getChildByName("state"))),
                                    this._state
                            }
                        }, {
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = this.getChildByName("bg")),
                                    this._bg
                            }
                        }]),
                        a
                }(o);
                a._RF.pop()
            }
        }
    }
));
