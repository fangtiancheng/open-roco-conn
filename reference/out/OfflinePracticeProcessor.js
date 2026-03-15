System.register("chunks:///_virtual/OfflinePracticeProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts"], (function(e) {
        var t, n, r;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.ProtocolHelper
                }
            ],
            execute: function() {
                n._RF.push({}, "6cd38bpBvxPmprly2DnP41l", "OfflinePracticeProcessor", void 0);
                e("OfflinePracticeProcessor", function() {
                    var e = n.prototype;
                    function n() {
                        this.bagIndex = void 0,
                            this.returnCode = void 0
                    }
                    return e.IAngelDataInputJudge = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        e.IAngelDataOutputJudge = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        e.read = function(e) {
                            this.returnCode = r.ReadCode(e)
                        }
                        ,
                        e.write = function(e) {
                            e.writeByte(this.bagIndex)
                        }
                        ,
                        t(n, [{
                            key: "length",
                            get: function() {
                                return 1
                            }
                        }]),
                        n
                }());
                n._RF.pop()
            }
        }
    }
));
