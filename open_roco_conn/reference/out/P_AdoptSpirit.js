System.register("chunks:///_virtual/P_AdoptSpirit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts", "./SpiritKey.ts"], (function(t) {
        var e, o, n, i;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    n = t.ProtocolHelper
                }
                , function(t) {
                    i = t.SpiritKey
                }
            ],
            execute: function() {
                o._RF.push({}, "9777c6ksrVL9Z7bgPAqRG8t", "P_AdoptSpirit", void 0);
                t("P_AdoptSpirit", function() {
                    function t() {
                        this.key = void 0,
                            this.code = void 0
                    }
                    var o = t.prototype;
                    return o.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        o.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        o.read = function(t) {
                            this.code = n.ReadCode(t),
                            this.code.isError() || (this.key = new i,
                                this.key.read(t))
                        }
                        ,
                        o.write = function(t) {
                            this.key.write(t)
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 8
                            }
                        }]),
                        t
                }());
                o._RF.pop()
            }
        }
    }
));
