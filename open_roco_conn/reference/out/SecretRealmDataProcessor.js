System.register("chunks:///_virtual/SecretRealmDataProcessor.ts", ["cc", "./SecretRealmConfig.ts"], (function(t) {
        var e, a;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    a = t.SecretRealmConfig
                }
            ],
            execute: function() {
                e._RF.push({}, "b3365lIBMNA0Kci/ybnE5LP", "SecretRealmDataProcessor", void 0),
                    t("SecretRealmDataProcessor", function() {
                        function t() {
                            this.currentData = null
                        }
                        t.getInstance = function() {
                            return t.instance || (t.instance = new t),
                                t.instance
                        }
                        ;
                        var e = t.prototype;
                        return e.processServerData = function(t, e) {
                            try {
                                var a = this.parseServerData(t)
                                    , r = this.transformToBusinessData(a, e);
                                return this.currentData = r,
                                    console.info("SecretRealmDataProcessor: Data processed successfully", r),
                                    r
                            } catch (t) {
                                return console.error("SecretRealmDataProcessor: Failed to process server data", t),
                                    this.createEmptyData()
                            }
                        }
                            ,
                            e.parseServerData = function(t) {
                                return t && "object" == typeof t ? {
                                    day: this.parseArrayData(t.day, 13),
                                    status: this.parseArrayData(t.status, 13),
                                    attr: this.parseArrayData(t.attr, 3),
                                    ball: this.parseArrayData(t.ball, 13),
                                    num: parseInt(t.num || "0"),
                                    succ: t.succ ? parseInt(t.succ) : void 0
                                } : this.createDefaultServerData()
                            }
                            ,
                            e.parseArrayData = function(t, e) {
                                var a = [];
                                if (Array.isArray(t))
                                    for (var r = 0; r < e; r++) {
                                        var s = r < t.length ? parseInt(t[r] || "0") : 0;
                                        a.push(s)
                                    }
                                else if (t)
                                    for (var n = String(t).split(","), o = 0; o < e; o++) {
                                        var u = o < n.length ? parseInt(n[o] || "0") : 0;
                                        a.push(u)
                                    }
                                else
                                    for (var c = 0; c < e; c++)
                                        a.push(0);
                                return a
                            }
                            ,
                            e.transformToBusinessData = function(t, e) {
                                var a = this.processMonsterData(t)
                                    , r = this.processSoulPearlData(t)
                                    , s = this.processUserProgressData(t);
                                return {
                                    serverData: t,
                                    monsters: a,
                                    soulPearls: r,
                                    userProgress: s,
                                    activityStatus: this.processActivityStatusData(t, s, e),
                                    currentPage: this.processPageData(a, 0),
                                    summonInfo: this.processSummonData(t),
                                    challengeInfo: void 0,
                                    isLoading: !1,
                                    error: null
                                }
                            }
                            ,
                            e.processMonsterData = function(t) {
                                for (var e = [], r = 0; r < t.day.length; r++)
                                    if (0 !== t.day[r]) {
                                        var s = t.day[r] - 1
                                            , n = {
                                            id: s,
                                            index: r,
                                            name: a.getMonsterName(s),
                                            combatId: a.getMonsterCombatId(s),
                                            status: t.status[r] || a.MONSTER_STATUS.NOT_CHALLENGED,
                                            dayValue: t.day[r] || 0,
                                            soulPearlCount: t.ball[r] || 0,
                                            iconFrame: r + 1
                                        };
                                        e.push(n)
                                    }
                                for (var o = 0; o < t.day.length; o++)
                                    if (0 === t.day[o]) {
                                        var u = {
                                            id: o,
                                            index: o,
                                            name: a.getMonsterName(o),
                                            combatId: a.getMonsterCombatId(o),
                                            status: a.MONSTER_STATUS.NOT_CHALLENGED,
                                            dayValue: 0,
                                            soulPearlCount: 0,
                                            iconFrame: o + 1
                                        };
                                        e.push(u)
                                    }
                                return e
                            }
                            ,
                            e.processSoulPearlData = function(t) {
                                for (var e = [], r = 0; r < a.COMBAT_NAMES.length; r++) {
                                    var s = {
                                        monsterId: r,
                                        monsterName: a.getMonsterName(r),
                                        count: t.ball[r] || 0,
                                        iconFrame: r + 1
                                    };
                                    e.push(s)
                                }
                                return e
                            }
                            ,
                            e.processUserProgressData = function(t) {
                                for (var e = 0, r = 0; r < t.status.length; r++)
                                    t.status[r] === a.MONSTER_STATUS.CHALLENGED && e++;
                                for (var s = [], n = 0; n < t.attr.length; n++) {
                                    var o = a.getAttrName(t.attr[n]);
                                    s.push(o)
                                }
                                var u = 0 !== t.day[0]
                                    , c = e >= 6;
                                return {
                                    cloudMarks: t.num,
                                    allowedAttrs: [].concat(t.attr),
                                    allowedAttrNames: s,
                                    challengedCount: e,
                                    isActivityOpened: u,
                                    isActivityCompleted: c
                                }
                            }
                            ,
                            e.processActivityStatusData = function(t, e, r) {
                                var s;
                                return s = e.isActivityOpened ? e.isActivityCompleted ? a.UI_STATE.COMPLETED : a.UI_STATE.NORMAL : a.UI_STATE.CLOSED,
                                    {
                                        isOpened: e.isActivityOpened,
                                        isCompleted: e.isActivityCompleted,
                                        uiState: s,
                                        actTime: r || ""
                                    }
                            }
                            ,
                            e.processPageData = function(t, e) {
                                a.isValidPageIndex(e) || (e = 0);
                                for (var r = a.getPageStartIndex(e), s = a.getPageCapacity(e), n = [], o = 0; o < s && r + o < t.length; o++)
                                    n.push(t[r + o]);
                                return {
                                    currentPage: e,
                                    totalPages: a.MAX_PAGE + 1,
                                    pageCapacity: s,
                                    startIndex: r,
                                    monsters: n
                                }
                            }
                            ,
                            e.processSummonData = function(t) {
                                return {
                                    selectedMonsterId: -1,
                                    selectedSoulPearlCount: 0,
                                    probabilityText: "",
                                    canSummon: t.num >= a.SUMMON_CONFIG.MIN_CLOUD_MARKS,
                                    cloudMarksNeeded: a.SUMMON_CONFIG.MIN_CLOUD_MARKS
                                }
                            }
                            ,
                            e.processChallengeData = function(t, e) {
                                var r = e || (this.currentData ? this.currentData.serverData : this.createDefaultServerData());
                                if (!a.isValidMonsterIndex(t))
                                    throw new Error("Invalid monster ID: " + t);
                                for (var s = "仅可携带", n = 0; n < r.attr.length; n++)
                                    n > 0 && (s += "、"),
                                        s += a.getAttrName(r.attr[n]);
                                return s += "宠物进入秘境",
                                    {
                                        monsterId: t,
                                        monsterName: a.getMonsterName(t),
                                        combatId: a.getMonsterCombatId(t),
                                        allowedAttrs: [].concat(r.attr),
                                        allowedAttrText: s,
                                        canChallenge: 0 !== r.day[t]
                                    }
                            }
                            ,
                            e.processBattleResult = function(t, e, r) {
                                var s, n = [], o = 0;
                                if (t === a.BATTLE_RESULT.WIN && (o = 1,
                                    n.push({
                                        type: "cloud_mark",
                                        itemId: 1,
                                        itemName: "祥云印记",
                                        count: 1,
                                        iconFrame: 1
                                    }),
                                r.succ && r.succ > 0)) {
                                    var u = r.succ - 1;
                                    s = {
                                        monsterId: u,
                                        monsterName: a.getMonsterName(u)
                                    },
                                        n.push({
                                            type: "soul_pearl",
                                            itemId: u,
                                            itemName: s.monsterName + "魂珠",
                                            count: 1,
                                            iconFrame: u + 1
                                        })
                                }
                                return {
                                    result: t,
                                    monsterId: e,
                                    rewards: n,
                                    gainedCloudMarks: o,
                                    gainedSoulPearl: s
                                }
                            }
                            ,
                            e.updateSummonInfo = function(t, e) {
                                var r = this.getCurrentData();
                                if (!r)
                                    throw new Error("No current data available");
                                var s = "";
                                t >= 0 && e > 0 && (s = "召唤出" + a.getMonsterName(t) + "的概率提升至" + a.getItemRateText(e));
                                var n = {
                                    selectedMonsterId: t,
                                    selectedSoulPearlCount: e,
                                    probabilityText: s,
                                    canSummon: r.userProgress.cloudMarks >= a.SUMMON_CONFIG.MIN_CLOUD_MARKS,
                                    cloudMarksNeeded: a.SUMMON_CONFIG.MIN_CLOUD_MARKS
                                };
                                return r.summonInfo = n,
                                    n
                            }
                            ,
                            e.createDefaultServerData = function() {
                                for (var t = [], e = [], a = [], r = 0; r < 13; r++)
                                    t.push(0),
                                        e.push(0),
                                        a.push(0);
                                return {
                                    day: t,
                                    status: e,
                                    attr: [1, 2, 3],
                                    ball: a,
                                    num: 0
                                }
                            }
                            ,
                            e.createEmptyData = function() {
                                var t = this.createDefaultServerData();
                                return this.transformToBusinessData(t)
                            }
                            ,
                            e.getCurrentData = function() {
                                return this.currentData
                            }
                            ,
                            e.clearCache = function() {
                                this.currentData = null,
                                    console.info("SecretRealmDataProcessor: Cache cleared")
                            }
                            ,
                            e.validateData = function(t) {
                                if (!t)
                                    return !1;
                                if (!t.monsters || 13 !== t.monsters.length)
                                    return !1;
                                if (!t.soulPearls || 13 !== t.soulPearls.length)
                                    return !1;
                                if (!t.userProgress || !t.activityStatus)
                                    return !1;
                                var e = t.serverData;
                                return 13 === e.day.length && (13 === e.status.length && (13 === e.ball.length && 3 === e.attr.length))
                            }
                            ,
                            e.dispose = function() {
                                this.clearCache(),
                                    t.instance = null
                            }
                            ,
                            t
                    }()).instance = void 0,
                    e._RF.pop()
            }
        }
    }
));
