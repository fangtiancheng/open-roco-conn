System.register("chunks:///_virtual/SkillTipsScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./AScript.ts"], (function(t) {
        var i, n, e, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    e = t.default
                }
                , function(t) {
                    r = t.AScript
                }
            ],
            execute: function() {
                n._RF.push({}, "87b180GYUVNDJrNp+qIwJYz", "SkillTipsScript", void 0);
                t("SkillTipsScript", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return i(n, t),
                        n.prototype.setData = function(t, i) {
                            e.IS_LOCAL
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
