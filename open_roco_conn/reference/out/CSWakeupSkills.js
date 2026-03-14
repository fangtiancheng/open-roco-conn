System.register("chunks:///_virtual/CSWakeupSkills.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
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
                n._RF.push({}, "c1421UtA9RAYKTr4SWhTar7", "CSWakeupSkills", void 0);
                t("CSWakeupSkills", function() {
                    function t() {
                        this.id = void 0,
                            this.index = void 0
                    }
                    var n = t.prototype;
                    return n.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        n.write = function(t) {
                            t.writeUnsignedInt(this.id),
                                t.writeByte(this.index)
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 5
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
