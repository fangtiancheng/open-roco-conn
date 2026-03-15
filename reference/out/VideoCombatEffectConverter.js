System.register("chunks:///_virtual/VideoCombatEffectConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PReadHelp.ts", "./CombatEffectData.ts", "./ActionEffectSegment.ts", "./EffectVo.ts", "./VideoConverterBase.ts"], (function(t) {
        var e, s, r, o, n, p, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    r = t.PReadHelp
                }
                , function(t) {
                    o = t.CombatEffectData
                }
                , function(t) {
                    n = t.ActionEffectSegment
                }
                , function(t) {
                    p = t.EffectVo
                }
                , function(t) {
                    a = t.VideoConverterBase
                }
            ],
            execute: function() {
                s._RF.push({}, "da646uCEPpIGLT+XZfYFSYp", "VideoCombatEffectConverter", void 0);
                t("VideoCombatEffectConverter", function(t) {
                    function s() {
                        return t.call(this) || this
                    }
                    e(s, t);
                    var a = s.prototype;
                    return a.getSegments = function() {
                        return this.getAEffectSegments(this._data)
                    }
                        ,
                        a.getAEffectSegments = function(t) {
                            CONFIG.DEBUG,
                                console.log("[VideoConverter] ", "处理一个效果的动画！", t.proVars.toString());
                            var e = [];
                            return null == t.proVars ? null : (2 != this._combatData.combatEFType ? (t.proVars.md > 0 ? e.push(this.getAEffectSegment(t, o.MAGICRESIST_UP)) : t.proVars.md < 0 && e.push(this.getAEffectSegment(t, o.MAGICRESIST_DOWN)),
                                t.proVars.pa > 0 ? e.push(this.getAEffectSegment(t, o.ATTACK_UP)) : t.proVars.pa < 0 && e.push(this.getAEffectSegment(t, o.ATTACK_DOWN)),
                                t.proVars.sp > 0 ? e.push(this.getAEffectSegment(t, o.HITRAT_UP)) : t.proVars.sp < 0 && e.push(this.getAEffectSegment(t, o.HITRAT_DOWN)),
                                t.proVars.ma > 0 ? e.push(this.getAEffectSegment(t, o.MAGICATTACK_UP)) : t.proVars.ma < 0 && e.push(this.getAEffectSegment(t, o.MAGICATTACK_DOWN)),
                                t.proVars.dp > 0 ? e.push(this.getAEffectSegment(t, o.DODGE_UP)) : t.proVars.dp < 0 && e.push(this.getAEffectSegment(t, o.DODGE_DOWN)),
                                t.proVars.ve > 0 ? e.push(this.getAEffectSegment(t, o.RACE_UP)) : t.proVars.ve < 0 && e.push(this.getAEffectSegment(t, o.RACE_DOWN)),
                                t.proVars.pd > 0 ? e.push(this.getAEffectSegment(t, o.DEFEND_UP)) : t.proVars.pd < 0 && e.push(this.getAEffectSegment(t, o.DEFEND_DOWN))) : 2 == this._combatData.combatEFType && (t.proVars.md > 0 || t.proVars.pa > 0 || t.proVars.sp > 0 || t.proVars.ma > 0 || t.proVars.dp > 0 || t.proVars.ve > 0 || t.proVars.pd > 0 ? e.push(this.getAEffectSegment(t, o.ABILITY_UP)) : (t.proVars.md < 0 || t.proVars.pa < 0 || t.proVars.sp < 0 || t.proVars.ma < 0 || t.proVars.dp < 0 || t.proVars.ve < 0 || t.proVars.pd < 0) && e.push(this.getAEffectSegment(t, o.ABILITY_DOWN))),
                                e)
                        }
                        ,
                        a.getAEffectSegment = function(t, e) {
                            var s = new n
                                , o = new p;
                            return o.id = t.id,
                                o.index = t.index,
                                o.effectId = e,
                                o.isPlay = 3 != this._combatData.combatEFType,
                                o.description2 = r.sskillProxy.select(o.effectId).description2,
                                s.setScreen(this._screen),
                                s.setData(o),
                                s
                        }
                        ,
                        s
                }(a));
                s._RF.pop()
            }
        }
    }
));
