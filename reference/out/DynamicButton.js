System.register("chunks:///_virtual/DynamicButton.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, s, n;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType
                }
            ],
            execute: function() {
                s._RF.push({}, "3a494gkLj9JualAC5EBL6YG", "DynamicButton", void 0);
                t("DynamicButton", function() {
                    function t(t) {
                        this._target = void 0,
                            this._enabled = !0,
                        null != t && (this._target = t,
                            this._target.buttonMode = !0,
                            this._target.useHandCursor = !0,
                            this._target.gotoAndStop(1),
                            this.enabled = !0)
                    }
                    var s = t.prototype;
                    return s.getProperty = function(t) {
                        return null == this._target ? null : this._target[t]
                    }
                        ,
                        s.setProperty = function(t, e) {
                            null != this._target && (this._target[t] = e)
                        }
                        ,
                        s.onMouseEvent = function(t) {}
                        ,
                        e(t, [{
                            key: "target",
                            get: function() {
                                return this._target
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                this._enabled = t,
                                null != this._target && (this._target.buttonMode = t,
                                    this._target.useHandCursor = t,
                                    this._target.enabled = t,
                                    this._target.enableTag = t,
                                    t ? (this._target.hasEventListener(n.MOUSE_UP, this.onMouseEvent, this) || this._target.on(n.MOUSE_UP, this.onMouseEvent, this),
                                    this._target.hasEventListener(n.MOUSE_LEAVE, this.onMouseEvent, this) || this._target.on(n.MOUSE_LEAVE, this.onMouseEvent, this),
                                    this._target.hasEventListener(n.MOUSE_ENTER, this.onMouseEvent, this) || this._target.on(n.MOUSE_ENTER, this.onMouseEvent, this),
                                    this._target.hasEventListener(n.MOUSE_DOWN, this.onMouseEvent, this) || this._target.on(n.MOUSE_DOWN, this.onMouseEvent, this)) : (this._target.hasEventListener(n.MOUSE_UP, this.onMouseEvent, this) && this._target.off(n.MOUSE_UP, this.onMouseEvent, this),
                                    this._target.hasEventListener(n.MOUSE_LEAVE, this.onMouseEvent, this) && this._target.off(n.MOUSE_LEAVE, this.onMouseEvent, this),
                                    this._target.hasEventListener(n.MOUSE_ENTER, this.onMouseEvent, this) && this._target.off(n.MOUSE_ENTER, this.onMouseEvent, this),
                                    this._target.hasEventListener(n.MOUSE_DOWN, this.onMouseEvent, this) && this._target.off(n.MOUSE_DOWN, this.onMouseEvent, this)))
                            }
                        }]),
                        t
                }());
                s._RF.pop()
            }
        }
    }
));
