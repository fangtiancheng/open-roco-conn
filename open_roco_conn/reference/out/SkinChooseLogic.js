System.register("chunks:///_virtual/SkinChooseLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./DEFINE.ts", "./global.ts", "./SpiritSkinDes.ts", "./OpenAsWinDes.ts", "./AImage.ts", "./AgentNode.ts", "./WindowMode.ts", "./WindowResult.ts", "./CFunction.ts", "./FilterFactory.ts", "./CGIEvent.ts", "./CGILoader.ts", "./BuildLogHelper.ts", "./DataProxy.ts", "./BagDataProxy.ts", "./NetActionProxy.ts", "./NetResult.ts", "./SpiritBagRefProxy.ts"], (function(i) {
        var t, e, s, n, o, r, h, c, a, l, _, u, d, m, y, g, S, v, f, p, k, I, A, N;
        return {
            setters: [function(i) {
                t = i.createClass,
                    e = i.inheritsLoose
            }
                , function(i) {
                    s = i.cclegacy,
                        n = i.Vec2,
                        o = i.NodeEventType
                }
                , function(i) {
                    r = i.Constants
                }
                , function(i) {
                    h = i.DEFINE
                }
                , function(i) {
                    c = i.__global
                }
                , function(i) {
                    a = i.SpiritSkinDes
                }
                , function(i) {
                    l = i.OpenAsWinDes
                }
                , function(i) {
                    _ = i.AImage
                }
                , function(i) {
                    u = i.AgentNode
                }
                , function(i) {
                    d = i.WindowMode
                }
                , function(i) {
                    m = i.WindowResult
                }
                , function(i) {
                    y = i.CFunction
                }
                , function(i) {
                    g = i.FilterFactory
                }
                , function(i) {
                    S = i.CGIEvent
                }
                , function(i) {
                    v = i.CGILoader
                }
                , function(i) {
                    f = i.default
                }
                , function(i) {
                    p = i.DataProxy
                }
                , function(i) {
                    k = i.BagDataProxy
                }
                , function(i) {
                    I = i.NetActionProxy
                }
                , function(i) {
                    A = i.NetResult
                }
                , function(i) {
                    N = i.SpiritBagRefProxy
                }
            ],
            execute: function() {
                s._RF.push({}, "ea301D2HrFAkINtYxXkAlti", "SkinChooseLogic", void 0),
                    i("SkinChooseLogic", function() {
                        var i = e.prototype;
                        function e(i) {
                            this._root = void 0,
                                this._eyeMask = void 0,
                                this.m_res = void 0,
                                this.iconImage0 = void 0,
                                this.iconImage1 = void 0,
                                this.iconImage2 = void 0,
                                this.iconImage3 = void 0,
                                this.iconImage4 = void 0,
                                this.iconImage5 = void 0,
                                this._currentIndex = void 0,
                                this._currentSkinID = 0,
                                this._dataXml = void 0,
                                this._curPage = 0,
                                this._skinArr = [],
                                this._lightArr = [],
                                this._loader = void 0,
                                this._curSpiritData = void 0,
                                this._root = i,
                                this._eyeMask = i.getChildByName("eyeMask"),
                                this._eyeMask.active = !1,
                                this.m_res = new C(i.getChildByName("root")),
                                this.m_res.visible = !1,
                                this.m_res.btnSave.on(o.TOUCH_END, this.onSave, this),
                                this.m_res.eyeBtn.on(o.MOUSE_DOWN, this.onEyeMouseDown, this),
                                this.m_res.eyeBtn.on(o.MOUSE_UP, this.onEyeMouseUp, this),
                                this.m_res.txtName.text = "";
                            for (var t = 0; t < 6; t++) {
                                for (; this.m_res["icon" + t].container.numChildren > 0; )
                                    this.m_res["icon" + t].container.removeChildAt(0);
                                this.m_res["icon" + t].visible = !1,
                                    this.m_res["icon" + t].on(o.TOUCH_END, this.onChooseSkin, this),
                                    this.m_res["icon" + t].gotoAndStop(1),
                                    this.m_res["icon" + t].quality.visible = !1
                            }
                            this.iconImage0 = new _(86,86),
                                this.iconImage1 = new _(86,86),
                                this.iconImage2 = new _(86,86),
                                this.iconImage3 = new _(86,86),
                                this.iconImage4 = new _(86,86),
                                this.iconImage5 = new _(86,86),
                                this.m_res.icon0.container.addChild(this.iconImage0),
                                this.m_res.icon1.container.addChild(this.iconImage1),
                                this.m_res.icon2.container.addChild(this.iconImage2),
                                this.m_res.icon3.container.addChild(this.iconImage3),
                                this.m_res.icon4.container.addChild(this.iconImage4),
                                this.m_res.icon5.container.addChild(this.iconImage5),
                                this._loader = new v(h.CGI_ROOT + "roco_pet_skin",c.SysAPI.getNetSysAPI().createURLLoader(!0)),
                                this._loader.addEventListener(S.COMPLETE, this.onDataReceive, this),
                                this._loader.addEventListener(S.GOT_ERROR, this.onNetError, this)
                        }
                        return i.eyeShow = function(i) {}
                            ,
                            i.showTab = function(i) {
                                switch (this.m_res.visible = 4 == i,
                                    i) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        break;
                                    case 4:
                                        this.show()
                                }
                            }
                            ,
                            i.onEyeMouseDown = function(i) {}
                            ,
                            i.onEyeMouseUp = function(i) {}
                            ,
                            i.querySkin = function() {
                                this._loader.sendData("?cmd=0", {
                                    index: k.selectedIndex + 1
                                })
                            }
                            ,
                            i.saveSkinByindex = function(i) {
                                this._loader.sendData("?cmd=1", {
                                    skinindex: i,
                                    index: k.selectedIndex + 1
                                })
                            }
                            ,
                            i.onChooseSkin = function(i) {
                                this._currentIndex = 6 * this._curPage + Number(i.currentTarget.name.split("icon")[1]),
                                    this.onChooseSkinLogic(this._currentIndex)
                            }
                            ,
                            i.onChooseSkinLogic = function(i) {
                                var t = 0;
                                this._currentIndex = i;
                                for (var e = 0; e < 6; e++)
                                    6 * this._curPage + e == this._currentIndex ? (this.m_res["icon" + e].gotoAndStop(2),
                                        t = this.m_res["icon" + e].qualityNum,
                                        1 == this._lightArr[6 * this._curPage + e] ? (this.m_res.btnSave.visible = !0,
                                            g.setAshingFilter(this.m_res.btnSave, this._currentIndex != Number(this._dataXml.dressInfo))) : this.m_res.btnSave.visible = !1) : this.m_res["icon" + e].gotoAndStop(1);
                                this.setIdelShowByID(this._skinArr[this._currentIndex], t)
                            }
                            ,
                            i.setPageShow = function(i) {
                                var t, e, s, n, o, r;
                                6 * i < this._skinArr.length && (this._skinArr[6 * i + 0] == k.selectedSpirit.id ? (this.m_res.icon0.quality.visible = !1,
                                    this.iconImage0.setPath(p.getPetDes(k.selectedSpirit.id).iconSrc)) : (0 == (c = 0 | (null == (t = a.SpiritSkinTypes[this._skinArr[6 * i + 0]]) ? void 0 : t.quality)) ? this.m_res.icon0.quality.visible = !1 : (this.m_res.icon0.quality.visible = !0,
                                    this.m_res.icon0.quality.gotoAndStop(c)),
                                    this.m_res.icon0.qualityNum = c,
                                    this.iconImage0.setPath(h.COMM_ROOT + "res/combat/icons/" + this._skinArr[6 * i + 0] + "-.png")));
                                6 * i + 1 < this._skinArr.length && (this._skinArr[6 * i + 1] == k.selectedSpirit.id ? (this.m_res.icon1.quality.visible = !1,
                                    this.iconImage1.setPath(p.getPetDes(k.selectedSpirit.id).iconSrc)) : (0 == (c = 0 | (null == (e = a.SpiritSkinTypes[this._skinArr[6 * i + 1]]) ? void 0 : e.quality)) ? this.m_res.icon1.quality.visible = !1 : (this.m_res.icon1.quality.visible = !0,
                                    this.m_res.icon1.quality.gotoAndStop(c)),
                                    this.m_res.icon1.qualityNum = c,
                                    this.iconImage1.setPath(h.COMM_ROOT + "res/combat/icons/" + this._skinArr[6 * i + 1] + "-.png")));
                                6 * i + 2 < this._skinArr.length && (this._skinArr[6 * i + 2] == k.selectedSpirit.id ? (this.m_res.icon2.quality.visible = !1,
                                    this.iconImage2.setPath(p.getPetDes(k.selectedSpirit.id).iconSrc)) : (0 == (c = 0 | (null == (s = a.SpiritSkinTypes[this._skinArr[6 * i + 2]]) ? void 0 : s.quality)) ? this.m_res.icon2.quality.visible = !1 : (this.m_res.icon2.quality.visible = !0,
                                    this.m_res.icon2.quality.gotoAndStop(c)),
                                    this.m_res.icon2.qualityNum = c,
                                    this.iconImage2.setPath(h.COMM_ROOT + "res/combat/icons/" + this._skinArr[6 * i + 2] + "-.png")));
                                6 * i + 3 < this._skinArr.length && (this._skinArr[6 * i + 3] == k.selectedSpirit.id ? (this.m_res.icon3.quality.visible = !1,
                                    this.iconImage3.setPath(p.getPetDes(k.selectedSpirit.id).iconSrc)) : (0 == (c = 0 | (null == (n = a.SpiritSkinTypes[this._skinArr[6 * i + 3]]) ? void 0 : n.quality)) ? this.m_res.icon3.quality.visible = !1 : (this.m_res.icon3.quality.visible = !0,
                                    this.m_res.icon3.quality.gotoAndStop(c)),
                                    this.m_res.icon3.qualityNum = c,
                                    this.iconImage3.setPath(h.COMM_ROOT + "res/combat/icons/" + this._skinArr[6 * i + 3] + "-.png")));
                                6 * i + 4 < this._skinArr.length && (this._skinArr[6 * i + 4] == k.selectedSpirit.id ? (this.m_res.icon4.quality.visible = !1,
                                    this.iconImage4.setPath(p.getPetDes(k.selectedSpirit.id).iconSrc)) : (0 == (c = 0 | (null == (o = a.SpiritSkinTypes[this._skinArr[6 * i + 4]]) ? void 0 : o.quality)) ? this.m_res.icon4.quality.visible = !1 : (this.m_res.icon4.quality.visible = !0,
                                    this.m_res.icon4.quality.gotoAndStop(c)),
                                    this.m_res.icon4.qualityNum = c,
                                    this.iconImage4.setPath(h.COMM_ROOT + "res/combat/icons/" + this._skinArr[6 * i + 4] + "-.png")));
                                6 * i + 5 < this._skinArr.length && (this._skinArr[6 * i + 5] == k.selectedSpirit.id ? (this.m_res.icon5.quality.visible = !1,
                                    this.iconImage5.setPath(p.getPetDes(k.selectedSpirit.id).iconSrc)) : (0 == (c = 0 | (null == (r = a.SpiritSkinTypes[this._skinArr[6 * i + 5]]) ? void 0 : r.quality)) ? this.m_res.icon5.quality.visible = !1 : (this.m_res.icon5.quality.visible = !0,
                                    this.m_res.icon5.quality.gotoAndStop(c)),
                                    this.m_res.icon5.qualityNum = c,
                                    this.iconImage5.setPath(h.COMM_ROOT + "res/combat/icons/" + this._skinArr[6 * i + 5] + "-.png")));
                                for (var c = 0, l = 0; l < 6; l++)
                                    6 * i + l < this._skinArr.length ? (this.m_res["icon" + l].visible = !0,
                                        1 == this._lightArr[6 * i + l] ? (this.m_res["icon" + l].container.filters = [],
                                            this["iconImage" + l].filters = []) : (this.m_res["icon" + l].container.filters = [g.createGrayFilter()],
                                            this["iconImage" + l].filters = [g.createGrayFilter()]),
                                        6 * i + l == Number(this._dataXml.dressInfo) ? (this.m_res["icon" + l].gotoAndStop(2),
                                            c = this.m_res["icon" + l].qualityNum) : this.m_res["icon" + l].gotoAndStop(1)) : (this.m_res["icon" + l].visible = !1,
                                        this.m_res["icon" + l].quality.visible = !1,
                                        this.m_res["icon" + l].gotoAndStop(1));
                                this.setIdelShowByID(this._skinArr[6 * i + Number(this._dataXml.dressInfo) % 3], c),
                                    this.onChooseSkinLogic(this._currentIndex)
                            }
                            ,
                            i.setIdelShowByID = function(i, t) {
                                var e;
                                i == k.selectedSpirit.id ? this.m_res.txtName.text = k.selectedSpirit.name : this.m_res.txtName.text = (null == (e = a.SpiritSkinTypes[i]) ? void 0 : e.name) || i.toString();
                                0 == t ? this.m_res.quality.visible = !1 : (this.m_res.quality.visible = !0,
                                    this.m_res.quality.gotoAndStop(t)),
                                    this._currentSkinID = i,
                                    N.spiritBagPanel.setSpiritMCBySkin(i)
                            }
                            ,
                            i.onSave = function(i) {
                                this._dataXml && this._dataXml.dressInfo && this._currentIndex != Number(this._dataXml.dressInfo) && (1 == this._lightArr[this._currentIndex] ? this.saveSkinByindex(this._currentIndex) : c.UI.alert("", "未获得该宠物外观，是否前往商城？", d.OK_CANCEL, new y(this.onChooseResult,this)))
                            }
                            ,
                            i.onChooseResult = function(i) {
                                switch (i) {
                                    case m.OK:
                                        var t = new l;
                                        t.winPos = new n(0,0),
                                            t.name = "",
                                            t.src = "rocoShop/RocoShopApp",
                                            t.params = {
                                                pageIndexes: [11, 0],
                                                openType: 1
                                            },
                                            t.isModal = !0,
                                            t.cache = !1,
                                            c.openAsWin(t)
                                }
                            }
                            ,
                            i.show = function() {}
                            ,
                            i.setVisible = function(i) {
                                this._root.active = i
                            }
                            ,
                            i.onDataReceive = function(i) {
                                var t = i.data
                                    , e = new A(t);
                                if (e.value >= 0)
                                    switch (i.sendType) {
                                        case "?cmd=0":
                                            if (i.sendData.index != k.selectedIndex + 1)
                                                return;
                                            if (this._dataXml = t,
                                                this._skinArr = [],
                                                this._lightArr = [],
                                                this._skinArr.push(k.selectedSpirit.id),
                                                this._lightArr.push(1),
                                            1 == Number(t.haveskin))
                                                for (var s = 0; s < Number(t.skinNum); s++)
                                                    this._skinArr.push(1e5 + 10 * k.selectedSpirit.id + s),
                                                        this._lightArr.push(Number(t.light[s]));
                                            t.hasOwnProperty("dressInfo") || (t.dressInfo = "0"),
                                                this._currentIndex = Number(t.dressInfo),
                                                this._curPage = Math.floor(Number(t.dressInfo) / 6),
                                                this.setPageShow(this._curPage);
                                            break;
                                        case "?cmd=1":
                                            I.getSpiritBag()
                                    }
                                else
                                    1 == f.IS_LOCAL ? console.error("SkinChooseLogic==" + e.msg) : c.UI.alert("", e.msg)
                            }
                            ,
                            i.onNetError = function(i) {
                                c.UI.alert("", i.msg)
                            }
                            ,
                            e.getPlatfromStr = function() {
                                return "&platfrom=" + e.platformValue.toString()
                            }
                            ,
                            e.getSkeyStr = function() {
                                var i = c.SysAPI.getGDataAPI().getGlobalVal(r.CUR_SERVER_INFO)
                                    , t = "";
                                return i && (t = "&unkown=" + (i.pskey ? i.pskey : i.skey) + "&skey=" + i.skey),
                                    t
                            }
                            ,
                            i.hide = function() {
                                this.m_res.visible = !1
                            }
                            ,
                            i.dispose = function() {
                                this._curPage = 0,
                                    this.m_res.btnSave.off(o.TOUCH_END, this.onSave, this),
                                    this.m_res.eyeBtn.off(o.MOUSE_DOWN, this.onEyeMouseDown, this),
                                    this.m_res.eyeBtn.off(o.TOUCH_END, this.onEyeMouseUp, this);
                                for (var i = 0; i < 3; i++)
                                    this.m_res["icon" + i].off(o.TOUCH_END, this.onChooseSkin, this)
                            }
                            ,
                            t(e, [{
                                key: "data",
                                set: function(i) {
                                    this._curSpiritData = i,
                                        null == i || null == i ? this.setVisible(!1) : (this.querySkin(),
                                            this.setVisible(!0))
                                }
                            }], [{
                                key: "platformValue",
                                get: function() {
                                    return 1e4
                                }
                            }]),
                            e
                    }()).ONE_PAGE = 6;
                var b = function(i) {
                    function s() {
                        for (var t, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (t = i.call.apply(i, [this].concat(s)) || this)._qualityNum = 0,
                            t._container = void 0,
                            t._quality = void 0,
                            t
                    }
                    return e(s, i),
                        t(s, [{
                            key: "qualityNum",
                            get: function() {
                                return this._qualityNum
                            },
                            set: function(i) {
                                this._qualityNum = i
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new u(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "quality",
                            get: function() {
                                return this._quality || (this._quality = new u(this.getChildByName("quality"))),
                                    this._quality
                            }
                        }]),
                        s
                }(u)
                    , C = function(i) {
                    function s() {
                        for (var t, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (t = i.call.apply(i, [this].concat(s)) || this)._spC = void 0,
                            t._eyeBtn = void 0,
                            t._btnSave = void 0,
                            t._txtName = void 0,
                            t._quality = void 0,
                            t._icon0 = void 0,
                            t._icon1 = void 0,
                            t._icon2 = void 0,
                            t._icon3 = void 0,
                            t._icon4 = void 0,
                            t._icon5 = void 0,
                            t
                    }
                    return e(s, i),
                        t(s, [{
                            key: "spC",
                            get: function() {
                                return this._spC || (this._spC = new u(this.getChildByName("spC"))),
                                    this._spC
                            }
                        }, {
                            key: "eyeBtn",
                            get: function() {
                                return this._eyeBtn || (this._eyeBtn = new u(this.getChildByName("eyeBtn")),
                                    this._eyeBtn.visible = !1),
                                    this._eyeBtn
                            }
                        }, {
                            key: "btnSave",
                            get: function() {
                                return this._btnSave || (this._btnSave = new u(this.getChildByName("btnSave"))),
                                    this._btnSave
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new u(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }, {
                            key: "quality",
                            get: function() {
                                return this._quality || (this._quality = new u(this.getChildByName("quality"))),
                                    this._quality
                            }
                        }, {
                            key: "icon0",
                            get: function() {
                                return this._icon0 || (this._icon0 = new b(this.getChildByName("icon0"))),
                                    this._icon0
                            }
                        }, {
                            key: "icon1",
                            get: function() {
                                return this._icon1 || (this._icon1 = new b(this.getChildByName("icon1"))),
                                    this._icon1
                            }
                        }, {
                            key: "icon2",
                            get: function() {
                                return this._icon2 || (this._icon2 = new b(this.getChildByName("icon2"))),
                                    this._icon2
                            }
                        }, {
                            key: "icon3",
                            get: function() {
                                return this._icon3 || (this._icon3 = new b(this.getChildByName("icon3"))),
                                    this._icon3
                            }
                        }, {
                            key: "icon4",
                            get: function() {
                                return this._icon4 || (this._icon4 = new b(this.getChildByName("icon4"))),
                                    this._icon4
                            }
                        }, {
                            key: "icon5",
                            get: function() {
                                return this._icon5 || (this._icon5 = new b(this.getChildByName("icon5"))),
                                    this._icon5
                            }
                        }]),
                        s
                }(u);
                s._RF.pop()
            }
        }
    }
));
