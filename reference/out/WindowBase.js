System.register("chunks:///_virtual/WindowBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowEvent.ts", "./NodeExtend.ts", "./NodeUtils.ts", "./WindowCloseAction.ts", "./WindowState.ts", "./BuildLogHelper.ts"], (function(t) {
        var i, n, o, e, s, l, h, d, c, r, a, u;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        e = t.NodeEventType,
                        s = t.UITransform,
                        l = t.Node
                }
                , function(t) {
                    h = t.WindowEvent
                }
                , function(t) {
                    d = t.NodeExtend
                }
                , function(t) {
                    c = t.NodeUtils
                }
                , function(t) {
                    r = t.WindowCloseAction
                }
                , function(t) {
                    a = t.WindowState
                }
                , function(t) {
                    u = t.default
                }
            ],
            execute: function() {
                o._RF.push({}, "44b22WEFnVEGKMefVADfCda", "WindowBase", void 0),
                    t("WindowBase", function(t) {
                        i(d, t);
                        var o = d.prototype;
                        function d() {
                            var i;
                            return (i = t.call(this) || this).__id = 0,
                                i._state = 0,
                                i._closeAction = "",
                                i._container = void 0,
                                i._bg = void 0,
                                i._btnClose = void 0,
                                i._content = void 0,
                                i._isModal = void 0,
                                i._modalBlocker = void 0,
                                i._dragAreaObject = void 0,
                                i._btnCloseEdgeX = 0,
                                i.__id = ++d.currentID,
                                i._state = a.INITIALIZING,
                                i._closeAction = r.CLOSE,
                                i
                        }
                        return o.IWindowJudge = function() {
                            CONFIG.DEBUG && console.log("i am a IWindow")
                        }
                            ,
                            o.initialize = function(t, i, n, o, l) {
                                void 0 === t && (t = null),
                                void 0 === i && (i = null),
                                void 0 === n && (n = null),
                                void 0 === o && (o = null),
                                void 0 === l && (l = !1),
                                    this.dispatchEvent(new h(h.INITIALIZING)),
                                    this._container = t,
                                    this._bg = i,
                                    this._btnClose = n,
                                    this._content = o,
                                    this._isModal = l,
                                    this._modalBlocker = null,
                                    this.dragAreaObject = this._bg,
                                null != this._btnClose && (this._btnClose.on(e.TOUCH_END, this.onClose, this),
                                null != this._bg && (this._btnCloseEdgeX = this._bg.getPosition().x + this._bg.getComponent(s).width - this._btnClose.getPosition().x - this._btnClose.getComponent(s).width)),
                                null != this._content && (this._bg,
                                    this.addChild(this._content)),
                                    this.show(),
                                    this._state = a.INITIALIZED,
                                    this.dispatchEvent(new h(h.INITIALIZED))
                            }
                            ,
                            o.close = function() {
                                if (this._state != a.CLOSED) {
                                    var t;
                                    1 == u.IS_LOCAL && console.log("关闭一次==" + this.constructor.name),
                                        this.dispatchEvent(new h(h.CLOSING));
                                    var i = 0;
                                    if (this._closeAction == r.CLOSE) {
                                        for (null != this._btnClose && this._btnClose.off(e.TOUCH_END, this.onClose, this),
                                                 this.dragAreaObject = null,
                                                 i = 0; i < this.numChildren; ++i)
                                            null != (t = this.getChildAt(i)) && 1 == this.instanceofIWindow(t) && (this.removeChild(t),
                                                t.close());
                                        this._isModal && null != this._modalBlocker && (this._modalBlocker.dispose(),
                                            this._modalBlocker = null),
                                        null != this._content && (this.removeChild(this._content),
                                        this._content instanceof l || this._content.dispose(),
                                            this._content.dispose(),
                                            this._content = null),
                                            this._state = a.CLOSED
                                    } else if (this._closeAction == r.HIDE)
                                        for (this.hide(),
                                                 i = 0; i < this.numChildren; ++i)
                                            null != (t = this.getChildAt(i)) && 1 == this.instanceofIWindow(t) && t.hide();
                                    this.dispatchEvent(new h(h.CLOSED))
                                }
                            }
                            ,
                            o.instanceofIWindow = function(t) {
                                return !!t && void 0 !== t.IWindowJudge
                            }
                            ,
                            o.show = function() {
                                this.showToList(this);
                                for (var t = 0; t < this.numChildren; ++t) {
                                    var i = this.getChildAt(t);
                                    null != i && 1 == this.instanceofIWindow(i) && i.show()
                                }
                                this.dispatchEvent(new h(h.SHOW))
                            }
                            ,
                            o.hide = function() {
                                this.hideFromList(this),
                                    this.dispatchEvent(new h(h.HIDE))
                            }
                            ,
                            o.moveTo = function(t, i) {
                                this.x = t,
                                    this.y = i
                            }
                            ,
                            o.setSize = function(t, i) {
                                this._content
                            }
                            ,
                            o.bind = function(t) {
                                var i = t;
                                return null != i && (this.addChild(i),
                                    !0)
                            }
                            ,
                            o.unbind = function(t) {
                                var i = t;
                                if (null == i || !this.contains(i) && null != this.parentNode)
                                    return !1;
                                var n = this.parentNode.getChildIndex(this) + (this.getChildIndex(i) > this.getChildIndex(this._bg) ? 1 : -1);
                                return this.parentNode.addChildAt(i, n),
                                    !0
                            }
                            ,
                            o.center = function() {}
                            ,
                            o.getContent = function() {
                                return this._content
                            }
                            ,
                            o.toString = function() {
                                return "[Window: container = " + this._container + ", bg = " + this._bg + ", close button = " + this._btnClose + ", content = " + this._content + ", isModal = " + this._isModal + "]"
                            }
                            ,
                            o.bringToFront = function() {
                                null != this.parentNode && (this._isModal && null != this._modalBlocker && this.parentNode.setChildIndex(this._modalBlocker, this.parentNode.numChildren - 1),
                                    this.parentNode.setChildIndex(this, this.parentNode.numChildren - 1))
                            }
                            ,
                            o.bringWToFront = function() {
                                null != this.parentNode && (null != this._modalBlocker && this.parentNode.setChildIndex(this._modalBlocker, this.parentNode.numChildren - 1),
                                    this.parentNode.setChildIndex(this, this.parentNode.numChildren - 1))
                            }
                            ,
                            o.backToBottom = function() {
                                null != this.parentNode && (this.parentNode.setChildIndex(this, 0),
                                this._isModal && null != this._modalBlocker && this.parentNode.setChildIndex(this._modalBlocker, 0))
                            }
                            ,
                            o.onStartDrag = function(t) {}
                            ,
                            o.onStopDrag = function(t) {}
                            ,
                            o.onClose = function(t) {
                                this.close()
                            }
                            ,
                            o.showToList = function(t) {
                                null != this._container && null != t && (this._isModal && null != this._modalBlocker && !c.contains(this._container, this._modalBlocker) && this._container.addChild(this._modalBlocker),
                                c.contains(this._container, t) || this._container.addChild(t),
                                    t.active = !0)
                            }
                            ,
                            o.hideFromList = function(t) {
                                null != this._container && null != t && (c.contains(this._container, t) && this._container.removeChild(t),
                                this._isModal && null != this._modalBlocker && c.contains(this._container, this._modalBlocker) && this._container.removeChild(this._modalBlocker),
                                    t.active = !1)
                            }
                            ,
                            n(d, [{
                                key: "id",
                                get: function() {
                                    return this.__id
                                }
                            }, {
                                key: "initialized",
                                get: function() {
                                    return this._state == a.INITIALIZED
                                }
                            }, {
                                key: "isModal",
                                get: function() {
                                    return this._isModal
                                }
                            }, {
                                key: "closeAction",
                                get: function() {
                                    return this._closeAction
                                },
                                set: function(t) {
                                    this._closeAction = t
                                }
                            }, {
                                key: "modalBlocker",
                                get: function() {
                                    return this._modalBlocker
                                },
                                set: function(t) {
                                    this._modalBlocker = t
                                }
                            }, {
                                key: "dragAreaObject",
                                set: function(t) {}
                            }]),
                            d
                    }(d)).currentID = 0,
                    o._RF.pop()
            }
        }
    }
));
