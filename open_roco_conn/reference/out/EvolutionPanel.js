System.register("chunks:///_virtual/EvolutionPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts"], (function(n) {
        var t, o, e;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    e = n.WindowBase
                }
            ],
            execute: function() {
                o._RF.push({}, "f574fVAcf5JaYpselNsb1E0", "EvolutionPanel", void 0);
                n("EvolutionPanel", function(n) {
                    function o() {
                        return n.apply(this, arguments) || this
                    }
                    return t(o, n),
                        o.prototype.ishow = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o
                }(e));
                o._RF.pop()
            }
        }
    }
));
