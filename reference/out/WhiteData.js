System.register("chunks:///_virtual/WhiteData.ts", ["cc", "./XXTEA.ts"], (function(t) {
        var r, e;
        return {
            setters: [function(t) {
                r = t.cclegacy
            }
                , function(t) {
                    e = t.XXTEA
                }
            ],
            execute: function() {
                r._RF.push({}, "bbb59sTz8hMzb+Cjxp4gZmK", "WhiteData", void 0),
                    t("WhiteData", function() {
                        function t() {}
                        return t.isWhite = function(r) {
                            if (!r)
                                return !1;
                            for (var n = 0; n < t.whiteArray.length; n++) {
                                var i = t.whiteArray[n];
                                if (r.toString() == e.decode(i.toString()))
                                    return !0
                            }
                            return !1
                        }
                            ,
                            t
                    }()).whiteArray = ["WAXSJJVAB", "BWVLJAJVZ", "BLAJWJWFB"],
                    r._RF.pop()
            }
        }
    }
));
