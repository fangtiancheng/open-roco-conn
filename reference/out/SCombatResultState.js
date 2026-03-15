System.register("chunks:///_virtual/SCombatResultState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelCombatVideo.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./StateEvent.ts", "./CombatPlayFightState.ts"], (function(e) {
        var t, o, i, a, s, r, n, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    o = e.createForOfIteratorHelperLoose
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    a = e.AngelCombatVideo
                }
                , function(e) {
                    s = e.CombatStates
                }
                , function(e) {
                    r = e.CombatStateBase
                }
                , function(e) {
                    n = e.StateEvent
                }
                , function(e) {
                    l = e.CombatPlayFightState
                }
            ],
            execute: function() {
                i._RF.push({}, "f00970fKB5K7YVsP6VZBBP4", "SCombatResultState", void 0);
                e("SCombatResultState", function(e) {
                    function i() {
                        var t;
                        return (t = e.call(this) || this).baseBuffArr = [{
                            proper: "pa",
                            name: "物攻",
                            icon: 99,
                            level: 0
                        }, {
                            proper: "pd",
                            name: "物防",
                            icon: 98,
                            level: 0
                        }, {
                            proper: "ma",
                            name: "魔攻",
                            icon: 97,
                            level: 0
                        }, {
                            proper: "md",
                            name: "魔防",
                            icon: 96,
                            level: 0
                        }, {
                            proper: "ve",
                            name: "速度",
                            icon: 95,
                            level: 0
                        }, {
                            proper: "sp",
                            name: "命中",
                            icon: 94,
                            level: 0
                        }, {
                            proper: "dp",
                            name: "回避",
                            icon: 93,
                            level: 0
                        }, {
                            proper: "crit",
                            name: "暴击",
                            icon: 92,
                            level: 0
                        }],
                            t
                    }
                    t(i, e);
                    var r = i.prototype;
                    return r.execute = function() {
                        if (console.info(this.constructor.name + " == execute"),
                            CONFIG.DEBUG,
                            console.log('state [CombatResultState] ", "收到对战数据，开始播放战斗动画！' + this._data),
                        null == this._combatSys)
                            return console.info(this.constructor.name + " == execute1"),
                                void this.dispatchEvent(new n(n.STATE_EVENT_END));
                        var e = this._data;
                        if (e.combatResInfo.combatType = this._combatSys.getOpenCombatData().combatType,
                        0 == e.attackList.length)
                            return console.info(this.constructor.name + " == execute2"),
                                this._combatSys.addEventListener(n.ALL_VIDEO_END, this.allVideoEndHandler, this),
                                this._combatSys.setState(s.PLAY_RESULT),
                                void this._combatSys.onVideoPlayEnd();
                        this._combatSys.getCurrCombatData().changeSpiritHandler = this.changeSpiritHandler.bind(this),
                            this._combatSys.addEventListener(n.ALL_VIDEO_END, this.allVideoEndHandler, this),
                            this._combatSys.getVideoModule().playCombatRecord(e, a.VIDEO_COMBAT_PROCESS),
                            console.error(this.constructor.name + " == showTimeBarTxt==空"),
                            this._combatSys.getVideoModule().showTimeBarTxt(""),
                            this._combatSys.getVideoModule().round = e.round + 1,
                            this._combatSys.getVideoModule().videoScreen.getSpiritUI(0).catchRate(e.spirit0CaptureRatio),
                            this._combatSys.getVideoModule().videoScreen.getSpiritUI(1).catchRate(e.spirit1CaptureRatio),
                            e.spirit0UID == this._combatSys.getCurrCombatData().myInfo.id ? (this.setBaseBuff(0, e.spirit0BaseProperties),
                                this.setBaseBuff(1, e.spirit1BaseProperties)) : (this.setBaseBuff(1, e.spirit0BaseProperties),
                                this.setBaseBuff(0, e.spirit1BaseProperties)),
                            this._combatSys.setState(s.PLAY_RESULT)
                    }
                        ,
                        r.setBaseBuff = function(e, t) {
                            for (var i, a = "", s = o(this.baseBuffArr); !(i = s()).done; ) {
                                var r = i.value;
                                if (r.level = t[r.proper],
                                0 == r.level)
                                    this._combatSys.getVideoModule().videoScreen.getSpiritUI(e).removeBuff(r.icon);
                                else {
                                    if (r.level > 6 && (r.level = 6),
                                    "sp" != r.proper && r.level < -6 && (r.level = -6),
                                    "sp" == r.proper && r.level < -12 && (r.level = -12),
                                    "crit" == r.proper && r.level > 1 && (r.level = 2),
                                    "crit" == r.proper && r.level < 2 && (r.level = 1),
                                    "crit" == r.proper && 1 == r.level)
                                        return void this._combatSys.getVideoModule().videoScreen.getSpiritUI(e).removeBuff(r.icon);
                                    a = "宠物的" + r.name + (r.level < 0 ? "值削弱" : "值强化") + "到" + r.level + "级",
                                        this._combatSys.getVideoModule().videoScreen.getSpiritUI(e).removeBuff(r.icon),
                                        this._combatSys.getVideoModule().videoScreen.getSpiritUI(e).addBuff(r.icon, a)
                                }
                            }
                            console.log("属性变化：" + [r])
                        }
                        ,
                        r.changeSpiritHandler = function() {
                            null != this._combatSys && (this._combatSys.getControllBar().update(),
                                this._combatSys.getCurrCombatData().changeSpiritHandler = null)
                        }
                        ,
                        r.allVideoEndHandler = function(e) {
                            console.log("SCombatResultState==>>ALL_VIDEO_END"),
                                this._combatSys.removeEventListener(n.ALL_VIDEO_END, this.allVideoEndHandler, this);
                            var t = new l;
                            t.data = this._data,
                                this._combatSys.getStateTask().pushTask(t),
                                this.dispatchEvent(new n(n.STATE_EVENT_END))
                        }
                        ,
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
