System.register("chunks:///_virtual/MediaSysManager.ts", ["cc", "./AudioPlayer.ts", "./VideoPlayer.ts", "./EAudioManager.ts"], (function(e) {
        var t, s, i, l;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    s = e.AudioPlayer
                }
                , function(e) {
                    i = e.VideoPlayer
                }
                , function(e) {
                    l = e.EAudioManager
                }
            ],
            execute: function() {
                t._RF.push({}, "e9175sWCpxNlLkvZwWpZui5", "MediaSysManager", void 0);
                e("MediaSysManager", function() {
                    function e() {
                        this._sysApi = void 0,
                            this._bgAudioPlayer = void 0,
                            this._effectAudioManager = void 0,
                            this._globalVolume = 0,
                            this._globalMuteVolume = 0,
                            this._players = void 0,
                            this._bgAudioPlayer = new s,
                            this._effectAudioManager = new l,
                            this._players = [],
                            this._globalVolume = 100,
                            this._globalMuteVolume = this._globalVolume
                    }
                    var t = e.prototype;
                    return t.setAngelSysAPI = function(e) {
                        this._sysApi = e,
                            this._bgAudioPlayer.setAngelSysAPI(this._sysApi),
                            this._effectAudioManager.setAngelSysAPI(this._sysApi);
                        for (var t = 0; t < this._players.length; ++t)
                            this._players[t]instanceof s && this._players[t].setAngelSysAPI(this._sysApi);
                        this.setGlobalVolume(this._globalVolume),
                            this.setMute(!1)
                    }
                        ,
                        t.createAudioPlayer = function() {
                            var e = new s;
                            return e.setAngelSysAPI(this._sysApi),
                                e.setVolume(this._globalVolume),
                                this._players.push(e),
                                e
                        }
                        ,
                        t.createVideoPlayer = function() {
                            return new i
                        }
                        ,
                        t.setGlobalVolume = function(e) {
                            this._globalVolume = e,
                                this._bgAudioPlayer.setVolume(this._globalVolume),
                                this._effectAudioManager.setVolume(this._globalVolume);
                            for (var t = 0; t < this._players.length; ++t)
                                this._players[t]instanceof s && this._players[t].setVolume(this._globalVolume)
                        }
                        ,
                        t.getGlobalVolume = function() {
                            return this._globalVolume
                        }
                        ,
                        t.getMute = function() {
                            return 0 == this._globalVolume
                        }
                        ,
                        t.setMute = function(e) {
                            e ? (this._globalMuteVolume = this._globalVolume,
                                this._globalVolume = 0,
                                this.setGlobalVolume(0)) : (this._globalVolume = this._globalMuteVolume,
                                this.setGlobalVolume(this._globalVolume))
                        }
                        ,
                        t.getEAudioManager = function() {
                            return this._effectAudioManager
                        }
                        ,
                        t.getBGAudio = function() {
                            return this._bgAudioPlayer
                        }
                        ,
                        t.dispose = function() {
                            this._bgAudioPlayer.dispose(),
                                this._bgAudioPlayer = null;
                            for (var e = 0; e < this._players.length; ++e)
                                this._players[e]instanceof s && this._players[e].dispose();
                            this._players = []
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
