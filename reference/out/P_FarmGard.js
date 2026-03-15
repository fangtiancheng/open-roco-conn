System.register("chunks:///_virtual/P_FarmGard.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts", "./STSpiritInfo.ts"], (function(t) {
        var e, i, o, n;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.ProtocolHelper
                }
                , function(t) {
                    n = t.STSpiritInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "8fe396b4aZFsJ20z/byX9SQ", "P_FarmGard", void 0);
                t("P_FarmGard", function() {
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
                            if (this.code = o.ReadCode(t),
                                this.code.isError())
                                console.log("this.code is Error");
                            else {
                                console.log("this.code is Right");
                                var e = t.readUnsignedShort();
                                this.spirits = [];
                                for (var i = 0; i < e; i++) {
                                    var r = new n;
                                    r.read(t),
                                        this.spirits.push(r)
                                }
                                console.log("read is Down")
                            }
                        }
                        ,
                        t.write = function(t) {
                            t.writeUnsignedInt(this.id),
                                t.writeUnsignedInt(this.caughtTime)
                        }
                        ,
                        e(i, [{
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
