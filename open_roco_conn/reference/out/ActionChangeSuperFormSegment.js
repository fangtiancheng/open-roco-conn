System.register("chunks:///_virtual/ActionChangeSuperFormSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts", "./FightData.ts"], (function(e) {
        var t, i, s, n, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    s = e.EventDispatcher
                }
                , function(e) {
                    n = e.VideoEvent
                }
                , function(e) {
                    h = e.FightData
                }
            ],
            execute: function() {
                i._RF.push({}, "59559L9b+hLb6UvsC0i0bET", "ActionChangeSuperFormSegment", void 0);
                e("ActionChangeSuperFormSegment", function(e) {
                    function i() {
                        var t;
                        return (t = e.call(this) || this).aPet = void 0,
                            t.bPet = void 0,
                            t.screen = void 0,
                            t.effectnm = 0,
                            t.spiritUILeft = void 0,
                            t.spiritUIRight = void 0,
                            t.dataObject = void 0,
                            t.uin = 0,
                            t.skillDec = void 0,
                            t.posType = 0,
                            t.whereOffense = 0,
                            t.whereDefense = 0,
                            t.canceled = !1,
                            t.needEvent = new Array,
                            t.hasEvent = new Array,
                            t.aPeted = !1,
                            console.log("Segment初始化=>>"),
                            console.log("ActionChangeSuperFormSegment"),
                            t
                    }
                    t(i, e);
                    var s = i.prototype;
                    return s.ready = function() {
                        this.uin = this.dataObject.uin,
                            this.skillDec = this.dataObject.skillDec,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.posType = this.aPet.getPosType(),
                            this.whereOffense = this.aPet.getPosType(),
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense),
                            this.bPet = this.screen.getVSpirit(this.dataObject.defenseID),
                            this.posType = this.bPet.getPosType(),
                            this.whereDefense = this.bPet.getPosType(),
                            this.spiritUIRight = this.screen.getSpiritUI(this.whereDefense)
                    }
                        ,
                        s.setData = function(e) {
                            this.dataObject = e
                        }
                        ,
                        s.setScreen = function(e) {
                            this.screen = e
                        }
                        ,
                        s.start = function() {
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                this.aPet.stopNull(),
                                this.screen.removeVSpirit(this.uin),
                                this.aPeted = !1,
                                this.screen.updateSpiritsState(),
                                this.spiritUILeft.removeAllBuffForSuperform(),
                                this.getSuperSpiritAppear()
                        }
                        ,
                        s.getText = function() {
                            var e = "";
                            this.whereOffense == h.POS_LEFT && (e = "<color=#A9D367>【" + h.OffenseCurrentSprite + "】</color>使用了<color=#72C0F3>【" + this.skillDec.name + "】</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += e,
                                console.log("战斗日志=>>" + e)),
                            this.whereOffense == h.POS_RIGHT && (e = "<color=#A37EF8>【" + h.DefenseCurrentSprite + "】</color>使用了<color=#72C0F3>【" + this.skillDec.name + "】</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += e,
                                console.log("战斗日志=>>" + e))
                        }
                        ,
                        s.getSuperSpiritAppear = function() {
                            this.spiritUILeft.setSpiritInfo(this.dataObject.spirit);
                            var e = this.dataObject.spirit.maxHP;
                            this.spiritUILeft.setMaxHP(e);
                            var t = this.dataObject.spirit.curHP;
                            if (this.spiritUILeft.setHP(t),
                            0 != this.dataObject.spirit.skinID) {
                                var i = 2e5 + 10 * this.dataObject.spirit.id + this.dataObject.spirit.skinID % 10;
                                this.aPet = this.screen.createVSpirit(i, this.uin, this.whereOffense, 1)
                            } else
                                this.aPet = this.screen.createVSpirit(this.dataObject.spirit.superFormId, this.uin, this.whereOffense, 1);
                            this.aPet.transform(),
                                this.aPet.addActionListener(h.PTRANSFORM, this.getTRANSFORM, this),
                                this.needEvent.push(h.PTRANSFORM),
                                this.beginTimer()
                        }
                        ,
                        s.getTRANSFORM = function(e) {
                            var t, i, s;
                            this.endTimer(),
                                this.aPet.idle(),
                                this.getText(),
                                this.aPet.removeActionListener(h.PTRANSFORM, this.getTRANSFORM, this),
                                this.delEvent(h.PTRANSFORM);
                            for (var r = 0; r < this.dataObject.buffs.length; r++)
                                t = this.dataObject.buffs[r],
                                    this.spiritUILeft.addBuff(t.id, t.skillDes.name);
                            for (this.screen.getEffectsLayer().deleteAllNm(),
                                     s = 0; s < this.dataObject.defenseHPV.length; s++)
                                if (0 != (i = this.dataObject.defenseHPV[s]).hitTimes || 0 != i.hpV || 0 != i.hpLeft) {
                                    (o = Math.floor(i.hpV)) > 0 && this.screen.getEffectsLayer().createHPNumber("+" + o, 0, 2, this.whereDefense);
                                    var a = i.hpLeft;
                                    this.spiritUIRight.setHP(a)
                                }
                            for (s = 0; s < this.dataObject.offenseHPV.length; s++)
                                if (0 != (i = this.dataObject.offenseHPV[s]).hitTimes || 0 != i.hpV || 0 != i.hpLeft) {
                                    var o;
                                    (o = Math.floor(i.hpV)) > 0 && this.screen.getEffectsLayer().createHPNumber("+" + o, 0, 2, this.whereOffense);
                                    a = i.hpLeft;
                                    this.spiritUILeft.setHP(a)
                                }
                            this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        s.cancel = function() {
                            this.aPeted && this.aPet.stopNull(),
                                CONFIG.DEBUG,
                                console.log("[Angle]片段被cancel了！\n===已触发的事件：===");
                            for (var e = 0; e < this.hasEvent.length; e++)
                                console.log(this.hasEvent[e]);
                            console.log("===未触发的事件：===");
                            for (var t = 0; t < this.needEvent.length; t++)
                                console.log(this.needEvent[t]);
                            this.canceled = !0
                        }
                        ,
                        s.delEvent = function(e) {
                            for (var t = 0; t < this.needEvent.length; t++)
                                if (this.needEvent[t] == e) {
                                    this.needEvent.slice(t, 1);
                                    break
                                }
                            this.hasEvent.push(e)
                        }
                        ,
                        s.dispose = function() {
                            if (this.screen.getEffectsLayer().deleteAllEffect(),
                                !this.screen.hasVSpirit(this.uin))
                                if (0 != this.dataObject.spirit.skinID) {
                                    var e = 2e5 + 10 * this.dataObject.spirit.id + this.dataObject.spirit.skinID % 10;
                                    this.aPet = this.screen.createVSpirit(e, this.uin, this.whereOffense, 1)
                                } else
                                    this.aPet = this.screen.createVSpirit(this.dataObject.spirit.superFormId, this.uin, this.whereOffense, 1);
                            this.aPet && (this.aPet.idle(),
                                this.aPet.removeActionListener(h.PTRANSFORM, this.getTRANSFORM, this)),
                                this.aPet = null,
                                this.screen = null,
                                this.spiritUILeft = null,
                                this.spiritUIRight = null,
                                this.dataObject = null
                        }
                        ,
                        i
                }(s));
                i._RF.pop()
            }
        }
    }
));
