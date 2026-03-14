System.register("chunks:///_virtual/SCombatMovieEndState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatResType.ts", "./CombatDefault.ts", "./CombatStateBase.ts", "./CombatStateUtil.ts", "./StateEvent.ts"], (function(t) {
        var e, o, n, a, i, s, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    n = t.CombatResType
                }
                , function(t) {
                    a = t.CombatDefault
                }
                , function(t) {
                    i = t.CombatStateBase
                }
                , function(t) {
                    s = t.CombatStateUtil
                }
                , function(t) {
                    c = t.StateEvent
                }
            ],
            execute: function() {
                o._RF.push({}, "4e83ferFkhGeYjiwgXc5OYs", "SCombatMovieEndState", void 0);
                t("SCombatMovieEndState", function(t) {
                    function o() {
                        return t.call(this) || this
                    }
                    return e(o, t),
                        o.prototype.execute = function() {
                            console.info(this.constructor.name + " == execute"),
                                CONFIG.DEBUG,
                                console.log("state [SCombatMovieEndState] ", "收到全部战斗动画播放完毕的消息！"),
                                this._combatSys.getControllBar().setHandlerEnabled(!0),
                                console.info("SCombatMovieEndState==controllCombatBar==" + n.BAR_CAN_COMBAT),
                                s.controllCombatBar(n.BAR_CAN_COMBAT, this._combatSys.getControllBar()),
                                this._combatSys.getVideoModule().addTimerBar(this._combatSys.timeEndHandler.bind(this._combatSys), a.COUNT_TIMES),
                                this.dispatchEvent(new c(c.STATE_EVENT_END))
                        }
                        ,
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
