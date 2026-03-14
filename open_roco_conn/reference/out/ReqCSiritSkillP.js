System.register("chunks:///_virtual/ReqCSiritSkillP.ts", ["cc", "./ProtocolHelper.ts", "./ReplaceSKill.ts", "./CombatNetCmdsType.ts"], (function(e) {
        var t, n, r, o;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.ProtocolHelper
                }
                , function(e) {
                    r = e.ReplaceSKill
                }
                , function(e) {
                    o = e.CombatNetCmdsType
                }
            ],
            execute: function() {
                t._RF.push({}, "945cdvmIgZJL4m+Hcl5ZkXx", "ReqCSiritSkillP", void 0);
                e("ReqCSiritSkillP", function() {
                    function e() {}
                    var t = e.prototype;
                    return t.decode = function(e) {
                        var t = e.body
                            , o = new r;
                        return o.code = n.ReadCode(t),
                        0 == o.code.isError() && (o.spiritIndex = t.readUnsignedByte(),
                            o.newSkill = t.readUnsignedShort()),
                            o
                    }
                        ,
                        t.encode = function(e, t) {
                            void 0 === t && (t = -1);
                            var r = n.CreateADF(t);
                            return r.body = e,
                                r
                        }
                        ,
                        t.getADFType = function() {
                            return o.T_REQ_CSSKILL
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
