System.register("chunks:///_virtual/CatchSpiritScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./AScript.ts"], (function(t) {
        var i, c, n, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    c = t.cclegacy
                }
                , function(t) {
                    n = t.default
                }
                , function(t) {
                    r = t.AScript
                }
            ],
            execute: function() {
                c._RF.push({}, "79f749u9GpPlKmQZ9+LuPRm", "CatchSpiritScript", void 0);
                t("CatchSpiritScript", function(t) {
                    function c() {
                        return t.apply(this, arguments) || this
                    }
                    return i(c, t),
                        c.prototype.setData = function(t) {
                            n.IS_LOCAL
                        }
                        ,
                        c
                }(r));
                c._RF.pop()
            }
        }
    }
));
