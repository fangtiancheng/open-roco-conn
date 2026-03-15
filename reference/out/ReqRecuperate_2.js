System.register("chunks:///_virtual/ReqRecuperate3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts"], (function(e) {
        var t, n, o;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.ProtocolHelper
                }
            ],
            execute: function() {
                n._RF.push({}, "b52da2Y5k5JP4Giv9TnLiPR", "ReqRecuperate", void 0);
                e("ReqRecuperate", function() {
                    function e() {
                        this.returnCode = void 0
                    }
                    var n = e.prototype;
                    return n.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG,
                            console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        n.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG,
                                console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        n.read = function(e) {
                            this.returnCode = o.ReadCode(e)
                        }
                        ,
                        n.write = function(e) {
                            e.writeUnsignedInt(0)
                        }
                        ,
                        t(e, [{
                            key: "length",
                            get: function() {
                                return 4
                            }
                        }]),
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
