System.register("chunks:///_virtual/TemperScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AScript.ts"], (function(t) {
        var e, r, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    i = t.AScript
                }
            ],
            execute: function() {
                r._RF.push({}, "521f3WfBF9GEp6umwFB4faz", "TemperScript", void 0);
                t("TemperScript", function(t) {
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    return e(r, t),
                        r
                }(i));
                r._RF.pop()
            }
        }
    }
));
