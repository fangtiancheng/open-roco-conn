System.register("chunks:///_virtual/UIExpanLimitAlert.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./NodeExtendEx.ts"], (function(t) {
        var i, e, n, s, o, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    r = t.NodeExtendEx
                }
            ],
            execute: function() {
                n._RF.push({}, "158fbllPj5AN5bgisXPQBkF", "UIExpanLimitAlert", void 0);
                t("UIExpanLimitAlert", function(t) {
                    function n(i) {
                        var e;
                        return (e = t.call(this) || this)._res = void 0,
                            e._textRecord = "",
                            e.onPreRequest(),
                            e
                    }
                    i(n, t);
                    var o = n.prototype;
                    return o.afterLoaded = function() {
                        this.init(),
                            this.text = this._textRecord
                    }
                        ,
                        o.init = function() {
                            this._isInit
                        }
                        ,
                        o.onInit = function() {
                            this._res = new h(this._view),
                                this.addChild(this._res.target),
                                this._res.btnOk.on(s.TOUCH_END, this.onClickOK, this),
                                this._res.btnClose.on(s.TOUCH_END, this.onClickClose, this)
                        }
                        ,
                        o.onClickOK = function(t) {
                            this.visible = !1
                        }
                        ,
                        o.onClickClose = function(t) {
                            this.visible = !1
                        }
                        ,
                        o.dispose = function() {}
                        ,
                        e(n, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/UIExpanLimitAlert_1600"
                            }
                        }, {
                            key: "text",
                            set: function(t) {
                                this._textRecord = t,
                                0 != this._isInit && (this._res.txtLimit.text = t)
                            }
                        }, {
                            key: "visible",
                            set: function(t) {
                                this.active = t
                            }
                        }]),
                        n
                }(r));
                var h = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._txtLimit = void 0,
                            i._btnOk = void 0,
                            i._btnClose = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "txtLimit",
                            get: function() {
                                return this._txtLimit || (this._txtLimit = new o(this.getChildByName("txtLimit"))),
                                    this._txtLimit
                            }
                        }, {
                            key: "btnOk",
                            get: function() {
                                return this._btnOk || (this._btnOk = this.getChildByName("btnOk")),
                                    this._btnOk
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = this.getChildByName("btnClose")),
                                    this._btnClose
                            }
                        }]),
                        n
                }(o);
                n._RF.pop()
            }
        }
    }
));
