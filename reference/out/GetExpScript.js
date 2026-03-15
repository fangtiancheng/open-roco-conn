System.register("chunks:///_virtual/GetExpScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AScript.ts"], (function(t) {
        var e, i, n;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.AScript
                }
            ],
            execute: function() {
                i._RF.push({}, "6e4ce7ziupEMpMDAmPo30st", "GetExpScript", void 0);
                t("GetExpScript", function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return e(i, t),
                        i.prototype.setData = function(t, e, i, n, c, r, p) {}
                        ,
                        i
                }(n));
                i._RF.pop()
            }
        }
    }
));
