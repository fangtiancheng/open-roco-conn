System.register("chunks:///_virtual/ActionChangeWeatherSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts"], (function(t) {
        var e, n, i, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.EventDispatcher
                }
                , function(t) {
                    s = t.VideoEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "8ea31+C+TtC9Jh8YqcQx43I", "ActionChangeWeatherSegment", void 0);
                t("ActionChangeWeatherSegment", function(t) {
                    function n(e) {
                        var n;
                        return (n = t.call(this) || this).aPet = void 0,
                            n.screen = void 0,
                            n.uin = 0,
                            n.posType = 0,
                            n.dataObject = void 0,
                            console.log("Segment初始化=>>"),
                            console.log("ActionChangeWeatherSegment"),
                            n
                    }
                    e(n, t);
                    var i = n.prototype;
                    return i.ready = function() {
                        this.uin = this.dataObject.offenseID,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.posType = this.aPet.getPosType()
                    }
                        ,
                        i.setData = function(t) {
                            this.dataObject = t
                        }
                        ,
                        i.setScreen = function(t) {
                            this.screen = t
                        }
                        ,
                        i.start = function() {
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                            0 != this.dataObject.weather && (this.screen.setWeather(this.dataObject.weather),
                                this.screen.setWeatherRound(this.dataObject.skillBgFlag)),
                                this.dispatchEvent(new s(s.ON_SEG_END))
                        }
                        ,
                        i.cancel = function() {}
                        ,
                        i.dispose = function() {
                            this.aPet = null,
                                this.screen = null,
                                this.dataObject = null
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
