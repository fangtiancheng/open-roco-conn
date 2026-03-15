System.register("chunks:///_virtual/CrossServerReqAllMovieEndP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqAllMovieEndP.ts"], (function(e) {
        var t, n, o, r;
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
                    r = e.ReqAllMovieEndP
                }
            ],
            execute: function() {
                n._RF.push({}, "39527erRh5EAIteHCpfvFdJ", "CrossServerReqAllMovieEndP", void 0);
                e("CrossServerReqAllMovieEndP", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    return t(n, e),
                        n.prototype.getADFType = function() {
                            return o.CMD_WORLD_FIGHT_SHOW_ATTACK_NOTIFY
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
