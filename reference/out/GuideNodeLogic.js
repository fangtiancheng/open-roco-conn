System.register("chunks:///_virtual/GuideNodeLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(e) {
        var t, n, i, c, o, r;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    i = e.cclegacy,
                        c = e.Event,
                        o = e.NodeEventType
                }
                , function(e) {
                    r = e.AgentNode
                }
            ],
            execute: function() {
                i._RF.push({}, "bef9c7lkwpPEbRa0/riD7Y0", "GuideNodeLogic", void 0),
                    e("GuideNodeLogic", function() {
                        function e(e) {
                            this._ui = void 0,
                                this.target = void 0,
                                this.target = e,
                                this._ui = new u(e),
                            this._ui && (this._ui.agreeBtn.on(o.TOUCH_END, this.onClickAgreeGuideBtn, this),
                                this._ui.cancelBtn.on(o.TOUCH_END, this.onClickCancelGuideBtn, this))
                        }
                        var t = e.prototype;
                        return t.onClickAgreeGuideBtn = function(t) {
                            this._ui.active = !1,
                                this._ui.target.dispatchEvent(new c(e.EVENT_ON_CLIICK_AGREEMENT_GUIDE))
                        }
                            ,
                            t.onClickCancelGuideBtn = function(e) {
                                this._ui.active = !1
                            }
                            ,
                            e
                    }()).EVENT_ON_CLIICK_AGREEMENT_GUIDE = "GuideNode.event_on_cliick_agreement_guide";
                var u = function(e) {
                    function i() {
                        for (var t, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(i)) || this)._agreeBtn = void 0,
                            t._cancelBtn = void 0,
                            t
                    }
                    return t(i, e),
                        n(i, [{
                            key: "agreeBtn",
                            get: function() {
                                return this._agreeBtn || (this._agreeBtn = new r(this.getChildByName("agreeBtn"))),
                                    this._agreeBtn
                            }
                        }, {
                            key: "cancelBtn",
                            get: function() {
                                return this._cancelBtn || (this._cancelBtn = new r(this.getChildByName("cancelBtn"))),
                                    this._cancelBtn
                            }
                        }]),
                        i
                }(r);
                i._RF.pop()
            }
        }
    }
));
