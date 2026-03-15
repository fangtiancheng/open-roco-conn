System.register("chunks:///_virtual/SpiritInfoEx.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritInfo3.ts"], (function(t) {
        var n, i, e;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    e = t.SpiritInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "174bdNk+aNHpa3CaENT7cfv", "SpiritInfoEx", void 0);
                t("SpiritInfoEx", function(t) {
                    function i() {
                        for (var n, i = arguments.length, e = new Array(i), r = 0; r < i; r++)
                            e[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(e)) || this).talentType = 0,
                            n.talentLevel = 0,
                            n.skinID = 0,
                            n
                    }
                    return n(i, t),
                        i
                }(e));
                i._RF.pop()
            }
        }
    }
));
