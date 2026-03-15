System.register("chunks:///_virtual/SpiritCell.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BubbleSkinType.ts", "./SpriteFrameSelector.ts", "./CombatImage.ts", "./ControlBarCell.ts", "./CacheManager2.ts"], (function(t) {
        var i, e, s, l, n, o, a, r, h, _, c, u, d;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        l = t.Label,
                        n = t.sys,
                        o = t.NodeEventType,
                        a = t.Sprite,
                        r = t.Component
                }
                , function(t) {
                    h = t.BubbleSkinType
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    c = t.CombatImage
                }
                , function(t) {
                    u = t.ControlBarCell
                }
                , function(t) {
                    d = t.CacheManager
                }
            ],
            execute: function() {
                s._RF.push({}, "57540zGY7NCAJNnJbawvAOi", "SpiritCell", void 0);
                var p = t("SkillDesMcComponent", function(t) {
                    function e() {
                        for (var i, e = arguments.length, s = new Array(e), l = 0; l < e; l++)
                            s[l] = arguments[l];
                        return (i = t.call.apply(t, [this].concat(s)) || this).txtSkillName = void 0,
                            i.txtSkillProperty = void 0,
                            i.txtPP = void 0,
                            i.txtPower = void 0,
                            i
                    }
                    return i(e, t),
                        e.prototype.init = function() {
                            this.txtSkillName = this.node.getChildByName("txtSkillName").getComponent(l),
                                this.txtSkillProperty = this.node.getChildByName("txtSkillProperty").getComponent(l),
                                this.txtPP = this.node.getChildByName("txtPP").getComponent(l),
                                this.txtPower = this.node.getChildByName("txtPower").getComponent(l)
                        }
                        ,
                        e
                }(r))
                    , f = t("SpiritCell", function(t) {
                    function s() {
                        var i;
                        return (i = t.call(this) || this)._data = void 0,
                            i._icon = void 0,
                            i._featureIcons = void 0,
                            i._canShowTips = !1,
                            i._lifeBar = void 0,
                            i._tooltipBG = void 0,
                            i._indicationText = void 0,
                            i._emptyBG = void 0,
                            i._nameBG = void 0,
                            i._levelBG = void 0,
                            i._skillDesMcArr = void 0,
                            i._lifeTxt = void 0,
                            i._nameText = void 0,
                            i._levelText = void 0,
                            i._combatAllSkillMsg = void 0,
                            i
                    }
                    i(s, t);
                    var r = s.prototype;
                    return r.initialize = function(i) {
                        t.prototype.initialize.call(this, i),
                            this._ui = i,
                            this._data = null,
                            this._lifeBar = this._ui.getChildByName("lifeBar"),
                            this._tooltipBG = this._ui.getChildByName("tooltipBG"),
                            this._indicationText = this._ui.getChildByName("indicationText").getComponent(_),
                            this._emptyBG = this._ui.getChildByName("emptyBG"),
                            this._nameBG = this._ui.getChildByName("nameBG"),
                            this._levelBG = this._ui.getChildByName("levelBG"),
                            this._lifeTxt = this._ui.getChildByName("lifeTxt").getComponent(l),
                            this._nameText = this._ui.getChildByName("nameText").getComponent(l),
                            this._levelText = this._ui.getChildByName("levelText").getComponent(l),
                            this._combatAllSkillMsg = this._ui.getChildByName("combatAllSkillMsg"),
                            this._skillDesMcArr = new Array;
                        for (var e = 0; e < 4; e++) {
                            var s = this._combatAllSkillMsg.getChildByName("skillDesMc" + e).addComponent(p);
                            s.init(),
                                this._skillDesMcArr.push(s)
                        }
                        if (this.initSpiritIcon(),
                            this.initFeatureIcons(),
                        null != this._ui) {
                            this._lifeBar.active = !1,
                                this._tooltipBG.active = !0,
                                this._indicationText.gotoAndStop(1),
                                this._indicationText.node.active = !1,
                                this._combatAllSkillMsg.active = !1,
                                this._lifeTxt.string = "";
                            for (var a = 0; a < 4; ++a)
                                this._skillDesMcArr[a].txtSkillName.string = "",
                                    this._skillDesMcArr[a].txtSkillProperty.string = "",
                                    this._skillDesMcArr[a].txtPP.string = "",
                                    this._skillDesMcArr[a].txtPower.string = "";
                            n.platform == n.Platform.MOBILE_BROWSER ? this._tooltipBG.on(o.TOUCH_START, this.mouseOverListener, this) : this._tooltipBG.on(o.MOUSE_ENTER, this.mouseOverListener, this),
                                n.platform == n.Platform.MOBILE_BROWSER ? (this._tooltipBG.on(o.TOUCH_CANCEL, this.mouseOutListener, this),
                                    this._tooltipBG.on(o.TOUCH_END, this.mouseOutListener, this)) : this._tooltipBG.on(o.MOUSE_LEAVE, this.mouseOutListener, this)
                        }
                    }
                        ,
                        r.dispose = function() {
                            t.prototype.dispose.call(this),
                            this._ui && (this._tooltipBG.off(o.MOUSE_ENTER, this.mouseOverListener, this),
                                this._tooltipBG.off(o.MOUSE_LEAVE, this.mouseOutListener, this)),
                                this._data = null,
                                this.disposeSpiritIcon(),
                                this.disposeFeatureIcons()
                        }
                        ,
                        r.mouseOverListener = function(t) {
                            this._canShowTips && (this._combatAllSkillMsg.active = !0)
                        }
                        ,
                        r.mouseOutListener = function(t) {
                            this._combatAllSkillMsg.active = !1
                        }
                        ,
                        r.initSpiritIcon = function() {
                            null != this._ui && null != this._nameBG && (this._icon = new c(s.ICON_WIDTH,s.ICON_HEIGHT),
                                this._icon.setImageCache(d.getInstance().cache),
                                this._icon.x = s.ICON_X,
                                this._icon.y = s.ICON_Y,
                                this._ui.getChildByName("iconLoader").addChild(this._icon))
                        }
                        ,
                        r.disposeSpiritIcon = function() {
                            this.clearSpiritIcon(),
                                this._icon.destroy(),
                                this._icon = null
                        }
                        ,
                        r.setSpiritIcon = function() {
                            0 != this._data.skinID ? this._icon.setSpiritIcon(this._data.skinID) : this._icon.setSpiritIcon(this._data.spiritDes.id),
                                this._data.curHP <= 0 ? this._icon.getComponent(a).grayscale = !0 : this._icon.getComponent(a).grayscale = !1
                        }
                        ,
                        r.clearSpiritIcon = function() {
                            null != this._icon && (this._icon.filters = [],
                                this._icon.dispose(),
                                this._icon.tooltip = null)
                        }
                        ,
                        r.initFeatureIcons = function() {
                            if (null != this._ui) {
                                var t;
                                this._featureIcons = [];
                                for (var i = 0; i < s.FEATURE_ICON_NUM; ++i)
                                    (t = new c(s.FEATURE_ICON_WIDTH,s.FEATURE_ICON_HEIGHT)).setImageCache(d.getInstance().cache),
                                        t.x = 0,
                                        t.y = 0,
                                        this._ui.getChildByName("featureIcon" + i).addChild(t),
                                        this._featureIcons.push(t)
                            }
                        }
                        ,
                        r.disposeFeatureIcons = function() {
                            this.clearFeatureIcons(),
                                this._featureIcons = null
                        }
                        ,
                        r.setFeatureIcons = function() {
                            if (this.clearFeatureIcons(),
                            null != this._data.spiritDes.features)
                                for (var t = this._data.spiritDes.features.length, i = 0; i < t; ++i)
                                    null != this._data.spiritDes.features[i] && null != this._featureIcons[i] && (this._featureIcons[i].setSkillIcon(this._data.spiritDes.features[i].id),
                                        this._featureIcons[i].tooltipType = h.COMBAT_ITEMS,
                                        this._featureIcons[i].tooltip = this.getFeatureTooltipText(this._data.spiritDes.features[i]),
                                        this._ui.getChildByName("featureIcon" + i).active = !0)
                        }
                        ,
                        r.clearFeatureIcons = function() {
                            for (var t = this._featureIcons.length, i = 0; i < t; ++i)
                                this._ui.getChildByName("featureIcon" + i).active = !1,
                                null != this._featureIcons[i] && (this._featureIcons[i].dispose(),
                                    this._featureIcons[i].tooltip = null)
                        }
                        ,
                        r.showSkillsTooltipText = function() {
                            if (null != this._data.skills) {
                                for (var t, i = this._data.skills.length, e = 0; e < 4; ++e)
                                    this._skillDesMcArr[e].txtSkillName.string = "",
                                        this._skillDesMcArr[e].txtSkillProperty.string = "",
                                        this._skillDesMcArr[e].txtPP.string = "",
                                        this._skillDesMcArr[e].txtPower.string = "";
                                for (var s = 0; s < i; ++s)
                                    null != (t = this._data.skills[s]) && null != t.skillDes && (this._skillDesMcArr[s].txtSkillName.string = t.skillDes.name,
                                        this._skillDesMcArr[s].txtSkillProperty.string = t.skillDes.property.name,
                                        this._skillDesMcArr[s].txtPP.string = "PP:" + t.ppLeft + "/" + t.skillDes.ppMax,
                                        this._skillDesMcArr[s].txtPower.string = "威力值:" + t.skillDes.power)
                            }
                        }
                        ,
                        r.getSkillsTooltipText = function(t) {
                            if (null == t || null == this._data.skills)
                                return null;
                            for (var i, e = "", s = this._data.skills.length, l = 0; l < s; ++l)
                                null != (i = this._data.skills[l]) && null != i.skillDes && (e += "<color=#FF7A22>",
                                    e += i.skillDes.name + "</color>|",
                                    e += "<color=#FFFFFF>" + i.skillDes.property.name + "|",
                                    e += "<color=#FFFFFF>PP: " + i.ppLeft + "/" + i.skillDes.ppMax + "|",
                                    e += "威力值: " + i.skillDes.power + "\n",
                                    e += "</color>");
                            return "" != e ? e : null
                        }
                        ,
                        r.getFeatureTooltipText = function(t) {
                            return null == t ? null : "<color=#FFFFFF>" + t.name + "</color>"
                        }
                        ,
                        e(s, [{
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                    this._lifeTxt.string = "",
                                    null != this._data && null != this._data.spiritDes ? (null != this._ui && (this._nameText.string = null != this._data.spiritDes.name ? this._data.spiritDes.name : "",
                                        this._nameBG.active = !0,
                                        this._levelBG.active = !0,
                                        this._levelText.string = "" + this._data.level,
                                        this._lifeTxt.string = this._data.curHP + "/" + this._data.maxHP,
                                        this._lifeBar.active = !0,
                                        this.normalBG.active = !0,
                                        this.highlightBG.active = !1,
                                        this._emptyBG.active = !1,
                                        this.showSkillsTooltipText()),
                                        this.setSpiritIcon(),
                                        this.setFeatureIcons(),
                                        this._canShowTips = !0,
                                        this._data.curHP > 0 ? this.selectable = this._enabled : this.selectable = !1) : (null != this._ui && (this._tooltipBG.tooltip = null,
                                        this._nameText.string = "",
                                        this._nameBG.active = !1,
                                        this._levelBG.active = !1,
                                        this._levelText.string = "",
                                        this._lifeBar.active = !1,
                                        this.normalBG.active = !1,
                                        this.highlightBG.active = !1,
                                        this._emptyBG.active = !0),
                                        this.clearSpiritIcon(),
                                        this.clearFeatureIcons(),
                                        this._canShowTips = !1,
                                        this.selected = !1,
                                        this.selectable = !1)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return null == this._data ? -1 : this._data.id
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                this._enabled = t,
                                    this.selectable = null != this._data && null != this._data.spiritDes && this._data.curHP > 0 && this._enabled
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this._selected
                            },
                            set: function(t) {
                                this.setSelected(t),
                                null != this._ui && (this._indicationText.gotoAndStop(null != this._data && this._data.curHP > 0 ? 1 : 2),
                                    this._indicationText.node.active = null != this._data && (this._data.curHP <= 0 || t))
                            }
                        }, {
                            key: "index",
                            get: function() {
                                return null == this._data ? -1 : this._data.index
                            }
                        }]),
                        s
                }(u));
                f.ICON_WIDTH = 120,
                    f.ICON_HEIGHT = 120,
                    f.ICON_X = 0,
                    f.ICON_Y = 0,
                    f.FEATURE_ICON_NUM = 2,
                    f.FEATURE_ICON_WIDTH = 42,
                    f.FEATURE_ICON_HEIGHT = 42,
                    f.FEATURE_ICON_X = 75,
                    f.FEATURE_ICON_Y = 5,
                    f.FEATURE_ICON_SPACE_Y = 28,
                    s._RF.pop()
            }
        }
    }
));
