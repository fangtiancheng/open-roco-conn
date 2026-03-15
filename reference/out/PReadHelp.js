System.register("chunks:///_virtual/PReadHelp.ts", ["cc", "./SpiritInfoEx.ts", "./BuffInfo.ts", "./HPVar.ts", "./SpiritPropertysVar.ts", "./Constants.ts", "./global.ts", "./SpiritEquipmentInfo.ts", "./SpiritProperties.ts", "./SpiritSkillInfo.ts", "./UserItem.ts"], (function(e) {
        var r, n, i, t, d, s, a, o, p, f, S;
        return {
            setters: [function(e) {
                r = e.cclegacy
            }
                , function(e) {
                    n = e.SpiritInfoEx
                }
                , function(e) {
                    i = e.BuffInfo
                }
                , function(e) {
                    t = e.HPVar
                }
                , function(e) {
                    d = e.SpiritPropertysVar
                }
                , function(e) {
                    s = e.Constants
                }
                , function(e) {
                    a = e.__global
                }
                , function(e) {
                    o = e.SpiritEquipmentInfo
                }
                , function(e) {
                    p = e.SpiritProperties
                }
                , function(e) {
                    f = e.SpiritSkillInfo
                }
                , function(e) {
                    S = e.UserItem
                }
            ],
            execute: function() {
                r._RF.push({}, "1f89fNjdjZNcYe/eGNw1e3P", "PReadHelp", void 0);
                var u = e("PReadHelp", function() {
                    function e() {}
                    return e.readUserItem = function(e) {
                        var r = new S
                            , n = e.readUnsignedInt();
                        return r.id = n,
                            r.count = e.readUnsignedShort(),
                            r.itemDes = this.itemProxy.select(n),
                            r
                    }
                        ,
                        e.readSpiritSkillInfo = function(e) {
                            var r = new f
                                , n = e.readUnsignedShort();
                            return r.id = n,
                                r.ppLeft = e.readUnsignedByte(),
                                r.isHeredity = e.readUnsignedByte(),
                                r.skillDes = this.sskillProxy.select(n),
                                r
                        }
                        ,
                        e.readSpiritInfo = function(e, r, i) {
                            void 0 === i && (i = !1);
                            var t = new n;
                            t.index = r + 1;
                            var d = e.readUnsignedInt();
                            t.id = d,
                                t.level = e.readUnsignedByte(),
                                t.sex = e.readUnsignedByte(),
                                t.curHP = e.readUnsignedShort(),
                                t.maxHP = e.readUnsignedShort();
                            var p = e.readUnsignedShort();
                            t.closeness = 127 & p,
                                t.affiliation = p >> 7 & 7;
                            var f, S = e.readUnsignedShort();
                            if (S > 0) {
                                t.skills = [];
                                for (var u = 0; u < S; u++)
                                    t.skills.push(this.readSpiritSkillInfo(e))
                            }
                            t.spiritDes = this.spiritProxy.select(d),
                                t.equips = [];
                            a.SysAPI.getGDataAPI().getDataProxy(s.SEQUIP_DES_DATA);
                            if (i) {
                                var l = 0;
                                for (l = 0; l < 6; l++)
                                    if (l < 3)
                                        (f = new o).serverID = e.readUnsignedInt(),
                                            t.equips.push(f);
                                    else {
                                        var g = e.readUnsignedInt();
                                        t.equips[l - 3].baseAttr = 255 & g,
                                            t.equips[l - 3].baseValue = g >> 8 & 255,
                                            t.equips[l - 3].specialAttr = g >> 16 & 255,
                                            t.equips[l - 3].specialValue = g >> 24 & 255
                                    }
                            }
                            return t
                        }
                        ,
                        e.readSpiritProperties = function(e) {
                            var r = new p;
                            return r.pa = e.readShort(),
                                r.pd = e.readShort(),
                                r.ma = e.readShort(),
                                r.md = e.readShort(),
                                r.ve = e.readShort(),
                                r.sp = e.readShort(),
                                r.dp = e.readShort(),
                                r.crit = e.readShort(),
                                r
                        }
                        ,
                        e.readHPVar = function(e) {
                            var r = new t;
                            return r.hitTimes = e.readUnsignedByte(),
                                r.hpV = e.readShort(),
                                r.hpLeft = e.readUnsignedShort(),
                                r
                        }
                        ,
                        e.readBuffInfo = function(e) {
                            var r = new i;
                            return r.id = e.readUnsignedByte(),
                                r.buffType = e.readUnsignedByte(),
                                r.cause = e.readUnsignedByte(),
                                console.info("PReadHelp==readBuffInfo==id==" + r.id + "==buffType" + r.buffType + "==cause==" + r.cause),
                                r
                        }
                        ,
                        e.readSpiritPropertysVar = function(r) {
                            var n = new d;
                            n.index = r.readUnsignedByte(),
                                n.exp = r.readUnsignedInt(),
                                n.dLevel = r.readUnsignedByte(),
                                n.cLevel = r.readUnsignedByte(),
                                n.nextExp = r.readUnsignedInt(),
                                n.deffort = r.readUnsignedShort(),
                                n.pa = r.readUnsignedShort(),
                                n.dpa = r.readUnsignedShort(),
                                n.pd = r.readUnsignedShort(),
                                n.dpd = r.readUnsignedShort(),
                                n.ma = r.readUnsignedShort(),
                                n.dma = r.readUnsignedShort(),
                                n.md = r.readUnsignedShort(),
                                n.dmd = r.readUnsignedShort(),
                                n.ve = r.readUnsignedShort(),
                                n.dve = r.readUnsignedShort(),
                                n.sp = r.readUnsignedShort(),
                                n.dsp = r.readUnsignedShort(),
                                n.dp = r.readUnsignedShort(),
                                n.ddp = r.readUnsignedShort();
                            var i = 0
                                , t = 0;
                            for (i = 4,
                                     n.currentSkills = [],
                                     t = 0; t < i; t++)
                                n.currentSkills.push(e.readSpiritSkillInfo(r));
                            if ((i = r.readUnsignedShort()) > 0)
                                for (n.newSKills = [],
                                         t = 0; t < i; t++)
                                    n.newSKills.push(e.readSpiritSkillInfo(r));
                            return n.evolveSpiritId = r.readUnsignedShort(),
                                n
                        }
                        ,
                        e
                }());
                u.itemProxy = void 0,
                    u.sskillProxy = void 0,
                    u.spiritProxy = void 0,
                    r._RF.pop()
            }
        }
    }
));
