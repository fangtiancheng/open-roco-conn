System.register("chunks:///_virtual/VictoryPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./WindowBase.ts", "./WindowCloseAction.ts", "./ResManager.ts", "./SuccessorEvent.ts"], (function(t) {
        var n, e, i, o, s, c, r, u, a, l;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    c = t.AgentNode
                }
                , function(t) {
                    r = t.WindowBase
                }
                , function(t) {
                    u = t.WindowCloseAction
                }
                , function(t) {
                    a = t.default
                }
                , function(t) {
                    l = t.SuccessorEvent
                }
            ],
            execute: function() {
                o._RF.push({}, "1d128ukysJCz66sGI6+iSqg", "VictoryPanel", void 0);
                t("VictoryPanel", function(t) {
                    function o(n, e) {
                        var o;
                        void 0 === e && (e = !1),
                            (o = t.call(this) || this)._ui = void 0,
                            o.initialize(n, null, null, null, e);
                        var c = a.Instance.getPrefabByName("combatSys_1600/VictoryPanelUI_1600");
                        return o._ui = new h(c),
                            o.addChild(o._ui.target),
                            o.hide(),
                            o.closeAction = u.HIDE,
                            o._ui.okBtn.on(s.TOUCH_END, o.onSure, i(o)),
                            o
                    }
                    n(o, t);
                    var c = o.prototype;
                    return c.onSure = function(t) {
                        this.dispatchEvent(new l(l.VICTORY_SURE))
                    }
                        ,
                        c.ishow = function() {
                            this.show()
                        }
                        ,
                        c.onFrame = function(t) {}
                        ,
                        e(o, [{
                            key: "text",
                            set: function(t) {
                                this._ui.textBox.string = t
                            }
                        }]),
                        o
                }(r));
                var h = function(t) {
                    function i() {
                        for (var n, e = arguments.length, i = new Array(e), o = 0; o < e; o++)
                            i[o] = arguments[o];
                        return (n = t.call.apply(t, [this].concat(i)) || this)._okBtn = void 0,
                            n._textBox = void 0,
                            n
                    }
                    return n(i, t),
                        e(i, [{
                            key: "okBtn",
                            get: function() {
                                return this._okBtn || (this._okBtn = new c(this.getChildByName("okBtn"))),
                                    this._okBtn
                            }
                        }, {
                            key: "textBox",
                            get: function() {
                                return this._textBox || (this._textBox = new c(this.getChildByName("textBox"))),
                                    this._textBox
                            }
                        }]),
                        i
                }(c);
                o._RF.pop()
            }
        }
    }
));
