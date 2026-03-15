System.register("chunks:///_virtual/P_SpiritValue.ts", ["cc"], (function(t) {
        var i;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
            ],
            execute: function() {
                i._RF.push({}, "95868Gq135KFLc8Pdz/pi5R", "P_SpiritValue", void 0);
                t("P_SpiritValue", function() {
                    function t() {
                        this.PA = void 0,
                            this.PD = void 0,
                            this.MA = void 0,
                            this.MD = void 0,
                            this.SP = void 0,
                            this.HP = void 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        i.read = function(t) {
                            this.PA = t.readUnsignedByte(),
                                this.PD = t.readUnsignedByte(),
                                this.MA = t.readUnsignedByte(),
                                this.MD = t.readUnsignedByte(),
                                this.SP = t.readUnsignedByte(),
                                this.HP = t.readUnsignedByte()
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
