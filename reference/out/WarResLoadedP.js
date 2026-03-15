System.register("chunks:///_virtual/WarResLoadedP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ResLoadedP.ts"], (function(e) {
        var t, n, o, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.CombatNetCmdsType
                }
                , function(e) {
                    s = e.ResLoadedP
                }
            ],
            execute: function() {
                n._RF.push({}, "6bf7cDhhOBIUaQpZ9rx8A8k", "WarResLoadedP", void 0);
                e("WarResLoadedP", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    return t(n, e),
                        n.prototype.getADFType = function() {
                            return o.CMD_WAR_FIGHT_LOAD_SRC_RESULT
                        }
                        ,
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
