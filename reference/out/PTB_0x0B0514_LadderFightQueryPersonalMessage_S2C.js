System.register("chunks:///_virtual/PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./FightSvrProtoRetInfo.ts", "./QuestInfo.ts"], (function(e) {
        var t, i, s, a, n, r, h, f, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    r = e.WireType
                }
                , function(e) {
                    h = e.WriteUtils
                }
                , function(e) {
                    f = e.FightSvrProto_RetInfo
                }
                , function(e) {
                    o = e.QuestInfo
                }
            ],
            execute: function() {
                s._RF.push({}, "10b32sMQWZNAo1gMc9tlI3L", "PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C", void 0);
                var l = function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(s)) || this).pet_idfield = void 0,
                            t.hasField0 = 0,
                            t.pet_levelfield = void 0,
                            t.equipmentId = [],
                            t.now_hpfield = void 0,
                            t.full_hpfield = void 0,
                            t
                    }
                    t(s, e);
                    var n = s.prototype;
                    return n.removePetId = function() {
                        this.hasField0 &= 4294967294,
                            this.pet_idfield = 0
                    }
                        ,
                        n.removePetLevel = function() {
                            this.hasField0 &= 4294967293,
                                this.pet_levelfield = 0
                        }
                        ,
                        n.removeNowHp = function() {
                            this.hasField0 &= 4294967291,
                                this.now_hpfield = 0
                        }
                        ,
                        n.removeFullHp = function() {
                            this.hasField0 &= 4294967287,
                                this.full_hpfield = 0
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasPetId && (h.writeTag(e, r.VARINT, 1),
                                h.writeTYPE_UINT32(e, this.pet_idfield)),
                            this.hasPetLevel && (h.writeTag(e, r.VARINT, 2),
                                h.writeTYPE_UINT32(e, this.pet_levelfield));
                            for (var t = 0; t < this.equipmentId.length; ++t)
                                h.writeTag(e, r.VARINT, 3),
                                    h.writeTYPE_UINT32(e, this.equipmentId[t]);
                            this.hasNowHp && (h.writeTag(e, r.VARINT, 4),
                                h.writeTYPE_UINT32(e, this.now_hpfield)),
                            this.hasFullHp && (h.writeTag(e, r.VARINT, 5),
                                h.writeTYPE_UINT32(e, this.full_hpfield))
                        }
                        ,
                        n.readFromSlice = function(e, t) {
                            for (var i = 0, s = 0, n = 0, h = 0; e.bytesAvailable > t; ) {
                                var f = a.readTYPE_UINT32(e);
                                switch (f >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: SpiritInfo.petId cannot be set twice.");
                                        ++i,
                                            this.petId = a.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: SpiritInfo.petLevel cannot be set twice.");
                                        ++s,
                                            this.petLevel = a.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if ((7 & f) == r.LENGTH_DELIMITED) {
                                            a.readPackedRepeated(e, a.readTYPE_UINT32, this.equipmentId);
                                            break
                                        }
                                        this.equipmentId.push(a.readTYPE_UINT32(e));
                                        break;
                                    case 4:
                                        if (0 != n)
                                            throw new Error("Bad data format: SpiritInfo.nowHp cannot be set twice.");
                                        ++n,
                                            this.nowHp = a.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != h)
                                            throw new Error("Bad data format: SpiritInfo.fullHp cannot be set twice.");
                                        ++h,
                                            this.fullHp = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & f)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasPetId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "petId",
                            get: function() {
                                return this.hasPetId ? this.pet_idfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.pet_idfield = e
                            }
                        }, {
                            key: "hasPetLevel",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "petLevel",
                            get: function() {
                                return this.hasPetLevel ? this.pet_levelfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.pet_levelfield = e
                            }
                        }, {
                            key: "hasNowHp",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "nowHp",
                            get: function() {
                                return this.hasNowHp ? this.now_hpfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.now_hpfield = e
                            }
                        }, {
                            key: "hasFullHp",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "fullHp",
                            get: function() {
                                return this.hasFullHp ? this.full_hpfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 8,
                                    this.full_hpfield = e
                            }
                        }]),
                        s
                }(n);
                e("PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C", function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(s)) || this).ret_infofield = void 0,
                            t.win_numsfield = 0,
                            t.hasField0 = 0,
                            t.win_pointfield = 0,
                            t.spiritInfo = [],
                            t.spirit_info_flagfield = 0,
                            t.spiritInfo2 = [],
                            t.left_timefield = 0,
                            t.rank_levelfield = 0,
                            t.left_play_timesfield = 0,
                            t.left_reward_timesfield = 0,
                            t.season_reward_flagfield = 0,
                            t.fight_daysfield = 0,
                            t.next_win_pointfield = 0,
                            t.dayQuest = [],
                            t.show_achivementfield = 0,
                            t.achivementList = [],
                            t.banList = [],
                            t
                    }
                    t(s, e);
                    var n = s.prototype;
                    return n.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        n.removeWinNums = function() {
                            this.hasField0 &= 4294967294,
                                this.win_numsfield = 0
                        }
                        ,
                        n.removeWinPoint = function() {
                            this.hasField0 &= 4294967293,
                                this.win_pointfield = 0
                        }
                        ,
                        n.removeSpiritInfoFlag = function() {
                            this.hasField0 &= 4294967291,
                                this.spirit_info_flagfield = 0
                        }
                        ,
                        n.removeLeftTime = function() {
                            this.hasField0 &= 4294967287,
                                this.left_timefield = 0
                        }
                        ,
                        n.removeRankLevel = function() {
                            this.hasField0 &= 4294967279,
                                this.rank_levelfield = 0
                        }
                        ,
                        n.removeLeftPlayTimes = function() {
                            this.hasField0 &= 4294967263,
                                this.left_play_timesfield = 0
                        }
                        ,
                        n.removeLeftRewardTimes = function() {
                            this.hasField0 &= 4294967231,
                                this.left_reward_timesfield = 0
                        }
                        ,
                        n.removeSeasonRewardFlag = function() {
                            this.hasField0 &= 4294967167,
                                this.season_reward_flagfield = 0
                        }
                        ,
                        n.removeFightDays = function() {
                            this.hasField0 &= 4294967039,
                                this.fight_daysfield = 0
                        }
                        ,
                        n.removeNextWinPoint = function() {
                            this.hasField0 &= 4294966783,
                                this.next_win_pointfield = 0
                        }
                        ,
                        n.removeShowAchivement = function() {
                            this.hasField0 &= 4294966271,
                                this.show_achivementfield = 0
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasRetInfo && (h.writeTag(e, r.LENGTH_DELIMITED, 1),
                                h.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasWinNums && (h.writeTag(e, r.VARINT, 2),
                                h.writeTYPE_UINT32(e, this.win_numsfield)),
                            this.hasWinPoint && (h.writeTag(e, r.VARINT, 3),
                                h.writeTYPE_UINT32(e, this.win_pointfield));
                            for (var t = 0; t < this.spiritInfo.length; ++t)
                                h.writeTag(e, r.LENGTH_DELIMITED, 4),
                                    h.writeTYPE_MESSAGE(e, this.spiritInfo[t]);
                            this.hasSpiritInfoFlag && (h.writeTag(e, r.VARINT, 5),
                                h.writeTYPE_UINT32(e, this.spirit_info_flagfield));
                            for (var i = 0; i < this.spiritInfo2.length; ++i)
                                h.writeTag(e, r.LENGTH_DELIMITED, 6),
                                    h.writeTYPE_MESSAGE(e, this.spiritInfo2[i]);
                            this.hasLeftTime && (h.writeTag(e, r.VARINT, 7),
                                h.writeTYPE_UINT32(e, this.left_timefield)),
                            this.hasRankLevel && (h.writeTag(e, r.VARINT, 8),
                                h.writeTYPE_UINT32(e, this.rank_levelfield)),
                            this.hasLeftPlayTimes && (h.writeTag(e, r.VARINT, 9),
                                h.writeTYPE_UINT32(e, this.left_play_timesfield)),
                            this.hasLeftRewardTimes && (h.writeTag(e, r.VARINT, 10),
                                h.writeTYPE_UINT32(e, this.left_reward_timesfield)),
                            this.hasSeasonRewardFlag && (h.writeTag(e, r.VARINT, 11),
                                h.writeTYPE_UINT32(e, this.season_reward_flagfield)),
                            this.hasFightDays && (h.writeTag(e, r.VARINT, 12),
                                h.writeTYPE_UINT32(e, this.fight_daysfield)),
                            this.hasNextWinPoint && (h.writeTag(e, r.VARINT, 13),
                                h.writeTYPE_UINT32(e, this.next_win_pointfield));
                            for (var s = 0; s < this.dayQuest.length; ++s)
                                h.writeTag(e, r.LENGTH_DELIMITED, 14),
                                    h.writeTYPE_MESSAGE(e, this.dayQuest[s]);
                            this.hasShowAchivement && (h.writeTag(e, r.VARINT, 15),
                                h.writeTYPE_UINT32(e, this.show_achivementfield));
                            for (var a = 0; a < this.achivementList.length; ++a)
                                h.writeTag(e, r.VARINT, 16),
                                    h.writeTYPE_UINT32(e, this.achivementList[a]);
                            for (var n = 0; n < this.banList.length; ++n)
                                h.writeTag(e, r.VARINT, 17),
                                    h.writeTYPE_UINT32(e, this.banList[n])
                        }
                        ,
                        n.readFromSlice = function(e, t) {
                            for (var i = 0, s = 0, n = 0, h = 0, d = 0, _ = 0, u = 0, T = 0, c = 0, w = 0, g = 0, I = 0; e.bytesAvailable > t; ) {
                                var P = a.readTYPE_UINT32(e);
                                switch (P >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new f,
                                            a.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.winNums cannot be set twice.");
                                        ++s,
                                            this.winNums = a.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != n)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.winPoint cannot be set twice.");
                                        ++n,
                                            this.winPoint = a.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        var p = new l;
                                        a.readTYPE_MESSAGE(e, p),
                                            this.spiritInfo.push(p);
                                        break;
                                    case 5:
                                        if (0 != h)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.spiritInfoFlag cannot be set twice.");
                                        ++h,
                                            this.spiritInfoFlag = a.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        var E = new l;
                                        a.readTYPE_MESSAGE(e, E),
                                            this.spiritInfo2.push(E);
                                        break;
                                    case 7:
                                        if (0 != d)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.leftTime cannot be set twice.");
                                        ++d,
                                            this.leftTime = a.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        if (0 != _)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.rankLevel cannot be set twice.");
                                        ++_,
                                            this.rankLevel = a.readTYPE_UINT32(e);
                                        break;
                                    case 9:
                                        if (0 != u)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.leftPlayTimes cannot be set twice.");
                                        ++u,
                                            this.leftPlayTimes = a.readTYPE_UINT32(e);
                                        break;
                                    case 10:
                                        if (0 != T)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.leftRewardTimes cannot be set twice.");
                                        ++T,
                                            this.leftRewardTimes = a.readTYPE_UINT32(e);
                                        break;
                                    case 11:
                                        if (0 != c)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.seasonRewardFlag cannot be set twice.");
                                        ++c,
                                            this.seasonRewardFlag = a.readTYPE_UINT32(e);
                                        break;
                                    case 12:
                                        if (0 != w)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.fightDays cannot be set twice.");
                                        ++w,
                                            this.fightDays = a.readTYPE_UINT32(e);
                                        break;
                                    case 13:
                                        if (0 != g)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.nextWinPoint cannot be set twice.");
                                        ++g,
                                            this.nextWinPoint = a.readTYPE_UINT32(e);
                                        break;
                                    case 14:
                                        var m = new o;
                                        a.readTYPE_MESSAGE(e, m),
                                            this.dayQuest.push(m);
                                        break;
                                    case 15:
                                        if (0 != I)
                                            throw new Error("Bad data format: PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.showAchivement cannot be set twice.");
                                        ++I,
                                            this.showAchivement = a.readTYPE_UINT32(e);
                                        break;
                                    case 16:
                                        if ((7 & P) == r.LENGTH_DELIMITED) {
                                            a.readPackedRepeated(e, a.readTYPE_UINT32, this.achivementList);
                                            break
                                        }
                                        this.achivementList.push(a.readTYPE_UINT32(e));
                                        break;
                                    case 17:
                                        if ((7 & P) == r.LENGTH_DELIMITED) {
                                            a.readPackedRepeated(e, a.readTYPE_UINT32, this.banList);
                                            break
                                        }
                                        this.banList.push(a.readTYPE_UINT32(e));
                                        break;
                                    default:
                                        a.skip(e, 7 & P)
                                }
                            }
                        }
                        ,
                        i(s, [{
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
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
