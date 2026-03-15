System.register("chunks:///_virtual/CombatPlayFightState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./CombatResType.ts", "./ToolTip.ts", "./CombatEvent.ts", "./SuccessorEvent.ts", "./CombatDefault.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./StateEvent.ts"], (function(t) {
        var e, o, s, a, i, n, c, h, m, l, S;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    s = t.__global
                }
                , function(t) {
                    a = t.CombatResType
                }
                , function(t) {
                    i = t.ToolTip
                }
                , function(t) {
                    n = t.CombatEvent
                }
                , function(t) {
                    c = t.SuccessorEvent
                }
                , function(t) {
                    h = t.CombatDefault
                }
                , function(t) {
                    m = t.CombatStates
                }
                , function(t) {
                    l = t.CombatStateBase
                }
                , function(t) {
                    S = t.StateEvent
                }
            ],
            execute: function() {
                o._RF.push({}, "94dbc+aMcBB3Zu04qKlTF/M", "CombatPlayFightState", void 0);
                t("CombatPlayFightState", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    e(o, t);
                    var l = o.prototype;
                    return l.execute = function() {
                        if (console.info(this.constructor.name + " == execute"),
                        this._combatSys.getState() == m.PLAY_RESULT || this._combatSys.getState() == m.WAITING_FIGHT || this._combatSys.getState() == m.PLAY_RESULT_END) {
                            CONFIG.DEBUG,
                                console.log("state [CombatPlayFightState] ", "一场精彩的战斗动画播放结束了！");
                            var t = this._data
                                , e = this._combatSys.getState();
                            console.info("CombatPlayFightState==execute==states==" + e),
                            e != m.PLAY_RESULT_END && (a.BAR_CAN_COMBAT = t.combatResInfo.canCombat,
                                console.info("CombatPlayFightState==BAR_CAN_COMBAT==" + t.combatResInfo.canCombat),
                                this._combatSys.getControllBar().setHandlerEnabled(!1),
                                console.error(this.constructor.name + " == showTimeBarTxt1==" + h.COMBAT_INFO_TXT2),
                                this._combatSys.getVideoModule().showTimeBarTxt(h.COMBAT_INFO_TXT2)),
                                this._combatSys.setState(m.WAITING_FIGHT),
                                console.log("serAttackResult.combatResInfo.finished==" + t.combatResInfo.finished),
                                t.combatResInfo.finished == h.RESULT_UNCLOSE ? e != m.PLAY_RESULT_END ? (console.log("CombatPlayFightState==execute==1"),
                                    this._combatSys.getDpModule().sendVideoPlayEnd(),
                                    this.dispatchEvent(new S(S.STATE_EVENT_END))) : (console.log("CombatPlayFightState==execute==2"),
                                    this.dispatchEvent(new S(S.STATE_EVENT_END))) : (console.log("CombatPlayFightState==execute==3"),
                                    console.error(this.constructor.name + " == showTimeBarTxt2==空"),
                                    this._combatSys.getVideoModule().showTimeBarTxt(""),
                                    this._combatSys.getSucessorModule().addEventListener(c.HIDE_PETS, this.hidePetsHandler, this),
                                    this._combatSys.getSucessorModule().handle = this.readyToExitCombat.bind(this),
                                    this._combatSys.getSucessorModule().data = t.combatResInfo),
                                CONFIG.DEBUG,
                                console.log("[CombatPlayFightState:] ", "***动画播放完毕****！", "finished:", t.combatResInfo.finished, "canCombat", t.combatResInfo.canCombat)
                        } else
                            this.dispatchEvent(new S(S.STATE_EVENT_END))
                    }
                        ,
                        l.hidePetsHandler = function(t) {
                            null != this._combatSys && (this._combatSys.getVideoModule().hidePetsHandler(),
                                console.error(this.constructor.name + " == showTimeBarTxt2==空"),
                                this._combatSys.getVideoModule().showTimeBarTxt(""),
                                t.currentTarget.removeEventListener(c.HIDE_PETS, this.hidePetsHandler, this),
                                t.target.removeEventListener(c.HIDE_PETS, this.hidePetsHandler, this))
                        }
                        ,
                        l.readyToExitCombat = function() {
                            console.log("readyToExitCombat==>战斗结束，退出战斗"),
                            null != this._combatSys && this._combatSys.getState() != m.WAITING_CALL && (CONFIG.DEBUG,
                                console.log("[CombatPlayFightState]", "战斗结果的显示结束！"),
                                this._combatSys.getSysApi().setRender(!0),
                                this._combatSys.getSysApi().getExternalAPI().setFrameRate(),
                            this._combatSys.getStageContainer() && this._combatSys.getCombatStage() && this._combatSys.getCombatStage().parent == this._combatSys.getStageContainer() && (this._combatSys.getStageContainer().removeChild(this._combatSys.getCombatStage()),
                                s.MainRoleData.isInBombat = !1),
                                this._combatSys.getResModule().removeAllRes(),
                                this._combatSys.getDpModule().reset(),
                                this._combatSys.getVideoModule().reset(),
                                this._combatSys.getControllBar().reset(),
                                this._combatSys.callHandler(this._data.combatResInfo),
                                this._combatSys.getAudioPlayer().stop(),
                                this._combatSys.getSysApi().getMediaSysAPI().getBGAudio().play(),
                                this._combatSys.setState(m.WAITING_CALL),
                                this._combatSys.dispatchEvent(new n(n.ON_RESULT_END)),
                                i.getInstance().hiddenTips(),
                                this.dispatchEvent(new S(S.STATE_EVENT_END)))
                        }
                        ,
                        o
                }(l));
                o._RF.pop()
            }
        }
    }
));
