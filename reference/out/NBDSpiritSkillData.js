System.register("chunks:///_virtual/NBDSpiritSkillData.ts", ["cc"], (function(i) {
        var t;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "3df40lfLL1BZpfuU55Lv1On", "NBDSpiritSkillData", void 0);
                i("NBDSpiritSkillData", function() {
                    function i() {
                        this.id = void 0,
                            this.PP = void 0,
                            this.inherited = void 0
                    }
                    return i.prototype.readFromSlice = function(i) {
                        this.id = i.readUnsignedShort(),
                            this.PP = i.readUnsignedByte(),
                            this.inherited = i.readUnsignedByte()
                    }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
