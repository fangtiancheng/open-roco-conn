System.register("chunks:///_virtual/P_PutInBag.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts", "./STSpiritInfo.ts"], (function(t) {
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
                    o = t.STSpiritInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "9cb7dAvypRB1Y0cBaGNE7ar", "P_PutInBag", void 0);
                t("P_PutInBag", function() {
                    function t() {
                        this.key = void 0,
                            this.posIndex = void 0,
                            this.code = void 0,
                            this.numExtraStorage = void 0,
                            this.numExtraStorageLimit = void 0,
                            this.flagResponse = void 0,
                            this.spirits = void 0
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
                            if (this.code = n.ReadCode(t),
                                !this.code.isError()) {
                                this.numExtraStorage = t.readUnsignedShort(),
                                    this.numExtraStorageLimit = t.readUnsignedShort(),
                                    this.flagResponse = t.readUnsignedShort();
                                var e = t.readUnsignedShort();
                                this.spirits = [];
                                for (var i = 0; i < e; i++) {
                                    var r = new o;
                                    r.read(t),
                                        this.spirits.push(r)
                                }
                            }
                        }
                        ,
                        i.write = function(t) {
                            this.key.write(t),
                                t.writeByte(this.posIndex)
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
