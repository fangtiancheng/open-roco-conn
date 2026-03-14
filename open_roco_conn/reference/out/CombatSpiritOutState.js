System.register("chunks:///_virtual/CombatSpiritOutState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatResType.ts", "./CombatControlBarCommands.ts", "./CombatDefault.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./CombatStateUtil.ts", "./StateEvent.ts"], (function(t) {
        var o, a, e, n, s, i, r, c, m;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    e = t.CombatResType
                }
                , function(t) {
                    n = t.CombatControlBarCommands
                }
                , function(t) {
                    s = t.CombatDefault
                }
                , function(t) {
                    i = t.CombatStates
                }
                , function(t) {
                    r = t.CombatStateBase
                }
                , function(t) {
                    c = t.CombatStateUtil
                }
                , function(t) {
                    m = t.StateEvent
                }
            ],
            execute: function() {
                a._RF.push({}, "7b57bUTEY5KY5BkVUbWo4Eg", "CombatSpiritOutState", void 0);
                t("CombatSpiritOutState", function(t) {
                    function a() {
                        return t.call(this) || this
                    }
                    return o(a, t),
                        a.prototype.execute = function() {
                            console.info(this.constructor.name + " == execute"),
                                CONFIG.DEBUG,
                                console.log("state [CombatSpiritOutState] ", "所有精灵的出场动画播放完毕！"),
                                this._combatSys.getControllBar().select(n.ATTACK),
                                console.info("CombatSpiritOutState1==controllCombatBar==" + this._combatSys.getCurrCombatData().canCombat),
                                c.controllCombatBar(this._combatSys.getCurrCombatData().canCombat, this._combatSys.getControllBar()),
                                this._combatSys.getVideoModule().addTimerBar(this._combatSys.timeEndHandler.bind(this._combatSys), s.COUNT_TIMES),
                                console.info("CombatSpiritOutState2==controllCombatBar==" + e.BAR_CAN_COMBAT),
                                c.controllCombatBar(e.BAR_CAN_COMBAT, this._combatSys.getControllBar()),
                                this._combatSys.getControllBar().setHandlerEnabled(!0),
                                this._combatSys.setState(i.WAITING_FIGHT),
                                this.dispatchEvent(new m(m.STATE_EVENT_END))
                        }
                        ,
                        a
                }(r));
                a._RF.pop()
            }
        }
    }
));
