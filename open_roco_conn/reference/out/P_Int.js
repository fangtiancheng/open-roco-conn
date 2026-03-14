System.register("chunks:///_virtual/P_Int.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var n, e;
        return {
            setters: [function(t) {
                n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
            ],
            execute: function() {
                e._RF.push({}, "6f59ba+VytMWY28wYIiQw/e", "P_Int", void 0);
                t("P_Int", function() {
                    var t = e.prototype;
                    function e(t) {
                        void 0 === t && (t = 0),
                            this.num = 0,
                            this.num = t
                    }
                    return t.IAngelDataOutputJudge = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        t.write = function(t) {
                            t.writeInt(this.num)
                        }
                        ,
                        n(e, [{
                            key: "length",
                            get: function() {
                                return 4
                            }
                        }]),
                        e
                }());
                e._RF.pop()
            }
        }
    }
));
