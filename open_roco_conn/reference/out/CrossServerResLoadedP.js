System.register("chunks:///_virtual/CrossServerResLoadedP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ResLoadedP.ts"], (function(e) {
        var t, s, o, r;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    o = e.CombatNetCmdsType
                }
                , function(e) {
                    r = e.ResLoadedP
                }
            ],
            execute: function() {
                s._RF.push({}, "ff65bswhXlKR5dVX2sEYucu", "CrossServerResLoadedP", void 0);
                e("CrossServerResLoadedP", function(e) {
                    function s() {
                        return e.call(this) || this
                    }
                    return t(s, e),
                        s.prototype.getADFType = function() {
                            return o.CMD_WORLD_FIGHT_LOAD_SRC_RESULT
                        }
                        ,
                        s
                }(r));
                s._RF.pop()
            }
        }
    }
));
