System.register("chunks:///_virtual/CSSwitchSkill.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var i, e;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
            ],
            execute: function() {
                e._RF.push({}, "d7aa1eHsYhEZJUavxvzMtB+", "CSSwitchSkill", void 0);
                t("CSSwitchSkill", function() {
                    function t() {
                        this.id = void 0,
                            this.index = void 0,
                            this.skillIndex = void 0,
                            this.sskillId = void 0
                    }
                    var e = t.prototype;
                    return e.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        e.write = function(t) {
                            t.writeUnsignedInt(this.id),
                                t.writeByte(this.index),
                                t.writeByte(this.skillIndex),
                                t.writeShort(this.sskillId)
                        }
                        ,
                        i(t, [{
                            key: "length",
                            get: function() {
                                return 8
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
