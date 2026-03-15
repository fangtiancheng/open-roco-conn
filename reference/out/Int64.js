System.register("chunks:///_virtual/Int64.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "47e61NDbIZLob6FyFQhdJfH", "Int64", void 0);
                t("Int64", function() {
                    function t() {
                        this.low = 0,
                            this.high = 0
                    }
                    var n = t.prototype;
                    return n.Int64 = function(t, n) {
                        void 0 === t && (t = 0),
                        void 0 === n && (n = 0),
                            this.low = t,
                            this.high = n
                    }
                        ,
                        n.toString = function() {
                            return "0x" + this.high.toString(16) + this.low.toString(16)
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
