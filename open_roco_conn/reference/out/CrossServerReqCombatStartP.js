System.register("chunks:///_virtual/CrossServerReqCombatStartP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqCombatStartP.ts"], (function(t) {
        var e, r, o, n;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    o = t.CombatNetCmdsType
                }
                , function(t) {
                    n = t.ReqCombatStartP
                }
            ],
            execute: function() {
                r._RF.push({}, "fc82dbXuTVED53mgWwETZGF", "CrossServerReqCombatStartP", void 0);
                t("CrossServerReqCombatStartP", function(t) {
                    function r() {
                        return t.call(this) || this
                    }
                    return e(r, t),
                        r.prototype.getADFType = function() {
                            return o.CMD_WORLD_FIGHT_REQUEST_START
                        }
                        ,
                        r
                }(n));
                r._RF.pop()
            }
        }
    }
));
