System.register("chunks:///_virtual/ControlButton.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimationLoader.ts", "./BubbleSkinType.ts", "./ToolTip.ts", "./SpriteFrameSelector.ts", "./BuildLogHelper.ts"], (function(t) {
        var i, s, o, e, n, h, _, a, l, u, c, r;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.Node,
                        e = t.NodeEventType,
                        n = t.sys,
                        h = t.Label,
                        _ = t.Sprite
                }
                , function(t) {
                    a = t.AnimationLoader
                }
                , function(t) {
                    l = t.BubbleSkinType
                }
                , function(t) {
                    u = t.ToolTipComponent
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "27d5ffhmTtG26XWI/6cY1DS", "ControlButton", void 0);
                t("ControlButton", function() {
                    var t = s.prototype;
                    function s(t, i, s, o, e) {
                        var n;
                        this._ui = void 0,
                            this._id = 0,
                            this._callback = void 0,
                            this._selected = !1,
                            this._enabled = !1,
                            this._gray = !1,
                            this._tooltip = "",
                            this._grayTooltip = "",
                            this._selector = void 0,
                            this._animation = void 0,
                            this._aniResPath = void 0,
                            this._aniLoadDone = !1,
                            this._playState = !1,
                            this._lab = null,
                            this._buttonName = "",
                            this._aniResPath = o,
                            this._buttonName = e,
                            this._ui = t,
                            this._lab = null == (n = this._ui.getChildByName("Label")) ? void 0 : n.getComponent(h),
                        this._lab && (this._lab.node.active = r.IS_LOCAL,
                            this._lab.string = "虚位以待",
                            this._lab.node.active = !1),
                            this._id = i,
                            this._callback = s,
                        null != this._ui && (this._ui.addComponent(a),
                        this._ui.getComponent(u) || this._ui.addComponent(u),
                            this._ui.tooltipType = l.COMBAT_ITEMS),
                            this._selector = this._ui.getComponent(c),
                            this.selected = !1,
                            this.enabled = !0,
                            this.checkAnimation()
                    }
                    return t.success = function() {
                        this._aniLoadDone = !0,
                        this._animation && this.playAni(this._playState)
                    }
                        ,
                        t.playAni = function(t) {
                            this._playState = t,
                            0 != this._aniLoadDone && this._animation && (1 == t ? (this._animation.node.active = !0,
                                this._animation.play(),
                            1 == r.IS_LOCAL && console.info(this._aniResPath + "==play")) : (this._animation.node.active = !1,
                                this._animation.stop(),
                            1 == r.IS_LOCAL && console.info(this._aniResPath + "==stop")))
                        }
                        ,
                        t.checkAnimation = function() {
                            if (!this._animation && "" != this._aniResPath) {
                                var t = new o;
                                t.setScale(1.55, 1.55),
                                    this._animation = t.addComponent(a),
                                    this._animation.setPath("text", "plist/" + this._aniResPath).success = this.success.bind(this),
                                    this._ui.addChild(t),
                                    this._aniLoadDone = !1
                            }
                            this._animation && (0 == this._enabled ? this.playAni(this._enabled) : this.playAni(this._selected))
                        }
                        ,
                        t.dispose = function() {
                            this.enabled = !1,
                            null != this._ui && (this._ui.off(e.MOUSE_ENTER, this.onMouseOver, this),
                                this._ui.off(e.MOUSE_LEAVE, this.onMouseOut, this),
                                n.platform == n.Platform.MOBILE_BROWSER ? this._ui.off(e.TOUCH_START, this.onMouseDown, this) : this._ui.off(e.MOUSE_DOWN, this.onMouseDown, this),
                                this._ui.off(e.TOUCH_END, this.onMouseClick, this))
                        }
                        ,
                        t.onMouseOver = function(t) {
                            this._selected || this._gray || null != this._selector && this._selector.gotoAndStop(2)
                        }
                        ,
                        t.onMouseOut = function(t) {
                            this._selected || null != this._selector && this._selector.gotoAndStop(1)
                        }
                        ,
                        t.onMouseDown = function(t) {
                            this._selected || null != this._selector && this._selector.gotoAndStop(2)
                        }
                        ,
                        t.onMouseClick = function(t) {
                            null != this._selector && this._selector.gotoAndStop(1),
                            null != this._callback && this._callback(this)
                        }
                        ,
                        i(s, [{
                            key: "selected",
                            get: function() {
                                return this._selected
                            },
                            set: function(t) {
                                this._selected = t,
                                    this.checkAnimation(),
                                null != this._selector && this._selector.gotoAndStop(this._selected ? 3 : 1)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this._id
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                this._lab && (this._lab.string = 1 == t ? "true" : "false"),
                                    this._enabled = t,
                                    this.checkAnimation(),
                                null != this._ui && (t ? (this._ui.hasEventListener(e.MOUSE_ENTER, this.onMouseOver, this) || this._ui.on(e.MOUSE_ENTER, this.onMouseOver, this),
                                this._ui.hasEventListener(e.MOUSE_LEAVE, this.onMouseOut, this) || this._ui.on(e.MOUSE_LEAVE, this.onMouseOut, this),
                                    n.platform == n.Platform.MOBILE_BROWSER ? this._ui.hasEventListener(e.TOUCH_START, this.onMouseDown, this) || this._ui.on(e.TOUCH_START, this.onMouseDown, this) : this._ui.hasEventListener(e.MOUSE_DOWN, this.onMouseDown, this) || this._ui.on(e.MOUSE_DOWN, this.onMouseDown, this),
                                this._ui.hasEventListener(e.TOUCH_END, this.onMouseClick, this) || this._ui.on(e.TOUCH_END, this.onMouseClick, this)) : (this._ui.off(e.MOUSE_LEAVE, this.onMouseOut, this),
                                    n.platform == n.Platform.MOBILE_BROWSER ? this._ui.off(e.TOUCH_START, this.onMouseDown, this) : this._ui.off(e.MOUSE_DOWN, this.onMouseDown, this),
                                    this._ui.off(e.TOUCH_END, this.onMouseClick, this)),
                                    this.selected = this._selected),
                                null != this._selector && this._selector.gotoAndStop(t ? 1 : 4)
                            }
                        }, {
                            key: "gray",
                            get: function() {
                                return this._gray
                            },
                            set: function(t) {
                                this._gray = t,
                                    this.enabled = !this._gray,
                                null != this._ui && (this._ui.getComponent(_).grayscale = t,
                                    this._ui.tooltip = this._gray ? this._grayTooltip : this._tooltip)
                            }
                        }, {
                            key: "tooltip",
                            set: function(t) {
                                this._tooltip = t
                            }
                        }, {
                            key: "grayTooltip",
                            set: function(t) {
                                this._grayTooltip = t
                            }
                        }]),
                        s
                }());
                s._RF.pop()
            }
        }
    }
));
