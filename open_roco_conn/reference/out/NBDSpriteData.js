System.register("chunks:///_virtual/NBDSpriteData.ts", ["cc", "./NBDSpiritSkillData.ts"], (function(i) {
        var t, e;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
                , function(i) {
                    e = i.NBDSpiritSkillData
                }
            ],
            execute: function() {
                t._RF.push({}, "0dd63ljBOxKWYGXd88gfROv", "NBDSpriteData", void 0);
                i("NBDSpriteData", function() {
                    function i() {
                        this.id = void 0,
                            this.level = void 0,
                            this.expToNextLevel = void 0,
                            this.temper = void 0,
                            this.sex = void 0,
                            this.caughtTime = void 0,
                            this.caughtLocation = void 0,
                            this.storageTime = void 0,
                            this.maxHP = void 0,
                            this.baseHP = void 0,
                            this.PA = void 0,
                            this.PD = void 0,
                            this.MA = void 0,
                            this.MD = void 0,
                            this.SP = void 0,
                            this.HP = void 0,
                            this.TPA = void 0,
                            this.TPD = void 0,
                            this.TMA = void 0,
                            this.TMD = void 0,
                            this.TSP = void 0,
                            this.THP = void 0,
                            this.surplus = 10,
                            this.GPA = void 0,
                            this.GPD = void 0,
                            this.GMA = void 0,
                            this.GMD = void 0,
                            this.GSP = void 0,
                            this.GHP = void 0,
                            this.skills = [],
                            this.ZPA = void 0,
                            this.ZPD = void 0,
                            this.ZMA = void 0,
                            this.ZMD = void 0,
                            this.ZSP = void 0,
                            this.ZHP = void 0,
                            this.XPA = void 0,
                            this.XPD = void 0,
                            this.XMA = void 0,
                            this.XMD = void 0,
                            this.XSP = void 0,
                            this.isHire = void 0,
                            this.hireIndex = void 0,
                            this.hireType = void 0,
                            this.hireExpTime = void 0,
                            this.talentType = void 0,
                            this.talentLevel = void 0,
                            this.skinID = void 0,
                            this.closeness = void 0,
                            this.affiliation = void 0,
                            this.addPlan = void 0
                    }
                    return i.prototype.readFromSlice = function(i) {
                        this.surplus = i.readUnsignedShort(),
                            this.baseHP = i.readUnsignedShort(),
                            this.ZPA = i.readUnsignedShort(),
                            this.ZPD = i.readUnsignedShort(),
                            this.ZMA = i.readUnsignedShort(),
                            this.ZMD = i.readUnsignedShort(),
                            this.ZSP = i.readUnsignedShort(),
                            this.ZHP = i.readUnsignedShort(),
                            this.XPA = i.readUnsignedByte() / 10,
                            this.XPD = i.readUnsignedByte() / 10,
                            this.XMA = i.readUnsignedByte() / 10,
                            this.XMD = i.readUnsignedByte() / 10,
                            this.XSP = i.readUnsignedByte() / 10,
                            this.id = i.readUnsignedInt(),
                            this.level = i.readUnsignedByte(),
                            this.expToNextLevel = i.readUnsignedInt(),
                            this.temper = i.readUnsignedByte(),
                            this.sex = i.readUnsignedByte(),
                            this.caughtTime = i.readUnsignedInt(),
                            this.caughtLocation = i.readUnsignedShort(),
                            this.storageTime = i.readUnsignedInt();
                        var t = i.readUnsignedShort();
                        this.closeness = 127 & t,
                            this.affiliation = t >> 7 & 7,
                            this.addPlan = t >> 10 & 63,
                            this.maxHP = i.readUnsignedShort(),
                            this.PA = i.readUnsignedShort(),
                            this.PD = i.readUnsignedShort(),
                            this.MA = i.readUnsignedShort(),
                            this.MD = i.readUnsignedShort(),
                            this.SP = i.readUnsignedShort(),
                            this.HP = i.readUnsignedShort(),
                            this.TPA = i.readUnsignedByte(),
                            this.TPD = i.readUnsignedByte(),
                            this.TMA = i.readUnsignedByte(),
                            this.TMD = i.readUnsignedByte(),
                            this.TSP = i.readUnsignedByte(),
                            this.THP = i.readUnsignedByte(),
                            this.GPA = i.readUnsignedByte(),
                            this.GPD = i.readUnsignedByte(),
                            this.GMA = i.readUnsignedByte(),
                            this.GMD = i.readUnsignedByte(),
                            this.GSP = i.readUnsignedByte(),
                            this.GHP = i.readUnsignedByte();
                        for (var s = i.readUnsignedShort(), d = 0; d < s; d++) {
                            var n = new e;
                            n.readFromSlice(i),
                                this.skills.push(n)
                        }
                        var h = i.readUnsignedByte();
                        this.skinID = 0 != h ? 1e5 + 10 * this.id + h - 1 : 0,
                            i.readUnsignedByte(),
                            i.readUnsignedByte(),
                            i.readUnsignedByte(),
                            i.readUnsignedByte(),
                            i.readUnsignedByte(),
                            i.readUnsignedByte(),
                            i.readUnsignedByte()
                    }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
