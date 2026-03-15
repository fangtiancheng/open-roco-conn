System.register("chunks:///_virtual/ControlBarCell.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(t) {
        var i, e, s, h, l, o, n, u;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        h = t.Label,
                        l = t.NodeEventType,
                        o = t.sys,
                        n = t.Node
                }
                , function(t) {
                    u = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "b4034+bK5ZCwbGyrJDe6NwF", "ControlBarCell", void 0);
                t("ControlBarCell", function(t) {
                    function s() {
                        var i;
                        return (i = t.call(this) || this).mouseOut = void 0,
                            i.mouseOver = void 0,
                            i.onSelect = void 0,
                            i.onDeselect = void 0,
                            i.tooltip = void 0,
                            i._ui = void 0,
                            i._enabled = !1,
                            i._selectable = !1,
                            i._selected = !1,
                            i.mouseDownBG = void 0,
                            i.normalBG = void 0,
                            i.highlightBG = void 0,
                            i._lab = null,
                            i
                    }
                    i(s, t);
                    var n = s.prototype;
                    return n.initialize = function(t) {
                        var i;
                        this._ui = t,
                            this._lab = null == (i = this._ui.getChildByName("Label")) ? void 0 : i.getComponent(h),
                        this._lab && (this._lab.node.active = u.IS_LOCAL,
                            this._lab.string = "true",
                            this._lab.node.active = !1),
                            this._enabled = !0,
                            this.selectable = !0,
                            this._selected = !1,
                            this.mouseDownBG = this._ui.getChildByName("mouseDownBG"),
                            this.normalBG = this._ui.getChildByName("normalBG"),
                            this.highlightBG = this._ui.getChildByName("highlightBG"),
                        null != this._ui && (this._ui.on(l.MOUSE_ENTER, this.onMouseOver, this),
                            o.platform == o.Platform.MOBILE_BROWSER ? this._ui.on(l.TOUCH_START, this.onMouseDown, this) : this._ui.on(l.MOUSE_DOWN, this.onMouseDown, this),
                            o.platform == o.Platform.MOBILE_BROWSER ? this._ui.on(l.TOUCH_CANCEL, this.onMouseUp, this) : this._ui.on(l.MOUSE_UP, this.onMouseUp, this),
                            this._ui.on(l.MOUSE_LEAVE, this.onMouseOut, this),
                            this._ui.on(l.TOUCH_END, this.onClick, this)),
                            this.highlight(!1)
                    }
                        ,
                        n.dispose = function() {
                            null != this._ui && (this._ui.off(l.MOUSE_ENTER, this.onMouseOver, this),
                                o.platform == o.Platform.MOBILE_BROWSER ? this._ui.off(l.TOUCH_START, this.onMouseDown, this) : this._ui.off(l.MOUSE_DOWN, this.onMouseDown, this),
                                o.platform == o.Platform.MOBILE_BROWSER ? this._ui.off(l.TOUCH_CANCEL, this.onMouseUp, this) : this._ui.off(l.MOUSE_UP, this.onMouseUp, this),
                                this._ui.off(l.MOUSE_LEAVE, this.onMouseOut, this),
                                this._ui.off(l.TOUCH_END, this.onClick, this))
                        }
                        ,
                        n.setSelected = function(t) {
                            this._selectable && (this._selected = t,
                                this.highlight(this._selected),
                                this.updateLabel())
                        }
                        ,
                        n.onMouseUp = function(t) {
                            this.selectable && this.downhlight(!1)
                        }
                        ,
                        n.onMouseDown = function(t) {
                            this.selectable && this.downhlight(!0)
                        }
                        ,
                        n.onMouseOver = function(t) {
                            this.mouseOver && this.mouseOver(this),
                            this.selectable && this.highlight(!0)
                        }
                        ,
                        n.onMouseOut = function(t) {
                            this.mouseOut && this.mouseOut(this),
                            this.selectable && this.highlight(!1)
                        }
                        ,
                        n.onClick = function(t) {
                            this.selected ? null != this.onDeselect && this.onDeselect(this) : null != this.onSelect && this.onSelect(this)
                        }
                        ,
                        n.highlight = function(t) {
                            null != this._ui && (t ? (null != this.normalBG && (this.normalBG.active = !1),
                            null != this.highlightBG && (this.highlightBG.active = !0),
                            null != this.mouseDownBG && (this.mouseDownBG.active = !1)) : (null != this.normalBG && (this.normalBG.active = !0),
                            null != this.highlightBG && (this.highlightBG.active = !1),
                            null != this.mouseDownBG && (this.mouseDownBG.active = !1)))
                        }
                        ,
                        n.downhlight = function(t) {
                            null != this._ui && (t ? (null != this.normalBG && (this.normalBG.active = !1),
                            null != this.highlightBG && (this.highlightBG.active = !1),
                            null != this.mouseDownBG && (this.mouseDownBG.active = !0)) : (null != this.normalBG && (this.normalBG.active = !0),
                            null != this.mouseDownBG && (this.mouseDownBG.active = !1),
                            null != this.highlightBG && (this.highlightBG.active = !1)))
                        }
                        ,
                        n.updateLabel = function() {
                            var t = "";
                            this._enabled ? t += "enabled\n" : t += "no-enabled\n",
                                this._selectable ? t += "selectable\n" : t += "no-selectable\n",
                                this._selected ? t += "selected" : t += "no-selected",
                            this._lab && (this._lab.string = t)
                        }
                        ,
                        e(s, [{
                            key: "data",
                            set: function(t) {
                                throw new Error("[ControlBarCell] 'set data' method needs to be overriden.")
                            }
                        }, {
                            key: "id",
                            get: function() {
                                throw new Error("[ControlBarCell] 'get id' method needs to be overriden.")
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                this._enabled = t,
                                    this.updateLabel()
                            }
                        }, {
                            key: "selectable",
                            get: function() {
                                return this._selectable
                            },
                            set: function(t) {
                                null == t && u.IS_LOCAL,
                                null == t && u.IS_LOCAL,
                                    this._selectable = t,
                                    this.updateLabel()
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this._selected
                            },
                            set: function(t) {
                                this._selectable && (this._selected = t,
                                    this.highlight(this._selected),
                                    this.updateLabel())
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
