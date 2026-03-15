System.register("chunks:///_virtual/SpiritAnimationContainerGaf.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatLoadResVO.ts", "./BuildLogHelper.ts", "./FightData.ts", "./SpiritAnimation.ts", "./GAFAnimation.ts", "./NodeExtend.ts", "./PetResCfgLoader.ts", "./SpiritAnimationCfgLoader.ts"], (function(t) {
        var i, e, n, a, s, o, h, l, r, f, _, A, c, d, u, C;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    n = t.asyncToGenerator,
                    a = t.regeneratorRuntime
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.Node,
                        h = t.AnimationClip
                }
                , function(t) {
                    l = t.CombatLoadResVO
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    f = t.FightData
                }
                , function(t) {
                    _ = t.SpiritAnimation,
                        A = t.SpiritAnimationEventConfig
                }
                , function(t) {
                    c = t.GAFAnimation
                }
                , function(t) {
                    d = t.NodeExtend
                }
                , function(t) {
                    u = t.PetResCfgLoader
                }
                , function(t) {
                    C = t.SpiritAnimationCfgLoader
                }
            ],
            execute: function() {
                s._RF.push({}, "8f7b3MdzHhNWJj5QKsPLniD", "SpiritAnimationContainerGaf", void 0);
                var I = t("SpiritAnimationContainerGaf", function(t) {
                    function s() {
                        var i;
                        return (i = t.call(this) || this)._resType = 0,
                            i._nameLog = "",
                            i._resID = 0,
                            i._defaultAniName = "",
                            i._animationName = "",
                            i._useGaf = !1,
                            i._loadedRes = void 0,
                            i._aniMap = void 0,
                            i.mode = _.SPIRITANIMATION_MODE_COMBAT,
                            i._aniCount = 0,
                            i._loaded = !1,
                            i._isPet = !1,
                            i._isWeather = !1,
                            i.loadedCallBack = null,
                            i._isSkill = !1,
                            i._isEffect = !1,
                            i._isBuff = !1,
                            i.success = null,
                            i._curSpiritAni = null,
                            i._loadedRes = new Array,
                            i._aniMap = new Map,
                            i
                    }
                    i(s, t),
                        s.initMap = function() {
                            s.ANIMATION_EVENT_CHECK.IDLE = "",
                                s.ANIMATION_EVENT_CHECK.STB = f.PSTB,
                                s.ANIMATION_EVENT_CHECK.BTS = f.PBTS,
                                s.ANIMATION_EVENT_CHECK.APPEAR = f.PAPPEAR,
                                s.ANIMATION_EVENT_CHECK.ATTACK = f.PATTACKEND,
                                s.ANIMATION_EVENT_CHECK.UNDER_ATTACK = f.PUNDERATTACK,
                                s.ANIMATION_EVENT_CHECK.BEAT_DOWN = f.PBEATDOWN,
                                s.ANIMATION_EVENT_CHECK.MISS = f.PMISS,
                                s.ANIMATION_EVENT_CHECK.MAGIC_START = "",
                                s.ANIMATION_EVENT_CHECK.MAGIC_FOCUS = "",
                                s.ANIMATION_EVENT_CHECK.MAGIC_END = f.PMAGICEND,
                                s.ANIMATION_EVENT_CHECK.DEAD = f.PDEAD
                        }
                    ;
                    var d = s.prototype;
                    return d.createAniNode = function(t) {
                        var i = this._aniMap[t];
                        if (null == i || null == i) {
                            var e = new o(t)
                                , n = e.addComponent(_);
                            n.mode = this.mode,
                                this._aniMap[t] = n,
                                this.addChild(e),
                                this._aniCount++
                        }
                    }
                        ,
                        d.initWithPet = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithPet=>" + t),
                                this._resID = t,
                                this._animationName = "PET_" + t,
                                this._defaultAniName = "IDLE";
                            for (var i = 0; i < s.ANIMATION_NAME_PET.length; i++) {
                                var e = s.ANIMATION_NAME_PET[i]
                                    , n = C.Instance.getPetAnimationData(t, e);
                                if (n) {
                                    for (var a = s.ANIMATION_EVENT_CHECK[e], o = !1, h = 0; h < n.eventFrame.length; h++)
                                        if (a == n.eventFrame[h].name) {
                                            o = !0;
                                            break
                                        }
                                    0 == o && a.length > 0 && n.eventFrame.push({
                                        name: a,
                                        frame: n.totalFrame - 1,
                                        params: []
                                    }),
                                    1 == r.IS_LOCAL && console.log("aniName=>" + e);
                                    for (var l = 0; l < n.eventFrame.length; l++)
                                        1 == r.IS_LOCAL && console.log("eventFrame=>" + n.eventFrame[l].name + "==>" + n.eventFrame[l].frame);
                                    this.loadRes(e, n.res_list, n.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        d.initWithPetWithGaf = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithPet000=>" + t),
                                this._resID = t,
                                this._loaded = !1,
                                this._isPet = !0,
                                this._useGaf = !0,
                            this.getComponent(c) || this.addComponent(c);
                            var i = this.getComponent(c)
                                , e = u.Instance.getPath(t);
                            i.loadWithAnyPlist("", ["gaf/Pet/" + e], [], 24, h.WrapMode.Loop, this.onGAFMvLoadSuccess.bind(this), this.onGAFMvLoadFail.bind(this), this)
                        }
                        ,
                        d.initWithPetWithGafSnyc = function() {
                            var t = n(a().mark((function t(i) {
                                    var e, n;
                                    return a().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        return 1 == r.IS_LOCAL && console.log("initWithPetSnyc=>" + i),
                                                            this._resID = i,
                                                            this._loaded = !1,
                                                            this._isPet = !0,
                                                            this._useGaf = !0,
                                                        this.getComponent(c) || this.addComponent(c),
                                                            e = this.getComponent(c),
                                                            n = u.Instance.getPath(i),
                                                            t.next = 10,
                                                            e.syncLoadWithAnyPlist("", ["gaf/Pet/" + n], [], 24, h.WrapMode.Loop);
                                                    case 10:
                                                        t.sent.err ? this.loadedCallBack && this.loadedCallBack(!1, this) : (this._loaded = !0,
                                                        this.loadedCallBack && this.loadedCallBack(!0, this));
                                                    case 12:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t, this)
                                }
                            )));
                            return function(i) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        d.initWithWeatherWithGaf = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithWeatherWithGaf=>" + t),
                                this._resID = t,
                                this._loaded = !1,
                                this._isWeather = !0,
                                this._useGaf = !0,
                            this.getComponent(c) || this.addComponent(c);
                            var i = t + "/" + t + ".gaf.bin";
                            this.getComponent(c).loadWithAnyPlist("", ["gaf/weather/" + i], [], 24, h.WrapMode.Loop, this.onGAFMvLoadSuccess.bind(this), this.onGAFMvLoadFail.bind(this), this)
                        }
                        ,
                        d.onGAFMvLoadSuccess = function(t) {
                            this._loaded = !0,
                                this._isPet || this._isBuff || this._isSkill || this._isEffect ? this.visible = !1 : this._isWeather ? this.playGaf("Effect", "Normal") : this.visible = !1,
                            this.loadedCallBack && this.loadedCallBack(!0, this)
                        }
                        ,
                        d.onGAFMvLoadFail = function() {
                            this.loadedCallBack && this.loadedCallBack(!1, this),
                            1 == r.IS_LOCAL && console.log("[jinlong] onGAFMvLoadFail")
                        }
                        ,
                        d.initWithSkill = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithSkill=>" + t),
                                this._resID = t,
                                this._isSkill = !0,
                                this._animationName = "SKILL_" + t,
                                this._defaultAniName = "Normal";
                            for (var i = 0; i < s.ANIMATION_NAME_SKILL.length; i++) {
                                var e = s.ANIMATION_NAME_SKILL[i]
                                    , n = C.Instance.getSkillAnimationData(t, e);
                                if (n) {
                                    1 == r.IS_LOCAL && console.log("aniName=>" + e);
                                    for (var a = 0; a < n.eventFrame.length; a++)
                                        1 == r.IS_LOCAL && console.log("eventFrame=>" + n.eventFrame[a].name + "==>" + n.eventFrame[a].frame);
                                    this.loadRes(e, n.res_list, n.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        d.initWithSkillWithGaf = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithSkillWithGaf=>" + t),
                                this._resID = t,
                                this._loaded = !1,
                                this._isSkill = !0,
                                this._useGaf = !0,
                            this.getComponent(c) || this.addComponent(c);
                            var i = t + "/" + t + ".gaf.bin";
                            this.getComponent(c).loadWithAnyPlist("", ["gaf/skill/" + i], [], 24, h.WrapMode.Loop, this.onGAFMvLoadSuccess.bind(this), this.onGAFMvLoadFail.bind(this), this)
                        }
                        ,
                        d.initWithSkillWithGafSync = function() {
                            var t = n(a().mark((function t(i) {
                                    var e, n;
                                    return a().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        return "" == i && r.IS_LOCAL,
                                                        1 == r.IS_LOCAL && console.log("initWithSkillWithGafSync=>" + i),
                                                            this._resID = i,
                                                            this._loaded = !1,
                                                            this._isSkill = !0,
                                                            this._useGaf = !0,
                                                        this.getComponent(c) || this.addComponent(c),
                                                            e = this.getComponent(c),
                                                            n = i + "/" + i + ".gaf.bin",
                                                            t.next = 11,
                                                            e.syncLoadWithAnyPlist("", ["gaf/skill/" + n], [], 24, h.WrapMode.Loop);
                                                    case 11:
                                                        t.sent.err ? this.loadedCallBack && this.loadedCallBack(!1, this) : (this._loaded = !0,
                                                        this.loadedCallBack && this.loadedCallBack(!0, this));
                                                    case 13:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t, this)
                                }
                            )));
                            return function(i) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        d.initWithEffect = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithEffect=>" + t),
                                this._resID = t,
                                this._isEffect = !0,
                                this._animationName = "EFFECT_" + t,
                                this._defaultAniName = "Normal";
                            for (var i = 0; i < s.ANIMATION_NAME_EFFECT.length; i++) {
                                var e = s.ANIMATION_NAME_EFFECT[i]
                                    , n = C.Instance.getEffectAnimationData(t, e);
                                if (n) {
                                    1 == r.IS_LOCAL && console.log("aniName=>" + e);
                                    for (var a = 0; a < n.eventFrame.length; a++)
                                        1 == r.IS_LOCAL && console.log("eventFrame=>" + n.eventFrame[a].name + "==>" + n.eventFrame[a].frame);
                                    this.loadRes(e, n.res_list, n.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        d.initWithEffectWithGaf = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithEffectWithGaf=>" + t),
                                this._resID = t,
                                this._loaded = !1,
                                this._isEffect = !0,
                                this._useGaf = !0,
                            this.getComponent(c) || this.addComponent(c);
                            var i = t + "/" + t + ".gaf.bin";
                            this.getComponent(c).loadWithAnyPlist("", ["gaf/effect/" + i], [], 24, h.WrapMode.Loop, this.onGAFMvLoadSuccess.bind(this), this.onGAFMvLoadFail.bind(this), this)
                        }
                        ,
                        d.initWithEffectWithGafSync = function() {
                            var t = n(a().mark((function t(i) {
                                    var e, n;
                                    return a().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        return 1 == r.IS_LOCAL && console.log("initWithEffectWithGafSync=>" + i),
                                                            this._resID = i,
                                                            this._loaded = !1,
                                                            this._isEffect = !0,
                                                            this._useGaf = !0,
                                                        this.getComponent(c) || this.addComponent(c),
                                                            e = this.getComponent(c),
                                                            n = i + "/" + i + ".gaf.bin",
                                                            t.next = 10,
                                                            e.syncLoadWithAnyPlist("", ["gaf/effect/" + n], [], 24, h.WrapMode.Loop);
                                                    case 10:
                                                        t.sent.err ? this.loadedCallBack && this.loadedCallBack(!1, this) : (this._loaded = !0,
                                                        this.loadedCallBack && this.loadedCallBack(!0, this));
                                                    case 12:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t, this)
                                }
                            )));
                            return function(i) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        d.initWithBuff = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithBuff=>" + t),
                                this._resID = t,
                                this._animationName = "BUFF_" + t,
                                this._defaultAniName = "Normal";
                            for (var i = 0; i < s.ANIMATION_NAME_BUFF.length; i++) {
                                var e = s.ANIMATION_NAME_BUFF[i]
                                    , n = C.Instance.getBuffAnimationData(t, e);
                                if (n) {
                                    1 == r.IS_LOCAL && console.log("aniName=>" + e);
                                    for (var a = 0; a < n.eventFrame.length; a++)
                                        1 == r.IS_LOCAL && console.log("eventFrame=>" + n.eventFrame[a].name + "==>" + n.eventFrame[a].frame);
                                    this.loadRes(e, n.res_list, n.eventFrame)
                                } else
                                    r.IS_LOCAL
                            }
                        }
                        ,
                        d.initWithBuffWithGaf = function(t) {
                            1 == r.IS_LOCAL && console.log("initWithBuffWithGaf=>" + t),
                                this._resID = t,
                                this._loaded = !1,
                                this._isBuff = !0,
                                this._useGaf = !0,
                            this.getComponent(c) || this.addComponent(c),
                                this.getComponent(c).loadWithAnyPlist("", ["gaf/buff/buffEffects/buffEffects.gaf.bin"], [], 24, h.WrapMode.Loop, this.onGAFMvLoadSuccess.bind(this), this.onGAFMvLoadFail.bind(this), this)
                        }
                        ,
                        d.initWithBuffWithGafSync = function() {
                            var t = n(a().mark((function t(i) {
                                    var e;
                                    return a().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        return 1 == r.IS_LOCAL && console.log("initWithBuffWithGaf=>" + i),
                                                            this._resID = i,
                                                            this._loaded = !1,
                                                            this._isBuff = !0,
                                                            this._useGaf = !0,
                                                        this.getComponent(c) || this.addComponent(c),
                                                            e = this.getComponent(c),
                                                            t.next = 9,
                                                            e.syncLoadWithAnyPlist("", ["gaf/buff/buffEffects/buffEffects.gaf.bin"], [], 24, h.WrapMode.Loop);
                                                    case 9:
                                                        t.sent.err ? this.loadedCallBack && this.loadedCallBack(!1, this) : (this._loaded = !0,
                                                        this.loadedCallBack && this.loadedCallBack(!0, this));
                                                    case 11:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t, this)
                                }
                            )));
                            return function(i) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        d.loadRes = function(t, i, e) {
                            this.createAniNode(t);
                            for (var n = [], a = 0; a < e.length; a++) {
                                var s = e[a]
                                    , o = new A;
                                o.name = s.name,
                                    o.frame = s.frame,
                                    o.params = s.params,
                                    n.push(o)
                            }
                            var l = this._aniMap[t];
                            if (l) {
                                var r = "IDLE" == t ? h.WrapMode.Loop : h.WrapMode.Normal;
                                l.loadWithAnyPlist("dynamic", i, n, 24, r, this.onLoadMvSuccess, this.onLoadMvFail, this),
                                    l.node.on(_.FRAMEANIMATION_FRAME_EVENT, this.onFrameEvent, this)
                            }
                        }
                        ,
                        d.unload = function() {}
                        ,
                        d.onFrameEvent = function(t) {}
                        ,
                        d.onLoadMvFail = function(t, i) {}
                        ,
                        d.onLoadMvSuccess = function(t) {
                            this._loadedRes.push(t.name),
                            1 == r.IS_LOCAL && console.log("loading=========" + t.name + "===" + this._loadedRes.length),
                            this._loadedRes.length >= this._aniCount && this.success && this.success()
                        }
                        ,
                        d.play = function(t) {
                            if (this._useGaf) {
                                if (this.visible = !0,
                                    this._isPet)
                                    return void this.playGaf("Spirit", t);
                                if (this._isBuff)
                                    return void this.playGaf("Effect_" + this._resID, "Effect_" + this._resID);
                                if (this._isSkill)
                                    return void this.playGaf("Effect", t);
                                if (this._isEffect)
                                    return void this.playGaf("Effect", t)
                            }
                            1 == r.IS_LOCAL && console.log("SpiritAnimationContainerGaf==play==" + t + "==nameLog==" + this._nameLog),
                            null != t && null != t || (t = this._defaultAniName);
                            var i = !1;
                            for (var e in this._curSpiritAni = null,
                                this._aniMap) {
                                var n = this._aniMap[e];
                                n && (e == t ? (i = !0,
                                    n.node.active = !0,
                                    n.play(),
                                    this._curSpiritAni = n) : (n.node.active = !1,
                                    n.stop()))
                            }
                            0 == i && (r.IS_LOCAL,
                            1 == r.IS_LOCAL && console.error(this._animationName + "==>>" + t + "动画不存在"))
                        }
                        ,
                        d.playGaf = function(t, i) {
                            this.visible = !0,
                            1 == r.IS_LOCAL && console.log("SpiritAnimationContainerGaf==playGaf====" + t + "==" + i + "==nameLog==" + this._nameLog);
                            var e = this.getComponent(c);
                            e || r.IS_LOCAL,
                                e.play(t, i)
                        }
                        ,
                        d.stop = function() {
                            this._useGaf ? this.getComponent(c).stop() : (this._curSpiritAni && this._curSpiritAni.stop(),
                                this._curSpiritAni = null)
                        }
                        ,
                        d.gotoAndStopGaf = function(t, i) {
                            return !!this._useGaf && (this.visible = !0,
                                this.getComponent(c).gotoAndStop(t, i))
                        }
                        ,
                        d.release = function() {
                            this.loadedCallBack = null;
                            var t = this.getComponent(c);
                            t && t.release()
                        }
                        ,
                        d.clone = function() {
                            var t = new s;
                            switch (t.resType = this.resType,
                                this._resType) {
                                case l.RES_TYPE_IMAGE:
                                    r.IS_LOCAL;
                                    break;
                                case l.RES_TYPE_PET_ANIMATION:
                                    this._useGaf ? t.initWithPetWithGaf(this._resID) : t.initWithPet(this._resID);
                                    break;
                                case l.RES_TYPE_SKILL_ANIMATION:
                                    this._useGaf ? t.initWithSkillWithGaf(this._resID) : t.initWithSkill(this._resID);
                                    break;
                                case l.RES_TYPE_EFFECT_ANIMATION:
                                    this._useGaf ? t.initWithEffectWithGaf(this._resID) : t.initWithEffect(this._resID);
                                    break;
                                case l.RES_TYPE_BUFF_ANIMATION:
                                    this._useGaf ? t.initWithBuffWithGaf(this._resID) : t.initWithBuff(this._resID);
                                    break;
                                default:
                                    r.IS_LOCAL
                            }
                            return t
                        }
                        ,
                        e(s, [{
                            key: "resType",
                            get: function() {
                                return this._resType
                            },
                            set: function(t) {
                                null != t && null != t || r.IS_LOCAL,
                                    this._resType = t
                            }
                        }, {
                            key: "nameLog",
                            get: function() {
                                return this._nameLog
                            },
                            set: function(t) {
                                this._nameLog = t
                            }
                        }]),
                        s
                }(d));
                I.ANIMATION_NAME_BUFF = ["Normal"],
                    I.ANIMATION_NAME_SKILL = ["Normal"],
                    I.ANIMATION_NAME_EFFECT = ["Normal", "BALL_APPEAR", "BALL_RECIEVE", "BALL_GETSUCCESS", "BALL_GETFAILED", "BALL_STAY", "BALL_SMOKE", "BALL_APPEAR2"],
                    I.ANIMATION_NAME_PET = ["IDLE", "STB", "BTS", "APPEAR", "ATTACK", "UNDER_ATTACK", "BEAT_DOWN", "MISS", "MAGIC_START", "MAGIC_FOCUS", "MAGIC_END", "DEAD"],
                    I.ANIMATION_EVENT_CHECK = new Map,
                    s._RF.pop()
            }
        }
    }
));
