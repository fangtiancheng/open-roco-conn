System.register("chunks:///_virtual/XXTEA.ts", ["cc", "./BuildLogHelper.ts"], (function(r) {
        var n, t;
        return {
            setters: [function(r) {
                n = r.cclegacy
            }
                , function(r) {
                    t = r.default
                }
            ],
            execute: function() {
                n._RF.push({}, "3607eOt4bxKUZP82igGl0Kc", "XXTEA", void 0),
                    r("XXTEA", function() {
                        function r() {}
                        return r.encode = function(n) {
                            var e = "number" == typeof n ? n.toString() : n;
                            return Array.from(e).map((function(n) {
                                    var e = parseInt(n, 10);
                                    if (isNaN(e) || e < 0 || e > 9) {
                                        if (1 == t.IS_LOCAL)
                                            throw new Error("Invalid number: " + n);
                                        return ""
                                    }
                                    return r.charMap[e]
                                }
                            )).join("")
                        }
                            ,
                            r.decode = function(n) {
                                var e = new Map(r.charMap.map((function(r, n) {
                                        return [r, n.toString()]
                                    }
                                )));
                                return Array.from(n.toUpperCase()).map((function(r) {
                                        var n = e.get(r);
                                        if (!n) {
                                            if (1 == t.IS_LOCAL)
                                                throw new Error("Invalid character: " + r);
                                            return ""
                                        }
                                        return n
                                    }
                                )).join("")
                            }
                            ,
                            r
                    }()).charMap = ["X", "Z", "W", "F", "B", "J", "L", "A", "S", "V"],
                    n._RF.pop()
            }
        }
    }
));
