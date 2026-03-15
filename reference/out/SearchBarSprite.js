System.register("chunks:///_virtual/SearchBarSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./EquipmentType.ts", "./AgentNode.ts", "./NodeExtendEx.ts", "./XML.ts", "./ResManager.ts", "./FrameEvent.ts", "./SearchData.ts", "./ConfigManager.ts", "./Xml2Json.ts", "./SpiritConfCfgLoader.ts"], (function(t) {
        var i, e, r, n, a, h, s, o, c, p, u, l, B, g, m, f, _, S, d, x, y;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createForOfIteratorHelperLoose,
                    r = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        a = t.TextAsset,
                        h = t.NodeEventType,
                        s = t.EditBox
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    c = t.__global
                }
                , function(t) {
                    p = t.EquipmentType
                }
                , function(t) {
                    u = t.AgentNode,
                        l = t.AgentNodeDebugger,
                        B = t.GotoAndStopCallBackComponent
                }
                , function(t) {
                    g = t.NodeExtendEx
                }
                , function(t) {
                    m = t.XML
                }
                , function(t) {
                    f = t.default
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    S = t.SearchData
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    x = t.Xml2Json
                }
                , function(t) {
                    y = t.SpiritConfCfgLoader
                }
            ],
            execute: function() {
                n._RF.push({}, "7bb2bHGMBlKJ7Y1gJhAmaAf", "SearchBarSprite", void 0),
                    t("SearchBarSprite", function(t) {
                        i(u, t);
                        var n = u.prototype;
                        function u(i) {
                            var e;
                            (e = t.call(this) || this).mainBar = void 0,
                                e.canbutton = !0,
                                e.par = void 0,
                                e.tempText = "",
                                e.id1 = -10,
                                e.id2 = -10,
                                e.id3 = -10,
                                e.id4 = -10,
                                e.id5 = -10,
                                e.id6 = -10,
                                e.time1 = 0,
                                e.time2 = 0,
                                e.time3 = 0,
                                e.time4 = 0,
                                e.time5 = 0,
                                e.time6 = 0,
                                e._focusTime = 0,
                                e._selectArr = ["全部", "时间", "等级", "性别", "身高", "体重", "组别", "装备"],
                                e._visible = void 0,
                                e.btnFilterFlag = void 0,
                                e.par = i;
                            var r = f.Instance.getPrefabByName(e.exportLink);
                            return e.initView(r),
                                e
                        }
                        return n.dispose = function() {}
                            ,
                            n.onInit = function() {
                                this.mainBar = new w(this._view),
                                    this.addChild(this.mainBar.target),
                                    this.mainBar.searchIconBar.visible = !1,
                                    this.mainBar.textInput.text = "",
                                    this.mainBar.txtCurSelect.text = this._selectArr[0],
                                    this.tempText = this.mainBar.textInput.text,
                                    this.mainBar.textShowBar.visible = !1,
                                    this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames),
                                    this.mainBar.filterBar.visible = !1,
                                    S.curSearchType = 0
                            }
                            ,
                            n.afterLoaded = function() {
                                this.init1(),
                                    this.reset()
                            }
                            ,
                            n.init = function() {}
                            ,
                            n.init1 = function() {
                                if (this._isInit) {
                                    var t = c.SysAPI.getGDataAPI().getGlobalVal(o.CONFS)[u.NAME];
                                    if (null == t || null == t) {
                                        console.error("SearchBarSprite's param data is undefine");
                                        var i = d.Instance.getRes("xml/spirit_conf", a);
                                        i && (t = x.getJsonNew(i.text).SpiritConfig)
                                    }
                                    y.Instance.data && (t = y.Instance.data);
                                    for (var e = new m(t).data, r = 0; r < e.PropertyDes.length; r++)
                                        this.mainBar.searchIconBar["p" + e.PropertyDes[r].id].on(h.TOUCH_END, this.paction, this);
                                    this.mainBar.searchIconBar.p22.on(h.TOUCH_END, this.pactionAll, this),
                                        this.mainBar.propertyBtn.on(h.TOUCH_END, this.propertyaction, this),
                                        this.mainBar.textInput.on(s.EventType.EDITING_DID_ENDED, this.hideTextShow, this),
                                        this.mainBar.filterBar.gradeSearchBtn.on(h.TOUCH_END, this.gradeSort, this),
                                        this.mainBar.filterBar.heightSearchBtn.on(h.TOUCH_END, this.heightSort, this),
                                        this.mainBar.filterBar.weightSearchBtn.on(h.TOUCH_END, this.weightSort, this),
                                        this.mainBar.filterBar.timeSearchBtn.on(h.TOUCH_END, this.timeSort, this),
                                        this.mainBar.filterBar.showAllBtn.on(h.TOUCH_END, this.allSort, this),
                                        this.mainBar.searchBtn.on(h.TOUCH_END, this.searchSort, this),
                                        this.mainBar.filterBar.sexSearchBtnM.on(h.TOUCH_END, this.maleAction, this),
                                        this.mainBar.filterBar.sexSearchBtnF.on(h.TOUCH_END, this.femaleAction, this),
                                        this.mainBar.filterBar.sexSearchBtnM.visible = !0,
                                        this.mainBar.filterBar.sexSearchBtnF.visible = !1,
                                        this.mainBar.textShowBar.text1.on(h.TOUCH_END, this.t1action, this),
                                        this.mainBar.textShowBar.text2.on(h.TOUCH_END, this.t2action, this),
                                        this.mainBar.textShowBar.text3.on(h.TOUCH_END, this.t3action, this),
                                        this.mainBar.textShowBar.text4.on(h.TOUCH_END, this.t4action, this),
                                        this.mainBar.textShowBar.text5.on(h.TOUCH_END, this.t5action, this),
                                        this.mainBar.textShowBar.text6.on(h.TOUCH_END, this.t6action, this),
                                        this.mainBar.filterBar.groupSearchBtn.on(h.TOUCH_END, this.groupAction, this),
                                        this.mainBar.groupIconBar.visible = !1,
                                        this.mainBar.groupIconBar.group1.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group2.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group4.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group12.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group29.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group32.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group21.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group15.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group10.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.groupIconBar.group13.on(h.TOUCH_END, this.onGrougFilter, this),
                                        this.mainBar.filterBar.equipmentSearchBtn.on(h.TOUCH_END, this.equipAction, this),
                                        this.mainBar.equipmentIconBar.visible = !1,
                                        this.mainBar.equipmentIconBar.e1.on(h.TOUCH_END, this.onEquip, this),
                                        this.mainBar.equipmentIconBar.e2.on(h.TOUCH_END, this.onEquip, this),
                                        this.mainBar.equipmentIconBar.e3.on(h.TOUCH_END, this.onEquip, this),
                                        this.mainBar.addEventListener(_.ENTER_FRAME, this.mainaction, this),
                                        this.mainBar.btnFilter.on(h.TOUCH_END, this.onBtnFilterClick, this),
                                        this.mainBar.btnReset.on(h.TOUCH_END, this.onBtnResetClick, this)
                                }
                            }
                            ,
                            n.reset = function() {
                                this._isInit && (this.mainBar.textInput.text = "",
                                    this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames))
                            }
                            ,
                            n.reset1 = function() {
                                this._isInit && this.onBtnResetClick(null)
                            }
                            ,
                            n.onBtnResetClick = function(t) {
                                this.mainBar.textInput.text = "",
                                    S.curSearchType = 0,
                                    S.curOtherSearchType = 0,
                                    this.refreshAll()
                            }
                            ,
                            n.onBtnFilterClick = function(t) {
                                this.btnFilterFlag = !this.btnFilterFlag,
                                    this.mainBar.filterBar.visible = this.btnFilterFlag,
                                    this.mainBar.btnFilter.rotation = this.btnFilterFlag ? 180 : 0,
                                    this.mainBar.groupIconBar.visible = !1,
                                    this.mainBar.equipmentIconBar.visible = !1
                            }
                            ,
                            n.t1action = function(t) {
                                S.tempSpiritName = this.mainBar.textShowBar.text1.text,
                                    this.mainBar.textInput.text = S.tempSpiritName,
                                    this.mainBar.textShowBar.visible = !1
                            }
                            ,
                            n.t2action = function(t) {
                                S.tempSpiritName = this.mainBar.textShowBar.text2.text,
                                    this.mainBar.textInput.text = S.tempSpiritName,
                                    this.mainBar.textShowBar.visible = !1
                            }
                            ,
                            n.t3action = function(t) {
                                S.tempSpiritName = this.mainBar.textShowBar.text3.text,
                                    this.mainBar.textInput.text = S.tempSpiritName,
                                    this.mainBar.textShowBar.visible = !1
                            }
                            ,
                            n.t4action = function(t) {
                                S.tempSpiritName = this.mainBar.textShowBar.text4.text,
                                    this.mainBar.textInput.text = S.tempSpiritName,
                                    this.mainBar.textShowBar.visible = !1
                            }
                            ,
                            n.t5action = function(t) {
                                S.tempSpiritName = this.mainBar.textShowBar.text5.text,
                                    this.mainBar.textInput.text = S.tempSpiritName,
                                    this.mainBar.textShowBar.visible = !1
                            }
                            ,
                            n.t6action = function(t) {
                                S.tempSpiritName = this.mainBar.textShowBar.text6.text,
                                    this.mainBar.textInput.text = S.tempSpiritName,
                                    this.mainBar.textShowBar.visible = !1
                            }
                            ,
                            n.onEquip = function(t) {
                                switch (S.curOtherSearchType = 3,
                                    S.curSearchType = 1,
                                    this.mainBar.equipmentIconBar.visible = !1,
                                    t.currentTarget) {
                                    case this.mainBar.equipmentIconBar.e1.target:
                                        S.curSearchEquipType = p.WEAPON_TYPE,
                                            this.par.search();
                                        break;
                                    case this.mainBar.equipmentIconBar.e2.target:
                                        S.curSearchEquipType = p.ARMOR_TYPE,
                                            this.par.search();
                                        break;
                                    case this.mainBar.equipmentIconBar.e3.target:
                                        S.curSearchEquipType = p.JEWELRY_TYPE,
                                            this.par.search()
                                }
                                this.onBtnFilterClick(null)
                            }
                            ,
                            n.onGrougFilter = function(t) {
                                S.curOtherSearchType = 2;
                                var i = 0;
                                switch (this.mainBar.groupIconBar.visible = !1,
                                    t.currentTarget) {
                                    case this.mainBar.groupIconBar.group1.target:
                                        i = 1;
                                        break;
                                    case this.mainBar.groupIconBar.group2.target:
                                        i = 2;
                                        break;
                                    case this.mainBar.groupIconBar.group4.target:
                                        i = 4;
                                        break;
                                    case this.mainBar.groupIconBar.group12.target:
                                        i = 12;
                                        break;
                                    case this.mainBar.groupIconBar.group29.target:
                                        i = 29;
                                        break;
                                    case this.mainBar.groupIconBar.group32.target:
                                        i = 32;
                                        break;
                                    case this.mainBar.groupIconBar.group21.target:
                                        i = 21;
                                        break;
                                    case this.mainBar.groupIconBar.group15.target:
                                        i = 15;
                                        break;
                                    case this.mainBar.groupIconBar.group10.target:
                                        i = 10;
                                        break;
                                    case this.mainBar.groupIconBar.group13.target:
                                        i = 13;
                                        break;
                                    default:
                                        return
                                }
                                this.canbuttonopen(),
                                    S.curSearchType = 3,
                                    S.curSearchGroup = i,
                                    this.par.search(),
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.searchSort = function(t) {
                                this.tempText = this.mainBar.textInput.text,
                                    this.searchByName(this.mainBar.textInput.text)
                            }
                            ,
                            n.searchByName = function(t) {
                                this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames),
                                    this.refresh(t),
                                    S.curSearchType = 7,
                                    this.mainBar.txtCurSelect.text = this._selectArr[0],
                                    S.curSearchName = t,
                                    this.par.refreshContainer(),
                                    this._focusTime = 0
                            }
                            ,
                            n.gradeSort = function(t) {
                                this.refreshGrade(),
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.heightSort = function(t) {
                                this.refreshHeight(),
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.weightSort = function(t) {
                                this.refreshWeight(),
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.timeSort = function(t) {
                                this.refreshTime(),
                                    this.mainBar.txtCurSelect.text = this._selectArr[1],
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.allSort = function(t) {
                                this.mainBar.textInput.text = "",
                                    S.curSearchType = 0,
                                    S.curOtherSearchType = 0,
                                    this.par.search(),
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.refreshTectShowBar = function() {
                                "" != this.mainBar.textInput.text && (this.mainBar.textShowBar.visible = !0),
                                "" == this.mainBar.textInput.text && (this.mainBar.textShowBar.visible = !1)
                            }
                            ,
                            n.hideTextShow = function(t) {
                                this._focusTime = 10
                            }
                            ,
                            n.maleAction = function(t) {
                                this.mainBar.textInput.text = "",
                                    this.canbuttonopen(),
                                    S.curSearchType = 2,
                                    S.curOtherSearchType = 1,
                                    S.curSearchSex = !0,
                                    this.par.search(),
                                    this.mainBar.searchIconBar.visible = !1,
                                    this.mainBar.filterBar.sexSearchBtnM.visible = !1,
                                    this.mainBar.filterBar.sexSearchBtnF.visible = !0,
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.femaleAction = function(t) {
                                this.mainBar.textInput.text = "",
                                    this.canbuttonopen(),
                                    S.curSearchType = 2,
                                    S.curOtherSearchType = 1,
                                    S.curSearchSex = !1,
                                    this.par.search(),
                                    this.mainBar.searchIconBar.visible = !1,
                                    this.mainBar.filterBar.sexSearchBtnM.visible = !0,
                                    this.mainBar.filterBar.sexSearchBtnF.visible = !1,
                                    this.onBtnFilterClick(null)
                            }
                            ,
                            n.paction = function(t) {
                                S.curSearchType = 4;
                                var i = c.SysAPI.getGDataAPI().getGlobalVal(o.CONFS)[u.NAME];
                                if (null == i || null == i) {
                                    console.error("SearchBarSprite's param data is undefine");
                                    var e = d.Instance.getRes("xml/spirit_conf", a);
                                    e && (i = x.getJsonNew(e.text).SpiritConfig)
                                }
                                y.Instance.data && (i = y.Instance.data);
                                var r = new m(i).data
                                    , n = Number(t.currentTarget.name.slice(1))
                                    , h = r.PropertyDes[n - 1].name;
                                S.curSearchProperty = h,
                                    this.canbuttonopen(),
                                    this.par.search(),
                                    this.mainBar.searchIconBar.visible = !1,
                                    S.curSearchPropertyID = Number(n),
                                    this.mainBar.propertyIcon.gotoAndStop(Number(n))
                            }
                            ,
                            n.pactionAll = function(t) {
                                S.curSearchType = 4;
                                var i = c.SysAPI.getGDataAPI().getGlobalVal(o.CONFS)[u.NAME];
                                if (null == i || null == i) {
                                    console.error("SearchBarSprite's param data is undefine");
                                    var e = d.Instance.getRes("xml/spirit_conf", a);
                                    e && (i = x.getJsonNew(e.text).SpiritConfig)
                                }
                                y.Instance.data && (i = y.Instance.data);
                                var r = Number(t.currentTarget.name.slice(1));
                                S.curSearchProperty = "",
                                    this.canbuttonopen(),
                                    this.par.search(),
                                    this.mainBar.searchIconBar.visible = !1,
                                    S.curSearchPropertyID = Number(r),
                                    this.mainBar.propertyIcon.gotoAndStop(23)
                            }
                            ,
                            n.canbuttonopen = function() {
                                this.canbutton = !0,
                                    this.mainBar.textInput.getComponent(s).blur()
                            }
                            ,
                            n.canbuttonclose = function() {
                                this.canbutton = !1
                            }
                            ,
                            n.refreshAll = function() {
                                S.curSearchType = 0,
                                    S.curOtherSearchType = 0,
                                    this.mainBar.txtCurSelect.text = this._selectArr[0],
                                    S.searchedSpirits = null,
                                    S.searchedSpirits = S.allSpirits,
                                    this.mainBar.propertyIcon.gotoAndStop(this.mainBar.propertyIcon.totalFrames),
                                    this.refreshTime()
                            }
                            ,
                            n.refresh = function(t) {
                                S.searchedSpirits = [];
                                for (var i = new Array, e = new RegExp("(" + t + ")"), r = 0; r < S.allSpirits.length; r++)
                                    if (null != S.allSpirits[r] && (e.test(S.allSpirits[r].spiritDes.name) || e.test(S.allSpirits[r].spiritDes.id.toString()))) {
                                        S.searchedSpirits.push(S.allSpirits[r]);
                                        for (var n = !0, a = 0; a < i.length; a++)
                                            S.allSpirits[r].spiritDes.name == i[a].spiritDes.name && (n = !1);
                                        1 == n && i.push(S.allSpirits[r])
                                    }
                                var h, s = 0;
                                if (i.length <= 6)
                                    for (s = 0; s < 6; s++)
                                        h = s + 1,
                                            null != i[s] ? (this.mainBar.textShowBar["text" + h].text = i[s].spiritDes.name,
                                                this["id" + h] = i[s].id,
                                                this["time" + h] = i[s].catchTime) : (this.mainBar.textShowBar["text" + h].text = "",
                                                this["id" + h] = -10,
                                                this["time" + h] = 0);
                                if (i.length > 6) {
                                    for (s = 0; s < 5; s++)
                                        h = s + 1,
                                            null != i[s] ? (this.mainBar.textShowBar["text" + h].text = i[s].spiritDes.name,
                                                this["id" + h] = i[s].id,
                                                this["time" + h] = i[s].catchTime) : (this.mainBar.textShowBar["text" + h].text = "",
                                                this["id" + h] = -10,
                                                this["time" + h] = 0);
                                    this.id6 = -10,
                                        this.mainBar.textShowBar.text6.text = "..."
                                }
                                this.refreshTectShowBar()
                            }
                            ,
                            n.refreshByEquipType = function(t) {
                                var i;
                                S.curSearchType = 1,
                                    S.curSearchEquipType = t,
                                    S.searchedSpirits = [],
                                    this.mainBar.txtCurSelect.text = this._selectArr[7];
                                for (var e = 0; e < S.allSpirits.length; e++)
                                    i = S.allSpirits[e],
                                    (t == p.WEAPON_TYPE && null != i.weaponInfo || t == p.ARMOR_TYPE && null != i.armorInfo || t == p.JEWELRY_TYPE && null != i.jewelryInfo) && S.searchedSpirits.push(i);
                                this.par.refreshContainer()
                            }
                            ,
                            n.refreshByEquipType1 = function(t) {
                                var i, e = [];
                                S.curSearchType = 1,
                                    S.curSearchEquipType = t,
                                    this.mainBar.txtCurSelect.text = this._selectArr[7];
                                for (var r = 0; r < S.searchedSpirits.length; r++)
                                    i = S.searchedSpirits[r],
                                    (t == p.WEAPON_TYPE && null != i.weaponInfo || t == p.ARMOR_TYPE && null != i.armorInfo || t == p.JEWELRY_TYPE && null != i.jewelryInfo) && e.push(i);
                                S.searchedSpirits = e
                            }
                            ,
                            n.refreshSex = function(t) {
                                S.curSearchType = 2,
                                    S.curSearchSex = t,
                                    this.mainBar.txtCurSelect.text = this._selectArr[3];
                                var i = t ? 1 : 2;
                                S.searchedSpirits = [];
                                for (var e = 0; e < S.allSpirits.length; e++) {
                                    if (null != S.allSpirits[e])
                                        S.allSpirits[e].sex == i && S.searchedSpirits.push(S.allSpirits[e])
                                }
                                this.par.refreshContainer()
                            }
                            ,
                            n.refreshSex1 = function(t) {
                                var i = [];
                                S.curOtherSearchType = 1,
                                    S.curSearchType = 2,
                                    S.curSearchSex = t,
                                    this.mainBar.txtCurSelect.text = this._selectArr[3];
                                for (var e = t ? 1 : 2, r = 0; r < S.searchedSpirits.length; r++) {
                                    if (null != S.searchedSpirits[r])
                                        S.searchedSpirits[r].sex == e && i.push(S.searchedSpirits[r])
                                }
                                S.searchedSpirits = i
                            }
                            ,
                            n.refreshGroup = function(t) {
                                S.curSearchType = 3,
                                    S.curSearchGroup = t,
                                    this.mainBar.txtCurSelect.text = this._selectArr[6],
                                    this.mainBar.textInput.text = "",
                                    S.searchedSpirits = [];
                                for (var i = 0; i < S.allSpirits.length; i++)
                                    if (null != S.allSpirits[i]) {
                                        var r = S.allSpirits[i].spiritDes;
                                        if (null == r)
                                            continue;
                                        var n = r.group;
                                        if (null == n)
                                            continue;
                                        for (var a, h = e(n); !(a = h()).done; ) {
                                            a.value.id == t && S.searchedSpirits.push(S.allSpirits[i])
                                        }
                                    }
                                this.par.refreshContainer()
                            }
                            ,
                            n.refreshGroup1 = function(t) {
                                var i = [];
                                S.curSearchType = 3,
                                    this.mainBar.txtCurSelect.text = this._selectArr[6],
                                    S.curSearchGroup = t,
                                    this.mainBar.textInput.text = "";
                                for (var r = 0; r < S.searchedSpirits.length; r++)
                                    if (null != S.searchedSpirits[r]) {
                                        var n = S.searchedSpirits[r].spiritDes;
                                        if (null == n)
                                            continue;
                                        var a = n.group;
                                        if (null == a)
                                            continue;
                                        for (var h, s = e(a); !(h = s()).done; ) {
                                            h.value.id == t && i.push(S.searchedSpirits[r])
                                        }
                                    }
                                S.searchedSpirits = i
                            }
                            ,
                            n.refreshProperty = function(t) {
                                void 0 === t && (t = ""),
                                    S.curSearchType = 4,
                                    S.curSearchProperty = t,
                                    S.searchedSpirits = [];
                                for (var i = t, e = 0; e < S.allSpirits.length; e++)
                                    if (null != S.allSpirits[e]) {
                                        var r = S.allSpirits[e].spiritDes;
                                        if (null == r)
                                            continue;
                                        var n = r.features;
                                        if (null == n)
                                            continue;
                                        for (var a = 0; a < n.length; a++)
                                            if (0 == i.length || i == n[a].name) {
                                                S.searchedSpirits.push(S.allSpirits[e]);
                                                break
                                            }
                                    }
                                this.par.refreshContainer()
                            }
                            ,
                            n.refreshProperty1 = function(t) {
                                void 0 === t && (t = ""),
                                    S.curSearchType = 4,
                                    S.curSearchProperty = t;
                                for (var i = t, e = 0; e < S.allSpirits.length; e++)
                                    if (null != S.allSpirits[e]) {
                                        var r = S.allSpirits[e].spiritDes;
                                        if (null == r)
                                            continue;
                                        var n = r.features;
                                        if (null == n)
                                            continue;
                                        for (var a = 0; a < n.length; a++)
                                            if (0 == i.length || i == n[a].name) {
                                                S.searchedSpirits.push(S.allSpirits[e]);
                                                break
                                            }
                                    }
                            }
                            ,
                            n.refreshTime = function() {
                                S.curSearchType = 5,
                                    S.searchedSpirits.sort((function(t, i) {
                                            var e = t.addSTTime;
                                            return i.addSTTime - e
                                        }
                                    )),
                                    this.par.refreshContainer()
                            }
                            ,
                            n.refreshGrade = function() {
                                S.curSearchType = 6,
                                    this.mainBar.txtCurSelect.text = this._selectArr[2],
                                    S.searchedSpirits.sort((function(t, i) {
                                            var e = t.level;
                                            return i.level - e
                                        }
                                    )),
                                    this.par.refreshContainer()
                            }
                            ,
                            n.refreshHeight = function() {
                                S.curSearchType = 8,
                                    this.mainBar.txtCurSelect.text = this._selectArr[4],
                                    S.searchedSpirits.sort((function(t, i) {
                                            var e = t.height;
                                            return i.height - e
                                        }
                                    )),
                                    this.par.refreshContainer()
                            }
                            ,
                            n.refreshWeight = function() {
                                S.curSearchType = 9,
                                    this.mainBar.txtCurSelect.text = this._selectArr[5],
                                    S.searchedSpirits.sort((function(t, i) {
                                            var e = t.weight;
                                            return i.weight - e
                                        }
                                    )),
                                    this.par.refreshContainer()
                            }
                            ,
                            n.propertyaction = function(t) {
                                this.canbutton ? (this.mainBar.searchIconBar.visible = !0,
                                    this.canbuttonclose()) : (this.mainBar.searchIconBar.visible = !1,
                                    this.canbuttonopen())
                            }
                            ,
                            n.equipAction = function(t) {
                                this.mainBar.equipmentIconBar.visible = !0,
                                    this.mainBar.groupIconBar.visible = !1,
                                    this.mainBar.filterBar.visible = !1
                            }
                            ,
                            n.groupAction = function(t) {
                                this.mainBar.groupIconBar.visible = !0,
                                    this.mainBar.equipmentIconBar.visible = !1,
                                    this.mainBar.filterBar.visible = !1
                            }
                            ,
                            n.mainaction = function(t) {
                                this._focusTime > 0 && this._focusTime--,
                                0 == this._focusTime && (this.mainBar.textShowBar.visible = !1,
                                    this._focusTime = -100),
                                this.tempText != this.mainBar.textInput.text && (this.tempText = this.mainBar.textInput.text,
                                    this.refresh(this.tempText))
                            }
                            ,
                            n.del = function() {
                                this.mainBar.propertyBtn.off(h.TOUCH_END, this.propertyaction, this),
                                    this.mainBar.filterBar.groupSearchBtn.off(h.TOUCH_END, this.groupAction, this);
                                var t = c.SysAPI.getGDataAPI().getGlobalVal(o.CONFS)[u.NAME];
                                if (null == t || null == t) {
                                    console.error("SearchBarSprite's param data is undefine");
                                    var i = d.Instance.getRes("xml/spirit_conf", a);
                                    i && (t = x.getJsonNew(i.text).SpiritConfig)
                                }
                                y.Instance.data && (t = y.Instance.data);
                                for (var e = new m(t).data, r = 0; r < e.PropertyDes.length; r++)
                                    this.mainBar.searchIconBar["p" + e.PropertyDes[r].id].off(h.TOUCH_END, this.paction, this);
                                this.mainBar.searchIconBar.p22.off(h.TOUCH_END, this.pactionAll, this),
                                    this.mainBar.textInput.off(s.EventType.EDITING_DID_ENDED, this.hideTextShow, this),
                                    this.mainBar.filterBar.gradeSearchBtn.off(h.TOUCH_END, this.gradeSort, this),
                                    this.mainBar.filterBar.heightSearchBtn.off(h.TOUCH_END, this.heightSort, this),
                                    this.mainBar.filterBar.weightSearchBtn.off(h.TOUCH_END, this.weightSort, this),
                                    this.mainBar.filterBar.timeSearchBtn.off(h.TOUCH_END, this.timeSort, this),
                                    this.mainBar.filterBar.showAllBtn.off(h.TOUCH_END, this.allSort, this),
                                    this.mainBar.searchBtn.off(h.TOUCH_END, this.searchSort, this),
                                    this.mainBar.filterBar.sexSearchBtnM.off(h.TOUCH_END, this.maleAction, this),
                                    this.mainBar.filterBar.sexSearchBtnF.off(h.TOUCH_END, this.femaleAction, this),
                                    this.mainBar.textShowBar.text1.off(h.TOUCH_END, this.t1action, this),
                                    this.mainBar.textShowBar.text2.off(h.TOUCH_END, this.t2action, this),
                                    this.mainBar.textShowBar.text3.off(h.TOUCH_END, this.t3action, this),
                                    this.mainBar.textShowBar.text4.off(h.TOUCH_END, this.t4action, this),
                                    this.mainBar.textShowBar.text5.off(h.TOUCH_END, this.t5action, this),
                                    this.mainBar.textShowBar.text6.off(h.TOUCH_END, this.t6action, this),
                                    this.mainBar.groupIconBar.group1.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group2.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group4.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group12.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group29.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group32.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group21.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group15.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group10.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.groupIconBar.group13.off(h.TOUCH_END, this.onGrougFilter, this),
                                    this.mainBar.filterBar.equipmentSearchBtn.off(h.TOUCH_END, this.equipAction, this),
                                    this.mainBar.equipmentIconBar.visible = !1,
                                    this.mainBar.equipmentIconBar.e1.off(h.TOUCH_END, this.onEquip, this),
                                    this.mainBar.equipmentIconBar.e2.off(h.TOUCH_END, this.onEquip, this),
                                    this.mainBar.equipmentIconBar.e3.off(h.TOUCH_END, this.onEquip, this),
                                    this.mainBar.removeEventListener(_.ENTER_FRAME, this.mainaction, this),
                                    this.mainBar.btnFilter.off(h.TOUCH_END, this.onBtnFilterClick, this),
                                    this.mainBar.btnReset.off(h.TOUCH_END, this.onBtnResetClick, this),
                                    this.mainBar = null,
                                    this.par = null
                            }
                            ,
                            r(u, [{
                                key: "resBundleKey",
                                get: function() {
                                    return "gui"
                                }
                            }, {
                                key: "exportLink",
                                get: function() {
                                    return "spriteStore/SearchBarSpriteUI_1600"
                                }
                            }]),
                            u
                    }(g)).NAME = "spirit_conf";
                var C = function(t) {
                    function e() {
                        for (var i, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._text1 = void 0,
                            i._text2 = void 0,
                            i._text3 = void 0,
                            i._text4 = void 0,
                            i._text5 = void 0,
                            i._text6 = void 0,
                            i
                    }
                    return i(e, t),
                        r(e, [{
                            key: "text1",
                            get: function() {
                                return this._text1 || (this._text1 = new u(this.getChildByName("text1"))),
                                    this._text1
                            }
                        }, {
                            key: "text2",
                            get: function() {
                                return this._text2 || (this._text2 = new u(this.getChildByName("text2"))),
                                    this._text2
                            }
                        }, {
                            key: "text3",
                            get: function() {
                                return this._text3 || (this._text3 = new u(this.getChildByName("text3"))),
                                    this._text3
                            }
                        }, {
                            key: "text4",
                            get: function() {
                                return this._text4 || (this._text4 = new u(this.getChildByName("text4"))),
                                    this._text4
                            }
                        }, {
                            key: "text5",
                            get: function() {
                                return this._text5 || (this._text5 = new u(this.getChildByName("text5"))),
                                    this._text5
                            }
                        }, {
                            key: "text6",
                            get: function() {
                                return this._text6 || (this._text6 = new u(this.getChildByName("text6"))),
                                    this._text6
                            }
                        }]),
                        e
                }(u)
                    , N = function(t) {
                    function e() {
                        for (var i, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._gradeSearchBtn = void 0,
                            i._heightSearchBtn = void 0,
                            i._weightSearchBtn = void 0,
                            i._timeSearchBtn = void 0,
                            i._showAllBtn = void 0,
                            i._sexSearchBtnM = void 0,
                            i._sexSearchBtnF = void 0,
                            i._groupSearchBtn = void 0,
                            i._equipmentSearchBtn = void 0,
                            i
                    }
                    return i(e, t),
                        r(e, [{
                            key: "gradeSearchBtn",
                            get: function() {
                                return this._gradeSearchBtn || (this._gradeSearchBtn = new u(this.getChildByName("gradeSearchBtn"))),
                                    this._gradeSearchBtn
                            }
                        }, {
                            key: "heightSearchBtn",
                            get: function() {
                                return this._heightSearchBtn || (this._heightSearchBtn = new u(this.getChildByName("heightSearchBtn"))),
                                    this._heightSearchBtn
                            }
                        }, {
                            key: "weightSearchBtn",
                            get: function() {
                                return this._weightSearchBtn || (this._weightSearchBtn = new u(this.getChildByName("weightSearchBtn"))),
                                    this._weightSearchBtn
                            }
                        }, {
                            key: "timeSearchBtn",
                            get: function() {
                                return this._timeSearchBtn || (this._timeSearchBtn = new u(this.getChildByName("timeSearchBtn"))),
                                    this._timeSearchBtn
                            }
                        }, {
                            key: "showAllBtn",
                            get: function() {
                                return this._showAllBtn || (this._showAllBtn = new u(this.getChildByName("showAllBtn"))),
                                    this._showAllBtn
                            }
                        }, {
                            key: "sexSearchBtnM",
                            get: function() {
                                return this._sexSearchBtnM || (this._sexSearchBtnM = new u(this.getChildByName("sexSearchBtnM"))),
                                    this._sexSearchBtnM
                            }
                        }, {
                            key: "sexSearchBtnF",
                            get: function() {
                                return this._sexSearchBtnF || (this._sexSearchBtnF = new u(this.getChildByName("sexSearchBtnF"))),
                                    this._sexSearchBtnF
                            }
                        }, {
                            key: "groupSearchBtn",
                            get: function() {
                                return this._groupSearchBtn || (this._groupSearchBtn = new u(this.getChildByName("groupSearchBtn"))),
                                    this._groupSearchBtn
                            }
                        }, {
                            key: "equipmentSearchBtn",
                            get: function() {
                                return this._equipmentSearchBtn || (this._equipmentSearchBtn = new u(this.getChildByName("equipmentSearchBtn"))),
                                    this._equipmentSearchBtn
                            }
                        }]),
                        e
                }(u)
                    , v = function(t) {
                    function e() {
                        for (var i, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._group1 = void 0,
                            i._group2 = void 0,
                            i._group4 = void 0,
                            i._group12 = void 0,
                            i._group29 = void 0,
                            i._group32 = void 0,
                            i._group21 = void 0,
                            i._group15 = void 0,
                            i._group10 = void 0,
                            i._group13 = void 0,
                            i
                    }
                    return i(e, t),
                        r(e, [{
                            key: "group1",
                            get: function() {
                                return this._group1 || (this._group1 = new u(this.getChildByName("group1"))),
                                    this._group1
                            }
                        }, {
                            key: "group2",
                            get: function() {
                                return this._group2 || (this._group2 = new u(this.getChildByName("group2"))),
                                    this._group2
                            }
                        }, {
                            key: "group4",
                            get: function() {
                                return this._group4 || (this._group4 = new u(this.getChildByName("group4"))),
                                    this._group4
                            }
                        }, {
                            key: "group12",
                            get: function() {
                                return this._group12 || (this._group12 = new u(this.getChildByName("group12"))),
                                    this._group12
                            }
                        }, {
                            key: "group29",
                            get: function() {
                                return this._group29 || (this._group29 = new u(this.getChildByName("group29"))),
                                    this._group29
                            }
                        }, {
                            key: "group32",
                            get: function() {
                                return this._group32 || (this._group32 = new u(this.getChildByName("group32"))),
                                    this._group32
                            }
                        }, {
                            key: "group21",
                            get: function() {
                                return this._group21 || (this._group21 = new u(this.getChildByName("group21"))),
                                    this._group21
                            }
                        }, {
                            key: "group15",
                            get: function() {
                                return this._group15 || (this._group15 = new u(this.getChildByName("group15"))),
                                    this._group15
                            }
                        }, {
                            key: "group10",
                            get: function() {
                                return this._group10 || (this._group10 = new u(this.getChildByName("group10"))),
                                    this._group10
                            }
                        }, {
                            key: "group13",
                            get: function() {
                                return this._group13 || (this._group13 = new u(this.getChildByName("group13"))),
                                    this._group13
                            }
                        }]),
                        e
                }(u)
                    , I = function(t) {
                    function e() {
                        for (var i, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._e1 = void 0,
                            i._e2 = void 0,
                            i._e3 = void 0,
                            i
                    }
                    return i(e, t),
                        r(e, [{
                            key: "e1",
                            get: function() {
                                return this._e1 || (this._e1 = new u(this.getChildByName("e1"))),
                                    this._e1
                            }
                        }, {
                            key: "e2",
                            get: function() {
                                return this._e2 || (this._e2 = new u(this.getChildByName("e2"))),
                                    this._e2
                            }
                        }, {
                            key: "e3",
                            get: function() {
                                return this._e3 || (this._e3 = new u(this.getChildByName("e3"))),
                                    this._e3
                            }
                        }]),
                        e
                }(u)
                    , T = function(t) {
                    function e() {
                        for (var i, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._p1 = void 0,
                            i._p2 = void 0,
                            i._p3 = void 0,
                            i._p4 = void 0,
                            i._p5 = void 0,
                            i._p6 = void 0,
                            i._p7 = void 0,
                            i._p8 = void 0,
                            i._p9 = void 0,
                            i._p10 = void 0,
                            i._p11 = void 0,
                            i._p12 = void 0,
                            i._p13 = void 0,
                            i._p14 = void 0,
                            i._p15 = void 0,
                            i._p16 = void 0,
                            i._p17 = void 0,
                            i._p18 = void 0,
                            i._p19 = void 0,
                            i._p20 = void 0,
                            i._p21 = void 0,
                            i._p22 = void 0,
                            i
                    }
                    return i(e, t),
                        r(e, [{
                            key: "p1",
                            get: function() {
                                return this._p1 || (this._p1 = new u(this.getChildByName("p1"))),
                                    this._p1
                            }
                        }, {
                            key: "p2",
                            get: function() {
                                return this._p2 || (this._p2 = new u(this.getChildByName("p2"))),
                                    this._p2
                            }
                        }, {
                            key: "p3",
                            get: function() {
                                return this._p3 || (this._p3 = new u(this.getChildByName("p3"))),
                                    this._p3
                            }
                        }, {
                            key: "p4",
                            get: function() {
                                return this._p4 || (this._p4 = new u(this.getChildByName("p4"))),
                                    this._p4
                            }
                        }, {
                            key: "p5",
                            get: function() {
                                return this._p5 || (this._p5 = new u(this.getChildByName("p5"))),
                                    this._p5
                            }
                        }, {
                            key: "p6",
                            get: function() {
                                return this._p6 || (this._p6 = new u(this.getChildByName("p6"))),
                                    this._p6
                            }
                        }, {
                            key: "p7",
                            get: function() {
                                return this._p7 || (this._p7 = new u(this.getChildByName("p7"))),
                                    this._p7
                            }
                        }, {
                            key: "p8",
                            get: function() {
                                return this._p8 || (this._p8 = new u(this.getChildByName("p8"))),
                                    this._p8
                            }
                        }, {
                            key: "p9",
                            get: function() {
                                return this._p9 || (this._p9 = new u(this.getChildByName("p9"))),
                                    this._p9
                            }
                        }, {
                            key: "p10",
                            get: function() {
                                return this._p10 || (this._p10 = new u(this.getChildByName("p10"))),
                                    this._p10
                            }
                        }, {
                            key: "p11",
                            get: function() {
                                return this._p11 || (this._p11 = new u(this.getChildByName("p11"))),
                                    this._p11
                            }
                        }, {
                            key: "p12",
                            get: function() {
                                return this._p12 || (this._p12 = new u(this.getChildByName("p12"))),
                                    this._p12
                            }
                        }, {
                            key: "p13",
                            get: function() {
                                return this._p13 || (this._p13 = new u(this.getChildByName("p13"))),
                                    this._p13
                            }
                        }, {
                            key: "p14",
                            get: function() {
                                return this._p14 || (this._p14 = new u(this.getChildByName("p14"))),
                                    this._p14
                            }
                        }, {
                            key: "p15",
                            get: function() {
                                return this._p15 || (this._p15 = new u(this.getChildByName("p15"))),
                                    this._p15
                            }
                        }, {
                            key: "p16",
                            get: function() {
                                return this._p16 || (this._p16 = new u(this.getChildByName("p16"))),
                                    this._p16
                            }
                        }, {
                            key: "p17",
                            get: function() {
                                return this._p17 || (this._p17 = new u(this.getChildByName("p17"))),
                                    this._p17
                            }
                        }, {
                            key: "p18",
                            get: function() {
                                return this._p18 || (this._p18 = new u(this.getChildByName("p18"))),
                                    this._p18
                            }
                        }, {
                            key: "p19",
                            get: function() {
                                return this._p19 || (this._p19 = new u(this.getChildByName("p19"))),
                                    this._p19
                            }
                        }, {
                            key: "p20",
                            get: function() {
                                return this._p20 || (this._p20 = new u(this.getChildByName("p20"))),
                                    this._p20
                            }
                        }, {
                            key: "p21",
                            get: function() {
                                return this._p21 || (this._p21 = new u(this.getChildByName("p21"))),
                                    this._p21
                            }
                        }, {
                            key: "p22",
                            get: function() {
                                return this._p22 || (this._p22 = new u(this.getChildByName("p22"))),
                                    this._p22
                            }
                        }]),
                        e
                }(u)
                    , w = function(t) {
                    function e() {
                        for (var i, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._btnReset = void 0,
                            i._btnFilter = void 0,
                            i._textInput = void 0,
                            i._searchBtn = void 0,
                            i._propertyBtn = void 0,
                            i._txtCurSelect = void 0,
                            i._propertyIcon = void 0,
                            i._filterBar = void 0,
                            i._textShowBar = void 0,
                            i._groupIconBar = void 0,
                            i._equipmentIconBar = void 0,
                            i._searchIconBar = void 0,
                            i
                    }
                    return i(e, t),
                        e.prototype.propertyIconCallBack = function(t, i) {
                            t <= 21 ? (this.propertyIcon.scaleX = .5,
                                this.propertyIcon.scaleY = .5) : (this.propertyIcon.scaleX = 1,
                                this.propertyIcon.scaleY = 1)
                        }
                        ,
                        r(e, [{
                            key: "btnReset",
                            get: function() {
                                return this._btnReset || (this._btnReset = new u(this.getChildByName("btnReset"))),
                                    this._btnReset
                            }
                        }, {
                            key: "btnFilter",
                            get: function() {
                                return this._btnFilter || (this._btnFilter = new u(this.getChildByName("btnFilter"))),
                                    this._btnFilter
                            }
                        }, {
                            key: "textInput",
                            get: function() {
                                return this._textInput || (this._textInput = new u(this.getChildByName("textInput"))),
                                    this._textInput
                            }
                        }, {
                            key: "searchBtn",
                            get: function() {
                                return this._searchBtn || (this._searchBtn = new u(this.getChildByName("searchBtn"))),
                                    this._searchBtn
                            }
                        }, {
                            key: "propertyBtn",
                            get: function() {
                                return this._propertyBtn || (this._propertyBtn = new u(this.getChildByName("propertyBtn"))),
                                    this._propertyBtn
                            }
                        }, {
                            key: "txtCurSelect",
                            get: function() {
                                return this._txtCurSelect || (this._txtCurSelect = new l(this.getChildByName("txtCurSelect"))),
                                    this._txtCurSelect
                            }
                        }, {
                            key: "propertyIcon",
                            get: function() {
                                return this._propertyIcon || (this._propertyIcon = new u(this.getChildByName("propertyIcon")),
                                    this._propertyIcon.addComponent(B).callback = this.propertyIconCallBack.bind(this)),
                                    this._propertyIcon
                            }
                        }, {
                            key: "filterBar",
                            get: function() {
                                return this._filterBar || (this._filterBar = new N(this.getChildByName("filterBar"))),
                                    this._filterBar
                            }
                        }, {
                            key: "textShowBar",
                            get: function() {
                                return this._textShowBar || (this._textShowBar = new C(this.getChildByName("textShowBar"))),
                                    this._textShowBar
                            }
                        }, {
                            key: "groupIconBar",
                            get: function() {
                                return this._groupIconBar || (this._groupIconBar = new v(this.getChildByName("groupIconBar"))),
                                    this._groupIconBar
                            }
                        }, {
                            key: "equipmentIconBar",
                            get: function() {
                                return this._equipmentIconBar || (this._equipmentIconBar = new I(this.getChildByName("equipmentIconBar"))),
                                    this._equipmentIconBar
                            }
                        }, {
                            key: "searchIconBar",
                            get: function() {
                                return this._searchIconBar || (this._searchIconBar = new T(this.getChildByName("searchIconBar"))),
                                    this._searchIconBar
                            }
                        }]),
                        e
                }(u);
                n._RF.pop()
            }
        }
    }
));
