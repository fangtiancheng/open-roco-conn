System.register("chunks:///_virtual/ActionRunSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./CombatEffectData.ts", "./VideoEvent.ts", "./FightData.ts"], (function(e) {
        var t, s, n, i, c, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    n = e.EventDispatcher
                }
                , function(e) {
                    i = e.CombatEffectData
                }
                , function(e) {
                    c = e.VideoEvent
                }
                , function(e) {
                    h = e.FightData
                }
            ],
            execute: function() {
                s._RF.push({}, "e1ff7mWIHVGC4X2glamn3OR", "ActionRunSegment", void 0);
                e("ActionRunSegment", function(e) {
                    function s() {
                        var t;
                        return (t = e.call(this) || this).ball = void 0,
                            t.aPet = void 0,
                            t.stagemc = void 0,
                            t.screen = void 0,
                            t.effectnm = 0,
                            t.dataObject = void 0,
                            t.uin = 0,
                            t.isSuccess = !0,
                            t.canceled = !1,
                            t.needEvent = new Array,
                            t.hasEvent = new Array,
                            t.effect1ed = !1,
                            t.aPeted = !1,
                            t.balled = !1,
                            t.whereOffense = 0,
                            console.log("Segment初始化=>>"),
                            console.log("ActionRunSegment"),
                            t
                    }
                    t(s, e);
                    var n = s.prototype;
                    return n.ready = function() {
                        this.uin = this.dataObject.aim,
                            this.isSuccess = this.dataObject.isSuccess,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.whereOffense = this.aPet.getPosType()
                    }
                        ,
                        n.setData = function(e) {
                            this.dataObject = e
                        }
                        ,
                        n.setScreen = function(e) {
                            this.screen = e,
                                this.stagemc = this.screen.getVideoStage()
                        }
                        ,
                        n.start = function() {
                            if (console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                            0 == this.isSuccess)
                                return this.screen.getEffectsLayer().deleteAllNm(),
                                this.whereOffense == h.POS_LEFT && this.screen.getEffectsLayer().createHPNumber("逃跑失败", 0, 4, h.POS_LEFT),
                                this.whereOffense == h.POS_RIGHT && this.screen.getEffectsLayer().createHPNumber("逃跑失败", 0, 4, h.POS_RIGHT),
                                    void this.dispatchEvent(new c(c.ON_SEG_END));
                            this.aPet.bts(),
                                this.aPet.addActionListener(h.PBTS, this.getBTS, this),
                                this.needEvent.push(h.PBTS)
                        }
                        ,
                        n.getBTS = function(e) {
                            this.aPet.removeActionListener(h.PBTS, this.getBTS, this),
                                this.delEvent(h.PBTS),
                                this.aPet.stopNull(),
                                this.screen.getEffectsLayer().deleteAllNm(),
                            this.whereOffense == h.POS_LEFT && (this.screen.getEffectsLayer().createHPNumber("逃跑成功！", 0, 3, h.POS_LEFT),
                                this.ball = this.screen.createVEffect(i.BALL_MOVIE, h.POS_LEFT)),
                            this.whereOffense == h.POS_RIGHT && (this.screen.getEffectsLayer().createHPNumber("逃跑成功！", 0, 3, h.POS_RIGHT),
                                this.ball = this.screen.createVEffect(i.BALL_MOVIE, h.POS_RIGHT)),
                                this.balled = !0,
                                this.ball.ballSmoke(),
                                this.ball.addActionListener(h.EBALLEND, this.getBalled, this),
                                this.needEvent.push(h.EBALLEND),
                                console.log(this.constructor.name + " 执行=>>getBTS")
                        }
                        ,
                        n.getBalled = function(e) {
                            console.log(this.constructor.name + " 执行=>>getBalled"),
                                this.ball.removeActionListener(h.EBALLEND, this.getBalled, this),
                                this.delEvent(h.EBALLEND),
                                this.screen.removeVEffect(this.ball),
                                this.balled = !1,
                                this.dispatchEvent(new c(c.ON_SEG_END))
                        }
                        ,
                        n.cancel = function() {
                            console.log(this.constructor.name + " 执行=>>cancel"),
                            this.aPeted && this.aPet.stopNull(),
                            this.balled && (this.ball.stopNull(),
                                this.screen.removeVEffect(this.ball)),
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
                        n.delEvent = function(e) {
                            for (var t = 0; t < this.needEvent.length; t++)
                                if (this.needEvent[t] == e) {
                                    this.needEvent.slice(t, 1);
                                    break
                                }
                            this.hasEvent.push(e)
                        }
                        ,
                        n.dispose = function() {
                            this.screen.getEffectsLayer().deleteAllNm(),
                                this.screen.getEffectsLayer().deleteAllEffect(),
                            this.aPet && (this.aPet.stopNull(),
                                this.aPet.removeActionListener(h.PBTS, this.getBTS, this)),
                                this.aPet = null,
                                this.stagemc = null,
                                this.screen = null,
                            this.ball && this.ball.removeActionListener(h.EBALLEND, this.getBalled, this),
                                this.ball = null,
                                this.dataObject = null
                        }
                        ,
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
