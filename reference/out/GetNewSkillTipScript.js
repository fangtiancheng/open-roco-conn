System.register("chunks:///_virtual/GetNewSkillTipScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./AScript.ts"], (function(t) {
        var e, i, n, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.default
                }
                , function(t) {
                    c = t.AScript
                }
            ],
            execute: function() {
                i._RF.push({}, "28ff6M1ohZMpoYDbYVCupeS", "GetNewSkillTipScript", void 0);
                t("GetNewSkillTipScript", function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return e(i, t),
                        i.prototype.setData = function(t, e) {
                            n.IS_LOCAL
                        }
                        ,
                        i
                }(c));
                i._RF.pop()
            }
        }
    }
));
