System.register("chunks:///_virtual/STSpiritInfo.ts", ["cc", "./NetDefine.ts"], (function(i) {
        var t, e;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
                , function(i) {
                    e = i.NetDefine
                }
            ],
            execute: function() {
                t._RF.push({}, "69b42lS4dVML5zYtiZQ+p1J", "STSpiritInfo", void 0);
                i("STSpiritInfo", function() {
                    function i() {
                        this.id = void 0,
                            this.catchTime = void 0,
                            this.addSTTime = void 0,
                            this.level = void 0,
                            this.height = void 0,
                            this.weight = void 0,
                            this.sex = void 0,
                            this.talentType = void 0,
                            this.talentLevel = void 0,
                            this.weaponFlag = 0,
                            this.armorFlag = 0,
                            this.jewelryFlag = 0,
                            this.weaponInfo = void 0,
                            this.armorInfo = void 0,
                            this.jewelryInfo = void 0,
                            this.skinID = void 0,
                            this.spiritDes = void 0
                    }
                    var t = i.prototype;
                    return t.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        t.read = function(i) {
                            this.id = i.readUnsignedInt(),
                                this.catchTime = i.readUnsignedInt(),
                                this.addSTTime = i.readUnsignedInt(),
                                this.level = i.readUnsignedByte(),
                                this.sex = i.readUnsignedByte();
                            var t = i.readUnsignedByte();
                            this.talentLevel = 1 & t,
                                this.skinID = 0 != (t >> 1 & 15) ? 1e5 + 10 * this.id + (t >> 1 & 15) - 1 : 0,
                                this.talentType = i.readUnsignedByte();
                            var s = e.sDesProxy;
                            null != s && (this.spiritDes = s.select(this.id)),
                                this.height = Number(this.spiritDes.height.split("m")[0]),
                                this.weight = Number(this.spiritDes.weight.split("kg")[0])
                        }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
