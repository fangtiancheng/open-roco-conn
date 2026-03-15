System.register("chunks:///_virtual/P_ReleasingSpirit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts", "./SpiritKey.ts"], (function(t) {
        var e, i, n, o;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.ProtocolHelper
                }
                , function(t) {
                    o = t.SpiritKey
                }
            ],
            execute: function() {
                i._RF.push({}, "14473u/fvpGOYquOpz4CBMh", "P_ReleasingSpirit", void 0);
                t("P_ReleasingSpirit", function() {
                    function t() {
                        this.key = void 0,
                            this.safeCode = void 0,
                            this.code = void 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        i.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        i.read = function(t) {
                            this.code = n.ReadCode(t),
                            this.code.isError() || (this.key = new o,
                                this.key.read(t))
                        }
                        ,
                        i.write = function(t) {
                            this.key.write(t),
                                t.writeUnsignedInt(this.safeCode)
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 12
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
