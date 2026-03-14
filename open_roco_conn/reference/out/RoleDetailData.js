System.register("chunks:///_virtual/RoleDetailData.ts", ["cc"], (function(t) {
        var i;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
            ],
            execute: function() {
                i._RF.push({}, "784c1/vSdNNnoKrxIQpygoW", "RoleDetailData", void 0);
                var s = t("default", function() {
                    function t() {
                        this.serNum = 0,
                            this.id = 0,
                            this.nickname = "",
                            this.title = "",
                            this.level = 0,
                            this.exp = 0,
                            this.maxExp = 0,
                            this.honor = 0,
                            this.coin = 0,
                            this.birthDate = void 0,
                            this.mood = "",
                            this.atkp = 0,
                            this.intp = 0,
                            this.chmp = 0,
                            this.skinColor = 0,
                            this.avatarVersion = 0,
                            this.avatar = void 0,
                            this.headBD = void 0,
                            this.emblemsObtained = void 0,
                            this.isVip = void 0,
                            this.vipLevel = 0,
                            this.magicValue = 0,
                            this.vipExpireDate = void 0,
                            this.vipExpiringDays = 0,
                            this.pvpJWin = 0,
                            this.pvpJLost = 0,
                            this.pvpJEscape = 0,
                            this.pvpZWin = 0,
                            this.pvpZLost = 0,
                            this.pvpZEscape = 0,
                            this.pvpZConfig = 0,
                            this.bossInfoBraveMode = void 0,
                            this.bossInfoHeroMode = 0,
                            this.bossInfoTreasure = 0,
                            this.skyTowerMaxFloorNum = 0,
                            this.trainerLevel = 0,
                            this.trainerExp = 0,
                            this.achieveId = 0,
                            this.titleLevel = 0,
                            this.avatarEffectID = 0,
                            this.avatarTransformID = 0,
                            this.diamondNum = 0,
                            this.guardianPetID = 0,
                            this.guardianPetLevel = 0,
                            this.honourPoint = 0,
                            this.fakeMedal1 = 0,
                            this.fakeMedal2 = 0,
                            this.qualifyEmblem = 0,
                            this.newAdventureLastPoint = 0,
                            this.selectedMedal = 0,
                            this.footprintID = 0,
                            this.ladderMatchLevel = 0,
                            this.namebgId = 0,
                            this.paopaoId = 0,
                            this.dazzleAvatar = void 0,
                            this.daAvatar = void 0
                    }
                    var i = t.prototype;
                    return i.getBossInfoTreasureStatus = function(t) {
                        return t >= 0 && t < 16 ? this.bossInfoTreasure >> (t << 1) & 3 : -1
                    }
                        ,
                        i.getBossInfoHeroModeBossWinCount = function() {
                            var t = this.bossInfoTreasure;
                            return t = (t = (858993459 & (t = (1431655765 & t) + (t >> 1 & 1431655765))) + (t >> 2 & 858993459)) + (t >> 4) & 252645135,
                                t += t >> 8,
                            255 & (t += t >> 16)
                        }
                        ,
                        i.getBossInfoHeroModeStatus = function(t) {
                            return t >= 0 && t < 22 ? this.bossInfoTreasure & 1 << t ? 1 : 0 : -1
                        }
                        ,
                        t
                }());
                s.AVATAR_NUM = 9,
                    s.DAZZLE_NUM = 29,
                    s.EMBLEMS_NUM = 8,
                    i._RF.pop()
            }
        }
    }
));
