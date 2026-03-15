System.register("chunks:///_virtual/SentinelIntelligenceDataProcessor.ts", ["cc", "./ActivityAPI.ts"], (function(t) {
        var e, s;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    s = t.ActivityAPI
                }
            ],
            execute: function() {
                e._RF.push({}, "f65e6Q/zVJA9of8Y1zEcOzD", "SentinelIntelligenceDataProcessor", void 0);
                var n = t("SentinelIntelligenceDataProcessor", function() {
                    function t() {
                        this.queryActivityResponse = null,
                            this.processedActivityData = null
                    }
                    var e = t.prototype;
                    return e.processActivityData = function(t) {
                        if (!t || !t.result || "0" !== t.result.value)
                            throw new Error("无效的响应数据或请求失败");
                        return this.queryActivityResponse = t,
                            this.processedActivityData = {
                                activityInfo: this.processActivityInfo(t),
                                missionInfo: this.processMissionInfo(t),
                                bossList: this.processBossList(t),
                                exchangeList: this.processExchangeList(t),
                                spiritList: this.processSpiritList(t)
                            },
                            this.processedActivityData
                    }
                        ,
                        e.processActivityInfo = function(t) {
                            var e = this.safeParseInt(t.point)
                                , s = this.safeParseInt(t.times)
                                , n = Math.max(0, 5 - s)
                                , i = this.safeParseInt(t.refresh)
                                , r = this.safeParseInt(t.f5);
                            return {
                                currentPoint: e,
                                remainingFights: n,
                                totalFights: 5,
                                fightText: n + "/5",
                                bossRefreshCount: i,
                                exchangeRefreshCount: r,
                                canRefreshBoss: i < 5,
                                canRefreshExchange: r < 8,
                                contractPages: this.safeParseInt(t.number)
                            }
                        }
                        ,
                        e.processMissionInfo = function(t) {
                            var e = this
                                , s = this.safeParseInt(t.type)
                                , n = (t.value || []).map((function(t) {
                                    return e.safeParseInt(t)
                                }
                            ));
                            return {
                                type: s,
                                description: this.generateMissionDescription(s, n),
                                values: n
                            }
                        }
                        ,
                        e.processBossList = function(t) {
                            for (var e = this, s = [], n = t.bossid.length, i = this.safeParseInt(t.times), r = function() {
                                e.safeParseInt(null == (n = t.boss) ? void 0 : n[a]);
                                var n, r, o, c, u, f, h, l = e.safeParseInt(null == (r = t.max) ? void 0 : r[a]), v = e.safeParseInt(null == (o = t.bstatus) ? void 0 : o[a]), g = e.safeParseInt(null == (c = t.diff) ? void 0 : c[a]), p = e.safeParseInt(null == (u = t.schedule) ? void 0 : u[a]), S = e.safeParseInt(null == (f = t.bossid) ? void 0 : f[a]);
                                h = 1 === v ? 3 : i < 5 ? 2 : 1;
                                var I = Array.from({
                                    length: 3
                                }, (function(t, e) {
                                        return e < g
                                    }
                                ));
                                s.push({
                                    index: a,
                                    id: S,
                                    status: v,
                                    difficulty: g,
                                    stars: I,
                                    schedule: p,
                                    maxSchedule: l,
                                    showNewFlag: 0 === p,
                                    showHardFlag: 3 === g && 0 !== p,
                                    fightButtonState: h
                                })
                            }, a = 0; a < n; a++)
                                r();
                            return s
                        }
                        ,
                        e.processExchangeList = function(t) {
                            for (var e = [], n = this.safeParseInt(t.point), i = 0; i < 6; i++) {
                                var r, a, o, c = this.safeParseInt(null == (r = t.exchange) ? void 0 : r[i]), u = this.safeParseInt(null == (a = t.eneed) ? void 0 : a[i]), f = this.safeParseInt(null == (o = t.estatus) ? void 0 : o[i]), h = void 0;
                                h = 1 === f ? 3 : n < u ? 2 : 1;
                                var l = "";
                                c > 0 && (l = s.getItemName(c)),
                                    e.push({
                                        index: i,
                                        itemId: c,
                                        itemName: l,
                                        needPoint: u,
                                        status: f,
                                        canExchange: 0 === f && n >= u,
                                        exchangeButtonState: h
                                    })
                            }
                            return e
                        }
                        ,
                        e.processSpiritList = function(t) {
                            var e = []
                                , n = this.safeParseInt(t.number);
                            if (!t.spiritid)
                                return e;
                            for (var i = 0; i < t.spiritid.length; i++) {
                                var r, a, o, c = this.safeParseInt(t.spiritid[i]), u = this.safeParseInt(null == (r = t.evolve) ? void 0 : r[i]), f = this.safeParseInt(null == (a = t.need) ? void 0 : a[i]), h = this.safeParseInt(null == (o = t.spirit) ? void 0 : o[i]), l = void 0;
                                l = 1 === h ? 3 : n < f ? 2 : 1;
                                var v = ""
                                    , g = "";
                                c > 0 && (v = s.getSpiritName(c.toString())),
                                u > 0 && (g = s.getSpiritName(u.toString())),
                                    e.push({
                                        index: i,
                                        spiritId: c,
                                        spiritName: v,
                                        evolveId: u,
                                        evolveName: g,
                                        needPages: f,
                                        status: h,
                                        canEvolve: 0 === h && n >= f,
                                        evolveButtonState: l
                                    })
                            }
                            return e
                        }
                        ,
                        e.generateMissionDescription = function(e, s) {
                            if (e < 1 || e > t.MISSION_TEMPLATES.length)
                                return "未知任务类型";
                            var n = t.MISSION_TEMPLATES[e - 1]
                                , i = n.split("_")
                                , r = "";
                            switch (e) {
                                case 1:
                                    r = i[0] + t.TYPE_NAMES[s[0] - 1] + i[1];
                                    break;
                                case 2:
                                    r = i[0] + t.TYPE_NAMES[s[0] - 1] + i[1] + t.TYPE_NAMES[s[1] - 1] + i[2];
                                    break;
                                case 3:
                                    r = i[0] + t.TYPE_NAMES[s[0] - 1] + i[1] + t.TYPE_NAMES[s[1] - 1] + i[2] + t.TYPE_NAMES[s[2] - 1] + i[3];
                                    break;
                                case 4:
                                case 6:
                                    r = i[0] + s[0] + i[1];
                                    break;
                                case 5:
                                    r = i[0] + s[0] + i[1] + s[1] + i[2];
                                    break;
                                case 7:
                                case 9:
                                    r = i[0] + s[0] / 10 + i[1];
                                    break;
                                case 8:
                                    r = i[0] + s[0] / 10 + i[1] + s[1] / 10 + i[2];
                                    break;
                                case 10:
                                    var a = 1 === s[0] ? "雄性" : "雌性";
                                    r = i[0] + a + i[1];
                                    break;
                                case 11:
                                    r = i[0] + s[0] + i[1];
                                    break;
                                default:
                                    r = n
                            }
                            return r
                        }
                        ,
                        e.getRefreshCostDescription = function(e) {
                            if (0 === e)
                                return "首次刷新免费";
                            var s = Math.min(e - 1, t.REFRESH_COSTS.length - 1);
                            return t.REFRESH_COSTS[s]
                        }
                        ,
                        e.getExchangeRefreshCostDescription = function(t) {
                            if (0 === t)
                                return "首次刷新免费";
                            var e = ["首次刷新免费，是否刷新？", "确定消耗30000洛克贝进行刷新？", "确定消耗50000洛克贝进行刷新？", "确定消耗10洛克钻进行刷新？", "确定消耗20洛克钻进行刷新？", "确定消耗20洛克钻进行刷新？", "确定消耗40洛克钻进行刷新？", "确定消耗40洛克钻进行刷新？"];
                            return e[Math.min(t, e.length - 1)]
                        }
                        ,
                        e.canFightBoss = function(t, e) {
                            return 0 === t.status && e.remainingFights > 0
                        }
                        ,
                        e.canExchangeItem = function(t, e) {
                            return 0 === t.status && e.currentPoint >= t.needPoint
                        }
                        ,
                        e.canEvolveSpirit = function(t, e) {
                            return 0 === t.status && e.contractPages >= t.needPages
                        }
                        ,
                        e.getPointText = function(t) {
                            return t + "赏金"
                        }
                        ,
                        e.getContractText = function(t) {
                            return t + "页契约"
                        }
                        ,
                        e.getSpiritQueryBagParam = function(t) {
                            return 0 === t.evolveId || 1 === t.status ? null : {
                                evolveId: t.evolveId
                            }
                        }
                        ,
                        e.shouldQueryBagForSpirit = function(t) {
                            return t.evolveId > 0 && 0 === t.status
                        }
                        ,
                        e.safeParseInt = function(t) {
                            if ("number" == typeof t)
                                return t;
                            if ("string" == typeof t) {
                                var e = parseInt(t, 10);
                                return isNaN(e) ? 0 : e
                            }
                            return 0
                        }
                        ,
                        t
                }());
                n.TYPE_NAMES = ["普通", "火", "水", "电", "草", "冰", "武", "毒", "土", "翼", "萌", "虫", "石", "幽灵", "龙", "恶魔", "机械", "光"],
                    n.MISSION_TEMPLATES = ["仅携带_系宠物同密林BOSS战斗获取情报", "仅携带_系，_系宠物同密林BOSS战斗获取情报", "仅携带_系，_系，_系宠物同密林BOSS战斗获取情报", "仅携带体重范围在_kg以下的宠物", "仅携带体重在_kg-_kg范围内的宠物", "仅携带体重范围在_kg以上的宠物", "仅携带身高范围在_m以下的宠物", "仅携带身高在_m-_m范围内的宠物", "仅携带身高范围在_m以上的宠物", "仅携带_宠物同密林BOSS战斗获取情报", "在_回合内击败密林BOSS获取情报"],
                    n.REFRESH_COSTS = ["10000洛克贝", "10洛克钻", "20洛克钻", "40洛克钻"];
                var i = t("sentinelIntelligenceDataProcessor", new n);
                t("processActivityData", (function(t) {
                        return i.processActivityData(t)
                    }
                )),
                    t("getRefreshCostDescription", (function(t) {
                            return i.getRefreshCostDescription(t)
                        }
                    )),
                    t("canFightBoss", (function(t, e) {
                            return i.canFightBoss(t, e)
                        }
                    )),
                    t("canExchangeItem", (function(t, e) {
                            return i.canExchangeItem(t, e)
                        }
                    )),
                    t("canEvolveSpirit", (function(t, e) {
                            return i.canEvolveSpirit(t, e)
                        }
                    )),
                    t("getSpiritQueryBagParam", (function(t) {
                            return i.getSpiritQueryBagParam(t)
                        }
                    )),
                    t("shouldQueryBagForSpirit", (function(t) {
                            return i.shouldQueryBagForSpirit(t)
                        }
                    ));
                e._RF.pop()
            }
        }
    }
));
