System.register("chunks:///_virtual/GetNewSkillPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./ToolTip.ts", "./WindowBase.ts", "./WindowCloseAction.ts", "./ResManager.ts", "./BuildLogHelper.ts", "./CombatImage.ts", "./SuccessorEvent.ts"], (function(t) {
        var e, i, s, n, l, o, h, a, g, r, m, _, d, u, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.assertThisInitialized,
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
                    a = t.AgentNode
                }
                , function(t) {
                    g = t.ToolTipComponent
                }
                , function(t) {
                    r = t.WindowBase
                }
                , function(t) {
                    m = t.WindowCloseAction
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    u = t.CombatImage
                }
                , function(t) {
                    c = t.SuccessorEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "9e8a7SqlklAEY6FZGIKRBX9", "GetNewSkillPanel", void 0);
                t("GetNewSkillPanel", function(t) {
                    function s(e, s) {
                        var n;
                        void 0 === e && (e = null),
                        void 0 === s && (s = !1),
                            (n = t.call(this) || this)._ui = void 0,
                            n.newSkill = void 0,
                            n.selectedSkill = void 0,
                            n._target = void 0,
                            n._mcLib = [],
                            n._iconLib = [],
                            n._data = new Map,
                            n._icon = new u,
                            n._lastSeleted = 1,
                            n._face = [new u, new u];
                        var l = _.Instance.getPrefabByName("SpiritBag_1600/GetNewSkillPanel");
                        return n._ui = new k(l),
                            n.initialize(e, null, null, null, s),
                            n.addChild(n._ui.target),
                            n.hide(),
                            n.closeAction = m.HIDE,
                            n._ui.changeBtn.on(o.TOUCH_END, n.onChange, i(n)),
                            n._ui.noChangeBtn.on(o.TOUCH_END, n.noChange, i(n)),
                            n.initUI(),
                            n.moveTo(0, 0),
                            n
                    }
                    e(s, t);
                    var n = s.prototype;
                    return n.gotoLearnSkillScene = function(t) {}
                        ,
                        n.initUI = function() {
                            var t, e, i;
                            this._ui.skillIcon.addChild(this._icon),
                                this._ui.skillName.mouseEnabled = !1,
                                this._ui.skillDes.mouseEnabled = !1,
                                this._ui.mm.mouseChildren = !1,
                                this._ui.mm.mouseEnabled = !1;
                            for (var s = 0; s < 4; s++) {
                                this._ui["mm" + String(s + 1)] ? (e = "bg" + String(s + 1),
                                    t = this._ui.getChildByName(e),
                                    this._ui.getChildByName("skillName" + String(s + 1)),
                                    this._ui.getChildByName("skillDes" + String(s + 1)),
                                    i = this._ui.getChildByName("skillIcon" + String(s + 1)),
                                    this._ui.getChildByName("evoIcon" + String(s + 1)),
                                    this._ui["mm" + String(s + 1)].mouseChildren = !1,
                                    this._ui["mm" + String(s + 1)].mouseEnabled = !1,
                                    this._iconLib[s] = new u,
                                    i.addChild(this._iconLib[s]),
                                    this._data[t.name] = null,
                                    this._mcLib[s] = t,
                                    t.active = !1) : d.IS_LOCAL
                            }
                        }
                        ,
                        n.ishow = function() {
                            this.show()
                        }
                        ,
                        n.setIdle = function(t, e, i) {}
                        ,
                        n.setData = function(t, e, i) {
                            var s, n, h, a, r, m;
                            this.reset(),
                                this.newSkill = e,
                                this._ui["bg" + this._lastSeleted].active = !0,
                                this.selectedSkill = i[0],
                                this._ui.skillName.text = e.skillDes.name,
                                this._ui.skillDes.text = String("威力:" + e.skillDes.power + "  PP:" + e.skillDes.ppMax + "/" + e.skillDes.ppMax),
                                this._icon.setSkillIcon(e.skillDes.property.id),
                                this._ui.bg.tooltip = e.skillDes.description,
                                this._ui.mm.ppTxt.string = e.skillDes.ppMax + "/" + e.skillDes.ppMax,
                                this._ui.mm.powerTxt.string = "" + e.skillDes.power,
                                this._ui.mm.speedText.string = "" + e.skillDes.speed,
                                this._ui.mm.damageMC.gotoAndStop(e.skillDes.damageType);
                            for (var _ = 0; _ < 4; _++) {
                                var d = this._ui["mm" + String(_ + 1)];
                                n = this._mcLib[_],
                                    h = this._ui.getChildByName("bgNode" + String(_ + 1)),
                                    a = this._ui.getChildByName("skillName" + String(_ + 1)),
                                    r = this._ui.getChildByName("skillDes" + String(_ + 1)),
                                    m = this._ui.getChildByName("evo" + String(_ + 1)),
                                    s = i[_],
                                    a.getComponent(l).string = s.skillDes.name,
                                    r.getComponent(l).string = String("威力:" + s.skillDes.power + "  PP:" + s.ppLeft + "/" + s.skillDes.ppMax),
                                d && (d.ppTxt.string = s.skillDes.ppMax + "/" + s.skillDes.ppMax,
                                    d.powerTxt.string = "" + s.skillDes.power,
                                    d.speedText.string = "" + s.skillDes.speed,
                                    d.damageMC.gotoAndStop(s.skillDes.damageType)),
                                    m.active = !1,
                                    this._data[n.name] = i[_],
                                    n.tooltip = s.skillDes.description,
                                    n.sn = _ + 1,
                                h.getComponent(g) || h.addComponent(g),
                                    h.tooltip = s.skillDes.description,
                                    h.sn = _ + 1,
                                    h.target = n,
                                    this._iconLib[_].setSkillIcon(i[_].skillDes.property.id),
                                1 == s.isHeredity && (m.active = !0),
                                    i.length ? (h.on(o.TOUCH_END, this.onClick, this),
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
                            null != this.selectedSkill && (1 == this.selectedSkill.isHeredity ? h.showMsgBox("遗传技能不能替换.") : this.dispatchEvent(new c(c.GET_NEW_SKILL_CHANGE)))
                        }
                        ,
                        n.noChange = function(t) {
                            this.dispatchEvent(new c(c.GET_NEW_SKILL_NOCHANGE))
                        }
                        ,
                        n.resetBg = function() {
                            for (var t, e, i = 0; i < 4; i++)
                                e = "bg" + String(i + 1),
                                    (t = this._ui.getChildByName(e)).active = !1,
                                    t.on(o.MOUSE_ENTER, this.onOver, this),
                                    t.on(o.MOUSE_LEAVE, this.onOut, this)
                        }
                        ,
                        s
                }(r));
                var p = function(t) {
                    function i() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._ppTxt = void 0,
                            e._powerTxt = void 0,
                            e._speedText = void 0,
                            e._damageMC = void 0,
                            e
                    }
                    return e(i, t),
                        s(i, [{
                            key: "ppTxt",
                            get: function() {
                                return this._ppTxt || (this._ppTxt = new a(this.getChildByName("ppTxt"))),
                                    this._ppTxt
                            }
                        }, {
                            key: "powerTxt",
                            get: function() {
                                return this._powerTxt || (this._powerTxt = new a(this.getChildByName("powerTxt"))),
                                    this._powerTxt
                            }
                        }, {
                            key: "speedText",
                            get: function() {
                                return this._speedText || (this._speedText = new a(this.getChildByName("speedText"))),
                                    this._speedText
                            }
                        }, {
                            key: "damageMC",
                            get: function() {
                                return this._damageMC || (this._damageMC = new a(this.getChildByName("damageMC"))),
                                    this._damageMC
                            }
                        }]),
                        i
                }(a)
                    , k = function(t) {
                    function i() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._changeBtn = void 0,
                            e._noChangeBtn = void 0,
                            e._mm = void 0,
                            e._mm1 = void 0,
                            e._mm2 = void 0,
                            e._mm3 = void 0,
                            e._mm4 = void 0,
                            e._bg = void 0,
                            e._bg1 = void 0,
                            e._bg2 = void 0,
                            e._bg3 = void 0,
                            e._bg4 = void 0,
                            e._skillName = void 0,
                            e._skillIcon = void 0,
                            e._skillDes = void 0,
                            e._desc = void 0,
                            e
                    }
                    return e(i, t),
                        s(i, [{
                            key: "changeBtn",
                            get: function() {
                                return this._changeBtn || (this._changeBtn = new a(this.getChildByName("changeBtn"))),
                                    this._changeBtn
                            }
                        }, {
                            key: "noChangeBtn",
                            get: function() {
                                return this._noChangeBtn || (this._noChangeBtn = new a(this.getChildByName("noChangeBtn"))),
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
                                return this._bg || (this._bg = new a(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }, {
                            key: "bg1",
                            get: function() {
                                return this._bg1 || (this._bg1 = new a(this.getChildByName("bg1"))),
                                    this._bg1
                            }
                        }, {
                            key: "bg2",
                            get: function() {
                                return this._bg2 || (this._bg2 = new a(this.getChildByName("bg2"))),
                                    this._bg2
                            }
                        }, {
                            key: "bg3",
                            get: function() {
                                return this._bg3 || (this._bg3 = new a(this.getChildByName("bg3"))),
                                    this._bg3
                            }
                        }, {
                            key: "bg4",
                            get: function() {
                                return this._bg4 || (this._bg4 = new a(this.getChildByName("bg4"))),
                                    this._bg4
                            }
                        }, {
                            key: "skillName",
                            get: function() {
                                return this._skillName || (this._skillName = new a(this.getChildByName("skillName"))),
                                    this._skillName
                            }
                        }, {
                            key: "skillIcon",
                            get: function() {
                                return this._skillIcon || (this._skillIcon = new a(this.getChildByName("skillIcon"))),
                                    this._skillIcon
                            }
                        }, {
                            key: "skillDes",
                            get: function() {
                                return this._skillDes || (this._skillDes = new a(this.getChildByName("skillDes"))),
                                    this._skillDes
                            }
                        }, {
                            key: "desc",
                            get: function() {
                                return this._desc || (this._desc = new a(this.getChildByName("desc"))),
                                    this._desc
                            }
                        }]),
                        i
                }(a);
                n._RF.pop()
            }
        }
    }
));
