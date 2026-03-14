System.register("chunks:///_virtual/GameStoryStepProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, r, n;
        return {
            setters: [function(t) {
                e = t.asyncToGenerator,
                    r = t.regeneratorRuntime
            }
                , function(t) {
                    n = t.cclegacy
                }
            ],
            execute: function() {
                n._RF.push({}, "4c2898/wo5NiqCSFTl48DAb", "GameStoryStepProcessor", void 0);
                t("GameStoryStepProcessor", function() {
                    function t(t, e) {
                        this.step = void 0,
                            this.target = void 0,
                            this.step = t,
                            this.target = e
                    }
                    var n = t.prototype;
                    return n.execute = function() {
                        var t = e(r().mark((function t() {
                                return r().wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                        this.onExecute(this.step, this.target);
                                                case 2:
                                                    if (!(this.step.wait > 0)) {
                                                        t.next = 5;
                                                        break
                                                    }
                                                    return t.next = 5,
                                                        this.wait(this.step.wait);
                                                case 5:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t, this)
                            }
                        )));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                        n.wait = function() {
                            var t = e(r().mark((function t(e) {
                                    return r().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", new Promise((function(t) {
                                                                setTimeout((function() {
                                                                        t()
                                                                    }
                                                                ), e)
                                                            }
                                                        )));
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t)
                                }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        n.onExecute = function(t, e) {
                            return Promise.resolve()
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
