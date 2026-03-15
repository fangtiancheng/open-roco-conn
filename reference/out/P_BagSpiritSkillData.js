System.register("chunks:///_virtual/P_BagSpiritSkillData.ts", ["cc"], (function(t) {
        var i;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
            ],
            execute: function() {
                i._RF.push({}, "f8546evogFLtrccBzV9whF4", "P_BagSpiritSkillData", void 0);
                t("P_BagSpiritSkillData", function() {
                    function t() {
                        this.id = void 0,
                            this.ppLeft = void 0,
                            this.isHeredity = void 0,
                            this.des = void 0
                    }
                    var i = t.prototype;
                    return i.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        i.read = function(t) {
                            this.id = t.readUnsignedShort(),
                                this.ppLeft = t.readUnsignedByte(),
                                this.isHeredity = t.readUnsignedByte()
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
