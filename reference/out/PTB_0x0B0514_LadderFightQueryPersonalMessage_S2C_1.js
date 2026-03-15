System.register("chunks:///_virtual/PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./RetInfo.ts", "./SpiritInfo.ts", "./QuestInfo2.ts", "./FightRecord.ts"], (function(e) {
        var i, t, s, a, n, r, h, f, o, d, l;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    a = e.BaseMessage
                }
                , function(e) {
                    n = e.WriteUtils
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    h = e.WireType
                }
                , function(e) {
                    f = e.RetInfo
                }
                , function(e) {
                    o = e.SpiritInfo
                }
                , function(e) {
                    d = e.QuestInfo
                }
                , function(e) {
                    l = e.FightRecord
                }
            ],
            execute: function() {
                s._RF.push({}, "5f7ba7rIlpO9KTJ81Ik+wBe", "PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C", void 0);
                e("PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C", function(e) {
                    function s() {
                        for (var i, t = arguments.length, s = new Array(t), a = 0; a < t; a++)
                            s[a] = arguments[a];
                        return (i = e.call.apply(e, [this].concat(s)) || this).ret_infofield = void 0,
                            i.win_numsfield = void 0,
                            i.hasField0 = 0,
                            i.win_pointfield = void 0,
                            i.spiritInfo = [],
                            i.spirit_info_flagfield = void 0,
                            i.spiritInfo2 = [],
                            i.left_timefield = void 0,
                            i.rank_levelfield = void 0,
                            i.left_play_timesfield = void 0,
                            i.left_reward_timesfield = void 0,
                            i.season_reward_flagfield = void 0,
                            i.fight_daysfield = void 0,
                            i.next_win_pointfield = void 0,
                            i.dayQuest = [],
                            i.show_achivementfield = void 0,
                            i.achivementList = [],
                            i.banList = [],
                            i.recordList = [],
                            i.seasonfield = void 0,
                            i.all_numsfield = void 0,
                            i.left_play_times_dffield = void 0,
                            i.win_point_dffield = void 0,
                            i.win_nums_dffield = void 0,
                            i.all_nums_dffield = void 0,
                            i
                    }
                    i(s, e);
                    var a = s.prototype;
                    return a.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        a.removeWinNums = function() {
                            this.hasField0 &= 4294967294,
                                this.win_numsfield = 0
                        }
                        ,
                        a.removeWinPoint = function() {
                            this.hasField0 &= 4294967293,
                                this.win_pointfield = 0
                        }
                        ,
                        a.removeSpiritInfoFlag = function() {
                            this.hasField0 &= 4294967291,
                                this.spirit_info_flagfield = 0
                        }
                        ,
                        a.removeLeftTime = function() {
                            this.hasField0 &= 4294967287,
                                this.left_timefield = 0
                        }
                        ,
                        a.removeRankLevel = function() {
                            this.hasField0 &= 4294967279,
                                this.rank_levelfield = 0
                        }
                        ,
                        a.removeLeftPlayTimes = function() {
                            this.hasField0 &= 4294967263,
                                this.left_play_timesfield = 0
                        }
                        ,
                        a.removeLeftRewardTimes = function() {
                            this.hasField0 &= 4294967231,
                                this.left_reward_timesfield = 0
                        }
                        ,
                        a.removeSeasonRewardFlag = function() {
                            this.hasField0 &= 4294967167,
                                this.season_reward_flagfield = 0
                        }
                        ,
                        a.removeFightDays = function() {
                            this.hasField0 &= 4294967039,
                                this.fight_daysfield = 0
                        }
                        ,
                        a.removeNextWinPoint = function() {
                            this.hasField0 &= 4294966783,
                                this.next_win_pointfield = 0
                        }
                        ,
                        a.removeShowAchivement = function() {
                            this.hasField0 &= 4294966271,
                                this.show_achivementfield = 0
                        }
                        ,
                        a.removeSeason = function() {
                            this.hasField0 &= 4294965247,
                                this.seasonfield = 0
                        }
                        ,
                        a.removeAllNums = function() {
                            this.hasField0 &= 4294963199,
                                this.all_numsfield = 0
                        }
                        ,
                        a.removeLeftPlayTimesDf = function() {
                            this.hasField0 &= 4294959103,
                                this.left_play_times_dffield = 0
                        }
                        ,
                        a.removeWinPointDf = function() {
                            this.hasField0 &= 4294950911,
                                this.win_point_dffield = 0
                        }
                        ,
                        a.removeWinNumsDf = function() {
                            this.hasField0 &= 4294934527,
                                this.win_nums_dffield = 0
                        }
                        ,
                        a.removeAllNumsDf = function() {
                            this.hasField0 &= 4294901759,
                                this.all_nums_dffield = 0
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasRetInfo && (n.writeTag(e, h.LENGTH_DELIMITED, 1),
                                n.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasWinNums && (n.writeTag(e, h.VARINT, 2),
                                n.writeTYPE_UINT32(e, this.win_numsfield)),
                            this.hasWinPoint && (n.writeTag(e, h.VARINT, 3),
                                n.writeTYPE_UINT32(e, this.win_pointfield));
                            for (var i = 0; i < this.spiritInfo.length; ++i)
                                n.writeTag(e, h.LENGTH_DELIMITED, 4),
                                    n.writeTYPE_MESSAGE(e, this.spiritInfo[i]);
                            this.hasSpiritInfoFlag && (n.writeTag(e, h.VARINT, 5),
                                n.writeTYPE_UINT32(e, this.spirit_info_flagfield));
                            for (var t = 0; t < this.spiritInfo2.length; ++t)
                                n.writeTag(e, h.LENGTH_DELIMITED, 6),
                                    n.writeTYPE_MESSAGE(e, this.spiritInfo2[t]);
                            this.hasLeftTime && (n.writeTag(e, h.VARINT, 7),
                                n.writeTYPE_UINT32(e, this.left_timefield)),
                            this.hasRankLevel && (n.writeTag(e, h.VARINT, 8),
                                n.writeTYPE_UINT32(e, this.rank_levelfield)),
                            this.hasLeftPlayTimes && (n.writeTag(e, h.VARINT, 9),
                                n.writeTYPE_UINT32(e, this.left_play_timesfield)),
                            this.hasLeftRewardTimes && (n.writeTag(e, h.VARINT, 10),
                                n.writeTYPE_UINT32(e, this.left_reward_timesfield)),
                            this.hasSeasonRewardFlag && (n.writeTag(e, h.VARINT, 11),
                                n.writeTYPE_UINT32(e, this.season_reward_flagfield)),
                            this.hasFightDays && (n.writeTag(e, h.VARINT, 12),
                                n.writeTYPE_UINT32(e, this.fight_daysfield)),
                            this.hasNextWinPoint && (n.writeTag(e, h.VARINT, 13),
                                n.writeTYPE_UINT32(e, this.next_win_pointfield));
                            for (var s = 0; s < this.dayQuest.length; ++s)
                                n.writeTag(e, h.LENGTH_DELIMITED, 14),
                                    n.writeTYPE_MESSAGE(e, this.dayQuest[s]);
                            this.hasShowAchivement && (n.writeTag(e, h.VARINT, 15),
                                n.writeTYPE_UINT32(e, this.show_achivementfield));
                            for (var a = 0; a < this.achivementList.length; ++a)
                                n.writeTag(e, h.VARINT, 16),
                                    n.writeTYPE_UINT32(e, this.achivementList[a]);
                            for (var r = 0; r < this.banList.length; ++r)
                                n.writeTag(e, h.VARINT, 17),
                                    n.writeTYPE_UINT32(e, this.banList[r]);
                            for (var f = 0; f < this.recordList.length; ++f)
                                n.writeTag(e, h.LENGTH_DELIMITED, 18),
                                    n.writeTYPE_MESSAGE(e, this.recordList[f]);
                            this.hasSeason && (n.writeTag(e, h.VARINT, 19),
                                n.writeTYPE_UINT32(e, this.seasonfield)),
                            this.hasAllNums && (n.writeTag(e, h.VARINT, 20),
                                n.writeTYPE_UINT32(e, this.all_numsfield)),
                            this.hasLeftPlayTimesDf && (n.writeTag(e, h.VARINT, 21),
                                n.writeTYPE_UINT32(e, this.left_play_times_dffield)),
                            this.hasWinPointDf && (n.writeTag(e, h.VARINT, 22),
                                n.writeTYPE_UINT32(e, this.win_point_dffield)),
                            this.hasWinNumsDf && (n.writeTag(e, h.VARINT, 23),
                                n.writeTYPE_UINT32(e, this.win_nums_dffield)),
                            this.hasAllNumsDf && (n.writeTag(e, h.VARINT, 24),
                                n.writeTYPE_UINT32(e, this.all_nums_dffield))
                        }
                        ,
                        a.readFromSlice = function(e, i) {
                            for (var t = 0, s = 0, a = 0, n = 0, _ = 0, u = 0, T = 0, c = 0, w = 0, g = 0, m = 0, P = 0, E = 0, y = 0, I = 0, F = 0, N = 0, v = 0; e.bytesAvailable > i; ) {
                                var k = r.readTYPE_UINT32(e);
                                switch (k >>> 3) {
                                    case 1:
                                        if (0 != t)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.retInfo cannot be set twice.");
                                        ++t,
                                            this.retInfo = new f,
                                            r.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.winNums cannot be set twice.");
                                        ++s,
                                            this.winNums = r.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != a)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.winPoint cannot be set twice.");
                                        ++a,
                                            this.winPoint = r.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        var L = new o;
                                        r.readTYPE_MESSAGE(e, L),
                                            this.spiritInfo.push(L);
                                        break;
                                    case 5:
                                        if (0 != n)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.spiritInfoFlag cannot be set twice.");
                                        ++n,
                                            this.spiritInfoFlag = r.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        var p = new o;
                                        r.readTYPE_MESSAGE(e, p),
                                            this.spiritInfo2.push(p);
                                        break;
                                    case 7:
                                        if (0 != _)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.leftTime cannot be set twice.");
                                        ++_,
                                            this.leftTime = r.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        if (0 != u)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.rankLevel cannot be set twice.");
                                        ++u,
                                            this.rankLevel = r.readTYPE_UINT32(e);
                                        break;
                                    case 9:
                                        if (0 != T)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.leftPlayTimes cannot be set twice.");
                                        ++T,
                                            this.leftPlayTimes = r.readTYPE_UINT32(e);
                                        break;
                                    case 10:
                                        if (0 != c)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.leftRewardTimes cannot be set twice.");
                                        ++c,
                                            this.leftRewardTimes = r.readTYPE_UINT32(e);
                                        break;
                                    case 11:
                                        if (0 != w)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.seasonRewardFlag cannot be set twice.");
                                        ++w,
                                            this.seasonRewardFlag = r.readTYPE_UINT32(e);
                                        break;
                                    case 12:
                                        if (0 != g)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.fightDays cannot be set twice.");
                                        ++g,
                                            this.fightDays = r.readTYPE_UINT32(e);
                                        break;
                                    case 13:
                                        if (0 != m)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.nextWinPoint cannot be set twice.");
                                        ++m,
                                            this.nextWinPoint = r.readTYPE_UINT32(e);
                                        break;
                                    case 14:
                                        var B = new d;
                                        r.readTYPE_MESSAGE(e, B),
                                            this.dayQuest.push(B);
                                        break;
                                    case 15:
                                        if (0 != P)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.showAchivement cannot be set twice.");
                                        ++P,
                                            this.showAchivement = r.readTYPE_UINT32(e);
                                        break;
                                    case 16:
                                        if ((7 & k) == h.LENGTH_DELIMITED) {
                                            r.readPackedRepeated(e, r.readTYPE_UINT32, this.achivementList);
                                            break
                                        }
                                        this.achivementList.push(r.readTYPE_UINT32(e));
                                        break;
                                    case 17:
                                        if ((7 & k) == h.LENGTH_DELIMITED) {
                                            r.readPackedRepeated(e, r.readTYPE_UINT32, this.banList);
                                            break
                                        }
                                        this.banList.push(r.readTYPE_UINT32(e));
                                        break;
                                    case 18:
                                        var S = new l;
                                        r.readTYPE_MESSAGE(e, S),
                                            this.recordList.push(S);
                                        break;
                                    case 19:
                                        if (0 != E)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.season cannot be set twice.");
                                        ++E,
                                            this.season = r.readTYPE_UINT32(e);
                                        break;
                                    case 20:
                                        if (0 != y)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.allNums cannot be set twice.");
                                        ++y,
                                            this.allNums = r.readTYPE_UINT32(e);
                                        break;
                                    case 21:
                                        if (0 != I)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.leftPlayTimesDf cannot be set twice.");
                                        ++I,
                                            this.leftPlayTimesDf = r.readTYPE_UINT32(e);
                                        break;
                                    case 22:
                                        if (0 != F)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.winPointDf cannot be set twice.");
                                        ++F,
                                            this.winPointDf = r.readTYPE_UINT32(e);
                                        break;
                                    case 23:
                                        if (0 != N)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.winNumsDf cannot be set twice.");
                                        ++N,
                                            this.winNumsDf = r.readTYPE_UINT32(e);
                                        break;
                                    case 24:
                                        if (0 != v)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.allNumsDf cannot be set twice.");
                                        ++v,
                                            this.allNumsDf = r.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & k)
                                }
                            }
                        }
                        ,
                        t(s, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_infofield
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_infofield
                            },
                            set: function(e) {
                                this.ret_infofield = e
                            }
                        }, {
                            key: "hasWinNums",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "winNums",
                            get: function() {
                                return this.win_numsfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.win_numsfield = e
                            }
                        }, {
                            key: "hasWinPoint",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "winPoint",
                            get: function() {
                                return this.win_pointfield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.win_pointfield = e
                            }
                        }, {
                            key: "hasSpiritInfoFlag",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "spiritInfoFlag",
                            get: function() {
                                return this.spirit_info_flagfield
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.spirit_info_flagfield = e
                            }
                        }, {
                            key: "hasLeftTime",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "leftTime",
                            get: function() {
                                return this.left_timefield
                            },
                            set: function(e) {
                                this.hasField0 |= 8,
                                    this.left_timefield = e
                            }
                        }, {
                            key: "hasRankLevel",
                            get: function() {
                                return 0 != (16 & this.hasField0)
                            }
                        }, {
                            key: "rankLevel",
                            get: function() {
                                return this.rank_levelfield
                            },
                            set: function(e) {
                                this.hasField0 |= 16,
                                    this.rank_levelfield = e
                            }
                        }, {
                            key: "hasLeftPlayTimes",
                            get: function() {
                                return 0 != (32 & this.hasField0)
                            }
                        }, {
                            key: "leftPlayTimes",
                            get: function() {
                                return this.left_play_timesfield
                            },
                            set: function(e) {
                                this.hasField0 |= 32,
                                    this.left_play_timesfield = e
                            }
                        }, {
                            key: "hasLeftRewardTimes",
                            get: function() {
                                return 0 != (64 & this.hasField0)
                            }
                        }, {
                            key: "leftRewardTimes",
                            get: function() {
                                return this.left_reward_timesfield
                            },
                            set: function(e) {
                                this.hasField0 |= 64,
                                    this.left_reward_timesfield = e
                            }
                        }, {
                            key: "hasSeasonRewardFlag",
                            get: function() {
                                return 0 != (128 & this.hasField0)
                            }
                        }, {
                            key: "seasonRewardFlag",
                            get: function() {
                                return this.hasSeasonRewardFlag ? this.season_reward_flagfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 128,
                                    this.season_reward_flagfield = e
                            }
                        }, {
                            key: "hasFightDays",
                            get: function() {
                                return 0 != (256 & this.hasField0)
                            }
                        }, {
                            key: "fightDays",
                            get: function() {
                                return this.hasFightDays ? this.fight_daysfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 256,
                                    this.fight_daysfield = e
                            }
                        }, {
                            key: "hasNextWinPoint",
                            get: function() {
                                return 0 != (512 & this.hasField0)
                            }
                        }, {
                            key: "nextWinPoint",
                            get: function() {
                                return this.hasNextWinPoint ? this.next_win_pointfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 512,
                                    this.next_win_pointfield = e
                            }
                        }, {
                            key: "hasShowAchivement",
                            get: function() {
                                return 0 != (1024 & this.hasField0)
                            }
                        }, {
                            key: "showAchivement",
                            get: function() {
                                return this.hasShowAchivement ? this.show_achivementfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1024,
                                    this.show_achivementfield = e
                            }
                        }, {
                            key: "hasSeason",
                            get: function() {
                                return 0 != (2048 & this.hasField0)
                            }
                        }, {
                            key: "season",
                            get: function() {
                                return this.seasonfield
                            },
                            set: function(e) {
                                this.hasField0 |= 2048,
                                    this.seasonfield = e
                            }
                        }, {
                            key: "hasAllNums",
                            get: function() {
                                return 0 != (4096 & this.hasField0)
                            }
                        }, {
                            key: "allNums",
                            get: function() {
                                return this.all_numsfield
                            },
                            set: function(e) {
                                this.hasField0 |= 4096,
                                    this.all_numsfield = e
                            }
                        }, {
                            key: "hasLeftPlayTimesDf",
                            get: function() {
                                return 0 != (8192 & this.hasField0)
                            }
                        }, {
                            key: "leftPlayTimesDf",
                            get: function() {
                                return this.left_play_times_dffield
                            },
                            set: function(e) {
                                this.hasField0 |= 8192,
                                    this.left_play_times_dffield = e
                            }
                        }, {
                            key: "hasWinPointDf",
                            get: function() {
                                return 0 != (16384 & this.hasField0)
                            }
                        }, {
                            key: "winPointDf",
                            get: function() {
                                return this.win_point_dffield
                            },
                            set: function(e) {
                                this.hasField0 |= 16384,
                                    this.win_point_dffield = e
                            }
                        }, {
                            key: "hasWinNumsDf",
                            get: function() {
                                return 0 != (32768 & this.hasField0)
                            }
                        }, {
                            key: "winNumsDf",
                            get: function() {
                                return this.win_nums_dffield
                            },
                            set: function(e) {
                                this.hasField0 |= 32768,
                                    this.win_nums_dffield = e
                            }
                        }, {
                            key: "hasAllNumsDf",
                            get: function() {
                                return 0 != (65536 & this.hasField0)
                            }
                        }, {
                            key: "allNumsDf",
                            get: function() {
                                return this.all_nums_dffield
                            },
                            set: function(e) {
                                this.hasField0 |= 65536,
                                    this.all_nums_dffield = e
                            }
                        }]),
                        s
                }(a));
                s._RF.pop()
            }
        }
    }
));
