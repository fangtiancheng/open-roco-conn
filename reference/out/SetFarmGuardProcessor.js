System.register("chunks:///_virtual/SetFarmGuardProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts"], (function(e) {
        var t, r, o;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    o = e.ProtocolHelper
                }
            ],
            execute: function() {
                r._RF.push({}, "e973bWPaLdLVoI3de6R0x19", "SetFarmGuardProcessor", void 0);
                e("SetFarmGuardProcessor", function() {
                    var e = r.prototype;
                    function r() {
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
                            this.returnCode = o.ReadCode(e)
                        }
                        ,
                        e.write = function(e) {
                            e.writeByte(this.bagIndex)
                        }
                        ,
                        t(r, [{
                            key: "length",
                            get: function() {
                                return 1
                            }
                        }]),
                        r
                }());
                r._RF.pop()
            }
        }
    }
));
