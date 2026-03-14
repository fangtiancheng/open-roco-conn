System.register("chunks:///_virtual/STSpiritInfoSex.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./STSpiritInfo.ts"], (function(t) {
        var i, n, e;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    e = t.STSpiritInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "070f7xyaRpD5qOCkq3Q1iT0", "STSpiritInfoSex", void 0);
                t("STSpiritInfoSex", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return i(n, t),
                        n.prototype.read = function(i) {
                            t.prototype.read.call(this, i),
                                this.sex = i.readUnsignedByte()
                        }
                        ,
                        n
                }(e));
                n._RF.pop()
            }
        }
    }
));
