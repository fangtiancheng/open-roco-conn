System.register("chunks:///_virtual/ActionEffectSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./CombatDataProxy.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, i, s, n, c, f;
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
                    n = t.CombatDataProxy
                }
                , function(t) {
                    c = t.VideoEvent
                }
                , function(t) {
                    f = t.FightData
                }
            ],
            execute: function() {
                i._RF.push({}, "2fb59/lSTlDeZk6CwsfXmYI", "ActionEffectSegment", void 0);
                t("ActionEffectSegment", function(t) {
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
                            e.effectnm = 0,
                            e.dataObject = void 0,
                            e.offenseIsHpvar = !1,
                            e.whereOffense = 0,
                            e.canceled = !1,
                            e.needEvent = new Array,
                            e.hasEvent = new Array,
                            e.effect1ed = !1,
                            e.aPeted = !1,
                            console.log("Segment初始化=>>"),
                            console.log("ActionEffectSegment"),
                            e
                    }
                    e(i, t);
                    var s = i.prototype;
                    return s.ready = function() {
                        CONFIG.DEBUG,
                            console.log("===============Effect效果============="),
                            this.uin = this.dataObject.id,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.index = this.dataObject.index,
                            this.buffId = this.dataObject.effectId,
                            this.whereOffense = this.aPet.getPosType(),
                        this.dataObject.isPlay && (this.effect1 = this.screen.createVEffect(this.buffId, this.whereOffense),
                            this.effect1ed = !0),
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense),
                            CONFIG.DEBUG,
                            console.log("[Angle]防守方：" + this.uin),
                            console.log("[Angle]防守方位置：" + this.whereOffense + "  --0表示左,--1表示右")
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
                            var t = this;
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                this.dataObject.isPlay ? (this.effect1.spell(),
                                    this.effect1.addActionListener(f.EEFFECTHIT, this.getEffectHit, this),
                                    this.needEvent.push(f.EEFFECTHIT),
                                    this.effect1.addActionListener(f.BEFFECTEND, this.getEffectEnd, this),
                                    this.needEvent.push(f.BEFFECTEND),
                                    this.getText()) : setTimeout((function() {
                                        t.getText(),
                                            t.dispatchEvent(new c(c.ON_SEG_END))
                                    }
                                ), 350)
                        }
                        ,
                        s.getText = function() {
                            if ("" != this.dataObject.description2) {
                                var t = "";
                                this.whereOffense == f.POS_LEFT && null != n.getCombatData().myInfo.spirits[this.index - 1] && (t = "<color=#A9D367>【" + n.getCombatData().myInfo.spirits[this.index - 1].spiritDes.name + "】</color>" + this.dataObject.description2,
                                    this.screen.getCombatInfo().getTarget().htmlText += t,
                                    console.log("战斗日志=>>" + t)),
                                this.whereOffense == f.POS_RIGHT && (t = "<color=#A37EF8>【" + n.getCombatData().rivalInfo.spirits[this.index - 1].spiritDes.name + "】</color>" + this.dataObject.description2,
                                    this.screen.getCombatInfo().getTarget().htmlText += t,
                                    console.log("战斗日志=>>" + t))
                            }
                        }
                        ,
                        s.getEffectHit = function(t) {
                            this.effect1.removeActionListener(f.EEFFECTHIT, this.getEffectHit, this),
                                this.delEvent(f.EEFFECTHIT)
                        }
                        ,
                        s.getEffectEnd = function(t) {
                            this.effect1.removeActionListener(f.BEFFECTEND, this.getEffectEnd, this),
                                this.delEvent(f.BEFFECTEND),
                                this.screen.removeVEffect(this.effect1),
                                this.effect1ed = !1,
                                this.dispatchEvent(new c(c.ON_SEG_END))
                        }
                        ,
                        s.cancel = function() {
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
                            this.screen.getEffectsLayer().deleteAllEffect(),
                                this.aPet = null,
                                this.stagemc = null,
                                this.screen = null,
                            this.effect1 && (this.effect1.removeActionListener(f.EEFFECTHIT, this.getEffectHit, this),
                                this.effect1.removeActionListener(f.BEFFECTEND, this.getEffectEnd, this)),
                                this.effect1 = null,
                                this.spiritUILeft = null,
                                this.hpV = null,
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
