System.register("chunks:///_virtual/P_ReqStart.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
            ],
            execute: function() {
                n._RF.push({}, "a2f3awtDZ9PUZAMp3FL5e+z", "P_ReqStart", void 0);
                t("P_ReqStart", function() {
                    function t() {
                        this.combatType = 1,
                            this.rivalID = 0,
                            this.catchTime = 0
                    }
                    var n = t.prototype;
                    return n.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG,
                            console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        n.write = function(t) {
                            t.writeByte(this.combatType),
                                t.writeUnsignedInt(this.rivalID),
                                t.writeUnsignedInt(this.catchTime)
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 9
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
