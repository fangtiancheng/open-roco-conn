System.register("chunks:///_virtual/LevelUpScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./AScript.ts"], (function(t) {
        var e, n, i, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.default
                }
                , function(t) {
                    c = t.AScript
                }
            ],
            execute: function() {
                n._RF.push({}, "42cf9sb8WxO77RfHk4Vvd1T", "LevelUpScript", void 0);
                t("LevelUpScript", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return e(n, t),
                        n.prototype.setData = function(t) {
                            i.IS_LOCAL
                        }
                        ,
                        n
                }(c));
                n._RF.pop()
            }
        }
    }
));
