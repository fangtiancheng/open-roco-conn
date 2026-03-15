System.register("chunks:///_virtual/TaskBuilder.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./DialogContentDefine.ts", "./CatchSpiritScript.ts", "./EvolutionScript.ts", "./FightLoseScript.ts", "./FightWinScript.ts", "./FlightScript.ts", "./GetExpScript.ts", "./GetNewSkillTipScript.ts", "./LevelUpScript.ts", "./SkillChangeScript.ts", "./SpiritInfoSearch.ts"], (function(t) {
        var i, e, n, s, r, l, p, c, o, a, u, h, f, S;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.EventDispatcher
                }
                , function(t) {
                    s = t.DialogContentDefine
                }
                , function(t) {
                    r = t.CatchSpiritScript
                }
                , function(t) {
                    l = t.EvolutionScript
                }
                , function(t) {
                    p = t.FightLoseScript
                }
                , function(t) {
                    c = t.FightWinScript
                }
                , function(t) {
                    o = t.FlightScript
                }
                , function(t) {
                    a = t.GetExpScript
                }
                , function(t) {
                    u = t.GetNewSkillTipScript
                }
                , function(t) {
                    h = t.LevelUpScript
                }
                , function(t) {
                    f = t.SkillChangeScript
                }
                , function(t) {
                    S = t.SpiritInfoSearch
                }
            ],
            execute: function() {
                e._RF.push({}, "11021QwXOROiLHEzW4AZgYj", "TaskBuilder", void 0);
                t("TaskBuilder", function(t) {
                    function e(i) {
                        var e;
                        return (e = t.call(this) || this)._system = void 0,
                            e
                    }
                    i(e, t);
                    var n = e.prototype;
                    return n.initialize = function(t) {
                        this._system = t
                    }
                        ,
                        n.getScriptList = function(t) {
                            var i, e, n = t, s = [];
                            return i = this.processFinished(n.combatType, n.finished, n.spiritPropsVar, n.spiritInfos, n.trainerExp, n.nextLevelTrainerExp),
                            null != n.spiritPropsVar && (e = this.processExp(n.spiritPropsVar, n.version, n.type, n.combatType, n.finished, n.trainerExp, n.nextLevelTrainerExp, n.expAddBits)),
                            null != i && s.push(i),
                            null != e && (s = s.concat(e)),
                                s
                        }
                        ,
                        n.processFinished = function(t, i, e, n, l, a) {
                            var u, h, f, S, g;
                            if (1 == i)
                                return (u = new p).initialize(this._system),
                                    u.setData(t, s.LOSE),
                                    u;
                            if (2 == i) {
                                if (n && n.length > 0)
                                    return (h = new r).initialize(this._system),
                                        h.setData(n),
                                        h;
                                for (var v = 0; v < e.length; v++)
                                    if ((g = e[v]).exp > 0 || g.deffort > 0)
                                        return f;
                                return (f = new c).initialize(this._system),
                                    f.setData(t, s.WIN),
                                    f
                            }
                            return 3 == i ? ((S = new o).initialize(this._system),
                                S) : null
                        }
                        ,
                        n.processExp = function(t, i, e, n, s, r, p, c) {
                            var o, S, g, v, d, y;
                            (g = new a).initialize(this._system);
                            for (var w, x = [], m = [], D = [], E = [], _ = 0; _ < t.length; _++)
                                ((w = t[_]).exp > 0 || w.deffort > 0) && m.push(w),
                                w.dLevel > 0 && ((o = new h).initialize(this._system),
                                    o.setData(w),
                                    D.push(o),
                                (y = this.getSpiritInfoSkill(w)) && y.length > 0 && ((d = new u).initialize(this._system),
                                    d.setData(w, y),
                                    D.push(d)),
                                w.newSKills && w.newSKills.length > 0 && ((S = new f).initialize(this._system),
                                    S.setData(w, i),
                                    D.push(S))),
                                w.evolveSpiritId > 0 && E.push(w);
                            return (v = new l).initialize(this._system),
                                v.setData(E, e),
                                g.setData(m, e, n, s, r, p, c),
                            m.length > 0 && x.push(g),
                                x = x.concat(D),
                            E.length > 0 && x.push(v),
                                x
                        }
                        ,
                        n.getSpiritInfoSkill = function(t) {
                            for (var i, e, n = S.getInstance().getOwnSpiritInfo(t.index), s = [], r = 0; r < t.currentSkills.length; r++)
                                i = n.skills[r],
                                    e = t.currentSkills[r],
                                null == i && e.id > 0 && s.push(e);
                            return s
                        }
                        ,
                        e
                }(n));
                e._RF.pop()
            }
        }
    }
));
