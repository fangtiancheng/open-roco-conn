System.register("chunks:///_virtual/ActionChangeNormalFormSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, i, s, n, o;
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
                    n = t.VideoEvent
                }
                , function(t) {
                    o = t.FightData
                }
            ],
            execute: function() {
                i._RF.push({}, "702a6rrVTdAG7vLGS2C7tWL", "ActionChangeNormalFormSegment", void 0);
                t("ActionChangeNormalFormSegment", function(t) {
                    function i(e) {
                        var i;
                        return (i = t.call(this) || this).aPet = void 0,
                            i.screen = void 0,
                            i.effectnm = 0,
                            i.spiritUILeft = void 0,
                            i.dataObject = void 0,
                            i.uin = 0,
                            i.skillDec = void 0,
                            i.posType = 0,
                            i.whereOffense = 0,
                            i.canceled = !1,
                            i.needEvent = new Array,
                            i.hasEvent = new Array,
                            i.aPeted = !1,
                            i.aPetSpiritInfo = void 0,
                            console.log("Segment初始化=>>"),
                            console.log("ActionChangeNormalFormSegment"),
                            i
                    }
                    e(i, t);
                    var s = i.prototype;
                    return s.ready = function() {
                        this.dataObject.spirit.superFormId = 0,
                            this.uin = this.dataObject.uin,
                            this.skillDec = this.dataObject.skillDec,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.aPeted = !0,
                            this.posType = this.aPet.getPosType(),
                            this.whereOffense = this.aPet.getPosType(),
                            this.spiritUILeft = this.screen.getSpiritUI(this.whereOffense),
                            this.aPetSpiritInfo = this.dataObject.spirit
                    }
                        ,
                        s.setData = function(t) {
                            this.dataObject = t
                        }
                        ,
                        s.setScreen = function(t) {
                            this.screen = t
                        }
                        ,
                        s.start = function() {
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                this.aPet.antiTransform(),
                                this.aPet.addActionListener(o.PANTITRANSFORM, this.getANTITRANSFORM, this),
                                this.needEvent.push(o.PANTITRANSFORM)
                        }
                        ,
                        s.getANTITRANSFORM = function(t) {
                            this.aPet.removeActionListener(o.PANTITRANSFORM, this.getANTITRANSFORM, this),
                                this.delEvent(o.PANTITRANSFORM),
                                this.aPet.stopNull(),
                                this.screen.removeVSpirit(this.uin),
                                this.aPeted = !1,
                                this.screen.updateSpiritsState(),
                                0 != this.aPetSpiritInfo.skinID ? this.aPet = this.screen.createVSpirit(this.aPetSpiritInfo.skinID, this.uin, this.posType, 1) : this.aPet = this.screen.createVSpirit(this.aPetSpiritInfo.id, this.uin, this.posType, 1),
                                this.aPet.idle(),
                                this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        s.getText = function() {
                            var t;
                            this.whereOffense == o.POS_LEFT && (t = "<color=#FF5644>【" + o.OffenseName + "】</color>恢复了<color=#A9D367>普通形态</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)),
                            this.whereOffense == o.POS_RIGHT && (t = "<color=#FF5644>【" + o.DefenseName + "】</color>恢复了<color=#A37EF8>普通形态</color>！",
                                this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t))
                        }
                        ,
                        s.cancel = function() {
                            this.aPeted && this.aPet.stopNull(),
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
                            this.screen.hasVSpirit(this.uin) || (0 != this.aPetSpiritInfo.skinID ? this.aPet = this.screen.createVSpirit(this.aPetSpiritInfo.skinID, this.uin, this.posType, 1) : this.aPet = this.screen.createVSpirit(this.aPetSpiritInfo.id, this.uin, this.posType, 1)),
                            this.aPet && (this.aPet.idle(),
                                this.aPet.removeActionListener(o.PANTITRANSFORM, this.getANTITRANSFORM, this)),
                                this.aPet = null,
                                this.screen = null,
                                this.spiritUILeft = null,
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
