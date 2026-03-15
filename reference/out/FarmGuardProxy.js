System.register("chunks:///_virtual/FarmGuardProxy.ts", ["cc", "./P_FreeRequest.ts", "./ServerKeywords.ts", "./SetFarmGuardProcessor.ts"], (function(r) {
        var e, t, n, o;
        return {
            setters: [function(r) {
                e = r.cclegacy
            }
                , function(r) {
                    t = r.P_FreeRequest
                }
                , function(r) {
                    n = r.ServerKeywords
                }
                , function(r) {
                    o = r.SetFarmGuardProcessor
                }
            ],
            execute: function() {
                e._RF.push({}, "546f3scixpDdJ+QG66jZP3p", "FarmGuardProxy", void 0);
                r("FarmGuardProxy", function() {
                    function r() {
                        throw new Error("FarmGuardProxy can not be instantiated.")
                    }
                    return r.setFarmGuardSpirit = function(r, e) {
                        var u = new o
                            , a = new o;
                        a.bagIndex = r,
                            new t(n.SEND_FARM_GUARD_SPIRIT,a,u,e).send()
                    }
                        ,
                        r
                }());
                e._RF.pop()
            }
        }
    }
));
