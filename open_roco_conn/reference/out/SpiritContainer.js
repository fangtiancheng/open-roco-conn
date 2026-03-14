System.register("chunks:///_virtual/SpiritContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./NodeExtendEx.ts", "./FilterFactory.ts", "./ResManager.ts", "./FrameEvent.ts", "./SearchData.ts", "./SpiritStorageSpiritIcon.ts", "./WidgetAdapter.ts"], (function(i) {
        var t, s, n, e, h, a, o, r, c, l, E, u, f, _;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    s = i.createClass
            }
                , function(i) {
                    n = i.cclegacy,
                        e = i.instantiate,
                        h = i.NodeEventType
                }
                , function(i) {
                    a = i.__global
                }
                , function(i) {
                    o = i.AgentNode
                }
                , function(i) {
                    r = i.NodeExtendEx
                }
                , function(i) {
                    c = i.FilterFactory
                }
                , function(i) {
                    l = i.default
                }
                , function(i) {
                    E = i.default
                }
                , function(i) {
                    u = i.SearchData
                }
                , function(i) {
                    f = i.SpiritStorageSpiritIcon
                }
                , function(i) {
                    _ = i.WidgetAdapter
                }
            ],
            execute: function() {
                n._RF.push({}, "30a40uSE4RBdrqbirZoChLv", "SpiritContainer", void 0),
                    i("SpiritContainer", function(i) {
                        t(o, i);
                        var n = o.prototype;
                        function o(t) {
                            var s;
                            (s = i.call(this) || this).mainBar = void 0,
                                s.canbutton = !0,
                                s.i1 = void 0,
                                s.i2 = void 0,
                                s.i3 = void 0,
                                s.i4 = void 0,
                                s.i5 = void 0,
                                s.i6 = void 0,
                                s.i7 = void 0,
                                s.i8 = void 0,
                                s.i9 = void 0,
                                s.i10 = void 0,
                                s.i11 = void 0,
                                s.i12 = void 0,
                                s.i13 = void 0,
                                s.i14 = void 0,
                                s.i15 = void 0,
                                s.i16 = void 0,
                                s.currentPage = 1,
                                s.maxPage = 1,
                                s.par = void 0,
                                s.containerElementsOk = !1,
                                s._counter = 0,
                                s._curItem = null,
                                s._offset = 60,
                                s._preVisible = !0,
                                s.addComponent(_),
                                s.par = t;
                            var n = l.Instance.getPrefabByName(s.exportLink);
                            return s.initView(n),
                                s
                        }
                        return n.dispose = function() {}
                            ,
                            n.onInit = function() {
                                this.mainBar = new m(this._view),
                                    this.addChild(this.mainBar.target),
                                    this.mainBar.txt.text = "";
                                for (var i = 1, t = 76, s = -68, n = 0; n < 4; n++) {
                                    for (var h = 0; h < 4; h++) {
                                        var a = e(this.par.spiritIconPrefab);
                                        this["i" + i] = new f(this.par,a),
                                            this.mainBar.ballLayer.addChild(a),
                                            this["i" + i].setPosition(t, s),
                                            this["i" + i].visible = !0,
                                            this["i" + i].buttonMode = !0,
                                            this["i" + i].useHandCursor = !0,
                                            t += 144,
                                            i++
                                    }
                                    t = 76,
                                        s -= 140
                                }
                                this.setBgStyleByArr([0, 0, 0])
                            }
                            ,
                            n.afterLoaded = function() {
                                this.init1()
                            }
                            ,
                            n.init = function() {}
                            ,
                            n.init1 = function() {
                                if (this._isInit) {
                                    this.mainBar.rightBtn.on(h.TOUCH_END, this.rightBtnaction, this),
                                        this.mainBar.leftBtn.on(h.TOUCH_END, this.leftBtnaction, this),
                                        this.mainBar.oneBtn.on(h.TOUCH_END, this.oneBtnaction, this),
                                        this.mainBar.maxBtn.on(h.TOUCH_END, this.maxBtnaction, this),
                                        this.i1.on(h.MOUSE_ENTER, this.i1overaction, this),
                                        this.i2.on(h.MOUSE_ENTER, this.i2overaction, this),
                                        this.i3.on(h.MOUSE_ENTER, this.i3overaction, this),
                                        this.i4.on(h.MOUSE_ENTER, this.i4overaction, this),
                                        this.i5.on(h.MOUSE_ENTER, this.i5overaction, this),
                                        this.i6.on(h.MOUSE_ENTER, this.i6overaction, this),
                                        this.i7.on(h.MOUSE_ENTER, this.i7overaction, this),
                                        this.i8.on(h.MOUSE_ENTER, this.i8overaction, this),
                                        this.i9.on(h.MOUSE_ENTER, this.i9overaction, this),
                                        this.i10.on(h.MOUSE_ENTER, this.i10overaction, this),
                                        this.i11.on(h.MOUSE_ENTER, this.i11overaction, this),
                                        this.i12.on(h.MOUSE_ENTER, this.i12overaction, this),
                                        this.i13.on(h.MOUSE_ENTER, this.i13overaction, this),
                                        this.i14.on(h.MOUSE_ENTER, this.i14overaction, this),
                                        this.i15.on(h.MOUSE_ENTER, this.i15overaction, this),
                                        this.i16.on(h.MOUSE_ENTER, this.i16overaction, this),
                                        this.i1.on(h.MOUSE_LEAVE, this.i1outaction, this),
                                        this.i2.on(h.MOUSE_LEAVE, this.i2outaction, this),
                                        this.i3.on(h.MOUSE_LEAVE, this.i3outaction, this),
                                        this.i4.on(h.MOUSE_LEAVE, this.i4outaction, this),
                                        this.i5.on(h.MOUSE_LEAVE, this.i5outaction, this),
                                        this.i6.on(h.MOUSE_LEAVE, this.i6outaction, this),
                                        this.i7.on(h.MOUSE_LEAVE, this.i7outaction, this),
                                        this.i8.on(h.MOUSE_LEAVE, this.i8outaction, this),
                                        this.i9.on(h.MOUSE_LEAVE, this.i9outaction, this),
                                        this.i10.on(h.MOUSE_LEAVE, this.i10outaction, this),
                                        this.i11.on(h.MOUSE_LEAVE, this.i11outaction, this),
                                        this.i12.on(h.MOUSE_LEAVE, this.i12outaction, this),
                                        this.i13.on(h.MOUSE_LEAVE, this.i13outaction, this),
                                        this.i14.on(h.MOUSE_LEAVE, this.i14outaction, this),
                                        this.i15.on(h.MOUSE_LEAVE, this.i15outaction, this),
                                        this.i16.on(h.MOUSE_LEAVE, this.i16outaction, this);
                                    for (var i = 0; i < 16; i++)
                                        this["i" + (i + 1)].on(h.TOUCH_END, this.ixaction, this);
                                    this.addEventListener(E.ENTER_FRAME, this.thisaction, this)
                                }
                            }
                            ,
                            n.setBgStyleByArr = function(i) {}
                            ,
                            n.thisaction = function(i) {
                                var t = 1;
                                this.containerElementsOk = !0;
                                for (var s = 0; s < 12; s++) {
                                    if (0 == this["i" + t].loaded)
                                        return void (this.containerElementsOk = !1);
                                    t++
                                }
                            }
                            ,
                            n.i1overaction = function(i) {
                                this.i1.scaleX = this.i1.scaleY = 1.2
                            }
                            ,
                            n.i2overaction = function(i) {
                                this.i2.scaleX = this.i2.scaleY = 1.2
                            }
                            ,
                            n.i3overaction = function(i) {
                                this.i3.scaleX = this.i3.scaleY = 1.2
                            }
                            ,
                            n.i4overaction = function(i) {
                                this.i4.scaleX = this.i4.scaleY = 1.2
                            }
                            ,
                            n.i5overaction = function(i) {
                                this.i5.scaleX = this.i5.scaleY = 1.2
                            }
                            ,
                            n.i6overaction = function(i) {
                                this.i6.scaleX = this.i6.scaleY = 1.2
                            }
                            ,
                            n.i7overaction = function(i) {
                                this.i7.scaleX = this.i7.scaleY = 1.2
                            }
                            ,
                            n.i8overaction = function(i) {
                                this.i8.scaleX = this.i8.scaleY = 1.2
                            }
                            ,
                            n.i9overaction = function(i) {
                                this.i9.scaleX = this.i9.scaleY = 1.2
                            }
                            ,
                            n.i10overaction = function(i) {
                                this.i10.scaleX = this.i10.scaleY = 1.2
                            }
                            ,
                            n.i11overaction = function(i) {
                                this.i11.scaleX = this.i11.scaleY = 1.2
                            }
                            ,
                            n.i12overaction = function(i) {
                                this.i12.scaleX = this.i12.scaleY = 1.2
                            }
                            ,
                            n.i13overaction = function(i) {
                                this.i13.scaleX = this.i13.scaleY = 1.2
                            }
                            ,
                            n.i14overaction = function(i) {
                                this.i14.scaleX = this.i14.scaleY = 1.2
                            }
                            ,
                            n.i15overaction = function(i) {
                                this.i15.scaleX = this.i15.scaleY = 1.2
                            }
                            ,
                            n.i16overaction = function(i) {
                                this.i16.scaleX = this.i16.scaleY = 1.2
                            }
                            ,
                            n.i1outaction = function(i) {
                                this.i1.scaleX = this.i1.scaleY = 1
                            }
                            ,
                            n.i2outaction = function(i) {
                                this.i2.scaleX = this.i2.scaleY = 1
                            }
                            ,
                            n.i3outaction = function(i) {
                                this.i3.scaleX = this.i3.scaleY = 1
                            }
                            ,
                            n.i4outaction = function(i) {
                                this.i4.scaleX = this.i4.scaleY = 1
                            }
                            ,
                            n.i5outaction = function(i) {
                                this.i5.scaleX = this.i5.scaleY = 1
                            }
                            ,
                            n.i6outaction = function(i) {
                                this.i6.scaleX = this.i6.scaleY = 1
                            }
                            ,
                            n.i7outaction = function(i) {
                                this.i7.scaleX = this.i7.scaleY = 1
                            }
                            ,
                            n.i8outaction = function(i) {
                                this.i8.scaleX = this.i8.scaleY = 1
                            }
                            ,
                            n.i9outaction = function(i) {
                                this.i9.scaleX = this.i9.scaleY = 1
                            }
                            ,
                            n.i10outaction = function(i) {
                                this.i10.scaleX = this.i10.scaleY = 1
                            }
                            ,
                            n.i11outaction = function(i) {
                                this.i11.scaleX = this.i11.scaleY = 1
                            }
                            ,
                            n.i12outaction = function(i) {
                                this.i12.scaleX = this.i12.scaleY = 1
                            }
                            ,
                            n.i13outaction = function(i) {
                                this.i13.scaleX = this.i13.scaleY = 1
                            }
                            ,
                            n.i14outaction = function(i) {
                                this.i14.scaleX = this.i14.scaleY = 1
                            }
                            ,
                            n.i15outaction = function(i) {
                                this.i15.scaleX = this.i15.scaleY = 1
                            }
                            ,
                            n.i16outaction = function(i) {
                                this.i16.scaleX = this.i16.scaleY = 1
                            }
                            ,
                            n.ixaction = function(i) {
                                console.log("ixaction============" + i.currentTarget.name),
                                this._curItem && (this._curItem.select = !1),
                                    this._curItem = i.currentTarget.agent,
                                    this._curItem.select = !0;
                                var t = i.currentTarget.agent;
                                null != t.thisid && (u.tempSpiritId == t.thisid && u.tempSpiritTime == t.getTime || (u.tempSpiritId = t.thisid,
                                    u.tempSpiritTime = t.getTime,
                                    u.tempSpiritName = t.sName,
                                    u.tempSpiritTalentType = t.talentType,
                                    u.tempSpiritTalentLevel = t.talentLevel,
                                    u.tempSpiritSkinID = t.skinID,
                                    this.par.requestSPiritDetail(t.thisid, t.getTime),
                                    this.par.setIdle()))
                            }
                            ,
                            n.rightBtnaction = function(i) {
                                0 != this.mainBar.rightBtn.enableTag && (console.log("rightBtnaction"),
                                this.currentPage < this.maxPage && this.containerElementsOk && (this.currentPage++,
                                    this.refresh()))
                            }
                            ,
                            n.leftBtnaction = function(i) {
                                0 != this.mainBar.leftBtn.enableTag && (console.log("leftBtnaction"),
                                this.currentPage > 1 && this.containerElementsOk && (this.currentPage -= 1,
                                    this.refresh()))
                            }
                            ,
                            n.oneBtnaction = function(i) {
                                0 != this.mainBar.oneBtn.enableTag && (console.log("oneBtnaction"),
                                this.currentPage > 1 && this.containerElementsOk && (this.currentPage = 1,
                                    this.refresh()))
                            }
                            ,
                            n.maxBtnaction = function(i) {
                                0 != this.mainBar.maxBtn.enableTag && (console.log("maxBtnaction"),
                                this.currentPage < this.maxPage && this.containerElementsOk && (this.currentPage = this.maxPage,
                                    this.refresh()))
                            }
                            ,
                            n.refresh = function() {
                                var i = this.maxPage;
                                u.searchedSpirits.length % o.ONE_PAGE_COUNT == 0 && 0 != u.searchedSpirits.length || (this.maxPage = Math.floor(u.searchedSpirits.length / o.ONE_PAGE_COUNT) + 1),
                                u.searchedSpirits.length % o.ONE_PAGE_COUNT == 0 && 0 != u.searchedSpirits.length && (this.maxPage = Math.floor(u.searchedSpirits.length / o.ONE_PAGE_COUNT)),
                                this.maxPage != i && (this.currentPage = 1),
                                    this.mainBar.txt.text = this.currentPage + "/" + this.maxPage,
                                    c.setAshingFilter(this.mainBar.leftBtn, !0),
                                    c.setAshingFilter(this.mainBar.rightBtn, !0),
                                    c.setAshingFilter(this.mainBar.oneBtn, !0),
                                    c.setAshingFilter(this.mainBar.maxBtn, !0),
                                    1 == this.currentPage ? (c.setAshingFilter(this.mainBar.leftBtn, !1),
                                        c.setAshingFilter(this.mainBar.oneBtn, !1)) : this.currentPage == this.maxPage && (c.setAshingFilter(this.mainBar.rightBtn, !1),
                                        c.setAshingFilter(this.mainBar.maxBtn, !1)),
                                this._curItem && (this._curItem.select = !1),
                                    this._curItem = this.i1,
                                    this._curItem.select = !0;
                                var t = 1
                                    , s = (this.currentPage - 1) * o.ONE_PAGE_COUNT;
                                null != u.searchedSpirits[s] && (u.tempSpiritId = u.searchedSpirits[s].id,
                                    u.tempSpiritTime = u.searchedSpirits[s].catchTime,
                                    u.tempSpiritName = u.searchedSpirits[s].spiritDes.name,
                                    u.tempSpiritTalentType = u.searchedSpirits[s].talentType,
                                    u.tempSpiritTalentLevel = u.searchedSpirits[s].talentLevel,
                                    u.tempSpiritSkinID = u.searchedSpirits[s].skinID);
                                for (var n = 0; n < 16; n++) {
                                    if (this["i" + t].visible = !0,
                                    null != u.searchedSpirits[s]) {
                                        if (null == u.searchedSpirits[s].spiritDes) {
                                            a.SysAPI.getUISysAPI().commUIManager.alert("", "找不到" + u.searchedSpirits[s].id + "宠物的配置");
                                            break
                                        }
                                        this["i" + t].getTime = u.searchedSpirits[s].catchTime,
                                            this["i" + t].sName = u.searchedSpirits[s].spiritDes.name,
                                            this["i" + t].talentType = u.searchedSpirits[s].talentType,
                                            this["i" + t].talentLevel = u.searchedSpirits[s].talentLevel,
                                            this["i" + t].skinID = u.searchedSpirits[s].skinID,
                                            this["i" + t].iconmc.nameTxt.text = u.searchedSpirits[s].spiritDes.name,
                                            this["i" + t].thisid = u.searchedSpirits[s].id,
                                            0 != u.searchedSpirits[s].skinID ? this["i" + t].getABitmap(u.searchedSpirits[s].skinID) : this["i" + t].getABitmap(u.searchedSpirits[s].id)
                                    } else
                                        this["i" + t].visible = !1;
                                    t++,
                                        s++
                                }
                                this.par.refreshInformationBar()
                            }
                            ,
                            n.del = function() {
                                this.mainBar.rightBtn.off(h.TOUCH_END, this.rightBtnaction, this),
                                    this.mainBar.leftBtn.off(h.TOUCH_END, this.leftBtnaction, this),
                                    this.mainBar.oneBtn.off(h.TOUCH_END, this.oneBtnaction, this),
                                    this.mainBar.maxBtn.off(h.TOUCH_END, this.maxBtnaction, this),
                                    this.removeEventListener(E.ENTER_FRAME, this.thisaction, this),
                                    this.i1.off(h.MOUSE_ENTER, this.i1overaction, this),
                                    this.i2.off(h.MOUSE_ENTER, this.i2overaction, this),
                                    this.i3.off(h.MOUSE_ENTER, this.i3overaction, this),
                                    this.i4.off(h.MOUSE_ENTER, this.i4overaction, this),
                                    this.i5.off(h.MOUSE_ENTER, this.i5overaction, this),
                                    this.i6.off(h.MOUSE_ENTER, this.i6overaction, this),
                                    this.i7.off(h.MOUSE_ENTER, this.i7overaction, this),
                                    this.i8.off(h.MOUSE_ENTER, this.i8overaction, this),
                                    this.i9.off(h.MOUSE_ENTER, this.i9overaction, this),
                                    this.i10.off(h.MOUSE_ENTER, this.i10overaction, this),
                                    this.i11.off(h.MOUSE_ENTER, this.i11overaction, this),
                                    this.i12.off(h.MOUSE_ENTER, this.i12overaction, this),
                                    this.i13.off(h.MOUSE_ENTER, this.i13overaction, this),
                                    this.i14.off(h.MOUSE_ENTER, this.i14overaction, this),
                                    this.i15.off(h.MOUSE_ENTER, this.i15overaction, this),
                                    this.i16.off(h.MOUSE_ENTER, this.i16overaction, this),
                                    this.i1.off(h.MOUSE_LEAVE, this.i1outaction, this),
                                    this.i2.off(h.MOUSE_LEAVE, this.i2outaction, this),
                                    this.i3.off(h.MOUSE_LEAVE, this.i3outaction, this),
                                    this.i4.off(h.MOUSE_LEAVE, this.i4outaction, this),
                                    this.i5.off(h.MOUSE_LEAVE, this.i5outaction, this),
                                    this.i6.off(h.MOUSE_LEAVE, this.i6outaction, this),
                                    this.i7.off(h.MOUSE_LEAVE, this.i7outaction, this),
                                    this.i8.off(h.MOUSE_LEAVE, this.i8outaction, this),
                                    this.i9.off(h.MOUSE_LEAVE, this.i9outaction, this),
                                    this.i10.off(h.MOUSE_LEAVE, this.i10outaction, this),
                                    this.i11.off(h.MOUSE_LEAVE, this.i11outaction, this),
                                    this.i12.off(h.MOUSE_LEAVE, this.i12outaction, this),
                                    this.i13.off(h.MOUSE_LEAVE, this.i13outaction, this),
                                    this.i14.off(h.MOUSE_LEAVE, this.i14outaction, this),
                                    this.i15.off(h.MOUSE_LEAVE, this.i15outaction, this),
                                    this.i16.off(h.MOUSE_LEAVE, this.i16outaction, this);
                                for (var i = 0; i < 16; i++)
                                    this["i" + (i + 1)].off(h.TOUCH_END, this.ixaction, this);
                                this.i1.del(),
                                    this.i2.del(),
                                    this.i3.del(),
                                    this.i4.del(),
                                    this.i5.del(),
                                    this.i6.del(),
                                    this.i7.del(),
                                    this.i8.del(),
                                    this.i9.del(),
                                    this.i10.del(),
                                    this.i11.del(),
                                    this.i12.del(),
                                    this.i13.del(),
                                    this.i14.del(),
                                    this.i15.del(),
                                    this.i16.del(),
                                    this.i1 = null,
                                    this.i2 = null,
                                    this.i3 = null,
                                    this.i4 = null,
                                    this.i5 = null,
                                    this.i6 = null,
                                    this.i7 = null,
                                    this.i8 = null,
                                    this.i9 = null,
                                    this.i10 = null,
                                    this.i11 = null,
                                    this.i12 = null,
                                    this.i13 = null,
                                    this.i14 = null,
                                    this.i15 = null,
                                    this.i16 = null,
                                    this.mainBar = null
                            }
                            ,
                            n.setTxtCurCapacityVisible = function(i) {
                                this.mainBar.txtCurCapacity.visible = i,
                                    this.mainBar.mcCapacity.visible = i,
                                    i ? this._preVisible || (this.mainBar.leftBtn.x += this._offset,
                                        this.mainBar.rightBtn.x += this._offset,
                                        this.mainBar.oneBtn.x += this._offset,
                                        this.mainBar.maxBtn.x += this._offset,
                                        this.mainBar.txt.x += this._offset,
                                        this.mainBar.mcTxtBackground.x += this._offset) : this._preVisible && (this.mainBar.leftBtn.x -= this._offset,
                                        this.mainBar.rightBtn.x -= this._offset,
                                        this.mainBar.oneBtn.x -= this._offset,
                                        this.mainBar.maxBtn.x -= this._offset,
                                        this.mainBar.txt.x -= this._offset,
                                        this.mainBar.mcTxtBackground.x -= this._offset),
                                    this._preVisible = i
                            }
                            ,
                            s(o, [{
                                key: "resBundleKey",
                                get: function() {
                                    return "gui"
                                }
                            }, {
                                key: "exportLink",
                                get: function() {
                                    return "spriteStore/SpiritContainerUI_1600"
                                }
                            }, {
                                key: "curCapacity",
                                set: function(i) {
                                    this.setTxtCurCapacityVisible(!0),
                                        this.mainBar.txtCurCapacity.text = i
                                }
                            }]),
                            o
                    }(r)).ONE_PAGE_COUNT = 16;
                var m = function(i) {
                    function n() {
                        for (var t, s = arguments.length, n = new Array(s), e = 0; e < s; e++)
                            n[e] = arguments[e];
                        return (t = i.call.apply(i, [this].concat(n)) || this)._txt = void 0,
                            t._txtCurCapacity = void 0,
                            t._ballLayer = void 0,
                            t._bg = void 0,
                            t._leftBtn = void 0,
                            t._rightBtn = void 0,
                            t._oneBtn = void 0,
                            t._maxBtn = void 0,
                            t._spiriLlistBg = void 0,
                            t._mcCapacity = void 0,
                            t._mcTxtBackground = void 0,
                            t
                    }
                    return t(n, i),
                        s(n, [{
                            key: "txt",
                            get: function() {
                                return this._txt || (this._txt = new o(this.getChildByName("txt"))),
                                    this._txt
                            }
                        }, {
                            key: "txtCurCapacity",
                            get: function() {
                                return this._txtCurCapacity || (this._txtCurCapacity = new o(this.getChildByName("txtCurCapacity"))),
                                    this._txtCurCapacity
                            }
                        }, {
                            key: "ballLayer",
                            get: function() {
                                return this._ballLayer || (this._ballLayer = this.getChildByName("ballLayer")),
                                    this._ballLayer
                            }
                        }, {
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = this.getChildByName("bg")),
                                    this._bg
                            }
                        }, {
                            key: "leftBtn",
                            get: function() {
                                return this._leftBtn || (this._leftBtn = new o(this.getChildByName("leftBtn"))),
                                    this._leftBtn
                            }
                        }, {
                            key: "rightBtn",
                            get: function() {
                                return this._rightBtn || (this._rightBtn = new o(this.getChildByName("rightBtn"))),
                                    this._rightBtn
                            }
                        }, {
                            key: "oneBtn",
                            get: function() {
                                return this._oneBtn || (this._oneBtn = new o(this.getChildByName("oneBtn"))),
                                    this._oneBtn
                            }
                        }, {
                            key: "maxBtn",
                            get: function() {
                                return this._maxBtn || (this._maxBtn = new o(this.getChildByName("maxBtn"))),
                                    this._maxBtn
                            }
                        }, {
                            key: "spiriLlistBg",
                            get: function() {
                                return this._spiriLlistBg || (this._spiriLlistBg = this.getChildByName("spiriLlistBg")),
                                    this._spiriLlistBg
                            }
                        }, {
                            key: "mcCapacity",
                            get: function() {
                                return this._mcCapacity || (this._mcCapacity = new o(this.getChildByName("mcCapacity"))),
                                    this._mcCapacity
                            }
                        }, {
                            key: "mcTxtBackground",
                            get: function() {
                                return this._mcTxtBackground || (this._mcTxtBackground = new o(this.getChildByName("mcTxtBackground"))),
                                    this._mcTxtBackground
                            }
                        }]),
                        n
                }(o);
                n._RF.pop()
            }
        }
    }
));
