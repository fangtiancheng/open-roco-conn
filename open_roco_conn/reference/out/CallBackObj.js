System.register("chunks:///_virtual/CallBackObj.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var n, o, c;
        return {
            setters: [function(t) {
                n = t.createForOfIteratorHelperLoose,
                    o = t.createClass
            }
                , function(t) {
                    c = t.cclegacy
                }
            ],
            execute: function() {
                c._RF.push({}, "0b55b2lxx5BUp5Wn8/qao4+", "CallBackObj", void 0);
                t("CallBackObj", function() {
                    function t(t, n) {
                        this.obj = void 0,
                            this.func = void 0,
                            this.functionCallStack = [],
                            this.func = t,
                            this.obj = n
                    }
                    var c = t.prototype;
                    return c.dispose = function() {
                        this.func = null,
                            this.obj = null;
                        for (var t, o = n(this.functionCallStack); !(t = o()).done; ) {
                            t.value.dispose()
                        }
                        this.functionCallStack = null
                    }
                        ,
                        c.toString = function() {
                            return "CallBackObj obj=" + this.obj + "func =" + this.func
                        }
                        ,
                        o(t, [{
                            key: "functionCall",
                            get: function() {
                                return this.functionCallStack[0]
                            }
                        }]),
                        t
                }());
                c._RF.pop()
            }
        }
    }
));
