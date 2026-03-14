System.register("chunks:///_virtual/ActionHitSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./BuildLogHelper.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, s, i, h, n, f;
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
                    h = t.default
                }
                , function(t) {
                    n = t.VideoEvent
                }
                , function(t) {
                    f = t.FightData
                }
            ],
            execute: function() {
                s._RF.push({}, "9f2051lfOdKXZxIPoG0+ERn", "ActionHitSegment", void 0);
                t("ActionHitSegment", function(t) {
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
                            console.log("ActionHitSegment"),
                            e
                    }
                    e(s, t);
                    var i = s.prototype;
                    return i.ready = function() {
                        CONFIG.DEBUG,
                            console.log("===============近程打击============="),
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
                            CONFIG.DEBUG,
                            console.log("[Angle]攻击次数：" + this.hittime),
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
                            console.log("[Angle]防守方血量变化结构：" + this.dataObject.defenseHPV + "  --0表示左,--1表示右"),
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense),
                            this.spiritUIRight = this.screen.getSpiritUI(this.whereDefense)
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
                                console.log("++++++++++++++++++++++++++++++++++++++++++++++" + this.isOnlyHit),
                            0 == this.isOnlyHit && (this.dataObject.isPlayEffect ? (this.effect1 = this.screen.createVEffect(this.skillInfo.id, this.whereOffense),
                                this.effect1ed = !0,
                                this.effect1.addActionListener(f.EATTACKHIT, this.getHurt, this),
                                this.effect1.addActionListener(f.EATTACKEND, this.getEffectEnd, this),
                                this.needEvent.push(f.EATTACKEND),
                                this.bPet.idle(),
                                this.bPet.addActionListener(f.PUNDERATTACK, this.getHurtEnd, this),
                                this.bPet.addActionListener(f.PBEATDOWN, this.getHurtEnd, this),
                                this.bPet.addActionListener(f.PMISS, this.getHurtEnd, this),
                                this.bPet.addActionListener(f.PDEAD, this.getDead, this),
                                this.needEvent.push(f.PATTACKHIT + "或者" + f.PBEATDOWN + "或者" + f.PMISS + "或者" + f.PDEAD),
                                this.effectnm += 3,
                                this.dataObject.isPlaySPAction ? (this.aPet.attack(),
                                    this.aPet.addActionListener(f.PATTACKHIT, this.getHit, this),
                                    this.needEvent.push(f.PATTACKHIT),
                                    this.aPet.addActionListener(f.PATTACKEND, this.getHitEnd, this),
                                    this.needEvent.push(f.PATTACKEND)) : this.getHit(null)) : (this.bPet.idle(),
                                this.effectnm += 3,
                                this.dataObject.isPlaySPAction ? (this.aPet.attack(),
                                    this.aPet.addActionListener(f.PATTACKHIT, this.getHit, this),
                                    this.needEvent.push(f.PATTACKHIT),
                                    this.aPet.addActionListener(f.PATTACKEND, this.getHitEnd, this),
                                    this.needEvent.push(f.PATTACKEND)) : this.getHit(null),
                                this.bPet.addActionListener(f.PUNDERATTACK, this.getHurtEnd, this),
                                this.bPet.addActionListener(f.PBEATDOWN, this.getHurtEnd, this),
                                this.bPet.addActionListener(f.PMISS, this.getHurtEnd, this),
                                this.bPet.addActionListener(f.PDEAD, this.getDead, this),
                                this.needEvent.push(f.PATTACKHIT + "或者" + f.PBEATDOWN + "或者" + f.PMISS + "或者" + f.PDEAD))),
                            1 == this.isOnlyHit) {
                                if (this.bPet.addActionListener(f.PUNDERATTACK, this.getHurtEndOnly, this),
                                    this.bPet.addActionListener(f.PBEATDOWN, this.getHurtEndOnly, this),
                                    this.bPet.addActionListener(f.PMISS, this.getHurtEndOnly, this),
                                    this.bPet.addActionListener(f.PDEAD, this.getHurtEndOnly, this),
                                    this.needEvent.push(f.PATTACKHIT + "或者" + f.PBEATDOWN + "或者" + f.PMISS + "或者" + f.PDEAD),
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
                                            void this.dispatchEvent(new n(n.ON_SEG_END))
                                }
                                if (0 == this.defenseIsHpvar)
                                    return this.getText3(),
                                        void this.dispatchEvent(new n(n.ON_SEG_END))
                            }
                        }
                        ,
                        i.getHurtEndOnly = function(t) {
                            this.delEvent(f.PATTACKHIT + "或者" + f.PBEATDOWN + "或者" + f.PMISS + "或者" + f.PDEAD),
                            this.dataObject.defenseHPV.hpLeft > 0 && this.bPet.idle(),
                            this.dataObject.defenseHPV.hpLeft <= 0 && (this.bPet.stopNull(),
                                this.getText2()),
                                this.getText3(),
                                this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        i.getHit = function(t) {
                            if (this.dataObject.isPlaySPAction && this.delEvent(f.PATTACKHIT),
                                this.dataObject.isPlayEffect) {
                                if (this.effect1.spell(),
                                    this.effectnm -= 1,
                                this.effectnm <= 0)
                                    return this.getText3(),
                                        void this.dispatchEvent(new n(n.ON_SEG_END));
                                this.dataObject.isPlaySPAction || this.getHitEnd(null)
                            } else {
                                if (this.effectnm -= 1,
                                this.effectnm <= 0)
                                    return this.getText3(),
                                        void this.dispatchEvent(new n(n.ON_SEG_END));
                                this.getHurt(null)
                            }
                        }
                        ,
                        i.createHPNumber = function(t, e, s, i, h, n) {
                            void 0 === n && (n = !1);
                            var f = "";
                            e > 0 && (f = "+"),
                            -3 == t && this.screen.getEffectsLayer().createHPNumber("抵抗" + f + e, s, i, h, n),
                            -2 == t && this.screen.getEffectsLayer().createHPNumber("抵抗" + f + e, s, i, h, n),
                            0 == t && this.screen.getEffectsLayer().createHPNumber("" + f + e, s, i, h, n),
                            2 == t && this.screen.getEffectsLayer().createHPNumber("克制" + f + e, s, i, h, n),
                            3 == t && this.screen.getEffectsLayer().createHPNumber("克制" + f + e, s, i, h, n)
                        }
                        ,
                        i.getHitEnd = function(t) {
                            if (this.delEvent(f.PATTACKEND),
                                this.aPet.idle(),
                            this.dataObject.isPlayEffect && (this.dataObject.isPlaySPAction || this.offenseID != this.defenseID && this.bPet.idle()),
                                this.getText(),
                            null != this.defenseHPV && this.defenseHPV.hpLeft <= 0 && this.getText2(),
                            1 == this.offenseIsHpvar) {
                                this.screen.getEffectsLayer().deleteAllNm();
                                var e = Math.floor(this.dataObject.offenseHPV.hpV);
                                e < 0 && (this.screen.getEffectsLayer().createHPNumber("" + e, 0, 1, this.whereOffense),
                                this.dataObject.offenseHPV.hpLeft > 0 && (this.aPet.underAttack(),
                                    this.aPet.addActionListener(f.PUNDERATTACK, this.getHurtEnd2, this),
                                    this.effectnm++),
                                this.dataObject.offenseHPV.hpLeft <= 0 && (this.aPet.dead(),
                                    this.aPet.addActionListener(f.PDEAD, this.getDead2, this),
                                    this.effectnm++)),
                                e > 0 && this.screen.getEffectsLayer().createHPNumber("+" + e, 0, 2, this.whereOffense);
                                var s = this.dataObject.offenseHPV.hpLeft;
                                this.spiritUILeft.setHP(s)
                            }
                            if (this.effectnm -= 1,
                            this.effectnm <= 0)
                                return this.getText3(),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        i.getHurtEnd2 = function(t) {
                            if (this.aPet.idle(),
                                this.aPet.removeActionListener(f.PUNDERATTACK, this.getHurtEnd2, this),
                                this.delEvent(f.PUNDERATTACK),
                                this.effectnm -= 1,
                            this.effectnm <= 0)
                                return this.getText3(),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        i.getDead2 = function(t) {
                            if (this.aPet.stopNull(),
                                this.aPet.removeActionListener(f.PDEAD, this.getDead2, this),
                                this.delEvent(f.PUNDERATTACK),
                                this.effectnm -= 1,
                            this.effectnm <= 0)
                                return this.getText3(),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        i.getHurt = function(t) {
                            if (this.effectMap.delete(f.EATTACKHIT),
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
                            1 == this.defenseIsHpvar && this.hittime > 0 && 0 == this.ishited)) {
                                this.screen.getEffectsLayer().deleteAllNm();
                                for (var e = Math.floor(this.dataObject.defenseHPV.hpV / this.hittime), s = 0, i = 0; i < this.hittime; i++)
                                    e < 0 && this.createHPNumber(this.restrainId, e, s, 1, this.whereDefense, this.isShaut),
                                    e > 0 && this.createHPNumber(this.restrainId, e, s, 2, this.whereDefense, this.isShaut),
                                        s += 6;
                                this.ishited = !0
                            }
                            this.dataObject.isPlayEffect || this.getEffectEnd(null)
                        }
                        ,
                        i.getText = function() {
                            var t = "";
                            this.whereOffense == f.POS_LEFT && (t = "<color=#A9D367>【" + f.OffenseCurrentSprite + "】</color>使用了<color=#72C0F3>【" + this.skillInfo.name + "】</color>"),
                            this.whereOffense == f.POS_RIGHT && (t = "<color=#A37EF8>【" + f.DefenseCurrentSprite + "】</color>使用了<color=#72C0F3>【" + this.skillInfo.name + "】</color>"),
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
                            this.whereDefense == f.POS_LEFT && (t = "<color=#A9D367>【" + f.OffenseCurrentSprite + "】</color>战败了！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)),
                            this.whereDefense == f.POS_RIGHT && (t = "<color=#A37EF8>【" + f.DefenseCurrentSprite + "】</color>战败了！",
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
                                    this.whereDefense == f.POS_LEFT && (s = "<color=#A9D367>【" + f.OffenseCurrentSprite + "】</color>对" + this.immunityInfoArray[t].btName + "免疫",
                                        this.screen.getCombatInfo().getTarget().htmlText += s,
                                        console.log("战斗日志=>>" + s)),
                                    this.whereDefense == f.POS_RIGHT && (s = "<color=#A37EF8>【" + f.DefenseCurrentSprite + "】</color>对" + this.immunityInfoArray[t].btName + "免疫",
                                        this.screen.getCombatInfo().getTarget().htmlText += s,
                                        console.log("战斗日志=>>" + s))
                                }
                        }
                        ,
                        i.getEffectEnd = function(t) {
                            var e = this;
                            if (this.dataObject.isPlayEffect && (this.delEvent(f.EATTACKEND),
                                this.effect1.stopNull()),
                            this.offenseID != this.defenseID && 1 == this.defenseIsHpvar) {
                                var s = this.dataObject.defenseHPV.hpLeft;
                                this.spiritUIRight.setHP(s)
                            }
                            if (this.effectnm -= 1,
                            this.effectnm <= 0)
                                return this.getText3(),
                                    void this.dispatchEvent(new n(n.ON_SEG_END));
                            this.dataObject.isPlaySPAction || this.dataObject.isPlayEffect || setTimeout((function() {
                                    e.getHitEnd(null)
                                }
                            ), 300)
                        }
                        ,
                        i.getHurtEnd = function(t) {
                            if (this.delEvent(f.PATTACKHIT + "或者" + f.PBEATDOWN + "或者" + f.PMISS + "或者" + f.PDEAD),
                            this.offenseID != this.defenseID && (this.bPet.idle(),
                                this.effectnm -= 1,
                            this.effectnm <= 0))
                                return this.getText3(),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        i.getDead = function(t) {
                            if (this.delEvent(f.PATTACKHIT + "或者" + f.PBEATDOWN + "或者" + f.PMISS + "或者" + f.PDEAD),
                            this.offenseID != this.defenseID && (this.bPet.stopNull(),
                                this.effectnm -= 1,
                            this.effectnm <= 0))
                                return this.getText3(),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
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
                            this.effectMap.size > 0 && h.IS_LOCAL
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
                            this.screen.getEffectsLayer().deleteAllEffect(),
                            1 == this.isOnlyHit && (this.bPet.removeActionListener(f.PUNDERATTACK, this.getHurtEndOnly, this),
                                this.bPet.removeActionListener(f.PBEATDOWN, this.getHurtEndOnly, this),
                                this.bPet.removeActionListener(f.PMISS, this.getHurtEndOnly, this),
                                this.bPet.removeActionListener(f.PDEAD, this.getHurtEndOnly, this)),
                            0 == this.isOnlyHit && (this.aPet.removeActionListener(f.PATTACKHIT, this.getHit, this),
                                this.aPet.removeActionListener(f.PATTACKEND, this.getHitEnd, this),
                            this.effect1 && (this.effect1.removeActionListener(f.EATTACKHIT, this.getHurt, this),
                                this.effect1.removeActionListener(f.EATTACKEND, this.getEffectEnd, this)),
                                this.bPet.removeActionListener(f.PUNDERATTACK, this.getHurtEnd, this),
                                this.bPet.removeActionListener(f.PBEATDOWN, this.getHurtEnd, this),
                                this.bPet.removeActionListener(f.PMISS, this.getHurtEnd, this),
                                this.bPet.removeActionListener(f.PDEAD, this.getDead, this)),
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
