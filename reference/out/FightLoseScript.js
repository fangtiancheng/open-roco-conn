System.register("chunks:///_virtual/FightLoseScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatType.ts", "./DispatchManager.ts", "./AScript.ts", "./SuccessorEvent.ts", "./UIMediator.ts"], (function(t) {
        var e, i, o, s, r, n, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.CombatType
                }
                , function(t) {
                    s = t.DispatchManager
                }
                , function(t) {
                    r = t.AScript
                }
                , function(t) {
                    n = t.SuccessorEvent
                }
                , function(t) {
                    a = t.UIMediator
                }
            ],
            execute: function() {
                i._RF.push({}, "534948a0k9GrbiUGjTnLs1V", "FightLoseScript", void 0);
                t("FightLoseScript", function(t) {
                    function i(e) {
                        var i;
                        return void 0 === e && (e = null),
                            (i = t.call(this, e) || this)._currentMediator = void 0,
                            i._loseMediator = void 0,
                            i._loseMediatorPK = void 0,
                            i.m_combatType = 0,
                            i._name = "战败",
                            i._loseMediator = a.getInstance().getMediator(a.LOSE),
                            i._loseMediatorPK = a.getInstance().getMediator(a.PKLOSE),
                            i
                    }
                    e(i, t);
                    var r = i.prototype;
                    return r.setData = function(t, e) {
                        this.m_combatType = t,
                            t == o.PVP || t == o.PVT || t == o.L_PVP || t == o.MATCH_PVP || t == o.D_PVP ? (this._currentMediator = this._loseMediatorPK,
                                this._loseMediatorPK.data = this._system.getOpenCombatData()) : (this._currentMediator = this._loseMediator,
                                this._loseMediator.text = e,
                                t == o.WAR_FIGHT ? this._loseMediator.setType(2) : this._loseMediator.setType(1))
                    }
                        ,
                        r.over = function(e) {
                            t.prototype.over.call(this),
                                this._currentMediator.hide(),
                                this._currentMediator.removeEventListener(n.LOSE_SURE, this.over, this),
                            this.m_combatType == o.WAR_FIGHT && s.dispatch("Combat.over", !0),
                                this._loseMediator.setType(1)
                        }
                        ,
                        r.execute = function() {
                            console.log(this.constructor.name + "==execute"),
                                this._currentMediator.addEventListener(n.LOSE_SURE, this.over, this),
                                this._currentMediator.bringToFront(),
                                this._currentMediator.ishow(),
                                this._system.getSysApi().getMediaSysAPI().getEAudioManager().playEAudio(12)
                        }
                        ,
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
