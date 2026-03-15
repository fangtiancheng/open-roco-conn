System.register("chunks:///_virtual/P_DGetAbandonSpiritsList.ts", ["cc", "./ProtocolHelper.ts", "./STSpiritInfo.ts"], (function(t) {
        var i, n, o;
        return {
            setters: [function(t) {
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
                i._RF.push({}, "4a4ceyELZVFw7qT6nKXreFc", "P_DGetAbandonSpiritsList", void 0);
                t("P_DGetAbandonSpiritsList", function() {
                    function t() {
                        this.code = void 0,
                            this.spirits = void 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        i.read = function(t) {
                            if (this.code = n.ReadCode(t),
                                !this.code.isError()) {
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
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
