System.register("chunks:///_virtual/ProtocolHelper.ts", ["cc", "./DEFINE.ts", "./ADF.ts", "./RoleData.ts", "./P_DetailRoleInfo.ts", "./P_ReturnCode.ts", "./P_RoleInfo.ts"], (function(e) {
        var n, a, t, d, r, i, s;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    a = e.DEFINE
                }
                , function(e) {
                    t = e.ADF
                }
                , function(e) {
                    d = e.RoleData
                }
                , function(e) {
                    r = e.P_DetailRoleInfo
                }
                , function(e) {
                    i = e.P_ReturnCode
                }
                , function(e) {
                    s = e.P_RoleInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "33935knY35OaZvPkrnUxrok", "ProtocolHelper", void 0);
                var o = e("ProtocolHelper", function() {
                    function e() {}
                    return e.CreateADF = function(n, a) {
                        void 0 === a && (a = 0);
                        var d = new t;
                        return d.head.cmdID = n,
                            d.head.uin = 0 != a ? a : e.USERUIN,
                            d
                    }
                        ,
                        e.ReadObject = function(e, n) {
                            var a = new e;
                            return a.readExternal(n),
                                a
                        }
                        ,
                        e.ReadCode = function(e) {
                            var n = new i;
                            return n.readExternal(e),
                                n
                        }
                        ,
                        e.ReadRoleData = function(e) {
                            var n = new d;
                            return n.avatarType = n.uin = n.id = e.readUnsignedInt(),
                                n.roleType = n.uin > 1e4 ? d.MEMBER : d.GUEST,
                                n.nickName = a.ReadFixedChars(e, a.L_NICKNAME),
                                n.level = e.readUnsignedShort(),
                                n.skinType = e.readUnsignedInt(),
                                n.avatarVersion = e.readUnsignedShort(),
                                n.avatarType < 1e4 ? n.avatarType = 9527 : 0 == n.avatarVersion && (n.avatarType = n.skinType),
                                n.avatarURL = a.ReadChars(e, 32),
                                n.locXY = a.ReadPoint(e),
                                n.direction = e.readShort(),
                                n.stateType = e.readUnsignedByte(),
                                n.isFlying = e.readUnsignedByte(),
                                n.flyItem = e.readUnsignedInt(),
                                n.isSwiming = e.readUnsignedByte(),
                                n.swimItem = e.readUnsignedInt(),
                                n.cursedType = e.readUnsignedShort(),
                                n.flashType = e.readUnsignedShort(),
                                n.summonType = e.readUnsignedShort(),
                                n.rideType = e.readUnsignedShort(),
                                n.spiritID = e.readUnsignedInt(),
                                n.isVip = e.readBoolean(),
                                n.vipLevel = e.readUnsignedByte(),
                                n.vipExpiringDays = e.readUnsignedInt(),
                                n.vipLulu = e.readUnsignedByte(),
                                n.isMagicOffset = e.readUnsignedByte(),
                                n.pkState = e.readUnsignedByte(),
                                n.trainerLevel = e.readUnsignedByte(),
                                n.trainerExp = e.readUnsignedInt(),
                                n.achieveId = e.readUnsignedByte(),
                                n.titleLevel = e.readUnsignedByte(),
                                n.avatarTransformID = e.readUnsignedInt(),
                                n.avatarEffectID = e.readUnsignedInt(),
                                n.guardianPetID = e.readUnsignedInt(),
                                n.guardianPetLv = e.readUnsignedInt(),
                                n.fishingState = e.readUnsignedByte(),
                                n.qualifyEmblem = e.readUnsignedByte(),
                                n.selectedMedal = e.readUnsignedByte(),
                                n.footprintID = e.readUnsignedInt(),
                            e.bytesAvailable && (n.namebgId = e.readUnsignedInt(),
                                n.paopaoId = e.readUnsignedInt()),
                            e.bytesAvailable && (n.dazzleAvatar = 1 == e.readUnsignedByte(),
                                n.daMagic = e.readUnsignedInt(),
                                n.daRing = e.readUnsignedInt(),
                                n.daMount = e.readUnsignedInt(),
                                n.daEnvironment = e.readUnsignedInt(),
                                n.daBackground = e.readUnsignedInt(),
                                n.daFrame = e.readUnsignedInt(),
                                n.daDoll = e.readUnsignedInt(),
                                n.daStamp = e.readUnsignedInt(),
                                n.daFootprint = e.readUnsignedInt(),
                                n.daNamebg = e.readUnsignedInt(),
                                n.daPopup = e.readUnsignedInt()),
                                n
                        }
                        ,
                        e.printBytes = function(e, n, a) {
                            void 0 === n && (n = 0),
                            void 0 === a && (a = 16);
                            for (var t = "", d = e.length, r = n, i = 1, s = 0; r < d; ) {
                                var o = Number(e[r]).toString(16).toLocaleUpperCase();
                                1 == o.length && (o += " "),
                                    t += 0 != s ? " " + o : "[" + i + "]" + o,
                                ++s == a && (i++,
                                    t += "\n",
                                    s = 0),
                                    r++
                            }
                            return t
                        }
                        ,
                        e
                }());
                o.RETURNCODE = i,
                    o.USERINFO = s,
                    o.USERDETAILINFO = r,
                    o.USERUIN = 0,
                    n._RF.pop()
            }
        }
    }
));
