System.register("chunks:///_virtual/Config.ts", ["cc", "./DEFINE.ts", "./CommonAPI.ts"], (function(e) {
        var t, i, n;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.DEFINE
                }
                , function(e) {
                    n = e.CommonAPI
                }
            ],
            execute: function() {
                t._RF.push({}, "43f79bBf01Cf76LhH6Pvmk7", "Config", void 0);
                var R = e("Config", function() {
                    function e() {}
                    return e.getBigLevel = function(e) {
                        return void 0 === e && (e = -1),
                        -1 == e && (e = this.curLevel),
                        Math.floor((e - 1) / 5) + 1
                    }
                        ,
                        e.getBigLevelDF = function(e) {
                            return void 0 === e && (e = -1),
                                e < 60 ? -1 : e >= 60 && e < 80 ? 0 : e >= 80 ? 1 : -1
                        }
                        ,
                        e.getSmallLevel = function(e) {
                            return void 0 === e && (e = -1),
                            -1 == e && (e = this.curLevel),
                                e % 5 == 0 ? 5 : e % 5
                        }
                        ,
                        e.getTitle = function(e) {
                            return this.TITLES[this.getBigLevel(e) - 1]
                        }
                        ,
                        e.getTask0Des = function(e) {
                            for (var t = 0; t < this.TASK0_DES.length; t++)
                                if (this.TASK0_DES[t].id == e)
                                    return this.TASK0_DES[t];
                            return null
                        }
                        ,
                        e.getTask1Des = function(e) {
                            for (var t = 0; t < this.TASK1_DES.length; t++)
                                if (this.TASK1_DES[t].id == e)
                                    return this.TASK1_DES[t];
                            return null
                        }
                        ,
                        e.getAchiveDes = function(e) {
                            for (var t = 0; t < this.ACHIVE_DES.length; t++)
                                if (this.ACHIVE_DES[t].id == e)
                                    return this.ACHIVE_DES[t];
                            return null
                        }
                        ,
                        e.init = function(e) {
                            var t;
                            this.MATCH_REWARDS = [],
                                this.WIN_REWARDS = [];
                            var i = e.Medals.Medal.length;
                            for (i = e.MatchRewards.MatchReward.length,
                                     t = 0; t < i; t++)
                                this.MATCH_REWARDS[this.MATCH_REWARDS.length] = String(e.MatchRewards.MatchReward[t].name);
                            for (i = e.WinRewards.WinReward.length,
                                     t = 0; t < i; t++)
                                this.WIN_REWARDS[this.WIN_REWARDS.length] = String(e.WinRewards.WinReward[t].name);
                            for (i = e.SeasonRewards.SeasonReward.length,
                                     t = 0; t < i; t++)
                                this.SEASON_REWARDS[this.SEASON_REWARDS.length] = String(e.SeasonRewards.SeasonReward[t].name);
                            for (i = e.LadderQuest0.Quest.length,
                                     t = 0; t < i; t++)
                                this.TASK0_DES.push({
                                    id: Number(e.LadderQuest0.Quest[t].id),
                                    diff: Number(e.LadderQuest0.Quest[t].diff),
                                    desc: String(e.LadderQuest0.Quest[t].desc)
                                });
                            for (i = e.LadderQuest1.Quest.length,
                                     t = 0; t < i; t++)
                                this.TASK1_DES.push({
                                    id: parseInt(e.LadderQuest1.Quest[t].id),
                                    diff: parseInt(e.LadderQuest1.Quest[t].diff),
                                    desc: String(e.LadderQuest1.Quest[t].desc)
                                });
                            for (i = e.LadderAchivement.Achivement.length,
                                     t = 0; t < i; t++)
                                this.ACHIVE_DES.push({
                                    id: parseInt(e.LadderAchivement.Achivement[t].id),
                                    diff: parseInt(e.LadderAchivement.Achivement[t].diff),
                                    name: String(e.LadderAchivement.Achivement[t].name),
                                    desc: String(e.LadderAchivement.Achivement[t].desc)
                                });
                            for (i = e.SpiritCost.spirit.length,
                                     t = 0; t < i; t++)
                                this.SPIRIT_COST.push({
                                    id: parseInt(e.SpiritCost.spirit[t].id),
                                    cost: parseInt(e.SpiritCost.spirit[t].cost)
                                });
                            for (this.SEASON_REWARD_IDS = [],
                                     i = e.SeasonRewardIds.Level.length,
                                     t = 0; t < i; t++) {
                                var n = e.SeasonRewardIds.Level[t].Reward.length;
                                this.SEASON_REWARD_IDS[this.SEASON_REWARD_IDS.length] = [];
                                for (var R = 0; R < n; R++)
                                    (S = new Object).id = parseInt(e.SeasonRewardIds.Level[t].Reward[R].id),
                                        S.num = parseInt(e.SeasonRewardIds.Level[t].Reward[R].num),
                                        this.SEASON_REWARD_IDS[this.SEASON_REWARD_IDS.length - 1][R] = S
                            }
                            for (this.DF_SEASON_REWARD_IDS = [],
                                     i = e.DSeasonRewardIds.Level.length,
                                     t = 0; t < i; t++) {
                                var S;
                                n = e.DSeasonRewardIds.Level[t].Reward.length;
                                this.DF_SEASON_REWARD_IDS[this.DF_SEASON_REWARD_IDS.length] = [];
                                for (R = 0; R < n; R++)
                                    (S = new Object).id = parseInt(e.DSeasonRewardIds.Level[t].Reward[R].id),
                                        S.num = parseInt(e.DSeasonRewardIds.Level[t].Reward[R].num),
                                        this.DF_SEASON_REWARD_IDS[this.DF_SEASON_REWARD_IDS.length - 1][R] = S
                            }
                            this.WORDS_SEASONREWARD_RULE = String(e.SeasonRewardRule),
                                this.WORDS_RULE = String(e.Rule)
                        }
                        ,
                        e.getPecentageByWinPoint = function(e) {
                            for (var t = 0; t < this.POINT_ARR.length; t++) {
                                if (0 == e)
                                    return 0;
                                if (e <= this.POINT_ARR[t])
                                    return (e - this.POINT_ARR[t - 1]) / (this.POINT_ARR[t] - this.POINT_ARR[t - 1]) * 100
                            }
                            return 100
                        }
                        ,
                        e.getNextLevelWinPoint = function(e) {
                            for (var t = 0; t < this.POINT_ARR.length; t++)
                                if (e <= this.POINT_ARR[t])
                                    return this.POINT_ARR[t];
                            return this.POINT_ARR[this.POINT_ARR.length - 1]
                        }
                        ,
                        e.checkMatching = function() {
                            return !!e.isMatching && (n.showAlert("正在匹配中"),
                                !0)
                        }
                        ,
                        e.getWinPointDifference = function(t) {
                            var i = t - e.oldWinPoint;
                            return this.curWinPoint = t,
                                i
                        }
                        ,
                        e
                }());
                R.PLUG_NAME = "LadderMatch",
                    R.PLUGIN_ROOT = i.PLUGIN_ROOT + R.PLUG_NAME + "/",
                    R.WORDS_UNDER_LEVEL = "需要六只100级以上宠物方可参与！",
                    R.WORDS_SPIRIT_REPEAT = "相同的宠物不能一起上阵！",
                    R.WORDS_SPIRIT_BAN = "禁用的宠物不能上阵！",
                    R.WORDS_REWARD_0 = "今日已对战{0}/3",
                    R.WORDS_REWARD_1 = "本周已获胜{0}/5",
                    R.WORDS_TIME = "活动时间：节假日全天开放",
                    R.WORDS_LEVEL_DOWN = "你已降级为{0}。\n胜败乃兵家常事，请勿灰心！！",
                    R.WORDS_LEVEL_UP = "你已经晋升为{0}！\n祝你在洛克王国好运连连！",
                    R.WORDS_ARROW_UP = "↑",
                    R.WORDS_ARROW_DOWN = "↓",
                    R.WORDS_SEASON_REWARD = "待定",
                    R.WORDS_REWARD_TIMES = "今日还可领取奖励：{0}/5次",
                    R.WORDS_MATCH_TIMES = "{0}/10",
                    R.WORDS_DF_MATCH_TIMES = "{0}/5",
                    R.WORDS_FULL_RECOVERY_SPIRIT = "一键恢复所有宠物的HP和PP",
                    R.WORDS_FULL_RECOVERY_SPIRIT_DENY = "非VIP玩家无法一键恢复所有宠物的HP和PP",
                    R.WORDS_FULL_RECOVERY_SPIRIT_SUCC = "成功恢复所有宠物的HP和PP",
                    R.MATCHING_TIME = 30,
                    R.MIN_LEVEL = 100,
                    R.curLevel = void 0,
                    R.isMatching = void 0,
                    R.POINT_ARR = [0, 400, 600, 800, 1e3, 1200, 1400, 1600, 1800, 2e3, 2200, 2400, 2600, 2800, 3e3, 3200, 3400, 3600, 3800, 4e3, 4200, 4400, 4600, 4800, 5e3],
                    R.oldCurLevel = void 0,
                    R.CMD_QUERY = 0,
                    R.CMD_SUBMIT = 1,
                    R.CMD_GETGIFT = 2,
                    R.CMD_QUERYSCORE = 2,
                    R.CMD_EXCHANGESCORE = 3,
                    R.TITLES = ["见习训练师", "初级训练师", "中级训练师", "高级训练师", "大师训练师"],
                    R.MATCH_REWARDS = ["1w经验果", "1w经验果", "2w经验果", "2w经验果", "2w经验果"],
                    R.WIN_REWARDS = ["防御之果、魔抗之果、精力之果、果儿糖，随机四选一", "防御之果、魔抗之果、精力之果、果儿糖，随机四选一", "攻击之果、魔攻之果、速度之果、果儿糖，随机四选一", "攻击之果、魔攻之果、速度之果、果儿糖，随机四选一", "攻击之果、魔攻之果、速度之果、果儿糖，随机四选一"],
                    R.SEASON_REWARDS = [],
                    R.WORDS_RULE = "",
                    R.WORDS_SEASONREWARD_RULE = "",
                    R.LIMIT_SPIRIT = [],
                    R.SPIRIT_COST = [],
                    R.TOTAKCOST = 0,
                    R.SEASON_REWARD_IDS = [],
                    R.DF_SEASON_REWARD_IDS = [],
                    R.TASK0_DES = [],
                    R.TASK1_DES = [],
                    R.ACHIVE_DES = [],
                    R.configData = void 0,
                    R.curWinPoint = void 0,
                    R.PUSH_DATA = [],
                    R.info = void 0,
                    R.winPointChange = void 0,
                    R.rankNum = void 0,
                    R.oldWinPoint = void 0,
                    t._RF.pop()
            }
        }
    }
));
