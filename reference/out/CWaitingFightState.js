System.register("chunks:///_virtual/CWaitingFightState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatControlBarCommands.ts", "./CombatDefault.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./StateEvent.ts"], (function(t) {
        var e, o, a, s, n, i, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    a = t.CombatControlBarCommands
                }
                , function(t) {
                    s = t.CombatDefault
                }
                , function(t) {
                    n = t.CombatStates
                }
                , function(t) {
                    i = t.CombatStateBase
                }
                , function(t) {
                    c = t.StateEvent
                }
            ],
            execute: function() {
                o._RF.push({}, "f97309gwwNPdbI/kbOUVE0j", "CWaitingFightState", void 0);
                t("CWaitingFightState", function(t) {
                    function o() {
                        return t.call(this) || this
                    }
                    return e(o, t),
                        o.prototype.execute = function() {
                            console.info(this.constructor.name + " == execute"),
                                this._combatSys.getState() == n.WAITING_FIGHT || this._combatSys.getState() == n.PLAY_MY_CHANGE_SPIRITE || this._combatSys.getState() == n.PLAY_OTHER_CHANGE_SPIRITE ? (CONFIG.DEBUG,
                                    console.log("state [CWaitingFightState] ", "我选择了一招，等待对方回应！"),
                                    this._combatSys.getDpModule().sendUseSkill(this._data.type, this._data.index, this._data.id),
                                    this._combatSys.getControllBar().setHandlerEnabled(!1),
                                    this._combatSys.getControllBar().select(a.ATTACK),
                                    console.error(this.constructor.name + " == setHandleGray--true"),
                                    this._combatSys.getControllBar().setHandleGray(a.ESCAPE, !0),
                                    console.error("CWaitingFightState-execute-等待对方出招"),
                                    console.error(this.constructor.name + " == showTimeBarTxt==" + s.COMBAT_INFO_TXT1),
                                    this._combatSys.getVideoModule().showTimeBarTxt(s.COMBAT_INFO_TXT1),
                                    this._combatSys.setState(n.WAITING_RESULT),
                                    this.dispatchEvent(new c(c.STATE_EVENT_END))) : this.dispatchEvent(new c(c.STATE_EVENT_END))
                        }
                        ,
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
