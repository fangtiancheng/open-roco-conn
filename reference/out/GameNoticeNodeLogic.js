System.register("chunks:///_virtual/GameNoticeNodeLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./GameNoticeCfgLoader.ts"], (function(t) {
        var e, i, n, s, o, a;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    a = t.GameNoticeCfgLoader
                }
            ],
            execute: function() {
                n._RF.push({}, "e67adTSwJtEvIFfxcDY3f0N", "GameNoticeNodeLogic", void 0);
                t("GameNoticeNodeLogic", function() {
                    function t(t) {
                        this._ui = void 0,
                            this._ui = new c(t),
                        this._ui && (this._ui.adverseUpdateBtn.on(s.TOUCH_END, this.onClickGameNoticeUpdateBtn, this),
                            this._ui.adverseSpecialBtn.on(s.TOUCH_END, this.onClickAdverseSpecialBtn, this),
                            this._ui.closeBtn.on(s.TOUCH_END, this.onClickAdverseCloseBtn, this))
                    }
                    var i = t.prototype;
                    return i.show = function() {
                        this.onClickGameNoticeUpdateBtn(null)
                    }
                        ,
                        i.onClickGameNoticeUpdateBtn = function(t) {
                            this._ui.tfTitle.string = a.Instance.adverseUpdateTitle,
                                this._ui.tfContent.string = a.Instance.adverseUpdateContent,
                                this.setBtnStyle(2, 1)
                        }
                        ,
                        i.onClickAdverseSpecialBtn = function(t) {
                            this._ui.tfTitle.string = a.Instance.adverseSpecialTitle,
                                this._ui.tfContent.string = a.Instance.adverseSpecialContent,
                                this.setBtnStyle(1, 2)
                        }
                        ,
                        i.setBtnStyle = function(t, e) {
                            this._ui.adverseUpdateBtn.gotoAndStop(t),
                                this._ui.adverseSpecialBtn.gotoAndStop(e)
                        }
                        ,
                        i.onClickAdverseCloseBtn = function(t) {
                            this._ui.active = !1
                        }
                        ,
                        e(t, [{
                            key: "target",
                            get: function() {
                                return this._ui && this._ui.target ? this._ui.target : null
                            }
                        }]),
                        t
                }());
                var c = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._tfTitle = void 0,
                            e._tfContent = void 0,
                            e._adverseUpdateBtn = void 0,
                            e._adverseSpecialBtn = void 0,
                            e._closeBtn = void 0,
                            e
                    }
                    return i(n, t),
                        e(n, [{
                            key: "tfTitle",
                            get: function() {
                                return this._tfTitle || (this._tfTitle = new o(this.getChildByName("tfTitle"))),
                                    this._tfTitle
                            }
                        }, {
                            key: "tfContent",
                            get: function() {
                                return this._tfContent || (this._tfContent = new o(this.getChildByName("scroll").getChildByName("tfContent"))),
                                    this._tfContent
                            }
                        }, {
                            key: "adverseUpdateBtn",
                            get: function() {
                                return this._adverseUpdateBtn || (this._adverseUpdateBtn = new o(this.getChildByName("adverseUpdateBtn"))),
                                    this._adverseUpdateBtn
                            }
                        }, {
                            key: "adverseSpecialBtn",
                            get: function() {
                                return this._adverseSpecialBtn || (this._adverseSpecialBtn = new o(this.getChildByName("adverseSpecialBtn"))),
                                    this._adverseSpecialBtn
                            }
                        }, {
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new o(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }]),
                        n
                }(o);
                n._RF.pop()
            }
        }
    }
));
