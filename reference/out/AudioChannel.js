System.register("chunks:///_virtual/AudioChannel.ts", ["cc", "./AudioCommands.ts"], (function(n) {
        var t, i;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
                , function(n) {
                    i = n.AudioCommands
                }
            ],
            execute: function() {
                t._RF.push({}, "86609CKEK9AMpw9yvC23+/B", "AudioChannel", void 0);
                n("AudioChannel", function() {
                    function n() {
                        this._sounds = void 0,
                            this._resPath = "",
                            this._volume = 0,
                            this._playingIndex = 0,
                            this._autoPlay = void 0,
                            this._loopTimes = 0,
                            this._command = 0
                    }
                    var t = n.prototype;
                    return t.setAngelSysAPI = function(n) {}
                        ,
                        t.setPath = function(n, t) {}
                        ,
                        t.getPath = function() {
                            return this._resPath
                        }
                        ,
                        t.getLength = function() {
                            return null == this._sounds || null == this._sounds[this._playingIndex] ? 0 : this._sounds[this._playingIndex].length
                        }
                        ,
                        t.setVolume = function(n) {
                            this._volume = n,
                                this.applyVolume()
                        }
                        ,
                        t.getVolume = function() {
                            return this._volume
                        }
                        ,
                        t.getPosition = function() {
                            return 0
                        }
                        ,
                        t.play = function(n) {}
                        ,
                        t.stop = function() {
                            this._command = i.STOP,
                            null != this._sounds && null != this._sounds[this._playingIndex] && this._sounds[this._playingIndex].stop()
                        }
                        ,
                        t.pause = function() {
                            this._command = i.PAUSE,
                            null != this._sounds && null != this._sounds[this._playingIndex] && this._sounds[this._playingIndex].pause()
                        }
                        ,
                        t.dispose = function() {}
                        ,
                        t.clear = function() {}
                        ,
                        t.onSWFResLoaded = function(n) {}
                        ,
                        t.canLoop = function() {
                            return !1
                        }
                        ,
                        t.setup = function(n) {}
                        ,
                        t.playAfter = function(n) {}
                        ,
                        t.playAt = function(n) {}
                        ,
                        t.onDelayPlay = function() {}
                        ,
                        t.applyVolume = function() {}
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
