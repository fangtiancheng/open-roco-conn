System.register("chunks:///_virtual/LevelChangeAlert.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./UICtlBase.ts", "./StringUtil.ts", "./Config.ts"], (function(t) {
        var e, i, n, s, o, l, u, h, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.assertThisInitialized,
                    n = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.NodeEventType
                }
                , function(t) {
                    l = t.AgentNode
                }
                , function(t) {
                    u = t.UICtlBase
                }
                , function(t) {
                    h = t.StringUtil
                }
                , function(t) {
                    c = t.Config
                }
            ],
            execute: function() {
                s._RF.push({}, "19fab1/O29Ov7TAcJI1ZGaA", "LevelChangeAlert", void 0);
                t("LevelChangeAlert", function(t) {
                    function n(e, n, s, l) {
                        var u;
                        return void 0 === n && (n = 0),
                        void 0 === s && (s = ""),
                        void 0 === l && (l = null),
                            (u = t.call(this, e, n, s, l) || this)._ui = void 0,
                            u._ui = new r(e.target),
                            u._ui.btnCloseLevel.on(o.TOUCH_END, u.onUIClick, i(u)),
                            u
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.dispose = function() {
                        this._ui && this._ui.btnCloseLevel.off(o.TOUCH_END, this.onUIClick, this),
                            t.prototype.dispose.call(this)
                    }
                        ,
                        s.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnCloseLevel":
                                    this.visible = !1
                            }
                        }
                        ,
                        s.show = function(t, e) {
                            1 == t ? (this._ui.bg.visible = !0,
                                this._ui.txt.text = h.substitute(c.WORDS_LEVEL_UP, c.getTitle(e))) : (this._ui.bg.visible = !1,
                                this._ui.txt.text = h.substitute(c.WORDS_LEVEL_DOWN, c.getTitle(e))),
                                this._ui.icon.gotoAndStop(c.getBigLevel(e)),
                                this.visible = !0
                        }
                        ,
                        n
                }(u));
                var r = function(t) {
                    function i() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnCloseLevel = void 0,
                            e._icon = void 0,
                            e._txt = void 0,
                            e._bg = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnCloseLevel",
                            get: function() {
                                return this._btnCloseLevel || (this._btnCloseLevel = new l(this.getChildByName("btnCloseLevel"))),
                                    this._btnCloseLevel
                            }
                        }, {
                            key: "icon",
                            get: function() {
                                return this._icon || (this._icon = new l(this.getChildByName("icon"))),
                                    this._icon
                            }
                        }, {
                            key: "txt",
                            get: function() {
                                return this._txt || (this._txt = new l(this.getChildByName("txt"))),
                                    this._txt
                            }
                        }, {
                            key: "bg",
                            get: function() {
                                return this._bg || (this._bg = new l(this.getChildByName("bg"))),
                                    this._bg
                            }
                        }]),
                        i
                }(l);
                s._RF.pop()
            }
        }
    }
));
