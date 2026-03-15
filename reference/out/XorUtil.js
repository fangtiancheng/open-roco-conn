System.register("chunks:///_virtual/XorUtil.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "566faaXG7BO/qqy5Bhh+Ga8", "XorUtil", void 0);
                t("XorUtil", function() {
                    function t() {}
                    return t.xorEncrypt = function(t, n) {
                        return t.split("").map((function(t) {
                                return String.fromCharCode(t.charCodeAt(0) ^ n)
                            }
                        )).join("")
                    }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
