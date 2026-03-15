System.register("chunks:///_virtual/RoleDetailProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RoleDetailData.ts", "./DEFINE.ts", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./P_UInt.ts", "./ProtocolHelper.ts"], (function(e) {
        var n, a, t, d, r, i, s, o;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    t = e.default
                }
                , function(e) {
                    d = e.DEFINE
                }
                , function(e) {
                    r = e.EventDispatcher
                }
                , function(e) {
                    i = e.ADFCmdsType
                }
                , function(e) {
                    s = e.P_UInt
                }
                , function(e) {
                    o = e.ProtocolHelper
                }
            ],
            execute: function() {
                a._RF.push({}, "a486bDmuxtB26B553cg+dPJ", "RoleDetailProcessor", void 0);
                e("RoleDetailProcessor", function(e) {
                    function a(n) {
                        return e.call(this) || this
                    }
                    n(a, e);
                    var r = a.prototype;
                    return r.decode = function(e) {
                        var n = e.body
                            , a = o.ReadCode(n);
                        if (a.isError())
                            return {
                                serNum: e.head.uiSerialNum,
                                msg: a.message
                            };
                        var r = new t;
                        r.id = n.readUnsignedInt(),
                            r.serNum = e.head.uiSerialNum,
                            r.nickname = d.ReadFixedChars(n, d.L_NICKNAME);
                        var i = n.readUnsignedInt();
                        r.birthDate = new Date(1e3 * i),
                            r.level = n.readUnsignedShort(),
                            r.exp = n.readUnsignedInt(),
                            r.maxExp = n.readUnsignedInt(),
                            r.honor = n.readUnsignedInt(),
                            r.atkp = n.readUnsignedInt(),
                            r.intp = n.readUnsignedInt(),
                            r.chmp = n.readUnsignedInt(),
                            r.coin = n.readUnsignedInt(),
                            r.avatarVersion = n.readUnsignedShort(),
                            r.avatar = [];
                        for (var s = 0; s < t.AVATAR_NUM; ++s)
                            r.avatar.push(n.readUnsignedInt());
                        var g = n.readUnsignedByte();
                        for (r.emblemsObtained = [],
                                 s = 0; s < t.EMBLEMS_NUM; ++s)
                            r.emblemsObtained.push(1 == (g >> s & 1));
                        if (r.isVip = n.readBoolean(),
                            r.vipLevel = n.readUnsignedByte(),
                            r.magicValue = n.readUnsignedInt(),
                            r.vipExpireDate = new Date(1e3 * n.readUnsignedInt()),
                            r.vipExpiringDays = n.readUnsignedInt(),
                            r.pvpJWin = n.readUnsignedInt(),
                            r.pvpJLost = n.readUnsignedInt(),
                            r.pvpJEscape = n.readUnsignedInt(),
                            r.pvpZWin = n.readUnsignedInt(),
                            r.pvpZLost = n.readUnsignedInt(),
                            r.pvpZEscape = n.readUnsignedInt(),
                            r.pvpZConfig = n.readUnsignedByte(),
                            r.bossInfoBraveMode = n.readUnsignedByte(),
                            r.skyTowerMaxFloorNum = n.readByte(),
                            r.trainerLevel = n.readUnsignedByte(),
                            r.trainerExp = n.readUnsignedInt(),
                            r.achieveId = n.readUnsignedByte(),
                            r.titleLevel = n.readUnsignedByte(),
                            r.avatarTransformID = n.readUnsignedInt(),
                            r.avatarEffectID = n.readUnsignedInt(),
                            r.diamondNum = n.readUnsignedInt(),
                            r.guardianPetID = n.readUnsignedInt(),
                            r.guardianPetLevel = n.readUnsignedInt(),
                            r.honourPoint = n.readUnsignedInt(),
                            r.fakeMedal1 = n.readUnsignedInt(),
                            r.fakeMedal2 = n.readUnsignedInt(),
                            r.qualifyEmblem = n.readUnsignedByte(),
                            r.newAdventureLastPoint = n.readUnsignedByte(),
                            r.selectedMedal = n.readUnsignedByte(),
                            r.footprintID = n.readUnsignedInt(),
                            r.ladderMatchLevel = n.readUnsignedByte(),
                        n.bytesAvailable && (r.namebgId = n.readUnsignedInt(),
                            r.paopaoId = n.readUnsignedInt()),
                            n.bytesAvailable)
                            for (r.dazzleAvatar = 1 == n.readUnsignedByte(),
                                     r.daAvatar = [],
                                     s = 0; s < t.DAZZLE_NUM; s++)
                                r.daAvatar.push(n.readUnsignedInt());
                        for (s = 30; s <= 31; s++)
                            r.emblemsObtained.push(1 == (r.fakeMedal1 >> s & 1));
                        return r.title = "",
                            r
                    }
                        ,
                        r.encode = function(e, n) {
                            void 0 === n && (n = -1);
                            var a = o.CreateADF(n)
                                , t = new s;
                            return t.num = e,
                                a.body = t,
                                a
                        }
                        ,
                        r.getADFType = function() {
                            return i.T_GET_USER_DETAIL
                        }
                        ,
                        a
                }(r));
                a._RF.pop()
            }
        }
    }
));
