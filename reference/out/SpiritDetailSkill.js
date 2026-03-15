System.register("chunks:///_virtual/SpiritDetailSkill.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./AgentNode.ts", "./ToolTip.ts", "./SpiritDataReader.ts", "./SpiritBagSpiritIcon.ts"], (function(t) {
        var i, e, s, n, o, l, a, p, u;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    n = t.Constants
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    l = t.AgentNode
                }
                , function(t) {
                    a = t.ToolTipComponent
                }
                , function(t) {
                    p = t.SpiritDataReader
                }
                , function(t) {
                    u = t.SpiritBagSpiritIcon
                }
            ],
            execute: function() {
                s._RF.push({}, "98a9cInpO5IZqLWWtYYMYRw", "SpiritDetailSkill", void 0);
                var h = t("SpiritDetailSkill", function() {
                    function t(i) {
                        this._ui = void 0,
                            this._skillIcon = void 0,
                            this._ui = new r(i),
                        null != this._ui && (this._ui.addComponent(a),
                            this._ui.nameText.mouseEnabled = !1,
                            this._ui.powerText.mouseEnabled = !1,
                            this._ui.ppText.mouseEnabled = !1,
                            this._ui.staticStuffs.mouseEnabled = !1,
                            this._skillIcon = new u,
                            this._skillIcon.ui = this._ui.target,
                            this._skillIcon.display.x = t.ICON_X,
                            this._skillIcon.display.y = t.ICON_Y,
                            this._skillIcon.display.width = t.ICON_WIDTH,
                            this._skillIcon.display.height = t.ICON_HEIGHT)
                    }
                    var e = t.prototype;
                    return e.getSkillTooltipText = function(t) {
                        if (null == t)
                            return null;
                        var i = ""
                            , e = o.SysAPI.getGDataAPI().getDataProxy(n.SSKILL_DATA)
                            , s = e.select(t.id).damageType
                            , l = e.select(t.id).speed;
                        switch (s) {
                            case 1:
                                i += "攻击类型：物理攻击\n";
                                break;
                            case 2:
                                i += "攻击类型：魔法攻击\n"
                        }
                        return i += "出招速度：" + l + "\n",
                        "<color=#FF7A22>" + t.name + "</color>\n<color=#FFFFFF>" + i + t.description + "</color>"
                    }
                        ,
                        e.dispose = function() {
                            this._ui = null
                        }
                        ,
                        e.setSkillIcon = function(t) {
                            null != this._skillIcon && (null != t && null != t.property ? (this._skillIcon.tooltip = t.property.name,
                                this._skillIcon.load(t.property.id)) : (this._skillIcon.tooltip = null,
                                this._skillIcon.load(0)))
                        }
                        ,
                        i(t, [{
                            key: "data",
                            set: function(t) {
                                if (null != this._ui)
                                    if (null != t) {
                                        this._ui.nameText.text = t.name,
                                            this._ui.powerText.text = t.power.toString(),
                                            this._ui.ppText.text = t.PP + "/" + t.PPMax,
                                            this._ui.staticStuffs.visible = !0,
                                            this._ui.tooltip = t.description,
                                            this._ui.tooltip = this.getSkillTooltipText(t);
                                        var i = p.getDamageType(t.id);
                                        this._ui.damageMC.gotoAndStop(i),
                                            this._ui.bar.gotoAndStop(t.PP / t.PPMax * 100);
                                        var e = p.getSpeed(t.id);
                                        this._ui.speedText.text = e.toString(),
                                            this._ui.ppIcon.visible = !0,
                                            this.setSkillIcon(t)
                                    } else
                                        this._ui.nameText.text = "",
                                            this._ui.powerText.text = "",
                                            this._ui.ppText.text = "",
                                            this._ui.staticStuffs.visible = !1,
                                            this._ui.tooltip = null,
                                            this._ui.damageMC.gotoAndStop(3),
                                            this._ui.bar.gotoAndStop(0),
                                            this._ui.speedText.text = "",
                                            this._ui.ppIcon.visible = !1,
                                            this.setSkillIcon(null)
                            }
                        }]),
                        t
                }());
                h.ICON_X = -82,
                    h.ICON_Y = 18,
                    h.ICON_WIDTH = 54,
                    h.ICON_HEIGHT = 54;
                var r = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._ppIcon = void 0,
                            i._nameText = void 0,
                            i._powerText = void 0,
                            i._ppText = void 0,
                            i._staticStuffs = void 0,
                            i._speedText = void 0,
                            i._damageMC = void 0,
                            i._bar = void 0,
                            i
                    }
                    return e(s, t),
                        i(s, [{
                            key: "ppIcon",
                            get: function() {
                                return this._ppIcon || (this._ppIcon = new l(this.getChildByName("ppIcon"))),
                                    this._ppIcon
                            }
                        }, {
                            key: "nameText",
                            get: function() {
                                return this._nameText || (this._nameText = new l(this.getChildByName("nameText"))),
                                    this._nameText
                            }
                        }, {
                            key: "powerText",
                            get: function() {
                                return this._powerText || (this._powerText = new l(this.getChildByName("powerText"))),
                                    this._powerText
                            }
                        }, {
                            key: "ppText",
                            get: function() {
                                return this._ppText || (this._ppText = new l(this.getChildByName("ppText"))),
                                    this._ppText
                            }
                        }, {
                            key: "staticStuffs",
                            get: function() {
                                return this._staticStuffs || (this._staticStuffs = new l(this.getChildByName("staticStuffs"))),
                                    this._staticStuffs
                            }
                        }, {
                            key: "speedText",
                            get: function() {
                                return this._speedText || (this._speedText = new l(this.getChildByName("speedText"))),
                                    this._speedText
                            }
                        }, {
                            key: "damageMC",
                            get: function() {
                                return this._damageMC || (this._damageMC = new l(this.getChildByName("damageMC"))),
                                    this._damageMC
                            }
                        }, {
                            key: "bar",
                            get: function() {
                                return this._bar || (this._bar = new l(this.getChildByName("bar"))),
                                    this._bar
                            }
                        }]),
                        s
                }(l);
                s._RF.pop()
            }
        }
    }
));
