System.register("chunks:///_virtual/ItemUtils.ts", ["cc", "./ItemSubtypes.ts", "./ItemTypes.ts"], (function(t) {
        var e, s, n;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    s = t.ItemSubtypes
                }
                , function(t) {
                    n = t.ItemTypes
                }
            ],
            execute: function() {
                e._RF.push({}, "c3937BB2xNN/bIhpguSDIFC", "ItemUtils", void 0);
                t("ItemUtils", function() {
                    function t() {
                        throw new Error("ItemUtils is static class and can not be instantiated.")
                    }
                    return t.isCombatItem = function(t) {
                        return null != t && t.type == n.COMBAT
                    }
                        ,
                        t.isDisplayableCombatItem = function(t) {
                            return null != t && (t.type == n.COMBAT && (t.subtype == s.COMBAT_HP || t.subtype == s.COMBAT_PP || t.subtype == s.COMBAT_EXP || t.subtype == s.COMBAT_PERCENTAGE_EXP || t.subtype == s.COMBAT_REFRESH_TALENT || t.subtype == s.COMBAT_LEARN_SKILL || t.subtype == s.COMBAT_ABSOLUTE_PERCENTAGE_EXP || t.subtype == s.COMBAT_STRIVE || t.subtype == s.COMBAT_STRIVE_REFRESH))
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
