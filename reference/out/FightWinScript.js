System.register("chunks:///_virtual/FightWinScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatType.ts", "./DispatchManager.ts", "./AScript.ts", "./SuccessorEvent.ts", "./UIMediator.ts"], (function(t) {
        var e, i, r, n, o, s, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.CombatType
                }
                , function(t) {
                    n = t.DispatchManager
                }
                , function(t) {
                    o = t.AScript
                }
                , function(t) {
                    s = t.SuccessorEvent
                }
                , function(t) {
                    c = t.UIMediator
                }
            ],
            execute: function() {
                i._RF.push({}, "3b17eZwrXFKjr2e2n4mI90Q", "FightWinScript", void 0);
                t("FightWinScript", function(t) {
                    function i(e) {
                        var i;
                        return void 0 === e && (e = null),
                            (i = t.call(this, e) || this)._currentMediator = void 0,
                            i._fightWinMediatorPK = void 0,
                            i.m_combatType = 0,
                            i._name = "战胜",
                            i._fightWinMediatorPK = c.getInstance().getMediator(c.PKVICTORY),
                            i
                    }
                    e(i, t);
                    var o = i.prototype;
                    return o.over = function(e) {
                        t.prototype.over.call(this),
                            this._currentMediator.hide(),
                            this._currentMediator.removeEventListener(s.VICTORY_SURE, this.over, this),
                        this.m_combatType == r.WAR_FIGHT && n.dispatch("Combat.over", !0)
                    }
                        ,
                        o.execute = function() {
                            console.log(this.constructor.name + "==execute"),
                                this._currentMediator.addEventListener(s.VICTORY_SURE, this.over, this),
                                this._currentMediator.bringToFront(),
                                this._currentMediator.ishow(),
                                this._system.getSysApi().getMediaSysAPI().getEAudioManager().playEAudio(11)
                        }
                        ,
                        o.setData = function(t, e) {
                            this.m_combatType = t,
                            t == r.PVP || r.PVT,
                                this._currentMediator = this._fightWinMediatorPK,
                                this._fightWinMediatorPK.data = this._system.getOpenCombatData()
                        }
                        ,
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
