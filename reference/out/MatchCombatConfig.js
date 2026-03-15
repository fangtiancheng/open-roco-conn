System.register("chunks:///_virtual/MatchCombatConfig.ts", ["cc"], (function(t) {
        var c;
        return {
            setters: [function(t) {
                c = t.cclegacy
            }
            ],
            execute: function() {
                c._RF.push({}, "bce78c10vdJbLDrTf/Xnr/r", "MatchCombatConfig", void 0);
                var n = t("MatchCombatConfig", function() {
                    function t() {}
                    return t.checkMatching = function() {
                        return !!t.isMatching && (console.log("正在匹配中"),
                            !0)
                    }
                        ,
                        t
                }());
                n.MATCHING_TIME = 30,
                    n.isMatching = !1,
                    c._RF.pop()
            }
        }
    }
));
