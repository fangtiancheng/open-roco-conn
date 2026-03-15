System.register("chunks:///_virtual/AngelCombatVideo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts", "./CombatVideoPlayer.ts", "./VideoScreen.ts", "./EffectEvent.ts", "./VideoChangeSpiriteConverter.ts", "./VideoCombatProcessConverter.ts", "./VideoCombatStartConverter.ts", "./AngelTcpHelper.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, n, o, i, r, s, c, a, u, d, h, l, f, g;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    o = e.cclegacy,
                        i = e.Event
                }
                , function(e) {
                    r = e.EventDispatcher
                }
                , function(e) {
                    s = e.VideoEvent
                }
                , function(e) {
                    c = e.CombatVideoPlayer
                }
                , function(e) {
                    a = e.VideoScreen
                }
                , function(e) {
                    u = e.EffectEvent
                }
                , function(e) {
                    d = e.VideoChangeSpiriteConverter
                }
                , function(e) {
                    h = e.VideoCombatProcessConverter
                }
                , function(e) {
                    l = e.VideoCombatStartConverter
                }
                , function(e) {
                    f = e.AngelTcpHelper
                }
                , function(e) {
                    g = e.default
                }
            ],
            execute: function() {
                o._RF.push({}, "84febmqZNFCn7oXWJfvvolm", "AngelCombatVideo", void 0);
                var C = e("AngelCombatVideo", function(e) {
                    function o() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                            o[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(o)) || this).plugin = void 0,
                            t.screen = void 0,
                            t.converter = void 0,
                            t.player = void 0,
                            t._modeType = 0,
                            t.round = 1,
                            t
                    }
                    t(o, e);
                    var r = o.prototype;
                    return r.onSVPEnd = function(e) {
                        this.plugin.onVideoPlayEnd()
                    }
                        ,
                        r.playCombatRecord = function(e, t) {
                            switch (this.setVideoMode(t),
                                t) {
                                case o.VIDEO_COMBAT_START:
                                    this.converter = new l,
                                    1 == f.isDebuggerCombat && 1 == g.IS_LOCAL && (setTimeout((function() {
                                            f.sendb0003(1)
                                        }
                                    ), 2e3),
                                        setTimeout((function() {
                                                f.sendb0004(1)
                                            }
                                        ), 3e3),
                                        setTimeout((function() {
                                                f.sendb0003(1)
                                            }
                                        ), 12e3),
                                        setTimeout((function() {
                                                f.sendb0004(1)
                                            }
                                        ), 13e3));
                                    break;
                                case o.VIDEO_COMBAT_PROCESS:
                                    this.converter = new h;
                                    break;
                                case o.VIDEO_COMBAT_CHANGE:
                                    this.converter = new d
                            }
                            this.converter.screen = this.screen,
                                this.converter.combatData = this.plugin.getCurrCombatData(),
                                this.converter.data = e,
                                this.player.play(this.converter.getSegments()),
                                this.converter.rest()
                        }
                        ,
                        r.setVideoMode = function(e) {
                            this._modeType = e
                        }
                        ,
                        r.cancel = function() {
                            this.player && this.player.cancel()
                        }
                        ,
                        r.setPlugin = function(e) {
                            this.plugin = e
                        }
                        ,
                        r.initialize = function() {
                            this.screen = new a(this.plugin.getCombatStage(),this.plugin.getResModule()),
                                this.player = new c,
                                this.player.addEventListener(s.ON_SVP_END, this.onSVPEnd, this)
                        }
                        ,
                        r.addBlackground = function() {}
                        ,
                        r.effectAllEnd = function(e) {
                            e.currentTarget.removeEventListener(u.EFFECT_ALL_END, this.effectAllEnd, this),
                                this.dispatchEvent(new i(u.EFFECT_ALL_END))
                        }
                        ,
                        r.setStartLoading = function(e) {
                            e ? (this.addBlackground(),
                                this.screen.setLoading(this.plugin.getCurrCombatData())) : this.screen.setLoading(null)
                        }
                        ,
                        r.addTimerBar = function(e, t) {
                            void 0 === t && (t = 10),
                                this.screen.getPrompTxt().showCountDown(t, e),
                                this.screen.showRound(this.round);
                            var n = "————第" + this.round + "回合————";
                            -1 == this.screen.getCombatInfo().getTarget().htmlText.indexOf(n) && (this.screen.getCombatInfo().getTarget().htmlText += n,
                                this.screen.getCombatInfo().getTarget().scrollV = this.screen.getCombatInfo().getTarget().maxScrollV)
                        }
                        ,
                        r.showTimeBarTxt = function(e) {
                            "" == e ? this.screen.getPrompTxt().hidden() : this.screen.getPrompTxt().showTxt(e)
                        }
                        ,
                        r.showRound = function(e) {
                            this.screen.showRound(e)
                        }
                        ,
                        r.updateLoading = function() {
                            this.screen.updateProgress()
                        }
                        ,
                        r.setNpcIcon = function(e) {
                            this.screen.setNpcIcon(e)
                        }
                        ,
                        r.getUIContainer = function() {
                            return this.screen.getUIContainer()
                        }
                        ,
                        r.hidePetsHandler = function() {
                            this.screen.hidePetsHandler()
                        }
                        ,
                        r.reset = function() {
                            console.info("AngelCombatVideo_reset"),
                                this.screen.reset(),
                                this.player.reset(),
                                this.round = 1
                        }
                        ,
                        r.update = function() {}
                        ,
                        n(o, [{
                            key: "videoScreen",
                            get: function() {
                                return this.screen
                            }
                        }]),
                        o
                }(r));
                C.VIDEO_COMBAT_START = 1,
                    C.VIDEO_REMOVE_BUFF = 2,
                    C.VIDEO_COMBAT_PROCESS = 3,
                    C.VIDEO_COMBAT_CHANGE = 4,
                    C.VIDEO_COMBAT_END = 5,
                    o._RF.pop()
            }
        }
    }
));
