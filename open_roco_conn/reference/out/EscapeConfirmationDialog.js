System.register("chunks:///_virtual/EscapeConfirmationDialog.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./WindowBase.ts", "./ResManager.ts"], (function(n) {
        var t, i, e, s, o, c, a, r;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    i = n.createClass,
                    e = n.assertThisInitialized
            }
                , function(n) {
                    s = n.cclegacy,
                        o = n.NodeEventType
                }
                , function(n) {
                    c = n.AgentNode
                }
                , function(n) {
                    a = n.WindowBase
                }
                , function(n) {
                    r = n.default
                }
            ],
            execute: function() {
                s._RF.push({}, "db17d7C5jtB7q7ISiNep8V8", "EscapeConfirmationDialog", void 0);
                n("EscapeConfirmationDialog", function(n) {
                    function s(t, i) {
                        var s;
                        return (s = n.call(this) || this).onOK = void 0,
                            s.onCancel = void 0,
                            s._ui = void 0,
                            s.initialize(t, null, null, e(s), i),
                            s.initUI(),
                            s.center(),
                            s
                    }
                    t(s, n);
                    var c = s.prototype;
                    return c.dispose = function() {}
                        ,
                        c.initUI = function() {
                            var n = r.Instance.getPrefabByName("combatSys_1600/escapeUI_1600");
                            this._ui = new u(n),
                                this._ui.sureBtn.on(o.TOUCH_END, this.onClickOK, this),
                                this._ui.cancelBtn.on(o.TOUCH_END, this.onClickCancel, this),
                                this.addChild(this._ui.target)
                        }
                        ,
                        c.disposeUI = function() {
                            this._ui.sureBtn.off(o.TOUCH_END, this.onClickOK, this),
                                this._ui.cancelBtn.off(o.TOUCH_END, this.onClickCancel, this)
                        }
                        ,
                        c.onClickOK = function(n) {
                            null != this.onOK && this.onOK(this)
                        }
                        ,
                        c.onClickCancel = function(n) {
                            null != this.onCancel && this.onCancel(this)
                        }
                        ,
                        i(s, [{
                            key: "container",
                            get: function() {
                                return this._container
                            },
                            set: function(n) {
                                this._container = n
                            }
                        }]),
                        s
                }(a));
                var u = n("ConfirmPanelUI", function(n) {
                    function e() {
                        for (var t, i = arguments.length, e = new Array(i), s = 0; s < i; s++)
                            e[s] = arguments[s];
                        return (t = n.call.apply(n, [this].concat(e)) || this)._sureBtn = void 0,
                            t._cancelBtn = void 0,
                            t
                    }
                    return t(e, n),
                        i(e, [{
                            key: "sureBtn",
                            get: function() {
                                return this._sureBtn || (this._sureBtn = new c(this.getChildByName("sureBtn"))),
                                    this._sureBtn
                            }
                        }, {
                            key: "cancelBtn",
                            get: function() {
                                return this._cancelBtn || (this._cancelBtn = new c(this.getChildByName("cancelBtn"))),
                                    this._cancelBtn
                            }
                        }]),
                        e
                }(c));
                s._RF.pop()
            }
        }
    }
));
