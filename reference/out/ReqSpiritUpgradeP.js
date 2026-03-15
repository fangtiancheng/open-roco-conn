System.register("chunks:///_virtual/ReqSpiritUpgradeP.ts", ["cc", "./CombatResType.ts", "./SpiritUpgradeVO.ts", "./CombatNetCmdsType.ts", "./PReadHelp.ts"], (function(e) {
        var t, r, n, i, p;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    r = e.CombatResType
                }
                , function(e) {
                    n = e.SpiritUpgradeVO
                }
                , function(e) {
                    i = e.CombatNetCmdsType
                }
                , function(e) {
                    p = e.PReadHelp
                }
            ],
            execute: function() {
                t._RF.push({}, "30252eufLBOKLqhTBA7qp6Q", "ReqSpiritUpgradeP", void 0);
                e("ReqSpiritUpgradeP", function() {
                    function e() {}
                    var t = e.prototype;
                    return t.decode = function(e) {
                        var t = e.body
                            , i = new n;
                        return i.type = t.readUnsignedByte(),
                            i.version = t.readUnsignedInt(),
                            i.spiritInfo = p.readSpiritInfo(t, 1),
                            i.spiritPropsVar = p.readSpiritPropertysVar(t),
                            i.spiritInfo.index = i.spiritPropsVar.index,
                            i.type == r.COMBAT_USE_EXP_ITEM || i.type == r.COMBAT_USE_BACKUP_EXP || i.type == r.COMBAT_HOME_EXP ? i : null
                    }
                        ,
                        t.encode = function(e, t) {
                            return null
                        }
                        ,
                        t.getADFType = function() {
                            return i.SPIRIT_UPGRADE
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
