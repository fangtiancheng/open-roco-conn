System.register("chunks:///_virtual/AudioNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./BuildLogHelper.ts"], (function(o) {
        var i, u, e, t, a, s, l, c, n, r, _, d;
        return {
            setters: [function(o) {
                i = o.inheritsLoose,
                    u = o.createClass,
                    e = o.assertThisInitialized
            }
                , function(o) {
                    t = o.cclegacy,
                        a = o.AudioClip,
                        s = o.resources,
                        l = o.path,
                        c = o.director,
                        n = o.AudioSource,
                        r = o.Node
                }
                , function(o) {
                    _ = o.default
                }
                , function(o) {
                    d = o.default
                }
            ],
            execute: function() {
                t._RF.push({}, "3bb8elfhkZPrpBAHNsZhYm1", "AudioNode", void 0);
                var h = o("AudioNode", function(o) {
                    function t() {
                        var i;
                        return (i = o.call(this) || this)._volume = 0,
                            i._audioSource = void 0,
                            i._resDone = !1,
                            i._playFlag = !1,
                            i._path = "",
                            i.name = "__audioMgr__",
                            c.getScene().addChild(e(i)),
                            c.addPersistRootNode(e(i)),
                            i._audioSource = i.addComponent(n),
                            i
                    }
                    i(t, o);
                    var r = t.prototype;
                    return r.playOneShot = function(o, i) {
                        var u = this;
                        void 0 === i && (i = 1),
                            o instanceof a ? this._audioSource.playOneShot(o, i) : s.load(o, (function(o, e) {
                                    o ? console.log(o) : u._audioSource.playOneShot(e, i)
                                }
                            ))
                    }
                        ,
                        r.setPaths = function(o, i) {
                            var u = this;
                            void 0 === i && (i = !0),
                            null != o && null != o && (o.length <= 0 || "string" == typeof o[0] && this._audioSource && (this._path != l[0] ? (this._audioSource.clip && this._audioSource.clip.isValid && this._audioSource.stop(),
                                this._audioSource.clip = null,
                                this._resDone = !1,
                            0 != o[0].length && (this._path = o[0],
                                _.Instance.loadingRes(t.BUNDLE_KEY, o[0], (function(o, e, t) {
                                        if (o)
                                            console.log(o);
                                        else {
                                            if (u._path != t)
                                                return void d.IS_LOCAL;
                                            u._audioSource.stop(),
                                                u._audioSource.loop = !0,
                                                u._audioSource.clip = e,
                                            (i || u._playFlag) && u._audioSource.play(),
                                                u.audioSource.volume = u._volume,
                                                u._resDone = !0,
                                                u._playFlag = !1
                                        }
                                    }
                                )))) : this._audioSource.clip && this._audioSource.clip.isValid && (this._audioSource.stop(),
                                this._audioSource.loop = !0,
                            (i || this._playFlag) && this._audioSource.play(),
                                this.audioSource.volume = this._volume,
                                this._resDone = !0,
                                this._playFlag = !1)))
                        }
                        ,
                        r.play = function() {
                            this._resDone ? this._audioSource.play() : this._playFlag = !0
                        }
                        ,
                        r.stop = function() {
                            this._audioSource.stop(),
                                this._playFlag = !1
                        }
                        ,
                        r.pause = function() {
                            this._audioSource.pause(),
                                this._playFlag = !1
                        }
                        ,
                        r.resume = function() {
                            this._audioSource.play(),
                                this._playFlag = !1
                        }
                        ,
                        r.setVolume = function(o) {
                            this._volume = o / 100,
                            this.audioSource && (this.audioSource.volume = this._volume)
                        }
                        ,
                        u(t, [{
                            key: "audioSource",
                            get: function() {
                                return this._audioSource
                            }
                        }]),
                        t
                }(r));
                h.BUNDLE_KEY = "audio",
                    h.PVE_MUSIC_PATH = "music/CombatBGMusic_pve",
                    h.PVP_MUSIC_PATH = "music/CombatBGMusic_pvp",
                    h.BG_MUSIC_PATH = "music/new_03",
                    t._RF.pop()
            }
        }
    }
));
