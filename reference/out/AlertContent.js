System.register("chunks:///_virtual/AlertContent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./AgentNode.ts", "./NodeExtend.ts", "./WindowMode.ts", "./WindowResult.ts"], (function(t) {
        var e, i, n, s, l, h, o, u, r, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        l = t.NodeEventType
                }
                , function(t) {
                    h = t.default
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    u = t.NodeExtend
                }
                , function(t) {
                    r = t.WindowMode
                }
                , function(t) {
                    c = t.WindowResult
                }
            ],
            execute: function() {
                s._RF.push({}, "b2c8dsO+kFLFIlDDTGLnDGo", "AlertContent", void 0);
                t("AlertContent", function(t) {
                    function s() {
                        var e;
                        (e = t.call(this) || this)._ui = void 0,
                            e._mode = void 0,
                            e._handler = void 0;
                        var i = h.Instance.getPrefabByName("common/AlertContent_1600");
                        return e.addChild(i),
                            e._ui = new a(i),
                            e.mouseEnabled = !1,
                            e._ui.titleText.mouseEnabled = !1,
                            e._ui.titleText.htmlText = "",
                            e._ui.msgText.wordWrap = !0,
                            e._ui.msgText.mouseEnabled = !1,
                            e._ui.msgText.htmlText = "",
                            e._ui.richMsgText.wordWrap = !0,
                            e._ui.richMsgText.mouseEnabled = !1,
                            e._ui.richMsgText.htmlText = "",
                            e._ui.btnOK.on(l.TOUCH_END, e.onOK, n(e)),
                            e._ui.btnCancel.on(l.TOUCH_END, e.onCancel, n(e)),
                            e
                    }
                    e(s, t);
                    var o = s.prototype;
                    return o.dispose = function() {
                        this._ui.btnOK.off(l.TOUCH_END, this.onOK, this),
                            this._ui.btnCancel.off(l.TOUCH_END, this.onCancel, this)
                    }
                        ,
                        o.adjustSize = function() {}
                        ,
                        o.onOK = function(t) {
                            var e = this.parent;
                            null != e && e.close(),
                            null != this._handler && this._handler.call(c.OK)
                        }
                        ,
                        o.onCancel = function(t) {
                            var e = this.parent;
                            null != e && e.close(),
                            null != this._handler && this._handler.call(c.CANCEL)
                        }
                        ,
                        i(s, [{
                            key: "title",
                            set: function(t) {
                                this._ui.titleText.htmlText = t,
                                    this.adjustSize()
                            }
                        }, {
                            key: "message",
                            set: function(t) {
                                t.includes("<color") ? (t = "<color=#000000>" + t + "</color>",
                                    this._ui.richMsgText.htmlText = t,
                                    this._ui.richMsgText.visible = !0,
                                    this._ui.msgText.visible = !1) : (this._ui.msgText.htmlText = t,
                                    this._ui.msgText.visible = !0,
                                    this._ui.richMsgText.visible = !1),
                                    this.adjustSize()
                            }
                        }, {
                            key: "mode",
                            set: function(t) {
                                switch (this._mode = t,
                                    this._mode) {
                                    case r.OK:
                                        this._ui.btnOK.x = 0,
                                            this._ui.btnOK.visible = !0,
                                            this._ui.btnCancel.visible = !1;
                                        break;
                                    case r.OK_CANCEL:
                                        this._ui.btnOK.x = -150,
                                            this._ui.btnOK.visible = !0,
                                            this._ui.btnCancel.x = 150,
                                            this._ui.btnCancel.visible = !0
                                }
                            }
                        }, {
                            key: "handler",
                            set: function(t) {
                                this._handler = t
                            }
                        }]),
                        s
                }(u));
                var a = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._titleText = void 0,
                            e._msgText = void 0,
                            e._richMsgText = void 0,
                            e._btnOK = void 0,
                            e._btnCancel = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "titleText",
                            get: function() {
                                return this._titleText || (this._titleText = new o(this._target.getChildByName("titleText"))),
                                    this._titleText
                            }
                        }, {
                            key: "msgText",
                            get: function() {
                                return this._msgText || (this._msgText = new o(this._target.getChildByName("msgText"))),
                                    this._msgText
                            }
                        }, {
                            key: "richMsgText",
                            get: function() {
                                return this._richMsgText || (this._richMsgText = new o(this._target.getChildByName("richMsgText"))),
                                    this._richMsgText
                            }
                        }, {
                            key: "btnOK",
                            get: function() {
                                return this._btnOK || (this._btnOK = new o(this._target.getChildByName("btnOK"))),
                                    this._btnOK
                            }
                        }, {
                            key: "btnCancel",
                            get: function() {
                                return this._btnCancel || (this._btnCancel = new o(this._target.getChildByName("btnCancel"))),
                                    this._btnCancel
                            }
                        }]),
                        n
                }(o);
                s._RF.pop()
            }
        }
    }
));
