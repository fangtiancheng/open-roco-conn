System.register("chunks:///_virtual/VideoSuperformConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritSkillInfo.ts", "./CombatResConvert.ts", "./CombatResType.ts", "./PReadHelp.ts", "./CombatDefault.ts", "./ActionChangeNormalFormSegment.ts", "./ActionChangeSuperFormSegment.ts", "./TransformVo.ts", "./VideoCombatEffectConverter.ts", "./VideoConverterBase.ts", "./VideoConverterDef.ts", "./VideoRemoveBuffConverter.ts"], (function(t) {
        var e, s, a, r, i, n, o, f, c, u, h, m, p, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    a = t.SpiritSkillInfo
                }
                , function(t) {
                    r = t.CombatResConvert
                }
                , function(t) {
                    i = t.CombatResType
                }
                , function(t) {
                    n = t.PReadHelp
                }
                , function(t) {
                    o = t.CombatDefault
                }
                , function(t) {
                    f = t.ActionChangeNormalFormSegment
                }
                , function(t) {
                    c = t.ActionChangeSuperFormSegment
                }
                , function(t) {
                    u = t.TransformVo
                }
                , function(t) {
                    h = t.VideoCombatEffectConverter
                }
                , function(t) {
                    m = t.VideoConverterBase
                }
                , function(t) {
                    p = t.VideoConverterDef
                }
                , function(t) {
                    l = t.VideoRemoveBuffConverter
                }
            ],
            execute: function() {
                s._RF.push({}, "1fee6LgG9FGrb/uUamI7TT0", "VideoSuperformConverter", void 0);
                t("VideoSuperformConverter", function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this).segmentArr = [],
                            e.attackR = void 0,
                            e
                    }
                    e(s, t);
                    var m = s.prototype;
                    return m.getSegments = function() {
                        return this.attackR = this._data,
                            1 == this.attackR.superformType || 3 == this.attackR.superformType ? this.getChangeSuperSegments() : 2 != this.attackR.superformType && 4 != this.attackR.superformType || this.getChangeNormalSegments(),
                            this.getRemoveBuffSegments(),
                            this.segmentArr
                    }
                        ,
                        m.getChangeSuperSegments = function() {
                            var t, e, s, i, f = new u;
                            if (t = new c,
                                CONFIG.DEBUG,
                                console.log("[VideoSuperformConverter] ", "处理一个精灵变身的动画！"),
                                f.skillDec = this.attackR.skillDec,
                                f.uin = this.attackR.offenseID,
                                f.defenseID = this.attackR.defenseID,
                                f.uin == this._combatData.myInfo.id ? (this._combatData.myCurSpirit.superFormId = this.attackR.skillDec.superFormId,
                                    f.spirit = this._combatData.myCurSpirit) : (this._combatData.rivalCurSpirit.superFormId = this.attackR.skillDec.superFormId,
                                    f.spirit = this._combatData.rivalCurSpirit),
                                f.buffs = [],
                                f.HPVs = [],
                                f.defenseHPV = [],
                                f.offenseHPV = [],
                                f.isOnlyHit = !1,
                            null != this.attackR.attackAffects)
                                for (var h = 0; h < this.attackR.attackAffects.length; h++) {
                                    if ((i = this.attackR.attackAffects[h]) && i.buffVars)
                                        for (var m = 0; m < i.buffVars.length; m++)
                                            (s = i.buffVars[m]).buffType == o.BUFF_ADD && ((e = new a).id = s.id,
                                                e.skillDes = n.sskillProxy.select(r.addBidToEid(e.id)),
                                                f.buffs.push(e));
                                    i && i.hpVar && (f.HPVs.push(i.hpVar),
                                    h > 0 && (f.isOnlyHit = !0),
                                    null != i.hpVar && 0 != i.hpVar.hpV && (i.id == this.attackR.offenseID && i.id == this.attackR.defenseID ? (f.defenseHPV.push(i.hpVar),
                                        f.offenseHPV.push(i.hpVar)) : i.id == this.attackR.defenseID ? f.defenseHPV.push(i.hpVar) : i.id == this.attackR.offenseID && f.offenseHPV.push(i.hpVar)))
                                }
                            t.setScreen(this._screen),
                                t.setData(f),
                                this.segmentArr = this.segmentArr.concat(t)
                        }
                        ,
                        m.getChangeNormalSegments = function() {
                            var t;
                            t = new f,
                                CONFIG.DEBUG,
                                console.log("[VideoSuperformConverter] ", "处理一个精灵变身消失的动画！");
                            var e = new u;
                            e.skillDec = this.attackR.skillDec,
                                e.uin = this.attackR.offenseID,
                                e.uin == this._combatData.myInfo.id ? e.spirit = this._combatData.myCurSpirit : e.spirit = this._combatData.rivalCurSpirit,
                                t.setScreen(this._screen),
                                t.setData(e),
                                this.segmentArr = this.segmentArr.concat(t)
                        }
                        ,
                        m.getRemoveBuffSegments = function() {
                            var t, e, s = 0;
                            if (null != this.attackR.attackAffects)
                                for (s = 0; s < this.attackR.attackAffects.length; s++)
                                    t = this.attackR.attackAffects[s],
                                    0 == i.IS_FINISHED && ((e = new h).screen = this._screen,
                                        e.data = t,
                                        e.combatData = this._combatData,
                                        this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                        e.rest(),
                                        p.setPPLeft(t, this._combatData)),
                                    null != t.buffVars && t.buffNum > 0 && ((e = new l).screen = this._screen,
                                        e.data = t,
                                        e.combatData = this._combatData,
                                        this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                        e.rest())
                        }
                        ,
                        s
                }(m));
                s._RF.pop()
            }
        }
    }
));
