System.register("chunks:///_virtual/P_Char.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
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
                n._RF.push({}, "a78b2y+HFtEt4g3A2NLVjOb", "P_Char", void 0);
                t("P_Char", function() {
                    var t = n.prototype;
                    function n(t) {
                        void 0 === t && (t = 0),
                            this.num = void 0,
                            this.num = t
                    }
                    return t.IAngelDataOutputJudge = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        t.write = function(t) {
                            t.writeByte(this.num)
                        }
                        ,
                        e(n, [{
                            key: "length",
                            get: function() {
                                return 1
                            }
                        }]),
                        n
                }());
                n._RF.pop()
            }
        }
    }
));
