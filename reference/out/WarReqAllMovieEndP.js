System.register("chunks:///_virtual/WarReqAllMovieEndP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatNetCmdsType.ts", "./ReqAllMovieEndP.ts"], (function(e) {
        var t, n, o, i;
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
                    i = e.ReqAllMovieEndP
                }
            ],
            execute: function() {
                n._RF.push({}, "6c4772MRH9HobusOe3Yj9zr", "WarReqAllMovieEndP", void 0);
                e("WarReqAllMovieEndP", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    return t(n, e),
                        n.prototype.getADFType = function() {
                            return o.CMD_WAR_FIGHT_SHOW_ATTACK_NOTIFY
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
