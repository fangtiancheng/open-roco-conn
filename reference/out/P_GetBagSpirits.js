System.register("chunks:///_virtual/P_GetBagSpirits.ts", ["cc", "./ProtocolHelper.ts", "./P_BagSpiritData.ts"], (function(t) {
        var i, e, r;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    e = t.ProtocolHelper
                }
                , function(t) {
                    r = t.P_BagSpiritData
                }
            ],
            execute: function() {
                i._RF.push({}, "2e9208OHKRM6rA6qTzRZ25d", "P_GetBagSpirits", void 0);
                t("P_GetBagSpirits", function() {
                    function t() {
                        this.spiritDataCls = r,
                            this.code = void 0,
                            this.following = void 0,
                            this.spirits = void 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        i.read = function(t) {
                            if (this.code = e.ReadCode(t),
                                !this.code.isError()) {
                                this.following = t.readUnsignedByte();
                                var i = t.readUnsignedShort();
                                this.spirits = [];
                                for (var r = 0; r < i; r++) {
                                    var s = new this.spiritDataCls;
                                    s.index = r + 1,
                                        s.read(t),
                                        this.spirits.push(s)
                                }
                            }
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
