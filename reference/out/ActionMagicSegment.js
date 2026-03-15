System.register("chunks:///_virtual/ActionMagicSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./BuildLogHelper.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, s, i, n, h, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    i = t.EventDispatcher
                }
                , function(t) {
                    n = t.default
                }
                , function(t) {
                    h = t.VideoEvent
                }
                , function(t) {
                    a = t.FightData
                }
            ],
            execute: function() {
                s._RF.push({}, "154ab6jDtlHU4QZxGjP4i4U", "ActionMagicSegment", void 0);
                t("ActionMagicSegment", function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this).effectMap = new Map,
                            e.aPet = void 0,
                            e.bPet = void 0,
                            e.stagemc = void 0,
                            e.effect1 = void 0,
                            e.screen = void 0,
                            e.spiritUILeft = void 0,
                            e.spiritUIRight = void 0,
                            e.effectnm = 0,
                            e.dataObject = void 0,
                            e.offenseID = 0,
                            e.offenseIndex = 0,
                            e.defenseID = 0,
                            e.defenseIndex = 0,
                            e.skillInfo = void 0,
                            e.isHurt = void 0,
                            e.isShaut = void 0,
                            e.isMiss = void 0,
                            e.defenseHPV = void 0,
                            e.offenseHPV = void 0,
                            e.shauted = !1,
                            e.hittime = 0,
                            e.offenseHitTimes = 0,
                            e.defenseHitTimes = 0,
                            e.restrainId = 0,
                            e.immunityInfoArray = new Array,
                            e.isOnlyHit = void 0,
                            e.offenseIsHpvar = !1,
                            e.defenseIsHpvar = !1,
                            e.ishited = !1,
                            e.whereOffense = 0,
                            e.whereDefense = 0,
                            e.canceled = !1,
                            e.needEvent = new Array,
                            e.hasEvent = new Array,
                            e.effect1ed = !1,
                            e.aPeted = !1,
                            e.bPeted = !1,
                            console.log("Segment初始化=>>"),
                            console.log("ActionMagicSegment"),
                            e
                    }
                    e(s, t);
                    var i = s.prototype;
                    return i.ready = function() {
                        CONFIG.DEBUG,
                            console.log("===============远程打击============="),
                            this.offenseID = this.dataObject.offenseID,
                            this.offenseIndex = this.dataObject.offenseIndex,
                            this.defenseID = this.dataObject.defenseID,
                            this.defenseIndex = this.dataObject.defenseIndex,
                            this.skillInfo = this.dataObject.skillDes,
                            this.isHurt = this.dataObject.isHurt,
                            this.isShaut = this.dataObject.isShaut,
                            this.isMiss = this.dataObject.isMiss,
                            this.isOnlyHit = this.dataObject.isOnlyHit,
                            this.restrainId = this.dataObject.restrainId,
                            this.immunityInfoArray = this.dataObject.immunityInfoArray,
                        null != this.dataObject.defenseHPV && (0 == this.dataObject.defenseHPV.hitTimes && 0 == this.dataObject.defenseHPV.hpV && 0 == this.dataObject.defenseHPV.hpLeft || (this.defenseHPV = this.dataObject.defenseHPV,
                            this.hittime = this.dataObject.defenseHPV.hitTimes,
                            this.defenseIsHpvar = !0)),
                        null != this.dataObject.offenseHPV && (0 == this.dataObject.offenseHPV.hitTimes && 0 == this.dataObject.offenseHPV.hpV && 0 == this.dataObject.offenseHPV.hpLeft || (this.offenseHPV = this.dataObject.offenseHPV,
                            this.offenseIsHpvar = !0)),
                            this.aPet = this.screen.getVSpirit(this.offenseID),
                            this.aPeted = !0,
                            this.whereOffense = this.aPet.getPosType(),
                            this.bPet = this.screen.getVSpirit(this.defenseID),
                            this.bPeted = !0,
                            this.whereDefense = this.bPet.getPosType(),
                            this.screen.bringVSpiritToFront(this.aPet),
                            CONFIG.DEBUG,
                            console.log("[Angle]攻击方：" + this.offenseID),
                            console.log("[Angle]攻击方位置：" + this.whereOffense + "  --0表示左,--1表示右"),
                            console.log("[Angle]防守方：" + this.defenseID),
                            console.log("[Angle]防守方位置：" + this.whereDefense + "  --0表示左,--1表示右"),
                            console.log("[Angle]攻击方offenseHPV：" + this.dataObject.offenseHPV),
                            console.log("[Angle]防守方defenseHPV：" + this.dataObject.defenseHPV),
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense),
                            this.spiritUIRight = this.screen.getSpiritUI(this.whereDefense),
                        this.dataObject.isPlayEffect && (this.effect1 = this.screen.createVEffect(this.skillInfo.id, this.whereOffense),
                            this.effect1ed = !0)
                    }
                        ,
                        i.setData = function(t) {
                            this.dataObject = t
                        }
                        ,
                        i.setScreen = function(t) {
                            this.screen = t,
                                this.stagemc = this.screen.getVideoStage()
                        }
                        ,
                        i.start = function() {
                            if (console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                            4 == this.skillInfo.damageType && this.screen.createSuperSkillBg(this.skillInfo.id, this.whereOffense),
                                console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" + this.isOnlyHit),
                            0 == this.isOnlyHit && (this.dataObject.isPlayEffect ? (this.effect1.addActionListener(a.ESING, this.getSingEnd, this),
                                this.needEvent.push(a.ESING),
                                this.effect1.addActionListener(a.EMAGICHIT, this.getMagicHit, this),
                                this.effect1.addActionListener(a.EMAGICFOCUSEND, this.getMagicFocusEnd, this),
                                this.needEvent.push(a.EMAGICFOCUSEND),
                                this.effect1.addActionListener(a.EMAGICEND, this.getEMagicEnd, this),
                                this.needEvent.push(a.EMAGICEND),
                                this.bPet.idle(),
                                this.bPet.addActionListener(a.PUNDERATTACK, this.getHurtEnd, this),
                                this.bPet.addActionListener(a.PBEATDOWN, this.getHurtEnd, this),
                                this.bPet.addActionListener(a.PMISS, this.getHurtEnd, this),
                                this.bPet.addActionListener(a.PDEAD, this.getDead, this),
                                this.effectnm += 5,
                                this.dataObject.isPlaySPAction ? (this.aPet.magicStart(),
                                    this.aPet.addActionListener(a.PMAGICSTART, this.getMagicStart, this),
                                    this.needEvent.push(a.PMAGICSTART),
                                    this.aPet.addActionListener(a.PMAGICEND, this.getMagicEnd, this),
                                    this.needEvent.push(a.PMAGICEND)) : this.getMagicStart(null),
                                this.needEvent.push(a.PATTACKHIT + "或者" + a.PBEATDOWN + "或者" + a.PMISS + "或者" + a.PDEAD)) : (this.bPet.idle(),
                                this.bPet.addActionListener(a.PUNDERATTACK, this.getHurtEnd, this),
                                this.bPet.addActionListener(a.PBEATDOWN, this.getHurtEnd, this),
                                this.bPet.addActionListener(a.PMISS, this.getHurtEnd, this),
                                this.bPet.addActionListener(a.PDEAD, this.getDead, this),
                                this.dataObject.isPlaySPAction ? (this.aPet.magicStart(),
                                    this.aPet.addActionListener(a.PMAGICSTART, this.getMagicStart, this),
                                    this.needEvent.push(a.PMAGICSTART),
                                    this.aPet.addActionListener(a.PMAGICEND, this.getMagicEnd, this),
                                    this.needEvent.push(a.PMAGICEND)) : this.getMagicStart(null),
                                this.needEvent.push(a.PATTACKHIT + "或者" + a.PBEATDOWN + "或者" + a.PMISS + "或者" + a.PDEAD))),
                            1 == this.isOnlyHit) {
                                if (this.bPet.addActionListener(a.PUNDERATTACK, this.getHurtEndOnly, this),
                                    this.bPet.addActionListener(a.PBEATDOWN, this.getHurtEndOnly, this),
                                    this.bPet.addActionListener(a.PMISS, this.getHurtEndOnly, this),
                                    this.bPet.addActionListener(a.PDEAD, this.getHurtEndOnly, this),
                                    this.needEvent.push(a.PATTACKHIT + "或者" + a.PBEATDOWN + "或者" + a.PMISS + "或者" + a.PDEAD),
                                    this.defenseIsHpvar) {
                                    var t = this.dataObject.defenseHPV.hpLeft;
                                    this.spiritUIRight.setHP(t);
                                    var e = Math.floor(this.dataObject.defenseHPV.hpV);
                                    if (e < 0 && (this.dataObject.defenseHPV.hpLeft > 0 && (this.isShaut && (this.dataObject.isPlaySPAction ? this.bPet.beatDown() : this.bPet.underAttack(),
                                        this.createHPNumber(this.restrainId, e, 0, 1, this.whereDefense, this.isShaut)),
                                    this.isMiss && (this.bPet.miss(),
                                        this.screen.getEffectsLayer().createHPNumber("miss", 0, 3, this.whereDefense)),
                                    0 == this.isShaut && 0 == this.isMiss && (this.bPet.underAttack(),
                                        this.createHPNumber(this.restrainId, e, 0, 1, this.whereDefense, this.isShaut))),
                                    this.dataObject.defenseHPV.hpLeft <= 0 && (this.bPet.dead(),
                                        this.createHPNumber(this.restrainId, e, 0, 1, this.whereDefense, this.isShaut))),
                                    e > 0)
                                        return this.createHPNumber(this.restrainId, e, 0, 2, this.whereDefense, this.isShaut),
                                            this.getText3(),
                                            void this.dispatchEvent(new h(h.ON_SEG_END))
                                }
                                if (0 == this.defenseIsHpvar)
                                    return this.getText3(),
                                        void this.dispatchEvent(new h(h.ON_SEG_END))
                            }
                        }
                        ,
                        i.getHurtEndOnly = function(t) {
                            this.delEvent(a.PATTACKHIT + "或者" + a.PBEATDOWN + "或者" + a.PMISS + "或者" + a.PDEAD),
                            this.dataObject.defenseHPV.hpLeft > 0 && this.bPet.idle(),
                            this.dataObject.defenseHPV.hpLeft <= 0 && (this.bPet.stopNull(),
                                this.getText2()),
                                this.getText3(),
                                this.dispatchEvent(new h(h.ON_SEG_END))
                        }
                        ,
                        i.getMagicStart = function(t) {
                            var e = this;
                            if (this.dataObject.isPlaySPAction && this.delEvent(a.PMAGICSTART),
                                this.dataObject.isPlayEffect)
                                this.effect1.spell(),
                                    this.effectnm -= 1,
                                    this.allEnd();
                            else {
                                if (this.offenseID != this.defenseID && 1 == this.defenseIsHpvar) {
                                    var s = this.dataObject.defenseHPV.hpLeft;
                                    this.spiritUIRight.setHP(s);
                                    var i = Math.floor(this.dataObject.defenseHPV.hpV / this.dataObject.defenseHPV.hitTimes);
                                    i < 0 && this.createHPNumber(this.restrainId, i, 0, 1, this.whereDefense, this.isShaut),
                                    i > 0 && this.createHPNumber(this.restrainId, i, 0, 2, this.whereDefense, this.isShaut)
                                }
                                this.dataObject.isPlaySPAction ? this.aPet.magicEnd() : setTimeout((function() {
                                        e.getMagicEnd(null)
                                    }
                                ), 500)
                            }
                        }
                        ,
                        i.getSingEnd = function(t) {
                            this.effectMap.delete(a.ESING),
                                this.delEvent(a.ESING),
                            this.dataObject.isPlaySPAction && this.aPet.magicFocus(),
                                this.effectnm -= 1,
                                console.info("ActionMagicSegment=>>getSingEnd" + this.effectnm),
                                this.allEnd()
                        }
                        ,
                        i.getMagicFocusEnd = function(t) {
                            this.effectMap.delete(a.EMAGICFOCUSEND),
                                this.delEvent(a.EMAGICFOCUSEND),
                                this.dataObject.isPlaySPAction ? (this.aPet.magicEnd(),
                                    this.effectnm -= 1,
                                    this.allEnd()) : (this.effectnm -= 1,
                                    this.allEnd(),
                                    this.getMagicEnd(null)),
                                console.info("ActionMagicSegment=>>getMagicFocusEnd" + this.effectnm)
                        }
                        ,
                        i.getMagicHit = function(t) {
                            if (this.effectMap.delete(a.EMAGICHIT),
                                console.info("getMagicHit"),
                            this.offenseID != this.defenseID && (this.bPet.getIdle() && (this.isHurt ? (null != this.defenseHPV && (this.defenseHPV.hpLeft <= 0 ? (this.bPet.dead(),
                                this.effectnm += 1) : (this.isShaut && 0 == this.shauted && (this.dataObject.isPlaySPAction ? this.bPet.beatDown() : this.bPet.underAttack(),
                                this.effectnm += 1,
                                this.shauted = !0),
                            this.isMiss && (this.bPet.miss(),
                                this.effectnm += 1,
                                this.screen.getEffectsLayer().deleteAllNm(),
                                this.screen.getEffectsLayer().createHPNumber("miss", 0, 3, this.whereDefense)),
                            0 == this.isShaut && 0 == this.isMiss && (this.bPet.underAttack(),
                                this.effectnm += 1))),
                            null == this.defenseHPV && (this.isMiss ? (this.bPet.miss(),
                                this.effectnm += 1,
                                this.screen.getEffectsLayer().deleteAllNm(),
                                this.screen.getEffectsLayer().createHPNumber("miss", 0, 3, this.whereDefense)) : (this.bPet.underAttack(),
                                this.effectnm += 1))) : this.isMiss ? (this.bPet.miss(),
                                this.effectnm += 1,
                                this.screen.getEffectsLayer().deleteAllNm(),
                                this.screen.getEffectsLayer().createHPNumber("miss", 0, 3, this.whereDefense)) : (this.bPet.underAttack(),
                                this.effectnm += 1)),
                            1 == this.defenseIsHpvar && this.dataObject.defenseHPV.hitTimes > 0 && 0 == this.ishited)) {
                                this.screen.getEffectsLayer().deleteAllNm();
                                var e = Math.floor(this.dataObject.defenseHPV.hpV / this.dataObject.defenseHPV.hitTimes)
                                    , s = 0;
                                CONFIG.DEBUG,
                                    console.log("[Angle]攻击次数：" + this.dataObject.defenseHPV.hitTimes);
                                for (var i = 0; i < this.dataObject.defenseHPV.hitTimes; i++)
                                    e < 0 && this.createHPNumber(this.restrainId, e, s, 1, this.whereDefense, this.isShaut),
                                    e > 0 && this.createHPNumber(this.restrainId, e, s, 2, this.whereDefense, this.isShaut),
                                        s += 5;
                                this.ishited = !0
                            }
                        }
                        ,
                        i.createHPNumber = function(t, e, s, i, n, h) {
                            void 0 === h && (h = !1);
                            var a = "";
                            e > 0 && (a = "+"),
                            -3 == t && this.screen.getEffectsLayer().createHPNumber("抵抗" + a + e, s, i, n, h),
                            -2 == t && this.screen.getEffectsLayer().createHPNumber("抵抗" + a + e, s, i, n, h),
                            0 == t && this.screen.getEffectsLayer().createHPNumber("" + a + e, s, i, n, h),
                            2 == t && this.screen.getEffectsLayer().createHPNumber("克制" + a + e, s, i, n, h),
                            3 == t && this.screen.getEffectsLayer().createHPNumber("克制" + a + e, s, i, n, h)
                        }
                        ,
                        i.getEMagicEnd = function(t) {
                            if (this.effectMap.delete(a.EMAGICEND),
                                this.delEvent(a.EMAGICEND),
                                this.delEvent(a.EMAGICEND),
                            this.dataObject.isPlayEffect && this.effect1.stopNull(),
                            this.offenseID != this.defenseID && 1 == this.defenseIsHpvar) {
                                var e = this.dataObject.defenseHPV.hpLeft;
                                this.spiritUIRight.setHP(e)
                            }
                            this.effectnm -= 1,
                                console.info("ActionMagicSegment=>>getEMagicEnd" + this.effectnm),
                                this.allEnd()
                        }
                        ,
                        i.getMagicEnd = function(t) {
                            var e = this;
                            if (this.dataObject.isPlaySPAction && this.delEvent(a.PMAGICEND),
                                this.aPet.idle(),
                                this.effectnm -= 1,
                                console.info("ActionMagicSegment=>>getMagicEnd" + this.effectnm),
                                this.getText(),
                            null != this.defenseHPV && this.defenseHPV.hpLeft <= 0 && this.getText2(),
                            1 == this.offenseIsHpvar) {
                                this.screen.getEffectsLayer().deleteAllNm();
                                var s = Math.floor(this.dataObject.offenseHPV.hpV);
                                s < 0 && (this.screen.getEffectsLayer().createHPNumber("" + s, 0, 1, this.whereOffense),
                                this.dataObject.offenseHPV.hpLeft > 0 && (this.aPet.underAttack(),
                                    this.aPet.addActionListener(a.PUNDERATTACK, this.getHurtEnd2, this),
                                    this.needEvent.push(a.PUNDERATTACK),
                                    this.effectnm++),
                                this.dataObject.offenseHPV.hpLeft <= 0 && (this.aPet.addActionListener(a.PDEAD, this.getDead2, this),
                                    this.needEvent.push(a.PDEAD),
                                    this.aPet.dead(),
                                    this.effectnm++)),
                                s > 0 && this.screen.getEffectsLayer().createHPNumber("+" + s, 0, 2, this.whereOffense);
                                var i = this.dataObject.offenseHPV.hpLeft;
                                this.spiritUILeft.setHP(i)
                            }
                            this.allEnd(),
                                !this.dataObject || this.dataObject.isPlaySPAction || this.dataObject.isPlayEffect ? this.allEnd() : setTimeout((function() {
                                        e.allEnd()
                                    }
                                ), 500)
                        }
                        ,
                        i.getHurtEnd2 = function(t) {
                            this.aPet && (this.aPet.idle(),
                                this.aPet.removeActionListener(a.PUNDERATTACK, this.getHurtEnd2, this)),
                                this.delEvent(a.PUNDERATTACK),
                                this.effectnm -= 1,
                                console.info("ActionMagicSegment=>>getHurtEnd2" + this.effectnm),
                                this.allEnd()
                        }
                        ,
                        i.getDead2 = function(t) {
                            this.aPet.stopNull(),
                                this.aPet.removeActionListener(a.PDEAD, this.getDead2, this),
                                this.delEvent(a.PDEAD),
                                this.effectnm -= 1,
                                console.info("ActionMagicSegment=>>getDead2" + this.effectnm),
                                this.allEnd()
                        }
                        ,
                        i.getText = function() {
                            var t = "";
                            this.whereOffense == a.POS_LEFT && (t = "<color=#A9D367>【" + a.OffenseCurrentSprite + "】</color>使用了<color=#72C0F3>【" + this.skillInfo.name + "】</color>"),
                            this.whereOffense == a.POS_RIGHT && (t = "<color=#A37EF8>【" + a.DefenseCurrentSprite + "】</color>使用了<color=#72C0F3>【" + this.skillInfo.name + "】</color>"),
                            this.isMiss || this.isShaut || 0 != this.restrainId || (t += "！"),
                            this.isMiss && (t += "，可惜没有命中！"),
                            this.isShaut && 0 == this.restrainId && (t += "，暴击了！"),
                            this.isShaut || -2 != this.restrainId || (t += "，被抵抗了。"),
                            this.isShaut || -3 != this.restrainId || (t += "，被强力抵抗了！"),
                            this.isShaut || 2 != this.restrainId || (t += "，克制了对方！"),
                            this.isShaut || 3 != this.restrainId || (t += "，双重克制了对方！！"),
                            this.isShaut && -2 == this.restrainId && (t += "，暴击但被抵抗了。"),
                            this.isShaut && -3 == this.restrainId && (t += "，暴击但被强力抵抗了！"),
                            this.isShaut && 2 == this.restrainId && (t += "，暴击并克制了对方！！"),
                            this.isShaut && 3 == this.restrainId && (t += "，暴击并双重克制了对方！！！"),
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)
                        }
                        ,
                        i.getText2 = function() {
                            var t = "";
                            this.whereDefense == a.POS_LEFT && (t = "<color=#A9D367>【" + a.OffenseCurrentSprite + "】</color>战败了！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)),
                            this.whereDefense == a.POS_RIGHT && (t = "<color=#A37EF8>【" + a.DefenseCurrentSprite + "】</color>战败了！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t))
                        }
                        ,
                        i.getText3 = function() {
                            var t = 0;
                            if (null != this.immunityInfoArray)
                                for (t = 0; t < this.immunityInfoArray.length; t++) {
                                    var e = 0;
                                    this.screen.getEffectsLayer().createHPNumber(this.immunityInfoArray[t].btName + "免疫", e, 3, this.whereDefense),
                                        e += 6;
                                    var s = "";
                                    this.whereDefense == a.POS_LEFT && (s = "<color=#A9D367>【" + a.OffenseCurrentSprite + "】</color>对" + this.immunityInfoArray[t].btName + "免疫",
                                        this.screen.getCombatInfo().getTarget().htmlText += s,
                                        console.log("战斗日志=>>" + s)),
                                    this.whereDefense == a.POS_RIGHT && (s = "<color=#A37EF8>【" + a.DefenseCurrentSprite + "】</color>对" + this.immunityInfoArray[t].btName + "免疫",
                                        this.screen.getCombatInfo().getTarget().htmlText += s,
                                        console.log("战斗日志=>>" + s))
                                }
                        }
                        ,
                        i.getHurtEnd = function(t) {
                            this.delEvent(a.PATTACKHIT + "或者" + a.PBEATDOWN + "或者" + a.PMISS + "或者" + a.PDEAD),
                            this.offenseID != this.defenseID && (this.bPet.idle(),
                                this.effectnm -= 1,
                                console.info("ActionMagicSegment=>>getHurtEnd" + this.effectnm),
                                this.allEnd())
                        }
                        ,
                        i.getDead = function(t) {
                            this.delEvent(a.PATTACKHIT + "或者" + a.PBEATDOWN + "或者" + a.PMISS + "或者" + a.PDEAD),
                            this.offenseID != this.defenseID && (this.bPet.stopNull(),
                                this.effectnm -= 1,
                                console.info("ActionMagicSegment=>>getDead" + this.effectnm),
                                this.allEnd())
                        }
                        ,
                        i.allEnd = function() {
                            if (this.effectnm <= 0)
                                return this.getText3(),
                                    void this.dispatchEvent(new h(h.ON_SEG_END))
                        }
                        ,
                        i.cancel = function() {
                            this.aPeted && this.aPet.stopNull(),
                            this.bPeted && this.bPet.stopNull(),
                            this.effect1ed && this.effect1.stopNull(),
                                CONFIG.DEBUG,
                                console.log("[Angle]片段被cancel了！\n===已触发的事件：===");
                            for (var t = 0; t < this.hasEvent.length; t++)
                                console.log(this.hasEvent[t]);
                            console.log("===未触发的事件：===");
                            for (var e = 0; e < this.needEvent.length; e++)
                                console.log(this.needEvent[e]);
                            this.canceled = !0,
                            this.effectMap.size > 0 && n.IS_LOCAL
                        }
                        ,
                        i.delEvent = function(t) {
                            for (var e = 0; e < this.needEvent.length; e++)
                                if (this.needEvent[e] == t) {
                                    this.needEvent.slice(e, 1);
                                    break
                                }
                            this.hasEvent.push(t)
                        }
                        ,
                        i.dispose = function() {
                            console.info("ActionMagicSegment==dispose==" + this.isOnlyHit),
                                this.screen.getEffectsLayer().deleteAllEffect(),
                            1 == this.isOnlyHit && (this.bPet.removeActionListener(a.PUNDERATTACK, this.getHurtEndOnly, this),
                                this.bPet.removeActionListener(a.PBEATDOWN, this.getHurtEndOnly, this),
                                this.bPet.removeActionListener(a.PMISS, this.getHurtEndOnly, this),
                                this.bPet.removeActionListener(a.PDEAD, this.getHurtEndOnly, this)),
                            0 == this.isOnlyHit && (this.effect1 && (this.effect1.removeActionListener(a.ESING, this.getSingEnd, this),
                                this.effect1.removeActionListener(a.EMAGICHIT, this.getMagicHit, this),
                                this.effect1.removeActionListener(a.EMAGICFOCUSEND, this.getMagicFocusEnd, this),
                                this.effect1.removeActionListener(a.EMAGICEND, this.getEMagicEnd, this)),
                            this.aPet || n.IS_LOCAL,
                            this.bPet || n.IS_LOCAL,
                                this.aPet.removeActionListener(a.PMAGICSTART, this.getMagicStart, this),
                                this.aPet.removeActionListener(a.PMAGICEND, this.getMagicEnd, this),
                                this.bPet.removeActionListener(a.PUNDERATTACK, this.getHurtEnd, this),
                                this.bPet.removeActionListener(a.PBEATDOWN, this.getHurtEnd, this),
                                this.bPet.removeActionListener(a.PMISS, this.getHurtEnd, this),
                                this.bPet.removeActionListener(a.PDEAD, this.getDead, this)),
                            this.aPet && 1 == this.offenseIsHpvar && (this.dataObject.offenseHPV.hpLeft > 0 && this.aPet.idle(),
                            this.dataObject.offenseHPV.hpLeft <= 0 && this.aPet.stopNull()),
                                this.aPet = null,
                            this.bPet && 1 == this.defenseIsHpvar && (this.dataObject.defenseHPV.hpLeft > 0 && this.bPet.idle(),
                            this.dataObject.defenseHPV.hpLeft <= 0 && this.bPet.stopNull()),
                            this.effect1 && (this.effect1.stopNull(),
                                this.screen.removeVEffect(this.effect1)),
                                this.bPet = null,
                                this.stagemc = null,
                                this.effect1 = null,
                                this.screen = null,
                                this.spiritUILeft = null,
                                this.spiritUIRight = null,
                                this.immunityInfoArray = null,
                                this.dataObject = null,
                                this.skillInfo = null,
                                this.defenseHPV = null,
                                this.offenseHPV = null
                        }
                        ,
                        s
                }(i));
                s._RF.pop()
            }
        }
    }
));
