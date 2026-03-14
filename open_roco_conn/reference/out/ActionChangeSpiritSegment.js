System.register("chunks:///_virtual/ActionChangeSpiritSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./CombatEffectData.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, i, s, h, n, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    s = t.EventDispatcher
                }
                , function(t) {
                    h = t.CombatEffectData
                }
                , function(t) {
                    n = t.VideoEvent
                }
                , function(t) {
                    a = t.FightData
                }
            ],
            execute: function() {
                i._RF.push({}, "04555uzVF5D34nDV+KHFMBZ", "ActionChangeSpiritSegment", void 0);
                t("ActionChangeSpiritSegment", function(t) {
                    function i() {
                        var e;
                        return (e = t.call(this) || this).aPet = void 0,
                            e.stagemc = void 0,
                            e.effect1 = void 0,
                            e.screen = void 0,
                            e.effectnm = 0,
                            e.ball = void 0,
                            e.spiritUILeft = void 0,
                            e.spiritUIRight = void 0,
                            e.dataObject = void 0,
                            e.uin = 0,
                            e.posType = 0,
                            e.newSpiritId = 0,
                            e.changed = !1,
                            e.timer = 2,
                            e.whereOffense = 0,
                            e.canceled = !1,
                            e.needEvent = new Array,
                            e.hasEvent = new Array,
                            e.effect1ed = !1,
                            e.aPeted = !1,
                            e.balled = !1,
                            e.aPetSpiritInfo = void 0,
                            e.isDie = !1,
                            console.log("Segment初始化=>>"),
                            console.log("ActionChangeSpiritSegment"),
                            e
                    }
                    e(i, t);
                    var s = i.prototype;
                    return s.ready = function() {
                        this.uin = this.dataObject.uin,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.posType = this.aPet.getPosType(),
                            this.whereOffense = this.aPet.getPosType(),
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense),
                            0 != this.dataObject.newSpirit.skinID ? this.newSpiritId = this.dataObject.newSpirit.skinID : this.newSpiritId = this.dataObject.newSpirit.id,
                            this.ball = this.screen.createVEffect(h.BALL_MOVIE, this.posType),
                            this.balled = !0,
                            this.aPetSpiritInfo = this.dataObject.newSpirit,
                            this.screen.removeSuperSkillBg(this.posType)
                    }
                        ,
                        s.setData = function(t) {
                            this.dataObject = t
                        }
                        ,
                        s.setScreen = function(t) {
                            this.screen = t,
                                this.stagemc = this.screen.getVideoStage()
                        }
                        ,
                        s.start = function() {
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                this.screen.updateSpiritsState(),
                                this.ball.ballRecieve(),
                                this.ball.addActionListener(a.EBALLEND, this.getBRecieve, this),
                                this.needEvent.push(a.EBALLEND),
                                this.aPet.bts(),
                                this.aPet.addActionListener(a.PBTS, this.getBTS, this),
                                this.needEvent.push(a.PBTS)
                        }
                        ,
                        s.getText = function() {
                            var t = "";
                            this.whereOffense == a.POS_LEFT && (t = "<color=#FF5644>【" + a.OffenseName + "】</color>召唤了<color=#A9D367>【" + this.dataObject.newSpirit.spiritDes.name + "】</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)),
                            this.whereOffense == a.POS_RIGHT && (t = "<color=#FF5644>【" + a.DefenseName + "】</color>召唤了<color=#A37EF8>【" + this.dataObject.newSpirit.spiritDes.name + "】</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t))
                        }
                        ,
                        s.getDead2 = function(t) {
                            this.aPet.stopNull(),
                                this.screen.removeVSpirit(this.uin),
                                this.aPeted = !1,
                                this.aPet.removeActionListener(a.PDEAD, this.getDead2, this),
                                this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        s.getBTS = function(t) {
                            this.aPet.stopNull(),
                                this.aPet.removeActionListener(a.PBTS, this.getBTS, this),
                                this.delEvent(a.PBTS),
                                this.screen.removeVSpirit(this.uin),
                                this.aPeted = !1,
                                this.timer -= 1,
                                console.log("getBTS==timer=>>" + this.timer),
                            this.timer <= 0 && (this.ball.addActionListener(a.EBALLEND, this.getBAppear, this),
                                this.needEvent.push(a.EBALLEND),
                                this.ball.ballAppear2())
                        }
                        ,
                        s.getBRecieve = function(t) {
                            this.ball.removeActionListener(a.EBALLEND, this.getBRecieve, this),
                            0 == this.changed && (this.spiritUILeft.removeAllBuff(),
                                this.changed = !0,
                                this.timer -= 1,
                                console.log("getBRecieve==timer=>>" + this.timer),
                            this.timer <= 0 && (this.ball.addActionListener(a.EBALLEND, this.getBAppear, this),
                                this.needEvent.push(a.EBALLEND),
                                this.ball.ballAppear2()))
                        }
                        ,
                        s.getBAppear = function(t) {
                            console.log("ActionChangeSpiritSegment=getBAppear"),
                                this.spiritUILeft.setSpiritInfo(this.aPetSpiritInfo);
                            var e = this.dataObject.newSpirit.maxHP;
                            this.spiritUILeft.setMaxHP(e);
                            var i = this.dataObject.newSpirit.curHP;
                            if (this.spiritUILeft.setHP(i),
                                this.ball.removeActionListener(a.EBALLEND, this.getBAppear, this),
                                this.delEvent(a.EBALLEND),
                                this.screen.removeVEffect(this.ball),
                                this.balled = !1,
                            0 != this.aPetSpiritInfo.superFormId)
                                if (0 != this.aPetSpiritInfo.skinID) {
                                    var s = 2e5 + 10 * this.aPetSpiritInfo.id + this.aPetSpiritInfo.skinID % 10;
                                    this.aPet = this.screen.createVSpirit(s, this.uin, this.posType, 1)
                                } else
                                    this.aPet = this.screen.createVSpirit(this.aPetSpiritInfo.superFormId, this.uin, this.posType, 1);
                            else
                                this.aPet = this.screen.createVSpirit(this.newSpiritId, this.uin, this.posType);
                            this.aPet.stb(),
                                this.aPet.addActionListener(a.PSTB, this.getSTB, this),
                                this.needEvent.push(a.PSTB)
                        }
                        ,
                        s.getSTB = function(t) {
                            var e;
                            this.isDie = !1,
                                this.getText(),
                            this.whereOffense == a.POS_LEFT && (a.OffenseCurrentSprite = this.dataObject.newSpirit.spiritDes.name),
                            this.whereOffense == a.POS_RIGHT && (a.DefenseCurrentSprite = this.dataObject.newSpirit.spiritDes.name),
                                this.aPet.removeActionListener(a.PSTB, this.getSTB, this),
                                this.delEvent(a.PSTB);
                            for (var i = 0; i < this.dataObject.buffs.length; i++)
                                e = this.dataObject.buffs[i],
                                    this.spiritUILeft.addBuff(e.id, e.skillDes.name);
                            if (this.dataObject.attackR && this.dataObject.attackR.attackAffects) {
                                this.screen.getEffectsLayer().deleteAllNm();
                                for (var s = this.dataObject.attackR.attackAffects.length, h = 0; h < s; h++)
                                    if (h >= 0) {
                                        var r = this.dataObject.attackR.attackAffects[h];
                                        r.hpVar.hpV < 0 && this.screen.getEffectsLayer().createHPNumber("" + r.hpVar.hpV, 0, 1, this.whereOffense),
                                        r.hpVar.hpV > 0 && this.screen.getEffectsLayer().createHPNumber("+" + r.hpVar.hpV, 0, 2, this.whereOffense);
                                        var c = r.hpVar.hpLeft;
                                        0 != r.hpVar.hpV && (this.spiritUILeft.setHP(c),
                                        c <= 0 && (this.isDie = !0,
                                            this.aPet.dead(),
                                            this.aPet.addActionListener(a.PDEAD, this.getDead2, this)))
                                    }
                            }
                            this.isDie || (this.aPet.idle(),
                                this.dispatchEvent(new n(n.ON_SEG_END)))
                        }
                        ,
                        s.cancel = function() {
                            this.aPeted && this.aPet.stopNull(),
                            this.balled && (this.ball.stopNull(),
                                this.screen.removeVEffect(this.ball)),
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
                        s.delEvent = function(t) {
                            for (var e = 0; e < this.needEvent.length; e++)
                                if (this.needEvent[e] == t) {
                                    this.needEvent.slice(e, 1);
                                    break
                                }
                            this.hasEvent.push(t)
                        }
                        ,
                        s.dispose = function() {
                            if (this.screen.getEffectsLayer().deleteAllEffect(),
                                !this.screen.hasVSpirit(this.uin))
                                if (0 != this.aPetSpiritInfo.superFormId)
                                    if (0 != this.aPetSpiritInfo.skinID) {
                                        var t = 2e5 + 10 * this.aPetSpiritInfo.id + this.aPetSpiritInfo.skinID % 10;
                                        this.aPet = this.screen.createVSpirit(t, this.uin, this.posType, 1)
                                    } else
                                        this.aPet = this.screen.createVSpirit(this.aPetSpiritInfo.superFormId, this.uin, this.posType, 1);
                                else
                                    this.aPet = this.screen.createVSpirit(this.newSpiritId, this.uin, this.posType);
                            this.aPet && (this.isDie || (this.aPet.idle(),
                                this.isDie = !1),
                                this.aPet.removeActionListener(a.PBTS, this.getBTS, this),
                                this.aPet.removeActionListener(a.PSTB, this.getSTB, this)),
                                this.aPet = null,
                                this.stagemc = null,
                                this.effect1 = null,
                                this.screen = null,
                            this.ball && (this.ball.removeActionListener(a.EBALLEND, this.getBAppear, this),
                                this.ball.removeActionListener(a.EBALLEND, this.getBRecieve, this)),
                                this.ball = null,
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
