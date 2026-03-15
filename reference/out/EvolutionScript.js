System.register("chunks:///_virtual/EvolutionScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AScript.ts"], (function(t) {
        var i, n, o;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    o = t.AScript
                }
            ],
            execute: function() {
                n._RF.push({}, "af039HiBaRIi7s4EH3WotLO", "EvolutionScript", void 0);
                t("EvolutionScript", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return i(n, t),
                        n.prototype.setData = function(t, i) {}
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
