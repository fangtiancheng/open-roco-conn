System.register("chunks:///_virtual/P_ItemType.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
            ],
            execute: function() {
                n._RF.push({}, "4b1afduUfdP84ft0AkNQZQN", "P_ItemType", void 0);
                t("P_ItemType", function() {
                    function t() {
                        this.itemType = 0,
                            this.itemSubType = 0
                    }
                    var n = t.prototype;
                    return n.IAngelDataOutputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataOutputJudge")
                    }
                        ,
                        n.write = function(t) {
                            t.writeByte(this.itemType),
                                t.writeByte(this.itemSubType)
                        }
                        ,
                        e(t, [{
                            key: "length",
                            get: function() {
                                return 2
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
