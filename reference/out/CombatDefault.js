System.register("chunks:///_virtual/CombatDefault.ts", ["cc"], (function(t) {
        var u;
        return {
            setters: [function(t) {
                u = t.cclegacy
            }
            ],
            execute: function() {
                u._RF.push({}, "408a1TVRBFOv5t+MudL/LkA", "CombatDefault", void 0);
                var e = t("CombatDefault", function() {
                    function t() {}
                    return t.readNumBit = function(t, u) {
                        return t >> u & 1
                    }
                        ,
                        t.readEscapeNumBit = function(u) {
                            return t.readNumBit(u, 5) + 2 * t.readNumBit(u, 6) + 4 * t.readNumBit(u, 7)
                        }
                        ,
                        t
                }());
                e.MF_TYPE = 1,
                    e.NPC_TYEP = 2,
                    e.PLAYER_TYPE = 3,
                    e.BUFF_ADD = 1,
                    e.BUFF_REMOVE = 2,
                    e.RESULT_UNCLOSE = 0,
                    e.RESULT_LOSE = 1,
                    e.RESULT_WIN = 2,
                    e.RESULT_RUN_AWAY = 3,
                    e.COUNT_TIMES = 10,
                    e.COMBAT_INFO_TXT1 = "等待对方出招",
                    e.COMBAT_INFO_TXT2 = "等对方中...",
                    e.REPLACE_TYPE_DIED = 0,
                    e.REPLACE_TYPE_ACTIVE = 1,
                    u._RF.pop()
            }
        }
    }
));
