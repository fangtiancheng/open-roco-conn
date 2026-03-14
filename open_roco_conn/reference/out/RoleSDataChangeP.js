System.register("chunks:///_virtual/RoleSDataChangeP.ts", ["cc", "./ADFCmdsType.ts", "./RoleStateData.ts"], (function(e) {
        var n, t, a;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    t = e.ADFCmdsType
                }
                , function(e) {
                    a = e.RoleStateData
                }
            ],
            execute: function() {
                n._RF.push({}, "a14d4UmYM1A9aqRo8qF0CFM", "RoleSDataChangeP", void 0);
                e("RoleSDataChangeP", function() {
                    function e() {}
                    var n = e.prototype;
                    return n.decode = function(e) {
                        var n = e.body
                            , t = new a;
                        return t.uin = n.readUnsignedInt(),
                            t.stateType = n.readUnsignedByte(),
                            t.isFlying = n.readUnsignedByte(),
                            t.flyItem = n.readUnsignedInt(),
                            t.isSwiming = n.readUnsignedByte(),
                            t.swimItem = n.readUnsignedInt(),
                            t.cursedType = n.readUnsignedShort(),
                            t.flashType = n.readUnsignedShort(),
                            t.summonType = n.readUnsignedShort(),
                            t.rideType = n.readUnsignedShort(),
                            t.spiritID = n.readUnsignedInt(),
                            t.isVip = n.readBoolean(),
                            t.vipLevel = n.readUnsignedByte(),
                            t.vipLulu = n.readUnsignedByte(),
                            t.vipExpiringDays = n.readUnsignedInt(),
                            t.isMagicOffset = n.readUnsignedByte(),
                            t.pkState = n.readUnsignedByte(),
                            t.guardianPetID = n.readUnsignedInt(),
                            t.guardianPetLv = n.readUnsignedInt(),
                            t.fishingState = n.readUnsignedByte(),
                            t
                    }
                        ,
                        n.encode = function(e, n) {
                            return null
                        }
                        ,
                        n.getADFType = function() {
                            return t.T_StateDataChange
                        }
                        ,
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
