System.register("chunks:///_virtual/SoundManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts"], (function(t) {
        var e, s, u, i, c, o, n, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy,
                        u = t._decorator,
                        i = t.AudioSource,
                        c = t.sys,
                        o = t.error,
                        n = t.Component
                }
                , function(t) {
                    f = t.default
                }
            ],
            execute: function() {
                var l, a;
                s._RF.push({}, "ff6a9fJdfBDraS5VMk29PdY", "SoundManager", void 0);
                var r = u.ccclass;
                u.property,
                    t("default", r("SoundManager")(((a = function(t) {
                        function s() {
                            for (var e, s = arguments.length, u = new Array(s), i = 0; i < s; i++)
                                u[i] = arguments[i];
                            return (e = t.call.apply(t, [this].concat(u)) || this).musicMute = 0,
                                e.effectMute = 0,
                                e.effectVolume = 1,
                                e.musicVolume = 1,
                                e.musicAS = null,
                                e.effect_as = [],
                                e.cur_as = 0,
                                e
                        }
                        e(s, t);
                        var u = s.prototype;
                        return u.onLoad = function() {
                            if (null === s.Instance) {
                                s.Instance = this,
                                    this.musicAS = this.node.addComponent(i),
                                    this.musicAS.volume = this.musicVolume,
                                1 === this.musicMute && (this.musicAS.volume = 0);
                                for (var t = 0; t < 8; t++) {
                                    var e = this.node.addComponent(i);
                                    this.effect_as.push(e),
                                        e.volume = this.effectVolume,
                                    1 === this.effectMute && (e.volume = 0)
                                }
                                this.cur_as = 0
                            } else
                                this.destroy()
                        }
                            ,
                            u.getMusicVolume = function() {
                                return this.musicVolume
                            }
                            ,
                            u.setMusicVolume = function(t) {
                                this.musicVolume = t,
                                    this.musicAS.volume = t,
                                    c.localStorage.setItem("musicVolume", t)
                            }
                            ,
                            u.getMusicMute = function() {
                                return this.musicMute
                            }
                            ,
                            u.setMusicMute = function(t) {
                                var e = t ? 1 : 0;
                                this.musicMute != e && (this.musicMute = e,
                                    1 === this.musicMute ? this.musicAS.volume = 0 : this.musicAS.volume = this.musicVolume,
                                    c.localStorage.setItem("musicMute", e.toString()))
                            }
                            ,
                            u.getEffectVolume = function() {
                                return this.effectVolume
                            }
                            ,
                            u.setEffectVolume = function(t) {
                                for (var e = 0; e < this.effect_as.length; e++)
                                    this.effect_as[e].volume = t;
                                this.effectVolume = t,
                                    c.localStorage.setItem("effectVolume", t)
                            }
                            ,
                            u.getEffectMute = function() {
                                return this.effectMute
                            }
                            ,
                            u.setEffectMute = function(t) {
                                var e = t ? 1 : 0;
                                if (this.effectMute != e) {
                                    for (var s = 0; s < this.effect_as.length; s++)
                                        1 === this.effectMute ? this.effect_as[s].volume = 0 : this.effect_as[s].volume = this.effectVolume;
                                    this.effectMute = e,
                                        c.localStorage.setItem("effectMute", e.toString())
                                }
                            }
                            ,
                            u.playMusic = function(t, e) {
                                e = !!e,
                                    this.musicAS.loop = e,
                                    this.musicAS.clip = f.Instance.getAsset("Sounds", t),
                                    this.musicAS.clip ? this.musicAS.play() : o("music audio clip null: ", t)
                            }
                            ,
                            u.stopMusic = function() {
                                this.musicAS.stop()
                            }
                            ,
                            u.playEffect = function(t) {
                                var e = this.effect_as[this.cur_as];
                                this.cur_as++,
                                this.cur_as >= 8 && (this.cur_as = 0),
                                    e.clip = f.Instance.getAsset("Sounds", t),
                                    e.clip ? e.play() : o("effect audio clip null: ", t)
                            }
                            ,
                            s
                    }(n)).Instance = null,
                        l = a)) || l);
                s._RF.pop()
            }
        }
    }
));
