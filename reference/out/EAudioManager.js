System.register("chunks:///_virtual/EAudioManager.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "e5a3d+qUG5KoJ2KA1xt420g", "EAudioManager", void 0);
                t("EAudioManager", function() {
                    function t() {
                        this._sysApi = void 0,
                            this._volume = 0,
                            this._dict = void 0,
                            this._sysApi = null,
                            this._volume = 100,
                            this._dict = new Map
                    }
                    var n = t.prototype;
                    return n.setAngelSysAPI = function(t) {
                        this._sysApi = t
                    }
                        ,
                        n.setPath = function(t) {}
                        ,
                        n.playEAudio = function(t, n) {}
                        ,
                        n.stopAllEAudio = function() {}
                        ,
                        n.stopEAudio = function(t) {}
                        ,
                        n.unregisterAll = function() {}
                        ,
                        n.dispose = function() {
                            this.unregisterAll(),
                                this._dict = null
                        }
                        ,
                        n.setVolume = function(t) {
                            this._volume = t,
                                this.applyVolumeToAllChannels()
                        }
                        ,
                        n.getVolume = function() {
                            return this._volume
                        }
                        ,
                        n.applyVolumeToAllChannels = function() {}
                        ,
                        n.onAddOverSoundEffect = function(t) {}
                        ,
                        n.onAddClickSoundEffect = function(t) {}
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
