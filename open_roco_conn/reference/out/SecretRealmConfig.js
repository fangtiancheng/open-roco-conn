System.register("chunks:///_virtual/SecretRealmConfig.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "58d05U1LL1KYKYzzQmtyJXs", "SecretRealmConfig", void 0);
                var n = t("SecretRealmConfig", function() {
                    function t() {}
                    return t.getMonsterName = function(t) {
                        return t >= 0 && t < this.COMBAT_NAMES.length ? this.COMBAT_NAMES[t] : (console.warn("SecretRealmConfig: Invalid monster index:", t),
                            "未知异兽")
                    }
                        ,
                        t.getMonsterCombatId = function(t) {
                            return t >= 0 && t < this.COMBAT_IDS.length ? this.COMBAT_IDS[t] : (console.warn("SecretRealmConfig: Invalid combat id index:", t),
                                0)
                        }
                        ,
                        t.getMonsterIndex = function(t) {
                            return this.COMBAT_IDS.indexOf(t)
                        }
                        ,
                        t.getPageStartIndex = function(t) {
                            return t >= 0 && t < this.PAGE_INDEX.length ? this.PAGE_INDEX[t] : 0
                        }
                        ,
                        t.getPageCapacity = function(t) {
                            return t >= 0 && t < this.PAGE_CAPACITY.length ? this.PAGE_CAPACITY[t] : 0
                        }
                        ,
                        t.getItemRateText = function(t) {
                            var e = t - 1;
                            return e >= 0 && e < this.ITEM_RATES.length ? this.ITEM_RATES[e] : "0%"
                        }
                        ,
                        t.getMaxProbabilityCount = function() {
                            return this.ITEM_RATES.length
                        }
                        ,
                        t.getAttrName = function(t) {
                            var e = t - 1;
                            return e >= 0 && e < this.ATTR_NAMES.length ? this.ATTR_NAMES[e] : "未知系"
                        }
                        ,
                        t.isValidPageIndex = function(t) {
                            return t >= 0 && t <= this.MAX_PAGE
                        }
                        ,
                        t.isValidMonsterIndex = function(t) {
                            return t >= 0 && t < this.COMBAT_NAMES.length
                        }
                        ,
                        t
                }());
                n.ACT_ID = 15130,
                    n.ACTIVITY_NAME = "山海秘境",
                    n.CMD_QUERY = "mystery_uncharted",
                    n.CMD_INDEX = "mystery_uncharted",
                    n.CMD_SUBMIT = "mystery_uncharted",
                    n.CMD_GETGIFT = "mystery_uncharted",
                    n.CMD_OPEN = "mystery_uncharted",
                    n.SUBCMD_QUERY = 0,
                    n.SUBCMD_INDEX = 1,
                    n.SUBCMD_SUBMIT = 2,
                    n.SUBCMD_GETGIFT = 3,
                    n.SUBCMD_OPEN = 4,
                    n.COMBAT_IDS = [803810, 803812, 803813, 803811, 803817, 803825, 803826, 803827, 803828, 803847, 803848, 803849, 803850],
                    n.COMBAT_NAMES = ["嘲风", "睚眦", "精卫", "狴犴", "飞廉", "毕方", "蠃鱼", "英招", "巴蛇", "驳", "蛊雕", "朱厌", "夫诸"],
                    n.ATTR_NAMES = ["普通系", "火系", "水系", "电系", "草系", "冰系", "武系", "毒系", "土系", "翼系", "萌系", "虫系", "石系", "幽灵系", "龙系", "恶魔系", "机械系", "光系", "神火系", "神草系", "神水系"],
                    n.ITEM_RATES = ["5%", "10%", "15%", "20%", "30%", "40%", "50%", "70%", "90%", "100%"],
                    n.CHALLENGE_SOUL_PEARL_RATE = [40, 35, 30, 50, 50, 35, 30, 40, 50, 40, 30, 35, 40],
                    n.PAGE_CAPACITY = [5, 4, 4],
                    n.PAGE_INDEX = [0, 5, 9],
                    n.MAX_PAGE = 2,
                    n.UI_STATE = {
                        CLOSED: 0,
                        NORMAL: 1,
                        OPENED: 2,
                        COMPLETED: 3
                    },
                    n.MONSTER_STATUS = {
                        NOT_CHALLENGED: 0,
                        CHALLENGED: 1,
                        CAN_CHALLENGE: 2
                    },
                    n.BATTLE_RESULT = {
                        WIN: 2,
                        LOSE: 0,
                        HP_NOT_ENOUGH: -1
                    },
                    n.SCROLL_CONFIG = {
                        MOVE_SPEED_UP: 4,
                        MOVE_SPEED_DOWN: -4,
                        MIN_POS_Y: -421,
                        MAX_POS_Y: 0
                    },
                    n.SUMMON_CONFIG = {
                        MIN_CLOUD_MARKS: 10,
                        MAX_SOUL_PEARL_USE: 10,
                        MIN_SOUL_PEARL_USE: 0
                    },
                    n.ASYNC_LOAD = {
                        MONSTER_ICON_PREFIX: "monster_icon_",
                        LOAD_TIMEOUT: 5e3,
                        RETRY_COUNT: 3
                    },
                    n.ERROR_MESSAGES = {
                        CLOUD_MARKS_NOT_ENOUGH: "祥云印记数量不足~",
                        SOUL_PEARL_NOT_ENOUGH: "魂珠数量不足~",
                        PLEASE_SELECT_AMOUNT: "请选择要添加的数量~",
                        CHALLENGE_FAILED: "挑战失败，再试试吧！",
                        BATTLE_WIN_MESSAGE: "挑战胜利！恭喜获得1个祥云印记。"
                    },
                    n.DEBUG = {
                        ENABLE_MOCK_DATA: !1,
                        LOG_LEVEL: "INFO",
                        SHOW_BATTLE_LOG: !0
                    },
                    n.EXP_MAPPING = new Map([[17170435, 5e3], [17170436, 1e4], [17170437, 5e4], [17170438, 1e5], [17170439, 1e3], [17170440, 2e3], [17170441, 3e3], [17170442, 4e3], [17170443, 2e4], [17170473, 5e3], [17170474, 3e3], [17170475, 2e3], [17170476, 2e3], [17170477, 5e3], [17170478, 3e3], [17170479, 1e4], [17170480, 1e3], [17170481, 1e4], [17170482, 2e4], [17170483, 5e4], [17170484, 1e5], [17170485, 2e5], [17170486, 55555], [17170487, 5e5], [17170488, 66666], [17170486, 55555], [17170486, 55555]]),
                    n.SUMMON_REWARD_CONFIG = new Map([[1, [803810, 803812, 803813, 803811, 803817, 67371698, 67372059, 67372095, 67305574, 67305575, 67374811, 50, 100, 10]], [2, [803825, 803826, 803827, 803828, 67372060, 67305550, 0, 67374812, 67374813, 67374814, 50, 100, 10]], [3, [803847, 803848, 803849, 803850, 67372101, 67372210, 67372023, 67374819, 67374820, 67374821, 50, 100, 10]]]),
                    n.SUMMON_REWARD_ICON_CONFIG = new Map([[1, ["monster-avatar/山海异兽-嘲风-1", "monster-avatar/山海异兽-睚眦-2", "monster-avatar/山海异兽-精卫-3", "monster-avatar/山海异兽-狴犴-4", "monster-avatar/山海异兽-飞廉-5", "item-icon/蛋-1", "item-icon/蛋-2", "item-icon/蛋-3", "item-icon/蛋-4", "item-icon/蛋-5", "item-icon/蛋-6", "item-icon/50W经验果礼包", "item-icon/100W经验果礼包", "item-icon/努力果礼包"]], [2, ["monster-avatar/山海异兽-毕方-6", "monster-avatar/山海异兽-蠃鱼-7", "monster-avatar/山海异兽-英招-8", "monster-avatar/山海异兽-巴蛇-9", "item-icon/蛋-7", "item-icon/蛋-8", "item-icon/蛋-9", "item-icon/蛋-10", "item-icon/蛋-11", "item-icon/蛋-12", "item-icon/50W经验果礼包", "item-icon/100W经验果礼包", "item-icon/努力果礼包"]], [3, ["monster-avatar/山海异兽-驳-10", "monster-avatar/山海异兽-蛊雕-11", "monster-avatar/山海异兽-朱厌-12", "monster-avatar/山海异兽-夫诸-13", "item-icon/蛋-13", "item-icon/蛋-14", "item-icon/蛋-15", "item-icon/蛋-16", "item-icon/蛋-17", "item-icon/蛋-18", "item-icon/50W经验果礼包", "item-icon/100W经验果礼包", "item-icon/努力果礼包"]]]),
                    e._RF.pop()
            }
        }
    }
));
