System.register("chunks:///_virtual/VideoCombatAttackConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./CombatResType.ts", "./ActionHitSegment.ts", "./ActionMagicSegment.ts", "./ActionRemoveSkillBgSegment.ts", "./AttackVo.ts", "./VideoCombatEffectConverter.ts", "./VideoConverterBase.ts", "./VideoConverterDef.ts", "./VideoRemoveBuffConverter.ts"], (function(e) {
        var t, s, r, n, a, i, o, f, c, h, m, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    r = e.__global
                }
                , function(e) {
                    n = e.CombatResType
                }
                , function(e) {
                    a = e.ActionHitSegment
                }
                , function(e) {
                    i = e.ActionMagicSegment
                }
                , function(e) {
                    o = e.ActionRemoveSkillBgSegment
                }
                , function(e) {
                    f = e.AttackVo
                }
                , function(e) {
                    c = e.VideoCombatEffectConverter
                }
                , function(e) {
                    h = e.VideoConverterBase
                }
                , function(e) {
                    m = e.VideoConverterDef
                }
                , function(e) {
                    l = e.VideoRemoveBuffConverter
                }
            ],
            execute: function() {
                s._RF.push({}, "525a0zn7ApLTIes/IYZCbfV", "VideoCombatAttackConverter", void 0);
                e("VideoCombatAttackConverter", function(e) {
                    function s() {
                        var t;
                        return (t = e.call(this) || this).segmentArr = [],
                            t.effectArr = [],
                            t
                    }
                    t(s, e);
                    var h = s.prototype;
                    return h.getSegments = function() {
                        var e = this._data
                            , t = new Map;
                        t[n.ATTACK_MAGIC_TYPE] = this.aMagicSegments.bind(this),
                            t[n.ATTACK_HIT_TYPE] = this.aHitSegments.bind(this);
                        var s = 0
                            , r = 0
                            , a = t[e.skillDec.attackType];
                        if (null == e.attackAffects || e.attackAffects.length <= 0)
                            a(e, -1);
                        else
                            for (r = e.attackAffects.length,
                                     s = 0; s < r; s++)
                                a(e, s);
                        return this.segmentArr
                    }
                        ,
                        h.aMagicSegments = function(e, t) {
                            var s;
                            CONFIG.DEBUG,
                                console.log("[VideoConverter] ", "处理一个远程打击的动画！"),
                                (s = 4 == e.skillDec.damageType ? new o : new i).setScreen(this._screen),
                                s.setData(this.getAttackAffects(e, t)),
                                this.segmentArr.push(s),
                                this.segmentArr = this.segmentArr.concat(this.effectArr)
                        }
                        ,
                        h.aHitSegments = function(e, t) {
                            var s;
                            CONFIG.DEBUG,
                                console.log("[VideoConverter] ", "处理一个****近程***打击的动画！"),
                                (s = 4 == e.skillDec.damageType ? new o : new a).setScreen(this._screen),
                                s.setData(this.getAttackAffects(e, t)),
                                this.segmentArr.push(s),
                                this.segmentArr = this.segmentArr.concat(this.effectArr)
                        }
                        ,
                        h.getAttackAffects = function(e, t) {
                            var s, a, i = new f;
                            return i.offenseID = e.offenseID,
                                i.offenseIndex = e.offenseIndex,
                                i.defenseID = e.defenseID,
                                i.defenseIndex = e.defenseIndex,
                                i.skillDes = e.skillDec,
                                i.isHurt = e.isHurt,
                                i.isMiss = e.isMiss,
                                i.myProxy = e.myProxy,
                                i.otherProxy = e.otherProxy,
                                i.myDetreat = e.myDetreat,
                                i.otherDetreat = e.otherDetreat,
                                i.myIntensify = e.myIntensify,
                                i.otherIntensify = e.otherIntensify,
                                i.myImbuff = e.myImbuff,
                                i.otherImbuff = e.otherImbuff,
                                i.myImdebuff = e.myImdebuff,
                                i.otherImdebuff = e.otherImdebuff,
                                i.myusePP = e.myusePP,
                                i.otherusePP = e.otherusePP,
                                i.myImexpel = e.myImexpel,
                                i.otherImexpel = e.otherImexpel,
                                i.isShaut = e.isShaut,
                                i.skillBgFlag = e.skillBgFlag,
                                i.isOnlyHit = !1,
                            0 == t && (e.isMyPlayStrength = !1,
                                e.isMyPlayWeaken = !1,
                                e.isOtherPlayStrength = !1,
                                e.isOtherPlayWeaken = !1),
                                3 == this._combatData.combatEFType ? i.isPlayEffect = !1 : i.isPlayEffect = !0,
                                1 == this._combatData.combatSPType ? i.isPlaySPAction = !0 : i.isPlaySPAction = !1,
                            t >= 0 && (this.effectArr = [],
                                null != (s = e.attackAffects[t]).hpVar && 0 != s.hpVar.hpV ? (t > 0 && (i.isOnlyHit = !0,
                                    i.defenseID = s.id),
                                    s.id == e.offenseID && s.id == e.defenseID ? (i.defenseHPV = s.hpVar,
                                        i.offenseHPV = s.hpVar,
                                        CONFIG.DEBUG,
                                        console.log("[VideoConverter] ", "打到自己！", s.id, s.hpVar.hitTimes, s.hpVar.hpLeft)) : s.id == e.defenseID ? (i.defenseHPV = s.hpVar,
                                        CONFIG.DEBUG,
                                        console.log("[VideoConverter] ", "被攻击方的血量！", s.id, s.hpVar.hitTimes, s.hpVar.hpLeft)) : s.id == e.offenseID ? (i.isOnlyHit ? i.defenseHPV = s.hpVar : i.offenseHPV = s.hpVar,
                                        CONFIG.DEBUG,
                                        console.log("[VideoConverter] ", "攻击方的血量！", s.id, s.hpVar.hitTimes, s.hpVar.hpLeft)) : (CONFIG.DEBUG,
                                        console.log("[VideoConverter] ", "咋还有这种打击情况！", s.id, s.hpVar.hitTimes, s.hpVar.hpLeft))) : t > 0 && (i.isOnlyHit = !0),
                            null != s.hpVar && (0 != s.hpVar.hitTimes || 0 != s.hpVar.hpV) && s.hpVar.hpLeft,
                            0 == n.IS_FINISHED && (2 == this._combatData.combatEFType && (e.attackAffects[t].proVars.md > 0 || e.attackAffects[t].proVars.pa > 0 || e.attackAffects[t].proVars.sp > 0 || e.attackAffects[t].proVars.ma > 0 || e.attackAffects[t].proVars.dp > 0 || e.attackAffects[t].proVars.ve > 0 || e.attackAffects[t].proVars.pd > 0) ? e.attackAffects[t].id == r.MainRoleData.uin ? e.isMyPlayStrength || ((a = new c).screen = this._screen,
                                a.data = s,
                                a.combatData = this._combatData,
                                this.effectArr = this.effectArr.concat(a.getSegments()),
                                a.rest(),
                                e.isMyPlayStrength = !0) : e.isOtherPlayStrength || ((a = new c).screen = this._screen,
                                a.data = s,
                                a.combatData = this._combatData,
                                this.effectArr = this.effectArr.concat(a.getSegments()),
                                a.rest(),
                                e.isOtherPlayStrength = !0) : ((a = new c).screen = this._screen,
                                a.data = s,
                                a.combatData = this._combatData,
                                this.effectArr = this.effectArr.concat(a.getSegments()),
                                a.rest()),
                                m.setPPLeft(s, this._combatData)),
                            null != s.buffVars && s.buffNum > 0 && ((a = new l).screen = this._screen,
                                a.data = s,
                                a.combatData = this._combatData,
                                this.effectArr = this.effectArr.concat(a.getSegments()),
                                a.rest()),
                                i.restrainId = s.restrainType,
                                i.immunityInfoArray = s.immunityVars),
                                i
                        }
                        ,
                        h.rest = function() {
                            this.segmentArr = [],
                                this.effectArr = [],
                                this.segmentArr = null,
                                this.effectArr = null
                        }
                        ,
                        s
                }(h));
                s._RF.pop()
            }
        }
    }
));
