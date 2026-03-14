System.register("chunks:///_virtual/LangUtils.ts", ["cc"], (function(n) {
        var t;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "cf0c96qLeZBt7kWepd2683R", "LangUtils", void 0),
                    n("LangUtils", function() {
                        function n() {
                            throw new Error("LangUtils can not be instantiated.")
                        }
                        return n.translate = function(t, r) {
                            if (null == t || null == r)
                                return null;
                            if ("string" == typeof r)
                                return t.replace(n.MAGIC_CHAR, r);
                            if (Array.isArray(r)) {
                                var e = t.split(n.MAGIC_CHAR);
                                if (1 == e.length)
                                    return t;
                                for (var i = e.length, u = "", l = 0; l < i; ++l)
                                    u += e[l] + (l != i - 1 ? r[l] : "");
                                return u
                            }
                            return null
                        }
                            ,
                            n
                    }()).MAGIC_CHAR = "%",
                    t._RF.pop()
            }
        }
    }
));
