System.register("chunks:///_virtual/ActionDeleteSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts"], (function(e) {
        var t, n, c, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    c = e.EventDispatcher
                }
                , function(e) {
                    s = e.VideoEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "ecb40db8i1GyI/HLwvD70Wv", "ActionDeleteSegment", void 0);
                e("ActionDeleteSegment", function(e) {
                    function n() {
                        var t;
                        return (t = e.call(this) || this).stagemc = void 0,
                            t.screen = void 0,
                            console.log("Segment初始化=>>"),
                            console.log("ActionDeleteSegment"),
                            t
                    }
                    t(n, e);
                    var c = n.prototype;
                    return c.ready = function() {}
                        ,
                        c.setData = function(e) {}
                        ,
                        c.setScreen = function(e) {
                            this.screen = e,
                                this.stagemc = this.screen.getVideoStage()
                        }
                        ,
                        c.start = function() {
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                                this.dispatchEvent(new s(s.ON_SEG_END))
                        }
                        ,
                        c.cancel = function() {}
                        ,
                        c.dispose = function() {
                            this.screen.getEffectsLayer().deleteAllNm(),
                                this.screen.getEffectsLayer().deleteAllEffect(),
                                this.stagemc = null,
                                this.screen = null
                        }
                        ,
                        n
                }(c));
                n._RF.pop()
            }
        }
    }
));
