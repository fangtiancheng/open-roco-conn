System.register("chunks:///_virtual/SpiritBagGetNewSkillPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./WindowBase.ts", "./WindowCloseAction.ts", "./SuccessorEvent.ts", "./CombatImage.ts", "./AgentNode.ts", "./ResManager.ts", "./ToolTip.ts", "./BuildLogHelper.ts"], (function(t) {
        var i, e, s, n, l, o, h, a, g, r, m, _, d, u, c;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.assertThisInitialized,
                    s = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        l = t.Label,
                        o = t.NodeEventType
                }
                , function(t) {
                    h = t.__global
                }
                , function(t) {
                    a = t.WindowBase
                }
                , function(t) {
                    g = t.WindowCloseAction
                }
                , function(t) {
                    r = t.SuccessorEvent
                }
                , function(t) {
                    m = t.CombatImage
                }
                , function(t) {
                    _ = t.AgentNode
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    u = t.ToolTipComponent
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "c3faf1Yc81B1bwgsH55qNzZ", "SpiritBagGetNewSkillPanel", void 0);
                t("SpiritBagGetNewSkillPanel", function(t) {
                    function s(i, s) {
                        var n;
                        void 0 === i && (i = null),
                        void 0 === s && (s = !1),
                            (n = t.call(this) || this)._ui = void 0,
                            n.newSkill = void 0,
                            n.selectedSkill = void 0,
                            n._target = void 0,
                            n._mcLib = [],
                            n._iconLib = [],
                            n._data = new Map,
                            n._icon = new m,
                            n._lastSeleted = 1,
                            n._face = [new m, new m];
                        var l = d.Instance.getPrefabByName("SpiritBag_1600/SpiritBagGetNewSkillPanel");
                        return n._ui = new k(l),
                            n.initialize(i, null, null, null, s),
                            n.addChild(n._ui.target),
                            n.hide(),
                            n.closeAction = g.HIDE,
                            n._ui.changeBtn.on(o.TOUCH_END, n.onChange, e(n)),
                            n._ui.noChangeBtn.on(o.TOUCH_END, n.noChange, e(n)),
                            n.initUI(),
                            n.moveTo(0, 0),
                            n
                    }
                    i(s, t);
                    var n = s.prototype;
                    return n.gotoLearnSkillScene = function(t) {}
                        ,
                        n.initUI = function() {
                            var t, i, e;
                            this._ui.skillIcon.addChild(this._icon),
                                this._ui.skillName.mouseEnabled = !1,
                                this._ui.skillDes.mouseEnabled = !1,
                                this._ui.mm.mouseChildren = !1,
                                this._ui.mm.mouseEnabled = !1;
                            for (var s = 0; s < 4; s++) {
                                this._ui["mm" + String(s + 1)] ? (i = "bg" + String(s + 1),
                                    t = this._ui.getChildByName(i),
                                    this._ui.getChildByName("skillName" + String(s + 1)),
                                    this._ui.getChildByName("skillDes" + String(s + 1)),
                                    e = this._ui.getChildByName("skillIcon" + String(s + 1)),
                                    this._ui.getChildByName("evoIcon" + String(s + 1)),
                                    this._ui["mm" + String(s + 1)].mouseChildren = !1,
                                    this._ui["mm" + String(s + 1)].mouseEnabled = !1,
                                    this._iconLib[s] = new m,
                                    e.addChild(this._iconLib[s]),
                                    this._data[t.name] = null,
                                    this._mcLib[s] = t,
                                    t.active = !1) : c.IS_LOCAL
                            }
                        }
                        ,
                        n.ishow = function() {
                            this.show()
                        }
                        ,
                        n.setIdle = function(t, i, e) {}
                        ,
                        n.setData = function(t, i, e) {
                            var s, n, h, a, g, r;
                            this.reset(),
                                this.newSkill = i,
                                this._ui["bg" + this._lastSeleted].active = !0,
                                this.selectedSkill = e[0],
                                this._ui.skillName.text = i.skillDes.name,
                                this._ui.skillDes.text = String("威力:" + i.skillDes.power + "  PP:" + i.skillDes.ppMax + "/" + i.skillDes.ppMax),
                                this._icon.setSkillIcon(i.skillDes.property.id),
                                this._ui.bg.tooltip = i.skillDes.description,
                                this._ui.mm.ppTxt.string = i.skillDes.ppMax + "/" + i.skillDes.ppMax,
                                this._ui.mm.powerTxt.string = "" + i.skillDes.power,
                                this._ui.mm.speedText.string = "" + i.skillDes.speed,
                                this._ui.mm.damageMC.gotoAndStop(i.skillDes.damageType);
                            for (var m = 0; m < 4; m++) {
                                var _ = this._ui["mm" + String(m + 1)];
                                n = this._mcLib[m],
                                    h = this._ui.getChildByName("bgNode" + String(m + 1)),
                                    a = this._ui.getChildByName("skillName" + String(m + 1)),
                                    g = this._ui.getChildByName("skillDes" + String(m + 1)),
                                    r = this._ui.getChildByName("evo" + String(m + 1)),
                                    s = e[m],
                                    a.getComponent(l).string = s.skillDes.name,
                                    g.getComponent(l).string = String("威力:" + s.skillDes.power + "  PP:" + s.ppLeft + "/" + s.skillDes.ppMax),
                                _ && (_.ppTxt.string = s.skillDes.ppMax + "/" + s.skillDes.ppMax,
                                    _.powerTxt.string = "" + s.skillDes.power,
                                    _.speedText.string = "" + s.skillDes.speed,
                                    _.damageMC.gotoAndStop(s.skillDes.damageType)),
                                    r.active = !1,
                                    this._data[n.name] = e[m],
                                    n.tooltip = s.skillDes.description,
                                    n.sn = m + 1,
                                h.getComponent(u) || h.addComponent(u),
                                    h.tooltip = s.skillDes.description,
                                    h.sn = m + 1,
                                    h.target = n,
                                    this._iconLib[m].setSkillIcon(e[m].skillDes.property.id),
                                1 == s.isHeredity && (r.active = !0),
                                    e.length ? (h.on(o.TOUCH_END, this.onClick, this),
                                        h.on(o.MOUSE_ENTER, this.onOver, this),
                                        h.on(o.MOUSE_LEAVE, this.onOut, this)) : (h.off(o.MOUSE_ENTER, this.onOver, this),
                                        h.off(o.MOUSE_LEAVE, this.onOut, this))
                            }
                        }
                        ,
                        n.reset = function() {
                            this.selectedSkill = null,
                                this._lastSeleted = 1,
                                this.resetBg()
                        }
                        ,
                        n.onClick = function(t) {
                            this.selectedSkill = this._data[t.target.target.name],
                                this.resetBg(),
                                this._lastSeleted = t.target.sn,
                                t.target.target.active = !0,
                                t.target.target.off(o.MOUSE_LEAVE, this.onOut, this)
                        }
                        ,
                        n.onOver = function(t) {
                            t.target.target.active = !0
                        }
                        ,
                        n.onOut = function(t) {
                            this._lastSeleted != t.target.sn && (t.target.target.active = !1)
                        }
                        ,
                        n.onChange = function(t) {
                            null != this.selectedSkill && (1 == this.selectedSkill.isHeredity ? h.showMsgBox("遗传技能不能替换.") : this.dispatchEvent(new r(r.GET_NEW_SKILL_CHANGE)))
                        }
                        ,
                        n.noChange = function(t) {
                            this.dispatchEvent(new r(r.GET_NEW_SKILL_NOCHANGE))
                        }
                        ,
                        n.resetBg = function() {
                            for (var t, i, e = 0; e < 4; e++)
                                i = "bg" + String(e + 1),
                                    (t = this._ui.getChildByName(i)).active = !1,
                                    t.on(o.MOUSE_ENTER, this.onOver, this),
                                    t.on(o.MOUSE_LEAVE, this.onOut, this)
                        }
                        ,
                        s
                }(a));
                var p = function(t) {
                    function e() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._ppTxt = void 0,
                            i._powerTxt = void 0,
                            i._speedText = void 0,
                            i._damageMC = void 0,
                            i
                    }
                    return i(e, t),
                        s(e, [{
                            key: "ppTxt",
                            get: function() {
                                return this._ppTxt || (this._ppTxt = new _(this.getChildByName("ppTxt"))),
                                    this._ppTxt
                            }
                        }, {
                            key: "powerTxt",
                            get: function() {
                                return this._powerTxt || (this._powerTxt = new _(this.getChildByName("powerTxt"))),
                                    this._powerTxt
                            }
                        }, {
                            key: "speedText",
                            get: function() {
                                return this._speedText || (this._speedText = new _(this.getChildByName("speedText"))),
                                    this._speedText
                            }
                        }, {
                            key: "damageMC",
                            get: function() {
                                return this._damageMC || (this._damageMC = new _(this.getChildByName("damageMC"))),
                                    this._damageMC
                            }
                        }]),
                        e
                }(_)
                    , k = function(t) {
                    function e() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._changeBtn = void 0,
                            i._noChangeBtn = void 0,
                            i._mm = void 0,
                            i._mm1 = void 0,
                            i._mm2 = void 0,
                            i._mm3 = void 0,
                            i._mm4 = void 0,
                            i._bg = void 0,
                            i._bg1 = void 0,
                            i._bg2 = void 0,
                            i._bg3 = void 0,
                            i._bg4 = void 0,
                            i._skillName = void 0,
                            i._skillIcon = void 0,
                            i._skillDes = void 0,
                            i._desc = void 0,
                            i
                    }
                    return i(e, t),
                        s(e, [{
                            key: "changeBtn",
                            get: function() {
                                return this._changeBtn || (this._changeBtn = new _(this.getChildByName("changeBtn"))),
                                    this._changeBtn
                            }
                        }, {
                            key: "noChangeBtn",
                            get: function() {
                                return this._noChangeBtn || (this._noChangeBtn = new _(this.getChildByName("noChangeBtn"))),
                                    this._noChangeBtn
                            }
                        }, {
                            key: "mm",
                            get: function() {
                                return this._mm || (this._mm = new p(this.getChildByName("mm"))),
                                    this._mm
                            }
                        }, {
                            key: "mm1",
                            get: function() {
                                return this._mm1 || (this._mm1 = new p(this.getChildByName("mm1"))),
                                    this._mm1
                            }
                        }, {
                            key: "mm2",
                            get: function() {
                                return this._mm2 || (this._mm2 = new p(this.getChildByName("mm2"))),
                                    this._mm2
                            }
                        }, {
                            key: "mm3",
                            get: function() {
                                return this._mm3 || (this._mm3 = new p(this.getChildByName("mm3"))),
                                    this._mm3
                            }
                        }, {
                            key: "mm4",
                            get: function() {
                                return this._mm4 || (this._mm4 = new p(this.getChildByName("mm4"))),
                                    this._mm4
                            }
                        }, {
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new _(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "bg1",
                            get: function() {
                                return this._bg1 || (this._bg1 = new _(this.getChildByName("bg1"))),
                                    this._bg1
                            }
                        }, {
                            key: "bg2",
                            get: function() {
                                return this._bg2 || (this._bg2 = new _(this.getChildByName("bg2"))),
                                    this._bg2
                            }
                        }, {
                            key: "bg3",
                            get: function() {
                                return this._bg3 || (this._bg3 = new _(this.getChildByName("bg3"))),
                                    this._bg3
                            }
                        }, {
                            key: "bg4",
                            get: function() {
                                return this._bg4 || (this._bg4 = new _(this.getChildByName("bg4"))),
                                    this._bg4
                            }
                        }, {
                            key: "skillName",
                            get: function() {
                                return this._skillName || (this._skillName = new _(this.getChildByName("skillName"))),
                                    this._skillName
                            }
                        }, {
                            key: "skillIcon",
                            get: function() {
                                return this._skillIcon || (this._skillIcon = new _(this.getChildByName("skillIcon"))),
                                    this._skillIcon
                            }
                        }, {
                            key: "skillDes",
                            get: function() {
                                return this._skillDes || (this._skillDes = new _(this.getChildByName("skillDes"))),
                                    this._skillDes
                            }
                        }, {
                            key: "desc",
                            get: function() {
                                return this._desc || (this._desc = new _(this.getChildByName("desc"))),
                                    this._desc
                            }
                        }]),
                        e
                }(_);
                n._RF.pop()
            }
        }
    }
));
