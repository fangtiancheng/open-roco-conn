System.register("chunks:///_virtual/CombatVideoPlayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts"], (function(t) {
        var e, n, s, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.EventDispatcher
                }
                , function(t) {
                    i = t.VideoEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "8e389VsOF1KTohF23kRFrfK", "CombatVideoPlayer", void 0);
                t("CombatVideoPlayer", function(t) {
                    function n() {
                        for (var e, n = arguments.length, s = new Array(n), i = 0; i < n; i++)
                            s[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(s)) || this).vsArr = void 0,
                            e.curVS = void 0,
                            e.isPlaying = !1,
                            e
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.onSegEnd = function(t) {
                        var e = "";
                        t.__constructor__ && (e = t.__constructor__),
                            CONFIG.DEBUG,
                            console.log("[CombatVideoPlayer==>" + e + "] 一个片段完毕播放完毕!!"),
                            this.stopCurSegment(),
                            this.nextSegmentPlay()
                    }
                        ,
                        s.nextSegmentPlay = function() {
                            if (this.stopCurSegment(),
                            null == this.vsArr || 0 == this.vsArr.length)
                                return this.isPlaying = !1,
                                    this.dispatchEvent(new i(i.ON_SVP_END)),
                                    CONFIG.DEBUG,
                                    void console.log("[CombatVideoPlayer] 战斗动画过程播放完毕!!");
                            this.curVS = this.vsArr.shift(),
                                null != this.curVS ? (this.curVS.addEventListener(i.ON_SEG_END, this.onSegEnd, this),
                                    this.curVS.start()) : this.nextSegmentPlay()
                        }
                        ,
                        s.stopCurSegment = function() {
                            null != this.curVS && (this.curVS.removeEventListener(i.ON_SEG_END, this.onSegEnd, this),
                                this.curVS.dispose(),
                                this.curVS = null)
                        }
                        ,
                        s.play = function(t) {
                            if (!(t.length <= 0))
                                if (this.isPlaying) {
                                    CONFIG.DEBUG,
                                        console.log("[CombatVideoPlayer] 当前动画没有播放完毕"),
                                        this.vsArr = this.vsArr.concat(t),
                                        console.log("CombatVideoPlayer=>>play一下Segment=>>>");
                                    for (e = 0; e < this.vsArr.length; e++)
                                        console.log("" + this.vsArr[e].constructor.name)
                                } else {
                                    this.vsArr = t,
                                        console.log("CombatVideoPlayer=>>play一下Segment=>>>");
                                    for (var e = 0; e < this.vsArr.length; e++)
                                        console.log("" + this.vsArr[e].constructor.name);
                                    this.nextSegmentPlay(),
                                        this.isPlaying = !0
                                }
                        }
                        ,
                        s.cancel = function() {
                            this.stopCurSegment(),
                                this.vsArr = null,
                                this.isPlaying = !1
                        }
                        ,
                        s.reset = function() {
                            this.curVS = null,
                                this.vsArr = null,
                                this.isPlaying = !1
                        }
                        ,
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
