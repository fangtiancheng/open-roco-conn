System.register("chunks:///_virtual/LoginLogLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./UserData.ts"], (function(t) {
        var n, i, e, o, s, c;
        return {
            setters: [function(t) {
                n = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        o = t.NodeEventType
                }
                , function(t) {
                    s = t.AgentNode
                }
                , function(t) {
                    c = t.UserData
                }
            ],
            execute: function() {
                e._RF.push({}, "fc3ebtyli5DkZn6bnuy+jFw", "LoginLogLogic", void 0);
                t("LoginLogLogic", function() {
                    function t(t) {
                        this._ui = void 0,
                            this._ui = new u(t),
                        this._ui && this._ui.closeBtn.on(o.TOUCH_END, this.onClickCloseBtn, this)
                    }
                    var i = t.prototype;
                    return i.onClickCloseBtn = function(t) {
                        this._ui.active = !1
                    }
                        ,
                        i.show = function() {
                            this._ui.visible = !0,
                                this._ui.tfContent.string = c.loginLog
                        }
                        ,
                        n(t, [{
                            key: "target",
                            get: function() {
                                return this._ui && this._ui.target ? this._ui.target : null
                            }
                        }]),
                        t
                }());
                var u = function(t) {
                    function e() {
                        for (var n, i = arguments.length, e = new Array(i), o = 0; o < i; o++)
                            e[o] = arguments[o];
                        return (n = t.call.apply(t, [this].concat(e)) || this)._tfContent = void 0,
                            n._closeBtn = void 0,
                            n._mask = void 0,
                            n
                    }
                    return i(e, t),
                        n(e, [{
                            key: "tfContent",
                            get: function() {
                                return this._tfContent || (this._tfContent = new s(this.getChildByName("scroll").getChildByName("tfContent"))),
                                    this._tfContent
                            }
                        }, {
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new s(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }, {
                            key: "mask",
                            get: function() {
                                return this._mask || (this._mask = new s(this.getChildByName("mask"))),
                                    this._mask
                            }
                        }]),
                        e
                }(s);
                e._RF.pop()
            }
        }
    }
));
