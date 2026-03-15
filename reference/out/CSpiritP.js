System.register("chunks:///_virtual/CSpiritP.ts", ["cc", "./ReplaceSpirit.ts", "./CombatNetCmdsType.ts", "./PReadHelp.ts"], (function(e) {
        var n, t, r, i;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    t = e.ReplaceSpirit
                }
                , function(e) {
                    r = e.CombatNetCmdsType
                }
                , function(e) {
                    i = e.PReadHelp
                }
            ],
            execute: function() {
                n._RF.push({}, "60bb32enupNColA9a2c3q/v", "CSpiritP", void 0);
                e("CSpiritP", function() {
                    function e() {}
                    var n = e.prototype;
                    return n.decode = function(e) {
                        var n = e.body
                            , r = new t;
                        if (r.id = n.readUnsignedInt(),
                            r.type = n.readUnsignedByte(),
                            r.canCombat = n.readUnsignedByte(),
                            r.oldIndex = n.readUnsignedByte(),
                            r.newIndex = n.readUnsignedByte(),
                            r.buffNum = n.readUnsignedShort(),
                        r.buffNum > 0) {
                            r.buffVars = [];
                            for (var u = 0; u < r.buffNum; u++)
                                r.buffVars.push(i.readBuffInfo(n))
                        }
                        return r
                    }
                        ,
                        n.encode = function(e, n) {
                            return null
                        }
                        ,
                        n.getADFType = function() {
                            return r.T_RES_CS
                        }
                        ,
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
