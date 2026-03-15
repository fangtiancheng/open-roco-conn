System.register("chunks:///_virtual/UserSimpleInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./ByteArray.ts"], (function(e) {
        var i, t, n, s, a, r, h, o;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    a = e.WriteUtils
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    h = e.WireType
                }
                , function(e) {
                    o = e.ByteArray
                }
            ],
            execute: function() {
                n._RF.push({}, "da4adBCNAZHcrUTigWVsEsJ", "UserSimpleInfo", void 0);
                e("UserSimpleInfo", function(e) {
                    function n() {
                        for (var i, t = arguments.length, n = new Array(t), s = 0; s < t; s++)
                            n[s] = arguments[s];
                        return (i = e.call.apply(e, [this].concat(n)) || this).uin$field = void 0,
                            i.hasField$0 = 0,
                            i.name$field = void 0,
                            i.win_nums$field = void 0,
                            i.win_point$field = void 0,
                            i.rank_num$field = void 0,
                            i.medalList = [],
                            i.achivement_num$field = void 0,
                            i.show_achivement$field = void 0,
                            i.rank_level$field = void 0,
                            i
                    }
                    i(n, e);
                    var s = n.prototype;
                    return s.removeUin = function() {
                        this.hasField$0 &= 4294967294,
                            this.uin$field = 0
                    }
                        ,
                        s.removeName = function() {
                            this.name$field = null
                        }
                        ,
                        s.removeWinNums = function() {
                            this.hasField$0 &= 4294967293,
                                this.win_nums$field = 0
                        }
                        ,
                        s.removeWinPoint = function() {
                            this.hasField$0 &= 4294967291,
                                this.win_point$field = 0
                        }
                        ,
                        s.removeRankNum = function() {
                            this.hasField$0 &= 4294967287,
                                this.rank_num$field = 0
                        }
                        ,
                        s.removeAchivementNum = function() {
                            this.hasField$0 &= 4294967279,
                                this.achivement_num$field = 0
                        }
                        ,
                        s.removeShowAchivement = function() {
                            this.hasField$0 &= 4294967263,
                                this.show_achivement$field = 0
                        }
                        ,
                        s.removeRankLevel = function() {
                            this.hasField$0 &= 4294967231,
                                this.rank_level$field = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasUin && (a.writeTag(e, h.VARINT, 1),
                                a.writeTYPE_UINT32(e, this.uin$field)),
                            this.hasName && (a.writeTag(e, h.LENGTH_DELIMITED, 2),
                                a.writeTYPE_BYTES(e, this.name$field)),
                            this.hasWinNums && (a.writeTag(e, h.VARINT, 3),
                                a.writeTYPE_UINT32(e, this.win_nums$field)),
                            this.hasWinPoint && (a.writeTag(e, h.VARINT, 4),
                                a.writeTYPE_UINT32(e, this.win_point$field)),
                            this.hasRankNum && (a.writeTag(e, h.VARINT, 5),
                                a.writeTYPE_UINT32(e, this.rank_num$field));
                            for (var i = 0; i < this.medalList.length; ++i)
                                a.writeTag(e, h.VARINT, 6),
                                    a.writeTYPE_UINT32(e, this.medalList[i]);
                            this.hasAchivementNum && (a.writeTag(e, h.VARINT, 7),
                                a.writeTYPE_UINT32(e, this.achivement_num$field)),
                            this.hasShowAchivement && (a.writeTag(e, h.VARINT, 8),
                                a.writeTYPE_UINT32(e, this.show_achivement$field)),
                            this.hasRankLevel && (a.writeTag(e, h.VARINT, 9),
                                a.writeTYPE_UINT32(e, this.rank_level$field))
                        }
                        ,
                        s.readFromSlice = function(e, i) {
                            for (var t = 0, n = 0, s = 0, a = 0, o = 0, l = 0, f = 0, u = 0; e.bytesAvailable > i; ) {
                                var d = r.readTYPE_UINT32(e);
                                switch (d >>> 3) {
                                    case 1:
                                        if (0 != t)
                                            throw new Error("Bad data format: UserSimpleInfo.uin cannot be set twice.");
                                        ++t,
                                            this.uin = r.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: UserSimpleInfo.name cannot be set twice.");
                                        ++n,
                                            this.name = r.readTYPE_BYTES(e);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new Error("Bad data format: UserSimpleInfo.winNums cannot be set twice.");
                                        ++s,
                                            this.winNums = r.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != a)
                                            throw new Error("Bad data format: UserSimpleInfo.winPoint cannot be set twice.");
                                        ++a,
                                            this.winPoint = r.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != o)
                                            throw new Error("Bad data format: UserSimpleInfo.rankNum cannot be set twice.");
                                        ++o,
                                            this.rankNum = r.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if ((7 & d) == h.LENGTH_DELIMITED) {
                                            r.readPackedRepeated(e, r.readTYPE_UINT32, this.medalList);
                                            break
                                        }
                                        this.medalList.push(r.readTYPE_UINT32(e));
                                        break;
                                    case 7:
                                        if (0 != l)
                                            throw new Error("Bad data format: UserSimpleInfo.achivementNum cannot be set twice.");
                                        ++l,
                                            this.achivementNum = r.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        if (0 != f)
                                            throw new Error("Bad data format: UserSimpleInfo.showAchivement cannot be set twice.");
                                        ++f,
                                            this.showAchivement = r.readTYPE_UINT32(e);
                                        break;
                                    case 9:
                                        if (0 != u)
                                            throw new Error("Bad data format: UserSimpleInfo.rankLevel cannot be set twice.");
                                        ++u,
                                            this.rankLevel = r.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & d)
                                }
                            }
                        }
                        ,
                        t(n, [{
                            key: "hasUin",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "uin",
                            get: function() {
                                return this.hasUin ? this.uin$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.uin$field = e
                            }
                        }, {
                            key: "hasName",
                            get: function() {
                                return null != this.name$field
                            }
                        }, {
                            key: "name",
                            get: function() {
                                return this.hasName ? this.name$field : new o
                            },
                            set: function(e) {
                                this.name$field = e
                            }
                        }, {
                            key: "hasWinNums",
                            get: function() {
                                return 0 != (2 & this.hasField$0)
                            }
                        }, {
                            key: "winNums",
                            get: function() {
                                return this.hasWinNums ? this.win_nums$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 2,
                                    this.win_nums$field = e
                            }
                        }, {
                            key: "hasWinPoint",
                            get: function() {
                                return 0 != (4 & this.hasField$0)
                            }
                        }, {
                            key: "winPoint",
                            get: function() {
                                return this.hasWinPoint ? this.win_point$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 4,
                                    this.win_point$field = e
                            }
                        }, {
                            key: "hasRankNum",
                            get: function() {
                                return 0 != (8 & this.hasField$0)
                            }
                        }, {
                            key: "rankNum",
                            get: function() {
                                return this.hasRankNum ? this.rank_num$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 8,
                                    this.rank_num$field = e
                            }
                        }, {
                            key: "hasAchivementNum",
                            get: function() {
                                return 0 != (16 & this.hasField$0)
                            }
                        }, {
                            key: "achivementNum",
                            get: function() {
                                return this.hasAchivementNum ? this.achivement_num$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 16,
                                    this.achivement_num$field = e
                            }
                        }, {
                            key: "hasShowAchivement",
                            get: function() {
                                return 0 != (32 & this.hasField$0)
                            }
                        }, {
                            key: "showAchivement",
                            get: function() {
                                return this.hasShowAchivement ? this.show_achivement$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 32,
                                    this.show_achivement$field = e
                            }
                        }, {
                            key: "hasRankLevel",
                            get: function() {
                                return 0 != (64 & this.hasField$0)
                            }
                        }, {
                            key: "rankLevel",
                            get: function() {
                                return this.hasRankLevel ? this.rank_level$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 64,
                                    this.rank_level$field = e
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
