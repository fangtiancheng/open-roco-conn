System.register("chunks:///_virtual/GetNewSkillTipPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GuideTargetName.ts", "./AgentNode.ts", "./WindowBase.ts"], (function(t) {
        var e, n, i, o, r, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.GuideTargetName
                }
                , function(t) {
                    r = t.AgentNode
                }
                , function(t) {
                    u = t.WindowBase
                }
            ],
            execute: function() {
                i._RF.push({}, "a9354e15UpPtZ8Esj9YUbt0", "GetNewSkillTipPanel", void 0);
                var a = t("GetNewSkillTipPanelUI", function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._okBtn = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "okBtn",
                            get: function() {
                                return this._okBtn || (this._okBtn = new r(this.getChildByName("okBtn"))),
                                    this._okBtn
                            }
                        }]),
                        i
                }(r));
                t("GetNewSkillTipPanel", function(t) {
                    function n() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._ui = new a,
                            e
                    }
                    e(n, t);
                    var i = n.prototype;
                    return i.ishow = function() {}
                        ,
                        i.getGuideTarget = function(t) {
                            switch (t) {
                                case o.OK:
                                    return this._ui.okBtn.target
                            }
                            return null
                        }
                        ,
                        n
                }(u));
                i._RF.pop()
            }
        }
    }
));
