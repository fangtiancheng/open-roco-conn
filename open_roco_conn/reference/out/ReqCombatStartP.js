System.register("chunks:///_virtual/ReqCombatStartP.ts", ["cc", "./Constants.ts", "./DEFINE.ts", "./global.ts", "./ObjCombatInfo.ts", "./SpiritEquipmentInfo.ts", "./CombatResType.ts", "./SpiritInfoEx.ts", "./CombatData.ts", "./CombatDefault.ts", "./CombatNetCmdsType.ts", "./PReadHelp.ts", "./ProtocolHelper.ts", "./AngelSysEvent.ts", "./SysEventDes.ts"], (function(t) {
        var n, e, i, a, r, o, s, d, f, p, m, u, c, I, S;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.Constants
                }
                , function(t) {
                    i = t.DEFINE
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    r = t.ObjCombatInfo
                }
                , function(t) {
                    o = t.SpiritEquipmentInfo
                }
                , function(t) {
                    s = t.CombatResType
                }
                , function(t) {
                    d = t.SpiritInfoEx
                }
                , function(t) {
                    f = t.CombatData
                }
                , function(t) {
                    p = t.CombatDefault
                }
                , function(t) {
                    m = t.CombatNetCmdsType
                }
                , function(t) {
                    u = t.PReadHelp
                }
                , function(t) {
                    c = t.ProtocolHelper
                }
                , function(t) {
                    I = t.AngelSysEvent
                }
                , function(t) {
                    S = t.SysEventDes
                }
            ],
            execute: function() {
                n._RF.push({}, "14279UN/eFFvoKDALWVANVk", "ReqCombatStartP", void 0);
                t("ReqCombatStartP", function() {
                    function t() {}
                    var n = t.prototype;
                    return n.readObjCombatInfo = function(t) {
                        var n = new r;
                        n.type = t.readUnsignedByte(),
                            n.id = t.readUnsignedInt(),
                            n.nickName = i.ReadString(t),
                            n.modeData = t.readUnsignedByte(),
                            n.cIndex = 7 & n.modeData;
                        var e = t.readUnsignedShort();
                        n.spirits = [];
                        for (var a = 0; a < e; a++)
                            n.spirits.push(u.readSpiritInfo(t, a, !0));
                        return n.guardianPetEnergy = t.readUnsignedShort(),
                            n.guardianPetAttack = t.readUnsignedShort(),
                            n.guardianPetDefend = t.readUnsignedShort(),
                            n.guardianPetMA = t.readUnsignedShort(),
                            n.guardianPetMD = t.readUnsignedShort(),
                            n
                    }
                        ,
                        n.readSpiritTalents = function(t, n) {
                            for (var e = 0; e < 6; e++) {
                                var i = t.readUnsignedShort()
                                    , a = t.readUnsignedShort();
                                n[e]instanceof d && (n[e].talentType = i,
                                    n[e].talentLevel = a)
                            }
                        }
                        ,
                        n.readSpiritSkin = function(t, n) {
                            for (var e = 0; e < 6; e++) {
                                var i = t.readUnsignedShort();
                                n[e]instanceof d && (n[e].skinID = i > 0 ? 1e5 + 10 * n[e].id + (i - 1) : 0)
                            }
                        }
                        ,
                        n.readNewEquipment = function(t, n, i, r) {
                            for (var s = 0; s < 6; s++) {
                                var f = t.readUnsignedShort();
                                if (n[s]instanceof d && f > 0) {
                                    var p = a.SysAPI.getGDataAPI().getDataProxy(e.SEQUIP_DES_DATA).select(r, i)
                                        , m = new o;
                                    m.des = p,
                                        m.quality = 5,
                                        m.id = i,
                                        m.type = r,
                                        n[s].equips[r] = m
                                }
                            }
                        }
                        ,
                        n.decode = function(t) {
                            var n = t.body
                                , e = c.ReadCode(n)
                                , i = new f;
                            i.code = e,
                            e.isError() || (i.combatType = n.readUnsignedByte(),
                                i.canCombat = n.readUnsignedByte(),
                                i.myInfo = this.readObjCombatInfo(n),
                                i.combatSPType = 1 + (i.myInfo.modeData >> 3 & 3),
                                i.combatEFType = 1 + (i.myInfo.modeData >> 5 & 3),
                                i.combatSPMsgType = 1 + (i.myInfo.modeData >> 7 & 1),
                                i.rivalInfo = this.readObjCombatInfo(n),
                            3 != i.rivalInfo.type && 9 != i.rivalInfo.type && 17 != i.rivalInfo.type && 21 != i.rivalInfo.type || (i.rivalInfo.id = i.rivalInfo.id ^ i.myInfo.id,
                                i.rivalInfo.id = i.rivalInfo.id >>> 0),
                                this.readSpiritTalents(n, i.myInfo.spirits),
                                this.readSpiritTalents(n, i.rivalInfo.spirits),
                                this.readSpiritSkin(n, i.myInfo.spirits),
                                this.readSpiritSkin(n, i.rivalInfo.spirits),
                                this.readNewEquipment(n, i.myInfo.spirits, 10002, 0),
                                this.readNewEquipment(n, i.rivalInfo.spirits, 10002, 0),
                                this.readNewEquipment(n, i.myInfo.spirits, 10003, 1),
                                this.readNewEquipment(n, i.rivalInfo.spirits, 10003, 1),
                                this.readNewEquipment(n, i.myInfo.spirits, 10004, 1),
                                this.readNewEquipment(n, i.rivalInfo.spirits, 10004, 1),
                                this.readNewEquipment(n, i.myInfo.spirits, 10005, 2),
                                this.readNewEquipment(n, i.rivalInfo.spirits, 10005, 2),
                                i.myCurSpirit = i.myInfo.spirits[i.myInfo.cIndex - 1],
                                i.rivalCurSpirit = i.rivalInfo.spirits[i.rivalInfo.cIndex - 1],
                                s.BAR_CAN_COMBAT = i.canCombat,
                                console.info("reqCombatStartP==BAR_CAN_COMBAT==" + i.canCombat),
                                s.IS_CATCH = Boolean(p.readNumBit(i.canCombat, 1)),
                                console.info("reqCombatStartP==IS_CATCH==" + s.IS_CATCH));
                            var r = a.GEventAPI.angelEventDispatcher
                                , o = new I(I.ON_SYS_EVENT)
                                , d = new S;
                            return d.type = S.COMBAT_START,
                                d.data = i,
                                o.data = d,
                                r.dispatchEvent(o),
                                i
                        }
                        ,
                        n.encode = function(t, n) {
                            void 0 === n && (n = -1);
                            var e = c.CreateADF(n);
                            return e.body = t,
                                e
                        }
                        ,
                        n.getADFType = function() {
                            return m.T_REQ_START
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
