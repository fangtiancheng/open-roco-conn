System.register("chunks:///_virtual/AgentNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeSelector.ts", "./PrefabSelector.ts", "./SpriteFrameSelector.ts", "./BuildLogHelper.ts", "./FrameEvent.ts", "./Timer.ts", "./TimerEvent.ts", "./EventDispatcher.ts", "./ToolTip.ts", "./PositionXComponent.ts"], (function(t) {
        var e, r, n, i, s, o, a, h, g, _, u, c, l, f, C, L, m, p, d, S, A, I, v, O, y, w, N, E, k, T;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    r = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy,
                        s = t.isValid,
                        o = t.Button,
                        a = t.Node,
                        h = t.ProgressBar,
                        g = t.Label,
                        _ = t.Event,
                        u = t.Vec2,
                        c = t.UITransform,
                        l = t.view,
                        f = t.Component,
                        C = t.Sprite,
                        L = t.RichText,
                        m = t.EditBox,
                        p = t.Color,
                        d = t.Slider,
                        S = t.UIOpacity
                }
                , function(t) {
                    A = t.default
                }
                , function(t) {
                    I = t.default
                }
                , function(t) {
                    v = t.default
                }
                , function(t) {
                    O = t.default
                }
                , function(t) {
                    y = t.default
                }
                , function(t) {
                    w = t.Timer
                }
                , function(t) {
                    N = t.default
                }
                , function(t) {
                    E = t.EventDispatcher
                }
                , function(t) {
                    k = t.ToolTipComponent
                }
                , function(t) {
                    T = t.PositionXComponent
                }
            ],
            execute: function() {
                i._RF.push({}, "857387CPkhOeoQwEhJpvJa5", "AgentNode", void 0);
                var x = t("GotoAndStopCallBackComponent", function(t) {
                    function r() {
                        for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                            n[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(n)) || this).callback = void 0,
                            e
                    }
                    return e(r, t),
                        r
                }(f))
                    , b = t("AgentNodeComponent", function(t) {
                    function r() {
                        for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                            n[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(n)) || this).target = void 0,
                            e
                    }
                    return e(r, t),
                        r
                }(f))
                    , P = t("AgentNode", function(t) {
                    function i(e) {
                        var r;
                        if ((r = t.call(this) || this)._constructorName = "AgentNode",
                            r._target = void 0,
                            r._enableTag = !0,
                            r._data = void 0,
                            r._parentNode = null,
                            r._eventList = new Map,
                            r._filters = [],
                            r._tooltipType = 0,
                            r._tooltip = "",
                            r._tooltipPos = null,
                            r._smoothing = !0,
                            r._timer = void 0,
                        e && s(e)) {
                            r._target = e,
                            r._target.getComponents(o).length > 1 && O.IS_LOCAL,
                            null == r._target.getComponent(b) && (r._target.addComponent(b).target = n(r)),
                            r._target.getComponent(o) && (r._target.getComponent(o).transition == o.Transition.SCALE ? (r._target.getComponent(o).zoomScale = .8,
                                r._target.getComponent(o).duration = .1) : 1 == O.IS_LOCAL && console.error("AgentNode=请检查你的Button的transition==" + r._target.name)),
                            1 == O.IS_LOCAL && r._target.getChildByName("effect") && (r._target.getChildByName("effect").active = !1);
                            var i = r._target.getComponent(C);
                            i && i.sizeMode == C.SizeMode.CUSTOM && 1 == O.IS_LOCAL && console.error("AgentNode=请修正你的Sprite的SizMode==" + r._target.name)
                        }
                        return r
                    }
                    e(i, t);
                    var f = i.prototype;
                    return f.hasEventListener = function(t, e, r) {
                        return this._target || O.IS_LOCAL,
                            s(this._target) ? this._target.hasEventListener(t, e, r) : (O.IS_LOCAL,
                                !1)
                    }
                        ,
                        f.checkEventListener = function(t) {
                            return !!this._eventList[t] && 2 == this._eventList[t]
                        }
                        ,
                        f.on = function(t, e, r, n) {
                            if (this._target || O.IS_LOCAL,
                            s(this._target) || O.IS_LOCAL,
                            this._target && s(this._target)) {
                                if (t == o.EventType.CLICK && !this._target.getComponent(o) && (O.IS_LOCAL,
                                1 == O.IS_LOCAL))
                                    throw new Error("[" + this._constructorName + "]'s function [on]'s params is error. \"Button.EventType.CLICK\" event should have a Button Component");
                                if (1 == O.IS_LOCAL) {
                                    var i = this._target.getComponent(o);
                                    i ? i.transition != o.Transition.SCALE && console.error("AgentNode=请你给你的节点的Button组件设置正确的Transition:" + this._target.name) : console.error("AgentNode=请你给你的节点添加Button组件:" + this._target.name)
                                }
                                this._target.hasEventListener(t, e, r) ? 1 == O.IS_LOCAL && console.error("[" + this._constructorName + "]'s function [on] params is error,[" + this._target.name + "]‘s event " + t + " hasEventListener111.") : 1 != this.checkEventListener(t) ? (this._target.on(t, e, r, n),
                                    this._eventList[t] = 2) : 1 == O.IS_LOCAL && console.error("[" + this._constructorName + "]'s function [on] params is error,[" + this._target.name + "]‘s event " + t + " hasEventListener333.")
                            }
                        }
                        ,
                        f.off = function(t, e, r, n) {
                            this._target || O.IS_LOCAL,
                            s(this._target) && (this._target.off(t, e, r, n),
                                this._eventList[t] = 1)
                        }
                        ,
                        f.setPosition = function(t, e, r) {
                            this._target || O.IS_LOCAL,
                            s(this._target) && this._target.setPosition(t, e, r)
                        }
                        ,
                        f.removeChild = function(t) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if (!(t instanceof a) && (O.IS_LOCAL,
                                1 == O.IS_LOCAL))
                                    throw new Error("[" + this._constructorName + "]'s function [removeChild] params is null.");
                                if (!this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [removeChild] params is null.");
                                this._target.removeChild(t)
                            }
                        }
                        ,
                        f.getChildAt = function(t) {
                            if (this._target || O.IS_LOCAL,
                                !s(this._target))
                                return null;
                            if (this._target.children.length > t)
                                return this._target.children[t];
                            throw new Error("[" + this._constructorName + "]'s function [getChildAt] params is null.")
                        }
                        ,
                        f.removeChildAt = function(t, e) {
                            if (void 0 === e && (e = !1),
                            this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if ((t < 0 || t >= this._target.children.length) && (O.IS_LOCAL,
                                1 == O.IS_LOCAL))
                                    throw new Error("[" + this._constructorName + "] removeChildAt: Index " + t + " is out of bounds.");
                                if (!(this._target.children.length > t))
                                    throw new Error("[" + this._constructorName + "]'s function [removeChildAt] params is null.");
                                var r = this._target.children[t];
                                this._target.removeChild(r),
                                e && r.destroy()
                            }
                        }
                        ,
                        f.addChild = function(t) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if (!this._target || !t)
                                    throw new Error("[" + this._constructorName + "]'s function [addChild] params is null.");
                                this._target != t ? this._target.addChild(t) : O.IS_LOCAL
                            }
                        }
                        ,
                        f.insertChild = function(t, e) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if (!this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [insertChild] params is null.");
                                this._target.insertChild(t, e)
                            }
                        }
                        ,
                        f.setChildIndex = function(t, e) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if (!this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [setChildIndex] params is null.");
                                this._target.insertChild(t, e)
                            }
                        }
                        ,
                        f.addComponent = function(t) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target))
                                return this._target ? (this._target.getComponent(t) && (console.error("[" + this._constructorName + "]'s function [addComponent] is == " + t.constructor.name),
                                    O.IS_LOCAL),
                                    this._target.addComponent(t)) : null
                        }
                        ,
                        f.getComponent = function(t) {
                            return this._target || O.IS_LOCAL,
                                s(this._target) && this._target ? this._target.getComponent(t) : null
                        }
                        ,
                        f.getCurrentNode = function() {
                            var t = this._target.getComponent(A);
                            return t ? t.currentNode : null
                        }
                        ,
                        f.gotoAndStop = function(t) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                var e = null
                                    , r = this._target.getComponent(h);
                                r && (r.progress = .01 * t);
                                var n = 0
                                    , i = this._target.getComponent(v);
                                i && (i.gotoAndStop(t),
                                    n = i.totalFrames);
                                var o = this._target.getComponent(A);
                                o && (o.gotoAndStop(t),
                                    n = o.totalFrames,
                                    e = o.currentNode);
                                var a = this._target.getComponent(x);
                                return a && a.callback && a.callback(t, n),
                                    e
                            }
                        }
                        ,
                        f.getChildByName = function(t) {
                            return this._target || O.IS_LOCAL,
                                s(this._target) ? this._target.getChildByName(t) : null
                        }
                        ,
                        f.addChildAt = function(t, e) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if (!this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [addChildAt] params is null.");
                                this._target.insertChild(t, e)
                            }
                        }
                        ,
                        f.contains = function(t) {
                            if (this._target || O.IS_LOCAL,
                                !s(this._target))
                                return !1;
                            if (!this._target)
                                throw new Error("[" + this._constructorName + "]'s function [contains] params is null.");
                            for (var e = this._target.children.length, r = 0; r < e; r++) {
                                if (this._target.children[r] == t)
                                    return !0
                            }
                            return !1
                        }
                        ,
                        f.getChildIndex = function(t) {
                            if (this._target || O.IS_LOCAL,
                                !s(this._target))
                                return -1;
                            if (this._target)
                                return this._target.children.indexOf(t);
                            throw new Error("[" + this._constructorName + "]'s function [contains] params is null.")
                        }
                        ,
                        f.updateRenderData = function(t) {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if (!this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [set text] params is null.");
                                var e = this._target.getComponent(g);
                                e && e.updateRenderData(t)
                            }
                        }
                        ,
                        f.removeAllChildren = function() {
                            if (this._target || O.IS_LOCAL,
                                s(this._target)) {
                                if (!this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [removeAllChildren]'s param [this._target] is null.");
                                this._target.removeAllChildren()
                            }
                        }
                        ,
                        f.startTimer = function() {
                            this._timer || (this._timer = new w(42),
                                this._timer.addEventListener(N.TIMER, this.action.bind(this))),
                                this._timer.start()
                        }
                        ,
                        f.action = function(t) {
                            this.dispatchEvent(new _(y.ENTER_FRAME))
                        }
                        ,
                        f.addEventListener = function(e, r, n) {
                            e == y.ENTER_FRAME && (this.hasEventListener(e, r, n) && O.IS_LOCAL,
                                this.startTimer()),
                                t.prototype.addEventListener.call(this, e, r, n)
                        }
                        ,
                        f.localToGlobalWithMenu = function(t) {
                            var e = new u(0,Math.ceil(this._target.getComponent(c).height / 2))
                                , r = this._target.getWorldPosition();
                            return e.x += r.x,
                                e.y += r.y,
                                e.x -= l.getVisibleSize().width / 2,
                                e.y -= l.getVisibleSize().height / 2,
                                e.x += t.x,
                                e.y += t.y,
                                e
                        }
                        ,
                        f.dispose = function() {
                            this._timer && (this._timer.stop(),
                                this._timer.removeEventListener(N.TIMER, this.action.bind(this)),
                                this._timer = null)
                        }
                        ,
                        f.destory = function() {
                            this.dispose(),
                            this._target && this._target.destroy(),
                                this._target = null
                        }
                        ,
                        f.changeToPosX1 = function() {
                            var t = this._target.getComponent(T);
                            return !!t && t.changeToPosX1()
                        }
                        ,
                        f.changeToPosX2 = function() {
                            var t = this._target.getComponent(T);
                            return !!t && t.changeToPosX2()
                        }
                        ,
                        r(i, [{
                            key: "data",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._data : null
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                    this._data = t
                            }
                        }, {
                            key: "parentNode",
                            get: function() {
                                return s(this._target) ? this._target.parent && 0 != s(this._target.parent) ? (!this._parentNode && this._target.parent.getComponent(b) && (this._parentNode = this._target.parent.getComponent(b).target),
                                this._parentNode || (this._parentNode = new i(this._target.parent)),
                                    this._target.parent && s(this._target.parent) ? (this._parentNode.target = this._target.parent,
                                        this._parentNode) : (this._parentNode = null,
                                        null)) : (this._parentNode = null,
                                    null) : null
                            }
                        }, {
                            key: "parent",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.parent : null
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                s(this._target) && (this._target.parent = t)
                            }
                        }, {
                            key: "enableTag",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    this._enableTag
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                    this._enableTag = t
                            }
                        }, {
                            key: "target",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target : null
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                s(this._target) && t && s(t) && (this._target = t)
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target : null
                            }
                        }, {
                            key: "x",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.getPosition().x : -1
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                s(this._target) && this._target.setPosition(t, this._target.getPosition().y)
                            }
                        }, {
                            key: "children",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.children : null
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target))
                                    throw new Error("[" + this._constructorName + "]'s function [set children] cannot be call.")
                            }
                        }, {
                            key: "numChildren",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.children.length : -1
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target))
                                    throw new Error("[" + this._constructorName + "]'s function [set numChildren] cannot be call.")
                            }
                        }, {
                            key: "y",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.getPosition().y : -1
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                s(this._target) && this._target.setPosition(this._target.getPosition().x, t)
                            }
                        }, {
                            key: "active",
                            get: function() {
                                return this.visible
                            },
                            set: function(t) {
                                this.visible = t
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                !!s(this._target) && this._target.active
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    if (!this._target)
                                        throw new Error("[" + this._constructorName + "]'s function [set visible] params is null.");
                                    this._target.active = t
                                }
                            }
                        }, {
                            key: "string",
                            get: function() {
                                return this.text
                            },
                            set: function(t) {
                                this.text = t
                            }
                        }, {
                            key: "text",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    var t = this._target.getComponent(g);
                                    if (t)
                                        return t.string;
                                    var e = this._target.getComponent(L);
                                    if (e)
                                        return e.string;
                                    var r = this._target.getComponent(m);
                                    return r ? r.string : ""
                                }
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    if (!this._target)
                                        throw new Error("[" + this._constructorName + "]'s function [set text] params is null.");
                                    var e = this._target.getComponent(m);
                                    e && (e.string = t);
                                    var r = this._target.getComponent(g);
                                    r && (r.string = t);
                                    var n = this._target.getComponent(L);
                                    n && (n.string = t)
                                }
                            }
                        }, {
                            key: "color",
                            get: function() {
                                var t = this._target.getComponent(g);
                                if (t)
                                    return t.color
                            },
                            set: function(t) {
                                if (t) {
                                    if (t instanceof p) {
                                        var e = this._target.getComponent(g);
                                        e && (e.color = t)
                                    } else if (1 == O.IS_LOCAL)
                                        throw new Error("[" + this._constructorName + "]'s function [set color]'s param is illegal.")
                                } else if (1 == O.IS_LOCAL)
                                    throw new Error("[" + this._constructorName + "]'s function [set color]'s param is null.")
                            }
                        }, {
                            key: "htmlText",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    !s(this._target))
                                    return "";
                                var t = this._target.getComponent(g);
                                if (t)
                                    return t.string;
                                var e = this._target.getComponent(L);
                                return e ? e.string : ""
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    if (!this._target)
                                        throw new Error("[" + this._constructorName + "]'s function [set htmlText] params is null.");
                                    var e = this._target.getComponent(L);
                                    e && (e.string = t);
                                    var r = this._target.getComponent(g);
                                    r && (r.string = t)
                                }
                            }
                        }, {
                            key: "autoSize",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target),
                                    null
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                s(this._target) && !this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [set autoSize] params is null.")
                            }
                        }, {
                            key: "wordWrap",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    !!s(this._target)
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                s(this._target) && !this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [set autoSize] params is null.")
                            }
                        }, {
                            key: "rotation",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target),
                                    0
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    if (!this._target)
                                        throw new Error("[" + this._constructorName + "]'s function [set rotation] params is null.");
                                    this._target.angle = t
                                }
                            }
                        }, {
                            key: "mouseEnabled",
                            get: function() {
                                return !0
                            },
                            set: function(t) {
                                s(this._target) && this._target
                            }
                        }, {
                            key: "selectable",
                            get: function() {
                                return !0
                            },
                            set: function(t) {
                                this._target
                            }
                        }, {
                            key: "buttonMode",
                            get: function() {
                                return !0
                            },
                            set: function(t) {
                                this._target
                            }
                        }, {
                            key: "useHandCursor",
                            get: function() {
                                return !0
                            },
                            set: function(t) {
                                this._target
                            }
                        }, {
                            key: "mouseChildren",
                            get: function() {
                                return !0
                            },
                            set: function(t) {
                                this._target || console.error("[" + this._constructorName + "]'s function [mouseChildren] params is null.")
                            }
                        }, {
                            key: "scaleX",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.getScale().x : -1
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                s(this._target) && this._target.setScale(t, this._target.getScale().y)
                            }
                        }, {
                            key: "scaleY",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.getScale().y : -1
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                s(this._target) && this._target.setScale(this._target.getScale().x, t)
                            }
                        }, {
                            key: "width",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.getComponent(c).contentSize.width : -1
                            },
                            set: function(t) {
                                if (t < 0 && O.IS_LOCAL,
                                this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    var e = this._target.getComponent(c);
                                    e.setContentSize(t, e.contentSize.height)
                                }
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._target.getComponent(c).contentSize.height : -1
                            },
                            set: function(t) {
                                if (t < 0 && O.IS_LOCAL,
                                this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    var e = this._target.getComponent(c);
                                    e.setContentSize(e.contentSize.width, t)
                                }
                            }
                        }, {
                            key: "totalFrames",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    !s(this._target))
                                    return -1;
                                var t = this._target.getComponent(v);
                                if (t)
                                    return t.totalFrames;
                                var e = this._target.getComponent(A);
                                if (e)
                                    return e.totalFrames;
                                var r = this._target.getComponent(I);
                                return r ? r.totalFrames : void 0
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target))
                                    throw new Error("[" + this._constructorName + "]'s function [set totalFrames] cannot be call.")
                            }
                        }, {
                            key: "currentFrame",
                            get: function() {
                                return this.selectedIndex
                            },
                            set: function(t) {
                                throw new Error("[" + this._constructorName + "]'s function [set currentFrame] cannot be call.")
                            }
                        }, {
                            key: "selectedIndex",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    !s(this._target))
                                    return -1;
                                var t = this._target.getComponent(v);
                                if (t)
                                    return t.selectedIndex;
                                var e = this._target.getComponent(A);
                                if (e)
                                    return e.selectedIndex;
                                var r = this._target.getComponent(I);
                                return r ? r.selectedIndex : void 0
                            }
                        }, {
                            key: "filters",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                    s(this._target) ? this._filters : []
                            },
                            set: function(t) {
                                this._target || O.IS_LOCAL,
                                s(this._target) && Array.isArray(t) && (this._filters = t,
                                    0 == t.length ? this.grayscale = !1 : this.grayscale = !0)
                            }
                        }, {
                            key: "grayscale",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    !s(this._target))
                                    return !1;
                                var t = this._target.getComponent(C);
                                return t ? t.grayscale : (console.error("[" + this._constructorName + "]'s function [get grayscale's] Sprite is null."),
                                    !1)
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    var e = this._target.getComponent(C);
                                    e && (e.grayscale = t)
                                }
                            }
                        }, {
                            key: "tooltipType",
                            get: function() {
                                return this._tooltipType
                            },
                            set: function(t) {
                                this._tooltipType = t,
                                this._target || O.IS_LOCAL,
                                s(this._target) && this._target && (this._target.tooltipType = t)
                            }
                        }, {
                            key: "tooltip",
                            get: function() {
                                return this._tooltip
                            },
                            set: function(t) {
                                this._tooltip = t,
                                s(this._target) && (this._target || O.IS_LOCAL,
                                this._target && (null == this._target.getComponent(k) && this._target.addComponent(k),
                                    this._target.tooltip = t))
                            }
                        }, {
                            key: "tooltipPos",
                            get: function() {
                                return this._tooltipPos
                            },
                            set: function(t) {
                                this._tooltipPos = t,
                                s(this._target) && (this._target || O.IS_LOCAL,
                                this._target && (this._target.tooltipPos = t))
                            }
                        }, {
                            key: "mouseX",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    !s(this._target))
                                    return -1;
                                var t = new u(0,Math.ceil(this._target.getComponent(c).height / 2))
                                    , e = this._target.getWorldPosition();
                                return t.x += e.x,
                                    t.y += e.y,
                                    t.x -= l.getVisibleSize().width / 2,
                                    t.y -= l.getVisibleSize().height / 2,
                                    t.x += 52,
                                    t.y += -42,
                                    t.x
                            }
                        }, {
                            key: "mouseY",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    var t = new u(0,0)
                                        , e = this._target.getWorldPosition();
                                    return t.x += e.x,
                                        t.y += e.y,
                                        t.x -= l.getVisibleSize().width / 2,
                                        t.y -= l.getVisibleSize().height / 2,
                                        t.x += 52,
                                        t.y += -42,
                                        t.y
                                }
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._target || O.IS_LOCAL,
                                !!s(this._target) && (this._target.getComponent(o) || (this._target.addComponent(o).transition = o.Transition.NONE),
                                    (this._target.getComponent(o) || this._target.addComponent(o)).interactable)
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    !this._target)
                                    throw new Error("[" + this._constructorName + "]'s function [set enabled] params is null.");
                                this._target.getComponent(o) || (this._target.addComponent(o).transition = o.Transition.NONE),
                                    (this._target.getComponent(o) || this._target.addComponent(o)).interactable = t
                            }
                        }, {
                            key: "progress",
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    if (!this._target)
                                        throw new Error("[" + this._constructorName + "]'s function [set progress] params is null.");
                                    var e = this._target.getComponent(d);
                                    e && (e.progress = t);
                                    var r = this._target.getComponent(h);
                                    r && (r.progress = t)
                                }
                            }
                        }, {
                            key: "name",
                            get: function() {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    if (this._target)
                                        return this._target.name;
                                    throw new Error("[" + this._constructorName + "]'s function [set progress] params is null.")
                                }
                            },
                            set: function(t) {
                                if (this._target || O.IS_LOCAL,
                                    s(this._target)) {
                                    if (!this._target)
                                        throw new Error("[" + this._constructorName + "]'s function [set progress] params is null.");
                                    this._target.name = t
                                }
                            }
                        }, {
                            key: "smoothing",
                            get: function() {
                                return this.smoothing
                            },
                            set: function(t) {
                                this._smoothing = t
                            }
                        }, {
                            key: "alpha",
                            get: function() {
                                return (this._target.getComponent(S) || this._target.addComponent(S)).opacity
                            },
                            set: function(t) {
                                (this._target.getComponent(S) || this._target.addComponent(S)).opacity = t
                            }
                        }]),
                        i
                }(E));
                t("AgentNodeDebugger", function(t) {
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    return e(r, t),
                        r.prototype.gotoAndStop = function(e) {
                            t.prototype.gotoAndStop.call(this, e)
                        }
                        ,
                        r
                }(P));
                i._RF.pop()
            }
        }
    }
));
