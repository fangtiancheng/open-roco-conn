System.register("chunks:///_virtual/ActionCatchSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./CombatEffectData.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, s, i, n, h, c;
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
                    n = t.CombatEffectData
                }
                , function(t) {
                    h = t.VideoEvent
                }
                , function(t) {
                    c = t.FightData
                }
            ],
            execute: function() {
                s._RF.push({}, "57708sjipJFKqY337Bc0kAJ", "ActionCatchSegment", void 0);
                t("ActionCatchSegment", function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this).aPet = void 0,
                            e.stagemc = void 0,
                            e.effect1 = void 0,
                            e.screen = void 0,
                            e.effectnm = 0,
                            e.ball = void 0,
                            e.dataObject = void 0,
                            e.uin = 0,
                            e.isSuccess = !0,
                            e.ballId = n.BALL_MOVIE,
                            e.timer = 0,
                            e.canceled = !1,
                            e.needEvent = new Array,
                            e.hasEvent = new Array,
                            e.effect1ed = !1,
                            e.aPeted = !1,
                            e.balled = !1,
                            console.log("Segment初始化=>>"),
                            console.log("ActionCatchSegment"),
                            e
                    }
                    e(s, t);
                    var i = s.prototype;
                    return i.ready = function() {
                        this.uin = this.dataObject.aim,
                            this.isSuccess = this.dataObject.isSuccess,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.ballId = this.dataObject.ballId,
                            this.ball = this.screen.createVEffect(this.ballId, c.POS_LEFT),
                            this.balled = !0
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
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                0 == this.isSuccess ? (this.ball.ballGetFailed(),
                                    this.ball.addActionListener(c.EBALLLIGHT, this.getBLight, this),
                                    this.ball.addActionListener(c.EBALLEND, this.getBGet, this),
                                    this.needEvent.push(c.EBALLLIGHT),
                                    this.needEvent.push(c.EBALLEND),
                                    this.effectnm += 2) : (this.ball.ballGetSuccess(),
                                    this.ball.addActionListener(c.EBALLLIGHT, this.getBLight, this),
                                    this.ball.addActionListener(c.EBALLEND, this.getBGet, this),
                                    this.needEvent.push(c.EBALLLIGHT),
                                    this.needEvent.push(c.EBALLEND),
                                    this.effectnm += 2)
                        }
                        ,
                        i.getBLight = function(t) {
                            this.effectnm--,
                                this.ball.removeActionListener(c.EBALLLIGHT, this.getBLight, this),
                                this.delEvent(c.EBALLLIGHT),
                                this.aPet.bts(),
                                this.aPet.addActionListener(c.PBTS, this.getBTS, this),
                                this.needEvent.push(c.PBTS),
                                this.effectnm++
                        }
                        ,
                        i.getBGet = function(t) {
                            if (this.effectnm--,
                                this.ball.removeActionListener(c.EBALLEND, this.getBGet, this),
                                this.delEvent(c.EBALLEND),
                                this.screen.removeVEffect(this.ball),
                                this.balled = !1,
                                this.screen.getEffectsLayer().deleteAllNm(),
                            0 == this.isSuccess)
                                this.getText2(),
                                    this.screen.getEffectsLayer().createHPNumber("捕捉失败", 0, 4, c.POS_LEFT),
                                    this.aPet.stb(),
                                    this.aPet.addActionListener(c.PSTB, this.getSTB, this),
                                    this.needEvent.push(c.PSTB),
                                    this.effectnm++;
                            else if (this.getText(),
                                this.screen.getEffectsLayer().createHPNumber("捕捉成功！", 0, 2, c.POS_LEFT),
                            0 == this.effectnm)
                                return void this.dispatchEvent(new h(h.ON_SEG_END))
                        }
                        ,
                        i.getBTS = function(t) {
                            this.effectnm--,
                                this.aPet.stopNull(),
                                this.aPet.removeActionListener(c.PBTS, this.getBTS, this),
                                this.delEvent(c.PBTS),
                            0 != this.effectnm || this.dispatchEvent(new h(h.ON_SEG_END))
                        }
                        ,
                        i.getSTB = function(t) {
                            this.effectnm--,
                                this.aPet.idle(),
                                this.aPet.removeActionListener(c.PSTB, this.getSTB, this),
                                this.delEvent(c.PSTB),
                            0 != this.effectnm || this.dispatchEvent(new h(h.ON_SEG_END))
                        }
                        ,
                        i.getText = function() {
                            var t;
                            t = "<color=#FF5644>【" + c.OffenseName + "】</color>成功捕捉了<color=#A9D367>【" + c.DefenseCurrentSprite + "】</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)
                        }
                        ,
                        i.getText2 = function() {
                            var t;
                            t = "<color=#FF5644>【" + c.OffenseName + "】</color>捕捉<color=#A9D367>【" + c.DefenseCurrentSprite + "】</color>失败！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)
                        }
                        ,
                        i.cancel = function() {
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
                            this.aPet && (this.isSuccess ? this.aPet.stopNull() : this.aPet.idle()),
                                this.aPet = null,
                                this.stagemc = null,
                                this.effect1 = null,
                                this.screen = null,
                                this.dataObject = null
                        }
                        ,
                        s
                }(i));
                s._RF.pop()
            }
        }
    }
));
