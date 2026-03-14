System.register("chunks:///_virtual/PTB_0x0B0516_LadderFightQueryRewardMessage_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./RetInfo.ts", "./RewardPackage.ts"], (function(e) {
        var i, t, a, s, r, n, d, h, f;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    r = e.WriteUtils
                }
                , function(e) {
                    n = e.ReadUtils
                }
                , function(e) {
                    d = e.WireType
                }
                , function(e) {
                    h = e.RetInfo
                }
                , function(e) {
                    f = e.RewardPackage
                }
            ],
            execute: function() {
                a._RF.push({}, "3e67e74TrBN0oliUeLN9MOF", "PTB_0x0B0516_LadderFightQueryRewardMessage_S2C", void 0);
                e("PTB_0x0B0516_LadderFightQueryRewardMessage_S2C", function(e) {
                    function a() {
                        for (var i, t = arguments.length, a = new Array(t), s = 0; s < t; s++)
                            a[s] = arguments[s];
                        return (i = e.call.apply(e, [this].concat(a)) || this).ret_info$field = void 0,
                            i.rank_level$field = void 0,
                            i.hasField$0 = 0,
                            i.dailyReward = [],
                            i.weekReward = [],
                            i.seasonReward = [],
                            i.daily_fight_times$field = void 0,
                            i.week_succ_times$field = void 0,
                            i.daily_fight_times_df$field = void 0,
                            i
                    }
                    i(a, e);
                    var s = a.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_info$field = null
                    }
                        ,
                        s.removeRankLevel = function() {
                            this.hasField$0 &= 4294967294,
                                this.rank_level$field = 0
                        }
                        ,
                        s.removeDailyFightTimes = function() {
                            this.hasField$0 &= 4294967293,
                                this.daily_fight_times$field = 0
                        }
                        ,
                        s.removeWeekSuccTimes = function() {
                            this.hasField$0 &= 4294967291,
                                this.week_succ_times$field = 0
                        }
                        ,
                        s.removeDailyFightTimesDf = function() {
                            this.hasField$0 &= 4294967287,
                                this.daily_fight_times_df$field = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetInfo && (r.writeTag(e, d.LENGTH_DELIMITED, 1),
                                r.writeTYPE_MESSAGE(e, this.ret_info$field)),
                            this.hasRankLevel && (r.writeTag(e, d.VARINT, 2),
                                r.writeTYPE_UINT32(e, this.rank_level$field));
                            for (var i = 0; i < this.dailyReward.length; ++i)
                                r.writeTag(e, d.LENGTH_DELIMITED, 3),
                                    r.writeTYPE_MESSAGE(e, this.dailyReward[i]);
                            for (var t = 0; t < this.weekReward.length; ++t)
                                r.writeTag(e, d.LENGTH_DELIMITED, 4),
                                    r.writeTYPE_MESSAGE(e, this.weekReward[t]);
                            for (var a = 0; a < this.seasonReward.length; ++a)
                                r.writeTag(e, d.LENGTH_DELIMITED, 5),
                                    r.writeTYPE_MESSAGE(e, this.seasonReward[a]);
                            this.hasDailyFightTimes && (r.writeTag(e, d.VARINT, 6),
                                r.writeTYPE_UINT32(e, this.daily_fight_times$field)),
                            this.hasWeekSuccTimes && (r.writeTag(e, d.VARINT, 7),
                                r.writeTYPE_UINT32(e, this.week_succ_times$field)),
                            this.hasDailyFightTimesDf && (r.writeTag(e, d.VARINT, 8),
                                r.writeTYPE_UINT32(e, this.daily_fight_times_df$field))
                        }
                        ,
                        s.readFromSlice = function(e, i) {
                            for (var t = 0, a = 0, s = 0, r = 0, d = 0; e.bytesAvailable > i; ) {
                                var l = n.readTYPE_UINT32(e);
                                switch (l >>> 3) {
                                    case 1:
                                        if (0 != t)
                                            throw new Error("Bad data format: PTB_0x0B0516_LadderFightQueryRewardMessage_S2C.retInfo cannot be set twice.");
                                        ++t,
                                            this.retInfo = new h,
                                            n.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != a)
                                            throw new Error("Bad data format: PTB_0x0B0516_LadderFightQueryRewardMessage_S2C.rankLevel cannot be set twice.");
                                        ++a,
                                            this.rankLevel = n.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        var o = new f;
                                        n.readTYPE_MESSAGE(e, o),
                                            this.dailyReward.push(o);
                                        break;
                                    case 4:
                                        var _ = new f;
                                        n.readTYPE_MESSAGE(e, _),
                                            this.weekReward.push(_);
                                        break;
                                    case 5:
                                        var c = new f;
                                        n.readTYPE_MESSAGE(e, c),
                                            this.seasonReward.push(c);
                                        break;
                                    case 6:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0516_LadderFightQueryRewardMessage_S2C.dailyFightTimes cannot be set twice.");
                                        ++s,
                                            this.dailyFightTimes = n.readTYPE_UINT32(e);
                                        break;
                                    case 7:
                                        if (0 != r)
                                            throw new Error("Bad data format: PTB_0x0B0516_LadderFightQueryRewardMessage_S2C.weekSuccTimes cannot be set twice.");
                                        ++r,
                                            this.weekSuccTimes = n.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        if (0 != d)
                                            throw new Error("Bad data format: PTB_0x0B0516_LadderFightQueryRewardMessage_S2C.dailyFightTimesDf cannot be set twice.");
                                        ++d,
                                            this.dailyFightTimesDf = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & l)
                                }
                            }
                        }
                        ,
                        t(a, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_info$field
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_info$field
                            },
                            set: function(e) {
                                this.ret_info$field = e
                            }
                        }, {
                            key: "hasRankLevel",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "rankLevel",
                            get: function() {
                                return this.rank_level$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.rank_level$field = e
                            }
                        }, {
                            key: "hasDailyFightTimes",
                            get: function() {
                                return 0 != (2 & this.hasField$0)
                            }
                        }, {
                            key: "dailyFightTimes",
                            get: function() {
                                return this.daily_fight_times$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 2,
                                    this.daily_fight_times$field = e
                            }
                        }, {
                            key: "hasWeekSuccTimes",
                            get: function() {
                                return 0 != (4 & this.hasField$0)
                            }
                        }, {
                            key: "weekSuccTimes",
                            get: function() {
                                return this.week_succ_times$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 4,
                                    this.week_succ_times$field = e
                            }
                        }, {
                            key: "hasDailyFightTimesDf",
                            get: function() {
                                return 0 != (8 & this.hasField$0)
                            }
                        }, {
                            key: "dailyFightTimesDf",
                            get: function() {
                                return this.daily_fight_times_df$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 8,
                                    this.daily_fight_times_df$field = e
                            }
                        }]),
                        a
                }(s));
                a._RF.pop()
            }
        }
    }
));
