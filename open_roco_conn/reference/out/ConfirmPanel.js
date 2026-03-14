System.register("chunks:///_virtual/ConfirmPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./WindowBase.ts", "./SuccessorEvent.ts"], (function(t) {
        var n, e, i, o, s, c;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    s = t.WindowBase
                }
                , function(t) {
                    c = t.SuccessorEvent
                }
            ],
            execute: function() {
                i._RF.push({}, "c434dZ/RI5M/KC5JD1aDieE", "ConfirmPanel", void 0);
                t("ConfirmPanel", function(t) {
                    function i(n, e) {
                        var i;
                        return (i = t.call(this) || this)._ui = new r,
                            i
                    }
                    n(i, t);
                    var o = i.prototype;
                    return o.ishow = function() {
                        this.show()
                    }
                        ,
                        o.onSure = function(t) {
                            this.dispatchEvent(new c(c.CONFIRM_SURE))
                        }
                        ,
                        o.onCancel = function(t) {
                            this.dispatchEvent(new c(c.CONFIRM_CANCEL))
                        }
                        ,
                        e(i, [{
                            key: "text",
                            set: function(t) {
                                this._ui.textBox.text = t
                            }
                        }]),
                        i
                }(s));
                var r = t("ConfirmPanelUI", function(t) {
                    function i() {
                        for (var n, e = arguments.length, i = new Array(e), o = 0; o < e; o++)
                            i[o] = arguments[o];
                        return (n = t.call.apply(t, [this].concat(i)) || this)._sureBtn = void 0,
                            n._cancelBtn = void 0,
                            n._textBox = void 0,
                            n
                    }
                    return n(i, t),
                        e(i, [{
                            key: "sureBtn",
                            get: function() {
                                return this._sureBtn || (this._sureBtn = new o(this.getChildByName("sureBtn"))),
                                    this._sureBtn
                            }
                        }, {
                            key: "cancelBtn",
                            get: function() {
                                return this._cancelBtn || (this._cancelBtn = new o(this.getChildByName("cancelBtn"))),
                                    this._cancelBtn
                            }
                        }, {
                            key: "textBox",
                            get: function() {
                                return this._textBox || (this._textBox = new o(this.getChildByName("textBox"))),
                                    this._textBox
                            }
                        }]),
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
