System.register("chunks:///_virtual/P_Struct.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var n, e;
        return {
            setters: [function(t) {
                n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
            ],
            execute: function() {
                e._RF.push({}, "0fcbaaUdRJN1KglJL0r2Rej", "P_Struct", void 0);
                t("P_Struct", function() {
                    var t = e.prototype;
                    function e(t) {
                        void 0 === t && (t = null),
                            this.len = 0,
                            this.structs = void 0,
                        null != t && this.fill(t)
                    }
                    return t.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        t.fill = function(t) {
                            this.len = 0;
                            for (var n = 0; n < t.length; n++) {
                                var e = t[n];
                                this.len += e.length
                            }
                            this.structs = t
                        }
                        ,
                        t.write = function(t) {
                            for (var n = 0; n < this.structs.length; n++) {
                                this.structs[n].write(t)
                            }
                        }
                        ,
                        n(e, [{
                            key: "length",
                            get: function() {
                                return this.len
                            }
                        }]),
                        e
                }());
                e._RF.pop()
            }
        }
    }
));
