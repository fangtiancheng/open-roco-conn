System.register("chunks:///_virtual/UInt64.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "224b43l3YJAnrzBoQo34h9e", "UInt64", void 0);
                t("UInt64", function() {
                    function t() {
                        this.low = 0,
                            this.high = 0
                    }
                    var n = t.prototype;
                    return n.UInt64 = function(t, n) {
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
