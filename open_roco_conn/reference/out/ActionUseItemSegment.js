System.register("chunks:///_virtual/ActionUseItemSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemSubtypes.ts", "./EventDispatcher.ts", "./CombatEffectData.ts", "./HPVar.ts", "./VideoEvent.ts", "./FightData.ts"], (function(e) {
        var t, s, i, n, h, c, f, r;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    i = e.ItemSubtypes
                }
                , function(e) {
                    n = e.EventDispatcher
                }
                , function(e) {
                    h = e.CombatEffectData
                }
                , function(e) {
                    c = e.HPVar
                }
                , function(e) {
                    f = e.VideoEvent
                }
                , function(e) {
                    r = e.FightData
                }
            ],
            execute: function() {
                s._RF.push({}, "4be3e6pyz5PtJGDR+PtbnMm", "ActionUseItemSegment", void 0);
                e("ActionUseItemSegment", function(e) {
                    function s() {
                        var t;
                        return (t = e.call(this) || this).aPet = void 0,
                            t.stagemc = void 0,
                            t.effect1 = void 0,
                            t.screen = void 0,
                            t.spiritUILeft = void 0,
                            t.spiritUIRight = void 0,
                            t.hpv = new c,
                            t.whereOffense = 0,
                            t.itemType = 0,
                            t.effectnm = 0,
                            t.dataObject = void 0,
                            t.uin = 0,
                            t.isSuccess = !0,
                            t.id = 0,
                            t.canceled = !1,
                            t.needEvent = new Array,
                            t.hasEvent = new Array,
                            t.effect1ed = !1,
                            t.aPeted = !1,
                            console.log("Segment初始化=>>"),
                            console.log("ActionUseItemSegment"),
                            t
                    }
                    t(s, e);
                    var n = s.prototype;
                    return n.ready = function() {
                        this.uin = this.dataObject.uin,
                            this.isSuccess = this.dataObject.isSuccess,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.whereOffense = this.aPet.getPosType(),
                            this.itemType = this.dataObject.itemType,
                            this.id = this.dataObject.id,
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense)
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
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                this.effect1 = this.screen.createVEffect(this.id, this.whereOffense),
                                this.effect1ed = !0,
                                this.effect1.spell(),
                                this.effect1.addActionListener(r.EEFFECTHIT, this.getEffectHit, this),
                                this.needEvent.push(r.EEFFECTHIT),
                                this.effect1.addActionListener(r.EEFFECTEND, this.getEffectEnd, this),
                                this.needEvent.push(r.EEFFECTEND),
                                this.getText()
                        }
                        ,
                        n.getText = function() {
                            var e;
                            this.whereOffense == r.POS_LEFT && (e = "<color=#A9D367>【" + r.OffenseCurrentSprite + "】</color>使用了"),
                            this.whereOffense == r.POS_RIGHT && (e = "<color=#A37EF8>【" + r.DefenseCurrentSprite + "】</color>使用了"),
                            1 == this.isSuccess && (this.itemType == i.COMBAT_HP && (e += "HP回复道具，HP值增加了！"),
                            this.itemType == i.COMBAT_PP && (e += "PP回复道具，PP值增加了！"),
                            this.itemType == i.COMBAT_RESTORE && (e += "状态恢复道具，所有状态恢复正常了！")),
                            0 == this.isSuccess && (this.itemType == h.RECOVER_LIFE && (e += "HP回复道具，可惜失败了！"),
                            this.itemType == h.RECOVER_PP && (e += "PP回复道具，可惜失败了！"),
                            this.itemType == h.RECOVER_STATE && (e += "状态恢复道具，可惜失败了！")),
                                this.screen.getCombatInfo().getTarget().htmlText += e,
                                console.log("战斗日志=>>" + e)
                        }
                        ,
                        n.getEffectHit = function(e) {
                            if (this.screen.getEffectsLayer().deleteAllNm(),
                                this.isSuccess) {
                                if (null != this.dataObject.hpVArr && this.dataObject.hpVArr.length > 0)
                                    for (var t = 0; t < this.dataObject.hpVArr.length; t++)
                                        if (0 != this.dataObject.hpVArr[t].hpV || 0 != this.dataObject.hpVArr[t].hpLeft || 0 != this.dataObject.hpVArr[t].hitTimes) {
                                            var s, i = this.dataObject.hpVArr[t].hpV;
                                            i < 0 && this.screen.getEffectsLayer().createHPNumber("" + i, 0, 1, this.whereOffense),
                                            i > 0 && this.screen.getEffectsLayer().createHPNumber("+" + i, 0, 2, this.whereOffense),
                                                s = this.dataObject.hpVArr[t].hpLeft,
                                                this.spiritUILeft.setHP(s)
                                        }
                            } else
                                this.screen.getEffectsLayer().createHPNumber("使用道具失败", 0, 4, this.whereOffense);
                            this.effect1.removeActionListener(r.EEFFECTHIT, this.getEffectHit, this),
                                this.delEvent(r.EEFFECTHIT)
                        }
                        ,
                        n.getDead2 = function(e) {
                            this.aPet.stopNull(),
                                this.aPet.removeActionListener(r.PDEAD, this.getDead2, this),
                                this.dispatchEvent(new f(f.ON_SEG_END))
                        }
                        ,
                        n.getEffectEnd = function(e) {
                            this.effect1.removeActionListener(r.EEFFECTEND, this.getEffectEnd, this),
                                this.delEvent(r.EEFFECTEND),
                                this.screen.removeVEffect(this.effect1),
                                this.effect1ed = !1,
                                this.dataObject.hpVArr && this.dataObject.hpVArr.length > 0 && this.dataObject.hpVArr[this.dataObject.hpVArr.length - 1].hpLeft <= 0 ? (this.aPet.dead(),
                                    this.aPet.addActionListener(r.PDEAD, this.getDead2, this)) : this.dispatchEvent(new f(f.ON_SEG_END))
                        }
                        ,
                        n.cancel = function() {
                            this.aPeted && this.aPet.stopNull(),
                            this.effect1ed && this.effect1 && (this.effect1.stopNull(),
                                this.screen.removeVEffect(this.effect1)),
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
                            this.screen.getEffectsLayer().deleteAllEffect(),
                                this.aPet = null,
                                this.stagemc = null,
                            this.effect1 && (this.effect1.removeActionListener(r.EEFFECTHIT, this.getEffectHit, this),
                                this.effect1.removeActionListener(r.EEFFECTEND, this.getEffectEnd, this)),
                                this.effect1 = null,
                                this.screen = null,
                                this.spiritUILeft = null,
                                this.spiritUIRight = null,
                                this.hpv = null,
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
