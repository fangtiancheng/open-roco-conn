System.register("chunks:///_virtual/SpiritAnimationContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatLoadResVO.ts", "./BuildLogHelper.ts", "./FightData.ts", "./SpiritAnimation.ts", "./SpiritAnimationCfgLoader.ts"], (function(e) {
        var i, n, t, a, o, A, r, s, _, N, l;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    t = e.cclegacy,
                        a = e.Node,
                        o = e.AnimationClip
                }
                , function(e) {
                    A = e.CombatLoadResVO
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    s = e.FightData
                }
                , function(e) {
                    _ = e.SpiritAnimation,
                        N = e.SpiritAnimationEventConfig
                }
                , function(e) {
                    l = e.SpiritAnimationCfgLoader
                }
            ],
            execute: function() {
                t._RF.push({}, "ed5f3ukz51NAJw0/mXaLcr0", "SpiritAnimationContainer", void 0);
                var E = e("SpiritAnimationContainer", function(e) {
                    function t() {
                        var i;
                        return (i = e.call(this) || this)._resID = 0,
                            i._defaultAniName = "",
                            i._animationName = "",
                            i._resType = 0,
                            i.currentPage = void 0,
                            i.visible = void 0,
                            i._loadedRes = void 0,
                            i._aniMap = void 0,
                            i.mode = _.SPIRITANIMATION_MODE_COMBAT,
                            i._aniCount = 0,
                            i.success = null,
                            i._curSpiritAni = null,
                            i._loadedRes = new Array,
                            i._aniMap = new Map,
                            i
                    }
                    i(t, e),
                        t.initMap = function() {
                            t.ANIMATION_EVENT_CHECK.IDLE = "",
                                t.ANIMATION_EVENT_CHECK.STB = s.PSTB,
                                t.ANIMATION_EVENT_CHECK.BTS = s.PBTS,
                                t.ANIMATION_EVENT_CHECK.APPEAR = s.PAPPEAR,
                                t.ANIMATION_EVENT_CHECK.ATTACK = s.PATTACKEND,
                                t.ANIMATION_EVENT_CHECK.UNDER_ATTACK = s.PUNDERATTACK,
                                t.ANIMATION_EVENT_CHECK.BEAT_DOWN = s.PBEATDOWN,
                                t.ANIMATION_EVENT_CHECK.MISS = s.PMISS,
                                t.ANIMATION_EVENT_CHECK.MAGIC_START = "",
                                t.ANIMATION_EVENT_CHECK.MAGIC_FOCUS = "",
                                t.ANIMATION_EVENT_CHECK.MAGIC_END = s.PMAGICEND,
                                t.ANIMATION_EVENT_CHECK.DEAD = s.PDEAD
                        }
                    ;
                    var E = t.prototype;
                    return E.createAniNode = function(e) {
                        var i = this._aniMap[e];
                        if (null == i || null == i) {
                            var n = new a(e)
                                , t = n.addComponent(_);
                            t.mode = this.mode,
                                this._aniMap[e] = t,
                                this.addChild(n),
                                this._aniCount++
                        }
                    }
                        ,
                        E.initWithPet = function(e) {
                            console.log("initWithPet=>" + e),
                                this._resID = e,
                                this._animationName = "PET_" + e,
                                this._defaultAniName = "IDLE";
                            for (var i = 0; i < t.ANIMATION_NAME_PET.length; i++) {
                                var n = t.ANIMATION_NAME_PET[i]
                                    , a = l.Instance.getPetAnimationData(e, n);
                                if (a) {
                                    for (var o = t.ANIMATION_EVENT_CHECK[n], A = !1, s = 0; s < a.eventFrame.length; s++)
                                        if (o == a.eventFrame[s].name) {
                                            A = !0;
                                            break
                                        }
                                    0 == A && o.length > 0 && a.eventFrame.push({
                                        name: o,
                                        frame: a.totalFrame - 1,
                                        params: []
                                    }),
                                        console.log("aniName=>" + n);
                                    for (var _ = 0; _ < a.eventFrame.length; _++)
                                        console.log("eventFrame=>" + a.eventFrame[_].name + "==>" + a.eventFrame[_].frame);
                                    this.loadRes(n, a.res_list, a.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        E.initWithSkill = function(e) {
                            console.log("initWithSkill=>" + e),
                                this._resID = e,
                                this._animationName = "SKILL_" + e,
                                this._defaultAniName = "Normal";
                            for (var i = 0; i < t.ANIMATION_NAME_SKILL.length; i++) {
                                var n = t.ANIMATION_NAME_SKILL[i]
                                    , a = l.Instance.getSkillAnimationData(e, n);
                                if (a) {
                                    console.log("aniName=>" + n);
                                    for (var o = 0; o < a.eventFrame.length; o++)
                                        console.log("eventFrame=>" + a.eventFrame[o].name + "==>" + a.eventFrame[o].frame);
                                    this.loadRes(n, a.res_list, a.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        E.initWithEffect = function(e) {
                            console.log("initWithEffect=>" + e),
                                this._resID = e,
                                this._animationName = "EFFECT_" + e,
                                this._defaultAniName = "Normal";
                            for (var i = 0; i < t.ANIMATION_NAME_EFFECT.length; i++) {
                                var n = t.ANIMATION_NAME_EFFECT[i]
                                    , a = l.Instance.getEffectAnimationData(e, n);
                                if (a) {
                                    console.log("aniName=>" + n);
                                    for (var o = 0; o < a.eventFrame.length; o++)
                                        console.log("eventFrame=>" + a.eventFrame[o].name + "==>" + a.eventFrame[o].frame);
                                    this.loadRes(n, a.res_list, a.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        E.initWithBuff = function(e) {
                            console.log("initWithBuff=>" + e),
                                this._resID = e,
                                this._animationName = "BUFF_" + e,
                                this._defaultAniName = "Normal";
                            for (var i = 0; i < t.ANIMATION_NAME_BUFF.length; i++) {
                                var n = t.ANIMATION_NAME_BUFF[i]
                                    , a = l.Instance.getBuffAnimationData(e, n);
                                if (a) {
                                    console.log("aniName=>" + n);
                                    for (var o = 0; o < a.eventFrame.length; o++)
                                        console.log("eventFrame=>" + a.eventFrame[o].name + "==>" + a.eventFrame[o].frame);
                                    this.loadRes(n, a.res_list, a.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        E.loadRes = function(e, i, n) {
                            this.createAniNode(e);
                            for (var t = [], a = 0; a < n.length; a++) {
                                var A = n[a]
                                    , r = new N;
                                r.name = A.name,
                                    r.frame = A.frame,
                                    r.params = A.params,
                                    t.push(r)
                            }
                            var s = this._aniMap[e];
                            if (s) {
                                var l = "IDLE" == e ? o.WrapMode.Loop : o.WrapMode.Normal;
                                s.loadWithAnyPlist("dynamic", i, t, 24, l, this.onLoadMvSuccess, this.onLoadMvFail, this),
                                    s.node.on(_.FRAMEANIMATION_FRAME_EVENT, this.onFrameEvent, this)
                            }
                        }
                        ,
                        E.unload = function() {}
                        ,
                        E.onFrameEvent = function(e) {}
                        ,
                        E.onLoadMvFail = function(e, i) {}
                        ,
                        E.onLoadMvSuccess = function(e) {
                            this._loadedRes.push(e.name),
                                console.log("loading=========" + e.name + "===" + this._loadedRes.length),
                            this._loadedRes.length >= this._aniCount && this.success && this.success()
                        }
                        ,
                        E.play = function(e) {
                            null != e && null != e || (e = this._defaultAniName);
                            var i = !1;
                            for (var n in this._curSpiritAni = null,
                                this._aniMap) {
                                var t = this._aniMap[n];
                                t && (n == e ? (i = !0,
                                    t.node.active = !0,
                                    t.play(),
                                    this._curSpiritAni = t) : (t.node.active = !1,
                                    t.stop()))
                            }
                            0 == i && (r.IS_LOCAL,
                                console.error(this._animationName + "==>>" + e + "动画不存在"))
                        }
                        ,
                        E.stop = function() {
                            this._curSpiritAni && this._curSpiritAni.stop(),
                                this._curSpiritAni = null
                        }
                        ,
                        E.clone = function() {
                            var e = new t;
                            switch (this._resType) {
                                case A.RES_TYPE_IMAGE:
                                    r.IS_LOCAL;
                                    break;
                                case A.RES_TYPE_PET_ANIMATION:
                                    e.initWithPet(this._resID);
                                    break;
                                case A.RES_TYPE_SKILL_ANIMATION:
                                    e.initWithSkill(this._resID);
                                    break;
                                case A.RES_TYPE_EFFECT_ANIMATION:
                                    e.initWithEffect(this._resID);
                                    break;
                                case A.RES_TYPE_BUFF_ANIMATION:
                                    e.initWithBuff(this._resID);
                                    break;
                                default:
                                    r.IS_LOCAL
                            }
                            return e
                        }
                        ,
                        n(t, [{
                            key: "resType",
                            set: function(e) {
                                null == e && r.IS_LOCAL,
                                null == e && r.IS_LOCAL,
                                    this._resType = e
                            }
                        }]),
                        t
                }(a));
                E.ANIMATION_NAME_BUFF = ["Normal"],
                    E.ANIMATION_NAME_SKILL = ["Normal"],
                    E.ANIMATION_NAME_EFFECT = ["Normal", "BALL_APPEAR", "BALL_RECIEVE", "BALL_GETSUCCESS", "BALL_GETFAILED", "BALL_STAY", "BALL_SMOKE", "BALL_APPEAR2"],
                    E.ANIMATION_NAME_PET = ["IDLE", "STB", "BTS", "APPEAR", "ATTACK", "UNDER_ATTACK", "BEAT_DOWN", "MISS", "MAGIC_START", "MAGIC_FOCUS", "MAGIC_END", "DEAD"],
                    E.ANIMATION_EVENT_CHECK = new Map,
                    t._RF.pop()
            }
        }
    }
));
