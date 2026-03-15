System.register("chunks:///_virtual/VideoCombatProcessConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./ItemSubtypes.ts", "./ItemTypes.ts", "./CombatEffectData.ts", "./AttackResInfo.ts", "./BuffAffect.ts", "./CombatDefault.ts", "./ReplaceSpirit.ts", "./UseSkillType.ts", "./ActionCatchSegment.ts", "./ActionRunSegment.ts", "./ActionUseItemSegment.ts", "./CatchRunVo.ts", "./UseItemVo.ts", "./VideoBuffConverter.ts", "./VideoChangeSpiriteConverter.ts", "./VideoChangeWeatherConverter.ts", "./VideoCombatAttackConverter.ts", "./VideoConverterBase.ts", "./VideoConverterDef.ts", "./VideoRemoveBuffConverter.ts", "./VideoSuperformConverter.ts"], (function(t) {
        var e, s, i, n, a, r, f, c, o, h, m, u, I, l, d, p, g, y, S, B, k, b, _, v;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    i = t.DEFINE
                }
                , function(t) {
                    n = t.ItemSubtypes
                }
                , function(t) {
                    a = t.ItemTypes
                }
                , function(t) {
                    r = t.CombatEffectData
                }
                , function(t) {
                    f = t.AttackResInfo
                }
                , function(t) {
                    c = t.BuffAffect
                }
                , function(t) {
                    o = t.CombatDefault
                }
                , function(t) {
                    h = t.ReplaceSpirit
                }
                , function(t) {
                    m = t.UseSkillType
                }
                , function(t) {
                    u = t.ActionCatchSegment
                }
                , function(t) {
                    I = t.ActionRunSegment
                }
                , function(t) {
                    l = t.ActionUseItemSegment
                }
                , function(t) {
                    d = t.CatchRunVo
                }
                , function(t) {
                    p = t.UseItemVo
                }
                , function(t) {
                    g = t.VideoBuffConverter
                }
                , function(t) {
                    y = t.VideoChangeSpiriteConverter
                }
                , function(t) {
                    S = t.VideoChangeWeatherConverter
                }
                , function(t) {
                    B = t.VideoCombatAttackConverter
                }
                , function(t) {
                    k = t.VideoConverterBase
                }
                , function(t) {
                    b = t.VideoConverterDef
                }
                , function(t) {
                    _ = t.VideoRemoveBuffConverter
                }
                , function(t) {
                    v = t.VideoSuperformConverter
                }
            ],
            execute: function() {
                s._RF.push({}, "c61c3rOJdhLyaIOBoKyFUy0", "VideoCombatProcessConverter", void 0);
                t("VideoCombatProcessConverter", function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this).segmentArr = [],
                            e._lastBuffArr = [[], []],
                            e
                    }
                    e(s, t);
                    var k = s.prototype;
                    return k.getSegments = function() {
                        var t = this._data
                            , e = 0
                            , s = t.attackList.length;
                        for (e = 0; e < s; e++)
                            t.attackList[e]instanceof f ? (0 != t.attackList[e].weather && this.changeWeatherHandler(t.attackList[e]),
                                t.attackList[e].offenseID == this._combatData.myInfo.id ? (this.setProxyByIndex(0, t.attackList[e].myProxy),
                                    this.setProxyByIndex(1, t.attackList[e].otherProxy),
                                    this.setDetreatByIndex(0, t.attackList[e].myDetreat),
                                    this.setDetreatByIndex(1, t.attackList[e].otherDetreat),
                                    this.setIntensifyByIndex(0, t.attackList[e].myIntensify),
                                    this.setIntensifyByIndex(1, t.attackList[e].otherIntensify),
                                    this.setImbuffByIndex(0, t.attackList[e].myImbuff),
                                    this.setImbuffByIndex(1, t.attackList[e].otherImbuff),
                                    this.setImdebuffByIndex(0, t.attackList[e].myImdebuff),
                                    this.setImdebuffByIndex(1, t.attackList[e].otherImdebuff),
                                    this.setUsePPByIndex(0, t.attackList[e].myusePP),
                                    this.setUsePPByIndex(1, t.attackList[e].otherusePP),
                                    this.setImexpelByIndex(0, t.attackList[e].myImexpel),
                                    this.setImexpelByIndex(1, t.attackList[e].otherImexpel),
                                    this.setPPByIndex(0, t.attackList[e].mySPState),
                                    this.setPPByIndex(1, t.attackList[e].otherSPState)) : (this.setProxyByIndex(1, t.attackList[e].myProxy),
                                    this.setProxyByIndex(0, t.attackList[e].otherProxy),
                                    this.setDetreatByIndex(1, t.attackList[e].myDetreat),
                                    this.setDetreatByIndex(0, t.attackList[e].otherDetreat),
                                    this.setIntensifyByIndex(1, t.attackList[e].myIntensify),
                                    this.setIntensifyByIndex(0, t.attackList[e].otherIntensify),
                                    this.setImbuffByIndex(1, t.attackList[e].myImbuff),
                                    this.setImbuffByIndex(0, t.attackList[e].otherImbuff),
                                    this.setImdebuffByIndex(1, t.attackList[e].myImdebuff),
                                    this.setImdebuffByIndex(0, t.attackList[e].otherImdebuff),
                                    this.setUsePPByIndex(1, t.attackList[e].myusePP),
                                    this.setUsePPByIndex(0, t.attackList[e].otherusePP),
                                    this.setImexpelByIndex(1, t.attackList[e].myImexpel),
                                    this.setImexpelByIndex(0, t.attackList[e].otherImexpel),
                                    this.setPPByIndex(1, t.attackList[e].mySPState),
                                    this.setPPByIndex(0, t.attackList[e].otherSPState)),
                                this.attackHandler(t.attackList[e])) : t.attackList[e]instanceof c && this.buffHandler(t.attackList[e]);
                        return this.segmentArr
                    }
                        ,
                        k.setPPByIndex = function(t, e) {
                            this._screen.getSpiritUI(t).upateSPState(t, e)
                        }
                        ,
                        k.setProxyByIndex = function(t, e) {
                            0 != e ? (this._screen.getSpiritUI(t).removeBuff(14),
                                this._screen.getSpiritUI(t).addBuff(14, "护盾值：" + e)) : this._screen.getSpiritUI(t).removeBuff(14)
                        }
                        ,
                        k.setDetreatByIndex = function(t, e) {
                            if (0 == e)
                                return this._screen.getSpiritUI(t).removeBuff(15),
                                    void this._screen.getSpiritUI(t).removeBuff(21);
                            e >= 100 ? (this._screen.getSpiritUI(t).removeBuff(15),
                                this._screen.getSpiritUI(t).removeBuff(21),
                                this._screen.getSpiritUI(t).addBuff(21, "精力回复效果：" + e + "%")) : (this._screen.getSpiritUI(t).removeBuff(21),
                                this._screen.getSpiritUI(t).removeBuff(15),
                                this._screen.getSpiritUI(t).addBuff(15, "精力回复效果：" + e + "%"))
                        }
                        ,
                        k.setIntensifyByIndex = function(t, e) {
                            var s = ["物攻", "物防", "魔攻", "魔防", "速度", "命中", "闪避", "暴击"];
                            if (0 != e)
                                if (this._screen.getSpiritUI(t).removeBuff(16),
                                255 == e)
                                    this._screen.getSpiritUI(t).addBuff(16, "锁定强化");
                                else {
                                    for (var i = "", n = 0; n < s.length; n++)
                                        1 == (e >> n & 1) && (i = i + s[n] + "、");
                                    this._screen.getSpiritUI(t).addBuff(16, "锁定强化：" + i.substr(0, i.length - 1))
                                }
                            else
                                this._screen.getSpiritUI(t).removeBuff(16)
                        }
                        ,
                        k.setImbuffByIndex = function(t, e) {
                            var s = ["睡眠", "麻醉", "烧伤", "冰冻", "中毒", "剧毒", "混乱", "恐惧", "寄生", "诅咒", "迷惑", "恶梦", "束缚"];
                            if (0 == e)
                                return this._lastBuffArr[t] = [],
                                    void this._screen.getSpiritUI(t).removeBuff(17);
                            if (this._screen.getSpiritUI(t).removeBuff(17),
                            1 == (e >> 15 & 1) || 8191 == e)
                                this._screen.getSpiritUI(t).addBuff(17, "免疫异常");
                            else {
                                for (var i = "", n = 0; n < s.length; n++)
                                    1 == (e >> n & 1) && this._lastBuffArr[t].push(n);
                                var a = this.filterArray(this._lastBuffArr[t]);
                                for (n = 0; n < a.length; n++)
                                    i = i + s[a[n]] + "、";
                                this._screen.getSpiritUI(t).addBuff(17, "免疫异常：" + i.substr(0, i.length - 1))
                            }
                        }
                        ,
                        k.filterArray = function(t) {
                            for (var e = [], s = t.length, i = 0; i < s; i++)
                                -1 == e.indexOf(t[i]) && e.push(t[i]);
                            return e
                        }
                        ,
                        k.setImdebuffByIndex = function(t, e) {
                            0 != e ? (this._screen.getSpiritUI(t).removeBuff(18),
                                this._screen.getSpiritUI(t).addBuff(18, "免疫负面强化")) : this._screen.getSpiritUI(t).removeBuff(18)
                        }
                        ,
                        k.setUsePPByIndex = function(t, e) {
                            0 != e ? (this._screen.getSpiritUI(t).removeBuff(19),
                                this._screen.getSpiritUI(t).addBuff(19, "技能额外消耗1PP")) : this._screen.getSpiritUI(t).removeBuff(19)
                        }
                        ,
                        k.setImexpelByIndex = function(t, e) {
                            0 != e ? (this._screen.getSpiritUI(t).removeBuff(20),
                                this._screen.getSpiritUI(t).addBuff(20, "免疫驱逐")) : this._screen.getSpiritUI(t).removeBuff(20)
                        }
                        ,
                        k.attackHandler = function(t) {
                            switch (t.skillType) {
                                case m.SKILL:
                                    console.info("attackHandler==使用技能==" + t.skillType),
                                        this.useSkillHandler(t);
                                    break;
                                case m.CHANGESPIRIT:
                                    console.info("attackHandler==更换宠物==" + t.skillType),
                                        this.aChangeSpiritSegment(t);
                                    break;
                                case m.USEITEM:
                                    console.info("attackHandler==使用道具==" + t.skillType),
                                        this.useItemHandler(t);
                                    break;
                                case m.ESCAPE:
                                    console.info("attackHandler==逃跑==" + t.skillType),
                                        this.aRunSegment(t)
                            }
                        }
                        ,
                        k.useSkillHandler = function(t) {
                            var e, s, i;
                            if (null != t.attackAffects)
                                for (var n = 0; n < t.attackAffects.length; n++) {
                                    var a = 0;
                                    if ((s = t.attackAffects[n]).id == this._combatData.myInfo.id) {
                                        if (null != s.allSpiritsHp)
                                            for (a = 0; a < s.allSpiritsHp.length; a++)
                                                a < this._combatData.myInfo.spirits.length && (i = this._combatData.myInfo.spirits[a]) && (i.curHP = s.allSpiritsHp[a])
                                    } else if (null != s.allSpiritsHp)
                                        for (a = 0; a < s.allSpiritsHp.length; a++)
                                            a < this._combatData.rivalInfo.spirits.length && (i = this._combatData.rivalInfo.spirits[a]) && (i.curHP = s.allSpiritsHp[a])
                                }
                            0 != t.skillDec.superFormId && 0 != t.superformType ? 3 == t.superformType || 4 == t.superformType ? ((e = new v).screen = this._screen,
                                e.combatData = this._combatData,
                                e.data = t,
                                this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                e.rest(),
                                (e = new B).screen = this._screen,
                                e.combatData = this._combatData,
                                e.data = t,
                                this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                e.rest()) : 1 != t.superformType && 2 != t.superformType || ((e = new v).screen = this._screen,
                                e.combatData = this._combatData,
                                e.data = t,
                                this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                e.rest()) : null != (e = new B) && (e.screen = this._screen,
                                e.combatData = this._combatData,
                                e.data = t,
                                this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                e.rest())
                        }
                        ,
                        k.changeWeatherHandler = function(t) {
                            var e;
                            null != (e = new S) && (e.screen = this._screen,
                                e.combatData = this._combatData,
                                e.data = t,
                                this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                e.rest())
                        }
                        ,
                        k.buffHandler = function(t) {
                            var e = new g;
                            e.combatData = this._combatData,
                                e.data = t,
                                e.screen = this._screen,
                                this.segmentArr = this.segmentArr.concat(e.getSegments()),
                                e.rest()
                        }
                        ,
                        k.aChangeSpiritSegment = function(t) {
                            var e, s = new h;
                            if (s.id = t.offenseID,
                                s.type = t.offenseType,
                                s.attackR = t,
                            null != t.attackAffects)
                                for (var i = 0; i < t.attackAffects.length; i++)
                                    e = t.attackAffects[i],
                                        s.buffNum = e.buffNum,
                                        s.buffVars = e.buffVars;
                            s.replaceType = o.REPLACE_TYPE_ACTIVE,
                                t.offenseID == this._combatData.myInfo.id ? this._combatData.changeMySpririt = this._combatData.myInfo.spirits[t.skillID - 1] : this._combatData.changeRivalSpirit = this._combatData.rivalInfo.spirits[t.skillID - 1];
                            var n = new y;
                            n.combatData = this._combatData,
                                n.data = s,
                                n.screen = this._screen,
                                this.segmentArr = this.segmentArr.concat(n.getSegments()),
                                n.rest()
                        }
                        ,
                        k.useItemHandler = function(t) {
                            var e = i.getItemType(t.skillID, a.COMBAT);
                            e == n.COMBAT_CATCH || e == n.COMBAT_ABSOLUTELY_CATCH ? this.aCatchSegment(t) : this.aUseItemSegment(t)
                        }
                        ,
                        k.aCatchSegment = function(t) {
                            var e = new u
                                , s = new d;
                            s.aim = t.defenseID,
                                s.isSuccess = t.isMiss,
                                s.ballId = t.skillID,
                                e.setScreen(this._screen),
                                e.setData(s),
                                this.segmentArr.push(e)
                        }
                        ,
                        k.aUseItemSegment = function(t) {
                            var e = new l
                                , s = new p;
                            if (s.uin = t.offenseID,
                                s.id = r.getItemEffectId(t.skillID),
                                s.isSuccess = !0,
                                s.itemType = i.getItemType(t.skillID, a.COMBAT),
                                s.isPlayEffect = 3 != this._combatData.combatEFType,
                                s.hpVArr = [],
                            null != t.attackAffects) {
                                var n, f = t.attackAffects.length, c = 0;
                                for (c = 0; c < f; c++)
                                    (n = t.attackAffects[c]).isPP ? b.setPPLeft(n, this._combatData) : 0 != n.hpVar.hpV && s.hpVArr.push(n.hpVar);
                                if (null != n.buffVars && n.buffNum > 0) {
                                    var o = new _;
                                    o.screen = this._screen,
                                        o.data = n,
                                        o.combatData = this._combatData,
                                        this.segmentArr = this.segmentArr.concat(o.getSegments()),
                                        o.rest()
                                }
                            }
                            e.setScreen(this._screen),
                                e.setData(s),
                                this.segmentArr.push(e)
                        }
                        ,
                        k.aRunSegment = function(t) {
                            var e = new I
                                , s = new d;
                            s.aim = t.offenseID,
                                s.isSuccess = !0,
                                e.setScreen(this._screen),
                                e.setData(s),
                                this.segmentArr.push(e)
                        }
                        ,
                        k.rest = function() {
                            t.prototype.rest.call(this),
                                this.segmentArr = [],
                                this.segmentArr = null
                        }
                        ,
                        s
                }(k));
                s._RF.pop()
            }
        }
    }
));
