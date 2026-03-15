System.register("chunks:///_virtual/AnimationLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritAnimation.ts", "./NodeExtend.ts", "./SpiritAnimationCfgLoader.ts"], (function(t) {
        var i, n, o, e, s, a, r, h, c;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        e = t.isValid,
                        s = t.AnimationClip,
                        a = t.Component
                }
                , function(t) {
                    r = t.SpiritAnimation
                }
                , function(t) {
                    h = t.NodeExtend
                }
                , function(t) {
                    c = t.SpiritAnimationCfgLoader
                }
            ],
            execute: function() {
                o._RF.push({}, "959089g0n5N1bOD1274df/y", "AnimationLoader", void 0);
                var u = t("AnimationLoader", function(t) {
                    function o() {
                        for (var i, n = arguments.length, o = new Array(n), e = 0; e < n; e++)
                            o[e] = arguments[e];
                        return (i = t.call.apply(t, [this].concat(o)) || this)._root = null,
                            i._ani = void 0,
                            i.mode = r.SPIRITANIMATION_MODE_BUNDLE,
                            i.wrapMode = s.WrapMode.Loop,
                            i.success = null,
                            i
                    }
                    i(o, t);
                    var a = o.prototype;
                    return a.checkInit = function() {
                        this._root || (this._root = new h,
                            this.node.addChild(this._root)),
                        0 == e(this._root) && (this._root = null,
                            this._root = new h),
                        this._ani || (this._ani = this._root.addComponent(r),
                            this._ani.mode = this.mode),
                            this._root.active = !0
                    }
                        ,
                        a.setPath = function(t, i) {
                            this.checkInit();
                            var n = [i];
                            return this.loadRes(t, n, []),
                                this
                        }
                        ,
                        a.loadText = function(t) {
                            this.checkInit();
                            var i = ["plist/pk_load"];
                            return this.loadRes("text", i, []),
                                this
                        }
                        ,
                        a.initWithWeather = function(t) {
                            this.checkInit();
                            for (var i = 0; i < o.ANIMATION_NAME_WEATHER.length; i++) {
                                var n = o.ANIMATION_NAME_WEATHER[i]
                                    , e = c.Instance.getWeatherAnimationData(t, n);
                                if (e) {
                                    console.log("AnimationLoader==initWithWeather==aniName=>" + n);
                                    for (var s = 0; s < e.eventFrame.length; s++)
                                        console.log("eventFrame=>" + e.eventFrame[s].name + "==>" + e.eventFrame[s].frame);
                                    this.loadRes("dynamic", e.res_list, e.eventFrame)
                                }
                            }
                            return this
                        }
                        ,
                        a.initWithPet = function(t, i) {
                            this.checkInit();
                            var n = new Array;
                            return n.push("pet_1600/3019/IDLE-0"),
                                n.push("pet_1600/3019/IDLE-1"),
                                this.loadRes("dynamic", n, {}),
                                this
                        }
                        ,
                        a.removePngExtension = function(t) {
                            return t.endsWith(".plist") ? t.slice(0, -6) : t
                        }
                        ,
                        a.loadRes = function(t, i, n) {
                            if (this.mode == r.SPIRITANIMATION_MODE_BUNDLE)
                                for (var o = 0; o < i.length; o++) {
                                    var e = i[o];
                                    i[o] = this.removePngExtension(e)
                                }
                            this._ani.loadWithAnyPlist(t, i, n, 24, this.wrapMode, this.onLoadMvSuccess, this.onLoadMvFail, this),
                                this._ani.node.on(r.FRAMEANIMATION_FRAME_EVENT, this.onFrameEvent, this)
                        }
                        ,
                        a.unload = function() {
                            this.checkInit()
                        }
                        ,
                        a.onFrameEvent = function(t) {}
                        ,
                        a.onLoadMvFail = function(t, i) {}
                        ,
                        a.onLoadMvSuccess = function(t) {
                            this.play(),
                            this.success && this.success()
                        }
                        ,
                        a.play = function() {
                            this._ani && (this.node.active = !0,
                                this._ani.play())
                        }
                        ,
                        a.stop = function() {
                            this._ani && (this.node.active = !1,
                                this._ani.stop())
                        }
                        ,
                        a.reset = function() {
                            this.node.active = !1
                        }
                        ,
                        a.onDestroy = function() {
                            this._ani && (this._ani.destroy(),
                                this._ani = null),
                            this._root && (this._root.destroy(),
                                this._root = null)
                        }
                        ,
                        n(o, [{
                            key: "root",
                            get: function() {
                                return this._root
                            }
                        }]),
                        o
                }(a));
                u.ANIMATION_NAME_WEATHER = ["Normal"],
                    u.ANIMATION_NAME_PET = ["IDLE", "STB", "BTS", "APPEAR", "ATTACK", "UNDER_ATTACK", "BEAT_DOWN", "MISS", "MAGIC_START", "MAGIC_FOCUS", "MAGIC_END"],
                    o._RF.pop()
            }
        }
    }
));
