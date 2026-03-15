System.register("chunks:///_virtual/CombatWaitingState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatType.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./StateEvent.ts"], (function(t) {
        var a, e, o, s, n, i;
        return {
            setters: [function(t) {
                a = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.CombatType
                }
                , function(t) {
                    s = t.CombatStates
                }
                , function(t) {
                    n = t.CombatStateBase
                }
                , function(t) {
                    i = t.StateEvent
                }
            ],
            execute: function() {
                e._RF.push({}, "f7290P9IZdPoaKmiXH5bmal", "CombatWaitingState", void 0);
                t("CombatWaitingState", function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    a(e, t);
                    var n = e.prototype;
                    return n.execute = function() {
                        console.info(this.constructor.name + " == execute"),
                            CONFIG.DEBUG,
                            console.log("state [CombatWaitingState] ", "向服务端请求开始战斗！"),
                        this._combatSys.getOpenCombatData().combatType != o.M_PVP && this._combatSys.getOpenCombatData().combatType != o.H_PVB && this._combatSys.getOpenCombatData().combatType != o.PVP && this._combatSys.getOpenCombatData().combatType != o.PVT && this.setWaiting(),
                            this._combatSys.getDpModule().setPlugin(this._combatSys),
                        this._combatSys.getOpenCombatData().isWait || this._combatSys.getDpModule().requestStart(this._combatSys.getOpenCombatData().opponentID, this._combatSys.getOpenCombatData().combatType, this._combatSys.getOpenCombatData().catchTime),
                            this._combatSys.setState(s.WAITING_START),
                            this.dispatchEvent(new i(i.STATE_EVENT_END))
                    }
                        ,
                        n.setWaiting = function() {
                            this._combatSys.getCommUI()
                        }
                        ,
                        e
                }(n));
                e._RF.pop()
            }
        }
    }
));
