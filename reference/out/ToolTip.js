System.register("chunks:///_virtual/ToolTip.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./GlobalTimer.ts", "./Timer.ts", "./TimerEvent.ts", "./GlobalConfig.ts", "./UIManager.ts", "./BubbleSkinType.ts"], (function(i) {
        var t, e, s, o, n, h, _, u, l, r, b, p, a, T, d, c, f, g;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    e = i.createClass
            }
                , function(i) {
                    s = i.cclegacy,
                        o = i.sys,
                        n = i.NodeEventType,
                        h = i.Vec2,
                        _ = i.UITransform,
                        u = i.view,
                        l = i.EventMouse,
                        r = i.isValid,
                        b = i.Component
                }
                , function(i) {
                    p = i.default
                }
                , function(i) {
                    a = i.GlobalTimer
                }
                , function(i) {
                    T = i.Timer
                }
                , function(i) {
                    d = i.default
                }
                , function(i) {
                    c = i.GlobalConfig
                }
                , function(i) {
                    f = i.default
                }
                , function(i) {
                    g = i.BubbleSkinType
                }
            ],
            execute: function() {
                s._RF.push({}, "00adfp3ybFNMq+rtEzQvNUr", "ToolTip", void 0);
                var m = i("ToolTipComponentBase", function(i) {
                    function s() {
                        for (var t, e = arguments.length, s = new Array(e), o = 0; o < e; o++)
                            s[o] = arguments[o];
                        return (t = i.call.apply(i, [this].concat(s)) || this)._pause = !1,
                            t._onShow = !1,
                            t._isLongPressed = !1,
                            t._isRemoved = !1,
                            t
                    }
                    t(s, i);
                    var h = s.prototype;
                    return h.start = function() {
                        o.platform == o.Platform.MOBILE_BROWSER ? (this.node.on(n.TOUCH_START, this.onTouchStart, this, !0),
                            this.node.on(n.TOUCH_CANCEL, this.onTouchCancel, this, !0),
                            this.node.on(n.TOUCH_END, this.onTouchEnd, this, !0)) : (this.node.on(n.MOUSE_ENTER, this.onMouseEnter, this, !0),
                            this.node.on(n.MOUSE_LEAVE, this.onMouseLeave, this, !0),
                            this.node.on(n.MOUSE_DOWN, this.onMouseDown, this, !0))
                    }
                        ,
                        h.onMouseEnter = function(i) {
                            var t = this;
                            this._isRemoved = !1,
                            1 != this.pause && 1 != this._onShow && setTimeout((function() {
                                    t._isRemoved ? t._onShow = !1 : (t._onShow = !0,
                                        t.showTips())
                                }
                            ), 50)
                        }
                        ,
                        h.onMouseLeave = function(i) {
                            this._onShow = !1,
                                this._isRemoved = !0,
                                this.hiddenTips()
                        }
                        ,
                        h.onMouseDown = function(i) {
                            this._onShow = !1,
                                this._isRemoved = !0,
                                this._isLongPressed = !1,
                                a.unregisterTimer("ToolTipComponent"),
                                this.hiddenTips()
                        }
                        ,
                        h.onTouchStart = function(i) {
                            this._isRemoved = !1,
                                a.unregisterTimer("ToolTipComponent"),
                                a.registerTimer("ToolTipComponent", 600, this.onLongPress, this, !1)
                        }
                        ,
                        h.onTouchCancel = function(i) {
                            this._onShow = !1,
                                this._isRemoved = !0,
                                this._isLongPressed = !1,
                                a.unregisterTimer("ToolTipComponent"),
                                this.hiddenTips()
                        }
                        ,
                        h.onTouchEnd = function(i) {
                            this._onShow = !1,
                                this._isRemoved = !0,
                            1 == this._isLongPressed && (i.propagationImmediateStopped = !0),
                                this._isLongPressed = !1,
                                a.unregisterTimer("ToolTipComponent"),
                                this.hiddenTips()
                        }
                        ,
                        h.onLongPress = function() {
                            var i = this;
                            this._isLongPressed = !0,
                                a.unregisterTimer("ToolTipComponent"),
                            1 != this.pause && 1 != this._onShow && setTimeout((function() {
                                    i._isRemoved ? i._onShow = !1 : (i._onShow = !0,
                                        i.showTips())
                                }
                            ), 50)
                        }
                        ,
                        h.destory = function() {
                            o.platform == o.Platform.MOBILE_BROWSER ? (this.node.off(n.TOUCH_START, this.onTouchStart, this, !0),
                                this.node.off(n.TOUCH_CANCEL, this.onTouchCancel, this, !0),
                                this.node.off(n.TOUCH_END, this.onTouchEnd, this, !0)) : (this.node.off(n.MOUSE_ENTER, this.onMouseEnter, this, !0),
                                this.node.off(n.MOUSE_LEAVE, this.onMouseLeave, this, !0))
                        }
                        ,
                        h.hide = function() {
                            this._onShow = !1,
                                this.hiddenTips()
                        }
                        ,
                        h.show = function() {
                            1 != this._onShow && (this._onShow = !0,
                                this.showTips())
                        }
                        ,
                        h.showTips = function() {
                            w.getInstance().showTips1(this.node)
                        }
                        ,
                        h.hiddenTips = function() {
                            w.getInstance().hiddenTips1(this.node)
                        }
                        ,
                        e(s, [{
                            key: "pause",
                            get: function() {
                                return this._pause
                            },
                            set: function(i) {
                                this._pause = i
                            }
                        }, {
                            key: "pauseImmediate",
                            set: function(i) {
                                if (this._pause = i,
                                1 == this._pause)
                                    this._onShow = !1,
                                        this.hiddenTips();
                                else {
                                    if (1 == this._onShow)
                                        return;
                                    this._onShow = !0,
                                        this.showTips()
                                }
                            }
                        }]),
                        s
                }(b))
                    , v = i("ToolTipComponent", function(i) {
                    function e() {
                        return i.apply(this, arguments) || this
                    }
                    return t(e, i),
                        e
                }(m))
                    , w = (i("ToolTipComponent1", function(i) {
                    function e() {
                        return i.apply(this, arguments) || this
                    }
                    t(e, i);
                    var s = e.prototype;
                    return s.showTips = function() {
                        f.gToolTipComponent = this,
                            i.prototype.showTips.call(this)
                    }
                        ,
                        s.hiddenTips = function() {
                            f.gToolTipComponent && f.gToolTipComponent == this && (f.gToolTipComponent = null),
                                i.prototype.hiddenTips.call(this)
                        }
                        ,
                        s.onMouseLeave = function(i) {}
                        ,
                        s.onTouchEnd = function(i) {}
                        ,
                        s.onTouchCancel = function(i) {}
                        ,
                        e
                }(m)),
                    i("ToolTip", function() {
                        function i(t, e) {
                            if (this.__stage = void 0,
                                this.__container = void 0,
                                this.__bubble = void 0,
                                this.__tBubbles = void 0,
                                this.__showTimer = void 0,
                                this.__currTarget = void 0,
                                this.__currMsg = void 0,
                            null != i.__instance)
                                throw new Error("单态不能实例化!");
                            i.__instance = this,
                                this.__stage = t,
                                this.__container = e,
                                this.__showTimer = new T(i.DELAY_TIME),
                                this.__showTimer.addEventListener(d.TIMER, this.onShowTime.bind(this)),
                                this.__tBubbles = [],
                                this.setEnabled(!0)
                        }
                        var t = i.prototype;
                        return t.selectBubble = function() {
                            var i = this.__currTarget;
                            i.hasOwnProperty("tooltipType") && (this.__bubble = this.__tBubbles[i.tooltipType]),
                            null == this.__bubble && (this.__bubble = this.__tBubbles[10]),
                            this.__bubble && this.__bubble.display && this.__container.addChild(this.__bubble.display)
                        }
                            ,
                            t.setMessage = function() {
                                var i = this.__currMsg;
                                if (-1 != i.indexOf("||")) {
                                    var t = i.split("||");
                                    i = t[Number(t.length * Math.random())]
                                }
                                this.__bubble.visible = !0,
                                    this.__bubble.setContent(i)
                            }
                            ,
                            t.onShowTime = function(i) {
                                this.__showTimer.stop(),
                                    this.__currMsg = null;
                                var t = this.__currTarget;
                                if (this.__currTarget = null,
                                null != t) {
                                    var e = new h(0,Math.ceil(t.getComponent(_).height * t.getScale().y / 2));
                                    if (t.hasOwnProperty("tooltipPos") && null != t.tooltipPos) {
                                        var s = t.tooltipPos;
                                        e.x += s.x,
                                            e.y += s.y
                                    }
                                    var o = t.getWorldPosition();
                                    e.x += o.x,
                                        e.y += o.y,
                                        e.x -= u.getVisibleSize().width / 2,
                                        e.y -= u.getVisibleSize().height / 2,
                                        this.__bubble.x = e.x,
                                        this.__bubble.y = e.y;
                                    var n = this.__bubble.x + this.__bubble.width - c.designWidth;
                                    n > 0 && (this.__bubble.x -= n),
                                    this.__bubble.y < c.designHeight / 2 * -1 && (this.__bubble.y = this.__bubble.height),
                                    this.__bubble.y + this.__bubble.height > c.designHeight / 2 * 1 && (this.__bubble.y = c.designHeight / 2 * 1 - this.__bubble.height - 12),
                                    this.__bubble.x + this.__bubble.height > c.designWidth / 2 && (this.__bubble.x = c.designWidth / 2 - this.__bubble.height),
                                        this.__bubble.visible = !0
                                }
                            }
                            ,
                            t.onMouseOver = function(i) {
                                var t;
                                if (i instanceof l) {
                                    if (i.target == this.__stage)
                                        return;
                                    t = i.target
                                } else {
                                    if (i == this.__stage)
                                        return;
                                    t = i
                                }
                                if (t.hasOwnProperty("tooltip")) {
                                    var e = t.tooltip;
                                    if (null == e || "" == e)
                                        return;
                                    this.__currTarget = t,
                                        this.__currMsg = e,
                                        this.selectBubble(),
                                        this.setMessage(),
                                        this.__bubble.visible = !1,
                                        this.__showTimer.stop(),
                                        this.__showTimer.start()
                                }
                            }
                            ,
                            t.onMouseOut = function(i) {
                                this.hiddenTips(),
                                    this.__showTimer.reset(),
                                    this.__currTarget = null,
                                    this.__currMsg = null
                            }
                            ,
                            t.setEnabled = function(i) {}
                            ,
                            t.addBubble = function(i, t) {
                                this.__tBubbles[t] = i,
                                    i.x = c.designWidth,
                                    i.visible = !1
                            }
                            ,
                            t.showTips = function(i, t) {
                                void 0 === t && (t = null),
                                    this.__bubble.visible = !0,
                                    this.__bubble.setContent(i),
                                null != t && (this.__bubble.x = t.x,
                                    this.__bubble.y = t.y)
                            }
                            ,
                            t.showTips1 = function(i) {
                                0 != r(i) ? this.onMouseOver(i) : p.IS_LOCAL
                            }
                            ,
                            t.hiddenTips = function() {
                                null != this.__bubble && (this.__bubble.visible && (this.__bubble.setContent(null),
                                    this.__bubble.visible = !1,
                                    this.__container.removeChild(this.__bubble.display),
                                    this.__bubble.x = 970),
                                    this.__bubble = null)
                            }
                            ,
                            t.hiddenTips1 = function(i) {
                                0 != r(i) ? this.onMouseOut(i) : p.IS_LOCAL
                            }
                            ,
                            i.getInstance = function(t, e) {
                                return void 0 === t && (t = null),
                                void 0 === e && (e = null),
                                null == i.__instance && new i(t,e),
                                    i.__instance
                            }
                            ,
                            i
                    }()));
                w.__instance = void 0,
                    w.DELAY_TIME = 100;
                i("TipUtils", function() {
                    function i() {}
                    return i.CreateTip = function(i, t, e) {
                        i.getComponent(v) || i.addComponent(v),
                            i.tooltip = t,
                        e != g.NORMAL && (i.tooltipType = e)
                    }
                        ,
                        i
                }());
                s._RF.pop()
            }
        }
    }
));
