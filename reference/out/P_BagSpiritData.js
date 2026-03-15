System.register("chunks:///_virtual/P_BagSpiritData.ts", ["cc", "./PropertyDes.ts", "./P_BagSpiritSkillData.ts", "./P_SpiritValue.ts"], (function(i) {
        var t, e, s, n;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
                , function(i) {
                    e = i.PropertyDes
                }
                , function(i) {
                    s = i.P_BagSpiritSkillData
                }
                , function(i) {
                    n = i.P_SpiritValue
                }
            ],
            execute: function() {
                t._RF.push({}, "dfe40Rs/PxBaYl/F7qDP1lp", "P_BagSpiritData", void 0);
                i("P_BagSpiritData", function() {
                    function i() {
                        this.skillCls = s,
                            this.id = void 0,
                            this.index = void 0,
                            this.level = void 0,
                            this.expToNextLevel = void 0,
                            this.temper = void 0,
                            this.temperName = void 0,
                            this.sex = void 0,
                            this.skinIndex = void 0,
                            this.sexNmae = void 0,
                            this.caughtTime = void 0,
                            this.caughtLocation = void 0,
                            this.storageTime = void 0,
                            this.closeness = void 0,
                            this.affiliation = void 0,
                            this.maxHP = void 0,
                            this.PA = void 0,
                            this.PD = void 0,
                            this.MA = void 0,
                            this.MD = void 0,
                            this.SP = void 0,
                            this.HP = void 0,
                            this.innateValue = void 0,
                            this.effortValue = void 0,
                            this.skills = void 0,
                            this.des = void 0
                    }
                    var t = i.prototype;
                    return t.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        t.read = function(i) {
                            this.id = i.readUnsignedInt(),
                                this.level = i.readUnsignedByte(),
                                this.expToNextLevel = i.readUnsignedInt(),
                                this.temper = i.readUnsignedByte(),
                                this.temperName = e.TEMPERS[this.temper - 1],
                                this.sex = i.readUnsignedByte(),
                                1 == this.sex ? this.sexNmae = "雄" : 2 == this.sex ? this.sexNmae = "雌" : this.sexNmae = "未知",
                                this.caughtTime = i.readUnsignedInt(),
                                this.caughtLocation = i.readUnsignedShort(),
                                this.storageTime = i.readUnsignedInt();
                            var t = i.readUnsignedShort();
                            this.closeness = 127 & t,
                                this.affiliation = t >> 7 & 7,
                                this.maxHP = i.readUnsignedShort(),
                                this.PA = i.readUnsignedShort(),
                                this.PD = i.readUnsignedShort(),
                                this.MA = i.readUnsignedShort(),
                                this.MD = i.readUnsignedShort(),
                                this.SP = i.readUnsignedShort(),
                                this.HP = i.readUnsignedShort(),
                                this.innateValue = new n,
                                this.innateValue.read(i),
                                this.effortValue = new n,
                                this.effortValue.read(i),
                                this.skills = [];
                            for (var s = i.readUnsignedShort(), a = 0; a < s; a++) {
                                var d = new this.skillCls;
                                d.read(i),
                                    this.skills.push(d)
                            }
                            i.readInt(),
                                this.skinIndex = i.readUnsignedByte(),
                                i.readUnsignedByte(),
                                i.readUnsignedShort()
                        }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
