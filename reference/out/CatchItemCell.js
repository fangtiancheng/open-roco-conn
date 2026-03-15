System.register("chunks:///_virtual/CatchItemCell.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BubbleSkinType.ts", "./ToolTip.ts", "./PReadHelp.ts", "./CombatImage.ts", "./ControlBarCell.ts", "./CacheManager2.ts"], (function(t) {
        var i, e, n, o, s, l, a, h, c, _;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.Label
                }
                , function(t) {
                    s = t.BubbleSkinType
                }
                , function(t) {
                    l = t.ToolTipComponent
                }
                , function(t) {
                    a = t.PReadHelp
                }
                , function(t) {
                    h = t.CombatImage
                }
                , function(t) {
                    c = t.ControlBarCell
                }
                , function(t) {
                    _ = t.CacheManager
                }
            ],
            execute: function() {
                n._RF.push({}, "a7ce13t/8RGQI6rMG/35sFt", "CatchItemCell", void 0);
                var u = t("CatchItemCell", function(t) {
                    function n() {
                        var i;
                        return (i = t.call(this) || this)._data = void 0,
                            i._icon = void 0,
                            i._tooltipBG = void 0,
                            i._emptyBG = void 0,
                            i._numberBG = void 0,
                            i._numberText = void 0,
                            i.catchRate = 0,
                            i
                    }
                    i(n, t);
                    var c = n.prototype;
                    return c.initialize = function(i) {
                        t.prototype.initialize.call(this, i),
                            this._ui = i,
                            this._data = null,
                            this._tooltipBG = this._ui.getChildByName("tooltipBG"),
                        this._tooltipBG && !this._tooltipBG.getComponent(l) && this._tooltipBG.addComponent(l),
                            this._emptyBG = this._ui.getChildByName("emptyBG"),
                            this._numberBG = this._ui.getChildByName("numberBG"),
                            this._numberText = this._ui.getChildByName("numberText").getComponent(o),
                        null != this._ui && (this._icon = new h(n.ICON_WIDTH,n.ICON_HEIGHT),
                            this._icon.setImageCache(_.getInstance().cache),
                            this._icon.x = n.ICON_X,
                            this._icon.y = n.ICON_Y,
                            this._ui.getChildByName("iconLoader").addChild(this._icon))
                    }
                        ,
                        c.dispose = function() {
                            t.prototype.dispose.call(this),
                            null != this._icon && (this._icon.dispose(),
                                this._icon = null)
                        }
                        ,
                        c.getItemTooltipText = function(t) {
                            return null == t ? null : "<color=#FF7A22>" + t.name + "</color>\n<color=#FFFFFF>" + t.description + "</color>"
                        }
                        ,
                        e(n, [{
                            key: "data",
                            set: function(t) {
                                if (this._data = t,
                                null != this._data && null != this._data.itemDes) {
                                    var i = a.sskillProxy.select(this._data.itemDes.id);
                                    i && (this.catchRate = i.catchRate),
                                    null != this._ui && (this._tooltipBG.tooltipType = s.COMBAT_ITEMS,
                                        this._tooltipBG.tooltip = this.getItemTooltipText(this._data.itemDes),
                                        this._numberText.string = String(this._data.count),
                                        this._numberBG.active = !0,
                                        this.normalBG.active = !0,
                                        this.highlightBG.active = !1,
                                        this._emptyBG.active = !1),
                                    null != this._icon && this._icon.setPath(this._data.itemDes.url),
                                        this.selectable = this._enabled
                                } else
                                    this._tooltipBG.tooltip = null,
                                        this._numberText.string = "",
                                        this._numberBG.active = !1,
                                        this.normalBG.active = !1,
                                        this.highlightBG.active = !1,
                                        this._emptyBG.active = !0,
                                    null != this._icon && this._icon.dispose(),
                                        this.selectable = !1
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return null == this._data || null == this._data.itemDes ? -1 : this._data.itemDes.id
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                this._enabled = t,
                                    this.selectable = null != this._data && null != this._data.itemDes && this._enabled
                            }
                        }]),
                        n
                }(c));
                u.ICON_WIDTH = 100,
                    u.ICON_HEIGHT = 100,
                    u.ICON_X = 0,
                    u.ICON_Y = 0,
                    n._RF.pop()
            }
        }
    }
));
