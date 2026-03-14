System.register("chunks:///_virtual/SkillChangePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowCloseAction.ts", "./SpiritBagGetNewSkillPanel.ts"], (function(t) {
        var e, n, i, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.WindowCloseAction
                }
                , function(t) {
                    l = t.SpiritBagGetNewSkillPanel
                }
            ],
            execute: function() {
                n._RF.push({}, "27d315/QqRHm5kyPK1UHe3L", "SkillChangePanel", void 0);
                t("SkillChangePanel", function(t) {
                    function n(e, n) {
                        var l;
                        return void 0 === e && (e = null),
                            (l = t.call(this, e, !1) || this).closeAction = i.HIDE,
                            l
                    }
                    return e(n, t),
                        n.prototype.setData = function(e, n, i) {
                            t.prototype.setData.call(this, e, n, i),
                                this._ui.desc.text = "只能学会4个技能，请选择一个替换。"
                        }
                        ,
                        n
                }(l));
                n._RF.pop()
            }
        }
    }
));
