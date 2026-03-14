System.register("chunks:///_virtual/ActionBuffSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatResConvert.ts", "./EventDispatcher.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, i, s, n, f, h;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    s = t.CombatResConvert
                }
                , function(t) {
                    n = t.EventDispatcher
                }
                , function(t) {
                    f = t.VideoEvent
                }
                , function(t) {
                    h = t.FightData
                }
            ],
            execute: function() {
                i._RF.push({}, "a42f8aBj3FLPb3C8ajh09DU", "ActionBuffSegment", void 0);
                t("ActionBuffSegment", function(t) {
                    function i() {
                        var e;
                        return (e = t.call(this) || this).aPet = void 0,
                            e.stagemc = void 0,
                            e.screen = void 0,
                            e.effect1 = void 0,
                            e.spiritUILeft = void 0,
                            e.uin = 0,
                            e.index = 0,
                            e.buffId = 0,
                            e.hpV = void 0,
                            e.buffName = "",
                            e.canAddBuffIcon = void 0,
                            e.effectnm = 0,
                            e.dataObject = void 0,
                            e.offenseIsHpvar = !1,
                            e.whereOffense = 0,
                            e.canceled = !1,
                            e.needEvent = new Array,
                            e.hasEvent = new Array,
                            e.effect1ed = !1,
                            e.aPeted = !1,
                            e.restrainId = 0,
                            e.immunityInfoArray = new Array,
                            console.log("Segment初始化=>>"),
                            console.log("ActionBuffSegment"),
                            e
                    }
                    e(i, t);
                    var n = i.prototype;
                    return n.ready = function() {
                        CONFIG.DEBUG,
                            console.log("===============Buff效果============="),
                            this.uin = this.dataObject.id,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.index = this.dataObject.index,
                            this.buffId = this.dataObject.buffId,
                            this.buffName = this.dataObject.buffName,
                            this.restrainId = this.dataObject.restrainId,
                            this.immunityInfoArray = this.dataObject.immunityInfoArray,
                        null != this.dataObject.hpVar && (0 == this.dataObject.hpVar.hitTimes && 0 == this.dataObject.hpVar.hpV && 0 == this.dataObject.hpVar.hpLeft || (this.hpV = this.dataObject.hpVar,
                            this.offenseIsHpvar = !0)),
                            this.canAddBuffIcon = this.dataObject.addBuffIcon,
                            this.whereOffense = this.aPet.getPosType(),
                        this.buffId >= 0 && this.dataObject.isPlay && (this.effect1 = this.screen.createVEffect(this.buffId, this.whereOffense),
                            this.effect1ed = !0),
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense),
                            CONFIG.DEBUG,
                            console.log("[Angle]防守方：" + this.uin),
                            console.log("[Angle]防守方位置：" + this.whereOffense + "  --0表示左,--1表示右"),
                            console.log("[Angle]BuffId：" + this.buffId),
                            console.log("[Angle]防守方defenseHPV：" + this.dataObject.hpVar),
                            console.log("[Angle]防守方defenseHPV血量变化：" + this.dataObject.hpVar.hpV),
                            console.log("[Angle]防守方defenseHPV血量剩余：" + this.dataObject.hpVar.hpLeft),
                            console.log("[Angle]防守方defenseHPV打击次数：" + this.dataObject.hpVar.hitTimes)
                    }
                        ,
                        n.setData = function(t) {
                            this.dataObject = t
                        }
                        ,
                        n.setScreen = function(t) {
                            this.screen = t,
                                this.stagemc = this.screen.getVideoStage()
                        }
                        ,
                        n.start = function() {
                            if (console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                            this.buffId >= 0 && (this.effectnm += 1,
                                this.dataObject.isPlay ? (this.effect1.spell(),
                                    this.effect1.addActionListener(h.EEFFECTHIT, this.getEffectHit, this),
                                    this.effect1.addActionListener(h.BEFFECTEND, this.getEffectEnd, this),
                                    this.needEvent.push(h.EEFFECTHIT),
                                    this.needEvent.push(h.BEFFECTEND)) : this.getEffectHit(null)),
                            this.buffId < 0) {
                                if (1 == this.offenseIsHpvar) {
                                    this.screen.getEffectsLayer().deleteAllNm();
                                    var t = Math.floor(this.dataObject.hpVar.hpV);
                                    t < 0 && this.screen.getEffectsLayer().createHPNumber("" + t, 0, 1, this.whereOffense),
                                    t > 0 && this.screen.getEffectsLayer().createHPNumber("+" + t, 0, 2, this.whereOffense);
                                    var e = this.dataObject.hpVar.hpLeft;
                                    this.spiritUILeft.setHP(e),
                                    e <= 0 && (this.aPet.dead(),
                                        this.aPet.addActionListener(h.PDEAD, this.getDead, this),
                                        this.needEvent.push(h.PDEAD),
                                        this.effectnm += 1),
                                    e > 0 && (this.aPet.underAttack(),
                                        this.aPet.addActionListener(h.PUNDERATTACK, this.getUnderAttack, this),
                                        this.needEvent.push(h.PUNDERATTACK),
                                        this.effectnm += 1)
                                }
                                0 == this.effectnm && this.dispatchEvent(new f(f.ON_SEG_END))
                            }
                        }
                        ,
                        n.getEffectHit = function(t) {
                            var e = this;
                            if (console.info("getEffectHit"),
                            1 == this.offenseIsHpvar) {
                                var i = Math.floor(this.dataObject.hpVar.hpV);
                                i < 0 && this.screen.getEffectsLayer().createHPNumber("" + i, 0, 1, this.whereOffense),
                                i > 0 && this.screen.getEffectsLayer().createHPNumber("+" + i, 0, 2, this.whereOffense);
                                var n = this.dataObject.hpVar.hpLeft;
                                this.spiritUILeft.setHP(n),
                                n <= 0 && (this.aPet.dead(),
                                    this.aPet.addActionListener(h.PDEAD, this.getDead, this),
                                    this.needEvent.push(h.PDEAD),
                                    this.effectnm += 1),
                                n > 0 && (this.aPet.underAttack(),
                                    this.aPet.addActionListener(h.PUNDERATTACK, this.getUnderAttack, this),
                                    this.needEvent.push(h.PUNDERATTACK),
                                    this.effectnm += 1)
                            }
                            var f = 0
                                , a = !1;
                            if (null != this.immunityInfoArray)
                                for (f = 0; f < this.immunityInfoArray.length; f++)
                                    this.buffId == this.immunityInfoArray[f].typeId && (a = !0);
                            1 == a && this.screen.getEffectsLayer().createHPNumber(this.buffName + "免疫", 0, 3, this.whereOffense);
                            var c = s.convertToBuffId(this.buffId);
                            c > 0 && this.canAddBuffIcon && this.spiritUILeft.addBuff(Math.abs(c), this.dataObject.buffName),
                            c < 0 && this.spiritUILeft.removeBuff(Math.abs(c)),
                                this.dataObject.isPlay ? (this.effect1.removeActionListener(h.EEFFECTHIT, this.getEffectHit, this),
                                    this.delEvent(h.EEFFECTHIT)) : setTimeout((function() {
                                        e.getEffectEnd(null)
                                    }
                                ), 300)
                        }
                        ,
                        n.getUnderAttack = function(t) {
                            this.aPet.idle(),
                                this.aPet.removeActionListener(h.PUNDERATTACK, this.getUnderAttack, this),
                                this.delEvent(h.PUNDERATTACK),
                                this.effectnm -= 1,
                            0 == this.effectnm && this.dispatchEvent(new f(f.ON_SEG_END))
                        }
                        ,
                        n.getDead = function(t) {
                            console.log("ActionBuffSegment==getDead"),
                                this.aPet.stopNull(),
                                this.aPet.removeActionListener(h.PDEAD, this.getDead, this),
                                this.delEvent(h.PDEAD),
                                this.effectnm -= 1,
                            0 == this.effectnm && this.dispatchEvent(new f(f.ON_SEG_END))
                        }
                        ,
                        n.getText = function() {
                            if ("" != this.dataObject.description2) {
                                var t = ""
                                    , e = this.dataObject.hpVar.hpLeft
                                    , i = 0
                                    , s = !1;
                                if (this.whereOffense == h.POS_LEFT) {
                                    if (i = 0,
                                        s = !1,
                                    null != this.immunityInfoArray)
                                        for (i = 0; i < this.immunityInfoArray.length; i++)
                                            this.buffId == this.immunityInfoArray[i].typeId && (s = !0);
                                    0 == s && (t = "<color=#A9D367>【" + h.OffenseCurrentSprite + "】</color>" + this.dataObject.description2),
                                    1 == s && (t = "<color=#A9D367>【" + h.OffenseCurrentSprite + "】</color>，对" + this.buffName + "免疫。"),
                                    1 == this.offenseIsHpvar && e <= 0 && (t = t + "<color=#A9D367>\n【" + h.OffenseCurrentSprite + "】</color>战败了！"),
                                        this.screen.getCombatInfo().getTarget().htmlText += t,
                                        console.log("战斗日志=>>" + t)
                                }
                                if (this.whereOffense == h.POS_RIGHT) {
                                    if (i = 0,
                                        s = !1,
                                    null != this.immunityInfoArray)
                                        for (i = 0; i < this.immunityInfoArray.length; i++)
                                            this.buffId == this.immunityInfoArray[i].typeId && (s = !0);
                                    0 == s && (t = "<color=#A9D367>【" + h.DefenseCurrentSprite + "】</color>" + this.dataObject.description2),
                                    1 == s && (t = "<color=#A9D367>【" + h.DefenseCurrentSprite + "】</color>，对" + this.buffName + "免疫。"),
                                    1 == this.offenseIsHpvar && e <= 0 && (t = t + "<color=#A37EF8>\n【" + h.DefenseCurrentSprite + "】</color>战败了！"),
                                        this.screen.getCombatInfo().getTarget().htmlText += t,
                                        console.log("战斗日志=>>" + t)
                                }
                            }
                        }
                        ,
                        n.getEffectEnd = function(t) {
                            console.log("ActionBuffSegment==getEffectEnd"),
                                this.getText(),
                            this.dataObject.isPlay && (this.effect1.removeActionListener(h.BEFFECTEND, this.getEffectEnd, this),
                                this.delEvent(h.PDEAD),
                                this.screen.removeVEffect(this.effect1)),
                                this.effect1ed = !1,
                                this.effectnm -= 1,
                            0 == this.effectnm && this.dispatchEvent(new f(f.ON_SEG_END))
                        }
                        ,
                        n.cancel = function() {
                            console.log("ActionBuffSegment==cancel"),
                            this.aPeted && this.aPet.stopNull(),
                            this.effect1ed && this.effect1 && (this.effect1.stopNull(),
                                this.screen.removeVEffect(this.effect1)),
                                CONFIG.DEBUG,
                                console.log("[Angle]片段被cancel了！\n===已触发的事件：===");
                            for (var t = 0; t < this.hasEvent.length; t++)
                                console.log(this.hasEvent[t]);
                            console.log("===未触发的事件：===");
                            for (var e = 0; e < this.needEvent.length; e++)
                                console.log(this.needEvent[e]);
                            this.canceled = !0
                        }
                        ,
                        n.delEvent = function(t) {
                            for (var e = 0; e < this.needEvent.length; e++)
                                if (this.needEvent[e] == t) {
                                    this.needEvent.slice(e, 1);
                                    break
                                }
                            this.hasEvent.push(t)
                        }
                        ,
                        n.dispose = function() {
                            if (this.screen.getEffectsLayer().deleteAllEffect(),
                                this.aPet) {
                                if (1 == this.offenseIsHpvar)
                                    this.dataObject.hpVar.hpLeft <= 0 ? this.aPet.stopNull() : this.aPet.idle();
                                this.aPet.removeActionListener(h.PDEAD, this.getDead, this),
                                    this.aPet.removeActionListener(h.PUNDERATTACK, this.getUnderAttack, this)
                            }
                            this.aPet = null,
                                this.stagemc = null,
                                this.screen = null,
                            this.effect1 && (this.effect1.removeActionListener(h.EEFFECTHIT, this.getEffectHit, this),
                                this.effect1.removeActionListener(h.BEFFECTEND, this.getEffectEnd, this)),
                                this.effect1 = null,
                                this.spiritUILeft = null,
                                this.hpV = null,
                                this.dataObject = null
                        }
                        ,
                        i
                }(n));
                i._RF.pop()
            }
        }
    }
));
