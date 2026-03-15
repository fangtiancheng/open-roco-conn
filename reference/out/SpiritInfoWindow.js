System.register("chunks:///_virtual/SpiritInfoWindow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelSysEvent.ts", "./global.ts", "./PropertyDes.ts", "./EquipmentIcon.ts", "./SpiritImage.ts", "./SpiritPropertyTranslator.ts", "./CheckUserInfoDes.ts", "./SpiritBagSpiritIcon.ts", "./WindowBase.ts", "./AgentNode.ts", "./EquipIconTipsWithSpiritBag.ts"], (function(t) {
        var e, i, s, n, h, o, a, _, r, T, u, x, d, l, c, I, g, p, m;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy,
                        h = t.NodeEventType,
                        o = t.Vec2,
                        a = t.UITransform,
                        _ = t.view
                }
                , function(t) {
                    r = t.AngelSysEvent
                }
                , function(t) {
                    T = t.__global
                }
                , function(t) {
                    u = t.PropertyDes
                }
                , function(t) {
                    x = t.EquipmentIcon
                }
                , function(t) {
                    d = t.SpiritImage
                }
                , function(t) {
                    l = t.SpiritPropertyTranslator
                }
                , function(t) {
                    c = t.CheckUserInfoDes
                }
                , function(t) {
                    I = t.SpiritBagSpiritIcon
                }
                , function(t) {
                    g = t.WindowBase
                }
                , function(t) {
                    p = t.AgentNode
                }
                , function(t) {
                    m = t.EquipIconTipsWithSpiritBag
                }
            ],
            execute: function() {
                n._RF.push({}, "2b22667HNVN/q2Lc3LIR68j", "SpiritInfoWindow", void 0);
                var f = t("SpiritInfoWindow", function(t) {
                    function n(e, i) {
                        var n;
                        return void 0 === e && (e = null),
                        void 0 === i && (i = !1),
                            (n = t.call(this) || this)._ui = void 0,
                            n._data = void 0,
                            n._spiritImage = void 0,
                            n._featureIcons = void 0,
                            n._equipIcons = void 0,
                            n._tooltipsView = void 0,
                            n._curItemTooltips = void 0,
                            n._ui = new S(e),
                            n.addChild(n._ui.target),
                            n.initUI(),
                            n.initialize(e, n._ui.bg.target, n._ui.closeButton, s(n), i),
                            n.center(),
                            n
                    }
                    e(n, t);
                    var g = n.prototype;
                    return g.close = function() {
                        t.prototype.close.call(this),
                            this.cleanEquipIcons()
                    }
                        ,
                        g.cleanEquipIcons = function() {}
                        ,
                        g.setEquipIcons = function(t) {
                            var e, i;
                            null == this._equipIcons && (this._equipIcons = []);
                            for (var s = 0; s < u.EQUIPMENT_TYPE.length; s++)
                                e = t[s],
                                    i = this._equipIcons[s],
                                    0 == e.serverID ? (this._ui["equip" + s].mouseChildren = !1,
                                        this._ui["equip" + s].tooltip = u.EQUIPMENT_TYPE[s],
                                    null != i && i.update(null)) : (this._ui["equip" + s].mouseChildren = !0,
                                        null == i ? ((i = new x(e,this._ui["equip" + s],n.SPIRIT_EQ_ICON_WIDTH,n.SPIRIT_EQ_ICON_HEIGHT)).on(h.MOUSE_ENTER, this.overHandler, this),
                                            i.on(h.MOUSE_LEAVE, this.outHandler, this),
                                            this._equipIcons[s] = i) : i.update(e))
                        }
                        ,
                        g.overHandler = function(t) {
                            var e = t.currentTarget
                                , i = new o(0,Math.ceil(e.getComponent(a).height / 2))
                                , s = e.getWorldPosition();
                            i.x += s.x,
                                i.y += s.y,
                                i.x -= _.getVisibleSize().width / 2,
                                i.y -= _.getVisibleSize().height / 2,
                                i.x += -50,
                                i.y += 20,
                                this._curItemTooltips.show(i.x, i.y, e.data)
                        }
                        ,
                        g.outHandler = function(t) {
                            this._curItemTooltips.hide()
                        }
                        ,
                        g.initUI = function() {
                            this._curItemTooltips = new m,
                                this.initSpiritIcon(),
                                this.initFeatureIcons()
                        }
                        ,
                        g.initSpiritIcon = function() {
                            this._spiritImage = new d,
                                this._spiritImage.ui = this._ui.target,
                                this._spiritImage.display.x = n.SPIRIT_X,
                                this._spiritImage.display.y = n.SPIRIT_Y,
                                this._spiritImage.setMask(n.SPIRIT_WIDTH, n.SPIRIT_HEIGHT)
                        }
                        ,
                        g.initFeatureIcons = function() {
                            this._featureIcons = [new I, new I];
                            for (var t, e = this._featureIcons.length, i = 0; i < e; ++i)
                                null != (t = this._featureIcons[i]) && (t.ui = this._ui.target,
                                    t.display.x = n.SPIRIT_SKILL_X + n.SPIRIT_SKILL_SPACE_X * i,
                                    t.display.y = n.SPIRIT_SKILL_Y,
                                    t.display.width = n.SPIRIT_SKILL_WIDTH,
                                    t.display.height = n.SPIRIT_SKILL_HEIGHT)
                        }
                        ,
                        g.setSpiritImage = function(t) {
                            null != this._spiritImage && this._spiritImage.load(t)
                        }
                        ,
                        g.setFeatureIcons = function(t) {
                            if (null != this._featureIcons)
                                for (var e, i, s = this._featureIcons.length, n = 0; n < s; ++n)
                                    null != this._featureIcons[n] && (null != t && null != t[n] ? (i = t[n].name,
                                        e = t[n].id) : (i = null,
                                        e = 0),
                                        this._featureIcons[n].tooltip = i,
                                        this._featureIcons[n].load(e))
                        }
                        ,
                        g.onMasterInfoClick = function(t) {
                            if (this.close(),
                            null != this._data) {
                                var e = new c;
                                e.uin = this._data.masterID,
                                    T.SysAPI.getGEventAPI().cmdExecuted(r.ON_USER_INFO, e)
                            }
                        }
                        ,
                        i(n, [{
                            key: "data",
                            set: function(t) {
                                if (this._data = t,
                                null != this._data) {
                                    var e;
                                    this._ui.idText.text = this._data.id.toString(),
                                        this._ui.nameText.text = this._data.name,
                                        this._ui.levelText.text = this._data.level.toString(),
                                        this._ui.temperText.text = l.getTemper(this._data.temper),
                                        this._ui.caughtTimeText.text = l.getCaughtTime(this._data.caughtTime),
                                        this._ui.caughtLocationText.text = l.getValidCaughtLocation(this._data.caughtLocation),
                                        this._ui.masterText.text = l.getMasterName(this._data.masterID),
                                        this._ui.introText.text = this._data.description;
                                    for (var i = [], s = 1; s <= u.EQUIPMENT_PROPETY.length; s++) {
                                        i.push(0);
                                        for (var n = 0; n < this._data.equipments.length; n++)
                                            s == (e = this._data.equipments[n]).baseAttr && (i[s - 1] += e.baseValue),
                                            s == e.specialAttr && (i[s - 1] += e.specialValue)
                                    }
                                    i[0] > 0 ? this._ui.paText.htmlText = this._data.PA.toString() + "<font color='#A0F100'>+" + i[0] + "</font>" : this._ui.paText.htmlText = this._data.PA.toString(),
                                        i[1] > 0 ? this._ui.pdText.htmlText = this._data.PD.toString() + "<font color='#A0F100'>+" + i[1] + "</font>" : this._ui.pdText.htmlText = this._data.PD.toString(),
                                        i[2] > 0 ? this._ui.maText.htmlText = this._data.MA.toString() + "<font color='#A0F100'>+" + i[2] + "</font>" : this._ui.maText.htmlText = this._data.MA.toString(),
                                        i[3] > 0 ? this._ui.mdText.htmlText = this._data.MD.toString() + "<font color='#A0F100'>+" + i[3] + "</font>" : this._ui.mdText.htmlText = this._data.MD.toString(),
                                        i[4] > 0 ? this._ui.spText.htmlText = this._data.SP.toString() + "<font color='#A0F100'>+" + i[4] + "</font>" : this._ui.spText.htmlText = this._data.SP.toString(),
                                        i[5] > 0 ? this._ui.hpText.htmlText = this._data.maxHP + "<font color='#A0F100'>+" + i[5] + "</font>" : this._ui.hpText.htmlText = this._data.maxHP.toString(),
                                        i[6] > 0 ? this._ui.hitText.htmlText = this._data.HIT.toString() + "<font color='#A0F100'>+" + i[6] + "</font>" : this._ui.hitText.htmlText = this._data.HIT.toString(),
                                        i[7] > 0 ? this._ui.dodgeText.htmlText = this._data.DODGE.toString() + "<font color='#A0F100'>+" + i[7] + "</font>" : this._ui.dodgeText.htmlText = this._data.DODGE.toString(),
                                        i[8] > 0 ? this._ui.critText.htmlText = this._data.CRIT.toString() + "<font color='#A0F100'>+" + i[8] + "</font>" : this._ui.critText.htmlText = this._data.CRIT.toString(),
                                        this.setEquipIcons(this._data.equipments),
                                        0 != this._data.skinID ? this.setSpiritImage(this._data.skinID) : this.setSpiritImage(this._data.id),
                                        this.setFeatureIcons(this._data.features)
                                } else
                                    this._ui.idText.text = "",
                                        this._ui.nameText.text = "",
                                        this._ui.levelText.text = "",
                                        this._ui.temperText.text = "",
                                        this._ui.caughtTimeText.text = "",
                                        this._ui.caughtLocationText.text = "",
                                        this._ui.masterText.text = "",
                                        this._ui.introText.text = "",
                                        this._ui.hpText.text = "",
                                        this._ui.paText.text = "",
                                        this._ui.pdText.text = "",
                                        this._ui.maText.text = "",
                                        this._ui.mdText.text = "",
                                        this._ui.spText.text = "",
                                        this._ui.hitText.text = "",
                                        this._ui.dodgeText.text = "",
                                        this._ui.critText.text = "",
                                        this.setSpiritImage(0),
                                        this.setFeatureIcons(null)
                            }
                        }]),
                        n
                }(g));
                f.SPIRIT_WIDTH = 68,
                    f.SPIRIT_HEIGHT = 68,
                    f.SPIRIT_X = 36,
                    f.SPIRIT_Y = 28,
                    f.SPIRIT_SKILL_WIDTH = 20,
                    f.SPIRIT_SKILL_HEIGHT = 20,
                    f.SPIRIT_SKILL_X = 245,
                    f.SPIRIT_SKILL_Y = 32,
                    f.SPIRIT_SKILL_SPACE_X = 28,
                    f.SPIRIT_EQ_ICON_WIDTH = 60,
                    f.SPIRIT_EQ_ICON_HEIGHT = 60;
                var S = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._closeButton = void 0,
                            e._bg = void 0,
                            e._idText = void 0,
                            e._nameText = void 0,
                            e._levelText = void 0,
                            e._temperText = void 0,
                            e._caughtTimeText = void 0,
                            e._caughtLocationText = void 0,
                            e._masterText = void 0,
                            e._introText = void 0,
                            e._paText = void 0,
                            e._pdText = void 0,
                            e._maText = void 0,
                            e._mdText = void 0,
                            e._spText = void 0,
                            e._hpText = void 0,
                            e._hitText = void 0,
                            e._dodgeText = void 0,
                            e._critText = void 0,
                            e
                    }
                    return e(s, t),
                        i(s, [{
                            key: "closeButton",
                            get: function() {
                                return this._closeButton || (this._closeButton = this.getChildByName("closeButton")),
                                    this._closeButton
                            }
                        }, {
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new p(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "idText",
                            get: function() {
                                return this._idText || (this._idText = new p(this.getChildByName("idText"))),
                                    this._idText
                            }
                        }, {
                            key: "nameText",
                            get: function() {
                                return this._nameText || (this._nameText = new p(this.getChildByName("nameText"))),
                                    this._nameText
                            }
                        }, {
                            key: "levelText",
                            get: function() {
                                return this._levelText || (this._levelText = new p(this.getChildByName("levelText"))),
                                    this._levelText
                            }
                        }, {
                            key: "temperText",
                            get: function() {
                                return this._temperText || (this._temperText = new p(this.getChildByName("temperText"))),
                                    this._temperText
                            }
                        }, {
                            key: "caughtTimeText",
                            get: function() {
                                return this._caughtTimeText || (this._caughtTimeText = new p(this.getChildByName("caughtTimeText"))),
                                    this._caughtTimeText
                            }
                        }, {
                            key: "caughtLocationText",
                            get: function() {
                                return this._caughtLocationText || (this._caughtLocationText = new p(this.getChildByName("caughtLocationText"))),
                                    this._caughtLocationText
                            }
                        }, {
                            key: "masterText",
                            get: function() {
                                return this._masterText || (this._masterText = new p(this.getChildByName("masterText"))),
                                    this._masterText
                            }
                        }, {
                            key: "introText",
                            get: function() {
                                return this._introText || (this._introText = new p(this.getChildByName("introText"))),
                                    this._introText
                            }
                        }, {
                            key: "paText",
                            get: function() {
                                return this._paText || (this._paText = new p(this.getChildByName("paText"))),
                                    this._paText
                            }
                        }, {
                            key: "pdText",
                            get: function() {
                                return this._pdText || (this._pdText = new p(this.getChildByName("pdText"))),
                                    this._pdText
                            }
                        }, {
                            key: "maText",
                            get: function() {
                                return this._maText || (this._maText = new p(this.getChildByName("maText"))),
                                    this._maText
                            }
                        }, {
                            key: "mdText",
                            get: function() {
                                return this._mdText || (this._mdText = new p(this.getChildByName("mdText"))),
                                    this._mdText
                            }
                        }, {
                            key: "spText",
                            get: function() {
                                return this._spText || (this._spText = new p(this.getChildByName("spText"))),
                                    this._spText
                            }
                        }, {
                            key: "hpText",
                            get: function() {
                                return this._hpText || (this._hpText = new p(this.getChildByName("hpText"))),
                                    this._hpText
                            }
                        }, {
                            key: "hitText",
                            get: function() {
                                return this._hitText || (this._hitText = new p(this.getChildByName("hitText"))),
                                    this._hitText
                            }
                        }, {
                            key: "dodgeText",
                            get: function() {
                                return this._dodgeText || (this._dodgeText = new p(this.getChildByName("dodgeText"))),
                                    this._dodgeText
                            }
                        }, {
                            key: "critText",
                            get: function() {
                                return this._critText || (this._critText = new p(this.getChildByName("critText"))),
                                    this._critText
                            }
                        }]),
                        s
                }(p);
                n._RF.pop()
            }
        }
    }
));
