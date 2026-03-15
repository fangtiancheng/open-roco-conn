System.register("chunks:///_virtual/P_ReqCSkill.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
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
                i._RF.push({}, "0ade2DD60FOYalh1+I5l0xh", "P_ReqCSkill", void 0);
                t("P_ReqCSkill", function() {
                    function t() {
                        this.spiritIndex = 0,
                            this.oldSkillID = 0,
                            this.newSkillID = 0,
                            this.version = 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG,
                            console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        i.write = function(t) {
                            t.writeByte(this.spiritIndex),
                                t.writeShort(this.oldSkillID),
                                t.writeShort(this.newSkillID),
                                t.writeUnsignedInt(this.version)
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
                i._RF.pop()
            }
        }
    }
));
