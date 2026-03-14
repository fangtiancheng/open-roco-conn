System.register("chunks:///_virtual/NodeUtils.ts", ["cc", "./BuildLogHelper.ts"], (function(n) {
        var t, i;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
                , function(n) {
                    i = n.default
                }
            ],
            execute: function() {
                t._RF.push({}, "46329n17SRE0a7Inv//mC7w", "NodeUtils", void 0);
                n("NodeUtils", function() {
                    function n(n) {
                        throw new Error("NodeUtilsProtector can not be instantiate.")
                    }
                    return n.contains = function(n, t) {
                        if (n || i.IS_LOCAL,
                        n && 0 == n.isValid) {
                            if (i.IS_LOCAL,
                            1 == i.IS_LOCAL)
                                throw new Error("NodeUtilsProtector can not be instantiate.");
                            return !1
                        }
                        if (t || i.IS_LOCAL,
                        !n || !t)
                            throw new Error("NodeUtils's function [contains] params is null.");
                        for (var e = n.children.length, r = 0; r < e; r++) {
                            if (n.children[r] == t)
                                return !0
                        }
                        return !1
                    }
                        ,
                        n.addChildAt = function(n, t, e) {
                            n || i.IS_LOCAL,
                            t || i.IS_LOCAL,
                            n && t && n.insertChild(t, e)
                        }
                        ,
                        n.getChildAt = function(n, t) {
                            if (n || i.IS_LOCAL,
                            n.children.length > t)
                                return n.children[t];
                            throw new Error("NodeUtils's function [getChildAt] params is null.")
                        }
                        ,
                        n.setChildIndex = function(n, t, e) {
                            n || i.IS_LOCAL,
                            t || i.IS_LOCAL,
                                n.insertChild(t, e)
                        }
                        ,
                        n.getChildIndex = function(n, t) {
                            if (n || i.IS_LOCAL,
                                n)
                                return n.children.indexOf(t);
                            throw new Error("NodeUtils's function [getChildIndex] params is null.")
                        }
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
