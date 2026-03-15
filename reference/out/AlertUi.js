System.register("chunks:///_virtual/AlertUi.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./ResManager.ts"], (function(t) {
        var e, n, i, s, o, h, u, r, l, _, a;
        return {
            setters: [function(t) {
                e = t.createClass,
                    n = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        s = t.NodeEventType,
                        o = t.Node,
                        h = t.UITransform,
                        u = t.Sprite,
                        r = t.Color,
                        l = t.Button
                }
                , function(t) {
                    _ = t.AgentNode
                }
                , function(t) {
                    a = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "2575fmnWVtDVaj1A3sbmSHU", "AlertUi", void 0);
                t("AlertUi", function() {
                    function t() {
                        this._ui = void 0,
                            this._yesFun = void 0,
                            this._noFun = void 0,
                            this._isclose = void 0,
                            this._shape = void 0,
                            this._ui = new c
                    }
                    var n = t.prototype;
                    return n.init = function(t, e, n, i) {
                        this._ui.msgTxt.text = null == t ? "" : t,
                            this._yesFun = e,
                            this._noFun = n,
                            this._isclose = i,
                            null == e && null == n ? (this._ui.enterBtn.x = 0,
                                this._ui.closeBtn.visible = !1) : (this._ui.enterBtn.x = -110,
                                this._ui.closeBtn.visible = !0),
                            this._ui.closeBtn.mouseEnabled = !0,
                            this._ui.enterBtn.mouseEnabled = !0,
                            this._ui.closeBtn.on(s.TOUCH_END, this.closeHandler, this),
                            this._ui.enterBtn.on(s.TOUCH_END, this.enterHandler, this)
                    }
                        ,
                        n.getBlackground = function() {
                            return this._shape = new o,
                                this._shape.addComponent(h).setContentSize(2e3, 1800),
                                this._shape.addComponent(u).color = new r(0,0,0),
                                this._shape.addComponent(l),
                                this._shape
                        }
                        ,
                        n.closeHandler = function(t) {
                            this.remove(),
                            null != this._noFun && this._noFun()
                        }
                        ,
                        n.enterHandler = function(t) {
                            null != this._yesFun && this._yesFun(),
                            this._isclose && this.remove(),
                                this._ui.closeBtn.mouseEnabled = !1,
                                this._ui.enterBtn.mouseEnabled = !1
                        }
                        ,
                        n.remove = function() {
                            null != this._ui.parent && this._ui.parent.removeChild(this._ui.target),
                            null != this._shape && null != this._shape.parent && (this._shape.parent.removeChild(this._shape),
                                this._shape = null),
                                this._yesFun = null,
                                this._ui.closeBtn.off(s.TOUCH_END, this.closeHandler, this),
                                this._ui.enterBtn.off(s.TOUCH_END, this.enterHandler, this)
                        }
                        ,
                        n.reset = function() {}
                        ,
                        e(t, [{
                            key: "ui",
                            get: function() {
                                return this._ui
                            }
                        }]),
                        t
                }());
                var c = function(t) {
                    function i() {
                        var e;
                        return (e = t.call(this) || this)._enterBtn = void 0,
                            e._closeBtn = void 0,
                            e._msgTxt = void 0,
                            e._target = a.Instance.getPrefabByName("SpiritBag_1600/AlertWindow_1600"),
                            e
                    }
                    return n(i, t),
                        e(i, [{
                            key: "enterBtn",
                            get: function() {
                                return this._enterBtn || (this._enterBtn = new _(this.getChildByName("enterBtn"))),
                                    this._enterBtn
                            }
                        }, {
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new _(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }, {
                            key: "msgTxt",
                            get: function() {
                                return this._msgTxt || (this._msgTxt = new _(this.getChildByName("msgTxt"))),
                                    this._msgTxt
                            }
                        }]),
                        i
                }(_);
                i._RF.pop()
            }
        }
    }
));
