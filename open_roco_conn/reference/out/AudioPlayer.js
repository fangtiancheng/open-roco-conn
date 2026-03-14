System.register("chunks:///_virtual/AudioPlayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioChannel.ts", "./EventDispatcher.ts", "./AudioNode.ts"], (function(n) {
        var t, e, o, i, s;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    o = n.AudioChannel
                }
                , function(n) {
                    i = n.EventDispatcher
                }
                , function(n) {
                    s = n.AudioNode
                }
            ],
            execute: function() {
                e._RF.push({}, "74a2f1aKYJHMaxrSxmUEqPM", "AudioPlayer", void 0);
                var u = n("AudioPlayer", function(n) {
                    function e() {
                        var t;
                        return (t = n.call(this) || this)._sysApi = void 0,
                            t._channels = void 0,
                            t._volume = 0,
                            t._audioNode = void 0,
                            t._sysApi = null,
                            t._channels = new Map,
                            t._volume = 100,
                            t._audioNode = new s,
                            t._audioNode.setVolume(t._volume),
                            t
                    }
                    t(e, n);
                    var i = e.prototype;
                    return i.setAngelSysAPI = function(n) {
                        this._sysApi = n
                    }
                        ,
                        i.setPath = function(n, t) {}
                        ,
                        i.getPath = function() {
                            return null
                        }
                        ,
                        i.getLength = function() {
                            return 0
                        }
                        ,
                        i.setVolume = function(n) {
                            this._volume = n,
                                this._audioNode.setVolume(n),
                                this.applyVolumeToAllChannels()
                        }
                        ,
                        i.getVolume = function() {
                            return this._volume
                        }
                        ,
                        i.getPosition = function() {
                            return 0
                        }
                        ,
                        i.stop = function() {
                            this._audioNode.stop()
                        }
                        ,
                        i.pause = function() {
                            this._audioNode.pause()
                        }
                        ,
                        i.play = function(n) {
                            this._audioNode.play()
                        }
                        ,
                        i.dispose = function() {}
                        ,
                        i.setPaths = function(n, t) {
                            null != this._sysApi && null != n && null != n && this._audioNode && n.length > 0 && this._audioNode.setPaths(n)
                        }
                        ,
                        i.getPaths = function() {
                            return []
                        }
                        ,
                        i.applyVolumeToAllChannels = function() {}
                        ,
                        i.disposeAllChannels = function() {
                            for (var n in this._channels)
                                this._channels[n]instanceof o && (this._channels[n].dispose(),
                                    delete this._channels[n])
                        }
                        ,
                        e
                }(i));
                u.BUNDLE_KEY = "audio",
                    u.PVE_MUSIC_PATH = "music/CombatBGMusic_pve",
                    u.PVP_MUSIC_PATH = "music/CombatBGMusic_pvp",
                    u.BG_MUSIC_PATH = "music/new_03",
                    e._RF.pop()
            }
        }
    }
));
