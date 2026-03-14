System.register("chunks:///_virtual/VideoChangeSpiriteConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritSkillInfo.ts", "./CombatResConvert.ts", "./PReadHelp.ts", "./CombatDefault.ts", "./VideoEvent.ts", "./ActionChangeDeadSpiritSegment.ts", "./ActionChangeSpiritSegment.ts", "./ChangeSpiritVo.ts", "./VideoConverterBase.ts", "./VideoConverterDef.ts"], (function(t) {
        var i, e, n, a, o, r, s, c, h, l, g, u;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.SpiritSkillInfo
                }
                , function(t) {
                    a = t.CombatResConvert
                }
                , function(t) {
                    o = t.PReadHelp
                }
                , function(t) {
                    r = t.CombatDefault
                }
                , function(t) {
                    s = t.VideoEvent
                }
                , function(t) {
                    c = t.ActionChangeDeadSpiritSegment
                }
                , function(t) {
                    h = t.ActionChangeSpiritSegment
                }
                , function(t) {
                    l = t.ChangeSpiritVo
                }
                , function(t) {
                    g = t.VideoConverterBase
                }
                , function(t) {
                    u = t.VideoConverterDef
                }
            ],
            execute: function() {
                e._RF.push({}, "8e4c68jl11C4Y3iLGPkMu9+", "VideoChangeSpiriteConverter", void 0);
                t("VideoChangeSpiriteConverter", function(t) {
                    function e() {
                        var i;
                        return (i = t.call(this) || this).gvo = void 0,
                            i
                    }
                    i(e, t);
                    var g = e.prototype;
                    return g.getSegments = function() {
                        var t = [];
                        return t.push(this.getADeadChangeSpiritSegment()),
                            t
                    }
                        ,
                        g.getADeadChangeSpiritSegment = function() {
                            var t, i, e, g = new l;
                            if (this.gvo = this._data,
                                this.gvo.replaceType == r.REPLACE_TYPE_DIED ? (t = new c,
                                    CONFIG.DEBUG,
                                    console.log("[VideoChangeSpiriteConverter] ", "精灵战死，处理一个更换精灵的动画！")) : this.gvo.replaceType == r.REPLACE_TYPE_ACTIVE && (t = new h,
                                    CONFIG.DEBUG,
                                    console.log("[VideoChangeSpiriteConverter] ", "主动更换宠物，处理一个更换精灵的动画！")),
                                g.attackR = this.gvo.attackR,
                                g.uin = this.gvo.id,
                                g.uin == this._combatData.myInfo.id ? (g.oldSpirit = this._combatData.myCurSpirit,
                                    g.newSpirit = this._combatData.changeMySpririt) : (g.oldSpirit = this._combatData.rivalCurSpirit,
                                    g.newSpirit = this._combatData.changeRivalSpirit),
                                g.buffs = [],
                            null != this.gvo.buffVars)
                                for (var f = 0; f < this.gvo.buffVars.length; f++)
                                    (e = this.gvo.buffVars[f]).buffType == r.BUFF_ADD && ((i = new n).id = e.id,
                                        i.skillDes = o.sskillProxy.select(a.addBidToEid(i.id)),
                                        g.buffs.push(i));
                            if (t.setScreen(this._screen),
                                t.setData(g),
                                this.gvo.id == this._combatData.myInfo.id ? (this._combatData.myCurSpirit = this._combatData.changeMySpririt,
                                    this._combatData.changeMySpririt = null) : (this._combatData.rivalCurSpirit = this._combatData.changeRivalSpirit,
                                    this._combatData.changeRivalSpirit = null),
                            this.gvo.replaceType == r.REPLACE_TYPE_ACTIVE && this.gvo.attackR && null != this.gvo.attackR.attackAffects) {
                                var p = this.gvo.attackR.attackAffects.length;
                                for (f = 0; f < p; f++)
                                    u.setPPLeft(this.gvo.attackR.attackAffects[f], this._combatData)
                            }
                            return t.addEventListener(s.ON_SEG_END, this.onSegmentEnd, this),
                                t
                        }
                        ,
                        g.onSegmentEnd = function(t) {
                            t.__this__ && t.__this__.removeEventListener(s.ON_SEG_END, this.onSegmentEnd, this),
                            null != this._combatData.changeSpiritHandler && this._combatData.changeSpiritHandler(),
                                this.gvo = null,
                                this._combatData = null,
                                this._data = null,
                                this.screen = null
                        }
                        ,
                        g.rest = function() {}
                        ,
                        e
                }(g));
                e._RF.pop()
            }
        }
    }
));
