System.register("chunks:///_virtual/FightResultP.ts", ["cc", "./NewSpiritInfo.ts", "./SpiritProperties.ts", "./CombatResConvert.ts", "./CombatResType.ts", "./AttackAffect.ts", "./AttackResInfo.ts", "./BuffAffect.ts", "./CombatResultInfo.ts", "./ImmunityInfo.ts", "./SerAttackResult.ts", "./CombatNetCmdsType.ts", "./PReadHelp.ts"], (function(e) {
        var t, r, s, i, n, a, d, o, p, f, u, h, y;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    r = e.NewSpiritInfo
                }
                , function(e) {
                    s = e.SpiritProperties
                }
                , function(e) {
                    i = e.CombatResConvert
                }
                , function(e) {
                    n = e.CombatResType
                }
                , function(e) {
                    a = e.AttackAffect
                }
                , function(e) {
                    d = e.AttackResInfo
                }
                , function(e) {
                    o = e.BuffAffect
                }
                , function(e) {
                    p = e.CombatResultInfo
                }
                , function(e) {
                    f = e.ImmunityInfo
                }
                , function(e) {
                    u = e.SerAttackResult
                }
                , function(e) {
                    h = e.CombatNetCmdsType
                }
                , function(e) {
                    y = e.PReadHelp
                }
            ],
            execute: function() {
                t._RF.push({}, "fb880iPhZJIILu/BdjBLhfu", "FightResultP", void 0);
                e("FightResultP", function() {
                    function e() {
                        this.serAttackRes = void 0
                    }
                    var t = e.prototype;
                    return t.readCombatResInfo = function(e) {
                        var t = new p;
                        t.canCombat = e.readUnsignedByte(),
                            t.finished = e.readUnsignedByte(),
                            n.IS_FINISHED = t.finished,
                            t.version = e.readUnsignedInt();
                        var i, a = e.readUnsignedShort(), d = 0, o = 0;
                        if (t.spiritPropsVar = [],
                        a > 0)
                            for (d = 0; d < a; d++)
                                t.spiritPropsVar.push(y.readSpiritPropertysVar(e));
                        if (a = e.readUnsignedShort(),
                            t.obtainItems = [],
                        a > 0)
                            for (d = 0; d < a; d++)
                                t.obtainItems.push(y.readUserItem(e));
                        if (a = e.readUnsignedShort(),
                            t.spiritInfos = [],
                        a > 0)
                            for (d = 0; d < a; d++) {
                                for ((i = new r).propertyList = [],
                                         i.flairList = [],
                                         i.id = e.readUnsignedInt(),
                                         i.level = e.readUnsignedByte(),
                                         i.disposition = e.readUnsignedByte(),
                                         o = 0; o < 6; o++)
                                    i.propertyList.push(e.readUnsignedShort());
                                for (o = 0; o < 6; o++)
                                    i.flairList.push(e.readUnsignedShort());
                                t.spiritInfos.push(i)
                            }
                        return t.trainerExp = e.readUnsignedInt(),
                            t.honourPoint = e.readUnsignedInt(),
                            t.nextLevelTrainerExp = e.readUnsignedInt(),
                            t.meetCondition = e.readUnsignedByte(),
                            t.expAddBits = e.readUnsignedByte(),
                            this.serAttackRes.spirit0UID = e.readUnsignedInt(),
                            this.serAttackRes.spirit0BaseProperties = new s,
                            this.serAttackRes.spirit0BaseProperties.pa = e.readByte(),
                            this.serAttackRes.spirit0BaseProperties.pd = e.readByte(),
                            this.serAttackRes.spirit0BaseProperties.ma = e.readByte(),
                            this.serAttackRes.spirit0BaseProperties.md = e.readByte(),
                            this.serAttackRes.spirit0BaseProperties.ve = e.readByte(),
                            this.serAttackRes.spirit0BaseProperties.sp = e.readByte(),
                            this.serAttackRes.spirit0BaseProperties.dp = e.readByte(),
                            this.serAttackRes.spirit0BaseProperties.crit = e.readByte(),
                            this.serAttackRes.spirit0CaptureRatio = e.readUnsignedInt(),
                            this.serAttackRes.spirit1UID = e.readUnsignedInt(),
                            this.serAttackRes.spirit1BaseProperties = new s,
                            this.serAttackRes.spirit1BaseProperties.pa = e.readByte(),
                            this.serAttackRes.spirit1BaseProperties.pd = e.readByte(),
                            this.serAttackRes.spirit1BaseProperties.ma = e.readByte(),
                            this.serAttackRes.spirit1BaseProperties.md = e.readByte(),
                            this.serAttackRes.spirit1BaseProperties.ve = e.readByte(),
                            this.serAttackRes.spirit1BaseProperties.sp = e.readByte(),
                            this.serAttackRes.spirit1BaseProperties.dp = e.readByte(),
                            this.serAttackRes.spirit1BaseProperties.crit = e.readByte(),
                            this.serAttackRes.spirit1CaptureRatio = e.readUnsignedInt(),
                            t
                    }
                        ,
                        t.readBuffAffect = function(e) {
                            var t = new o;
                            return t.id = e.readUnsignedInt(),
                                t.type = e.readUnsignedByte(),
                                t.index = e.readUnsignedByte(),
                                t.buffId = e.readUnsignedByte(),
                                t.hpVar = y.readHPVar(e),
                                t.proVars = y.readSpiritProperties(e),
                                t.isremove = e.readUnsignedByte(),
                                t.isOtherPro = Boolean(e.readUnsignedByte()),
                            t.isOtherPro && (t.otherId = e.readUnsignedInt(),
                                t.otherType = e.readUnsignedByte(),
                                t.otherIndex = e.readUnsignedByte(),
                                t.otherBuffId = e.readUnsignedByte(),
                                t.otherHpVar = y.readHPVar(e),
                                t.otherProVars = y.readSpiritProperties(e)),
                                t
                        }
                        ,
                        t.readAttackAffect = function(e) {
                            var t = new a;
                            t.id = e.readUnsignedInt(),
                                t.type = e.readUnsignedByte(),
                                t.index = e.readUnsignedByte(),
                                t.isPP = 1 == e.readUnsignedByte(),
                                t.ppVar = [];
                            for (var r = 0; r < 4; r++)
                                t.ppVar.push(e.readUnsignedByte());
                            t.hpVar = y.readHPVar(e),
                                t.proVars = y.readSpiritProperties(e);
                            var s, n = 1 == e.readUnsignedByte();
                            n && (t.allSpiritsHp = []),
                                t.allSpiritsHp = [];
                            for (var d = 0; d < 6; d++) {
                                var o = e.readUnsignedShort();
                                n && (t.allSpiritsHp[t.allSpiritsHp.length] = o)
                            }
                            if (t.restrainType = e.readByte(),
                                t.immunityNum = e.readUnsignedShort(),
                            t.immunityNum > 0)
                                for (t.immunityVars = [],
                                         r = 0; r < t.immunityNum; r++)
                                    (s = new f).immunityType = e.readUnsignedByte(),
                                        s.definiteId = e.readUnsignedByte(),
                                        s.typeId = i.addBidToEid(e.readUnsignedShort()),
                                        s.btName = y.sskillProxy.select(s.typeId).name,
                                        t.immunityVars.push(s);
                            if (t.buffNum = e.readUnsignedShort(),
                            t.buffNum > 0) {
                                t.buffVars = [];
                                for (var p = 0; p < t.buffNum; p++)
                                    t.buffVars.push(y.readBuffInfo(e))
                            }
                            return t
                        }
                        ,
                        t.readAttackResInfo = function(e) {
                            var t = new d;
                            t.offenseID = e.readUnsignedInt(),
                                t.offenseType = e.readUnsignedByte(),
                                t.offenseIndex = e.readUnsignedByte(),
                                t.defenseID = e.readUnsignedInt(),
                                t.defenseType = e.readUnsignedByte(),
                                t.defenseIndex = e.readUnsignedByte(),
                                t.skillType = e.readUnsignedByte(),
                                t.skillID = e.readUnsignedInt(),
                                t.superformType = e.readUnsignedByte(),
                                t.weather = e.readUnsignedByte(),
                                t.skillBgFlag = e.readUnsignedByte(),
                                t.skillDec = y.sskillProxy.select(t.skillID),
                                t.isHurt = 1 == e.readUnsignedByte(),
                                t.isShaut = 1 == e.readUnsignedByte(),
                                t.isMiss = 1 == e.readUnsignedByte();
                            var r = e.readUnsignedInt();
                            t.myProxy = 65535 & r,
                                t.otherProxy = r >> 16 & 65535;
                            var s = e.readUnsignedShort();
                            t.myDetreat = 255 & s,
                                t.otherDetreat = s >> 8 & 255;
                            var i = e.readUnsignedShort();
                            t.myIntensify = 255 & i,
                                t.otherIntensify = i >> 8 & 255;
                            var n = e.readUnsignedInt();
                            t.myImbuff = 65535 & n,
                                t.otherImbuff = n >> 16 & 65535;
                            var a = e.readUnsignedInt();
                            t.myImdebuff = 1 & a,
                                t.otherImdebuff = a >> 16 & 1,
                                t.myusePP = a >> 1 & 1,
                                t.otherusePP = a >> 17 & 1,
                                t.myImexpel = a >> 2 & 1,
                                t.otherImexpel = a >> 18 & 1,
                                t.mySPState = [],
                                t.mySPState.push(a >> 3 & 3),
                                t.mySPState.push(a >> 5 & 3),
                                t.mySPState.push(a >> 7 & 3),
                                t.mySPState.push(a >> 9 & 3),
                                t.mySPState.push(a >> 11 & 3),
                                t.mySPState.push(a >> 13 & 3),
                                t.otherSPState = [],
                                t.otherSPState.push(a >> 19 & 3),
                                t.otherSPState.push(a >> 21 & 3),
                                t.otherSPState.push(a >> 23 & 3),
                                t.otherSPState.push(a >> 25 & 3),
                                t.otherSPState.push(a >> 27 & 3),
                                t.otherSPState.push(a >> 29 & 3),
                                CONFIG.DEBUG,
                                console.log("[FightResultP] 分析出招 功击方:" + t.offenseID + " 防守方:" + t.defenseID);
                            var o = e.readUnsignedShort();
                            if (o > 0) {
                                t.attackAffects = [];
                                for (var p = 0; p < o; p++)
                                    t.attackAffects.push(this.readAttackAffect(e))
                            }
                            return t
                        }
                        ,
                        t.decodeByTag = function(e) {
                            switch (e.readUnsignedByte()) {
                                case 1:
                                    this.serAttackRes.attackList.push(this.readAttackResInfo(e)),
                                        this.decodeByTag(e);
                                    break;
                                case 2:
                                    this.serAttackRes.attackList.push(this.readBuffAffect(e)),
                                        this.decodeByTag(e);
                                    break;
                                case 3:
                                    this.serAttackRes.combatResInfo = this.readCombatResInfo(e)
                            }
                        }
                        ,
                        t.decode = function(e) {
                            var t = e.body;
                            return this.serAttackRes = new u,
                                this.serAttackRes.round = t.readUnsignedInt(),
                                this.decodeByTag(t),
                                this.serAttackRes
                        }
                        ,
                        t.encode = function(e, t) {
                            return null
                        }
                        ,
                        t.getADFType = function() {
                            return h.T_RES_FIGHT
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
