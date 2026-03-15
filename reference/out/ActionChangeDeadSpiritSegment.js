System.register("chunks:///_virtual/ActionChangeDeadSpiritSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./CombatEffectData.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, i, s, n, h, r;
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
                    n = t.CombatEffectData
                }
                , function(t) {
                    h = t.VideoEvent
                }
                , function(t) {
                    r = t.FightData
                }
            ],
            execute: function() {
                i._RF.push({}, "344feN9voZDT6KdeWJw+QHl", "ActionChangeDeadSpiritSegment", void 0);
                t("ActionChangeDeadSpiritSegment", function(t) {
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
                            e.timer = 1,
                            e.whereOffense = 0,
                            e.canceled = !1,
                            e.needEvent = new Array,
                            e.hasEvent = new Array,
                            e.effect1ed = !1,
                            e.aPeted = !1,
                            e.balled = !1,
                            e.aPetSpiritInfo = void 0,
                            console.log("Segment初始化=>>"),
                            console.log("ActionChangeDeadSpiritSegment"),
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
                            this.ball = this.screen.createVEffect(n.BALL_MOVIE, this.posType),
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
                                this.aPet.stopNull(),
                                this.screen.removeVSpirit(this.uin),
                                this.aPeted = !1,
                                this.screen.updateSpiritsState(),
                                this.spiritUILeft.removeAllBuff(),
                                this.timer -= 1,
                            this.timer <= 0 && (this.ball.ballAppear2(),
                                this.ball.addActionListener(r.EBALLEND, this.getBAppear, this),
                                this.needEvent.push(r.EBALLEND))
                        }
                        ,
                        s.getText = function() {
                            var t = "";
                            this.whereOffense == r.POS_LEFT && (t = "<color=#FF5644>【" + r.OffenseName + "】</color>召唤了<color=#A9D367>【" + this.dataObject.newSpirit.spiritDes.name + "】</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)),
                            this.whereOffense == r.POS_RIGHT && (t = "<color=#FF5644>【" + r.DefenseName + "】</color>召唤了<color=#A37EF8>【" + this.dataObject.newSpirit.spiritDes.name + "】</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t))
                        }
                        ,
                        s.getBAppear = function(t) {
                            console.log("ActionChangeDeadSpiritSegment==>getBAppear"),
                                this.spiritUILeft.setSpiritInfo(this.aPetSpiritInfo);
                            var e = this.dataObject.newSpirit.maxHP;
                            this.spiritUILeft.setMaxHP(e);
                            var i = this.dataObject.newSpirit.curHP;
                            if (this.spiritUILeft.setHP(i),
                                this.ball.removeActionListener(r.EBALLEND, this.getBAppear, this),
                                this.delEvent(r.EBALLEND),
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
                                this.aPet.addActionListener(r.PSTB, this.getSTB, this),
                                this.needEvent.push(r.PSTB)
                        }
                        ,
                        s.getSTB = function(t) {
                            var e;
                            this.aPet.idle(),
                                this.getText(),
                            this.whereOffense == r.POS_LEFT && (r.OffenseCurrentSprite = this.dataObject.newSpirit.spiritDes.name),
                            this.whereOffense == r.POS_RIGHT && (r.DefenseCurrentSprite = this.dataObject.newSpirit.spiritDes.name),
                                this.aPet.removeActionListener(r.PSTB, this.getSTB, this),
                                this.delEvent(r.PSTB);
                            for (var i = 0; i < this.dataObject.buffs.length; i++)
                                e = this.dataObject.buffs[i],
                                    this.spiritUILeft.addBuff(e.id, e.skillDes.name);
                            this.dispatchEvent(new h(h.ON_SEG_END))
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
                            this.aPet && (this.aPet.idle(),
                                this.aPet.removeActionListener(r.PSTB, this.getSTB, this)),
                                this.aPet = null,
                                this.stagemc = null,
                                this.effect1 = null,
                                this.screen = null,
                            this.ball && this.ball.removeActionListener(r.EBALLEND, this.getBAppear, this),
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
