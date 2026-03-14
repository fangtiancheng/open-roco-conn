System.register("chunks:///_virtual/TalentChooseUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./DEFINE.ts", "./global.ts", "./AImage.ts", "./NetResult.ts", "./AgentNode.ts", "./CGIEvent.ts", "./CGILoader.ts", "./TalentDes.ts", "./FilterFactory.ts", "./PureNotificationCenter.ts", "./BloodTalenMessage.ts", "./AppConstDef.ts"], (function(t) {
        var e, i, n, s, o, a, h, _, r, l, c, m, g, d, u, f, b, T;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    a = t.DEFINE
                }
                , function(t) {
                    h = t.__global
                }
                , function(t) {
                    _ = t.AImage
                }
                , function(t) {
                    r = t.NetResult
                }
                , function(t) {
                    l = t.AgentNode
                }
                , function(t) {
                    c = t.CGIEvent
                }
                , function(t) {
                    m = t.CGILoader
                }
                , function(t) {
                    g = t.TalentDes
                }
                , function(t) {
                    d = t.FilterFactory
                }
                , function(t) {
                    u = t.PureNotificationCenter
                }
                , function(t) {
                    f = t.MainViewPage,
                        b = t.BloodTalenMessage
                }
                , function(t) {
                    T = t.AppConstDef
                }
            ],
            execute: function() {
                n._RF.push({}, "21504xnS61C4ZenDq8S71bg", "TalentChooseUI", void 0);
                t("TalentChooseUI", function() {
                    function t(t) {
                        this.m_res = void 0,
                            this._iconImage0 = void 0,
                            this._iconImage1 = void 0,
                            this._iconImage2 = void 0,
                            this._currentIndex = void 0,
                            this._dataXml = void 0,
                            this._curPage = 0,
                            this._talentArr = [],
                            this.onChooseWakeUp = void 0,
                            this.onChooseSuccess = void 0,
                            this._spData = void 0,
                            this._loader = void 0,
                            this.m_res = new y(t),
                            this.m_res.visible = !1,
                            this.m_res.btnClose.on(s.TOUCH_END, this.onClose, this),
                            this.m_res.btnDown.on(s.TOUCH_END, this.onPageDown, this),
                            this.m_res.btnUp.on(s.TOUCH_END, this.onPageup, this),
                            this.m_res.stateBtn_0.on(s.TOUCH_END, this.onItem, this),
                            this.m_res.stateBtn_1.on(s.TOUCH_END, this.onItem, this),
                            this.m_res.stateBtn_2.on(s.TOUCH_END, this.onItem, this);
                        for (var e = 0; e < 3; e++) {
                            for (; this.m_res["icon" + e].container.numChildren > 0; )
                                this.m_res["icon" + e].container.removeChildAt(0);
                            this.m_res["icon" + e].visible = !1,
                                this.m_res["icon" + e].mcTooltip.visible = !1,
                                this.m_res["bgShow" + e].visible = !1,
                                this.m_res["txt_name" + e].visible = !1,
                                this.m_res["stateBtn_" + e].visible = !1,
                                this.m_res["icon" + e].on(s.MOUSE_ENTER, this.onTalentOver, this),
                                this.m_res["icon" + e].on(s.MOUSE_LEAVE, this.onTalentOut, this),
                                this.m_res["icon" + e].on(s.TOUCH_END, this.onTalentClick, this)
                        }
                        this._iconImage0 = new _(120,120),
                            this._iconImage1 = new _(120,120),
                            this._iconImage2 = new _(120,120),
                            this.m_res.icon0.container.addChild(this._iconImage0),
                            this.m_res.icon1.container.addChild(this._iconImage1),
                            this.m_res.icon2.container.addChild(this._iconImage2),
                            this._loader = new m(a.CGI_ROOT + "blood_gift",h.SysAPI.getNetSysAPI().createURLLoader(!0)),
                            this._loader.addEventListener(c.COMPLETE, this.onDataReceive, this),
                            this._loader.addEventListener(c.GOT_ERROR, this.onNetError, this)
                    }
                    var i = t.prototype;
                    return i.onTalentOver = function(t) {}
                        ,
                        i.onTalentOut = function(t) {}
                        ,
                        i.onTalentClick = function(t) {
                            var e = Number(t.currentTarget.name.substr(4));
                            g.SET[this._talentArr[3 * this._curPage + e]] ? this.m_res.txtTalentDes.text = g.SET[this._talentArr[3 * this._curPage + e]].description : this.m_res.txtTalentDes.text = ""
                        }
                        ,
                        i.setPageShow = function(t) {
                            3 * t < this._talentArr.length && this._iconImage0.setPath(a.COMM_ROOT + "res/talent/" + this._talentArr[3 * t + 0] + "_big.png"),
                            3 * t + 1 < this._talentArr.length && this._iconImage1.setPath(a.COMM_ROOT + "res/talent/" + this._talentArr[3 * t + 1] + "_big.png"),
                            3 * t + 2 < this._talentArr.length && this._iconImage2.setPath(a.COMM_ROOT + "res/talent/" + this._talentArr[3 * t + 2] + "_big.png");
                            for (var e = 0; e < 3; e++)
                                3 * t + e < this._talentArr.length ? (this.m_res["icon" + e].visible = !0,
                                    this.m_res["bgShow" + e].visible = !0,
                                    this.m_res["txt_name" + e].visible = !0,
                                    this.m_res["stateBtn_" + e].visible = !0,
                                    this.m_res["txt_name" + e].text = g.getName(this._talentArr[3 * t + e]),
                                    console.info("txt_name==" + g.getName(this._talentArr[3 * t + e])),
                                    200 == this._talentArr[3 * t + e] ? (this.m_res["icon" + e].mcTooltip.mcWake.gotoAndStop(4),
                                        this.m_res["icon" + e].mcTooltip.mcWake.y = 11,
                                        this.m_res["icon" + e].mcTooltip.bg.height = 37,
                                        this.m_res["icon" + e].mcTooltip.txtTalentDes.visible = !1,
                                        this.m_res["icon" + e].mcTooltip.txtTalentName.visible = !1,
                                        this.m_res["icon" + e].mcTooltip.mcLabel.visible = !1) : (this.m_res["icon" + e].mcTooltip.txtTalentDes.visible = !0,
                                        this.m_res["icon" + e].mcTooltip.txtTalentName.visible = !0,
                                        this.m_res["icon" + e].mcTooltip.mcLabel.visible = !0,
                                        this.m_res["icon" + e].mcTooltip.txtTalentDes.text = g.SET[this._talentArr[3 * t + e]].description,
                                        this.m_res["icon" + e].mcTooltip.txtTalentDes.height = this.m_res["icon" + e].mcTooltip.txtTalentDes.textHeight + 4,
                                        this.m_res["icon" + e].mcTooltip.txtTalentName.text = "血脉天赋：" + g.getName(this._talentArr[3 * t + e]),
                                        this.m_res["icon" + e].mcTooltip.mcWake.gotoAndStop(Number(this._dataXml.bloodInfo[3 * t + e - 1].gift) > 0 ? 2 : 1),
                                        this.m_res["icon" + e].mcTooltip.mcWake.y = 63.4 + this.m_res["icon" + e].mcTooltip.txtTalentDes.height,
                                        this.m_res["icon" + e].mcTooltip.bg.height = 95.3 + this.m_res["icon" + e].mcTooltip.txtTalentDes.height),
                                    200 == this._talentArr[3 * t + e] && 4 == Number(this._dataXml.dressInfo) ? (this.m_res["stateBtn_" + e].gotoAndStop(3),
                                        d.setAshingFilter(this.m_res["stateBtn_" + e], !1)) : 200 == this._talentArr[3 * t + e] ? (this.m_res["stateBtn_" + e].gotoAndStop(2),
                                        d.setAshingFilter(this.m_res["stateBtn_" + e], !0)) : 0 == Number(this._dataXml.bloodInfo[3 * t + e - 1].gift) ? (this.m_res["stateBtn_" + e].gotoAndStop(1),
                                        d.setAshingFilter(this.m_res["stateBtn_" + e], !0)) : Number(this._dataXml.dressInfo) == 3 * t + e - 1 ? (this.m_res["stateBtn_" + e].gotoAndStop(3),
                                        d.setAshingFilter(this.m_res["stateBtn_" + e], !1)) : (this.m_res["stateBtn_" + e].gotoAndStop(2),
                                        d.setAshingFilter(this.m_res["stateBtn_" + e], !0))) : (this.m_res["icon" + e].visible = !1,
                                    this.m_res["bgShow" + e].visible = !1,
                                    this.m_res["txt_name" + e].visible = !1,
                                    this.m_res["stateBtn_" + e].visible = !1)
                        }
                        ,
                        i.onItem = function(t) {
                            var e = Number(t.target.name.substr(9));
                            switch (this.m_res["stateBtn_" + e].currentFrame + 1) {
                                case 1:
                                    var i = this._dataXml.bloodInfo[3 * this._curPage + e - 1]
                                        , n = {
                                        selectPage: f.AWAKE,
                                        petData: {
                                            index: (this._spData.index + 1).toString(),
                                            id: this._spData.id.toString(),
                                            level: this._spData.level.toString()
                                        },
                                        talentData: {
                                            index: e - 1,
                                            type: this._talentArr[3 * this._curPage + e],
                                            gift: i.gift,
                                            dressInfo: this._dataXml.dressInfo,
                                            needProps: i.Item
                                        }
                                    };
                                    u.sendNotification(b.SHOW_MAIN_VIEW, n),
                                        u.sendNotification(T.NN_V_CLOSE_SPIRIT_BAG_VIEW),
                                        this.hide();
                                    break;
                                case 2:
                                    200 == this._talentArr[3 * this._curPage + e] ? this._loader.sendData("?cmd=4", {
                                        index: this._currentIndex + 1,
                                        bloodindex: 4
                                    }) : this._loader.sendData("?cmd=4", {
                                        index: this._currentIndex + 1,
                                        bloodindex: 3 * this._curPage + e - 1
                                    })
                            }
                        }
                        ,
                        i.onClose = function(t) {
                            this.hide()
                        }
                        ,
                        i.onPageup = function(t) {
                            this._curPage > 0 && (this._curPage--,
                                this.setPageShow(this._curPage))
                        }
                        ,
                        i.onPageDown = function(t) {
                            this._curPage < Math.ceil(this._talentArr.length / 3) - 1 && (this._curPage++,
                                this.setPageShow(this._curPage))
                        }
                        ,
                        i.onDataReceive = function(t) {
                            var e, i = t.data, n = new r(i);
                            if (n.value >= 0)
                                switch (t.sendType) {
                                    case "?cmd=0":
                                        if (this._talentArr = [],
                                            this._dataXml = i,
                                            this._dataXml.Item = null == i || null == (e = i.bloodInfo) ? void 0 : e.Item,
                                            this._talentArr.push(200),
                                            this._dataXml.hasOwnProperty("bloodInfo"))
                                            Array.isArray(this._dataXml.bloodInfo) || (this._dataXml.bloodInfo = [this._dataXml.bloodInfo]);
                                        else if (this._dataXml.bloodInfo = new Array,
                                            Array.isArray(this._dataXml.gift))
                                            for (var s = 0; s < this._dataXml.gift.length; s++) {
                                                var o, a = this._dataXml.gift[s], _ = this._dataXml.type[s];
                                                (o = new Object).gift = a,
                                                    o.type = _,
                                                    this._dataXml.bloodInfo.push(o)
                                            }
                                        else
                                            (o = new Object).gift = this._dataXml.gift,
                                                o.type = this._dataXml.type,
                                                this._dataXml.bloodInfo.push(o);
                                        for (var l = 0; l < this._dataXml.bloodInfo.length; l++)
                                            this._talentArr.push(Number(this._dataXml.bloodInfo[l].type));
                                        this.setPageShow(this._curPage);
                                        break;
                                    case "?cmd=4":
                                        this._dataXml.dressInfo = i.dressInfo,
                                            this.setPageShow(this._curPage),
                                        null != this.onChooseSuccess && this.onChooseSuccess(),
                                            this.onClose(null)
                                }
                            else
                                "?cmd=1" == t.sendType || h.UI.alert("", n.msg)
                        }
                        ,
                        i.onNetError = function(t) {
                            h.UI.alert("", t.msg)
                        }
                        ,
                        t.getPlatfromStr = function() {
                            return "&platfrom=" + t.platformValue.toString()
                        }
                        ,
                        t.getSkeyStr = function() {
                            var t = h.SysAPI.getGDataAPI().getGlobalVal(o.CUR_SERVER_INFO)
                                , e = "";
                            return t && (e = "&unkown=" + (t.pskey ? t.pskey : t.skey) + "&skey=" + t.skey),
                                e
                        }
                        ,
                        i.show = function() {
                            this.m_res.visible = !0,
                                this.m_res.txtTalentDes.text = ""
                        }
                        ,
                        i.hide = function() {
                            this.m_res.visible = !1
                        }
                        ,
                        i.setSpiritData = function(t) {
                            this._spData = t,
                                this._currentIndex = t.index
                        }
                        ,
                        i.query = function() {
                            this._loader.sendData("?cmd=0", {
                                index: this._currentIndex + 1
                            })
                        }
                        ,
                        i.dispose = function() {
                            this.m_res.btnClose.off(s.TOUCH_END, this.onClose, this),
                                this.m_res.btnDown.off(s.TOUCH_END, this.onPageDown, this),
                                this.m_res.btnUp.off(s.TOUCH_END, this.onPageup, this),
                                this.m_res.stateBtn_0.off(s.TOUCH_END, this.onItem, this),
                                this.m_res.stateBtn_1.off(s.TOUCH_END, this.onItem, this),
                                this.m_res.stateBtn_2.off(s.TOUCH_END, this.onItem, this)
                        }
                        ,
                        e(t, null, [{
                            key: "platformValue",
                            get: function() {
                                return 1e4
                            }
                        }]),
                        t
                }());
                var p = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._bg = void 0,
                            e._mcWake = void 0,
                            e._mcLabel = void 0,
                            e._txtTalentDes = void 0,
                            e._txtTalentName = void 0,
                            e
                    }
                    return i(n, t),
                        e(n, [{
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new l(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "mcWake",
                            get: function() {
                                return this._mcWake || (this._mcWake = new l(this.getChildByName("mcWake"))),
                                    this._mcWake
                            }
                        }, {
                            key: "mcLabel",
                            get: function() {
                                return this._mcLabel || (this._mcLabel = new l(this.getChildByName("mcLabel"))),
                                    this._mcLabel
                            }
                        }, {
                            key: "txtTalentDes",
                            get: function() {
                                return this._txtTalentDes || (this._txtTalentDes = new l(this.getChildByName("txtTalentDes"))),
                                    this._txtTalentDes
                            }
                        }, {
                            key: "txtTalentName",
                            get: function() {
                                return this._txtTalentName || (this._txtTalentName = new l(this.getChildByName("txtTalentName"))),
                                    this._txtTalentName
                            }
                        }]),
                        n
                }(l)
                    , v = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._mcTooltip = void 0,
                            e._mcWake = void 0,
                            e._container = void 0,
                            e
                    }
                    return i(n, t),
                        e(n, [{
                            key: "mcTooltip",
                            get: function() {
                                return this._mcTooltip || (this._mcTooltip = new p(this.getChildByName("mcTooltip"))),
                                    this._mcTooltip
                            }
                        }, {
                            key: "mcWake",
                            get: function() {
                                return this._mcWake || (this._mcWake = new l(this.getChildByName("mcWake"))),
                                    this._mcWake
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new l(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        n
                }(l)
                    , y = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnClose = void 0,
                            e._btnDown = void 0,
                            e._btnUp = void 0,
                            e._stateBtn_0 = void 0,
                            e._stateBtn_1 = void 0,
                            e._stateBtn_2 = void 0,
                            e._bgShow0 = void 0,
                            e._bgShow1 = void 0,
                            e._bgShow2 = void 0,
                            e._txt_name0 = void 0,
                            e._txt_name1 = void 0,
                            e._txt_name2 = void 0,
                            e._icon0 = void 0,
                            e._icon1 = void 0,
                            e._icon2 = void 0,
                            e._txtTalentDes = void 0,
                            e
                    }
                    return i(n, t),
                        e(n, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new l(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnDown",
                            get: function() {
                                return this._btnDown || (this._btnDown = new l(this.getChildByName("btnDown"))),
                                    this._btnDown
                            }
                        }, {
                            key: "btnUp",
                            get: function() {
                                return this._btnUp || (this._btnUp = new l(this.getChildByName("btnUp"))),
                                    this._btnUp
                            }
                        }, {
                            key: "stateBtn_0",
                            get: function() {
                                return this._stateBtn_0 || (this._stateBtn_0 = new l(this.getChildByName("stateBtn_0"))),
                                    this._stateBtn_0
                            }
                        }, {
                            key: "stateBtn_1",
                            get: function() {
                                return this._stateBtn_1 || (this._stateBtn_1 = new l(this.getChildByName("stateBtn_1"))),
                                    this._stateBtn_1
                            }
                        }, {
                            key: "stateBtn_2",
                            get: function() {
                                return this._stateBtn_2 || (this._stateBtn_2 = new l(this.getChildByName("stateBtn_2"))),
                                    this._stateBtn_2
                            }
                        }, {
                            key: "bgShow0",
                            get: function() {
                                return this._bgShow0 || (this._bgShow0 = new l(this.getChildByName("bgShow0"))),
                                    this._bgShow0
                            }
                        }, {
                            key: "bgShow1",
                            get: function() {
                                return this._bgShow1 || (this._bgShow1 = new l(this.getChildByName("bgShow1"))),
                                    this._bgShow1
                            }
                        }, {
                            key: "bgShow2",
                            get: function() {
                                return this._bgShow2 || (this._bgShow2 = new l(this.getChildByName("bgShow2"))),
                                    this._bgShow2
                            }
                        }, {
                            key: "txt_name0",
                            get: function() {
                                return this._txt_name0 || (this._txt_name0 = new l(this.getChildByName("txt_name0"))),
                                    this._txt_name0
                            }
                        }, {
                            key: "txt_name1",
                            get: function() {
                                return this._txt_name1 || (this._txt_name1 = new l(this.getChildByName("txt_name1"))),
                                    this._txt_name1
                            }
                        }, {
                            key: "txt_name2",
                            get: function() {
                                return this._txt_name2 || (this._txt_name2 = new l(this.getChildByName("txt_name2"))),
                                    this._txt_name2
                            }
                        }, {
                            key: "icon0",
                            get: function() {
                                return this._icon0 || (this._icon0 = new v(this.getChildByName("icon0"))),
                                    this._icon0
                            }
                        }, {
                            key: "icon1",
                            get: function() {
                                return this._icon1 || (this._icon1 = new v(this.getChildByName("icon1"))),
                                    this._icon1
                            }
                        }, {
                            key: "icon2",
                            get: function() {
                                return this._icon2 || (this._icon2 = new v(this.getChildByName("icon2"))),
                                    this._icon2
                            }
                        }, {
                            key: "txtTalentDes",
                            get: function() {
                                return this._txtTalentDes || (this._txtTalentDes = new l(this.getChildByName("txtTalentDes"))),
                                    this._txtTalentDes
                            }
                        }]),
                        n
                }(l);
                n._RF.pop()
            }
        }
    }
));
