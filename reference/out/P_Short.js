System.register("chunks:///_virtual/P_Short.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
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
                n._RF.push({}, "fe4e9fhbXpA5Y7vDseSegL/", "P_Short", void 0);
                t("P_Short", function() {
                    var t = n.prototype;
                    function n(t) {
                        void 0 === t && (t = 0),
                            this.num = 0,
                            this.num = t
                    }
                    return t.IAngelDataOutputJudge = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        t.write = function(t) {
                            t.writeShort(this.num)
                        }
                        ,
                        e(n, [{
                            key: "length",
                            get: function() {
                                return 2
                            }
                        }]),
                        n
                }());
                n._RF.pop()
            }
        }
    }
));
