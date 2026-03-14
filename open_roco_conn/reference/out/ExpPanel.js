System.register("chunks:///_virtual/ExpPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GuideTargetName.ts", "./AgentNode.ts", "./WindowBase.ts"], (function(t) {
        var e, n, r, i, u, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    i = t.GuideTargetName
                }
                , function(t) {
                    u = t.AgentNode
                }
                , function(t) {
                    s = t.WindowBase
                }
            ],
            execute: function() {
                r._RF.push({}, "90e1fuq2uROSZioSWPXIetm", "ExpPanel", void 0);
                var o = t("GetExpPanelUI", function(t) {
                    function r() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                            r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this)._sureBtn = void 0,
                            e
                    }
                    return e(r, t),
                        n(r, [{
                            key: "sureBtn",
                            get: function() {
                                return this._sureBtn || (this._sureBtn = new u(this.getChildByName("sureBtn"))),
                                    this._sureBtn
                            }
                        }]),
                        r
                }(u));
                t("ExpPanel", function(t) {
                    function r() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                            r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this)._ui = new o,
                            e._isShow = void 0,
                            e
                    }
                    e(r, t);
                    var u = r.prototype;
                    return u.ishow = function() {}
                        ,
                        u.getGuideTarget = function(t) {
                            switch (t) {
                                case i.OK:
                                    return this._ui.sureBtn.target
                            }
                            return null
                        }
                        ,
                        n(r, [{
                            key: "isShow",
                            get: function() {
                                return this._isShow
                            },
                            set: function(t) {}
                        }]),
                        r
                }(s));
                r._RF.pop()
            }
        }
    }
));
