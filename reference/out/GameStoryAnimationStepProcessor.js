System.register("chunks:///_virtual/GameStoryAnimationStepProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameStoryStepProcessor.ts"], (function(t) {
        var o, e, n;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.GameStoryStepProcessor
                }
            ],
            execute: function() {
                e._RF.push({}, "45577vAHL1B76ii9cRJOqrP", "GameStoryAnimationStepProcessor", void 0);
                t("GameStoryCreateAnimationStepProcessor", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return o(e, t),
                        e.prototype.onExecute = function(t, o) {
                            return new Promise((function(e) {
                                    o.create(t.animationName),
                                        o.stop(),
                                        e()
                                }
                            ))
                        }
                        ,
                        e
                }(n)),
                    t("GameStoryAnimationGotoAndStopStepProcessor", function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return o(e, t),
                            e.prototype.onExecute = function(t, o) {
                                return new Promise((function(e) {
                                        o.gotoAndStop(t.frame),
                                            e()
                                    }
                                ))
                            }
                            ,
                            e
                    }(n));
                e._RF.pop()
            }
        }
    }
));
