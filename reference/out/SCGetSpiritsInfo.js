System.register("chunks:///_virtual/SCGetSpiritsInfo.ts", ["cc", "./ProtocolHelper.ts", "./SpiritSkillWakeupApp.ts", "./SpiritsInfoVo.ts", "./SpiritSkillVo.ts", "./SpiritVo.ts"], (function(e) {
        var n, i, t, r, o, s;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    i = e.ProtocolHelper
                }
                , function(e) {
                    t = e.SpiritSkillWakeupApp
                }
                , function(e) {
                    r = e.SpiritsInfoVo
                }
                , function(e) {
                    o = e.SpiritSkillVo
                }
                , function(e) {
                    s = e.SpiritVo
                }
            ],
            execute: function() {
                n._RF.push({}, "ae297mzkFhAr68p/lIxPJ9s", "SCGetSpiritsInfo", void 0);
                e("SCGetSpiritsInfo", function() {
                    function e() {
                        this.vo = void 0
                    }
                    var n = e.prototype;
                    return n.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        n.read = function(e) {
                            this.vo = new r,
                                this.vo.code = i.ReadCode(e),
                                this.vo.followIndex = e.readUnsignedByte();
                            var n, d, a = e.readUnsignedShort(), p = 0, l = 0, c = [];
                            for (p = 0; p < a; p++) {
                                (d = new s).id = e.readUnsignedInt(),
                                    d.index = p + 1,
                                    d.level = e.readUnsignedByte(),
                                    d.sex = e.readUnsignedByte(),
                                    d.expToNextLevel = e.readUnsignedInt(),
                                    d.temper = e.readUnsignedByte(),
                                    d.catchTime = e.readUnsignedInt(),
                                    d.mapId = e.readUnsignedShort(),
                                    d.saveTime = e.readUnsignedInt(),
                                    d.intimate = e.readUnsignedShort(),
                                    d.maxHP = e.readUnsignedShort(),
                                    c = [];
                                for (var u = 0; u < 6; u++)
                                    c.push(e.readUnsignedShort());
                                for (u = 0; u < 12; u++)
                                    e.readUnsignedByte();
                                var S;
                                for (d.PA = c[0],
                                         d.PD = c[1],
                                         d.MA = c[2],
                                         d.MD = c[3],
                                         d.SP = c[4],
                                         d.HP = c[5],
                                         d.des = t.spiritProxy.select(d.id),
                                         n = e.readUnsignedShort(),
                                         l = 0; l < n; l++)
                                    (S = new o).id = e.readUnsignedShort(),
                                        S.PP = e.readUnsignedByte(),
                                        S.isHeredity = e.readUnsignedByte(),
                                        S.index = l + 1,
                                        S.des = t.skillProxy.select(S.id),
                                        d.skills.push(S);
                                for (l = 0; l < 8; l++)
                                    e.readUnsignedByte();
                                this.vo.spirits.push(d)
                            }
                        }
                        ,
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
