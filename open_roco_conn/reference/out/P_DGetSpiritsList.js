System.register("chunks:///_virtual/P_DGetSpiritsList.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts", "./STSpiritInfo.ts"], (function(t) {
        var i, e, n, o;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.ProtocolHelper
                }
                , function(t) {
                    o = t.STSpiritInfo
                }
            ],
            execute: function() {
                e._RF.push({}, "38c50jp2fZPabziX2nHL51g", "P_DGetSpiritsList", void 0);
                t("P_DGetSpiritsList", function() {
                    function t() {
                        this.code = void 0,
                            this.spirits = void 0,
                            this.numExtraStorage = void 0,
                            this.numExtraStorageLimit = void 0,
                            this.flagResponse = void 0,
                            this.flag = void 0
                    }
                    var e = t.prototype;
                    return e.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        e.IAngelDataInputJudge = function() {
                            CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                        }
                        ,
                        e.read = function(t) {
                            if (this.code = n.ReadCode(t),
                                !this.code.isError()) {
                                this.numExtraStorage = t.readUnsignedShort(),
                                    this.numExtraStorageLimit = t.readUnsignedShort(),
                                    this.flagResponse = t.readUnsignedShort();
                                var i = t.readUnsignedShort();
                                this.spirits = [];
                                for (var e = 0; e < i; e++) {
                                    var r = new o;
                                    r.read(t),
                                        this.spirits.push(r)
                                }
                            }
                        }
                        ,
                        e.write = function(t) {
                            t.writeInt(this.flag)
                        }
                        ,
                        i(t, [{
                            key: "length",
                            get: function() {
                                return 4
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
