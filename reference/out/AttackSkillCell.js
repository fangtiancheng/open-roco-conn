System.register("chunks:///_virtual/AttackSkillCell.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BubbleSkinType.ts", "./ToolTip.ts", "./SpriteFrameSelector.ts", "./FilterUtil.ts", "./CombatImage.ts", "./ControlBarCell.ts", "./CacheManager2.ts"], (function(t) {
        var i, e, s, l, o, a, h, n, _, p, c, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        l = t.Label,
                        o = t.ProgressBar
                }
                , function(t) {
                    a = t.BubbleSkinType
                }
                , function(t) {
                    h = t.ToolTipComponent
                }
                , function(t) {
                    n = t.default
                }
                , function(t) {
                    _ = t.FilterUtil
                }
                , function(t) {
                    p = t.CombatImage
                }
                , function(t) {
                    c = t.ControlBarCell
                }
                , function(t) {
                    r = t.CacheManager
                }
            ],
            execute: function() {
                s._RF.push({}, "3871crHLL9NQYdwOyONzLc5", "AttackSkillCell", void 0);
                var u = t("AttackSkillCell", function(t) {
                    function s() {
                        var i;
                        return (i = t.call(this) || this)._tooltipBG = void 0,
                            i._skillNameText = void 0,
                            i._powerText = void 0,
                            i._speedText = void 0,
                            i._ppText = void 0,
                            i._staticStuffs = void 0,
                            i._damageMC = void 0,
                            i._bar = void 0,
                            i._emptyBG = void 0,
                            i._bottleMc = void 0,
                            i._data = void 0,
                            i._icon = void 0,
                            i
                    }
                    i(s, t);
                    var c = s.prototype;
                    return c.initialize = function(i) {
                        t.prototype.initialize.call(this, i),
                            this._ui = i,
                            this._tooltipBG = this._ui.getChildByName("tooltipBG"),
                        this._tooltipBG && !this._tooltipBG.getComponent(h) && this._tooltipBG.addComponent(h),
                            this._skillNameText = this._ui.getChildByName("skillNameText").getComponent(l),
                            this._powerText = this._ui.getChildByName("powerText").getComponent(l),
                            this._speedText = this._ui.getChildByName("speedText").getComponent(l),
                            this._ppText = this._ui.getChildByName("ppText").getComponent(l),
                            this._staticStuffs = this._ui.getChildByName("staticStuffs"),
                            this._damageMC = this._ui.getChildByName("damageMC").getComponent(n),
                            this._bar = this._ui.getChildByName("bar").getComponent(o),
                            this._emptyBG = this._ui.getChildByName("emptyBG"),
                            this._bottleMc = this._ui.getChildByName("bottleMc"),
                            this._data = null,
                        null != this._ui && (this._icon = new p(s.ICON_WIDTH,s.ICON_HEIGHT),
                            this._icon.setImageCache(r.getInstance().cache),
                            this._icon.tooltip = null,
                            this._icon.x = s.ICON_X,
                            this._icon.y = s.ICON_Y,
                            this._ui.addChild(this._icon))
                    }
                        ,
                        c.dispose = function() {
                            t.prototype.dispose.call(this),
                            null != this._ui && (this._ui = null),
                            null != this._icon && (this._icon.dispose(),
                                this._icon.tooltip = null)
                        }
                        ,
                        c.getSkillTooltipText = function(t) {
                            if (null == t)
                                return null;
                            var i = "";
                            switch (t.damageType) {
                                case 1:
                                    i += "攻击类型：物理攻击\n";
                                    break;
                                case 2:
                                    i += "攻击类型：魔法攻击\n"
                            }
                            return i += "出招速度：" + t.speed + "\n",
                            "<color=#FF7A22>" + t.name + "</color>\n<color=#FFFFFF>" + i + t.description + "</color>"
                        }
                        ,
                        c.getFeatureTooltipText = function(t) {
                            return null == t ? null : "<color=#FFFFFF>" + t.name + "</color>"
                        }
                        ,
                        c.reHighlight = function() {
                            null != this._data ? this.selectable && null != this._ui || this.highlight(!1) : (this.normalBG.active = !1,
                                this.highlightBG.active = !1,
                                this._emptyBG.active = !0,
                                this._bottleMc.active = !1,
                                this.mouseDownBG.active = !1)
                        }
                        ,
                        e(s, [{
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                    null != this._data && null != this._data.skillDes ? (null != this._ui && (this._tooltipBG.tooltipType = a.COMBAT_ITEMS,
                                        this._tooltipBG.tooltip = this.getSkillTooltipText(this._data.skillDes),
                                        this._skillNameText.string = null != this._data.skillDes.name ? this._data.skillDes.name : "",
                                        this._powerText.string = String(this._data.skillDes.power),
                                        this._ppText.string = this._data.ppLeft + "/" + this._data.skillDes.ppMax,
                                        this._damageMC.gotoAndStop(this._data.skillDes.damageType),
                                        this._bar.progress = this._data.ppLeft / this._data.skillDes.ppMax,
                                        this._speedText.string = String(this._data.skillDes.speed),
                                        this._staticStuffs.active = !0,
                                        this.normalBG.active = !0,
                                        this.highlightBG.active = !1,
                                        this._emptyBG.active = !1,
                                        this._bottleMc.active = !0,
                                        this.mouseDownBG.active = !1,
                                        this._data.ppLeft > 0 ? (_.gray(this._ui, !1),
                                            this.selectable = this._enabled) : (_.gray(this._ui, !0),
                                            this.selectable = !1)),
                                    null != this._icon && null != this._data.skillDes.property && (this._icon.setSkillIcon(this._data.skillDes.property.id),
                                        this._icon.tooltipType = a.COMBAT_ITEMS,
                                        this._icon.tooltip = this.getFeatureTooltipText(this._data.skillDes.property))) : (this._tooltipBG.tooltip = "null",
                                        this._tooltipBG.tooltip = null,
                                        this._skillNameText.string = "",
                                        this._powerText.string = "",
                                        this._speedText.string = "",
                                        this._ppText.string = "",
                                        this._staticStuffs.active = !1,
                                        this._damageMC.gotoAndStop(3),
                                        this._bar.progress = 0,
                                        this.mouseDownBG.active = !1,
                                        this.normalBG.active = !1,
                                        this.highlightBG.active = !1,
                                        this._emptyBG.active = !0,
                                        this._bottleMc.active = !1,
                                    null != this._icon && (this._icon.dispose(),
                                        this._icon.tooltip = null),
                                        this.selectable = !1),
                                    this.reHighlight()
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
                                    this.selectable = null != this._data && null != this._data.skillDes && this._data.ppLeft > 0 && this._enabled,
                                    this.reHighlight()
                            }
                        }]),
                        s
                }(c));
                u.ICON_WIDTH = 58,
                    u.ICON_HEIGHT = 58,
                    u.ICON_X = -84,
                    u.ICON_Y = 32,
                    s._RF.pop()
            }
        }
    }
));
