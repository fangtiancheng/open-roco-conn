System.register("chunks:///_virtual/GrayDetail.ts", ["cc", "./CombatDefault.ts", "./CombatControlBarCommands.ts", "./UnicodeTranslator.ts"], (function(t) {
        var a, e, o, r;
        return {
            setters: [function(t) {
                a = t.cclegacy
            }
                , function(t) {
                    e = t.CombatDefault
                }
                , function(t) {
                    o = t.CombatControlBarCommands
                }
                , function(t) {
                    r = t.UnicodeTranslator
                }
            ],
            execute: function() {
                a._RF.push({}, "3c9f2zB9ehJ9K/P0m/h8Xcr", "GrayDetail", void 0);
                var l = t("GrayDetail", function() {
                    function t() {
                        throw new Error("GrayDetail can not be instantiated.")
                    }
                    return t.setGrayTooltip = function(a, l) {
                        if (null != a)
                            if (a.gray && a.id == o.CATCH) {
                                var n = null;
                                switch (e.readEscapeNumBit(l.canCombat)) {
                                    case t.CAN_NOT_CATCH:
                                        n = t.applyTooltipStyle(r.getCanNotCatchStr());
                                        break;
                                    case t.IS_PVP:
                                        n = t.applyTooltipStyle(r.getIsPvpStr());
                                        break;
                                    case t.IS_NPC:
                                        n = t.applyTooltipStyle(r.getIsNpcStr());
                                        break;
                                    case t.ENEMY_SPIRIT_LEVEL_IS_HIGH_THAN_60:
                                        n = t.applyTooltipStyle(r.getEnemySpiritLevelIsHighThan60Str());
                                        break;
                                    case t.USER_SPIRIT_LEVEL_IS_TOO_LOW:
                                        n = t.applyTooltipStyle(r.getUserSpiritLevelIsTooLowStr());
                                        break;
                                    default:
                                        n = t.applyTooltipStyle(r.getDefaultCanNotCatchStr())
                                }
                                a.grayTooltip = n
                            } else
                                a.grayTooltip = null
                    }
                        ,
                        t.applyTooltipStyle = function(t) {
                            return "<color=#FFFFFF>" + t + "</color>"
                        }
                        ,
                        t
                }());
                l.CAN_NOT_CATCH = 0,
                    l.IS_PVP = 1,
                    l.IS_NPC = 2,
                    l.ENEMY_SPIRIT_LEVEL_IS_HIGH_THAN_60 = 3,
                    l.USER_SPIRIT_LEVEL_IS_TOO_LOW = 4,
                    a._RF.pop()
            }
        }
    }
));
