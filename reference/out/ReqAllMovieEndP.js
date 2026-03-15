System.register("chunks:///_virtual/ReqAllMovieEndP.ts", ["cc", "./ProtocolHelper.ts", "./CombatNetCmdsType.ts"], (function(e) {
        var t, n, o;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.ProtocolHelper
                }
                , function(e) {
                    o = e.CombatNetCmdsType
                }
            ],
            execute: function() {
                t._RF.push({}, "e18f1gU4qBJAYcIETkK3cxY", "ReqAllMovieEndP", void 0);
                e("ReqAllMovieEndP", function() {
                    function e() {}
                    var t = e.prototype;
                    return t.decode = function(e) {
                        return e.body.readUnsignedInt()
                    }
                        ,
                        t.encode = function(e, t) {
                            return void 0 === t && (t = -1),
                                n.CreateADF(t)
                        }
                        ,
                        t.getADFType = function() {
                            return o.T_REQ_ALL_MVEND
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
