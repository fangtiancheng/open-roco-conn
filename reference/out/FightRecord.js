System.register("chunks:///_virtual/FightRecord.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts"], (function(t) {
        var e, i, r, s, n, o, h;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    s = t.BaseMessage
                }
                , function(t) {
                    n = t.WriteUtils
                }
                , function(t) {
                    o = t.ReadUtils
                }
                , function(t) {
                    h = t.WireType
                }
            ],
            execute: function() {
                r._RF.push({}, "ac855h300tEyLbhrldwWra9", "FightRecord", void 0);
                t("FightRecord", function(t) {
                    function r() {
                        for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(r)) || this).winfield = void 0,
                            e.hasField0 = 0,
                            e.scorefield = void 0,
                            e.roundfield = void 0,
                            e.my_pointfield = void 0,
                            e.other_pointfield = void 0,
                            e.mySpirit = [],
                            e.otherSpirit = [],
                            e.ftypefield = void 0,
                            e
                    }
                    e(r, t);
                    var s = r.prototype;
                    return s.removeWin = function() {
                        this.hasField0 &= 4294967294,
                            this.winfield = 0
                    }
                        ,
                        s.removeScore = function() {
                            this.hasField0 &= 4294967293,
                                this.scorefield = 0
                        }
                        ,
                        s.removeRound = function() {
                            this.hasField0 &= 4294967291,
                                this.roundfield = 0
                        }
                        ,
                        s.removeMyPoint = function() {
                            this.hasField0 &= 4294967287,
                                this.my_pointfield = 0
                        }
                        ,
                        s.removeOtherPoint = function() {
                            this.hasField0 &= 4294967279,
                                this.other_pointfield = 0
                        }
                        ,
                        s.removeFtype = function() {
                            this.hasField0 &= 4294967263,
                                this.ftypefield = 0
                        }
                        ,
                        s.writeToBuffer = function(t) {
                            this.hasWin && (n.writeTag(t, h.VARINT, 1),
                                n.writeTYPE_UINT32(t, this.winfield)),
                            this.hasScore && (n.writeTag(t, h.VARINT, 2),
                                n.writeTYPE_UINT32(t, this.scorefield)),
                            this.hasRound && (n.writeTag(t, h.VARINT, 3),
                                n.writeTYPE_UINT32(t, this.roundfield)),
                            this.hasMyPoint && (n.writeTag(t, h.VARINT, 4),
                                n.writeTYPE_UINT32(t, this.my_pointfield)),
                            this.hasOtherPoint && (n.writeTag(t, h.VARINT, 5),
                                n.writeTYPE_UINT32(t, this.other_pointfield));
                            for (var e = 0; e < this.mySpirit.length; ++e)
                                n.writeTag(t, h.VARINT, 6),
                                    n.writeTYPE_UINT32(t, this.mySpirit[e]);
                            for (var i = 0; i < this.otherSpirit.length; ++i)
                                n.writeTag(t, h.VARINT, 7),
                                    n.writeTYPE_UINT32(t, this.otherSpirit[i]);
                            this.hasFtype && (n.writeTag(t, h.VARINT, 8),
                                n.writeTYPE_UINT32(t, this.ftypefield))
                        }
                        ,
                        s.readFromSlice = function(t, e) {
                            for (var i = 0, r = 0, s = 0, n = 0, a = 0, d = 0; t.bytesAvailable > e; ) {
                                var f = o.readTYPE_UINT32(t);
                                switch (f >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: FightRecord.win cannot be set twice.");
                                        ++i,
                                            this.win = o.readTYPE_UINT32(t);
                                        break;
                                    case 2:
                                        if (0 != r)
                                            throw new Error("Bad data format: FightRecord.score cannot be set twice.");
                                        ++r,
                                            this.score = o.readTYPE_UINT32(t);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new Error("Bad data format: FightRecord.round cannot be set twice.");
                                        ++s,
                                            this.round = o.readTYPE_UINT32(t);
                                        break;
                                    case 4:
                                        if (0 != n)
                                            throw new Error("Bad data format: FightRecord.myPoint cannot be set twice.");
                                        ++n,
                                            this.myPoint = o.readTYPE_UINT32(t);
                                        break;
                                    case 5:
                                        if (0 != a)
                                            throw new Error("Bad data format: FightRecord.otherPoint cannot be set twice.");
                                        ++a,
                                            this.otherPoint = o.readTYPE_UINT32(t);
                                        break;
                                    case 6:
                                        if ((7 & f) == h.LENGTH_DELIMITED) {
                                            o.readPackedRepeated(t, o.readTYPE_UINT32, this.mySpirit);
                                            break
                                        }
                                        this.mySpirit.push(o.readTYPE_UINT32(t));
                                        break;
                                    case 7:
                                        if ((7 & f) == h.LENGTH_DELIMITED) {
                                            o.readPackedRepeated(t, o.readTYPE_UINT32, this.otherSpirit);
                                            break
                                        }
                                        this.otherSpirit.push(o.readTYPE_UINT32(t));
                                        break;
                                    case 8:
                                        if (0 != d)
                                            throw new Error("Bad data format: FightRecord.ftype cannot be set twice.");
                                        ++d,
                                            this.ftype = o.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        o.skip(t, 7 & f)
                                }
                            }
                        }
                        ,
                        i(r, [{
                            key: "hasWin",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "win",
                            get: function() {
                                return this.hasWin ? this.winfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.winfield = t
                            }
                        }, {
                            key: "hasScore",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "score",
                            get: function() {
                                return this.hasScore ? this.scorefield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 2,
                                    this.scorefield = t
                            }
                        }, {
                            key: "hasRound",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "round",
                            get: function() {
                                return this.hasRound ? this.roundfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 4,
                                    this.roundfield = t
                            }
                        }, {
                            key: "hasMyPoint",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "myPoint",
                            get: function() {
                                return this.hasMyPoint ? this.my_pointfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 8,
                                    this.my_pointfield = t
                            }
                        }, {
                            key: "hasOtherPoint",
                            get: function() {
                                return 0 != (16 & this.hasField0)
                            }
                        }, {
                            key: "otherPoint",
                            get: function() {
                                return this.hasOtherPoint ? this.other_pointfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 16,
                                    this.other_pointfield = t
                            }
                        }, {
                            key: "hasFtype",
                            get: function() {
                                return 0 != (32 & this.hasField0)
                            }
                        }, {
                            key: "ftype",
                            get: function() {
                                return this.ftypefield
                            },
                            set: function(t) {
                                this.hasField0 |= 32,
                                    this.ftypefield = t
                            }
                        }]),
                        r
                }(s));
                r._RF.pop()
            }
        }
    }
));
