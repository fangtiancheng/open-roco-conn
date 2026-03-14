System.register("chunks:///_virtual/P_ReqFight.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, i;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
            ],
            execute: function() {
                i._RF.push({}, "bd687lh5fVMMrGRc14rOuQT", "P_ReqFight", void 0);
                t("P_ReqFight", function() {
                    function t() {
                        this.skillType = 0,
                            this.spiritIndex = 0,
                            this.skillID = 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG,
                            console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        i.write = function(t) {
                            t.writeByte(this.skillType),
                                t.writeByte(this.spiritIndex),
                                t.writeUnsignedInt(this.skillID)
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 6
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
