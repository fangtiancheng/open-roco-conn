System.register("chunks:///_virtual/PTB_0x0B0669_H5NormalFightQueryPersonalMessage_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./FightSvrProtoRetInfo.ts"], (function(e) {
        var t, i, s, n, a, r, l, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    n = e.ReadUtils
                }
                , function(e) {
                    a = e.BaseMessage
                }
                , function(e) {
                    r = e.WireType
                }
                , function(e) {
                    l = e.WriteUtils
                }
                , function(e) {
                    h = e.FightSvrProto_RetInfo
                }
            ],
            execute: function() {
                s._RF.push({}, "e99b5dUr8VB0qmvZeXWICq6", "PTB_0x0B0669_H5NormalFightQueryPersonalMessage_S2C", void 0);
                var o = function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(s)) || this).pet_idfield = void 0,
                            t.hasField0 = 0,
                            t.pet_levelfield = void 0,
                            t.now_hpfield = void 0,
                            t.full_hpfield = void 0,
                            t.skinfield = void 0,
                            t
                    }
                    t(s, e);
                    var a = s.prototype;
                    return a.removePetId = function() {
                        this.hasField0 &= 4294967294,
                            this.pet_idfield = 0
                    }
                        ,
                        a.removePetLevel = function() {
                            this.hasField0 &= 4294967293,
                                this.pet_levelfield = 0
                        }
                        ,
                        a.removeNowHp = function() {
                            this.hasField0 &= 4294967291,
                                this.now_hpfield = 0
                        }
                        ,
                        a.removeFullHp = function() {
                            this.hasField0 &= 4294967287,
                                this.full_hpfield = 0
                        }
                        ,
                        a.removeSkin = function() {
                            this.hasField0 &= 4294967279,
                                this.skinfield = 0
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasPetId && (l.writeTag(e, r.VARINT, 1),
                                l.writeTYPE_UINT32(e, this.pet_idfield)),
                            this.hasPetLevel && (l.writeTag(e, r.VARINT, 2),
                                l.writeTYPE_UINT32(e, this.pet_levelfield)),
                            this.hasNowHp && (l.writeTag(e, r.VARINT, 3),
                                l.writeTYPE_UINT32(e, this.now_hpfield)),
                            this.hasFullHp && (l.writeTag(e, r.VARINT, 4),
                                l.writeTYPE_UINT32(e, this.full_hpfield)),
                            this.hasSkin && (l.writeTag(e, r.VARINT, 5),
                                l.writeTYPE_UINT32(e, this.skinfield))
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var i = 0, s = 0, a = 0, r = 0, l = 0; e.bytesAvailable > t; ) {
                                var h = n.readTYPE_UINT32(e);
                                switch (h >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: SpiritInfo.petId cannot be set twice.");
                                        ++i,
                                            this.petId = n.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: SpiritInfo.petLevel cannot be set twice.");
                                        ++s,
                                            this.petLevel = n.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != a)
                                            throw new Error("Bad data format: SpiritInfo.nowHp cannot be set twice.");
                                        ++a,
                                            this.nowHp = n.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != r)
                                            throw new Error("Bad data format: SpiritInfo.fullHp cannot be set twice.");
                                        ++r,
                                            this.fullHp = n.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != l)
                                            throw new Error("Bad data format: SpiritInfo.skin cannot be set twice.");
                                        ++l,
                                            this.skin = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & h)
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
                        }, {
                            key: "hasSkin",
                            get: function() {
                                return 0 != (16 & this.hasField0)
                            }
                        }, {
                            key: "skin",
                            get: function() {
                                return this.hasSkin ? this.skinfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 16,
                                    this.skinfield = e
                            }
                        }]),
                        s
                }(a);
                e("PTB_0x0B0519_LadderFightMatchResult_S2C", function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(s)) || this).ret_infofield = void 0,
                            t.spiritInfo = [],
                            t.day_winfield = void 0,
                            t.hasField0 = 0,
                            t.day_numsfield = void 0,
                            t.all_winfield = void 0,
                            t.all_numsfield = void 0,
                            t
                    }
                    t(s, e);
                    var a = s.prototype;
                    return a.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        a.removeDayWin = function() {
                            this.hasField0 &= 4294967294,
                                this.day_winfield = 0
                        }
                        ,
                        a.removeDayNums = function() {
                            this.hasField0 &= 4294967293,
                                this.day_numsfield = 0
                        }
                        ,
                        a.removeAllWin = function() {
                            this.hasField0 &= 4294967291,
                                this.all_winfield = 0
                        }
                        ,
                        a.removeAllNums = function() {
                            this.hasField0 &= 4294967287,
                                this.all_numsfield = 0
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasRetInfo && (l.writeTag(e, r.LENGTH_DELIMITED, 1),
                                l.writeTYPE_MESSAGE(e, this.ret_infofield));
                            for (var t = 0; t < this.spiritInfo.length; ++t)
                                l.writeTag(e, r.LENGTH_DELIMITED, 2),
                                    l.writeTYPE_MESSAGE(e, this.spiritInfo[t]);
                            this.hasDayWin && (l.writeTag(e, r.VARINT, 3),
                                l.writeTYPE_UINT32(e, this.day_winfield)),
                            this.hasDayNums && (l.writeTag(e, r.VARINT, 4),
                                l.writeTYPE_UINT32(e, this.day_numsfield)),
                            this.hasAllWin && (l.writeTag(e, r.VARINT, 5),
                                l.writeTYPE_UINT32(e, this.all_winfield)),
                            this.hasAllNums && (l.writeTag(e, r.VARINT, 6),
                                l.writeTYPE_UINT32(e, this.all_numsfield))
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var i = 0, s = 0, a = 0, r = 0, l = 0; e.bytesAvailable > t; ) {
                                var f = n.readTYPE_UINT32(e);
                                switch (f >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0669_H5NormalFightQueryPersonalMessage_S2C.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new h,
                                            n.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        var d = new o;
                                        n.readTYPE_MESSAGE(e, d),
                                            this.spiritInfo.push(d);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0669_H5NormalFightQueryPersonalMessage_S2C.dayWin cannot be set twice.");
                                        ++s,
                                            this.dayWin = n.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != a)
                                            throw new Error("Bad data format: PTB_0x0B0669_H5NormalFightQueryPersonalMessage_S2C.dayNums cannot be set twice.");
                                        ++a,
                                            this.dayNums = n.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != r)
                                            throw new Error("Bad data format: PTB_0x0B0669_H5NormalFightQueryPersonalMessage_S2C.allWin cannot be set twice.");
                                        ++r,
                                            this.allWin = n.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if (0 != l)
                                            throw new Error("Bad data format: PTB_0x0B0669_H5NormalFightQueryPersonalMessage_S2C.allNums cannot be set twice.");
                                        ++l,
                                            this.allNums = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & f)
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
                            key: "hasDayWin",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "dayWin",
                            get: function() {
                                return this.day_winfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.day_winfield = e
                            }
                        }, {
                            key: "hasDayNums",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "dayNums",
                            get: function() {
                                return this.day_numsfield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.day_numsfield = e
                            }
                        }, {
                            key: "hasAllWin",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "allWin",
                            get: function() {
                                return this.all_winfield
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.all_winfield = e
                            }
                        }, {
                            key: "hasAllNums",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "allNums",
                            get: function() {
                                return this.all_numsfield
                            },
                            set: function(e) {
                                this.hasField0 |= 8,
                                    this.all_numsfield = e
                            }
                        }]),
                        s
                }(a));
                s._RF.pop()
            }
        }
    }
));
