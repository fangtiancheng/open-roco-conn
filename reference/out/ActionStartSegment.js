System.register("chunks:///_virtual/ActionStartSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts", "./FightData.ts"], (function(t) {
        var e, i, s, n, a;
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
                    a = t.FightData
                }
            ],
            execute: function() {
                i._RF.push({}, "157fa7QAMlGtYSwA6QISEhE", "ActionStartSegment", void 0);
                t("ActionStartSegment", function(t) {
                    function i() {
                        var e;
                        return (e = t.call(this) || this).aPet = void 0,
                            e.bPet = void 0,
                            e.screen = void 0,
                            e.stagemc = void 0,
                            e.tempEffect = void 0,
                            e.spiritUILeft = void 0,
                            e.spiritUIRight = void 0,
                            e.effectnm = 0,
                            e.dataObject = void 0,
                            e.offenseID = 0,
                            e.defenseID = 0,
                            e.offenseIndex = 0,
                            e.defenseIndex = 0,
                            e.offenseUin = 0,
                            e.defenseUin = 0,
                            e.bType = 0,
                            e.canceled = !1,
                            e.needEvent = new Array,
                            e.hasEvent = new Array,
                            e.aPeted = !1,
                            e.bPeted = !1,
                            e.tempEffected = !1,
                            console.log("Segment初始化=>>"),
                            console.log("ActionStartSegment"),
                            e
                    }
                    e(i, t);
                    var s = i.prototype;
                    return s.ready = function() {
                        this.offenseID = this.dataObject.myCurSpirit.id,
                            this.defenseID = this.dataObject.opponentSpirit.id,
                            this.offenseIndex = this.dataObject.myCurSpirit.index,
                            this.defenseIndex = this.dataObject.opponentSpirit.index,
                            this.offenseUin = this.dataObject.selfInfo.id,
                            this.defenseUin = this.dataObject.opponentInfo.id,
                            a.OffenseUin = this.offenseUin,
                            a.DefenseUin = this.defenseUin,
                            a.OffenseName = this.dataObject.selfInfo.nickName,
                            a.DefenseName = this.dataObject.opponentInfo.nickName,
                            a.OffenseCurrentSprite = this.dataObject.myCurSpirit.spiritDes.name,
                            a.DefenseCurrentSprite = this.dataObject.opponentSpirit.spiritDes.name,
                            this.bType = this.dataObject.opponentInfo.type,
                            this.spiritUILeft = this.screen.getSpiritUI(a.POS_LEFT),
                            this.spiritUIRight = this.screen.getSpiritUI(a.POS_RIGHT);
                        var t = this.dataObject.myCurSpirit;
                        this.spiritUILeft.setSpiritInfo(t);
                        var e = this.dataObject.opponentSpirit;
                        this.spiritUIRight.setSpiritInfo(e, t.level);
                        var i = this.dataObject.myCurSpirit.maxHP;
                        this.spiritUILeft.setMaxHP(i);
                        var s = this.dataObject.myCurSpirit.curHP;
                        this.spiritUILeft.setHP(s);
                        var n = this.dataObject.opponentSpirit.maxHP;
                        this.spiritUIRight.setMaxHP(n);
                        var h = this.dataObject.opponentSpirit.curHP;
                        this.spiritUIRight.setHP(h),
                            this.spiritUILeft.setAvataInfo(this.dataObject.selfInfo, this.dataObject.combatType, this.dataObject.selfInfo.nickName),
                            this.spiritUIRight.setAvataInfo(this.dataObject.opponentInfo, this.dataObject.combatType, this.dataObject.opponentInfo.nickName),
                            this.screen.getCombatInfo().reset(),
                            this.screen.showUI(!1)
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
                        s.getText = function() {
                            var t = "<color=#FF5644>【" + a.OffenseName + "】</color>召唤了<color=#A9D367>【" + a.OffenseCurrentSprite + "】</color>!";
                            this.screen.getCombatInfo().getTarget().htmlText += t,
                                console.log("战斗日志=>>" + t)
                        }
                        ,
                        s.start = function() {
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                this.screen.updateSpiritsState(),
                                0 != this.dataObject.myCurSpirit.skinID ? this.aPet = this.screen.createVSpirit(this.dataObject.myCurSpirit.skinID, this.offenseUin, a.POS_LEFT) : this.aPet = this.screen.createVSpirit(this.offenseID, this.offenseUin, a.POS_LEFT),
                                this.aPeted = !0,
                                this.aPet.appear(),
                                this.aPet.addActionListener(a.PAPPEAR, this.getAAppear, this),
                                this.needEvent.push(a.PAPPEAR),
                                this.effectnm++,
                                0 != this.dataObject.opponentSpirit.skinID ? this.bPet = this.screen.createVSpirit(this.dataObject.opponentSpirit.skinID, this.defenseUin, a.POS_RIGHT) : this.bPet = this.screen.createVSpirit(this.defenseID, this.defenseUin, a.POS_RIGHT),
                                this.bPeted = !0,
                                this.bPet.appear(),
                                this.bPet.addActionListener(a.PAPPEAR, this.getBAppear, this),
                                this.needEvent.push(a.PAPPEAR),
                                this.effectnm++
                        }
                        ,
                        s.getAAppear = function(t) {
                            if (this.effectnm--,
                            this.aPet && (this.aPet.removeActionListener(a.PAPPEAR, this.getAAppear, this),
                                this.aPet.idle()),
                                this.delEvent(a.PAPPEAR),
                            this.effectnm <= 0)
                                return this.screen.showUI(!0),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        s.getBAppear = function(t) {
                            if (console.log("getBAppear==effectnm==" + this.effectnm),
                                this.effectnm--,
                                this.bPet.idle(),
                                this.bPet.removeActionListener(a.PAPPEAR, this.getBAppear, this),
                                this.delEvent(a.PAPPEAR),
                            this.effectnm <= 0)
                                return this.screen.showUI(!0),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        s.getASTB = function(t) {
                            if (console.log("getASTB====effectnm==" + this.effectnm),
                                this.effectnm--,
                                this.aPet.idle(),
                                this.aPet.removeActionListener(a.PSTB, this.getASTB, this),
                                this.delEvent(a.PSTB),
                            this.effectnm <= 0)
                                return this.screen.showUI(!0),
                                    void this.dispatchEvent(new n(n.ON_SEG_END))
                        }
                        ,
                        s.cancel = function() {
                            this.aPeted && this.aPet.stopNull(),
                            this.bPeted && this.bPet.stopNull(),
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
                            this.screen.getEffectsLayer().deleteAllNm(),
                                this.screen.getEffectsLayer().deleteAllEffect(),
                                this.aPet = null,
                                this.bPet = null,
                                this.screen = null,
                                this.stagemc = null,
                                this.tempEffect = null,
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
