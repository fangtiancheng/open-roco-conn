System.register("chunks:///_virtual/P_UInt.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
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
                e._RF.push({}, "b8a2fpKkABHxotOboKpm79F", "P_UInt", void 0);
                t("P_UInt", function() {
                    var t = e.prototype;
                    function e(t) {
                        void 0 === t && (t = 0),
                            this.num = 0,
                            this.num = t
                    }
                    return t.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        t.write = function(t) {
                            t.writeUnsignedInt(this.num)
                        }
                        ,
                        n(e, [{
                            key: "length",
                            get: function() {
                                return 4
                            }
                        }]),
                        e
                }());
                e._RF.pop()
            }
        }
    }
));
