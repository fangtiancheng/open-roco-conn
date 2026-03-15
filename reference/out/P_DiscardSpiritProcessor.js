System.register("chunks:///_virtual/P_DiscardSpiritProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts"], (function(t) {
        var o, i, e;
        return {
            setters: [function(t) {
                o = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    e = t.ProtocolHelper
                }
            ],
            execute: function() {
                i._RF.push({}, "b9b12ILJ+ZCDILqy3Cjv24n", "P_DiscardSpiritProcessor", void 0);
                t("P_DiscardSpiritProcessor", function() {
                    var t = i.prototype;
                    function i() {
                        this.id = void 0,
                            this.caughtTime = void 0,
                            this.code = void 0,
                            this.spirits = void 0
                    }
                    return t.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        t.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        t.read = function(t) {
                            this.code = e.ReadCode(t),
                                this.code.isError() ? console.log("this.code is Error") : console.log("this.code is Right")
                        }
                        ,
                        t.write = function(t) {
                            t.writeUnsignedInt(this.id),
                                t.writeUnsignedInt(this.caughtTime)
                        }
                        ,
                        o(i, [{
                            key: "length",
                            get: function() {
                                return 8
                            }
                        }]),
                        i
                }());
                i._RF.pop()
            }
        }
    }
));
